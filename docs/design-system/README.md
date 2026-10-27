# Design system — Paper & Teal

Status: **implemented on every route.** Direction B (teal) was approved at
checkpoint 1. All pages, layout chrome and primitives consume the tokens;
Tailwind's default palette, font sizes, radii, shadows and easings are reset so
nothing else can be used.

| File | What it is |
|---|---|
| `scripts/build-tokens.mjs` | Source of truth. OKLCH ramps → hex fallbacks, semantic light/dark layer, type/spacing/radius/elevation/motion scales, and a WCAG contrast gate (build fails on any miss). |
| `app/styles/tokens.css` | Generated token CSS (do not hand-edit). |
| `lib/designTokens.generated.json` | Generated swatch / type / contrast data for the styleguide. |
| `app/globals.css` (`@theme inline`) | Tailwind v4 utilities wired to the tokens. |
| `components/ui/*` | Primitives: Button / ButtonLink / TextLink, Field + Input / Select / Textarea / Checkbox / Radio / Switch / ChoiceChip, Card / IconTile, Badge / StatusDot, Tabs, Dialog (modal + drawer), Alert / Toast / EmptyState / Skeleton, Table / Pagination, Section / Container / SectionHeader / Overline, PageHero, CtaBand, `icon` presets. |
| `app/styleguide/page.tsx` | Visual verification of every token and component state, light + dark side by side (noindex). |

Regenerate with `node scripts/build-tokens.mjs --report`.

---

## 1. Audit

### Routes

| Route | Sections | Interactive states present today | Missing states |
|---|---|---|---|
| `/` | Hero, 6-stage loop mock (auto-play), Growth cycle (tabs), Services grid, Niches, Case-study showcase, CTA | hover on cards/links, pause/play, selected tab, pulse dots | no focus styling beyond global outline; loop has no reduced-motion pause |
| `/services` | Dark hero, 6 pillar cards, CTA | hover | — |
| `/services/[6 pages]` (`ServiceTemplate`) | Hero, problem list, deliverables grid, process steps, related case study, CTA | hover | — |
| `/case-studies` | Hero, case cards with `[RESULT — TO CONFIRM]` placeholders | hover | empty state for "more coming soon" is a dashed box only |
| `/case-studies/[slug]` | Article layout, stack chips, results | — | — |
| `/blog` (`BlogHubClient`) | Hero, pillar filter pills (tabs), post grid | selected pill, hover | **no empty state** if a pillar has 0 posts; pills are not `role=tab` / `aria-pressed` |
| `/blog/[slug]` | MDX-style article | — | no prose styles token-driven |
| `/process` | Hero, step timeline | — | — |
| `/contact` (`ContactForm`) | Concern pills, 3 required inputs, select, textarea, submit | submitting ("Analyzing Store…"), error banner, success panel, disabled | no per-field error, no `aria-invalid`/`aria-describedby`, concern pills lack `aria-pressed` |
| Global | Sticky header + mobile drawer, footer | drawer open/close | drawer has no focus trap / Esc; toggle lacks `aria-expanded` |

### Design-debt inventory (measured from source)

| Category | Found |
|---|---|
| Font families | **3 loaded**: Fraunces (500, 600), DM Sans (400/500/700), Caveat (600/700). Caveat is loaded on every page but **never rendered** (`.font-caveat` unused). Plus `font-mono` (system) used 35×. |
| Synthesised weights | `font-bold` (700) applied to Fraunces headings 33× while only 500/600 were loaded → browser faux-bold. |
| Font sizes | 14 distinct: `text-xs`(70) `sm`(54) `base`(30) `lg`(18) `xl`(8) `2xl`(20) `3xl`(25) `4xl`(19) `5xl`(13) `6xl`(8) `7xl`(1) + arbitrary `[10px]`(3) `[11px]`(7) `[15px]`(2). Body set to a fixed 17px. |
| Weights in use | semibold 91, bold 33, medium 21, normal 1 |
| Tracking / leading | `tracking-wider` 27, `tight` 14, `wide` 3, `widest` 2, eyebrow `.12em`; `leading-relaxed` 36, `tight` 8, `snug` 3, `[1.08]` 1 |
| Hex colours | 21 distinct hex values in TSX (mostly in SVG mocks: `#E2E8F0`×30, `#2563EB`×15, `#F8FAFC`×14 …) + 23 hex and 24 rgba values in `globals.css`. Page backgrounds hard-coded: `#0B0F1A`, `#070A12`, `#FAFBFC`, `#111827`. |
| Colour families | slate 239, blue 109, amber 23, emerald 21, red 8 + one-offs violet, purple, teal, rose, pink, orange, indigo, cyan (6 different gradient accents on the services grid). |
| Gradients | 4 gradient-text/border recipes (blue→violet→emerald, blue→cyan…), animated rotating gradient border, mesh hero. |
| Radii | `rounded` 11, `md` 3, `lg` 10, `xl` 34, `2xl` 18, `full` 20 + `1rem`/`1.05rem` in CSS (7 values). |
| Shadows | `2xs` 20, `sm` 15, default 7, `md` 2, `lg` 2, `xl` 1, `2xl` 2 + 3 glow shadows (pure blue / pure black alpha). |
| Spacing | Section padding `py-16/20/24` mixed; card padding `p-4/5/6/7/8/10/12`; gaps `1/1.5/2/2.5/3/3.5/4/6/8/10/12`. |
| Motion | Global `transition: all .2s` on every button/link/input (animates layout props); `scale-[1.02]` on loop cards; 18s / 6s infinite animations. Reduced-motion block exists ✓. |
| Icons | lucide-react throughout ✓, but sizes `w-3`→`w-7` and default stroke 2; one `✕` text glyph used as an icon. |

### Top 10 problems

| # | Problem | Impact |
|---|---|---|
| 1 | No token layer — page colours are hard-coded hex in classNames | Theming / dark mode impossible; drift |
| 2 | Too many accents: blue, violet, cyan, emerald + 6 per-card gradients | No single "click me" colour; brand reads generic SaaS |
| 3 | Type scale is ad-hoc (14 sizes incl. 10–11px) and not fluid; jumps at breakpoints | Weak hierarchy; 10px mono text is illegible |
| 4 | Faux-bold Fraunces (700 requested, 600 loaded) | Muddy headings, inconsistent weight |
| 5 | Unused Caveat font downloaded on every page | Wasted bytes / preload |
| 6 | Mono font used for decorative meta labels (35×) | Third visual voice, poor readability |
| 7 | Contrast risk: `text-slate-400/500` on `#0B0F1A` and on white (`slate-400` on white = 2.6:1) | WCAG AA failures for meta text |
| 8 | Section rhythm alternates dark/light arbitrarily with a hard seam; no defined container/gutter tokens | Disjointed scroll experience |
| 9 | 7 radii and 10 shadow recipes, glows in pure blue | Inconsistent depth language |
| 10 | Interaction a11y gaps: drawer without `aria-expanded`/focus management, toggle pills without `aria-pressed`, form errors not tied to fields, `transition: all` | Keyboard/screen-reader UX; janky motion |

---

## 2. medgrow.codesquad.ai — measured typography

Read from the live site's HTML `<head>` and its 4 production CSS bundles (27 Oct 2026).

| Property | Measured |
|---|---|
| Families | **Fraunces** (display) + **DM Sans** (body) + **Caveat** (handwritten annotations) — Google Fonts CSS2 |
| Loaded axes/weights | Fraunces `opsz 9..144`, wght **500, 600**, italic **500**; DM Sans `opsz 9..40`, wght **400, 500, 700**; Caveat 600, 700 |
| Display weight | `--ds-fw-display: 600` |
| Hero | `clamp(44px, 7vw, 88px)` (home hero: `clamp(42px, 6.2vw, 80px)`, max 14–18ch, centred) |
| h1 / h2 | `clamp(40px,6vw,72px)` lh **1.04** ls **-0.02em** / `clamp(32px,4.4vw,52px)` lh **1.12** ls **-0.015em** — both Fraunces 600, `text-wrap: balance` |
| h3 | DM Sans **700**, `clamp(22px,2.2vw,28px)`, lh 1.25, ls -0.01em |
| Lead | `clamp(18px,1.6vw,21px)`, lh 1.55, max **62ch** |
| Body / small | **17px** / 15px, lh **1.6** |
| Eyebrow | 13px, DM Sans 700, uppercase, ls **0.16em**, accent-deep colour |
| Sub-lines | Fraunces *italic* 18–22px |
| Ratios | h1 : body ≈ **4.2 : 1**; h2 : h3 ≈ 1.86; display → body ≈ 5.2 : 1 |
| OpenType | `tnum` used 5× (stats); `font-optical-sizing: auto` once |
| Colour mood | warm paper `#fffbf5` / `#f7f0e6`, indigo ink `#1b1b3a`, text `#33334f`, muted `#5d5d78`, orange accent `#f0752f` + violet `#6b4fd8`, pill buttons with a hard offset shadow |
| Debt observed there | `font-weight: 800` (61×) and `900` (37×) are used but not loaded → faux bold. Three families. |

**Adaptation for us:** same two families (identical feel, and we already ship
them), Fraunces now loaded with the full `opsz` axis like medgrow, *italic* for
the emphasis line instead of a gradient. Differences, on purpose: no Caveat (2-family
rule), h3 stays Fraunces (medgrow switches to DM Sans) for a more editorial
commerce voice, line-heights raised to the 1.1–1.25 rule, overline tracking
`0.08em` per brief (medgrow uses 0.16em — say if you prefer theirs).

> ⚠️ **OpenType caveat:** the Google-Fonts latin subsets `next/font` downloads
> contain only `liga/calt/frac/locl` — **no `tnum` and no `ss01`** for either
> family (inspected with fontTools). The `numeric` (`tabular-nums`) utility is
> therefore a no-op today. Getting tnum requires self-hosting the full font
> files with `next/font/local` (larger download — size to be measured). Decision needed.

---

## 3. Type system

Fluid 320 → 1920 px. Base 16 → 17 px; ratio **1.15 at 320 px → 1.25 at 1920 px**
(a straight 1.25 makes a 57 px display on a phone; 1.15 lands on medgrow's 44 px).

| Token | 320 px | 1920 px | lh | tracking | face |
|---|---|---|---|---|---|
| `type-display` | 42.6 | 81.1 | 1.10 | -0.03em | Fraunces 600 |
| `type-h1` | 37.0 | 64.8 | 1.10 | -0.025em | Fraunces 600 |
| `type-h2` | 32.2 | 51.9 | 1.15 | -0.02em | Fraunces 600 |
| `type-h3` | 24.3 | 33.2 | 1.20 | -0.02em | Fraunces 600 |
| `type-h4` | 21.2 | 26.6 | 1.25 | -0.02em | DM Sans 700 |
| `type-body-lg` | 18.4 | 21.3 | 1.60 | -0.005em | DM Sans 400 |
| `type-body` | 16 | 17 | 1.65 | 0 | DM Sans 400 |
| `type-body-sm` | 14 | 14 | 1.55 | 0 | DM Sans 400 |
| `type-caption` | 12.5 | 12.5 | 1.45 | 0.005em | DM Sans 500 |
| `type-overline` | 12.5 | 12.5 | 1.30 | 0.08em, caps | DM Sans 700 |
| `type-button` | 15 | 15 | 1.25 | 0 | DM Sans 700 |
| `type-code` | 14 | 14 | 1.55 | 0 | system mono |

Weights total: **400 / 500 / 600 / 700** (4). Paragraph measure `--measure: 68ch`.
Fonts: `next/font/google`, `display: swap`, preloaded latin subset, automatic
metric-matched fallback (`adjustFontFallback`) → no swap CLS.

## 4. Colour — Paper & Teal (approved)

Neutrals run **paper → ink** (warm h≈80 at the light end, indigo h≈280 at the
dark end — medgrow's mood). One dominant accent: deep teal, `brand-600`
`#007777` (OKLCH 51.5% 0.088 195). Status hues are kept well apart from it:
success 152, warning 70, danger 25, info 240.

The alternative, A · Paper & Cobalt (`ramp(264, 0.21)`, `#2559dd`), is
documented in the generator but no longer emitted. A coral draft was dropped
because its hue (33) sat next to `danger` (25).

All 64 checks pass (32 per theme): body text ≥ 4.5, UI/borders ≥ 3, focus
ring ≥ 3 against bg / surface / bg-muted, and text on every solid status
colour. Full table: `node scripts/build-tokens.mjs --report`, or the styleguide.

Dark mode: ink-tinted surfaces (bg L 18%, never #000), elevation by lightness
(surface 21.5% → raised 25.5%), accent desaturated ~25–35%, dark ink text on the
accent button.

---

## 5. Migration map (old value → new token)

| Old | New |
|---|---|
| `bg-[#0B0F1A]`, `--bg-dark` | `bg-bg` inside `data-theme="dark"` |
| `bg-[#070A12]` | `bg-bg-subtle` (dark) |
| `bg-[#FAFBFC]`, `--bg-light` | `bg-bg` (light) |
| `#111827`, `--bg-dark-elevated` | `bg-surface-raised` (dark) |
| `bg-white`, `.card-light` | `bg-surface` + `border-border` + `shadow-elevation-1` |
| `text-slate-950/900`, `--foreground` | `text-fg` |
| `text-slate-600/700` | `text-fg-secondary` |
| `text-slate-400/500` | `text-fg-muted` |
| `text-white` on dark | `text-fg` in dark scope |
| `border-slate-200`, `border-white/[0.08]` | `border-border` |
| `border-slate-300`, `border-white/[0.14]` | `border-border-strong` |
| `#3b82f6`, `#2563eb`, `bg-blue-600`, `.btn-glow` | `bg-accent` / `hover:bg-accent-hover` / `active:bg-accent-pressed`, `text-on-accent` |
| `text-blue-600/400` links | `text-accent-text` |
| `bg-blue-50 border-blue-100` badges | `bg-accent-subtle border-accent-subtle-border` |
| violet / cyan / gradient accents, `.gradient-text` | removed → single accent; emphasis via Fraunces italic |
| `bg-amber-50 text-amber-900` placeholders | `bg-warning-bg text-warning-text border-warning-border` |
| `bg-emerald-*` success | `success-*` |
| `bg-red-*` errors | `danger-*` |
| `text-[10px]`, `text-[11px]`, `text-xs` meta | `type-caption` (12.5px min) |
| `uppercase tracking-wider text-xs font-semibold`, `.eyebrow-*` | `type-overline` |
| `text-sm`, `text-base`, `text-lg` body | `type-body-sm` / `type-body` / `type-body-lg` |
| `text-3xl…7xl` headings | `type-h3` / `type-h2` / `type-h1` / `type-display` |
| `font-mono` meta labels | `type-caption` (mono reserved for `type-code`) |
| `rounded` / `rounded-md` (old 4/6px) | `rounded-sm` → `--rounded-sm` (6px) |
| `rounded-lg` / `rounded-xl` (old 8/12px) | `rounded-md` → `--rounded-md` (10px) |
| `rounded-2xl`, `1rem` | `rounded-lg` → `--rounded-lg` (16px) |
| hero / modal panels | `rounded-xl` → `--rounded-xl` (24px) |
| `rounded-xl` buttons | `rounded-full` pills |
| `shadow-2xs` / `sm` / `md` / `lg` / `2xl` | `shadow-elevation-1…5` |
| `transition: all .2s` | explicit properties, `duration-150/200/250 ease-standard` |
| `max-w-7xl px-4 sm:px-6 lg:px-8` | `max-w-[var(--layout-max)] px-[var(--gutter)]` |
| `py-16/20/24` sections | `py-[var(--section-y)]` |

## 6. Decisions taken (defaults — say if you want any changed)

| Question | Decision | Why |
|---|---|---|
| Direction | **B · Paper & Teal** | Your pick. |
| Theme strategy | Light-first; follows the OS dark preference; the conversion-loop section, CTAs and footer are ink bands (`data-theme="dark"`) | Keeps the old site's dark/light rhythm, mirrors medgrow's ink bands; no toggle yet (would need a no-flash inline script). |
| tnum / ss01 | Not available — Google's subsets drop them. `numeric` utility is applied where figures align and starts working if full fonts are self-hosted via `next/font/local`. | Pending your call. |
| Breakpoints | `xs` 480 added; Tailwind `sm` 640 kept alongside 768 / 1024 / 1280 / 1536 | Removing 640 would reflow every page for no benefit. |
| Overline tracking | 0.08em | Per brief (medgrow uses 0.16em). |

### Behaviour notes (UI only, no business logic changed)

- Conversion-loop auto-play starts paused under `prefers-reduced-motion`, and
  also pauses while it has keyboard focus (previously hover only).
- Contact form: same submit/validation logic. Empty required fields are now
  marked `aria-invalid` and linked to an inline message after a failed submit;
  concern pills expose `aria-pressed`; the submit button shows a spinner and
  `aria-busy` while "Analyzing Store...".
- Blog filter: pills expose `aria-pressed`; the result count is announced; an
  empty state renders if a topic has no posts.
- Header: skip link, `aria-current` on the active route, drawer with focus trap
  and Esc; `aria-expanded` on the toggle.
- Whole-card click targets use a stretched link on the title (one tab stop per
  card).
- Copy: unchanged. Two structural tweaks only — footer column titles `h4 → h2`
  (heading order), and step titles inside the loop's buttons are no longer
  headings (invalid inside `<button>`).

### Scroll reveal

Mark any element with `data-reveal` (Cards and SectionHeaders do it by
default; `<Card reveal={false}>` opts out). `components/layout/ScrollReveal.tsx`
fades it up 32 px (`--motion-reveal`, 1200 ms, `--motion-ease-reveal` cubic ease-out) as it enters the
viewport, cascading siblings 150 ms apart. (Deliberately slower than the
150–250 ms UI-feedback range — requested so the reveal reads as motion.) Elements already on screen at load
are never hidden (no LCP or CLS cost), nested reveals are skipped, and nothing
is hidden without JS or under `prefers-reduced-motion`. The conversion loop
and growth-engine timers start only when their section is half visible and
pause while it is off screen.

### Not present on the site (built as primitives, shown in the styleguide)

Modal, toast, table, pagination, skeleton, switch, checkbox, radio — the site
has no screens using them today.

## 7. QA results (production build, 27 Oct 2026)

**Lighthouse** (mobile profile, median of 3 runs, original commit vs this branch):

| Route | Performance | Accessibility | LCP | TBT | CLS |
|---|---|---|---|---|---|
| `/` | 93 → **94** | 94 → **100** | 2.99 → 3.09 s | 142 → 52 ms | 0 → 0 |
| `/services` | 94 → **98** | 94 → **100** | 2.86 → 2.33 s | 140 → 84 ms | 0 → 0 |
| `/contact` | 93 → **96** | 96 → **100** | 2.81 → 2.66 s | 190 → 121 ms | 0 → 0 |

Best-practices and SEO were 100 on every route measured. `/` is one point
under the 95 target; its LCP element (the hero sub-copy paragraph, same as
before) is ~0.1 s slower because the page ships slightly more CSS/JS (token
sheet, client tabs + dialog). Font payload was cut to stay ahead: preloaded
fonts ~104 KB vs ~148 KB originally (Fraunces italic is lazy and
`display: optional`; DM Sans has no `opsz` axis).

**axe-core** (WCAG 2.0/2.1 A + AA + best practices): 0 violations on all 10
routes × light and dark.

**Keyboard**: skip link → `<main>`; visible 2 px focus ring on every stop;
tabs move with ← → Home End; mobile drawer traps focus, closes on Esc and
returns focus to the toggle (`aria-expanded` updates); filter chips toggle
with Space; the contact form's native validation focuses the first empty
field.

**Responsive**: no horizontal overflow on any route at 320, 375 and 1440 px
in either theme.
