import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, BarChart3, Repeat } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { Card, IconTile } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { icon } from "@/components/ui/icon";

export const metadata = generateSeoMetadata({
  title: "Our Process | How We Build & Scale Stores | CodeSquad",
  description:
    "Explore CodeSquad's four-phase ecommerce engineering process: Audit & Benchmarking, Clean Architecture, Conversion Deployment, and Growth Scaling.",
  path: "/process",
});

const steps = [
  {
    phase: "Phase 01",
    name: "Audit & Bottleneck Identification",
    tagline: "We diagnose before we touch a line of code.",
    icon: Zap,
    deliverables: [
      "Core Web Vitals & mobile latency breakdown (LCP, INP, CLS)",
      "Checkout drop-off and funnel leak analysis in GA4",
      "Third-party app payload and script bloat inventory",
      "Feed hygiene and Google Merchant Center diagnosis",
    ],
  },
  {
    phase: "Phase 02",
    name: "Clean Architecture & Design System",
    tagline: "Engineering conversion ergonomics without bloat.",
    icon: ShieldCheck,
    deliverables: [
      "Lightweight Liquid or Next.js App Router component library",
      "Mobile-first PDP with sticky add-to-cart controls",
      "Slide-over cart drawer with dynamic free-shipping thresholds",
      "Native replacements for 5-10 third-party monthly SaaS apps",
    ],
  },
  {
    phase: "Phase 03",
    name: "Conversion & Speed Deployment",
    tagline: "Rigorous QA and zero-downtime transition.",
    icon: BarChart3,
    deliverables: [
      "Cross-browser and multi-device checkout verification",
      "100% 301 URL redirect preservation and canonicalization",
      "Server-side conversion tracking (CAPI & Enhanced Conversions)",
      "AI search bot indexing rules configured in robots.txt and schema",
    ],
  },
  {
    phase: "Phase 04",
    name: "Retention, Ads & Automated Scale",
    tagline: "Turning first-time buyers into repeat regulars.",
    icon: Repeat,
    deliverables: [
      "15-minute speed-to-lead SMS and email cart recovery flows",
      "Margin-based Performance Max and Google Shopping campaign restructuring",
      "Predictive replenishment and VIP win-back automations in Klaviyo",
      "Multi-warehouse inventory synchronization and fraud screening pipelines",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-bg">
      <PageHero
        overline="Engineering Rigor"
        title="A systematic, four-phase process for predictable store growth."
        lead="We do not rely on guesswork or cookie-cutter templates. Every project follows an engineering cadence designed to protect your existing revenue while unlocking higher margins and conversion rates."
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
                      <h3 className="mb-4 type-overline text-fg">Core Phase Deliverables:</h3>
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
        overline="Predictable Timelines"
        title={
          <>
            Standard store builds launch <br /> in 4 Weeks.
          </>
        }
        lead="Start with a diagnostic audit of your store before committing to a full redesign."
        actions={
          <ButtonLink href="/contact" size="lg" trailingIcon={<ArrowUpRight {...icon.sm} />}>
            Schedule Store Audit Call
          </ButtonLink>
        }
      />
    </div>
  );
}
