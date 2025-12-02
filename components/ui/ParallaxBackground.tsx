"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const cloudsY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const wavesY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/bg.jpg)",
          filter: "brightness(0.8)",
        }}
      />

      {/* Noise Texture (Parchment feel) */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Stars / Constellations */}
      <motion.div style={{ y: starsY }} className="absolute inset-0 opacity-60">
        <div className="absolute top-10 left-10 w-1 h-1 bg-parchment-100 rounded-full shadow-[0_0_4px_#fff] animate-pulse" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-parchment-100 rounded-full shadow-[0_0_6px_#fff] animate-pulse" />
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Distant Clouds / Fog */}
      <motion.div
        style={{ y: cloudsY }}
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
      >
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-aegean-600 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [20, -20, 20] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-20 w-[700px] h-[700px] bg-aegean-700 rounded-full blur-[140px]"
        />
      </motion.div>

      {/* Subtle Waves Gradient Overlay */}
      <motion.div
        style={{ y: wavesY }}
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-aegean-900/80 to-transparent"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,29,38,0.4)_100%)]" />
    </div>
  );
}
