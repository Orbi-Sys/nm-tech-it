import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackToTop } from "@/components/ui/BackToTop";

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
  title: "NM-TECH IT – Software Engineer & Digitalisierungspartner",
  description:
    "Nikita Aleschkin – Software Engineer & Digitalisierungspartner aus Lastrup. Moderne Webseiten, KI-Integrationen und intelligente Automationen für Unternehmen.",
  keywords: [
    "Software Engineer Lastrup",
    "Webentwickler Cloppenburg",
    "IT Freelancer Niedersachsen",
    "Digitalisierungspartner",
    "Webentwicklung Next.js",
    "KI Integration Unternehmen",
    "Workflow Automation n8n",
    "KI-Systeme Mittelstand",
    "Webseite erstellen Niedersachsen",
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
    title: "NM-TECH IT – Software Engineer & Digitalisierungspartner",
    description:
      "Nikita Aleschkin – Software Engineer & Digitalisierungspartner aus Lastrup. Moderne Webseiten, KI-Integrationen und intelligente Automationen für Unternehmen.",
    url: "https://nm-tech-it.de",
    siteName: "NM-TECH IT",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://nm-tech-it.de/logo.webp",
        width: 512,
        height: 512,
        alt: "NM-TECH IT Logo",
      },
    ],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NM-TECH IT",
    "image": "https://nm-tech-it.de/logo.webp",
    "@id": "https://nm-tech-it.de/#organization",
    "url": "https://nm-tech-it.de",
    "telephone": "+4915234801274",
    "email": "info@nm-tech-it.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Heinrich-Böll-Straße 12",
      "addressLocality": "Lastrup",
      "postalCode": "49688",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.7951,
      "longitude": 7.8631
    },
    "priceRange": "$$",
    "description": "Nikita Aleschkin – Software Engineer & Digitalisierungspartner aus Lastrup. Moderne Webseiten, KI-Integrationen und intelligente Automationen für Unternehmen."
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

