import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudiesList } from "@/lib/caseStudiesData";
import { generateSeoMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { icon } from "@/components/ui/icon";
import { CaseStudyCard, Metrics } from "@/components/case-studies/CaseStudyCard";

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
          {/* Featured */}
          <article
            data-reveal=""
            className="mb-10 grid overflow-hidden rounded-xl border border-border bg-surface shadow-elevation-2 lg:grid-cols-2"
          >
            <div className="relative aspect-[4/3] bg-bg-muted lg:aspect-auto">
              <Image
                src={featured.cover.src}
                alt={featured.cover.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                fetchPriority="high"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-6 sm:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge tone="accent" shape="tag">
                  Featured Case Study
                </Badge>
                <Badge tone="outline" shape="tag">
                  {featured.category}
                </Badge>
              </div>
              <h2 className="type-h2 text-fg">{featured.name}</h2>
              <p className="mt-2 type-body-lg font-medium text-fg">{featured.tagline}</p>
              <p className="mt-4 mb-8 type-body text-fg-secondary">{featured.intro}</p>
              <Metrics metrics={featured.metrics} wide={false} className="mb-8" />
              <ButtonLink
                href={`/case-studies/${featured.slug}`}
                className="mt-auto self-start"
                trailingIcon={<ArrowUpRight {...icon.sm} />}
              >
                Read the full case study
              </ButtonLink>
            </div>
          </article>

          {/* The rest */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((study) => (
              <CaseStudyCard key={study.slug} study={study} headingLevel="h2" />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        id="cases-cta-heading"
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
