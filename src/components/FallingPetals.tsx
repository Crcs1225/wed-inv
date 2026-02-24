import { memo } from "react";
import { motion } from "motion/react";

type Petal = {
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

const petals: Petal[] = Array.from({ length: 10 }, (_, i) => ({
  left: `${6 + ((i * 7) % 88)}%`,
  size: 8 + (i % 4) * 3,
  duration: 11 + (i % 5) * 1.7,
  delay: (i % 6) * 0.8,
  opacity: 0.1 + (i % 4) * 0.08,
}));

const FallingPetals: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((petal, idx) => (
        <motion.span
          key={`${petal.left}-${idx}`}
          className="absolute top-[-8%] rounded-full"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 0.78,
            background:
              "radial-gradient(circle at 35% 35%, rgba(249,243,235,.8), rgba(190,123,140,.55) 45%, rgba(101,27,39,.72) 100%)",
            filter: "blur(0.35px)",
            opacity: petal.opacity,
          }}
          animate={{
            y: ["-10vh", "110vh"],
            x: [0, 10, -8, 6, 0],
            rotate: [0, 80, 165, 260],
          }}
          transition={{
            duration: petal.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: petal.delay,
          }}
        />
      ))}
    </div>
  );
};

export default memo(FallingPetals);
