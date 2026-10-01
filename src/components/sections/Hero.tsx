"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { Button } from "@/components/ui/Button";

const Particles = dynamic(
  () => import("@/components/ui/Particles").then((m) => ({ default: m.Particles })),
  { ssr: false }
);

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
        {/* Logo ohne Einblend-Animation: Es ist das LCP-Element, jede Größen- oder
            Deckkraft-Animation verschiebt den von Google gemessenen Ladezeitpunkt. */}
        <div className="mb-1 flex justify-center">
          <div className="relative w-[200px] h-[200px] md:w-[320px] md:h-[320px]">
            <div className="absolute -inset-8 bg-gold/10 rounded-full blur-3xl animate-pulse-glow" />
            <Image
              src="/logo.webp"
              alt="NM-TECH IT"
              width={320}
              height={320}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 200px, 320px"
              className="relative drop-shadow-[0_0_60px_rgba(212,166,111,0.2)] w-full h-full object-contain"
            />
          </div>
        </div>

        <div
          className="hero-rise [--rise:12px] [animation-delay:0.1s] flex flex-col items-center justify-center gap-2 mb-4"
        >
          <span className="text-sm md:text-base text-gold-bright uppercase tracking-[0.3em]">
            Software Engineer & Digitalisierungspartner
          </span>
        </div>

        <h1 className="hero-rise [--rise:24px] [animation-delay:0.15s] font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight metallic-text max-w-5xl mx-auto"
        >
          Individuelle Software, KI-Systeme & intelligente Automationen.
        </h1>

        <p className="hero-rise [--rise:20px] [animation-delay:0.25s] mt-8 max-w-2xl mx-auto text-base md:text-lg text-silver-dim leading-relaxed"
        >
          Ich entwickle maßgeschneiderte Software, KI-Lösungen und Automatisierungen
          für Unternehmen in Lastrup, Cloppenburg und dem Emsland.
        </p>

        <div className="hero-rise [--rise:16px] [animation-delay:0.35s] mt-10 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#contact" variant="primary">
            Projekt starten
          </Button>
          <Button href="#faq" variant="secondary">
            Häufige Fragen
          </Button>
        </div>
      </div>

      <div className="hero-fade-in absolute bottom-14 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-silver-dim">Scroll</span>
        <div className="animate-scroll-hint w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
