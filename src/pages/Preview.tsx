import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import floralDivider from "../assets/floral-divider.svg";
import waxSeal from "../assets/wax-seal.svg";

const Preview: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => {
      navigate("/home", { replace: true });
    }, 1300);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">
      <div className="ornament-bg" />
      <div className="romantic-ring left-[-5rem] top-12 h-48 w-48" />
      <div className="romantic-ring bottom-10 right-[-4rem] h-64 w-64" />

      <motion.div
        className="absolute left-6 top-8 text-center md:left-8"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="font-['Manrope'] text-[11px] uppercase tracking-[0.3em] text-[#7c1f31]/75">
          Wedding Invitation
        </p>
        <h1 className="mt-2 text-4xl text-[#612130] md:text-5xl">Open The Envelope</h1>
      </motion.div>

      <motion.div
        className="perspective relative h-56 w-full max-w-[23rem] cursor-pointer"
        onClick={handleOpen}
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          className="absolute -inset-4 rounded-[2rem] border border-[#cda86f]/35 bg-[#fff6ea]/45 blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        <motion.div
          className="absolute inset-0 rounded-[1.7rem] border border-[#7c1f31]/25 shadow-[0_20px_50px_rgba(86,31,46,0.22)]"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: opened ? 180 : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="paper-panel absolute inset-0 flex items-center justify-center rounded-[1.7rem] backface-hidden">
            <div className="text-center text-[#612130]">
              <p className="font-['Manrope'] text-xs tracking-[0.34em] text-[#7c1f31]/75">TAP TO UNSEAL</p>
              <img src={floralDivider} alt="" aria-hidden="true" className="mx-auto mt-3 w-56 opacity-90" />
              <img src={waxSeal} alt="" aria-hidden="true" className="mx-auto mt-1 h-16 w-16" />
              <p className="mt-2 font-['Manrope'] text-[11px] text-[#7c1f31]/70">
                A romantic evening awaits
              </p>
            </div>
          </div>

          <div className="accent-panel rotate-x-180 absolute inset-0 flex items-center justify-center rounded-[1.7rem] backface-hidden">
            <div className="text-center">
              <p className="font-['Manrope'] text-sm tracking-[0.24em] text-[#f9f3eb]/90">UNFOLDING...</p>
              <p className="mt-2 text-2xl text-[#f9f3eb]">with love</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="absolute -bottom-16 left-1/2 w-full -translate-x-1/2 text-center font-['Manrope'] text-xs tracking-[0.24em] text-[#7c1f31]/72"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Textured ivory and warm maroon details
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-6 right-6 text-[11px] uppercase tracking-[0.24em] text-[#7c1f31]/62"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        Florals | Vows | Candlelight
      </motion.div>
    </div>
  );
};

export default Preview;
