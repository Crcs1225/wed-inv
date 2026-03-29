import { motion } from "motion/react";
import { Link } from "react-router-dom";
import FallingPetals from "../components/FallingPetals";
import floralDivider from "../assets/floral-divider.svg";
import personIcon from "../assets/icon-person.svg";
import { clientInfo } from "../data/clientInfo";

const Entourage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10">
      <div className="ornament-bg" />
      <FallingPetals />
      <div className="romantic-ring -left-16 top-16 h-44 w-44" />
      <div className="romantic-ring bottom-12 -right-12 h-56 w-56" />

      <motion.main
        className="paper-panel mx-auto w-full max-w-5xl p-7 text-center md:p-9"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src={personIcon} alt="" aria-hidden="true" className="mx-auto h-8 w-8" />
        <p className="mt-3 font-['Manrope'] text-xs uppercase tracking-[0.3em] text-[#7c1f31]/75">
          San Roque - Gueco
        </p>
        <h1 className="mt-2 text-5xl text-[#612130] md:text-6xl">The Entourage</h1>
        <img src={floralDivider} alt="" aria-hidden="true" className="mx-auto mt-3 w-64" />

        {/* Parents Section */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.section
            className="rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 text-center shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
          >
            <h2 className="text-3xl text-[#612130]">Parents of the Groom</h2>
            <div className="mt-3 space-y-1">
              {clientInfo.parents.groom.map((parent, index) => (
                <p key={index} className="font-['Manrope'] text-sm text-[#612130]/80">
                  {parent}
                </p>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 text-center shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
          >
            <h2 className="text-3xl text-[#612130]">Parents of the Bride</h2>
            <div className="mt-3 space-y-1">
              {clientInfo.parents.bride.map((parent, index) => (
                <p key={index} className="font-['Manrope'] text-sm text-[#612130]/80">
                  {parent}
                </p>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Principal Sponsors */}
        <motion.section
          className="mt-6 rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 text-center shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 240, damping: 20 }}
        >
          <h2 className="text-3xl text-[#612130]">Principal Sponsors</h2>
          <div className="mt-3">
            <div className="space-y-1">
              {clientInfo.principalSponsors.map((sponsor, index) => (
                <div key={index} className="grid grid-cols-1 items-center gap-3 px-4 py-2 text-center md:grid-cols-2">
                  <p className="font-['Manrope'] text-sm text-[#612130]/80">{sponsor.name}</p>
                  <p className="font-['Manrope'] text-sm text-[#612130]/80">{sponsor.partneredWith}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Wedding Party - Two Columns */}
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          {/* Section 1: Best Man & Groomsmen */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <motion.div
              className="rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 text-center shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <h2 className="text-3xl text-[#612130]">Best Man</h2>
              <p className="mt-3 font-['Manrope'] text-sm text-[#612130]/80">
                {clientInfo.wedding_party.bestMan}
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 text-center shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <h2 className="text-3xl text-[#612130]">Groomsmen</h2>
              <div className="mt-3 space-y-1">
                {clientInfo.wedding_party.groomsmen.map((groomsman, index) => (
                  <p key={index} className="font-['Manrope'] text-sm text-[#612130]/80">
                    {groomsman}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Section 2: Maid of Honor, Bridesmaids, Ring Bearer, Flower Girls */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.div
              className="rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 text-center shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <h2 className="text-3xl text-[#612130]">Maid of Honor</h2>
              <p className="mt-3 font-['Manrope'] text-sm text-[#612130]/80">
                {clientInfo.wedding_party.maidOfHonor}
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 text-center shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <h2 className="text-3xl text-[#612130]">Bridesmaids</h2>
              <div className="mt-3 space-y-1">
                {clientInfo.wedding_party.bridesmaids.map((bridesmaid, index) => (
                  <p key={index} className="font-['Manrope'] text-sm text-[#612130]/80">
                    {bridesmaid}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Ring Bearer and Flower Girls - Side by Side */}
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            <motion.div
              className="h-full rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 text-center shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <h2 className="text-3xl text-[#612130]">Ring Bearer</h2>
              <p className="mt-3 font-['Manrope'] text-sm text-[#612130]/80">
                {clientInfo.wedding_party.ringBearer}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <motion.div
              className="h-full rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 text-center shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <h2 className="text-3xl text-[#612130]">Flower Girls</h2>
              <div className="mt-3 space-y-1">
                {clientInfo.wedding_party.flowerGirls.map((girl, index) => (
                  <p key={index} className="font-['Manrope'] text-sm text-[#612130]/80">
                    {girl}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-7 flex justify-start">
          <Link
            to="/home"
            className="inline-block rounded-full border border-[#7c1f31]/35 bg-[#7c1f31] px-6 py-2 font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#f9f3eb]"
          >
            Back Home
          </Link>
        </div>
      </motion.main>
    </div>
  );
};

export default Entourage;
