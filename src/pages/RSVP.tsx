import { motion } from "motion/react";
import { Link } from "react-router-dom";
import floralDivider from "../assets/floral-divider.svg";
import iconRsvp from "../assets/icon-rsvp.svg";

const RSVP: React.FC = () => {
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
        <img src={iconRsvp} alt="" aria-hidden="true" className="h-8 w-8" />
        <p className="mt-3 font-['Manrope'] text-xs uppercase tracking-[0.3em] text-[#7c1f31]/75">RSVP</p>
        <h1 className="mt-2 text-5xl text-[#612130] md:text-6xl">Reserve Your Seat</h1>
        <img src={floralDivider} alt="" aria-hidden="true" className="mt-3 w-56" />

        <p className="mt-4 max-w-2xl font-['Manrope'] text-sm leading-relaxed text-[#612130]/74 md:text-base">
          Kindly confirm attendance by September 3, 2026. Let us know guest count and any
          dietary notes so we can prepare your evening beautifully.
        </p>

        <form className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your full name"
            className="rounded-xl border border-[#7c1f31]/25 bg-white/88 px-4 py-3 font-['Manrope'] text-sm text-[#612130] outline-none placeholder:text-[#612130]/40 focus:border-[#9b2a3f]"
          />
          <input
            type="email"
            placeholder="Email address"
            className="rounded-xl border border-[#7c1f31]/25 bg-white/88 px-4 py-3 font-['Manrope'] text-sm text-[#612130] outline-none placeholder:text-[#612130]/40 focus:border-[#9b2a3f]"
          />
          <input
            type="text"
            placeholder="Number of guests"
            className="rounded-xl border border-[#7c1f31]/25 bg-white/88 px-4 py-3 font-['Manrope'] text-sm text-[#612130] outline-none placeholder:text-[#612130]/40 focus:border-[#9b2a3f]"
          />
          <input
            type="text"
            placeholder="Dietary notes"
            className="rounded-xl border border-[#7c1f31]/25 bg-white/88 px-4 py-3 font-['Manrope'] text-sm text-[#612130] outline-none placeholder:text-[#612130]/40 focus:border-[#9b2a3f]"
          />
          <button
            type="button"
            className="md:col-span-2 rounded-xl border border-[#7c1f31]/45 bg-[#7c1f31] px-5 py-3 font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#f9f3eb] transition hover:bg-[#9b2a3f]"
          >
            Send RSVP
          </button>
        </form>

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
