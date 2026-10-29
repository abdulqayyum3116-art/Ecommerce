import { cn } from "@/lib/cn";

/**
 * Brand mark, "the return loop": a looping arrow that reads as a "C" and
 * points back into itself (buyers coming back), around a centre dot (the
 * customer), on a teal tile. Animated by the "Logo" block in globals.css.
 * Keep app/icon.svg in sync with this drawing.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cn("logo-mark size-9 shrink-0", className)}>
      <rect width="40" height="40" rx="11" className="fill-accent" />
      <g
        className="logo-loop stroke-on-accent"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 280° arc, open to the right, from 40° above to 40° below the centre line */}
        <path className="logo-arc" pathLength={1} d="M26.89 14.21A9 9 0 1 0 26.89 25.79" />
        <path className="logo-arrow" d="M22.95 26.49L26.89 25.79L26.89 29.79" />
      </g>
      {/* Wrapper takes the hover pulse so it never restarts the dot's load pop. */}
      <g className="logo-dot-pulse">
        <circle className="logo-dot fill-on-accent" cx="20" cy="20" r="2.75" />
      </g>
    </svg>
  );
}
