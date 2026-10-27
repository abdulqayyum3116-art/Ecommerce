"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import StoreLoopMock from "./StoreLoopMock";
import HeroTrustStrip from "./HeroTrustStrip";

export default function Hero() {
  const highlightWords = ["Attract.", "Convert.", "Retain."];

  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-[#0B0F1A] mesh-gradient-hero grain text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* EXACTLY ONE H1 ON THE ENTIRE HOMEPAGE */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-6 pt-2"
            aria-label="Turn traffic into revenue. Buyers into regulars."
          >
            Turn traffic into revenue.{" "}
            <span className="gradient-text block sm:inline">Buyers into regulars.</span>
          </h1>

          {/* Tagline with Entrance Sequential Words */}
          <div className="flex items-center justify-center gap-2 text-lg sm:text-xl font-medium text-slate-200 mb-6">
            {highlightWords.map((word, index) => (
              <span
                key={word}
                className="inline-block font-serif text-white font-semibold"
                style={{
                  animationDelay: `${index * 400}ms`,
                }}
              >
                {word}
              </span>
            ))}
            <span className="text-slate-400 font-normal">Predictable growth for modern brands.</span>
          </div>

          {/* Sub-copy */}
          <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            We build and optimize high-converting online stores — bespoke Shopify &amp; Headless builds, conversion-rate optimization (CRO), generative AI search SEO, paid shopping feeds, and automated customer retention.
          </p>

          {/* Value Micro-Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs font-medium text-slate-300">
            <span className="inline-flex items-center gap-1.5 glass-card px-3.5 py-1.5 rounded-full shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              Sub-second Mobile PDP Speeds
            </span>
            <span className="inline-flex items-center gap-1.5 glass-card px-3.5 py-1.5 rounded-full shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Zero Bloat Architecture
            </span>
            <span className="inline-flex items-center gap-1.5 glass-card px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-dot" />
              15-Min Speed-to-Lead Follow-up
            </span>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center text-base font-semibold text-white btn-glow px-8 py-4 rounded-xl transition-all group cursor-pointer"
            >
              Free Store Audit
              <ArrowUpRight className="ml-2 w-4 h-4 text-blue-100 group-hover:text-white transition-colors" />
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center text-base font-medium text-slate-200 hover:text-white btn-ghost-dark px-8 py-4 rounded-xl transition-colors cursor-pointer"
            >
              View Case Studies
              <ArrowRight className="ml-2 w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* Ecosystem Trust Strip */}
        <div className="max-w-5xl mx-auto">
          <HeroTrustStrip />
        </div>
      </div>
    </section>
  );
}
