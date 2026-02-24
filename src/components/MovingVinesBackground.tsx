import { motion } from "motion/react";

const blossoms = [
  { x: 12, y: 12, size: 6, delay: 0 },
  { x: 24, y: 38, size: 5, delay: 0.8 },
  { x: 18, y: 64, size: 7, delay: 1.4 },
  { x: 86, y: 26, size: 6, delay: 0.3 },
  { x: 74, y: 54, size: 5, delay: 1.1 },
  { x: 92, y: 76, size: 7, delay: 1.8 },
];

const MovingVinesBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.svg
        viewBox="0 0 180 900"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0 h-full w-44 opacity-45 md:w-56"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <motion.path
          d="M52 8C26 82 72 160 40 234C10 304 36 388 58 454C74 504 74 576 44 648C22 704 26 776 50 892"
          stroke="rgba(124,31,49,0.22)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0.24, 0.5, 0.24] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.path
          d="M88 40C58 106 98 182 72 252C48 318 56 390 82 458C98 500 96 566 74 634C58 684 62 760 86 860"
          stroke="rgba(155,42,63,0.18)"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0.16, 0.34, 0.16] }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.6 }}
        />
        <path
          d="M66 118C76 122 84 132 84 142C73 142 62 134 58 124C58 122 60 120 62 120C63 120 65 120 66 118Z"
          fill="rgba(124,31,49,0.18)"
        />
        <path
          d="M52 396C62 400 70 410 70 420C59 420 48 412 44 402C44 400 46 398 48 398C49 398 51 398 52 396Z"
          fill="rgba(124,31,49,0.16)"
        />
      </motion.svg>

      <motion.svg
        viewBox="0 0 180 900"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0 h-full w-44 opacity-45 md:w-56"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 13, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <motion.path
          d="M124 8C150 86 108 166 138 236C168 304 142 386 120 454C104 504 104 580 132 652C152 704 150 774 126 892"
          stroke="rgba(124,31,49,0.22)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0.24, 0.5, 0.24] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.path
          d="M88 48C118 112 84 192 110 262C132 324 126 398 100 466C86 506 90 576 110 646C126 700 122 770 98 862"
          stroke="rgba(155,42,63,0.18)"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0.16, 0.34, 0.16] }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <path
          d="M112 166C100 170 90 182 90 194C104 194 116 184 120 172C120 170 118 168 116 168C115 168 113 168 112 166Z"
          fill="rgba(124,31,49,0.18)"
        />
        <path
          d="M126 466C114 470 104 482 104 494C118 494 130 484 134 472C134 470 132 468 130 468C129 468 127 468 126 466Z"
          fill="rgba(124,31,49,0.16)"
        />
      </motion.svg>

      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
        {blossoms.map((blossom, index) => (
          <motion.g
            key={`${blossom.x}-${blossom.y}-${index}`}
            initial={{ opacity: 0.2, scale: 0.9 }}
            animate={{ opacity: [0.2, 0.42, 0.2], scale: [0.9, 1.05, 0.9], y: [0, -0.8, 0] }}
            transition={{
              duration: 5.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: blossom.delay,
            }}
          >
            <circle cx={blossom.x} cy={blossom.y} r={blossom.size * 0.5} fill="rgba(124,31,49,0.18)" />
            <circle cx={blossom.x + 0.7} cy={blossom.y - 0.8} r={blossom.size * 0.18} fill="rgba(205,168,111,0.42)" />
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default MovingVinesBackground;
