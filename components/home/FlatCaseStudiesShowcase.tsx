import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyPreview {
  slug: string;
  clientType: string;
  title: string;
  summary: string;
  deliverables: string[];
  resultPlaceholder: string;
}

const featuredStudy: CaseStudyPreview = {
  slug: "apparel-dtc-growth",
  clientType: "[STORE TYPE — TO CONFIRM]",
  title: "Multi-SKU Apparel Storefront Re-Architecture & Mobile Checkout Streamline",
  summary:
    "Transitioned from a bloated theme to a lightweight, high-performance storefront, removing checkout friction and deploying automated SMS cart recovery.",
  deliverables: [
    "Shopify Liquid Clean Architecture",
    "Sub-Second Mobile PDPs",
    "Speed-to-Lead SMS Cart Recovery",
  ],
  resultPlaceholder: "[RESULT — TO CONFIRM]",
};

const otherStudies: CaseStudyPreview[] = [
  {
    slug: "beauty-skincare-cro",
    clientType: "[STORE TYPE — TO CONFIRM]",
    title: "Beauty & Regimen Bundle Builder With Automated Replenishment",
    summary:
      "Engineered an interactive 3-step skincare routine selector with automatic 30/60/90-day replenishment subscriptions via Klaviyo.",
    deliverables: ["Custom Bundle Flow", "Klaviyo Replenish Sequence"],
    resultPlaceholder: "[RESULT — TO CONFIRM]",
  },
  {
    slug: "electronics-order-automation",
    clientType: "[STORE TYPE — TO CONFIRM]",
    title: "High-Ticket Electronics Catalog & Automated Multi-Warehouse CRM",
    summary:
      "Automated real-time inventory synchronization across multi-location warehouses with automated high-fraud order verification.",
    deliverables: ["Automated CRM & Webhooks", "AI Fraud Screen"],
    resultPlaceholder: "[RESULT — TO CONFIRM]",
  },
];

export default function FlatCaseStudiesShowcase() {
  return (
    <section className="py-24 bg-[#FAFBFC] border-b border-slate-200" aria-labelledby="cases-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow-light">
              Verified Technical Case Studies
            </span>
            <h2 id="cases-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 text-slate-950">
              Measurable systems. Zero vanity numbers.
            </h2>
            <p className="text-slate-600 text-lg mt-3">
              Explore how we design, develop, and automate high-conversion ecommerce infrastructure.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600"
          >
            Browse all case studies
            <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        {/* Flat Grid Showcase (No 3D, No coverflow) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Large Study */}
          <div className="lg:col-span-7 card-light p-8 sm:p-10 flex flex-col justify-between accent-border-left">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded border border-blue-100">
                  Featured Case Study
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {featuredStudy.clientType}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                {featuredStudy.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {featuredStudy.summary}
              </p>
              <div className="space-y-2 mb-8">
                <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Engineered Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {featuredStudy.deliverables.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block font-mono">Performance Metric</span>
                <span className="text-sm font-semibold bg-amber-50 text-amber-900 px-2.5 py-1 rounded border border-amber-200 inline-block mt-1">
                  {featuredStudy.resultPlaceholder}
                </span>
              </div>
              <Link
                href={`/case-studies/${featuredStudy.slug}`}
                className="inline-flex items-center text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 px-5 py-2.5 rounded-xl transition-all shadow-sm"
              >
                Read breakdown
                <ArrowUpRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Secondary Flat Grid Studies */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {otherStudies.map((study) => (
              <div
                key={study.slug}
                className="card-light p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-400">
                      {study.clientType}
                    </span>
                    <span className="text-xs font-semibold bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200">
                      {study.resultPlaceholder}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {study.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {study.deliverables.map((deliv) => (
                      <span key={deliv} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        {deliv}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center shrink-0 ml-2"
                  >
                    View
                    <ArrowUpRight className="ml-0.5 w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Note on Transparency & More Studies Coming Soon */}
            <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-white/60 text-center">
              <span className="text-xs font-mono text-slate-500">
                Additional client case studies coming soon — verified metrics only.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
