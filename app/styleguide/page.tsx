import type { Metadata } from "next";
import tokens from "@/lib/designTokens.generated.json";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const WEIGHTS: Record<string, number> = { regular: 400, medium: 500, display: 600, bold: 700 };

const TYPE_SAMPLES: Record<string, string> = {
  display: "Turn traffic into revenue.",
  h1: "We build & grow online stores.",
  h2: "Six focused pillars for store revenue.",
  h3: "Attract. Convert. Retain. Repeat.",
  h4: "CRO & UX Optimization",
  "body-lg": "We build and optimize high-converting online stores — bespoke Shopify & Headless builds.",
  body: "Every service connects directly into the revenue cycle. No fragmented handoffs or guesswork.",
  "body-sm": "Klaviyo automated flows for cart abandonment, post-purchase, and win-back sequences.",
  caption: "Performance metric · 6 min read · Oct 2026",
  overline: "End-to-end capabilities",
  button: "Free Store Audit",
  code: "<ProductCard sku=\"A-1042\" />",
};

const SEMANTIC_GROUPS: { title: string; tokens: string[] }[] = [
  { title: "Backgrounds & surfaces", tokens: ["bg", "bg-subtle", "bg-muted", "surface", "surface-raised"] },
  { title: "Borders", tokens: ["border", "border-strong"] },
  { title: "Text", tokens: ["text-primary", "text-secondary", "text-muted", "text-inverse"] },
  { title: "Accent", tokens: ["accent", "accent-hover", "accent-pressed", "accent-subtle", "accent-text", "on-accent", "focus-ring"] },
  { title: "Status", tokens: ["success-solid", "warning-solid", "danger-solid", "info-solid"] },
];

/** Light ramp steps get ink labels, dark steps get paper labels. */
const labelClass = (step: number) => (step <= 400 ? "text-[var(--neutral-950)]" : "text-[var(--neutral-50)]");

function Section({ id, overline, title, children }: { id: string; overline: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="border-t border-border py-[var(--section-y)]">
      <p className="type-overline text-accent-text mb-3">{overline}</p>
      <h2 id={id} className="type-h2 text-fg mb-10">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Ramp({ name, scale }: { name: string; scale: { step: number; hex: string; oklch: string }[] }) {
  return (
    <div className="mb-6">
      <p className="type-caption font-bold text-fg mb-2">{name}</p>
      <ol className="grid grid-cols-4 gap-1 sm:grid-cols-11">
        {scale.map((s) => (
          <li
            key={s.step}
            className={`flex h-20 flex-col justify-end rounded-[var(--rounded-sm)] p-2 type-caption numeric ${labelClass(s.step)}`}
            style={{ background: `var(--${name}-${s.step})` }}
            title={s.oklch}
          >
            <span className="font-bold">{s.step}</span>
            <span className="opacity-80">{s.hex}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SemanticPanel({ theme, palette }: { theme: "light" | "dark"; palette: "cobalt" | "teal" }) {
  const checks = tokens.contrast.filter((c) => c.palette === palette && c.mode === theme);
  const passed = checks.filter((c) => c.pass).length;
  return (
    <div data-theme={theme} data-palette={palette} className="rounded-[var(--rounded-lg)] border border-border bg-bg p-6 text-fg">
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <h3 className="type-h4 capitalize">{theme}</h3>
        <span className="type-caption numeric text-success-text">
          {passed}/{checks.length} contrast checks pass
        </span>
      </div>
      {SEMANTIC_GROUPS.map((g) => (
        <div key={g.title} className="mb-4">
          <p className="type-overline text-fg-muted mb-2">{g.title}</p>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {g.tokens.map((t) => (
              <li key={t} className="flex items-center gap-2 type-caption">
                <span className="size-6 shrink-0 rounded-[var(--rounded-sm)] border border-border" style={{ background: `var(--${t})` }} />
                <code className="type-code text-fg-secondary">{t}</code>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="inline-flex h-10 items-center rounded-full bg-accent px-5 type-button text-on-accent">Primary</span>
        <span className="inline-flex h-10 items-center rounded-full border border-border-strong bg-surface-raised px-5 type-button text-fg">
          Secondary
        </span>
        <span className="inline-flex h-10 items-center rounded-full px-3 type-button text-accent-text underline underline-offset-4">Link</span>
        <span className="inline-flex h-10 items-center rounded-full bg-surface-raised px-5 type-button text-fg outline-2 outline-offset-2 outline-focus-ring">
          Focused
        </span>
      </div>
    </div>
  );
}

export default function StyleguidePage() {
  return (
    <div data-theme="light" className="bg-bg text-fg">
      <div className="mx-auto max-w-[var(--layout-max)] px-[var(--gutter)] pt-[var(--section-y)]">
        <p className="type-overline text-accent-text mb-3">Design system · checkpoint 1</p>
        <h1 className="type-h1 mb-4">Styleguide</h1>
        <p className="type-body-lg text-fg-secondary measure">
          Tokens, typography and colour directions for review. Every value on this page is read from
          <code className="type-code mx-1">app/styles/tokens.css</code>, generated by
          <code className="type-code mx-1">scripts/build-tokens.mjs</code>.
        </p>

        <Section id="type" overline="Typography" title="Type scale">
          <p className="type-body text-fg-secondary measure mb-8">
            Fraunces (display, opsz 9–144, weight 600) + DM Sans (text, 400/500/700). Fluid from 320px to 1920px:
            base 16→17px, ratio 1.15→1.25.
          </p>
          <ol className="divide-y divide-border border-y border-border">
            {tokens.type.map((t) => (
              <li key={t.name} className="grid gap-2 py-5 md:grid-cols-[12rem_1fr] md:items-baseline">
                <div className="type-caption numeric text-fg-muted">
                  <code className="type-code block text-fg">type-{t.name}</code>
                  {t.minPx === t.maxPx ? `${t.minPx}px` : `${t.minPx} → ${t.maxPx}px`} · lh {t.leading} · {t.tracking} ·{" "}
                  {t.family} {WEIGHTS[t.weight]}
                </div>
                <p className={`type-${t.name} text-fg min-w-0 break-words`}>{TYPE_SAMPLES[t.name]}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="color" overline="Colour" title="Two directions">
          <p className="type-body text-fg-secondary measure mb-8">
            Both share medgrow’s warm paper → indigo ink neutrals; they differ only in the single brand accent.
          </p>
          <div className="grid gap-12">
            {(["cobalt", "teal"] as const).map((p) => (
              <div key={p} data-palette={p} className="bg-bg">
                <h3 className="type-h3 mb-6">{tokens.palettes[p].label}</h3>
                <Ramp name="brand" scale={tokens.palettes[p].ramp} />
                <Ramp name="neutral" scale={tokens.neutral} />
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <SemanticPanel theme="light" palette={p} />
                  <SemanticPanel theme="dark" palette={p} />
                </div>
              </div>
            ))}
            <div>
              <h3 className="type-h3 mb-6">Status (shared)</h3>
              {(["success", "warning", "danger", "info"] as const).map((s) => (
                <Ramp key={s} name={s} scale={tokens.status[s]} />
              ))}
            </div>
          </div>
        </Section>

        <Section id="elevation" overline="Depth" title="Elevation">
          <div className="grid gap-6 sm:grid-cols-5">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="flex h-28 items-end rounded-[var(--rounded-lg)] bg-surface-raised p-4 type-caption text-fg-secondary"
                style={{ boxShadow: `var(--elevation-${n})` }}
              >
                elevation-{n}
              </div>
            ))}
          </div>
        </Section>

        <Section id="hero" overline="Preview" title="Redesigned hero">
          <div className="grid gap-10">
            {(["cobalt", "teal"] as const).flatMap((p) =>
              (["light", "dark"] as const).map((t) => (
                <figure key={`${p}-${t}`} data-hero-preview={`${p}-${t}`}>
                  <figcaption className="type-caption text-fg-muted mb-2">
                    {tokens.palettes[p].label} · {t}
                  </figcaption>
                  <div data-theme={t} data-palette={p} className="overflow-hidden rounded-[var(--rounded-lg)] border border-border">
                    <Hero />
                  </div>
                </figure>
              ))
            )}
          </div>
        </Section>
      </div>
    </div>
  );
}
