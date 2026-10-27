import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type SectionTone = "default" | "subtle" | "band";

/**
 * Page section with the shared vertical rhythm.
 *   default — page background
 *   subtle  — alternate band for rhythm
 *   band    — ink band: opts into the dark theme regardless of page theme
 */
export function Section({
  tone = "default",
  className,
  children,
  ...rest
}: ComponentProps<"section"> & { tone?: SectionTone }) {
  return (
    <section
      data-theme={tone === "band" ? "dark" : undefined}
      className={cn(
        "relative section-y",
        tone === "default" && "bg-bg",
        tone === "subtle" && "bg-bg-subtle",
        tone === "band" && "bg-bg text-fg",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

export function Container({
  narrow = false,
  className,
  children,
  ...rest
}: ComponentProps<"div"> & { narrow?: boolean }) {
  return (
    <div className={cn(narrow ? "container-narrow" : "container-page", className)} {...rest}>
      {children}
    </div>
  );
}

export function Overline({ className, children, ...rest }: ComponentProps<"p">) {
  return (
    <p className={cn("type-overline text-accent-text", className)} {...rest}>
      {children}
    </p>
  );
}

const HEADING_SIZE = { h1: "type-h1", h2: "type-h2", h3: "type-h3" } as const;

/**
 * Overline + heading + lead, with an optional action aligned to the end.
 */
export function SectionHeader({
  id,
  overline,
  title,
  lead,
  action,
  align = "start",
  as: Heading = "h2",
  size = "h2",
  className,
}: {
  id?: string;
  overline?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  action?: ReactNode;
  align?: "start" | "center";
  as?: "h1" | "h2" | "h3";
  size?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-6 md:mb-14",
        !centered && action && "md:flex-row md:items-end md:justify-between",
        centered && "items-center text-center",
        className
      )}
    >
      <div className={cn("max-w-3xl", centered && "mx-auto")}>
        {overline && <Overline className="mb-3">{overline}</Overline>}
        <Heading id={id} className={cn(HEADING_SIZE[size], "text-fg")}>
          {title}
        </Heading>
        {lead && (
          <p className={cn("mt-4 type-body-lg text-fg-secondary measure", centered && "mx-auto")}>{lead}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
