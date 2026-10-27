import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeTone = "neutral" | "accent" | "success" | "warning" | "danger" | "info" | "outline";

const TONES: Record<BadgeTone, string> = {
  neutral: "bg-bg-muted text-fg-secondary border-transparent",
  accent: "bg-accent-subtle text-accent-text border-accent-subtle-border",
  success: "bg-success-bg text-success-text border-success-border",
  warning: "bg-warning-bg text-warning-text border-warning-border",
  danger: "bg-danger-bg text-danger-text border-danger-border",
  info: "bg-info-bg text-info-text border-info-border",
  outline: "bg-surface text-fg-secondary border-border",
};

type BadgeProps = ComponentProps<"span"> & {
  tone?: BadgeTone;
  shape?: "pill" | "tag";
  /** Optional leading icon or status dot. */
  icon?: ReactNode;
};

/**
 * Badges/pills. Meaning is never colour-only — the label text always states it.
 */
export function Badge({ tone = "neutral", shape = "pill", icon, className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center gap-1.5 border px-2.5 py-1 type-caption",
        shape === "pill" ? "rounded-full" : "rounded-sm",
        TONES[tone],
        className
      )}
      {...rest}
    >
      {icon}
      <span className="min-w-0">{children}</span>
    </span>
  );
}

/** Small status dot; pulses only when `live` and motion is allowed. */
export function StatusDot({ tone = "success", live = false }: { tone?: "success" | "accent" | "warning"; live?: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block size-2 shrink-0 rounded-full",
        tone === "success" && "bg-success-solid",
        tone === "accent" && "bg-accent",
        tone === "warning" && "bg-warning-solid",
        live && "motion-safe:animate-soft-pulse"
      )}
    />
  );
}
