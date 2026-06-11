"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function renderWithLinks(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m)
      return (
        <Link key={i} href={m[2]} className="text-gold-bright hover:text-white transition-colors underline underline-offset-2">
          {m[1]}
        </Link>
      );
    return part;
  });
}

type Props = {
  heading?: string;
  body?: string;
};

export function LeistungCTA({
  heading = "Bereit für den nächsten Schritt?",
  body = "Kostenloses Erstgespräch – ich analysiere Ihren Bedarf und zeige Ihnen konkrete Lösungsansätze. Für Unternehmen in Lastrup, Cloppenburg, Vechta, Oldenburg und ganz Niedersachsen.",
}: Props) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-elevated/60 to-bg-deep pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-gold-dim mb-4">
            Projekt starten
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight metallic-text mb-6">
            {heading}
          </h2>
          <p className="text-silver-dim text-base md:text-lg leading-relaxed mb-10">
            {renderWithLinks(body)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide uppercase rounded-lg bg-gold/20 text-gold-bright border border-gold/40 hover:bg-gold/30 hover:border-gold/60 transition-all duration-300"
            >
              Jetzt Kontakt aufnehmen
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide uppercase rounded-lg border border-white/10 text-silver hover:border-white/20 hover:text-silver-bright transition-all duration-300"
            >
              Alle Leistungen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
