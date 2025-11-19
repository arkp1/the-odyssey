"use client";

import { motion, useScroll } from "framer-motion";

export function NavIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
      <div className="w-[1px] h-32 bg-aegean-700/30 relative">
        <motion.div 
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 left-0 w-full bg-bronze-500 origin-top"
        />
      </div>
      
      {/* Optional: Dots for chapters could go here if we map them */}
      
      <div className="w-[1px] h-32 bg-aegean-700/30 relative">
         <motion.div 
          style={{ scaleY: scrollYProgress }}
          className="absolute bottom-0 left-0 w-full bg-bronze-500 origin-bottom"
        />
      </div>
    </div>
  );
}
