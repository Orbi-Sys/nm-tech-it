import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ – Häufig gestellte Fragen | NM-TECH IT",
  description:
    "Antworten zu Webentwicklung, KI-Integrationen, Automationen und mehr. Alle wichtigen Fragen zu den Leistungen von NM-TECH IT auf einen Blick.",
  alternates: {
    canonical: "https://nm-tech-it.de/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-bg-deep text-silver antialiased">
      <Navbar />
      <main className="pt-24">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
