import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { leistungenData, LeistungSlug } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeistungHero } from "@/components/sections/leistung/LeistungHero";
import { LeistungFeatures } from "@/components/sections/leistung/LeistungFeatures";
import { LeistungBody } from "@/components/sections/leistung/LeistungBody";
import { LeistungRelated } from "@/components/sections/leistung/LeistungRelated";
import { LeistungCTA } from "@/components/sections/leistung/LeistungCTA";

const iconMap: Record<LeistungSlug, string> = {
  webentwicklung: "code",
  "ki-integrationen": "brain",
  "ki-automatisierung": "workflow",
  "api-anbindungen": "api",
  dashboards: "chart",
  "individuelle-softwareloesungen": "cube",
};

export async function generateStaticParams() {
  return (Object.keys(leistungenData) as LeistungSlug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = leistungenData[slug as LeistungSlug];
  if (!data) notFound();

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: {
      canonical: `https://nm-tech-it.de/leistungen/${slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://nm-tech-it.de/leistungen/${slug}`,
      siteName: "NM-TECH IT",
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function LeistungPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = leistungenData[slug as LeistungSlug];
  if (!data) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.metaDescription,
    url: `https://nm-tech-it.de/leistungen/${slug}`,
    provider: {
      "@type": "ProfessionalService",
      "@id": "https://nm-tech-it.de/#organization",
      name: "NM-TECH IT",
      url: "https://nm-tech-it.de",
      telephone: "+4915234801274",
      email: "kontakt@nm-tech-it.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Heinrich-Böll-Straße 12",
        addressLocality: "Lastrup",
        postalCode: "49688",
        addressCountry: "DE",
      },
      areaServed: [
        { "@type": "City", name: "Lastrup" },
        { "@type": "City", name: "Cloppenburg" },
        { "@type": "City", name: "Vechta" },
        { "@type": "City", name: "Oldenburg" },
        { "@type": "AdministrativeArea", name: "Niedersachsen" },
      ],
    },
    areaServed: [
      { "@type": "City", name: "Lastrup" },
      { "@type": "City", name: "Cloppenburg" },
      { "@type": "City", name: "Vechta" },
      { "@type": "City", name: "Oldenburg" },
      { "@type": "AdministrativeArea", name: "Niedersachsen" },
    ],
  };

  return (
    <div className="min-h-screen bg-bg-deep text-silver antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <LeistungHero
          label={data.title}
          title={data.title}
          tagline={data.tagline}
          intro={data.intro}
          icon={iconMap[data.slug]}
        />
        <LeistungFeatures features={data.features} />
        <LeistungBody body={data.body} useCases={data.useCases} closingLink={data.closingLink} />
        <LeistungRelated currentSlug={data.slug} />
        <LeistungCTA heading={data.ctaHeading} body={data.ctaBody} />
      </main>
      <Footer />
    </div>
  );
}
