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
      "absolute left-[-2%] top-[-1%] lg:left-[-2%] lg:top-[-5%] hidden lg:block",
    rotatePattern: [0, 2, 0, -2, 0],
    duration: 12,
    delay: 0,
  },
  {
    className:
      "absolute right-[-2%] top-[-1%] lg:right-[-2%] lg:top-[-5%] hidden lg:block",
    flip: true,
    rotatePattern: [0, -2, 0, 2, 0],
    duration: 14,
    delay: 1.2,
  },
  {
    className:
      "absolute bottom-[-1%] left-[-2%] lg:bottom-[-5%] lg:left-[-2%] rotate-180 hidden lg:block",
    flip: true,
    rotatePattern: [0, 2, 0, -2, 0],
    duration: 13.5,
    delay: 2.5,
  },
  {
    className:
      "absolute bottom-[-1%] right-[-2%] lg:bottom-[-5%] lg:right-[-2%] rotate-180 hidden lg:block",
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
    <div className="flex justify-center gap-4 sm:gap-8">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="text-2xl font-light tabular-nums text-[#f5e6d0] sm:text-4xl">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="mt-1 font-['Manrope'] text-[10px] uppercase tracking-[0.3em] text-[#d4a853]/70 sm:text-xs">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(60,7,8,0.85) 0%, rgba(123,17,19,0.72) 42%, rgba(60,7,8,0.9) 100%)",
        }}
      />

      <FloralRings />

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
        className="relative z-10 px-6 py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <motion.p
          className="mb-8 font-['Manrope'] text-xs uppercase tracking-[0.5em] text-[#d4a853]/75 sm:text-sm md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We&apos;re Getting Married
        </motion.p>

        <motion.h1
          className="mb-3 text-5xl text-[#f5e6d0] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Amoresa Aged', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Ron
        </motion.h1>

        <motion.div
          className="my-3 text-2xl text-[#d4a853] sm:text-3xl md:my-5 lg:my-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          &
        </motion.div>

        <motion.h1
          className="mb-8 text-5xl text-[#f5e6d0] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Amoresa Aged', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Mikkie
        </motion.h1>

        <motion.div
          className="mx-auto mb-8 w-56 sm:w-72"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <FloralDivider />
        </motion.div>

        <motion.p
          className="mb-2 text-lg tracking-[0.15em] text-[#f5e6d0]/85 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Friday, May 22nd, 2026 • 2:00 PM
        </motion.p>

        <motion.p
          className="mb-12 font-['Manrope'] text-sm tracking-[0.2em] text-[#d4a853]/65"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          P. Gregorio Street • Valenzuela
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <CountdownTimer targetDate="2026-05-22T14:00:00+08:00" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute justify-center bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex h-8 w-5 justify-center rounded-full border border-[#d4a853]/35 pt-1.5">
          <div className="h-2 w-1 rounded-full bg-[#d4a853]/55" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
