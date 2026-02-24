import { motion } from "motion/react";
import { Link } from "react-router-dom";
import floralDivider from "../assets/floral-divider.svg";
import iconFaq from "../assets/icon-faq.svg";

const faqs = [
  {
    q: "What time does the celebration begin?",
    a: "Guest arrival starts at 5:00 PM, with the ceremony beginning at 5:30 PM.",
  },
  {
    q: "Can I bring a plus one?",
    a: "Yes. Add your guest in the RSVP form so we can prepare seating.",
  },
  {
    q: "Is parking available?",
    a: "Complimentary valet service will be available at the venue entrance.",
  },
  {
    q: "Will there be vegetarian options?",
    a: "Yes. Share dietary requests in RSVP and we will accommodate them.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10">
      <div className="ornament-bg" />
      <div className="romantic-ring left-[-4rem] top-16 h-44 w-44" />
      <div className="romantic-ring bottom-12 right-[-3rem] h-56 w-56" />

      <motion.main
        className="paper-panel mx-auto w-full max-w-4xl p-7 md:p-9"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src={iconFaq} alt="" aria-hidden="true" className="h-8 w-8" />
        <p className="mt-3 font-['Manrope'] text-xs uppercase tracking-[0.3em] text-[#7c1f31]/75">FAQ</p>
        <h1 className="mt-2 text-5xl text-[#612130] md:text-6xl">Questions</h1>
        <img src={floralDivider} alt="" aria-hidden="true" className="mt-3 w-56" />

        <div className="mt-6 space-y-3">
          {faqs.map((item, i) => (
            <motion.section
              key={item.q}
              className="rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * i, duration: 0.45 }}
            >
              <h2 className="text-2xl text-[#612130]">{item.q}</h2>
              <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/72">{item.a}</p>
            </motion.section>
          ))}
        </div>

        <Link
          to="/home"
          className="mt-7 inline-block rounded-full border border-[#7c1f31]/35 px-6 py-2 font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#612130] transition hover:bg-white/60"
        >
          Back Home
        </Link>
      </motion.main>
    </div>
  );
};

export default FAQ;
