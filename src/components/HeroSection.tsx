import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { FloralCorner, FloralDivider, FloralRings } from "./FloralDecoration";

type CountdownTimerProps = {
  targetDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type FloralCornerConfig = {
  className: string;
  flip?: boolean;
  rotatePattern: number[];
  duration: number;
  delay: number;
};

const EMPTY_TIME: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const floralCorners: FloralCornerConfig[] = [
  {
    className:
      "absolute hidden top-[-8.5%] left-[-4.5%] xl:scale-[1.1] 2lg:top-[-6.5%] 2lg:left-[-4.5%] lg:block",
    rotatePattern: [0, 2, 0, -2, 0],
    duration: 12,
    delay: 0,
  },
  {
    className:
      "absolute hidden top-[-8.5%] right-[-4.5%] xl:scale-[1.1] 2lg:top-[-6.5%] 2lg:right-[-4.5%] lg:block",
    flip: true,
    rotatePattern: [0, -2, 0, 2, 0],
    duration: 14,
    delay: 1.2,
  },
  {
    className:
      "absolute hidden bottom-[-8.5%] left-[-4.5%] rotate-180 xl:scale-[1.1] 2lg:bottom-[-6.5%] 2lg:left-[-4.5%] lg:block",
    flip: true,
    rotatePattern: [0, 2, 0, -2, 0],
    duration: 13.5,
    delay: 2.5,
  },
  {
    className:
      "absolute hidden bottom-[-8.5%] right-[-4.5%] rotate-180 xl:scale-[1.1] 2lg:bottom-[-6.5%] 2lg:right-[-4.5%] lg:block",
    rotatePattern: [0, -2, 0, 2, 0],
    duration: 11.5,
    delay: 0.8,
  },
];

const getTimeLeft = (targetDate: string): TimeLeft => {
  const now = Date.now();
  const target = new Date(targetDate).getTime();
  const diff = target - now;

  if (diff <= 0 || Number.isNaN(target)) {
    return EMPTY_TIME;
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  const units = useMemo(
    () => [
      { label: "Days", value: timeLeft.days },
      { label: "Hours", value: timeLeft.hours },
      { label: "Minutes", value: timeLeft.minutes },
      { label: "Seconds", value: timeLeft.seconds },
    ],
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
  );

  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 sm:gap-x-8">
      {units.map((unit) => (
        <div key={unit.label} className="min-w-16 text-center sm:min-w-20">
          <div className="text-[clamp(1.7rem,5vw,2.5rem)] font-light tabular-nums text-[#f5e6d0]">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="mt-1 font-['Manrope'] text-[10px] uppercase tracking-[0.24em] text-[#d4a853]/70 sm:text-xs sm:tracking-[0.3em]">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="hero-shell relative isolate flex items-center justify-center overflow-hidden"
    >
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay absolute inset-0" />

      {floralCorners.map((corner, index) => (
        <FloralCorner
          key={index}
          className={corner.className}
          flip={corner.flip}
          rotatePattern={corner.rotatePattern}
          duration={corner.duration}
          delay={corner.delay}
        />
      ))}

      <motion.div
        className="scale-[1] lg:scale-[0.66] 2lg:scale-[0.9] xl:scale-[0.8] 2xl:scale-[1] mt-10 relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-2 py-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <div className="relative mb-12 flex justify-center md:mb-20">
          <FloralRings className="-top-16 md:-top-36 lg:-top-16" />
          <motion.p
            className="relative z-10 font-['Manrope'] text-[11px] uppercase tracking-[0.32em] text-[#d4a853]/75 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We&apos;re Getting Married
          </motion.p>
        </div>

        <motion.h1
          className="-mb-5 text-[clamp(3.3rem,16vw,6rem)] leading-[0.92] text-[#f5e6d0]"
          style={{ fontFamily: "'Amoresa Aged', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Ron
        </motion.h1>

        <motion.div
          className="m-8 text-[clamp(1.8rem,6vw,3rem)] text-[#d4a853]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          &
        </motion.div>

        <motion.h1
          className="mb-6 text-[clamp(3.3rem,16vw,7rem)] leading-[0.92] text-[#f5e6d0] sm:mb-8"
          style={{ fontFamily: "'Amoresa Aged', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Mikkie
        </motion.h1>

        <motion.div
          className="mx-auto mb-6 w-48 sm:mb-8 sm:w-64 md:w-72"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <FloralDivider />
        </motion.div>

        <motion.p
          className="mb-2 text-[clamp(1rem,3.2vw,1.35rem)] tracking-[0.12em] text-[#f5e6d0]/85 sm:tracking-[0.15em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Friday, May 22nd, 2026 • 2:00 PM
        </motion.p>

        <motion.p
          className="mb-10 max-w-xl font-['Manrope'] text-xs tracking-[0.18em] text-[#d4a853]/65 sm:mb-12 sm:text-sm sm:tracking-[0.2em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          P. Gregorio Street • Valenzuela
        </motion.p>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <CountdownTimer targetDate="2026-05-22T14:00:00+08:00" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 justify-center md:bottom-10 lg:bottom-3"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex h-8 w-5 justify-center rounded-full border border-[#d4a853]/35 pt-1.5 md:scale-[1.5] lg:hidden">
          <div className="h-2 w-1 rounded-full bg-[#d4a853]/55" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
