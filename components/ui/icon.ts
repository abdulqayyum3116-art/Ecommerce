/**
 * One icon set (lucide), one stroke width. Spread `icon.sm` / `icon.md` /
 * `icon.lg` onto any lucide component. Decorative by default — pass an
 * aria-label and aria-hidden={false} for meaningful standalone icons.
 *
 *   sm 16px — inline with body-sm / buttons / captions
 *   md 20px — list bullets, card icons
 *   lg 24px — feature tiles
 */
const base = { strokeWidth: 1.75, "aria-hidden": true, className: "shrink-0" } as const;

export const icon = {
  sm: { ...base, size: 16 },
  md: { ...base, size: 20 },
  lg: { ...base, size: 24 },
} as const;
