import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, BarChart3, Repeat } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Our Process | How We Build & Scale Stores | CodeSquad",
  description:
    "Explore CodeSquad's four-phase ecommerce engineering process: Audit & Benchmarking, Clean Architecture, Conversion Deployment, and Growth Scaling.",
  path: "/process",
});

const steps = [
  {
    phase: "Phase 01",
    name: "Audit & Bottleneck Identification",
    tagline: "We diagnose before we touch a line of code.",
    icon: Zap,
    deliverables: [
      "Core Web Vitals & mobile latency breakdown (LCP, INP, CLS)",
      "Checkout drop-off and funnel leak analysis in GA4",
      "Third-party app payload and script bloat inventory",
      "Feed hygiene and Google Merchant Center diagnosis",
    ],
  },
  {
    phase: "Phase 02",
    name: "Clean Architecture & Design System",
    tagline: "Engineering conversion ergonomics without bloat.",
    icon: ShieldCheck,
    deliverables: [
      "Lightweight Liquid or Next.js App Router component library",
      "Mobile-first PDP with sticky add-to-cart controls",
      "Slide-over cart drawer with dynamic free-shipping thresholds",
      "Native replacements for 5-10 third-party monthly SaaS apps",
    ],
  },
  {
    phase: "Phase 03",
    name: "Conversion & Speed Deployment",
    tagline: "Rigorous QA and zero-downtime transition.",
    icon: BarChart3,
    deliverables: [
      "Cross-browser and multi-device checkout verification",
      "100% 301 URL redirect preservation and canonicalization",
      "Server-side conversion tracking (CAPI & Enhanced Conversions)",
      "AI search bot indexing rules configured in robots.txt and schema",
    ],
  },
  {
    phase: "Phase 04",
    name: "Retention, Ads & Automated Scale",
    tagline: "Turning first-time buyers into repeat regulars.",
    icon: Repeat,
    deliverables: [
      "15-minute speed-to-lead SMS and email cart recovery flows",
      "Margin-based Performance Max and Google Shopping campaign restructuring",
      "Predictive replenishment and VIP win-back automations in Klaviyo",
      "Multi-warehouse inventory synchronization and fraud screening pipelines",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-[#FAFBFC]">
      {/* Header (Dark Mesh) */}
      <section className="pt-20 pb-24 border-b border-white/[0.08] mesh-gradient-hero grain text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow-dark mb-6">
              Engineering Rigor
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              A systematic, four-phase process for predictable store growth.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We do not rely on guesswork or cookie-cutter templates. Every project follows an engineering cadence designed to protect your existing revenue while unlocking higher margins and conversion rates.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.phase}
                  className="card-light p-8 sm:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm shadow-blue-600/30">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                          {step.phase} (0{idx + 1})
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-3">
                        {step.name}
                      </h2>
                      <p className="text-slate-600 text-base leading-relaxed">
                        {step.tagline}
                      </p>
                    </div>

                    <div className="lg:col-span-8 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">
                        Core Phase Deliverables:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {step.deliverables.map((deliv, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 leading-snug">
                              {deliv}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Turnaround Time Note & CTA (Dark Mesh) */}
      <section className="py-24 bg-[#0B0F1A] text-white grain border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="eyebrow-dark mb-4">
            Predictable Timelines
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white mt-2">
            Standard store builds launch in [TIMELINE — TO CONFIRM].
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base mb-8">
            Start with a diagnostic audit of your store before committing to a full redesign.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-base font-semibold text-white btn-glow px-8 py-4 rounded-xl transition-all shadow-sm"
          >
            Schedule Store Audit Call
            <ArrowUpRight className="ml-1.5 w-4 h-4 text-blue-100" />
          </Link>
        </div>
      </section>
    </div>
  );
}
