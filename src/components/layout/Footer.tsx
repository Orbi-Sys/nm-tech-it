import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { CircuitAccent } from "@/components/ui/CircuitAccent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="#" className="flex items-center gap-3">
              <Image src="/logo.png" alt="NM-TECH IT" width={48} height={48} />
              <div>
                <span className="font-display text-lg font-bold tracking-wider metallic-text block">
                  NM-TECH IT
                </span>
                <span className="text-[10px] tracking-[0.25em] text-silver-dim uppercase">
                  Lösungen. Technologie. Zukunft.
                </span>
              </div>
            </Link>
            <CircuitAccent className="w-12 h-6 opacity-50" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-silver-dim hover:text-silver-bright transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {["LinkedIn", "GitHub", "X"].map((social) => (
              <span
                key={social}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-xs text-silver-dim hover:border-white/25 hover:text-silver-bright transition-all cursor-default"
                title={social}
              >
                {social[0]}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-silver-dim">
          © {year} NM-TECH IT. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
