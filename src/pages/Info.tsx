import { motion } from "motion/react";
import { Link } from "react-router-dom";
import FallingPetals from "../components/FallingPetals";
import floralDivider from "../assets/floral-divider.svg";
import iconDetails from "../assets/icon-details.svg";

const blocks = [
  {
    title: "Date & Time",
    body: "Saturday, September 26, 2026 at 5:30 PM.",
  },
  {
    title: "Venue",
    body: "The Conservatory Hall, 128 Willow Lane, Portland.",
  },
  {
    title: "Dress Note",
    body: "Cocktail attire in jewel or earthy tones to match the floral palette.",
  },
];

const Info: React.FC = () => {
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
        <img src={iconDetails} alt="" aria-hidden="true" className="h-8 w-8" />
        <p className="mt-3 font-['Manrope'] text-xs uppercase tracking-[0.3em] text-[#7c1f31]/75">
          Event Information
        </p>
        <h1 className="mt-2 text-5xl text-[#612130] md:text-6xl">Details</h1>
        <img src={floralDivider} alt="" aria-hidden="true" className="mt-3 w-56" />

        <div className="mt-6 space-y-4">
          {blocks.map((block, index) => (
            <motion.section
              key={block.title}
              className="rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
            >
              <h2 className="text-3xl text-[#612130]">{block.title}</h2>
              <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/72">{block.body}</p>
            </motion.section>
          ))}
        </div>

        <Link
          to="/home"
          className="mt-7 inline-block rounded-full border border-[#7c1f31]/35 bg-[#7c1f31] px-6 py-2 font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#f9f3eb] transition hover:bg-[#9b2a3f]"
        >
          Back Home
        </Link>
      </motion.main>
    </div>
  );
};

export default Info;
