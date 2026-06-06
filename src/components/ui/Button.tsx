"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg overflow-hidden group";

  const variants = {
    primary:
      "bg-gold/20 text-gold-bright border border-gold/40 hover:border-gold/60 hover:bg-gold/30",
    secondary:
      "bg-transparent text-gold border border-gold/20 hover:border-gold/40 hover:bg-gold/10",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full sm:w-auto"
    >
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}
