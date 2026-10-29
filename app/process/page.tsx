import { ArrowUpRight, CheckCircle2, ShieldCheck, Search, Rocket, Repeat } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { Card, IconTile } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { icon } from "@/components/ui/icon";

export const metadata = generateSeoMetadata({
  title: "Our Process | How We Grow Ecommerce Brands | CodeSquad",
  description:
    "CodeSquad's four-phase ecommerce marketing process: Audit, Foundations (tracking, feeds and creative), Launch, and Scale.",
  path: "/process",
});

const steps = [
  {
    phase: "Phase 01",
    name: "Audit",
    tagline: "We find what's working and what's wasting money before changing anything.",
    icon: Search,
    deliverables: [
      "Google Ads and Meta Ads account review: structure, spend and wasted budget",
      "Merchant Center feed and conversion tracking health check",
      "Product SEO and AI search visibility check (ChatGPT, Perplexity, AI Overviews)",
      "Email, SMS and order-update flow review",
    ],
  },
  {
    phase: "Phase 02",
    name: "Foundations",
    tagline: "Accurate data and strong creative, so every channel has what it needs to work.",
    icon: ShieldCheck,
    deliverables: [
      "Server-side conversion tracking (Meta Conversions API & Google Enhanced Conversions)",
      "Clean, complete product feed for Google and Meta catalogs",
      "Product schema, FAQ answers and comparison content for search and AI",
      "First batch of product videos and ad creative",
    ],
  },
  {
    phase: "Phase 03",
    name: "Launch",
    tagline: "Campaigns, flows and automations go live together.",
    icon: Rocket,
    deliverables: [
      "Google Shopping, Performance Max and Search campaigns structured by margin",
      "Meta prospecting and retargeting campaigns with catalog ads",
      "Welcome, abandoned cart, post-purchase and win-back email & SMS flows",
      "Order confirmation, shipping, delivery and review-request automations",
    ],
  },
  {
    phase: "Phase 04",
    name: "Scale",
    tagline: "Spend more where it's profitable, and keep improving everything else.",
    icon: Repeat,
    deliverables: [
      "Weekly budget shifts toward the most profitable products and campaigns",
      "Ongoing creative and video testing to keep ads fresh",
      "Expanding SEO and AI visibility to new product groups",
      "Monthly reporting on revenue, ad spend, new customers and repeat orders",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-bg">
      <PageHero
        overline="How We Work"
        title="A clear, four-phase process for growing your store."
        lead="No guesswork and no one-size-fits-all packages. We audit first, fix the foundations, launch every channel together, and then scale what's profitable."
      />

      {/* Process steps */}
      <Section tone="subtle" aria-label="Process phases">
        <Container>
          <ol className="relative space-y-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Card as="li" key={step.phase} padding="lg">
                  <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                      <div className="mb-4 flex items-center gap-3">
                        <IconTile tone="solid">
                          <Icon {...icon.lg} />
                        </IconTile>
                        <span className="type-overline numeric text-fg-muted">
                          {step.phase} (0{idx + 1})
                        </span>
                      </div>
                      <h2 className="mb-3 type-h3 text-fg">{step.name}</h2>
                      <p className="type-body text-fg-secondary">{step.tagline}</p>
                    </div>

                    <div className="rounded-lg border border-border bg-bg-subtle p-6 sm:p-8 lg:col-span-8">
                      <h3 className="mb-4 type-overline text-fg">What We Deliver:</h3>
                      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {step.deliverables.map((deliv, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 {...icon.sm} className="mt-0.5 shrink-0 text-success-solid" />
                            <span className="type-body-sm text-fg-secondary">{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </ol>
        </Container>
      </Section>

      <CtaBand
        id="process-cta-heading"
        overline="Start With an Audit"
        title="See where your marketing can grow first."
        lead="Get a free review of your ads, search visibility and email flows before committing to anything."
        actions={
          <ButtonLink href="/contact" size="lg" trailingIcon={<ArrowUpRight {...icon.sm} />}>
            Get a Free Marketing Audit
          </ButtonLink>
        }
      />
    </div>
  );
}
