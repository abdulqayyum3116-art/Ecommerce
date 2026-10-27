import Hero from "@/components/home/Hero";
import StoreLoopMock from "@/components/home/StoreLoopMock";
import GrowthCycle from "@/components/home/GrowthCycle";
import NichesSection from "@/components/home/NichesSection";
import FlatCaseStudiesShowcase from "@/components/home/FlatCaseStudiesShowcase";
import HomeCta from "@/components/home/HomeCta";
import Link from "next/link";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Card, IconTile } from "@/components/ui/Card";
import { TextLink } from "@/components/ui/Button";
import { icon } from "@/components/ui/icon";
import { ArrowUpRight, ShoppingCart, TrendingUp, Search, Megaphone, Mail, RefreshCw } from "lucide-react";

export default function HomePage() {
  const quickServices = [
    {
      title: "Store Build & Redesign",
      href: "/services/store-build",
      icon: ShoppingCart,
      desc: "High-performance Shopify, WooCommerce, and Headless Next.js storefronts built to scale.",
    },
    {
      title: "CRO & UX Optimization",
      href: "/services/cro",
      icon: TrendingUp,
      desc: "Remove checkout drop-offs and maximize average order value with rapid testing.",
    },
    {
      title: "SEO & GEO for Products",
      href: "/services/seo-geo",
      icon: Search,
      desc: "Product feed optimization for Google Shopping, Perplexity, and AI search engines.",
    },
    {
      title: "Paid Shopping & Ads",
      href: "/services/paid-ads",
      icon: Megaphone,
      desc: "Performance Max and feed-driven acquisition campaigns tied directly to order margins.",
    },
    {
      title: "Email & SMS Retention",
      href: "/services/retention",
      icon: Mail,
      desc: "Klaviyo automated flows for cart abandonment, post-purchase, and win-back sequences.",
    },
    {
      title: "CRM & Order Automation",
      href: "/services/automation-crm",
      icon: RefreshCw,
      desc: "Automated warehouse syncing, order routing, fraud screening, and returns management.",
    },
  ];

  return (
    <>
      {/* 1. Hero with single H1 */}
      <Hero />

      {/* 2. Interactive store-loop mock on an ink band */}
      <Section tone="band" aria-labelledby="conversion-sequence-heading">
        <Container>
          <SectionHeader
            id="conversion-sequence-heading"
            align="center"
            overline="Conversion Lifecycle"
            title="The 6-stage store conversion sequence."
            lead="Hover over or select any phase to inspect the engineering levers powering that transition."
          />
          <div className="mx-auto max-w-5xl">
            <StoreLoopMock />
          </div>
        </Container>
      </Section>

      {/* 3. Growth system cycle (Attract → Convert → Retain → Repeat) */}
      <GrowthCycle />

      {/* 4. Services quick grid */}
      <Section tone="subtle" aria-labelledby="home-services-heading">
        <Container>
          <SectionHeader
            id="home-services-heading"
            overline="End-to-End Capabilities"
            title="Six focused pillars for store revenue."
            lead="Every service connects directly into the revenue cycle. No fragmented handoffs or guesswork."
            action={
              <TextLink href="/services">
                View detailed services hub
                <ArrowUpRight {...icon.sm} />
              </TextLink>
            }
          />

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quickServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <Card as="li" key={svc.title} interactive className="group flex flex-col justify-between">
                  <div>
                    <IconTile className="mb-6 transition-colors duration-200 group-hover:bg-accent group-hover:text-on-accent">
                      <Icon {...icon.lg} />
                    </IconTile>
                    <h3 className="mb-3 type-h4 text-fg">
                      <Link
                        href={svc.href}
                        className="rounded-sm after:absolute after:inset-0 after:rounded-lg after:content-['']"
                      >
                        {svc.title}
                      </Link>
                    </h3>
                    <p className="mb-6 type-body-sm text-fg-secondary">{svc.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 border-t border-border pt-4 type-body-sm font-bold text-accent-text">
                    <span>Explore capability</span>
                    <ArrowUpRight
                      {...icon.sm}
                      className="transition-transform duration-200 ease-standard group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </Card>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* 5. Specialized niches */}
      <NichesSection />

      {/* 6. Case studies showcase */}
      <FlatCaseStudiesShowcase />

      {/* 7. Audit CTA on an ink band */}
      <HomeCta />
    </>
  );
}
