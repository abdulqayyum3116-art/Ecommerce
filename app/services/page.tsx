import Link from "next/link";
import { ShoppingCart, TrendingUp, Search, Megaphone, Mail, RefreshCw, ArrowUpRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { Card, IconTile } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { icon } from "@/components/ui/icon";

export const metadata = generateSeoMetadata({
  title: "Ecommerce Services & Growth Capabilities | CodeSquad",
  description:
    "Explore CodeSquad's six core ecommerce services: Store builds, CRO, SEO/GEO for product feeds, paid ads, retention automations, and CRM order workflows.",
  path: "/services",
});

const services = [
  {
    slug: "store-build",
    title: "Store Build & Redesign",
    eyebrow: "Pillar 01",
    icon: ShoppingCart,
    tag: "Shopify Lead · Next.js Headless",
    desc: "We engineer lightweight, blazing-fast storefronts built for conversion. From clean Shopify theme development to headless Next.js architectures, we strip bloat and optimize checkout ergonomics.",
  },
  {
    slug: "cro",
    title: "CRO & UX Optimization",
    eyebrow: "Pillar 02",
    icon: TrendingUp,
    tag: "Mobile-First · Cart Drawer UX",
    desc: "Eliminate checkout drop-offs and elevate average order value (AOV). We deploy sticky add-to-cart controls, dynamic bundle builders, instant variant swatches, and frictionless one-page checkouts.",
  },
  {
    slug: "seo-geo",
    title: "SEO / GEO for Products",
    eyebrow: "Pillar 03",
    icon: Search,
    tag: "AI Search Bots · Google Shopping",
    desc: "Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). We structure product schema, merchant feeds, and descriptive FAQs for discovery on Google, Perplexity, and ChatGPT.",
  },
  {
    slug: "paid-ads",
    title: "Paid Ads for Stores",
    eyebrow: "Pillar 04",
    icon: Megaphone,
    tag: "Google Shopping · Performance Max",
    desc: "Acquisition campaigns tied to true order contribution margin. We optimize product feeds, structure Google Shopping campaigns by inventory margins, and eliminate wasted spend on dead SKUs.",
  },
  {
    slug: "retention",
    title: "Email & Retention Automation",
    eyebrow: "Pillar 05",
    icon: Mail,
    tag: "Klaviyo · SMS Speed-to-Lead",
    desc: "Transform one-time purchasers into repeat buyers. Automated browse abandonment, speed-to-lead SMS cart recovery, post-purchase replenishment reminders, and cohort-specific VIP flows.",
  },
  {
    slug: "automation-crm",
    title: "CRM & Order Automation",
    eyebrow: "Pillar 06",
    icon: RefreshCw,
    tag: "Multi-Warehouse · Fraud Screening",
    desc: "Remove operational friction behind every order. Real-time multi-location inventory syncing, automated routing to 3PL fulfillment centers, high-fraud flagging, and self-service return workflows.",
  },
];

export default function ServicesHubPage() {
  return (
    <div className="bg-bg">
      <PageHero
        overline="Integrated Capabilities"
        title="Engineering high-growth online stores from click to repeat order."
        lead="Every service is connected to the core ecommerce cycle: Attract, Convert, Retain, and Repeat. We eliminate fragmented agency handoffs by engineering the full growth system."
      />

      {/* Services grid */}
      <Section tone="subtle" aria-label="Services">
        <Container>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Card as="li" key={svc.slug} padding="lg" interactive className="group flex flex-col justify-between">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <IconTile className="transition-colors duration-200 group-hover:bg-accent group-hover:text-on-accent">
                        <Icon {...icon.lg} />
                      </IconTile>
                      <span className="type-overline text-fg-muted">{svc.eyebrow}</span>
                    </div>

                    <Badge tone="accent" shape="tag" className="mb-3">
                      {svc.tag}
                    </Badge>

                    <h2 className="mb-3 type-h3 text-fg">{svc.title}</h2>

                    <p className="mb-6 type-body-sm text-fg-secondary">{svc.desc}</p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-sm type-body-sm font-bold text-accent-text after:absolute after:inset-0 after:rounded-lg after:content-['']"
                    >
                      View full service breakdown
                      <ArrowUpRight
                        {...icon.sm}
                        className="transition-transform duration-200 ease-standard group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CtaBand
        id="services-cta-heading"
        title="Unsure which service will move the needle first?"
        lead="We will audit your store to identify whether traffic, checkout conversion, or repeat rate is your primary bottleneck."
        actions={
          <ButtonLink href="/contact" size="lg" trailingIcon={<ArrowUpRight {...icon.sm} />}>
            Request Free Store Audit
          </ButtonLink>
        }
      />
    </div>
  );
}
