"use client";

import { ArrowUpRight, ArrowRight, Layers, ChartLine } from "lucide-react";
import HeroTrustStrip from "./HeroTrustStrip";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, StatusDot } from "@/components/ui/Badge";
import { icon } from "@/components/ui/icon";

export default function Hero() {
  const highlightWords = ["Get found.", "Get chosen.", "Get them back."];

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-bg pt-[calc(var(--section-y)+4rem)] pb-16 text-fg md:pb-24">
      {/* Single, rare emphasis glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[36rem] max-w-5xl rounded-full bg-accent-subtle opacity-70 blur-3xl"
      />

      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          {/* EXACTLY ONE H1 ON THE ENTIRE HOMEPAGE */}
          <h1 className="type-display mb-6 text-fg" aria-label="Turn ad spend into revenue. Buyers into regulars.">
            Turn ad spend into revenue.{" "}
            <span className="block font-display-italic font-medium text-accent-text italic">Buyers into regulars.</span>
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
            <span className="text-fg-muted">Marketing that pays for itself.</span>
          </p>

          {/* Sub-copy */}
          <p className="mx-auto mb-8 measure type-body-lg text-fg-secondary">
            We grow online stores with Google and Meta ads, product SEO and AI search visibility, social media handling with scroll-stopping product videos, and email and order automations that bring buyers back.
          </p>

          {/* Value micro-pills */}
          <ul className="mb-10 flex flex-wrap items-center justify-center gap-2 motion-safe:animate-rise" style={{ animationDelay: "240ms" }}>
            <li>
              <Badge tone="outline" icon={<ChartLine {...icon.sm} className="text-accent-text" />} className="shadow-elevation-1">
                Reported on profit, not clicks
              </Badge>
            </li>
            <li>
              <Badge tone="outline" icon={<Layers {...icon.sm} className="text-accent-text" />} className="shadow-elevation-1">
                Ads, search &amp; email in one plan
              </Badge>
            </li>
            <li>
              <Badge tone="outline" icon={<StatusDot live />} className="shadow-elevation-1">
                We reply within 15 minutes
              </Badge>
            </li>
          </ul>

          {/* Primary & secondary CTAs */}
          <div className="mb-16 flex flex-col items-center justify-center gap-3 motion-safe:animate-rise sm:flex-row" style={{ animationDelay: "320ms" }}>
            <ButtonLink href="/contact" size="lg" className="w-full sm:w-auto" trailingIcon={<ArrowUpRight {...icon.sm} />}>
              Free Marketing Audit
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
