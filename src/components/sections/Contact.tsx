"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sendEmail } from "@/app/actions/sendEmail";

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus("success");
        setStatusMessage(result.message);
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(result.message);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage(
        "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später noch einmal."
      );
    }
  };

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-gold/[0.02] border text-silver-bright placeholder:text-silver-dim/50 outline-none transition-all duration-300";

  return (
    <section id="contact" className="relative py-28 md:py-36 snap-section">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px]" />
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
                  ? "border-gold/40 shadow-[0_0_20px_rgba(212,166,111,0.12)]"
                  : "border-gold/20"
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
                  ? "border-gold/40 shadow-[0_0_20px_rgba(212,166,111,0.12)]"
                  : "border-gold/20"
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
                  ? "border-gold/40 shadow-[0_0_20px_rgba(212,166,111,0.12)]"
                  : "border-gold/20"
              }`}
              placeholder="Beschreiben Sie Ihr Projekt..."
            />
          </div>

          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl text-sm ${
                status === "success"
                  ? "border border-green-500/20 bg-green-500/10 text-green-400"
                  : status === "error"
                  ? "border border-red-500/20 bg-red-500/10 text-red-400"
                  : "border border-white/10 bg-white/5 text-silver"
              }`}
            >
              {statusMessage || (status === "loading" && "Nachricht wird gesendet...")}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={status !== "loading" ? { scale: 1.02 } : {}}
            whileTap={status !== "loading" ? { scale: 0.98 } : {}}
            className={`w-full py-4 rounded-xl font-medium tracking-widest uppercase text-sm transition-all duration-300 ${
              status === "loading"
                ? "bg-gold/10 border border-gold/20 text-gold-dim cursor-not-allowed"
                : "bg-gold/20 border border-gold/40 text-gold-bright hover:bg-gold/30 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(212,166,111,0.15)] cursor-pointer"
            }`}
          >
            {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
          </motion.button>
        </motion.form>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:kontakt@nm-tech-it.de"
            className="rounded-3xl border border-gold/20 bg-gold/[0.03] px-6 py-5 text-sm text-gold-bright transition-colors hover:border-gold/40 hover:bg-gold/10"
          >
            <span className="block text-gold-dim text-xs uppercase tracking-[0.3em] mb-2">E-Mail</span>
            kontakt@nm-tech-it.de
          </a>
          <a
            href="tel:+4915234801274"
            className="rounded-3xl border border-gold/20 bg-gold/[0.03] px-6 py-5 text-sm text-gold-bright transition-colors hover:border-gold/40 hover:bg-gold/10"
          >
            <span className="block text-gold-dim text-xs uppercase tracking-[0.3em] mb-2">Telefon</span>
            +49 1523 4801274
          </a>
          <a
            href="https://wa.me/4915234801274"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-3xl border border-gold/20 bg-gold/[0.03] px-6 py-5 text-sm text-gold-bright transition-colors hover:border-gold/40 hover:bg-gold/10"
          >
            <span className="block text-gold-dim text-xs uppercase tracking-[0.3em] mb-2">WhatsApp</span>
            Nachricht senden
          </a>
        </div>
      </div>
    </section>
  );
}