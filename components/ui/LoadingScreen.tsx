"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-aegean-900 text-parchment-100 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] mix-blend-overlay" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Title Animation */}
            <motion.h1
              className="text-4xl md:text-7xl font-serif tracking-[0.2em] text-parchment-100 mb-4 font-cinzel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
              THE ODYSSEY
            </motion.h1>

            {/* Subtitle/Decorative Line */}
            <motion.div
              className="h-[1px] bg-gradient-to-r from-transparent via-parchment-300 to-transparent w-0"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
            />

            <motion.p
              className="mt-4 text-bronze-400 text-sm md:text-base tracking-[0.3em] uppercase font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              A Mythic Voyage
            </motion.p>
          </div>

          {/* Subtle Pulse Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)",
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
