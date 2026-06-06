"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hideVeil = () => {
      const veil = document.getElementById("nm-veil");
      if (veil) {
        veil.style.opacity = "0";
        veil.style.pointerEvents = "none";
      }
    };

    if (sessionStorage.getItem("nm_visited") === "1") {
      hideVeil();
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("nm_visited", "1");
      setLoading(false);
      setTimeout(hideVeil, 400);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-deep"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[320px] h-[320px]"
          >
            <div className="absolute inset-0 blur-3xl bg-white/10 rounded-full scale-150 animate-pulse-glow" />
            <Image
              src="/logo.png"
              alt="NM-TECH IT"
              width={320}
              height={320}
              priority
              className="relative z-10 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 h-px w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent overflow-hidden"
          >
            <motion.div
              className="h-full w-1/2 bg-white/60"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
