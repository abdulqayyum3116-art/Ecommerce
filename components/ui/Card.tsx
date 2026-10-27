import type { ComponentProps, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps<T extends ElementType> = {
  as?: T;
  /** Lifts on hover — use when the whole card is a link target. */
  interactive?: boolean;
  padding?: "sm" | "md" | "lg";
  tone?: "surface" | "subtle" | "accent";
  className?: string;
  children?: ReactNode;
} & Omit<ComponentProps<T>, "as" | "className" | "children">;

const PADDING = { sm: "p-4", md: "p-6", lg: "p-6 sm:p-8 lg:p-10" };
const TONE = {
  surface: "bg-surface border-border shadow-elevation-1",
  subtle: "bg-bg-subtle border-border",
  accent: "bg-accent-subtle border-accent-subtle-border",
};

export function cardClasses({
  interactive = false,
  padding = "md",
  tone = "surface",
  className,
}: {
  interactive?: boolean;
  padding?: "sm" | "md" | "lg";
  tone?: "surface" | "subtle" | "accent";
  className?: string;
} = {}) {
  return cn(
    "relative rounded-lg border",
    TONE[tone],
    PADDING[padding],
    interactive &&
      "transition-[box-shadow,border-color,transform] duration-200 ease-standard hover:-translate-y-0.5 hover:border-border-strong hover:shadow-elevation-3 motion-reduce:hover:translate-y-0",
    className
  );
}

export function Card<T extends ElementType = "div">({
  as,
  interactive,
  padding,
  tone,
  className,
  children,
  ...rest
}: CardProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag className={cardClasses({ interactive, padding, tone, className })} {...rest}>
      {children}
    </Tag>
  );
}

/** Rounded square that holds a feature icon. */
export function IconTile({ children, tone = "accent", className }: { children: ReactNode; tone?: "accent" | "solid" | "neutral"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-md",
        tone === "accent" && "bg-accent-subtle text-accent-text",
        tone === "solid" && "bg-accent text-on-accent",
        tone === "neutral" && "bg-bg-muted text-fg",
        className
      )}
    >
      {children}
    </span>
  );
}
