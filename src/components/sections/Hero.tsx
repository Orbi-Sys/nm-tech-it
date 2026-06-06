"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { Particles } from "@/components/ui/Particles";
import { Button } from "@/components/ui/Button";

export function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden snap-section"
    >
      <AnimatedGrid />
      <Particles />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg-deep to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-28 md:pt-32 md:pb-36 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          className="mb-1 flex justify-center"
        >
          <div className="relative w-[200px] h-[200px] md:w-[320px] md:h-[320px]">
            <div className="absolute -inset-8 bg-gold/10 rounded-full blur-3xl animate-pulse-glow" />
            <Image
              src="/logo.png"
              alt="NM-TECH IT"
              width={320}
              height={320}
              priority
              loading="eager"
              className="relative drop-shadow-[0_0_60px_rgba(212,166,111,0.2)] w-full h-full object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-2 mb-4"
        >
          <span className="text-sm md:text-base text-gold-bright uppercase tracking-[0.3em]">
            Software Engineer & Digitalisierungspartner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight metallic-text max-w-5xl mx-auto"
        >
          Moderne Webseiten, KI-Systeme & intelligente Automationen.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-silver-dim leading-relaxed"
        >
          Ich entwickle hochwertige digitale Lösungen für Unternehmen – modern,
          performant und zukunftssicher.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#contact" variant="primary">
            Projekt starten
          </Button>
          <Button href="#faq" variant="secondary">
            Häufige Fragen
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-silver-dim">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
