import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { services, serviceDetails, faqCategories } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails.find((d) => d.slug === slug);
  if (!detail) return {};
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    alternates: {
      canonical: `https://nm-tech-it.de/leistungen/${slug}`,
    },
  };
}

export default async function LeistungPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails.find((d) => d.slug === slug);

  if (!service || !detail) notFound();

  const faqCategory = faqCategories.find((c) => c.category === detail.faqCategoryKey);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: "NM-TECH IT",
      url: "https://nm-tech-it.de",
    },
    url: `https://nm-tech-it.de/leistungen/${slug}`,
    areaServed: "DE",
  };

  return (
    <div className="min-h-screen bg-bg-deep text-silver antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-24">
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-elevated/30 to-bg-deep pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-6 lg:px-8">

            <SectionHeading
              label="Leistungen"
              title={service.title}
              description={service.description}
            />

            {/* Beschreibung */}
            <div className="glass rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)] space-y-5 text-silver-dim leading-relaxed text-base md:text-lg">
              {detail.longParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-14">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-silver-bright mb-8 text-center">
                Was Sie erhalten
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {detail.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-gold/20 hover:bg-gold/[0.02] transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="mt-0.5 flex-shrink-0 w-5 h-5 text-gold"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-silver leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            {faqCategory && (
              <div className="mt-16">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-silver-bright mb-8 text-center">
                  Häufige Fragen zu {service.title}
                </h2>
                <FAQAccordion items={faqCategory.faqs} />
              </div>
            )}

            {/* CTA */}
            <div className="mt-16">
              <div className="glass rounded-3xl border border-gold/15 bg-gold/[0.02] p-8 md:p-10 text-center">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-silver-bright mb-4">
                  Bereit für den nächsten Schritt?
                </h2>
                <p className="text-silver-dim mb-8 max-w-xl mx-auto">
                  Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie {service.title.toLowerCase()} Ihr Unternehmen voranbringen kann.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-xl border border-gold/25 text-gold-bright hover:bg-gold/15 hover:border-gold/50 transition-all duration-300"
                >
                  Kostenloses Erstgespräch
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
