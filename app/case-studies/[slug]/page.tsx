import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { caseStudiesList } from "@/lib/caseStudiesData";
import { generateSeoMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return caseStudiesList.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const study = caseStudiesList.find((c) => c.slug === resolvedParams.slug);
  if (!study) return {};

  return generateSeoMetadata({
    title: `${study.title} | Case Study`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const study = caseStudiesList.find((c) => c.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="bg-[#FAFBFC]">
      {/* Top Banner (Dark Mesh) */}
      <section className="pt-20 pb-24 border-b border-white/[0.08] mesh-gradient-hero grain text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-1.5 w-4 h-4" />
              Back to Case Studies
            </Link>
          </div>

          {/* 1. Client Type + Store Type */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 bg-white/[0.08] border border-white/[0.12] px-3 py-1 rounded-full">
              {study.clientType}
            </span>
            <span className="text-xs font-mono text-blue-300 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
              {study.storeType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
            {study.title}
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">{study.summary}</p>
        </div>
      </section>

      {/* Main Content Body (White / Clean Light) */}
      <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Challenge */}
        <section className="mb-16">
          <span className="eyebrow-light mb-3">
            Section 01
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 mt-2">
            The Technical &amp; Operational Challenge
          </h2>
          <div className="p-8 rounded-2xl bg-white border border-slate-200 text-slate-700 leading-relaxed text-base shadow-2xs">
            {study.challenge}
          </div>
        </section>

        {/* 3. What CodeSquad Built */}
        <section className="mb-16">
          <span className="eyebrow-light mb-3">
            Section 02
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 mt-2">
            What CodeSquad Engineered
          </h2>

          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="border border-slate-200 rounded-2xl p-7 bg-white shadow-2xs">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
                Core Stack &amp; Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {study.whatWeBuilt.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Custom Pages & Interfaces */}
            <div className="border border-slate-200 rounded-2xl p-7 bg-white shadow-2xs">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
                Pages &amp; UX Components Engineered
              </h3>
              <ul className="space-y-2.5">
                {study.whatWeBuilt.pages.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Automations */}
            <div className="border border-slate-200 rounded-2xl p-7 bg-white shadow-2xs">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
                Automations &amp; Event Pipelines
              </h3>
              <ul className="space-y-2.5">
                {study.whatWeBuilt.automations.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Results — Placeholder Fields */}
        <section className="mb-16">
          <span className="eyebrow-light mb-3">
            Section 03
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-4 mt-2">
            Performance Results
          </h2>
          <div className="p-8 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold mb-2">
              Verified Metric Status:
            </div>
            {study.resultDetails.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-amber-950 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>{metric}</span>
              </div>
            ))}
            <p className="text-xs text-amber-800/80 pt-3 border-t border-amber-200/80">
              * Note: In alignment with our strict data policy, numerical milestones are awaiting explicit client verification before public publication.
            </p>
          </div>
        </section>

        {/* 5. CTA to /contact (Dark Mesh Box) */}
        <section className="p-8 sm:p-12 rounded-2xl bg-[#0B0F1A] text-white grain border border-white/[0.08] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
              Want similar engineering for your store?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-6">
              Get an in-depth code and conversion audit to identify your highest-leverage growth opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-white btn-glow px-7 py-3.5 rounded-xl transition-all shadow-sm"
            >
              Request Free Store Audit
              <ArrowUpRight className="ml-1.5 w-4 h-4 text-blue-100" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
