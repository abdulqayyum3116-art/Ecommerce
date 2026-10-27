"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Process", href: "/process" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F1A]/85 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="Ecommerce By CodeSquad Homepage"
        >
          <span className="font-bold text-2xl tracking-tight text-white font-serif">
            Ecommerce<span className="text-blue-500">.</span>
          </span>
          <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-300 bg-white/[0.06] border border-white/[0.1] px-2.5 py-0.5 rounded-full shadow-2xs">
            By CodeSquad
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-[15px] font-semibold text-white btn-glow px-4 py-2.5 rounded-xl transition-all shadow-sm"
          >
            Free Store Audit
            <ArrowUpRight className="ml-1.5 w-4 h-4 text-blue-100 group-hover:text-white" />
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0B0F1A] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center text-base font-semibold text-white btn-glow py-3 rounded-xl"
            >
              Free Store Audit
              <ArrowUpRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
