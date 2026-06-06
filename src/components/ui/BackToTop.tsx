"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Zeige Button, wenn der User mehr als 300px gescrollt hat
      setIsVisible(window.scrollY > 300);

      // Berechne den Scroll-Fortschritt in Prozent
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-bg-elevated/70 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-gold/30 hover:shadow-[0_0_25px_rgba(212,166,111,0.2)] group cursor-pointer transition-all duration-300"
          aria-label="Nach oben scrollen"
        >
          {/* Circular Scroll Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-0.5" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="transparent"
              stroke="rgba(212, 166, 111, 0.08)"
              strokeWidth="5"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="44"
              fill="transparent"
              stroke="#D4A66F" // gold theme color
              strokeWidth="5"
              strokeDasharray="276.46" // 2 * pi * 44 = 276.46
              strokeDashoffset={276.46 - (276.46 * scrollProgress) / 100}
              strokeLinecap="round"
              style={{ pathLength: scrollProgress / 100 }}
              transition={{ type: "tween", ease: "easeOut" }}
            />
          </svg>

          {/* Up Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 text-gold-bright group-hover:text-white transition-all duration-300 group-hover:-translate-y-0.5 relative z-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
