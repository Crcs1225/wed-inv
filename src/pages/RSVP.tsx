import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import FallingPetals from "../components/FallingPetals";
import { clientInfo } from "../data/clientInfo";

const floralDivider = "/assets/floral-divider.svg";
const iconRsvp = "/assets/icon-rsvp.svg";

const APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_ENDPOINT?.trim() ?? "";

const extractDateText = (value: string) => value.match(/[A-Za-z]+\s+\d{1,2},\s+\d{4}/)?.[0] ?? value;

const buildEndOfDayDate = (value: string) => {
  const parsed = new Date(`${extractDateText(value)} 23:59:59`);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed;
};

const getCountdownParts = (targetDate: Date, now: number) => {
  const difference = targetDate.getTime() - now;

  if (difference <= 0) {
    return {
      isExpired: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    isExpired: false,
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
};

type FormState = {
  fullName: string;
  attendance: "coming" | "not-coming" | "undecided";
  note: string;
};

const initialFormState: FormState = {
  fullName: "",
  attendance: "coming",
  note: "",
};

const createSubmissionId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `rsvp-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const RSVP: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitMessageKind, setSubmitMessageKind] = useState<"success" | "warning">("success");
  const [submitError, setSubmitError] = useState("");
  const [countdownNow, setCountdownNow] = useState(() => Date.now());
  const rsvpCutoffDate = buildEndOfDayDate(clientInfo.rsvp.cutoffDate);
  const rsvpCountdown = rsvpCutoffDate ? getCountdownParts(rsvpCutoffDate, countdownNow) : null;
  const isRsvpClosed = rsvpCountdown?.isExpired ?? false;

  const attendanceLabels: Record<FormState["attendance"], string> = {
    coming: "Coming",
    "not-coming": "Not coming",
    undecided: "Undecided",
  };

  const attendanceStatuses: Record<FormState["attendance"], string> = {
    coming: "ATTENDING",
    "not-coming": "DECLINED",
    undecided: "UNDECIDED",
  };

  useEffect(() => {
    if (!rsvpCutoffDate) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCountdownNow(Date.now());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [rsvpCutoffDate]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
    setSubmitMessage("");
    setSubmitMessageKind("success");
    setSubmitError("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage("");
    setSubmitMessageKind("success");
    setSubmitError("");

    setIsSubmitting(true);

    try {
      const trimmedName = formState.fullName.trim();
      const trimmedNote = formState.note.trim();
      const attendanceLabel = attendanceLabels[formState.attendance];
      const rsvpStatus = attendanceStatuses[formState.attendance];
      const submissionId = createSubmissionId();

      if (!APPS_SCRIPT_URL) {
        throw new Error("RSVP submission is not configured yet.");
      }

      if (!trimmedName) {
        throw new Error("Enter your full name before sending your RSVP.");
      }

      const requestBody = new URLSearchParams({
        fullName: trimmedName,
        full_name: trimmedName,
        primaryName: trimmedName,
        primary_name: trimmedName,
        attendance: attendanceLabel,
        attendance_value: formState.attendance,
        rsvp: rsvpStatus,
        rsvp_status: rsvpStatus,
        note: trimmedNote,
        notes: trimmedNote,
        message: trimmedNote,
        submission_id: submissionId,
        source: "website",
        submitted_at: new Date().toISOString(),
      });

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: requestBody.toString(),
      });

      if (response.type === "opaque") {
        setSubmitMessageKind("warning");
        setSubmitMessage(
          "Thank you. Your RSVP has been received.",
        );
        setFormState(initialFormState);
      } else if (response.ok) {
        setSubmitMessageKind("success");
        setSubmitMessage(`${trimmedName} was saved as ${attendanceLabel.toLowerCase()}.`);
        setFormState(initialFormState);
      } else {
        throw new Error("The RSVP service rejected this request.");
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to submit RSVP right now.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10">
      <div className="ornament-bg" />
      <FallingPetals />
      <div className="romantic-ring -left-16 top-16 h-44 w-44" />
      <div className="romantic-ring bottom-12 -right-12 h-56 w-56" />

      <motion.main
        className="paper-panel mx-auto w-full max-w-4xl p-7 md:p-9"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src={iconRsvp} alt="" aria-hidden="true" className="h-8 w-8" />
        <p className="mt-3 font-['Manrope'] text-xs uppercase tracking-[0.3em] text-[#7c1f31]/75">
          RSVP
        </p>
        <h1 className="mt-2 text-5xl text-[#612130] md:text-6xl">Reserve Your Seat</h1>
        <img src={floralDivider} alt="" aria-hidden="true" className="mt-3 w-56" />

        {!isRsvpClosed ? (
          <>
            <p className="mt-4 max-w-2xl font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
              As much as we would love to celebrate with everyone, our wedding will be an intimate
              gathering.
              <br />
              We kindly ask our guests not to bring additional companions. Thank you for
              understanding.
            </p>
            <form className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
              <input
                required
                name="fullName"
                type="text"
                value={formState.fullName}
                onChange={handleChange}
                placeholder="Full name"
                className="rounded-xl border border-[#7c1f31]/25 bg-white/88 px-4 py-3 font-['Manrope'] text-sm text-[#612130] outline-none placeholder:text-[#612130]/40 focus:border-[#9b2a3f]"
              />
              <select
                name="attendance"
                value={formState.attendance}
                onChange={handleChange}
                className="appearance-none rounded-xl border border-[#7c1f31]/25 bg-white/88 px-4 py-3 font-['Manrope'] text-sm text-[#612130] outline-none focus:border-[#9b2a3f]"
              >
                <option value="coming">Coming</option>
                <option value="not-coming">Not coming</option>
                <option value="undecided">Undecided</option>
              </select>
              <textarea
                name="note"
                value={formState.note}
                onChange={handleChange}
                placeholder="Note (optional)"
                rows={4}
                className="rounded-2xl border border-[#7c1f31]/25 bg-white/88 px-4 py-3 font-['Manrope'] text-sm text-[#612130] outline-none placeholder:text-[#612130]/40 focus:border-[#9b2a3f] md:col-span-2"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="md:col-span-2 rounded-xl border border-[#7c1f31]/45 bg-[#7c1f31] px-5 py-3 font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#f9f3eb] transition hover:bg-[#9b2a3f] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send RSVP"}
              </button>
            </form>

            {submitMessage ? (
              <p
                className={`mt-4 font-['Manrope'] text-sm ${
                  submitMessageKind === "warning" ? "text-amber-700" : "text-emerald-700"
                }`}
              >
                {submitMessage}
              </p>
            ) : null}
            {submitError ? (
              <p className="mt-4 font-['Manrope'] text-sm text-[#9b2a3f]">{submitError}</p>
            ) : null}
          </>
        ) : null}

        <section className="mt-6 border-t border-[#7c1f31]/12 pt-6 text-center">
          <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">RSVP Response</p>
          <img src={floralDivider} alt="" aria-hidden="true" className="mx-auto mt-4 w-44 opacity-80" />
          <p className="mx-auto mt-4 max-w-3xl font-['Manrope'] text-sm text-[#612130]/66 md:text-base">
            The favor of your response is requested {clientInfo.rsvp.cutoffDate}.<br />
            Please RSVP through {clientInfo.rsvp.contactMethod} or contact us through SMS at {" "}
            <span className="font-semibold text-[#7c1f31]">{clientInfo.rsvp.contactNumber}</span>.
          </p>
          {rsvpCountdown ? (
            <div className="mx-auto mt-5 max-w-3xl">
              <p className="text-center font-['Manrope'] text-[11px] uppercase tracking-[0.24em] text-[#7c1f31]/72">
                {rsvpCountdown.isExpired ? "RSVP Attendance Complete" : `Countdown to ${extractDateText(clientInfo.rsvp.cutoffDate)}`}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-4 sm:gap-x-8">
                {[
                  { label: "Days", value: rsvpCountdown.days },
                  { label: "Hours", value: rsvpCountdown.hours },
                  { label: "Minutes", value: rsvpCountdown.minutes },
                  { label: "Seconds", value: rsvpCountdown.seconds },
                ].map((unit) => (
                  <div key={unit.label} className="min-w-16 text-center sm:min-w-20">
                    <p className="text-[clamp(1.7rem,5vw,2.5rem)] font-light leading-none tabular-nums text-[#612130]">
                      {String(unit.value).padStart(2, "0")}
                    </p>
                    <p className="mt-1 font-['Manrope'] text-[10px] uppercase tracking-[0.24em] text-[#7c1f31]/72 sm:text-xs sm:tracking-[0.3em]">
                      {unit.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        <Link
          to="/home"
          className="mt-6 inline-block rounded-full border border-[#7c1f31]/35 px-6 py-2 font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#612130] transition hover:bg-white/60"
        >
          Back Home
        </Link>
      </motion.main>
    </div>
  );
};

export default RSVP;
