import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/caseStudiesData";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/Badge";
import { icon } from "@/components/ui/icon";

/** Headline numbers for a case study. */
export function Metrics({
  metrics,
  limit,
  size = "md",
  wide = true,
  className,
}: {
  metrics: CaseStudy["metrics"];
  limit?: number;
  size?: "sm" | "md";
  /** Four across from `sm` up (otherwise always two columns). */
  wide?: boolean;
  className?: string;
}) {
  const list = limit ? metrics.slice(0, limit) : metrics;
  return (
    <dl className={cn("grid grid-cols-2 gap-x-6 gap-y-4", wide && list.length > 2 && "sm:grid-cols-4", className)}>
      {list.map((m) => (
        // Label stays first in the DOM (dt before dd); the value is shown on top.
        <div key={m.label} className="flex flex-col-reverse border-l-2 border-accent pl-3">
          <dt className="type-caption text-fg-muted">{m.label}</dt>
          <dd className={cn("font-display font-semibold tracking-[-0.02em] text-fg", size === "md" ? "type-h3" : "type-h4")}>
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * Case-study card: cover, category, name, tagline, two metrics. The whole
 * card is one link (stretched over the title).
 */
export function CaseStudyCard({
  study,
  headingLevel: Heading = "h3",
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  className,
}: {
  study: CaseStudy;
  headingLevel?: "h2" | "h3";
  sizes?: string;
  className?: string;
}) {
  return (
    <article
      data-reveal=""
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-elevation-1",
        "transition-[box-shadow,border-color,translate] duration-200 ease-standard hover:-translate-y-0.5 hover:border-border-strong hover:shadow-elevation-3 motion-reduce:hover:translate-y-0",
        className
      )}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-bg-muted">
        <Image
          src={study.cover.src}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-standard group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge tone="accent" shape="tag" className="mb-3 self-start">
          {study.category}
        </Badge>
        <Heading className="type-h4 text-fg">
          <Link
            href={`/case-studies/${study.slug}`}
            className="rounded-sm after:absolute after:inset-0 after:rounded-lg after:content-['']"
          >
            {study.name}
          </Link>
        </Heading>
        <p className="mt-2 mb-6 type-body-sm text-fg-secondary">{study.tagline}</p>
        <Metrics metrics={study.metrics} limit={2} size="sm" className="mt-auto" />
        <span aria-hidden className="mt-6 inline-flex items-center gap-1 border-t border-border pt-4 type-body-sm font-bold text-accent-text">
          Read case study
          <ArrowUpRight {...icon.sm} className="transition-transform duration-200 ease-standard group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
}
