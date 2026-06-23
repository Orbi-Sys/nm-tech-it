import type { Metadata } from "next";
import { faqCategories } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ) – KI, Automatisierung & Webentwicklung | NM-TECH IT",
  description:
    "Antworten auf häufige Fragen zu Webentwicklung, KI-Integration, Automatisierung, Kosten und Ablauf. Für Unternehmen in Lastrup, Cloppenburg und dem Emsland.",
  alternates: {
    canonical: "https://nm-tech-it.de/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-bg-deep text-silver antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-24">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
