import { memo, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type Petal = {
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

type CursorPetal = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  drift: number;
  spin: number;
  fallDistance: number;
  opacity: number;
  expiresAt: number;
};

const petals: Petal[] = Array.from({ length: 18 }, (_, i) => ({
  left: `${4 + ((i * 5) % 92)}%`,
  size: 9 + (i % 4) * 3,
  duration: 8 + (i % 5) * 1.2,
  delay: (i % 7) * 0.45,
  opacity: 0.24 + (i % 4) * 0.1,
}));

const FallingPetals: React.FC = () => {
  const [cursorPetals, setCursorPetals] = useState<CursorPetal[]>([]);
  const nextCursorPetalId = useRef(0);
  const lastSpawnAt = useRef(0);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const now = Date.now();
      const x = event.clientX;
      const y = event.clientY;

      const prevPoint = lastPoint.current;
      const dx = prevPoint ? x - prevPoint.x : Number.POSITIVE_INFINITY;
      const dy = prevPoint ? y - prevPoint.y : Number.POSITIVE_INFINITY;
      const distance = Math.hypot(dx, dy);

      if (now - lastSpawnAt.current < 60 || distance < 22) {
        return;
      }

      const duration = 1.6 + Math.random() * 1.1;
      const petal: CursorPetal = {
        id: nextCursorPetalId.current++,
        x,
        y,
        size: 8 + Math.random() * 8,
        duration,
        drift: -24 + Math.random() * 48,
        spin: -90 + Math.random() * 220,
        fallDistance: 120 + Math.random() * 90,
        opacity: 0.45 + Math.random() * 0.35,
        expiresAt: now + duration * 1000 + 180,
      };

      setCursorPetals((prev) => {
        const next = [...prev, petal];
        return next.length > 48 ? next.slice(next.length - 48) : next;
      });

      lastSpawnAt.current = now;
      lastPoint.current = { x, y };
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    const cleanupTimer = window.setInterval(() => {
      const now = Date.now();
      setCursorPetals((prev) => prev.filter((petal) => petal.expiresAt > now));
    }, 200);

    return () => window.clearInterval(cleanupTimer);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {petals.map((petal, idx) => (
          <motion.span
            key={`${petal.left}-${idx}`}
            className="absolute top-[-8%] rounded-full"
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size * 0.78,
              background:
                "radial-gradient(circle at 35% 35%, rgba(255,250,245,.95), rgba(230,162,183,.75) 46%, rgba(132,46,66,.78) 100%)",
              filter: "blur(0.2px)",
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

      {cursorPetals.map((petal) => (
        <motion.span
          key={petal.id}
          className="pointer-events-none fixed z-100 rounded-full"
          aria-hidden="true"
          style={{
            left: petal.x,
            top: petal.y,
            width: petal.size,
            height: petal.size * 0.76,
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,250,245,.95), rgba(230,162,183,.75) 46%, rgba(132,46,66,.78) 100%)",
            filter: "blur(0.2px)",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: petal.opacity, x: 0, y: 0, rotate: 0, scale: 0.8 }}
          animate={{ opacity: 0, x: petal.drift, y: petal.fallDistance, rotate: petal.spin, scale: 1 }}
          transition={{ duration: petal.duration, ease: "easeOut" }}
        />
      ))}
    </>
  );
};

export default memo(FallingPetals);
