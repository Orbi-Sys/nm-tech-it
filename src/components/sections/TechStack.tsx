"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStack() {
  return (
    <section id="tech" className="relative py-28 md:py-36 snap-section overflow-hidden">
      <div className="absolute inset-0 bg-bg-elevated/30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Technologie"
          title="Tech Stack"
          description="Bewährte, moderne Tools für skalierbare und zukunftssichere Lösungen."
        />

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              style={{ animationDelay: `${i * 0.3}s`, animationDuration: `${5 + (i % 4)}s` }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(212, 166, 111, 0.15)",
              }}
              className="px-6 py-4 md:px-8 md:py-5 rounded-xl glass border border-gold/20 hover:border-gold/40 transition-colors cursor-default animate-float"
            >
              <span className="font-display text-sm md:text-base font-semibold tracking-wide text-gold-bright">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
