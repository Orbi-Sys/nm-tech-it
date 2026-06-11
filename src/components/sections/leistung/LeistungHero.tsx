"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

type Props = {
  label: string;
  title: string;
  tagline: string;
  intro: string;
  icon: string;
};

export function LeistungHero({ label, title, tagline, intro, icon }: Props) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-elevated/30 to-bg-deep pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <Link
            href="/#services"
            className="text-xs tracking-[0.25em] uppercase text-gold-dim hover:text-gold-bright transition-colors"
          >
            Leistungen
          </Link>
          <span className="text-gold-dim/40">›</span>
          <span className="text-xs tracking-[0.25em] uppercase text-silver-dim">{label}</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="inline-flex p-4 rounded-2xl bg-gold/5 border border-gold/15 mb-8"
            >
              <ServiceIcon name={icon} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold tracking-tight metallic-text mb-4"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gold-dim text-lg md:text-xl font-medium mb-6"
            >
              {tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-silver-dim text-base md:text-lg leading-relaxed max-w-2xl"
            >
              {intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide uppercase rounded-lg bg-gold/20 text-gold-bright border border-gold/40 hover:bg-gold/30 hover:border-gold/60 transition-all duration-300"
              >
                Kostenlos beraten lassen
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide uppercase rounded-lg border border-white/10 text-silver hover:border-white/20 hover:text-silver-bright transition-all duration-300"
              >
                Alle Leistungen
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
