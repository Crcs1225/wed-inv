import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import floralDivider from "../assets/floral-divider.svg";

const blooms = [
  { left: "8%", top: "24%", delay: 0 },
  { left: "86%", top: "18%", delay: 0.4 },
  { left: "14%", top: "80%", delay: 0.9 },
  { left: "80%", top: "76%", delay: 1.2 },
  { left: "48%", top: "14%", delay: 0.7 },
];

const Preview: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => {
      navigate("/home", { replace: true });
    }, 1700);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6">
      <div className="ornament-bg" />

      {blooms.map((bloom, index) => (
        <motion.span
          key={`${bloom.left}-${index}`}
          className="pointer-events-none absolute h-3 w-3 rounded-full"
          style={{
            left: bloom.left,
            top: bloom.top,
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,240,218,.9), rgba(205,168,111,.65) 55%, rgba(124,31,49,.42))",
          }}
          animate={{ y: [0, -8, 0], opacity: [0.4, 0.75, 0.4], scale: [0.9, 1.08, 0.9] }}
          transition={{ duration: 4.6, repeat: Number.POSITIVE_INFINITY, delay: bloom.delay, ease: "easeInOut" }}
        />
      ))}

      <motion.header
        className="pointer-events-none absolute top-8 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-['Manrope'] text-[11px] uppercase tracking-[0.3em] text-[#7c1f31]/72">Wedding Invitation</p>
        <h1 className="mt-2 text-4xl text-[#612130] sm:text-5xl">Tap To Open</h1>
      </motion.header>

      <motion.button
        type="button"
        onClick={handleOpen}
        aria-label="Open invitation envelope"
        className="perspective relative mt-14 block h-[285px] w-[min(92vw,430px)] cursor-pointer border-0 bg-transparent p-0 sm:h-[340px]"
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute left-1/2 top-[38%] z-0 w-[76%] -translate-x-1/2 rounded-[1.2rem] border border-[#7c1f31]/20 bg-gradient-to-b from-[#fff7ed] to-[#fcefdc] p-4 shadow-[0_14px_28px_rgba(90,36,50,0.16)]"
          initial={false}
          animate={{ y: opened ? -90 : 0, opacity: opened ? 1 : 0.78 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-['Manrope'] text-[10px] uppercase tracking-[0.28em] text-[#7c1f31]/70">A Night To Remember</p>
          <img src={floralDivider} alt="" aria-hidden="true" className="mx-auto mt-2 w-40 opacity-85" />
          <p className="mt-1 text-base text-[#612130] sm:text-lg">Florals, vows, and candlelight</p>
        </motion.div>

        <div
          className="absolute inset-x-[7%] top-[4%] z-[1] h-[42%] rounded-t-[2.9rem] border border-[#8b2840]/28 bg-gradient-to-b from-[#6e1b2e] to-[#5a1626] shadow-[inset_0_2px_6px_rgba(255,255,255,0.09)]"
          style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
        />

        <div className="absolute inset-x-[5%] bottom-[2%] z-[2] h-[70%] rounded-b-[2rem] rounded-t-[0.55rem] border border-[#7d2a3f]/32 bg-gradient-to-br from-[#8f3a4e] via-[#7c2f43] to-[#6a2335] shadow-[0_20px_40px_rgba(84,28,43,0.28)]" />

        <div
          className="absolute bottom-[2%] left-[5%] z-[3] h-[46%] w-[45%] rounded-bl-[1.9rem] bg-gradient-to-br from-[#844155] to-[#733142]"
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
        />
        <div
          className="absolute bottom-[2%] right-[5%] z-[3] h-[46%] w-[45%] rounded-br-[1.9rem] bg-gradient-to-bl from-[#844155] to-[#733142]"
          style={{ clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)" }}
        />

        <div
          className="absolute bottom-[2%] left-1/2 z-[4] h-[52%] w-[90%] -translate-x-1/2 rounded-b-[1.95rem] bg-gradient-to-b from-[#8d4254] to-[#733142]"
          style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
        />

        <motion.div
          className="absolute inset-x-[5%] top-[4%] z-[6] h-[47%] rounded-t-[2.9rem] border border-[#6f1f33]/45 bg-gradient-to-b from-[#812840] to-[#641b2e] shadow-[inset_0_1px_4px_rgba(255,255,255,0.08)]"
          style={{
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            transformOrigin: "50% 100%",
            backfaceVisibility: "hidden",
          }}
          initial={false}
          animate={{ rotateX: opened ? -165 : 0, y: opened ? -8 : 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="absolute left-1/2 top-[58%] z-[7] -translate-x-1/2"
          initial={false}
          animate={{ opacity: opened ? 0 : 1, y: opened ? -8 : 0, scale: opened ? 0.9 : 1 }}
          transition={{ duration: 0.35 }}
        >
          <div className="h-12 w-12 rounded-full border border-[#f0d8b6]/70 bg-gradient-to-b from-[#8f2a42] to-[#6b1a2d] shadow-[0_8px_16px_rgba(67,16,29,0.35)]">
            <p className="pt-2 text-center text-lg text-[#f6e6cf]">A D</p>
          </div>
        </motion.div>

        <motion.p
          className="absolute -bottom-11 left-1/2 w-full -translate-x-1/2 text-center font-['Manrope'] text-[11px] uppercase tracking-[0.26em] text-[#7c1f31]/70"
          initial={false}
          animate={{ opacity: opened ? 0.45 : 0.9 }}
        >
          {opened ? "Unfolding your invitation" : "Simple maroon envelope"}
        </motion.p>
      </motion.button>
    </div>
  );
};

export default Preview;
