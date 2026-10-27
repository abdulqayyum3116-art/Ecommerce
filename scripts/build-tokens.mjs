#!/usr/bin/env node
/**
 * Design-token generator.
 *
 * Source of truth for every color, type, spacing, radius, elevation and
 * motion value in the app. Ramps are authored in OKLCH (perceptually even),
 * converted to sRGB hex for the fallback layer, and every semantic text/UI
 * pairing is contrast-checked (WCAG 2.x) before the CSS is written.
 *
 *   node scripts/build-tokens.mjs            → writes app/styles/tokens.css
 *   node scripts/build-tokens.mjs --report   → also prints the contrast table
 *
 * The build fails (exit 1) if any required pairing misses its target.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(ROOT, "app/styles/tokens.css");
const REPORT = process.argv.includes("--report");

/* ─── Color math ──────────────────────────────────────────────────────── */

function oklchToLinearSrgb(L, C, h) {
  const a = C * Math.cos((h * Math.PI) / 180);
  const b = C * Math.sin((h * Math.PI) / 180);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

const inGamut = (rgb) => rgb.every((v) => v >= -0.0001 && v <= 1.0001);

/** Reduce chroma until the color fits in sRGB (keeps L and h stable). */
function fit(L, C, h) {
  if (inGamut(oklchToLinearSrgb(L, C, h))) return { L, C, h };
  let lo = 0;
  let hi = C;
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    if (inGamut(oklchToLinearSrgb(L, mid, h))) lo = mid;
    else hi = mid;
  }
  return { L, C: lo, h };
}

const encode = (v) => {
  const c = Math.min(1, Math.max(0, v));
  return c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055;
};

function toHex({ L, C, h }) {
  return (
    "#" +
    oklchToLinearSrgb(L, C, h)
      .map((v) => Math.round(encode(v) * 255).toString(16).padStart(2, "0"))
      .join("")
  );
}

function luminance({ L, C, h }) {
  const [r, g, b] = oklchToLinearSrgb(L, C, h).map((v) => Math.min(1, Math.max(0, v)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const fmt = (n, d = 3) => Number(n.toFixed(d)).toString();
const oklch = ({ L, C, h }) => `oklch(${fmt(L * 100, 1)}% ${fmt(C)} ${fmt(h, 1)})`;
const c = (L, C, h) => fit(L, C, h);

/* ─── Ramps ───────────────────────────────────────────────────────────── */

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const L_RAMP = [0.975, 0.94, 0.88, 0.8, 0.705, 0.6, 0.515, 0.44, 0.37, 0.3, 0.235];
const C_SHAPE = [0.12, 0.22, 0.4, 0.62, 0.85, 1, 1, 0.9, 0.75, 0.6, 0.45];

function ramp(hue, peakChroma, { lightness = L_RAMP, shape = C_SHAPE } = {}) {
  return Object.fromEntries(
    STEPS.map((s, i) => [s, c(lightness[i], peakChroma * shape[i], hue)])
  );
}

/**
 * Neutrals carry the reference site's "paper → ink" mood: the light end is a
 * warm paper (h≈80), the dark end is a desaturated indigo ink (h≈280). Hue
 * swings through the warm side only while chroma is near zero, so mid greys
 * stay neutral.
 */
const NEUTRAL_L = [0.985, 0.963, 0.92, 0.865, 0.72, 0.595, 0.505, 0.425, 0.335, 0.26, 0.2];
const NEUTRAL_C = [0.008, 0.01, 0.012, 0.011, 0.008, 0.012, 0.022, 0.032, 0.042, 0.048, 0.045];
const NEUTRAL_H = [80, 80, 78, 75, 60, 290, 285, 282, 280, 280, 280];
const neutral = Object.fromEntries(
  STEPS.map((s, i) => [s, c(NEUTRAL_L[i], NEUTRAL_C[i], NEUTRAL_H[i])])
);

/**
 * Brand: deep teal (h195) — direction B, approved at checkpoint 1.
 * (Direction A "cobalt" was ramp(264, 0.21); see docs/design-system.)
 */
const PALETTES = {
  teal: { label: "Paper & Teal", brand: ramp(195, 0.13) },
};
const BRAND = PALETTES.teal.brand;

const status = {
  success: ramp(152, 0.15),
  warning: ramp(70, 0.16),
  danger: ramp(25, 0.2),
  info: ramp(240, 0.15),
};

/* ─── Semantic layer ──────────────────────────────────────────────────── */

const WHITE = c(1, 0, 0);

/** Light theme: references primitives by name so palettes can swap. */
function lightSemantic(brand) {
  return {
    bg: ["neutral-50", neutral[50]],
    "bg-subtle": ["neutral-100", neutral[100]],
    "bg-muted": ["neutral-200", neutral[200]],
    surface: [null, c(0.995, 0.003, 80)],
    "surface-raised": [null, WHITE],
    border: ["neutral-200", neutral[200]],
    "border-strong": ["neutral-500", neutral[500]],
    "text-primary": ["neutral-950", neutral[950]],
    "text-secondary": ["neutral-700", neutral[700]],
    "text-muted": ["neutral-600", neutral[600]],
    "text-inverse": ["neutral-50", neutral[50]],
    accent: ["brand-600", brand[600]],
    "accent-hover": ["brand-700", brand[700]],
    "accent-pressed": ["brand-800", brand[800]],
    "accent-subtle": ["brand-50", brand[50]],
    "accent-subtle-border": ["brand-200", brand[200]],
    "accent-text": ["brand-700", brand[700]],
    "on-accent": [null, WHITE],
    "focus-ring": ["brand-600", brand[600]],
    "on-solid": [null, WHITE],
    ...statusTokens("light"),
  };
}

/**
 * Dark theme is designed, not inverted: ink-tinted surfaces (never #000),
 * elevation expressed through lightness, accent desaturated ~30%.
 */
function darkSemantic(brand) {
  const b4 = brand[400];
  return {
    bg: [null, c(0.18, 0.022, 280)],
    "bg-subtle": [null, c(0.205, 0.024, 280)],
    "bg-muted": [null, c(0.24, 0.026, 280)],
    surface: [null, c(0.215, 0.024, 280)],
    "surface-raised": [null, c(0.255, 0.026, 280)],
    border: [null, c(0.31, 0.024, 280)],
    "border-strong": [null, c(0.53, 0.022, 280)],
    "text-primary": [null, c(0.965, 0.008, 80)],
    "text-secondary": [null, c(0.84, 0.014, 280)],
    "text-muted": [null, c(0.725, 0.018, 280)],
    "text-inverse": [null, c(0.18, 0.022, 280)],
    accent: [null, c(b4.L + 0.03, b4.C * 0.75, b4.h)],
    "accent-hover": [null, c(b4.L + 0.09, b4.C * 0.65, b4.h)],
    "accent-pressed": [null, c(b4.L - 0.03, b4.C * 0.75, b4.h)],
    "accent-subtle": [null, c(0.27, b4.C * 0.3, b4.h)],
    "accent-subtle-border": [null, c(0.4, b4.C * 0.45, b4.h)],
    "accent-text": [null, c(0.8, b4.C * 0.6, b4.h)],
    "on-accent": [null, c(0.18, 0.022, 280)],
    "focus-ring": [null, c(0.82, b4.C * 0.65, b4.h)],
    "on-solid": [null, c(0.18, 0.022, 280)],
    ...statusTokens("dark"),
  };
}

function statusTokens(mode) {
  const out = {};
  for (const [name, r] of Object.entries(status)) {
    if (mode === "light") {
      out[`${name}-bg`] = [`${name}-50`, r[50]];
      out[`${name}-border`] = [`${name}-200`, r[200]];
      out[`${name}-text`] = [`${name}-800`, r[800]];
      out[`${name}-solid`] = [`${name}-600`, r[600]];
    } else {
      out[`${name}-bg`] = [null, c(0.25, r[500].C * 0.25, r[500].h)];
      out[`${name}-border`] = [null, c(0.4, r[500].C * 0.45, r[500].h)];
      out[`${name}-text`] = [null, c(0.85, r[500].C * 0.55, r[500].h)];
      out[`${name}-solid`] = [null, c(0.72, r[500].C * 0.7, r[500].h)];
    }
  }
  return out;
}

/* ─── Contrast audit ──────────────────────────────────────────────────── */

const CHECKS = [
  // [foreground, background, minimum, purpose]
  ["text-primary", "bg", 4.5, "body text"],
  ["text-primary", "bg-muted", 4.5, "body text on muted"],
  ["text-secondary", "bg", 4.5, "body text"],
  ["text-secondary", "bg-muted", 4.5, "body text on muted"],
  ["text-muted", "bg", 4.5, "meta text"],
  ["text-muted", "bg-subtle", 4.5, "meta text on subtle"],
  ["text-muted", "surface", 4.5, "meta text on card"],
  ["accent-text", "bg", 4.5, "links"],
  ["accent-text", "surface", 4.5, "links on card"],
  ["accent-text", "accent-subtle", 4.5, "badge text"],
  ["on-accent", "accent", 4.5, "primary button label"],
  ["on-accent", "accent-hover", 4.5, "primary button hover"],
  ["on-accent", "accent-pressed", 4.5, "primary button pressed"],
  ["text-inverse", "text-primary", 4.5, "inverse band"],
  ["accent", "bg", 3, "UI: accent vs page"],
  ["border-strong", "surface", 3, "UI: input border"],
  ["border-strong", "bg", 3, "UI: control border"],
  ["focus-ring", "bg", 3, "focus ring vs page"],
  ["focus-ring", "surface", 3, "focus ring vs card"],
  ["focus-ring", "bg-muted", 3, "focus ring vs muted"],
  ...["success", "warning", "danger", "info"].flatMap((s) => [
    [`${s}-text`, `${s}-bg`, 4.5, `${s} alert text`],
    [`${s}-solid`, "bg", 3, `${s} icon/indicator`],
    ["on-solid", `${s}-solid`, 4.5, `${s} solid button label`],
  ]),
];

const failures = [];
const reportRows = [];
for (const [pName, pal] of Object.entries(PALETTES)) {
  for (const [mode, sem] of [
    ["light", lightSemantic(pal.brand)],
    ["dark", darkSemantic(pal.brand)],
  ]) {
    for (const [fg, bg, min, purpose] of CHECKS) {
      const ratio = contrast(sem[fg][1], sem[bg][1]);
      const pass = ratio >= min;
      reportRows.push({ palette: pName, mode, fg, bg, ratio, min, pass, purpose });
      if (!pass) failures.push(`${pName}/${mode}: ${fg} on ${bg} = ${ratio.toFixed(2)} (< ${min})`);
    }
  }
}

if (REPORT) {
  console.log("| Palette | Mode | Pair | Ratio | Target | Purpose |");
  console.log("|---|---|---|---|---|---|");
  for (const r of reportRows) {
    console.log(
      `| ${r.palette} | ${r.mode} | \`${r.fg}\` on \`${r.bg}\` | ${r.ratio.toFixed(2)}:1 ${r.pass ? "✓" : "✗"} | ${r.min}:1 | ${r.purpose} |`
    );
  }
}

/* ─── Type scale ──────────────────────────────────────────────────────── */

/**
 * Fluid modular scale, 320px → 1920px viewport.
 * Base 16px → 17px; ratio 1.15 at 320px (so headings fit a phone) opening to
 * 1.25 (major third, marketing) at 1920px.
 */
const VP_MIN = 320;
const VP_MAX = 1920;
const BASE_MIN = 16;
const BASE_MAX = 17;
const R_MIN = 1.15;
const R_MAX = 1.25;

function fluid(step, { floor } = {}) {
  let min = BASE_MIN * R_MIN ** step;
  let max = BASE_MAX * R_MAX ** step;
  // Small steps never drop below their legibility floor at either end.
  if (floor) {
    min = Math.max(min, floor);
    max = Math.max(max, floor);
  }
  const lo = Math.min(min, max);
  const hi = Math.max(min, max);
  if (Math.abs(hi - lo) < 0.25) return `${fmt(lo / 16, 4)}rem`;
  const slope = (max - min) / (VP_MAX - VP_MIN);
  const intercept = min - slope * VP_MIN;
  return `clamp(${fmt(lo / 16, 4)}rem, ${fmt(intercept / 16, 4)}rem + ${fmt(slope * 100, 4)}vw, ${fmt(hi / 16, 4)}rem)`;
}

const TYPE = {
  //       step, line-height, tracking, weight-token, family
  display: [7, "1.1", "-0.03em", "display", "display"],
  h1: [6, "1.1", "-0.025em", "display", "display"],
  h2: [5, "1.15", "-0.02em", "display", "display"],
  h3: [3, "1.2", "-0.02em", "display", "display"],
  h4: [2, "1.25", "-0.02em", "bold", "body"],
  "body-lg": [1, "1.6", "-0.005em", "regular", "body"],
  body: [0, "1.65", "0em", "regular", "body"],
  "body-sm": [-1, "1.55", "0em", "regular", "body", 14],
  caption: [-2, "1.45", "0.005em", "medium", "body", 12.5],
  overline: [-2, "1.3", "0.08em", "bold", "body", 12.5],
  button: [-0.5, "1.25", "0em", "bold", "body", 15],
  code: [-1, "1.55", "0em", "regular", "mono", 14],
};

/* ─── Emit CSS ────────────────────────────────────────────────────────── */

const lines = [];
const emit = (s = "") => lines.push(s);

function primitives(pal, mode) {
  const out = [];
  const val = (col) => (mode === "hex" ? toHex(col) : oklch(col));
  for (const s of STEPS) out.push(`  --neutral-${s}: ${val(neutral[s])};`);
  for (const s of STEPS) out.push(`  --brand-${s}: ${val(pal.brand[s])};`);
  for (const [name, r] of Object.entries(status))
    for (const s of STEPS) out.push(`  --${name}-${s}: ${val(r[s])};`);
  return out;
}

function semanticBlock(sem, mode) {
  return Object.entries(sem).map(([name, [ref, col]]) => {
    const value = ref ? `var(--${ref})` : mode === "hex" ? toHex(col) : oklch(col);
    return `  --${name}: ${value};`;
  });
}

const SUPPORTS = "@supports (color: oklch(0% 0 0))";

emit("/*");
emit(" * Design tokens — GENERATED by scripts/build-tokens.mjs. Do not edit by hand.");
emit(" *");
emit(" * Layers");
emit(" *   1. Primitives  — neutral / brand / status ramps (50–950). Hex first, then");
emit(" *                    OKLCH inside @supports so modern browsers get the exact color.");
emit(" *   2. Semantic    — bg, surface, text-*, accent-*, focus-ring … for light + dark.");
emit(" *                    Components consume ONLY this layer (via Tailwind theme).");
emit(" *   3. Scales      — type, spacing, radii, elevation, motion.");
emit(" *");
emit(" * Theming");
emit(' *   data-theme="light" | "dark" on <html> or any section; no attribute → OS preference.');
emit(" */");
emit();

emit("/* ── 1. Primitives ─────────────────────────────────────────────────── */");
emit(":root {");
primitives(PALETTES.teal, "hex").forEach((l) => emit(l));
emit("}");
emit(`${SUPPORTS} {`);
emit("  :root {");
primitives(PALETTES.teal, "oklch").forEach((l) => emit("  " + l));
emit("  }");
emit("}");
emit();
/*
 * Semantic tokens are re-declared on every element that sets a theme, so a
 * section can opt into the other theme (e.g. an ink "band" on a light page).
 */
const LIGHT_SEL = ':root, [data-theme="light"]';
const light = lightSemantic(BRAND);
const dark = darkSemantic(BRAND);

emit("/* ── 2. Semantic — light (default) ─────────────────────────────────── */");
emit(`${LIGHT_SEL} {`);
emit("  color-scheme: light;");
semanticBlock(light, "hex").forEach((l) => emit(l));
emit(`  --overlay: ${toHex(neutral[950])}8c;`);
emit("}");
emit(`${SUPPORTS} {`);
emit(`  ${LIGHT_SEL} {`);
semanticBlock(light, "oklch")
  .filter((l) => !l.includes("var(--"))
  .forEach((l) => emit("  " + l));
emit("  }");
emit("}");
emit();

function darkRules(selector) {
  emit(`${selector} {`);
  emit("  color-scheme: dark;");
  semanticBlock(dark, "hex").forEach((l) => emit(l));
  emit("  --overlay: #080814b3;");
  emit("}");
}

function darkRulesOklch(selector) {
  emit(`${SUPPORTS} {`);
  emit(`  ${selector} {`);
  semanticBlock(dark, "oklch").forEach((l) => emit("  " + l));
  emit("  }");
  emit("}");
}

emit("/* ── 2. Semantic — dark ────────────────────────────────────────────── */");
emit("/* Explicit opt-in on any element. */");
darkRules('[data-theme="dark"]');
darkRulesOklch('[data-theme="dark"]');
emit();
emit("/* OS preference when the page has not pinned a theme. */");
emit("@media (prefers-color-scheme: dark) {");
const osSel = ':root:not([data-theme="light"])';
const before = lines.length;
darkRules(osSel);
darkRulesOklch(osSel);
for (let i = before; i < lines.length; i++) lines[i] = "  " + lines[i];
emit("}");
emit();

emit("/* ── 3. Scales ─────────────────────────────────────────────────────── */");
emit(":root {");
emit("  /* Families — 2 max. Mono is the system stack (not loaded). */");
emit('  --font-family-display: var(--font-fraunces), "Fraunces Fallback", Georgia, "Times New Roman", serif;');
emit('  --font-family-body: var(--font-dm-sans), "DM Sans Fallback", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;');
emit('  --font-family-mono: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;');
emit();
emit("  /* Weights — 4 total across both families. */");
emit("  --weight-regular: 400;");
emit("  --weight-medium: 500;");
emit("  --weight-display: 600;");
emit("  --weight-bold: 700;");
emit();
emit(`  /* Type scale: base ${BASE_MIN}→${BASE_MAX}px, ratio ${R_MIN}→${R_MAX}, fluid ${VP_MIN}→${VP_MAX}px. */`);
for (const [name, [step, lh, tr, w, fam, floor]] of Object.entries(TYPE)) {
  emit(`  --type-${name}-size: ${fluid(step, { floor })};`);
  emit(`  --type-${name}-leading: ${lh};`);
  emit(`  --type-${name}-tracking: ${tr};`);
  emit(`  --type-${name}-weight: var(--weight-${w});`);
  emit(`  --type-${name}-family: var(--font-family-${fam});`);
}
emit("  --measure: 68ch;");
emit("  --measure-narrow: 48ch;");
emit();
emit("  /* Spacing — 4px base. Allowed steps: 0 1 2 3 4 6 8 12 16 24 32 48 64 96 (×4px). */");
for (const s of [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96])
  emit(`  --space-${s}: ${s === 0 ? "0" : `${fmt((s * 4) / 16, 4)}rem`};`);
emit("  --section-y: clamp(4rem, 2.8rem + 6vw, 8rem);");
emit("  --gutter: clamp(1rem, 0.6rem + 2vw, 2rem);");
emit("  --layout-max: 80rem;");
emit("  --layout-narrow: 48rem;");
emit();
emit("  /* Radii — one family. */");
emit("  --rounded-sm: 0.375rem;");
emit("  --rounded-md: 0.625rem;");
emit("  --rounded-lg: 1rem;");
emit("  --rounded-xl: 1.5rem;");
emit("  --rounded-full: 9999px;");
emit();
emit("  /* Motion */");
emit("  --motion-fast: 150ms;");
emit("  --motion-base: 200ms;");
emit("  --motion-slow: 250ms;");
emit("  --motion-ease-out: cubic-bezier(0.16, 1, 0.3, 1);");
emit("  --motion-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);");
emit("}");
emit();
emit("/* Elevation — 5 steps, ink-tinted (never pure black). */");
emit(`${LIGHT_SEL} {`);
emit("  --elevation-tint: 268 40% 18%;");
emit("  --elevation-1: 0 1px 2px hsl(var(--elevation-tint) / 0.06), 0 1px 1px hsl(var(--elevation-tint) / 0.04);");
emit("  --elevation-2: 0 2px 4px -1px hsl(var(--elevation-tint) / 0.06), 0 4px 10px -2px hsl(var(--elevation-tint) / 0.07);");
emit("  --elevation-3: 0 4px 8px -2px hsl(var(--elevation-tint) / 0.06), 0 12px 24px -6px hsl(var(--elevation-tint) / 0.1);");
emit("  --elevation-4: 0 8px 16px -4px hsl(var(--elevation-tint) / 0.08), 0 24px 40px -12px hsl(var(--elevation-tint) / 0.16);");
emit("  --elevation-5: 0 12px 24px -6px hsl(var(--elevation-tint) / 0.1), 0 40px 72px -20px hsl(var(--elevation-tint) / 0.24);");
emit("}");
emit("/* Dark: elevation comes from surface lightness; shadows only separate edges. */");
const shadowDark = [
  "  --elevation-1: 0 1px 2px rgb(4 4 14 / 0.4);",
  "  --elevation-2: 0 2px 6px rgb(4 4 14 / 0.4);",
  "  --elevation-3: 0 6px 16px -4px rgb(4 4 14 / 0.5);",
  "  --elevation-4: 0 12px 28px -8px rgb(4 4 14 / 0.55);",
  "  --elevation-5: 0 24px 56px -16px rgb(4 4 14 / 0.6);",
];
emit('[data-theme="dark"] {');
shadowDark.forEach((l) => emit(l));
emit("}");
emit("@media (prefers-color-scheme: dark) {");
emit('  :root:not([data-theme="light"]) {');
shadowDark.forEach((l) => emit("  " + l));
emit("  }");
emit("}");
emit();
emit("@media (prefers-reduced-motion: reduce) {");
emit("  :root {");
emit("    --motion-fast: 0ms;");
emit("    --motion-base: 0ms;");
emit("    --motion-slow: 0ms;");
emit("  }");
emit("}");

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, lines.join("\n") + "\n");

/* Swatch data for the /styleguide route. `ink` = ink label reads better than paper. */
const INK = neutral[950];
const PAPER = neutral[50];
const sw = (col) => ({ hex: toHex(col), oklch: oklch(col), ink: contrast(col, INK) >= contrast(col, PAPER) });
const swatches = {
  steps: STEPS,
  neutral: STEPS.map((s) => ({ step: s, ...sw(neutral[s]) })),
  palettes: Object.fromEntries(
    Object.entries(PALETTES).map(([k, p]) => [
      k,
      { label: p.label, ramp: STEPS.map((s) => ({ step: s, ...sw(p.brand[s]) })) },
    ])
  ),
  status: Object.fromEntries(
    Object.entries(status).map(([k, r]) => [k, STEPS.map((s) => ({ step: s, ...sw(r[s]) }))])
  ),
  type: Object.entries(TYPE).map(([name, [step, leading, tracking, weight, family, floor]]) => {
    const lo = Math.max(BASE_MIN * R_MIN ** step, floor ?? 0);
    const hi = Math.max(BASE_MAX * R_MAX ** step, floor ?? 0);
    return { name, minPx: Number(lo.toFixed(1)), maxPx: Number(hi.toFixed(1)), leading, tracking, weight, family };
  }),
  contrast: reportRows.map(({ palette, mode, fg, bg, ratio, min, pass, purpose }) => ({
    palette, mode, fg, bg, ratio: Number(ratio.toFixed(2)), min, pass, purpose,
  })),
};
writeFileSync(resolve(ROOT, "lib/designTokens.generated.json"), JSON.stringify(swatches, null, 2) + "\n");

if (failures.length) {
  console.error("Contrast failures:\n  " + failures.join("\n  "));
  process.exit(1);
}
console.log(`tokens.css written (${lines.length} lines); ${reportRows.length} contrast checks passed.`);
