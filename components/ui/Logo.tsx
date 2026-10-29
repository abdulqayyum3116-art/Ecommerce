import { cn } from "@/lib/cn";
import { LogoMark } from "./LogoMark";

/** Full logo lockup: the mark beside a two-line "Ecommerce / by CodeSquad" wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("brand-mark flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="logo-text flex flex-col">
        <span className="font-display text-[length:var(--type-h4-size)] leading-none font-semibold tracking-[-0.02em] text-fg">
          Ecommerce
        </span>
        <span className="mt-1 type-overline leading-none text-fg-muted">by CodeSquad</span>
      </span>
    </span>
  );
}
