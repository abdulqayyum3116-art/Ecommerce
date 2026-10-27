import { ArrowUpRight, Shirt, Sparkles, Cpu, ShoppingBag } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Card, IconTile } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/Button";
import { icon } from "@/components/ui/icon";

interface Niche {
  title: string;
  badge: string;
  description: string;
  focusArea: string;
  icon: React.ElementType;
}

const niches: Niche[] = [
  {
    title: "Fashion & Apparel",
    badge: "Variant Speed & Lookbooks",
    description: "High-SKU visual merchandising, instant variant swatches, size-recommenders, and visual UGC integration that drops return rates.",
    focusArea: "Attract & Convert",
    icon: Shirt,
  },
  {
    title: "Beauty & Cosmetics",
    badge: "Sub-second PDPs & Bundles",
    description: "Multi-step regimen builders, automated subscription replenish intervals, and shade-finder UX optimized for sub-second mobile buying.",
    focusArea: "Convert & Retain",
    icon: Sparkles,
  },
  {
    title: "Consumer Electronics",
    badge: "Spec Comparisons & Warranties",
    description: "Complex technical spec matrices, warranty upsells in cart, and AI-driven search that guides buyers directly to compatible accessories.",
    focusArea: "Convert & Repeat",
    icon: Cpu,
  },
  {
    title: "DTC Scale Brands",
    badge: "High-Volume Funnels & LTV",
    description: "Custom headless Next.js or advanced Shopify Plus architecture designed for flash sales, global multi-currency, and Klaviyo lifecycle flows.",
    focusArea: "Attract to Repeat",
    icon: ShoppingBag,
  },
];

export default function NichesSection() {
  return (
    <Section aria-labelledby="niches-heading">
      <Container>
        <SectionHeader
          id="niches-heading"
          overline="Specialized Verticals"
          title="Engineered for high-velocity ecommerce niches."
          lead="Generic templates fail specialized catalogs. We tailor UX, checkout ergonomics, and retention automations to the exact purchasing rhythms of your industry."
        />

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {niches.map((niche) => {
            const Icon = niche.icon;
            return (
              <Card as="li" key={niche.title} className="flex flex-col justify-between">
                <div>
                  <IconTile className="mb-6">
                    <Icon {...icon.lg} />
                  </IconTile>
                  <p className="mb-2 type-overline text-fg-muted">{niche.focusArea}</p>
                  <h3 className="mb-3 type-h4 text-fg">{niche.title}</h3>
                  <p className="mb-6 type-body-sm text-fg-secondary">{niche.description}</p>
                </div>
                <div className="border-t border-border pt-4">
                  <Badge tone="accent" shape="tag">
                    {niche.badge}
                  </Badge>
                </div>
              </Card>
            );
          })}
        </ul>

        <Card tone="subtle" className="mt-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="type-body-sm text-fg-secondary">
            Operating in a different direct-to-consumer vertical or B2B commerce? We build custom catalog architectures.
          </p>
          <TextLink href="/contact" className="shrink-0 whitespace-nowrap">
            Request custom vertical audit
            <ArrowUpRight {...icon.sm} />
          </TextLink>
        </Card>
      </Container>
    </Section>
  );
}
