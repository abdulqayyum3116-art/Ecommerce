"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import HeroTrustStrip from "./HeroTrustStrip";

const ICON = { size: 16, strokeWidth: 1.75, "aria-hidden": true } as const;

export default function Hero() {
  const highlightWords = ["Attract.", "Convert.", "Retain."];

  return (
    <section className="relative isolate overflow-hidden bg-bg text-fg border-b border-border pt-[var(--section-y)] pb-16 md:pb-24">
      {/* Single, rare emphasis glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[36rem] max-w-5xl rounded-full bg-accent-subtle opacity-70 blur-3xl"
      />

      <div className="mx-auto max-w-[var(--layout-max)] px-[var(--gutter)]">
        <div className="mx-auto max-w-4xl text-center">
          {/* EXACTLY ONE H1 ON THE ENTIRE HOMEPAGE */}
          <h1
            className="type-display text-fg mb-6"
            aria-label="Turn traffic into revenue. Buyers into regulars."
          >
            Turn traffic into revenue.{" "}
            <span className="block italic font-medium text-accent-text">Buyers into regulars.</span>
          </h1>

          {/* Tagline with entrance-sequenced words */}
          <p className="mb-6 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 type-body-lg">
            {highlightWords.map((word, index) => (
              <span
                key={word}
                className="animate-rise inline-block font-display font-semibold text-fg"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {word}
              </span>
            ))}
            <span className="text-fg-muted">Predictable growth for modern brands.</span>
          </p>

          {/* Sub-copy */}
          <p className="mx-auto mb-8 measure type-body-lg text-fg-secondary">
            We build and optimize high-converting online stores — bespoke Shopify &amp; Headless builds, conversion-rate optimization (CRO), generative AI search SEO, paid shopping feeds, and automated customer retention.
          </p>

          {/* Value micro-pills */}
          <ul className="mb-10 flex flex-wrap items-center justify-center gap-2 type-caption text-fg-secondary">
            <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 shadow-elevation-1">
              <Zap {...ICON} className="text-accent-text" />
              Sub-second Mobile PDP Speeds
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 shadow-elevation-1">
              <ShieldCheck {...ICON} className="text-accent-text" />
              Zero Bloat Architecture
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 shadow-elevation-1">
              <span aria-hidden className="size-2 rounded-full bg-success-solid pulse-dot" />
              15-Min Speed-to-Lead Follow-up
            </li>
          </ul>

          {/* Primary & secondary CTAs */}
          <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 type-button text-on-accent shadow-elevation-2 transition-[background-color,box-shadow,transform] duration-200 ease-standard hover:bg-accent-hover hover:shadow-elevation-3 active:translate-y-px active:bg-accent-pressed sm:w-auto"
            >
              Free Store Audit
              <ArrowUpRight {...ICON} className="transition-transform duration-200 ease-standard group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/case-studies"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-surface-raised px-7 type-button text-fg transition-[background-color,border-color] duration-200 ease-standard hover:border-fg hover:bg-bg-subtle active:bg-bg-muted sm:w-auto"
            >
              View Case Studies
              <ArrowRight {...ICON} className="text-fg-muted transition-transform duration-200 ease-standard group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Ecosystem trust strip */}
        <div className="mx-auto max-w-5xl">
          <HeroTrustStrip />
        </div>
      </div>
    </section>
  );
}
