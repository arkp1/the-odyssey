"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20",
        className
      )}
    >
      <motion.div
        style={{ opacity, scale }}
        className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
