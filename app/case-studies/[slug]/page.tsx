import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, CircleAlert, ChevronDown } from "lucide-react";
import { caseStudiesList, getCaseStudy, type CaseStudySection } from "@/lib/caseStudiesData";
import { generateSeoMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Overline } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { icon } from "@/components/ui/icon";
import { CaseStudyCard, Metrics } from "@/components/case-studies/CaseStudyCard";

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
  const study = getCaseStudy(resolvedParams.slug);
  if (!study) return {};

  return generateSeoMetadata({
    title: `${study.name}: ${study.tagline} | Case Study`,
    description: study.intro,
    path: `/case-studies/${study.slug}`,
  });
}

function StudySection({ section, index }: { section: CaseStudySection; index: number }) {
  const ink = section.tone === "ink";
  const id = `section-${index}`;
  return (
    <section
      data-reveal=""
      data-theme={ink ? "dark" : undefined}
      aria-labelledby={id}
      className={cn(
        "rounded-xl",
        ink && "border border-border bg-bg p-6 text-fg sm:p-10",
        section.tone === "soft" && "bg-bg-subtle p-6 sm:p-10"
      )}
    >
      <Overline className="mb-3">{section.eyebrow}</Overline>
      <h2 id={id} className="mb-6 type-h2 text-fg">
        {section.title}
      </h2>

      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mb-4 measure type-body-lg text-fg-secondary">
          {p}
        </p>
      ))}

      {section.media && (
        <div className="relative my-8 aspect-[3/2] max-w-xl overflow-hidden rounded-lg border border-border bg-bg-muted">
          <Image src={section.media.src} alt={section.media.alt} fill sizes="(min-width: 640px) 36rem, 100vw" className="object-cover" />
        </div>
      )}

      {section.points && (
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {section.points.map((pt) => (
            <li key={pt.title} className="rounded-lg border border-border bg-surface p-5">
              <CircleAlert {...icon.md} className="mb-3 text-warning-solid" />
              <h3 className="mb-1 type-body font-bold text-fg">{pt.title}</h3>
              <p className="type-body-sm text-fg-secondary">{pt.text}</p>
            </li>
          ))}
        </ul>
      )}

      {section.cards && (
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {section.cards.map((c, i) => (
            <li key={c.title} className="rounded-lg border border-border bg-surface-raised p-5">
              <span className="mb-3 block type-overline numeric text-accent-text">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mb-1 type-h4 text-fg">{c.title}</h3>
              <p className="type-body-sm text-fg-secondary">{c.text}</p>
            </li>
          ))}
        </ol>
      )}

      {section.capabilities && (
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {section.capabilities.map((cap) => (
            <Card key={cap.title} reveal={false}>
              <h3 className="mb-3 type-h4 text-fg">{cap.title}</h3>
              <ul className="space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 type-body-sm text-fg-secondary">
                    <Check {...icon.sm} className="mt-0.5 shrink-0 text-accent-text" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      )}

      {section.highlights && (
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {section.highlights.map((h) => (
            <li key={h.title} className="rounded-lg border border-accent-subtle-border bg-accent-subtle p-5">
              <h3 className="mb-1 type-h4 text-fg">{h.title}</h3>
              <p className="type-body-sm text-fg-secondary">{h.text}</p>
            </li>
          ))}
        </ul>
      )}

      {section.results && (
        <ul className="mt-6 space-y-4">
          {section.results.map((r) => (
            <li key={r.title} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-success-bg text-success-text">
                <Check {...icon.sm} />
              </span>
              <div>
                <h3 className="type-body font-bold text-fg">{r.title}</h3>
                <p className="type-body-sm text-fg-secondary">{r.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {section.faq && (
        <div className="mt-6 divide-y divide-border rounded-lg border border-border bg-surface">
          {section.faq.map((f) => (
            <details key={f.q} className="group px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 type-body font-bold text-fg [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown {...icon.md} className="shrink-0 text-fg-muted transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-4 type-body-sm text-fg-secondary">{f.a}</p>
            </details>
          ))}
        </div>
      )}
    </section>
  );
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const study = getCaseStudy(resolvedParams.slug);

  if (!study) {
    notFound();
  }

  const more = caseStudiesList.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <article className="bg-bg">
      <PageHero
        back={{ href: "/case-studies", label: "Back to Case Studies" }}
        overline={study.kicker}
        meta={
          <>
            <Badge tone="accent">{study.category}</Badge>
            {study.services.map((s) => (
              <Badge key={s} tone="outline">
                {s}
              </Badge>
            ))}
          </>
        }
        title={study.name}
        lead={study.intro}
      />

      <Container className="section-y">
        <div className="mx-auto max-w-5xl">
          {/* Cover + headline numbers */}
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-bg-muted shadow-elevation-2">
            <Image
              src={study.cover.src}
              alt={study.cover.alt}
              fill
              sizes="(min-width: 1088px) 64rem, 100vw"
              fetchPriority="high"
              className="object-cover"
            />
          </div>
          <Metrics metrics={study.metrics} className="mb-16" />

          <div className="space-y-16">
            {study.sections.map((section, i) => (
              <StudySection key={section.eyebrow + i} section={section} index={i} />
            ))}

            {study.quote && (
              <figure data-reveal="" className="rounded-xl border-l-4 border-accent bg-accent-subtle p-6 sm:p-10">
                <blockquote className="font-display-italic text-[length:var(--type-h3-size)] leading-snug font-medium text-fg italic">
                  “{study.quote.text}”
                </blockquote>
                <figcaption className="mt-4 type-body-sm font-bold text-fg-secondary">— {study.quote.cite}</figcaption>
              </figure>
            )}

            {study.conclusion && (
              <section data-reveal="" aria-labelledby="conclusion-heading">
                <Overline className="mb-3">Conclusion</Overline>
                <h2 id="conclusion-heading" className="sr-only">
                  Conclusion
                </h2>
                {study.conclusion.map((p, i) => (
                  <p key={i} className="mb-4 measure type-body-lg text-fg-secondary">
                    {p}
                  </p>
                ))}
              </section>
            )}

            <CtaBand
              inset
              id="case-cta-heading"
              title="Want results like these for your store?"
              lead="Get a free marketing audit to find your highest-impact growth opportunities across ads, search, video and email."
              actions={
                <ButtonLink href="/contact" trailingIcon={<ArrowUpRight {...icon.sm} />}>
                  Get a Free Marketing Audit
                </ButtonLink>
              }
            />

            <section aria-labelledby="more-cases-heading">
              <h2 id="more-cases-heading" className="mb-6 type-h3 text-fg">
                More case studies
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {more.map((c) => (
                  <CaseStudyCard key={c.slug} study={c} sizes="(min-width: 768px) 22rem, 100vw" />
                ))}
              </div>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
