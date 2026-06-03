import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "NM-TECH IT – Software Engineer & Digitalisierungspartner",
  description:
    "Nikita Aleschkin – Software Engineer & Digitalisierungspartner aus Lastrup. Moderne Webseiten, KI-Integrationen und intelligente Automationen für Unternehmen.",
  keywords: [
    "Software Engineer",
    "Digitalisierungspartner",
    "Webentwicklung",
    "Automation",
    "Next.js",
    "Freelancer",
    "NM-TECH IT",
  ],
  icons: {
    icon: "/logo.ico",
  },
  openGraph: {
    title: "NM-TECH IT – Software Engineer & Digitalisierungspartner",
    description:
      "Nikita Aleschkin – Software Engineer & Digitalisierungspartner aus Lastrup. Moderne Webseiten, KI-Integrationen und intelligente Automationen für Unternehmen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <body className="min-h-screen bg-bg-deep text-silver antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
