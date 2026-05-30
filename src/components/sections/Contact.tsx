"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-white/[0.03] border text-silver-bright placeholder:text-silver-dim/50 outline-none transition-all duration-300";

  return (
    <section id="contact" className="relative py-28 md:py-36 snap-section">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          label="Kontakt"
          title="Projekt starten"
          description="Erzählen Sie mir von Ihrem Vorhaben – ich melde mich zeitnah bei Ihnen."
        />

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="glass-strong rounded-2xl p-8 md:p-12 glow-ring space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-xs tracking-widest uppercase text-silver-dim mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              className={`${inputClass} ${
                focused === "name"
                  ? "border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.06)]"
                  : "border-white/10"
              }`}
              placeholder="Ihr Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs tracking-widest uppercase text-silver-dim mb-2">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className={`${inputClass} ${
                focused === "email"
                  ? "border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.06)]"
                  : "border-white/10"
              }`}
              placeholder="ihre@email.de"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs tracking-widest uppercase text-silver-dim mb-2">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className={`${inputClass} resize-none ${
                focused === "message"
                  ? "border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.06)]"
                  : "border-white/10"
              }`}
              placeholder="Beschreiben Sie Ihr Projekt..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl bg-white/10 border border-white/20 text-silver-bright font-medium tracking-widest uppercase text-sm hover:bg-white/15 hover:border-white/35 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300"
          >
            Nachricht senden
          </motion.button>
        </motion.form>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:aleschkinn@gmail.com"
            className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 text-sm text-silver-bright transition-colors hover:border-white/25 hover:bg-white/10"
          >
            <span className="block text-silver-dim text-xs uppercase tracking-[0.3em] mb-2">E-Mail</span>
            aleschkinn@gmail.com
          </a>
          <a
            href="tel:+4915234801274"
            className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 text-sm text-silver-bright transition-colors hover:border-white/25 hover:bg-white/10"
          >
            <span className="block text-silver-dim text-xs uppercase tracking-[0.3em] mb-2">Telefon</span>
            +49 1523 4801274
          </a>
          <a
            href="https://linkedin.com/in/nikita-aleschkin-it"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 text-sm text-silver-bright transition-colors hover:border-white/25 hover:bg-white/10"
          >
            <span className="block text-silver-dim text-xs uppercase tracking-[0.3em] mb-2">LinkedIn</span>
            linkedin.com/in/nikita-aleschkin-it
          </a>
        </div>
      </div>
    </section>
  );
}
