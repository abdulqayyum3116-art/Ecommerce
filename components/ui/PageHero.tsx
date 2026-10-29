import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";
import { Container, Overline } from "./Section";
import { icon } from "./icon";

/**
 * Inner-page hero: overline, one H1, lead, optional meta row and actions.
 * Replaces the legacy dark "mesh" banner.
 */
export function PageHero({
  overline,
  title,
  lead,
  meta,
  actions,
  back,
  narrow = false,
}: {
  overline?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  back?: { href: string; label: string };
  narrow?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-bg pt-32 pb-14 md:pt-40 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -right-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent-subtle opacity-70 blur-3xl"
      />
      <Container narrow={narrow}>
        <div className={cn(!narrow && "max-w-3xl")}>
          {back && (
            <Link
              href={back.href}
              className="mb-8 inline-flex items-center gap-1.5 type-body-sm font-medium text-fg-secondary transition-colors duration-150 hover:text-fg"
            >
              <ArrowLeft {...icon.sm} />
              {back.label}
            </Link>
          )}
          {overline && <Overline className="mb-4">{overline}</Overline>}
          {meta && <div className="mb-5 flex flex-wrap items-center gap-2">{meta}</div>}
          <h1 className="type-h1 text-fg">{title}</h1>
          {lead && <p className="mt-6 type-body-lg text-fg-secondary measure">{lead}</p>}
          {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>}
        </div>
      </Container>
    </section>
  );
}
