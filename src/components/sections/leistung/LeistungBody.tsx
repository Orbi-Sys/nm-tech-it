"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  body: string;
  useCases: string[];
  closingLink?: { text: string; linkLabel: string; href: string };
};

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

export function LeistungBody({ body, useCases, closingLink }: Props) {
  const paragraphs = body.trim().split("\n\n").filter(Boolean);

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6"
          >
            <SectionHeading
              label="Mehr erfahren"
              title="Im Detail"
              className="text-left mx-0 max-w-none mb-8"
            />
            {paragraphs.map((p, i) => (
              <p key={i} className="text-silver-dim leading-relaxed text-base md:text-[17px]">
                {renderWithLinks(p)}
              </p>
            ))}
            {closingLink && (
              <p className="text-silver-dim leading-relaxed text-base md:text-[17px]">
                {closingLink.text}
                <Link
                  href={closingLink.href}
                  className="text-gold-bright hover:text-white transition-colors underline underline-offset-2"
                >
                  {closingLink.linkLabel}
                </Link>
                .
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="glass glow-ring rounded-2xl p-8 sticky top-28">
              <p className="text-xs tracking-[0.25em] uppercase text-gold-dim mb-5">
                Typische Einsatzbereiche
              </p>
              <ul className="space-y-4">
                {useCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-gold/10 border border-gold/20">
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        className="w-3 h-3 text-gold-bright"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-silver-dim text-sm leading-snug">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
