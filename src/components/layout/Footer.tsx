import Image from "next/image";
import Link from "next/link";
import { CircuitAccent } from "@/components/ui/CircuitAccent";

const footerLinks = [
  { label: "Über mich", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projekte", href: "#projects" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Vorteile", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Prozess", href: "#process" },
  { label: "Kontakt", href: "#contact" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/15 bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative w-[80px] h-[80px] shrink-0">
                <Image src="/logo.webp" alt="NM-TECH IT" width={80} height={80} priority unoptimized />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-wider metallic-text block">
                  NM-TECH IT
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gold-dim uppercase">
                  Lösungen. Technologie. Zukunft.
                </span>
              </div>
            </Link>
            <CircuitAccent className="w-12 h-6 opacity-50" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-silver-dim hover:text-gold-bright transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 text-center text-sm text-silver-dim">
          © {year} NM-TECH IT – Nikita Aleschkin. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
