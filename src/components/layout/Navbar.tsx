"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "bg-bg-deep/90 border-white/10 backdrop-blur-xl"
          : "bg-bg-deep/40 border-white/5 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#" className="flex items-center gap-4 group">
          <div className="relative w-[64px] h-[64px] shrink-0">
            <Image
              src="/logo.png"
              alt="NM-TECH IT Logo"
              width={64}
              height={64}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="hidden sm:block font-display text-sm font-semibold tracking-[0.2em] text-silver-bright uppercase">
            NM-TECH IT
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-silver-dim hover:text-gold-bright transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden md:inline-flex text-xs font-medium tracking-widest uppercase px-5 py-2.5 rounded-lg border border-gold/25 text-gold-bright hover:bg-gold/15 hover:border-gold/50 transition-all duration-300"
        >
          Projekt starten
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menü"
        >
          <span className={`block w-6 h-px bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-white/10 bg-bg-deep/95 backdrop-blur-xl"
        >
          <ul className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-silver hover:text-gold-bright transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block mt-2 text-sm uppercase tracking-widest text-gold-bright"
              >
                Projekt starten
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
