import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container, Overline } from "./Section";

/**
 * Closing call-to-action on an ink band (always the dark theme).
 * `inset` renders it as a rounded panel inside narrow article layouts.
 */
export function CtaBand({
  id,
  overline,
  title,
  lead,
  actions,
  note,
  inset = false,
}: {
  id?: string;
  overline?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  actions: ReactNode;
  note?: ReactNode;
  inset?: boolean;
}) {
  const body = (
    <div data-reveal="" className="relative mx-auto max-w-3xl text-center">
      {overline && <Overline className="mb-4">{overline}</Overline>}
      <h2 id={id} className={cn(inset ? "type-h3" : "type-h2", "text-fg")}>
        {title}
      </h2>
      {lead && <p className="mx-auto mt-4 type-body-lg text-fg-secondary measure">{lead}</p>}
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">{actions}</div>
      {note && <p className="mt-6 type-caption text-fg-muted">{note}</p>}
    </div>
  );

  if (inset) {
    return (
      <section
        data-theme="dark"
        aria-labelledby={id}
        className="relative isolate overflow-hidden rounded-xl border border-border bg-bg p-8 text-fg sm:p-12"
      >
        <Glow />
        {body}
      </section>
    );
  }

  return (
    <section data-theme="dark" aria-labelledby={id} className="relative isolate overflow-hidden bg-bg text-fg section-y">
      <Glow />
      <Container>{body}</Container>
    </section>
  );
}

function Glow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-accent-subtle opacity-80 blur-3xl"
    />
  );
}
