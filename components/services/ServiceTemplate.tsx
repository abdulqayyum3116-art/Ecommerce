import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ArrowRight, X } from "lucide-react";
import { getCaseStudy } from "@/lib/caseStudiesData";
import { Metrics } from "@/components/case-studies/CaseStudyCard";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, SectionHeader, Overline } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Alert } from "@/components/ui/Feedback";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { icon } from "@/components/ui/icon";

interface Deliverable {
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ServiceTemplateProps {
  eyebrow: string;
  h1: string;
  leadParagraph: string;
  problemHeading: string;
  problemDescription: string;
  problemPoints: string[];
  solutionHeading: string;
  solutionDescription: string;
  deliverables: Deliverable[];
  leadPlatformNotice?: string;
  processSteps: ProcessStep[];
  relatedCaseStudySlug: string;
  relatedCaseStudyTitle: string;
}

export default function ServiceTemplate(props: ServiceTemplateProps) {
  const related = getCaseStudy(props.relatedCaseStudySlug);
  return (
    <div className="bg-bg">
      <PageHero
        overline={props.eyebrow}
        title={props.h1}
        lead={props.leadParagraph}
        actions={
          <>
            <ButtonLink href="/contact" size="lg" trailingIcon={<ArrowUpRight {...icon.sm} />}>
              Request Free Store Audit
            </ButtonLink>
            <ButtonLink
              href="/case-studies"
              variant="secondary"
              size="lg"
              trailingIcon={<ArrowRight {...icon.sm} className="text-fg-muted" />}
            >
              View Case Studies
            </ButtonLink>
          </>
        }
      />

      {/* The problem */}
      <Section aria-labelledby="problem-heading">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div data-reveal="" className="lg:col-span-5">
              <Overline className="mb-3">The Bottleneck</Overline>
              <h2 id="problem-heading" className="mb-4 type-h2 text-fg">
                {props.problemHeading}
              </h2>
              <p className="type-body text-fg-secondary">{props.problemDescription}</p>
            </div>

            <Card padding="lg" className="lg:col-span-7">
              <h3 className="mb-6 type-overline text-fg">Where Most Stores Leak Revenue:</h3>
              <ul className="space-y-4">
                {props.problemPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-danger-bg text-danger-text">
                      <X {...icon.sm} size={14} strokeWidth={2.25} />
                      <span className="sr-only">Problem:</span>
                    </span>
                    <p className="type-body-sm text-fg-secondary">{point}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* What CodeSquad builds */}
      <Section tone="subtle" aria-labelledby="solution-heading">
        <Container>
          <SectionHeader
            id="solution-heading"
            overline="The Architecture"
            title={props.solutionHeading}
            lead={props.solutionDescription}
          />
          {props.leadPlatformNotice && (
            <Alert tone="info" className="-mt-6 mb-10 max-w-3xl md:-mt-8">
              <strong>Platform Architecture:</strong> {props.leadPlatformNotice}
            </Alert>
          )}

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {props.deliverables.map((item, idx) => (
              <Card as="li" key={idx}>
                <div className="mb-3 flex items-start gap-3">
                  <CheckCircle2 {...icon.md} className="mt-0.5 shrink-0 text-success-solid" />
                  <h3 className="type-h4 text-fg">{item.title}</h3>
                </div>
                <p className="type-body-sm text-fg-secondary">{item.description}</p>
              </Card>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Process steps */}
      <Section aria-labelledby="cadence-heading">
        <Container>
          <SectionHeader id="cadence-heading" overline="Execution Cadence" title="How we deploy and scale this capability." />

          <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {props.processSteps.map((step) => (
              <Card as="li" key={step.step} className="border-t-4 border-t-accent">
                <span className="mb-2 block type-overline text-accent-text">{step.step}</span>
                <h3 className="mb-2 type-h4 text-fg">{step.title}</h3>
                <p className="type-body-sm text-fg-secondary">{step.description}</p>
              </Card>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Related case study */}
      <section className="bg-bg-subtle py-16">
        <Container>
          <Card padding="lg" className="grid gap-6 border-l-4 border-l-accent md:grid-cols-[auto_1fr_auto] md:items-center">
            {related && (
              <div className="relative hidden aspect-[3/2] w-40 overflow-hidden rounded-md bg-bg-muted md:block">
                <Image src={related.cover.src} alt="" fill sizes="10rem" className="object-cover" />
              </div>
            )}
            <div>
              <span className="mb-1 block type-caption text-fg-muted">Related Implementation Study</span>
              <h2 className="type-h4 text-fg">{props.relatedCaseStudyTitle}</h2>
              {related && (
                <>
                  <p className="mt-1 type-body-sm text-fg-secondary">{related.tagline}</p>
                  <Metrics metrics={related.metrics} limit={2} size="sm" className="mt-4 max-w-sm" />
                </>
              )}
            </div>
            <TextLink href={`/case-studies/${props.relatedCaseStudySlug}`} className="shrink-0 whitespace-nowrap">
              Read full technical breakdown
              <ArrowUpRight {...icon.sm} />
            </TextLink>
          </Card>
        </Container>
      </section>

      <CtaBand
        id="service-cta-heading"
        title="Audit your store's performance today."
        lead="Get an engineering assessment of your bottlenecks, speed scores, and abandonment recovery flows."
        actions={
          <ButtonLink href="/contact" size="lg" trailingIcon={<ArrowUpRight {...icon.sm} />}>
            Request Free Store Audit
          </ButtonLink>
        }
      />
    </div>
  );
}
