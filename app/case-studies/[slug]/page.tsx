import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Overline } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { icon } from "@/components/ui/icon";
import { caseStudiesList } from "@/lib/caseStudiesData";
import { generateSeoMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return caseStudiesList.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const study = caseStudiesList.find((c) => c.slug === resolvedParams.slug);
  if (!study) return {};

  return generateSeoMetadata({
    title: `${study.title} | Case Study`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const study = caseStudiesList.find((c) => c.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="bg-bg">
      <PageHero
        narrow
        back={{ href: "/case-studies", label: "Back to Case Studies" }}
        meta={
          <>
            <Badge tone="outline">{study.clientType}</Badge>
            <Badge tone="accent">{study.storeType}</Badge>
          </>
        }
        title={study.title}
        lead={study.summary}
      />

      <Container narrow className="section-y">
        {/* 01 Challenge */}
        <section data-reveal="" aria-labelledby="challenge-heading" className="mb-16">
          <Overline className="mb-3">Section 01</Overline>
          <h2 id="challenge-heading" className="mb-4 type-h2 text-fg">
            The Technical &amp; Operational Challenge
          </h2>
          <Card padding="lg" className="type-body text-fg-secondary">
            {study.challenge}
          </Card>
        </section>

        {/* 02 What CodeSquad built */}
        <section data-reveal="" aria-labelledby="built-heading" className="mb-16">
          <Overline className="mb-3">Section 02</Overline>
          <h2 id="built-heading" className="mb-6 type-h2 text-fg">
            What CodeSquad Engineered
          </h2>

          <div className="space-y-6">
            <Card>
              <h3 className="mb-4 type-overline text-fg">Core Stack &amp; Infrastructure</h3>
              <ul className="flex flex-wrap gap-2">
                {study.whatWeBuilt.stack.map((item) => (
                  <li key={item}>
                    <Badge tone="outline" shape="tag">
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="mb-4 type-overline text-fg">Pages &amp; UX Components Engineered</h3>
              <ul className="space-y-3">
                {study.whatWeBuilt.pages.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 type-body-sm text-fg-secondary">
                    <CheckCircle2 {...icon.sm} className="mt-0.5 shrink-0 text-accent-text" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="mb-4 type-overline text-fg">Automations &amp; Event Pipelines</h3>
              <ul className="space-y-3">
                {study.whatWeBuilt.automations.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 type-body-sm text-fg-secondary">
                    <CheckCircle2 {...icon.sm} className="mt-0.5 shrink-0 text-success-solid" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* 03 Results — placeholder fields */}
        <section data-reveal="" aria-labelledby="results-heading" className="mb-16">
          <Overline className="mb-3">Section 03</Overline>
          <h2 id="results-heading" className="mb-4 type-h2 text-fg">
            Performance Results
          </h2>
          <div className="space-y-3 rounded-lg border border-warning-border bg-warning-bg p-6 text-warning-text sm:p-8">
            <p className="mb-2 type-overline">Verified Metric Status:</p>
            <ul className="space-y-3">
              {study.resultDetails.map((metric, idx) => (
                <li key={idx} className="flex items-center gap-3 type-body-sm font-medium">
                  <Clock {...icon.sm} />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
            <p className="border-t border-warning-border pt-3 type-caption">
              * Note: In alignment with our strict data policy, numerical milestones are awaiting explicit client verification before public publication.
            </p>
          </div>
        </section>

        <CtaBand
          inset
          id="case-cta-heading"
          title="Want similar engineering for your store?"
          lead="Get an in-depth code and conversion audit to identify your highest-leverage growth opportunities."
          actions={
            <ButtonLink href="/contact" trailingIcon={<ArrowUpRight {...icon.sm} />}>
              Request Free Store Audit
            </ButtonLink>
          }
        />
      </Container>
    </article>
  );
}
