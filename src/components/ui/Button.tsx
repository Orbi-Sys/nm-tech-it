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
    "relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg overflow-hidden group";

  const variants = {
    primary:
      "bg-white/10 text-silver-bright border border-white/20 hover:border-white/40 hover:bg-white/15",
    secondary:
      "bg-transparent text-silver border border-white/10 hover:border-white/25 hover:bg-white/5",
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}
