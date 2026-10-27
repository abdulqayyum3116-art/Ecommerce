import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudiesList } from "@/lib/caseStudiesData";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Case Studies | CodeSquad Ecommerce",
  description:
    "Explore our engineering case studies for ecommerce brands. Flat, readable breakdowns of problems, tech stacks, and verified results.",
  path: "/case-studies",
});

export default function CaseStudiesHubPage() {
  const [featured, ...others] = caseStudiesList;

  return (
    <div className="bg-[#FAFBFC]">
      {/* Header (Dark Mesh) */}
      <section className="pt-20 pb-24 border-b border-white/[0.08] mesh-gradient-hero grain text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow-dark mb-6">
              Proven Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Engineering case studies with zero invented vanity metrics.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We document our work with engineering rigor: the exact technical bottlenecks, the architecture built, and the operational outcomes achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Flat Showcase Grid (§5) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Large Featured Case Study */}
          <div className="card-light p-8 sm:p-12 mb-16 accent-border-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded border border-blue-100">
                    Featured Case Study
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {featured.clientType}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-slate-950 mb-4">
                  {featured.title}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {featured.summary}
                </p>

                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-900 block">
                    Deliverables &amp; Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featured.whatWeBuilt.stack.map((item) => (
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

              <div className="lg:col-span-4 bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-2">
                    Verified Outcomes
                  </span>
                  <div className="space-y-2 mb-6">
                    {featured.resultDetails.map((res, i) => (
                      <div key={i} className="text-xs font-medium bg-amber-50 text-amber-900 p-2.5 rounded-lg border border-amber-200">
                        {res}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/case-studies/${featured.slug}`}
                  className="w-full inline-flex items-center justify-center text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 py-3 rounded-xl transition-all shadow-sm"
                >
                  Read full case breakdown
                  <ArrowUpRight className="ml-1.5 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Remaining Flat Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {others.map((study) => (
              <div
                key={study.slug}
                className="card-light p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400">
                      {study.clientType}
                    </span>
                    <span className="text-xs font-semibold bg-amber-50 text-amber-900 px-2.5 py-1 rounded border border-amber-200">
                      {study.resultsPlaceholder}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {study.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.whatWeBuilt.stack.slice(0, 3).map((item) => (
                      <span key={item} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    {study.storeType}
                  </span>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
                  >
                    View Case Study
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* More Studies Coming Soon State */}
          <div className="p-8 rounded-2xl border border-dashed border-slate-300 bg-white text-center max-w-xl mx-auto shadow-2xs">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              More Case Studies Coming Soon
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              We do not fabricate client names or project metrics to pad our portfolio. As current client growth milestones are formally confirmed and approved for release, they will appear here.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-semibold text-blue-600 hover:underline"
            >
              Discuss your store&apos;s architecture with our engineers →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
