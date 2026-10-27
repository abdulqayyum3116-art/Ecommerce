import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { icon } from "@/components/ui/icon";

interface CaseStudyPreview {
  slug: string;
  clientType: string;
  title: string;
  summary: string;
  deliverables: string[];
  resultPlaceholder: string;
}

const featuredStudy: CaseStudyPreview = {
  slug: "apparel-dtc-growth",
  clientType: "[STORE TYPE — TO CONFIRM]",
  title: "Multi-SKU Apparel Storefront Re-Architecture & Mobile Checkout Streamline",
  summary:
    "Transitioned from a bloated theme to a lightweight, high-performance storefront, removing checkout friction and deploying automated SMS cart recovery.",
  deliverables: [
    "Shopify Liquid Clean Architecture",
    "Sub-Second Mobile PDPs",
    "Speed-to-Lead SMS Cart Recovery",
  ],
  resultPlaceholder: "[RESULT — TO CONFIRM]",
};

const otherStudies: CaseStudyPreview[] = [
  {
    slug: "beauty-skincare-cro",
    clientType: "[STORE TYPE — TO CONFIRM]",
    title: "Beauty & Regimen Bundle Builder With Automated Replenishment",
    summary:
      "Engineered an interactive 3-step skincare routine selector with automatic 30/60/90-day replenishment subscriptions via Klaviyo.",
    deliverables: ["Custom Bundle Flow", "Klaviyo Replenish Sequence"],
    resultPlaceholder: "[RESULT — TO CONFIRM]",
  },
  {
    slug: "electronics-order-automation",
    clientType: "[STORE TYPE — TO CONFIRM]",
    title: "High-Ticket Electronics Catalog & Automated Multi-Warehouse CRM",
    summary:
      "Automated real-time inventory synchronization across multi-location warehouses with automated high-fraud order verification.",
    deliverables: ["Automated CRM & Webhooks", "AI Fraud Screen"],
    resultPlaceholder: "[RESULT — TO CONFIRM]",
  },
];

export default function FlatCaseStudiesShowcase() {
  return (
    <Section tone="subtle" aria-labelledby="cases-heading">
      <Container>
        <SectionHeader
          id="cases-heading"
          overline="Verified Technical Case Studies"
          title="Measurable systems. Zero vanity numbers."
          lead="Explore how we design, develop, and automate high-conversion ecommerce infrastructure."
          action={
            <TextLink href="/case-studies">
              Browse all case studies
              <ArrowUpRight {...icon.sm} />
            </TextLink>
          }
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Featured study */}
          <Card as="article" padding="lg" className="flex flex-col justify-between border-l-4 border-l-accent lg:col-span-7">
            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <Badge tone="accent" shape="tag">
                  Featured Case Study
                </Badge>
                <span className="type-caption text-fg-muted">{featuredStudy.clientType}</span>
              </div>
              <h3 className="mb-4 type-h3 text-fg">{featuredStudy.title}</h3>
              <p className="mb-6 type-body text-fg-secondary">{featuredStudy.summary}</p>
              <p className="mb-2 type-overline text-fg-muted">Engineered Stack:</p>
              <ul className="mb-8 flex flex-wrap gap-2">
                {featuredStudy.deliverables.map((item) => (
                  <li key={item}>
                    <Badge tone="outline" shape="tag">
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
              <div>
                <span className="block type-caption text-fg-muted">Performance Metric</span>
                <Badge tone="warning" shape="tag" className="mt-1">
                  {featuredStudy.resultPlaceholder}
                </Badge>
              </div>
              <ButtonLink
                href={`/case-studies/${featuredStudy.slug}`}
                variant="secondary"
                size="sm"
                trailingIcon={<ArrowUpRight {...icon.sm} />}
              >
                Read breakdown
              </ButtonLink>
            </div>
          </Card>

          {/* Secondary studies */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {otherStudies.map((study) => (
              <Card as="article" key={study.slug} interactive className="flex flex-col justify-between">
                <div>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="type-caption text-fg-muted">{study.clientType}</span>
                    <Badge tone="warning" shape="tag">
                      {study.resultPlaceholder}
                    </Badge>
                  </div>
                  <h3 className="mb-2 type-h4 text-fg">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="rounded-sm after:absolute after:inset-0 after:rounded-lg after:content-['']"
                    >
                      {study.title}
                    </Link>
                  </h3>
                  <p className="mb-4 type-body-sm text-fg-secondary">{study.summary}</p>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
                  <ul className="flex flex-wrap gap-1.5">
                    {study.deliverables.map((deliv) => (
                      <li key={deliv}>
                        <Badge shape="tag">{deliv}</Badge>
                      </li>
                    ))}
                  </ul>
                  <span aria-hidden className="inline-flex shrink-0 items-center gap-0.5 type-body-sm font-bold text-accent-text">
                    View
                    <ArrowUpRight {...icon.sm} />
                  </span>
                </div>
              </Card>
            ))}

            <p className="rounded-md border border-dashed border-border-strong p-4 text-center type-caption text-fg-muted">
              Additional client case studies coming soon — verified metrics only.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
