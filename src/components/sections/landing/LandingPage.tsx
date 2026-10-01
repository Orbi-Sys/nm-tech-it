import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeistungHero } from "@/components/sections/leistung/LeistungHero";
import { LeistungFeatures } from "@/components/sections/leistung/LeistungFeatures";
import { LeistungBody } from "@/components/sections/leistung/LeistungBody";
import { LeistungRelated } from "@/components/sections/leistung/LeistungRelated";
import { LeistungCTA } from "@/components/sections/leistung/LeistungCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { landingPages, LandingPageKey } from "@/lib/landingPages";

const baseUrl = "https://nm-tech-it.de";

export function landingMetadata(key: LandingPageKey): Metadata {
  const page = landingPages[key];
  const url = `${baseUrl}${page.path}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      images: ["/opengraph-image"],
      siteName: "NM-TECH IT",
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export function LandingPage({ pageKey }: { pageKey: LandingPageKey }) {
  const page = landingPages[pageKey];
  const url = `${baseUrl}${page.path}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.metaDescription,
      url,
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Landkreis Cloppenburg" },
        { "@type": "AdministrativeArea", name: "Landkreis Vechta" },
        { "@type": "AdministrativeArea", name: "Emsland" },
        { "@type": "City", name: "Oldenburg" },
        { "@type": "City", name: "Osnabrück" },
        { "@type": "Country", name: "Deutschland" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: baseUrl },
        { "@type": "ListItem", position: 2, name: page.title, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-bg-deep text-silver antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <LeistungHero
          label={page.label}
          title={page.title}
          tagline={page.tagline}
          intro={page.intro}
          icon={page.icon}
        />
        <LeistungFeatures features={page.features} />
        <LeistungBody body={page.body} useCases={page.useCases} />
        <section className="relative py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <SectionHeading label="FAQ" title="Häufige Fragen" />
            <FAQAccordion items={page.faqs} />
          </div>
        </section>
        <LeistungRelated slugs={page.relatedSlugs} />
        <LeistungCTA heading={page.ctaHeading} body={page.ctaBody} />
      </main>
      <Footer />
    </div>
  );
}
