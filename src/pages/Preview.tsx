import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import FallingPetals from "../components/FallingPetals";
import floralDivider from "../assets/floral-divider.svg";

const Preview: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => {
      navigate("/home", { replace: true });
    }, 3700);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6">
      <div className="ornament-bg" />
      <FallingPetals />

      <motion.header
        className="pointer-events-none absolute top-12 z-20 text-center lg:top-8 2xl:top-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="font-['Manrope'] text-[11px] uppercase tracking-[0.3em] text-[#7c1f31]/72 md:text-lg lg:text-sm 2xl:text-xl">Wedding Invitation</p>
        <h1 className="mt-2 text-xl leading-tight text-[#612130] xl:text-2xl">Tap To Open</h1>
      </motion.header>

      <motion.button
        type="button"
        onClick={handleOpen}
        aria-label="Open invitation envelope"
        className="perspective scale-[0.8] sm:scale-[1] md:scale-[1.1] lg:scale-[0.8] xl:scale-[1] 2xl:scale-[1.2] relative z-30 block h-64 w-80 cursor-pointer border-0 bg-transparent p-0"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="absolute left-1/2 top-[38%] z-0 w-[76%] -translate-x-1/2 rounded-[1.2rem] border border-[#7c1f31]/20 bg-linear-to-b from-[#fff7ed] to-[#fcefdc] p-4 shadow-[0_14px_28px_rgba(90,36,50,0.16)] lg:p-3.5 xl:p-4"
          initial={false}
          animate={{ y: opened ? -90 : 0, opacity: opened ? 1 : 0.78, zIndex: opened ? 3 : 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-['Manrope'] text-[10px] uppercase tracking-[0.28em] text-[#7c1f31]/70">Save the Date</p>
          <img src={floralDivider} alt="" aria-hidden="true" className="mx-auto mt-2 w-40 opacity-85 lg:w-36 xl:w-40" />
          <p className="mt-1 text-sm text-[#612130] sm:text-lg lg:text-[1.05rem] xl:text-lg">Ron & Mikkie's Wedding</p>
        </motion.div>

        <motion.div
          className="absolute inset-x-[5%] top-[25%] z-6 h-[47%] rounded-t-3xl border border-[#6f1f33]/45 bg-linear-to-b from-[#812840] to-[#641b2e] shadow-[inset_0_1px_4px_rgba(255,255,255,0.08)]"
          style={{ clipPath: "polygon(0 8%, 50% 100%, 100% 8%, 100% 0, 0 0)"}}
          animate={{ display: opened ? "hidden" : "block", opacity: opened ? 0 : 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="absolute hidden inset-x-[5%] -z-5 h-[47%] rounded-b-2xl border border-[#8b2840]/28 bg-linear-to-b from-[#6e1b2e] to-[#5a1626] shadow-[inset_0_2px_6px_rgba(255,255,255,0.09)]"
          style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", transformOrigin: "50% 100%", backfaceVisibility: "hidden" }}
          animate={{ display: opened ? "block" : "hidden", top: opened ? "-17.8%" : "0%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="absolute inset-x-[5%] bottom-[2%] z-2 h-[70%] rounded-b-[1.9rem] rounded-t-[0.55rem] border border-[#8b2840]/28 bg-linear-to-b from-[#6e1b2e] to-[#5a1626] shadow-[inset_0_2px_6px_rgba(255,255,255,0.09)]" />

        <div
          className="absolute bottom-[2%] left-[5%] z-3 h-[70%] w-[85%] rounded-xl rounded-bl-[1.9rem] bg-linear-to-br from-[#844155] to-[#733142]"
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
        />
        <div
          className="absolute bottom-[2%] right-[5%] z-3 h-[70%] w-[85%] rounded-xl rounded-br-[1.9rem] bg-linear-to-bl from-[#844155] to-[#733142]"
          style={{ clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)" }}
        />

        <div
          className="absolute bottom-[2%] left-1/2 z-4 h-[52%] w-[90%] -translate-x-1/2  rounded-[1.95rem] bg-linear-to-b from-[#8d4254] to-[#733142]"
          style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
        />

        <motion.div
          className="absolute left-1/2 top-[58%] z-7 -translate-x-1/2"
          initial={false}
          animate={{ opacity: opened ? 0 : 1, y: opened ? -8 : 0, scale: opened ? 0.9 : 1 }}
          transition={{ duration: 0.35 }}
        >
          <div className="h-12 w-12 rounded-full border border-[#f0d8b6]/70 bg-linear-to-b from-[#8f2a42] to-[#6b1a2d] shadow-[0_8px_16px_rgba(67,16,29,0.35)] lg:h-11 lg:w-11 xl:h-12 xl:w-12">
            <p className="pt-2 text-center text-lg text-[#f6e6cf] lg:pt-1.5 lg:text-[1.05rem] xl:pt-2 xl:text-lg">R M</p>
          </div>
        </motion.div>

        <motion.p
          className="absolute -bottom-11 left-1/2 w-full -translate-x-1/2 text-center font-['Manrope'] text-[11px] uppercase tracking-[0.26em] text-[#7c1f31]/70 lg:-bottom-10 xl:-bottom-11"
          initial={false}
          animate={{ opacity: opened ? 0.45 : 0.9 }}
        >
          {opened ? "See You Soon" : "A Moment of Joy Awaits"}
        </motion.p>
      </motion.button>
    </div>
  );
};

export default Preview;
