import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackToTop } from "@/components/ui/BackToTop";
import { services } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nm-tech-it.de"),
  title: "Softwareentwicklung, KI & Automatisierung in Lastrup & Cloppenburg | NM-TECH IT",
  description:
    "Nikita Aleschkin – Software Engineer aus Lastrup. Individuelle Software, KI-Integrationen und Prozessautomatisierung für Unternehmen in Cloppenburg, Vechta und dem Emsland. Kostenloses Erstgespräch.",
  keywords: [
    "Softwareentwicklung Lastrup",
    "Softwareentwickler Cloppenburg",
    "Individuelle Software Emsland",
    "KI Integration Unternehmen",
    "KI-Systeme Mittelstand",
    "Prozessautomatisierung Niedersachsen",
    "Workflow Automation n8n",
    "Software Engineer Lastrup",
    "IT Freelancer Niedersachsen",
    "Digitalisierungspartner",
    "NM-TECH IT",
    "Nikita Aleschkin",
  ],
  alternates: {
    canonical: "https://nm-tech-it.de",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.ico",
  },
  openGraph: {
    title: "Softwareentwicklung, KI & Automatisierung in Lastrup & Cloppenburg | NM-TECH IT",
    description:
      "Individuelle Software, KI-Integrationen und Prozessautomatisierung für Unternehmen in Lastrup, Cloppenburg, Vechta und dem Emsland.",
    url: "https://nm-tech-it.de",
    siteName: "NM-TECH IT",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const areaServed = [
    { "@type": "City", name: "Lastrup" },
    { "@type": "City", name: "Cloppenburg" },
    { "@type": "City", name: "Vechta" },
    { "@type": "City", name: "Oldenburg" },
    { "@type": "AdministrativeArea", name: "Emsland" },
    { "@type": "AdministrativeArea", name: "Niedersachsen" },
    { "@type": "Country", name: "Deutschland" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://nm-tech-it.de/#organization",
        name: "NM-TECH IT",
        url: "https://nm-tech-it.de",
        logo: "https://nm-tech-it.de/logo.png",
        image: "https://nm-tech-it.de/logo.webp",
        telephone: "+4915234801274",
        email: "kontakt@nm-tech-it.de",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Heinrich-Böll-Straße 12",
          addressLocality: "Lastrup",
          postalCode: "49688",
          addressRegion: "Niedersachsen",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 52.7944,
          longitude: 7.8925,
        },
        areaServed,
        priceRange: "€€",
        founder: { "@id": "https://nm-tech-it.de/#nikita-aleschkin" },
        knowsAbout: [
          "Softwareentwicklung",
          "Künstliche Intelligenz",
          "KI-Integration",
          "Chatbots",
          "Prozessautomatisierung",
          "n8n",
          "Make",
          "Zapier",
          "Microsoft Power Automate",
          "42°OS",
          "Prozessoptimierung",
          "API-Anbindungen",
          "Dashboards",
          "Webentwicklung",
          "Next.js",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Leistungen",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: `https://nm-tech-it.de${service.href}`,
            },
          })),
        },
        description:
          "Nikita Aleschkin – Software Engineer aus Lastrup. Individuelle Software, KI-Integrationen und Prozessautomatisierung für Unternehmen in Cloppenburg, Vechta und dem Emsland.",
      },
      {
        "@type": "Person",
        "@id": "https://nm-tech-it.de/#nikita-aleschkin",
        name: "Nikita Aleschkin",
        jobTitle: "Software Engineer & Digitalisierungspartner",
        image: "https://nm-tech-it.de/Nikita_Aleschkin.webp",
        url: "https://nm-tech-it.de/#about",
        worksFor: { "@id": "https://nm-tech-it.de/#organization" },
        knowsLanguage: ["de", "en", "ru"],
      },
      {
        "@type": "WebSite",
        "@id": "https://nm-tech-it.de/#website",
        url: "https://nm-tech-it.de",
        name: "NM-TECH IT",
        inLanguage: "de-DE",
        publisher: { "@id": "https://nm-tech-it.de/#organization" },
      },
    ],
  };

  return (
    <html lang="de" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <link
          rel="preload"
          href="/logo.webp"
          as="image"
          type="image/webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg-deep text-silver antialiased">
        {children}
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

