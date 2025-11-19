"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, Scroll, Loader2 } from "lucide-react";

interface GodCardProps {
  name: string;
  title: string;
  description: string;
  facts: string[];
  symbol: string;
  alignment?: "left" | "right";
}

export function GodCard({ name, title, description, facts, symbol, alignment = "left" }: GodCardProps) {
  const [secretFact, setSecretFact] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFact = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/fact?god=${encodeURIComponent(name)}`);
      const data = await res.json();
      if (data.fact) {
        setSecretFact(data.fact);
      }
    } catch (error) {
      console.error("Failed to fetch fact", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn(
      "flex flex-col gap-8 md:gap-16 max-w-5xl mx-auto px-4 md:px-0",
      alignment === "right" ? "md:text-right items-end" : "md:text-left items-start"
    )}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="space-y-4 relative"
      >
        <div className={cn(
          "absolute -top-20 -z-10 opacity-10 text-[10rem] md:text-[12rem] font-serif text-bronze-500 select-none pointer-events-none",
          alignment === "right" ? "right-0" : "left-0"
        )}>
          {name[0]}
        </div>
        <span className="text-bronze-400 tracking-[0.3em] text-sm uppercase font-semibold flex items-center gap-3">
          {alignment === "right" && <div className="h-[1px] w-12 bg-bronze-600/50" />}
          {title}
          {alignment === "left" && <div className="h-[1px] w-12 bg-bronze-600/50" />}
        </span>
        <h2 className="text-6xl md:text-8xl font-serif text-parchment-100 drop-shadow-lg">{name}</h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-12 items-start w-full"
      >
        <div className={cn("space-y-8 relative z-10", alignment === "right" && "order-2")}>
          <div className="prose prose-invert prose-lg">
            <p className="text-lg md:text-xl leading-relaxed text-parchment-200/90 font-light">
              {description}
            </p>
          </div>
          
          <div className="space-y-6 border-t border-aegean-700/50 pt-8">
            <h3 className="text-bronze-400 font-serif text-xl flex items-center gap-2">
              <Scroll className="w-5 h-5" />
              Known Legends
            </h3>
            <ul className="space-y-4">
              {facts.map((fact, i) => (
                <li key={i} className="flex gap-4 text-base text-parchment-300/80 group hover:text-parchment-100 transition-colors">
                  <span className="text-bronze-600 group-hover:text-bronze-400 transition-colors">✦</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Fact Card */}
          <div className="mt-8 p-6 rounded-lg bg-aegean-800/30 border border-aegean-700/50 backdrop-blur-sm hover:border-bronze-500/30 transition-colors">
            {!secretFact ? (
              <button
                onClick={fetchFact}
                disabled={isLoading}
                className="flex items-center gap-3 text-bronze-400 hover:text-parchment-100 transition-all group w-full"
              >
                <div className="p-2 rounded-full bg-bronze-900/20 group-hover:bg-bronze-500/20 transition-colors">
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Sparkles className="w-5 h-5" />
                  )}
                </div>
                <span className="uppercase tracking-widest text-sm font-semibold">
                  {isLoading ? "Consulting the Oracle..." : "Reveal Mythic Secret"}
                </span>
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <h4 className="text-bronze-400 text-xs uppercase tracking-widest mb-2">Oracle's Whisper</h4>
                  <p className="text-parchment-100 italic font-serif text-lg leading-relaxed">
                    "{secretFact}"
                  </p>
                </div>
                <button
                  onClick={fetchFact}
                  disabled={isLoading}
                  className="text-xs uppercase tracking-widest text-bronze-500/70 hover:text-bronze-400 flex items-center gap-2 transition-colors pt-2 border-t border-aegean-700/30 w-full justify-end"
                >
                  {isLoading ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : (
                    <Sparkles className="w-3 h-3" />
                  )}
                  Ask Another Fact
                </button>
              </motion.div>
            )}
          </div>
        </div>

        <div className={cn(
          "relative aspect-square w-full max-w-md mx-auto flex items-center justify-center",
          alignment === "right" && "order-1"
        )}>
          {/* Cinematic Circle Elements */}
          <div className="absolute inset-0 border border-aegean-600/20 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-8 border border-bronze-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-bronze-900/20 to-transparent rounded-full blur-2xl" />
          
          {/* Symbol */}
          <motion.div 
            whileHover={{ scale: 1.02, rotate: 2, filter: "brightness(1.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative z-10 text-center cursor-pointer"
          >
            <div className="text-8xl md:text-9xl opacity-80 font-serif text-parchment-100/20 select-none drop-shadow-[0_0_15px_rgba(217,154,94,0.2)] transition-all duration-500 group-hover:opacity-100 group-hover:text-parchment-100/40">
              {symbol}
            </div>
          </motion.div>
          
          {/* Glowing Center */}
          <div className="absolute w-40 h-40 bg-bronze-500/5 rounded-full blur-3xl animate-pulse-glow" />
        </div>
      </motion.div>
    </div>
  );
}
