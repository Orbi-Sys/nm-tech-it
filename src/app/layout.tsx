import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NM-TECH IT | Webentwicklung, KI & Automationen",
  description:
    "Premium digitale Lösungen: moderne Webseiten, KI-Systeme, Automationen, API-Integrationen und individuelle Software für Unternehmen.",
  keywords: [
    "Webentwicklung",
    "KI",
    "Automation",
    "Next.js",
    "Freelancer",
    "Software",
    "NM-TECH IT",
  ],
  openGraph: {
    title: "NM-TECH IT | Webentwicklung, KI & Automationen",
    description:
      "Hochwertige digitale Lösungen – modern, performant und zukunftssicher.",
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
      </body>
    </html>
  );
}
