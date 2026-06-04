import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackToTop } from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "NM-TECH IT – Software Engineer & Digitalisierungspartner",
  description:
    "Nikita Aleschkin – Software Engineer & Digitalisierungspartner aus Lastrup. Moderne Webseiten, KI-Integrationen und intelligente Automationen für Unternehmen.",
  keywords: [
    "Software Engineer",
    "Digitalisierungspartner",
    "Webentwicklung",
    "Automation",
    "KI-Systeme",
    "Next.js",
    "NM-TECH IT",
    "Lastrup",
    "Cloppenburg",
    "Niedersachsen",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "NM-TECH IT – Software Engineer & Digitalisierungspartner",
    description:
      "Nikita Aleschkin – Software Engineer & Digitalisierungspartner aus Lastrup. Moderne Webseiten, KI-Integrationen und intelligente Automationen für Unternehmen.",
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
    "image": "https://nm-tech-it.de/logo.png",
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
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
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

