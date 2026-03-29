import { motion } from "framer-motion";

type FloralCornerProps = {
  className?: string;
  flip?: boolean;
  rotatePattern?: number[];
  duration?: number;
  delay?: number;
};

type FloralDividerProps = {
  className?: string;
};

type FloralRingsProps = {
  className?: string;
};

export const FloralCorner: React.FC<FloralCornerProps> = ({ 
  className = "", 
  flip = false,
  rotatePattern = [0, 3, 0, -3, 0],
  duration = 6,
  delay = 0
}) => {
 
  return (
    <motion.img
      src="/floral3.png"
      alt=""
      // className={`w-27.5 h-27.5 md:w-47.5 md:h-47.5 lg:w-82.5 lg:h-82.5 ${className}`}
      className={`w-50 h-50 md:w-60 md:h-60 lg:w-74 lg:h-74 xl:w-100 xl:h-100 ${className}`}
      style={{ 
        scaleX: flip ? -1 : 1,
        transformOrigin: "center center"
      }}
      animate={{ 
        rotate: rotatePattern
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      aria-hidden="true"
    />
  );
};

export const FloralDivider: React.FC<FloralDividerProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 340 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 18H134" stroke="#D4A853" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M206 18H322" stroke="#D4A853" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="170" cy="18" r="7" fill="#F5E6D0" />
      <path d="M170 10C175 14 176 21 170 26C164 21 165 14 170 10Z" fill="#C27A8A" />
      <path d="M158 18C163 15 166 15 170 18C174 21 177 21 182 18" stroke="#D4A853" strokeWidth="1.2" />
      <path d="M151 15C153 12 157 12 159 15C161 18 160 21 157 23" stroke="#E8C797" strokeWidth="1.1" />
      <path d="M189 15C187 12 183 12 181 15C179 18 180 21 183 23" stroke="#E8C797" strokeWidth="1.1" />
    </svg>
  );
};

export const FloralRings: React.FC<FloralRingsProps> = ({ className = "" }) => {
  return (
    <img
      src="/top-floral.png"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 w-28 -translate-x-1/2 sm:w-72 md:w-56 lg:w-24 ${className}`}
    />
  );
};
