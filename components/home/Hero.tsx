"use client";

import { ArrowUpRight, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import HeroTrustStrip from "./HeroTrustStrip";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, StatusDot } from "@/components/ui/Badge";
import { icon } from "@/components/ui/icon";

export default function Hero() {
  const highlightWords = ["Attract.", "Convert.", "Retain."];

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-bg pt-[var(--section-y)] pb-16 text-fg md:pb-24">
      {/* Single, rare emphasis glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[36rem] max-w-5xl rounded-full bg-accent-subtle opacity-70 blur-3xl"
      />

      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          {/* EXACTLY ONE H1 ON THE ENTIRE HOMEPAGE */}
          <h1 className="type-display mb-6 text-fg" aria-label="Turn traffic into revenue. Buyers into regulars.">
            Turn traffic into revenue.{" "}
            <span className="block font-medium text-accent-text italic">Buyers into regulars.</span>
          </h1>

          {/* Tagline with entrance-sequenced words */}
          <p className="mb-6 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 type-body-lg">
            {highlightWords.map((word, index) => (
              <span
                key={word}
                className="inline-block font-display font-semibold text-fg motion-safe:animate-rise"
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
          <ul className="mb-10 flex flex-wrap items-center justify-center gap-2">
            <li>
              <Badge tone="outline" icon={<Zap {...icon.sm} className="text-accent-text" />} className="shadow-elevation-1">
                Sub-second Mobile PDP Speeds
              </Badge>
            </li>
            <li>
              <Badge tone="outline" icon={<ShieldCheck {...icon.sm} className="text-accent-text" />} className="shadow-elevation-1">
                Zero Bloat Architecture
              </Badge>
            </li>
            <li>
              <Badge tone="outline" icon={<StatusDot live />} className="shadow-elevation-1">
                15-Min Speed-to-Lead Follow-up
              </Badge>
            </li>
          </ul>

          {/* Primary & secondary CTAs */}
          <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg" className="w-full sm:w-auto" trailingIcon={<ArrowUpRight {...icon.sm} />}>
              Free Store Audit
            </ButtonLink>
            <ButtonLink
              href="/case-studies"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              trailingIcon={<ArrowRight {...icon.sm} className="text-fg-muted" />}
            >
              View Case Studies
            </ButtonLink>
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
