import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { icon as iconSize } from "./icon";

/** Cover colours, all from the semantic palette (contrast-checked in tokens). */
const TONES = {
  teal: {
    cover: "bg-accent-subtle border-accent-subtle-border",
    tile: "bg-accent text-on-accent",
    text: "text-accent-text",
  },
  amber: {
    cover: "bg-warning-bg border-warning-border",
    tile: "bg-warning-solid text-on-solid",
    text: "text-warning-text",
  },
  blue: {
    cover: "bg-info-bg border-info-border",
    tile: "bg-info-solid text-on-solid",
    text: "text-info-text",
  },
  green: {
    cover: "bg-success-bg border-success-border",
    tile: "bg-success-solid text-on-solid",
    text: "text-success-text",
  },
  rose: {
    cover: "bg-danger-bg border-danger-border",
    tile: "bg-danger-solid text-on-solid",
    text: "text-danger-text",
  },
  ink: {
    cover: "bg-bg-muted border-border",
    tile: "bg-fg text-fg-inverse",
    text: "text-fg",
  },
} as const;

export type TopicTone = keyof typeof TONES;

/**
 * Tinted, edge-to-edge band for the top of a card: icon tile, label and a
 * meta line, plus a large faded icon. Hover motion keys off the card's
 * `group` class. Use inside `<Card padding="none" className="group overflow-hidden">`.
 */
export function TopicCover({
  tone,
  icon: Icon,
  label,
  meta,
}: {
  tone: TopicTone;
  icon: ElementType;
  label: ReactNode;
  meta?: ReactNode;
}) {
  const t = TONES[tone];
  return (
    <div className={cn("relative flex h-32 items-center gap-4 overflow-hidden border-b px-6 sm:px-8", t.cover)}>
      <Icon
        aria-hidden
        size={132}
        strokeWidth={1}
        className={cn(
          "pointer-events-none absolute -right-5 -bottom-8 rotate-12 opacity-15 transition-transform duration-300 ease-standard group-hover:scale-110 group-hover:rotate-6",
          t.text
        )}
      />
      <span
        className={cn(
          "inline-flex size-12 shrink-0 items-center justify-center rounded-md shadow-elevation-2 transition-[scale,rotate] duration-300 ease-standard group-hover:scale-110 group-hover:-rotate-6",
          t.tile
        )}
      >
        <Icon {...iconSize.lg} />
      </span>
      <div className="relative min-w-0">
        <p className={cn("type-overline", t.text)}>{label}</p>
        {meta && <div className={cn("mt-1 flex items-center gap-1 type-caption", t.text)}>{meta}</div>}
      </div>
    </div>
  );
}
