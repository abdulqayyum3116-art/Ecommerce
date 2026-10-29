import type { Metadata } from "next";
import { ArrowUpRight, Check, ShoppingCart, Zap } from "lucide-react";
import tokens from "@/lib/designTokens.generated.json";
import Hero from "@/components/home/Hero";
import { Container, Overline } from "@/components/ui/Section";
import { icon } from "@/components/ui/icon";
import {
  ThemePair,
  DemoBlock,
  ButtonsDemo,
  FormsDemo,
  CardsDemo,
  BadgesDemo,
  TabsDemo,
  OverlaysDemo,
  FeedbackDemo,
  DataDemo,
  PaginationDemo,
  EmptyLoadingDemo,
} from "@/components/styleguide/Demos";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const WEIGHTS: Record<string, number> = { regular: 400, medium: 500, display: 600, bold: 700 };

/** Literal class names so Tailwind's scanner sees every type utility. */
const TYPE_CLASS: Record<string, string> = {
  display: "type-display",
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
  h4: "type-h4",
  "body-lg": "type-body-lg",
  body: "type-body",
  "body-sm": "type-body-sm",
  caption: "type-caption",
  overline: "type-overline",
  button: "type-button",
  code: "type-code",
};

const TYPE_SAMPLES: Record<string, string> = {
  display: "Turn ad spend into revenue.",
  h1: "We grow online stores.",
  h2: "Six focused pillars for store revenue.",
  h3: "Attract. Convert. Retain. Repeat.",
  h4: "Google Shopping & Search Ads",
  "body-lg": "Google and Meta ads, AI search visibility, product video and email that bring buyers back.",
  body: "Every service connects directly into the revenue cycle. No fragmented handoffs or guesswork.",
  "body-sm": "Klaviyo automated flows for cart abandonment, post-purchase, and win-back sequences.",
  caption: "Performance metric · 6 min read · Oct 2026",
  overline: "End-to-end capabilities",
  button: "Free Marketing Audit",
  code: '<ProductCard sku="A-1042" />',
};

const SEMANTIC_GROUPS: { title: string; tokens: string[] }[] = [
  { title: "Backgrounds & surfaces", tokens: ["bg", "bg-subtle", "bg-muted", "surface", "surface-raised", "overlay"] },
  { title: "Borders", tokens: ["border", "border-strong"] },
  { title: "Text", tokens: ["text-primary", "text-secondary", "text-muted", "text-inverse"] },
  {
    title: "Accent",
    tokens: ["accent", "accent-hover", "accent-pressed", "accent-subtle", "accent-subtle-border", "accent-text", "on-accent", "focus-ring"],
  },
  { title: "Status", tokens: ["success-solid", "warning-solid", "danger-solid", "info-solid", "on-solid"] },
];

const SPACING = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96];
const RADII = ["sm", "md", "lg", "xl", "full"];

function GuideSection({ id, overline, title, children }: { id: string; overline: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="border-t border-border py-[var(--section-y)]">
      <Overline className="mb-3">{overline}</Overline>
      <h2 id={id} className="mb-10 type-h2 text-fg">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Ramp({ name, scale }: { name: string; scale: { step: number; hex: string; oklch: string }[] }) {
  return (
    <div className="mb-6">
      <p className="mb-2 type-caption font-bold text-fg">{name}</p>
      <ol className="grid grid-cols-4 gap-x-1 gap-y-3 sm:grid-cols-11">
        {scale.map((s) => (
          <li key={s.step} className="type-caption numeric" title={s.oklch}>
            <span className="mb-1.5 block h-14 rounded-sm border border-border" style={{ background: `var(--${name}-${s.step})` }} />
            <span className="block font-bold text-fg">{s.step}</span>
            <span className="block text-fg-muted">{s.hex}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SemanticTokens() {
  return (
    <ThemePair>
      {SEMANTIC_GROUPS.map((g) => (
        <div key={g.title} className="mb-5">
          <p className="mb-2 type-overline text-fg-muted">{g.title}</p>
          <ul className="grid grid-cols-1 gap-2 xs:grid-cols-2">
            {g.tokens.map((t) => (
              <li key={t} className="flex items-center gap-2 type-caption">
                <span className="size-6 shrink-0 rounded-sm border border-border" style={{ background: `var(--${t})` }} />
                <code className="type-code text-fg-secondary">--{t}</code>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ThemePair>
  );
}

export default function StyleguidePage() {
  const checks = tokens.contrast;
  const passed = checks.filter((c) => c.pass).length;
  const lowest = (mode: string) =>
    checks.filter((c) => c.mode === mode && c.min === 4.5).reduce((m, c) => (c.ratio < m.ratio ? c : m));

  return (
    <div className="bg-bg text-fg">
      <Container className="pt-[var(--section-y)]">
        <Overline className="mb-3">Design system</Overline>
        <h1 className="mb-4 type-h1">Styleguide</h1>
        <p className="measure type-body-lg text-fg-secondary">
          Every value on this page is read from <code className="type-code">app/styles/tokens.css</code>, generated by{" "}
          <code className="type-code">scripts/build-tokens.mjs</code>. Components render in both themes side by side.
        </p>
        <nav aria-label="Styleguide sections" className="mt-8 flex flex-wrap gap-2">
          {["type", "color", "space", "elevation", "icons", "components", "sections"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="rounded-full border border-border-strong px-3 py-1 type-body-sm capitalize text-fg-secondary transition-colors duration-150 hover:border-fg hover:text-fg"
            >
              {s}
            </a>
          ))}
        </nav>

        {/* ── Typography ─────────────────────────────────────────── */}
        <GuideSection id="type" overline="Typography" title="Type scale">
          <p className="mb-8 measure type-body text-fg-secondary">
            Fraunces (display, opsz 9–144, weight 600) and DM Sans (text, 400 / 500 / 700). Fluid from 320 px to
            1920 px: base 16 → 17 px, ratio 1.15 → 1.25. Headings −0.02 to −0.03 em, line-height 1.1–1.25; body 1.55–1.65;
            paragraphs capped at 68ch; overlines +0.08 em.
          </p>
          <ol className="divide-y divide-border border-y border-border">
            {tokens.type.map((t) => (
              <li key={t.name} className="grid gap-2 py-5 md:grid-cols-[13rem_1fr] md:items-baseline">
                <div className="type-caption numeric text-fg-muted">
                  <code className="block type-code text-fg">type-{t.name}</code>
                  {t.minPx === t.maxPx ? `${t.minPx}px` : `${t.minPx} → ${t.maxPx}px`} · lh {t.leading} · {t.tracking} ·{" "}
                  {t.family} {WEIGHTS[t.weight]}
                </div>
                <p className={`${TYPE_CLASS[t.name]} min-w-0 break-words text-fg`}>{TYPE_SAMPLES[t.name]}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="mb-2 type-overline text-fg-muted">Fraunces · display</p>
              <p className="type-h2">Aa Gg Rr 0123</p>
              <p className="type-h2 font-display-italic font-medium italic text-accent-text">Buyers into regulars.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="mb-2 type-overline text-fg-muted">DM Sans · text</p>
              <p className="type-body-lg">Regular 400 — Buyers into regulars</p>
              <p className="type-body-lg font-medium">Medium 500 — Buyers into regulars</p>
              <p className="type-body-lg font-bold">Bold 700 — Buyers into regulars</p>
            </div>
          </div>
          <p className="mt-6 measure type-body-sm text-fg-muted">
            OpenType: the Google Fonts subsets served by next/font ship <code className="type-code">liga</code>,{" "}
            <code className="type-code">calt</code>, <code className="type-code">frac</code> only — no{" "}
            <code className="type-code">tnum</code> or <code className="type-code">ss01</code>. The{" "}
            <code className="type-code">numeric</code> utility is applied where figures align and activates once full
            font files are self-hosted.
          </p>
        </GuideSection>

        {/* ── Colour ─────────────────────────────────────────────── */}
        <GuideSection id="color" overline="Colour" title="Paper & Teal">
          <p className="mb-8 measure type-body text-fg-secondary">
            One dominant accent (deep teal) on warm-paper → indigo-ink neutrals. Ramps authored in OKLCH with hex
            fallbacks. {passed}/{checks.length} contrast pairings pass; lowest body-text pair is{" "}
            <strong className="numeric">{lowest("light").ratio}:1</strong> in light and{" "}
            <strong className="numeric">{lowest("dark").ratio}:1</strong> in dark.
          </p>
          <Ramp name="brand" scale={tokens.palettes.teal.ramp} />
          <Ramp name="neutral" scale={tokens.neutral} />
          {(["success", "warning", "danger", "info"] as const).map((s) => (
            <Ramp key={s} name={s} scale={tokens.status[s]} />
          ))}
          <h3 className="mt-12 mb-4 type-h4">Semantic tokens</h3>
          <SemanticTokens />
          <details className="mt-6 rounded-lg border border-border bg-surface p-4">
            <summary className="cursor-pointer type-body-sm font-bold">Contrast report ({checks.length} pairings)</summary>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full type-caption">
                <thead>
                  <tr className="text-left text-fg-muted">
                    <th className="py-1 pr-4">Mode</th>
                    <th className="py-1 pr-4">Pair</th>
                    <th className="py-1 pr-4">Ratio</th>
                    <th className="py-1">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {checks.map((c, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="py-1 pr-4">{c.mode}</td>
                      <td className="py-1 pr-4">
                        <code className="type-code">{c.fg}</code> on <code className="type-code">{c.bg}</code>
                      </td>
                      <td className="py-1 pr-4 numeric">
                        {c.ratio}:1 {c.pass ? "✓" : "✗"} (≥{c.min})
                      </td>
                      <td className="py-1">{c.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </GuideSection>

        {/* ── Space & radius ─────────────────────────────────────── */}
        <GuideSection id="space" overline="Layout" title="Spacing & radii">
          <p className="mb-6 measure type-body text-fg-secondary">
            4 px base. Allowed steps: {SPACING.join(" · ")}. Sections use <code className="type-code">--section-y</code>{" "}
            (64 → 128 px); the container is 1280 px with fluid 16 → 32 px gutters on a 12-column grid. Breakpoints 480 /
            640 / 768 / 1024 / 1280 / 1536.
          </p>
          <ul className="mb-10 space-y-2">
            {SPACING.filter((s) => s > 0).map((s) => (
              <li key={s} className="flex items-center gap-4 type-caption numeric text-fg-muted">
                <span className="w-16 shrink-0">
                  {s} · {s * 4}px
                </span>
                <span className="h-3 rounded-sm bg-accent" style={{ width: `var(--space-${s})` }} />
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-6">
            {RADII.map((r) => (
              <li key={r} className="text-center type-caption text-fg-muted">
                <span
                  className="mb-2 block size-20 border-2 border-accent bg-accent-subtle"
                  style={{ borderRadius: `var(--rounded-${r})` }}
                />
                {r}
              </li>
            ))}
          </ul>
        </GuideSection>

        {/* ── Elevation ──────────────────────────────────────────── */}
        <GuideSection id="elevation" overline="Depth" title="Elevation">
          <ThemePair stack>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="flex h-24 items-end rounded-lg bg-surface-raised p-4 type-caption text-fg-secondary"
                  style={{ boxShadow: `var(--elevation-${n})` }}
                >
                  elevation-{n}
                </div>
              ))}
            </div>
          </ThemePair>
          <p className="mt-4 measure type-body-sm text-fg-muted">
            Light: ink-tinted, soft shadows. Dark: depth comes from surface lightness (bg 18% → surface 21.5% → raised
            25.5%); shadows only separate edges.
          </p>
        </GuideSection>

        {/* ── Icons & motion ─────────────────────────────────────── */}
        <GuideSection id="icons" overline="Iconography & motion" title="Icons and motion">
          <div className="mb-8 flex flex-wrap items-end gap-8">
            {(["sm", "md", "lg"] as const).map((s) => (
              <div key={s} className="flex flex-col items-center gap-2 type-caption text-fg-muted">
                <span className="flex gap-2 text-fg">
                  <Zap {...icon[s]} />
                  <ShoppingCart {...icon[s]} />
                  <Check {...icon[s]} />
                  <ArrowUpRight {...icon[s]} />
                </span>
                icon.{s} · {icon[s].size}px · stroke 1.75
              </div>
            ))}
            <p className="type-body-sm text-fg">
              Inline icon <ArrowUpRight {...icon.sm} className="inline-block align-[-0.125em]" /> sits on the baseline.
            </p>
          </div>
          <p className="measure type-body-sm text-fg-secondary">
            Lucide only, one stroke (1.75). Motion: 150 / 200 / 250 ms, <code className="type-code">ease-standard</code>{" "}
            (cubic-bezier(0.16, 1, 0.3, 1)) for entrances; transitions name transform / opacity / colour properties
            explicitly; <code className="type-code">prefers-reduced-motion</code> collapses durations to zero and stops
            auto-play.
          </p>
        </GuideSection>

        {/* ── Components ─────────────────────────────────────────── */}
        <GuideSection id="components" overline="Components" title="Primitives and states">
          <DemoBlock title="Buttons">
            <ButtonsDemo />
          </DemoBlock>
          <DemoBlock title="Inputs, select, textarea, checkbox, radio, switch, chips">
            <FormsDemo />
          </DemoBlock>
          <DemoBlock title="Cards">
            <CardsDemo />
          </DemoBlock>
          <DemoBlock title="Badges & pills">
            <BadgesDemo />
          </DemoBlock>
          <DemoBlock title="Tabs">
            <TabsDemo />
          </DemoBlock>
          <DemoBlock title="Modal, drawer & toasts">
            <OverlaysDemo />
          </DemoBlock>
          <DemoBlock title="Alerts">
            <FeedbackDemo />
          </DemoBlock>
          <DemoBlock title="Table">
            <DataDemo />
          </DemoBlock>
          <DemoBlock title="Pagination">
            <PaginationDemo />
          </DemoBlock>
          <DemoBlock title="Empty state & skeletons">
            <EmptyLoadingDemo />
          </DemoBlock>
        </GuideSection>

        {/* ── Sections ───────────────────────────────────────────── */}
        <GuideSection id="sections" overline="Sections" title="Hero in both themes">
          <div className="grid gap-10">
            {(["light", "dark"] as const).map((t) => (
              <figure key={t} data-hero-preview={t}>
                <figcaption className="mb-2 type-caption text-fg-muted">Home hero · {t}</figcaption>
                <div data-theme={t} className="overflow-hidden rounded-lg border border-border">
                  <Hero />
                </div>
              </figure>
            ))}
          </div>
        </GuideSection>
      </Container>
    </div>
  );
}
