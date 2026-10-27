import Link from "next/link";
import { ArrowUpRight, FileClock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/Feedback";
import { icon } from "@/components/ui/icon";
import { caseStudiesList } from "@/lib/caseStudiesData";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Case Studies | CodeSquad Ecommerce",
  description:
    "Explore our engineering case studies for ecommerce brands. Flat, readable breakdowns of problems, tech stacks, and verified results.",
  path: "/case-studies",
});

export default function CaseStudiesHubPage() {
  const [featured, ...others] = caseStudiesList;

  return (
    <div className="bg-bg">
      <PageHero
        overline="Proven Architecture"
        title="Engineering case studies with zero invented vanity metrics."
        lead="We document our work with engineering rigor: the exact technical bottlenecks, the architecture built, and the operational outcomes achieved."
      />

      <Section tone="subtle" aria-label="Case studies">
        <Container>
          {/* Featured case study */}
          <Card as="article" padding="lg" className="mb-12 border-l-4 border-l-accent">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Badge tone="accent" shape="tag">
                    Featured Case Study
                  </Badge>
                  <span className="type-caption text-fg-muted">{featured.clientType}</span>
                </div>
                <h2 className="mb-4 type-h2 text-fg">{featured.title}</h2>
                <p className="mb-6 type-body text-fg-secondary">{featured.summary}</p>

                <p className="mb-3 type-overline text-fg-muted">Deliverables &amp; Stack:</p>
                <ul className="flex flex-wrap gap-2">
                  {featured.whatWeBuilt.stack.map((item) => (
                    <li key={item}>
                      <Badge tone="outline" shape="tag">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-bg-subtle p-6 lg:col-span-4">
                <div>
                  <p className="mb-3 type-overline text-fg-muted">Verified Outcomes</p>
                  <ul className="mb-6 space-y-2">
                    {featured.resultDetails.map((res, i) => (
                      <li key={i}>
                        <Badge tone="warning" shape="tag" className="w-full">
                          {res}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>

                <ButtonLink href={`/case-studies/${featured.slug}`} fullWidth trailingIcon={<ArrowUpRight {...icon.sm} />}>
                  Read full case breakdown
                </ButtonLink>
              </div>
            </div>
          </Card>

          {/* Remaining studies */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {others.map((study) => (
              <Card as="article" key={study.slug} padding="lg" interactive className="flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <span className="type-caption text-fg-muted">{study.clientType}</span>
                    <Badge tone="warning" shape="tag">
                      {study.resultsPlaceholder}
                    </Badge>
                  </div>
                  <h2 className="mb-3 type-h3 text-fg">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="rounded-sm after:absolute after:inset-0 after:rounded-lg after:content-['']"
                    >
                      {study.title}
                    </Link>
                  </h2>
                  <p className="mb-6 type-body-sm text-fg-secondary">{study.summary}</p>

                  <ul className="mb-6 flex flex-wrap gap-2">
                    {study.whatWeBuilt.stack.slice(0, 3).map((item) => (
                      <li key={item}>
                        <Badge shape="tag">{item}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="type-caption text-fg-muted">{study.storeType}</span>
                  <span aria-hidden className="inline-flex items-center gap-1 type-body-sm font-bold text-accent-text">
                    View Case Study
                    <ArrowUpRight {...icon.sm} />
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* More studies coming soon */}
          <EmptyState
            icon={<FileClock {...icon.md} />}
            title="More Case Studies Coming Soon"
            action={
              <TextLink href="/contact">Discuss your store&apos;s architecture with our engineers →</TextLink>
            }
          >
            We do not fabricate client names or project metrics to pad our portfolio. As current client growth milestones are formally confirmed and approved for release, they will appear here.
          </EmptyState>
        </Container>
      </Section>
    </div>
  );
}
