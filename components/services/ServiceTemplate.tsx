import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";

interface Deliverable {
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ServiceTemplateProps {
  eyebrow: string;
  h1: string;
  leadParagraph: string;
  problemHeading: string;
  problemDescription: string;
  problemPoints: string[];
  solutionHeading: string;
  solutionDescription: string;
  deliverables: Deliverable[];
  leadPlatformNotice?: string;
  processSteps: ProcessStep[];
  relatedCaseStudySlug: string;
  relatedCaseStudyTitle: string;
}

export default function ServiceTemplate(props: ServiceTemplateProps) {
  return (
    <div className="bg-[#FAFBFC]">
      {/* Hero Section (Dark Mesh) */}
      <section className="pt-20 pb-24 border-b border-white/[0.08] mesh-gradient-hero grain text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow-dark mb-6">
              {props.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              {props.h1}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {props.leadParagraph}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-white btn-glow px-7 py-3.5 rounded-xl transition-all shadow-sm"
              >
                Request Free Store Audit
                <ArrowUpRight className="ml-1.5 w-4 h-4 text-blue-100" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center text-sm font-medium text-slate-200 hover:text-white btn-ghost-dark px-7 py-3.5 rounded-xl transition-colors"
              >
                View Case Studies
                <ArrowRight className="ml-1.5 w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & Challenge */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-500 font-mono block mb-3">
                The Bottleneck
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-950 mb-4">
                {props.problemHeading}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {props.problemDescription}
              </p>
            </div>

            <div className="lg:col-span-7 card-light p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-6">
                Where Most Stores Leak Revenue:
              </h3>
              <div className="space-y-4">
                {props.problemPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✕
                    </span>
                    <p className="text-slate-700 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What CodeSquad Builds */}
      <section className="py-24 bg-[#FAFBFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="eyebrow-light mb-3">
              The Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mb-4 mt-2">
              {props.solutionHeading}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {props.solutionDescription}
            </p>
            {props.leadPlatformNotice && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900">
                <strong>Platform Architecture:</strong> {props.leadPlatformNotice}
              </div>
            )}
          </div>

          {/* Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="card-light p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-base font-bold text-slate-950">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="eyebrow-light mb-3">
              Execution Cadence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-2">
              How we deploy and scale this capability.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {props.processSteps.map((step) => (
              <div key={step.step} className="card-light p-6">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase mb-2 block">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-950 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Study Reference */}
      <section className="py-16 bg-[#FAFBFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 card-light flex flex-col md:flex-row md:items-center justify-between gap-6 accent-border-left">
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-1">
                Related Implementation Study
              </span>
              <h3 className="text-xl font-bold text-slate-950 mb-1">
                {props.relatedCaseStudyTitle}
              </h3>
              <p className="text-sm text-slate-500">
                Performance outcome: <span className="font-semibold bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200">[RESULT — TO CONFIRM]</span>
              </p>
            </div>
            <Link
              href={`/case-studies/${props.relatedCaseStudySlug}`}
              className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 whitespace-nowrap"
            >
              Read full technical breakdown
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Box (Dark Mesh) */}
      <section className="py-24 bg-[#0B0F1A] text-white grain border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-white">
            Audit your store&apos;s performance today.
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base mb-8">
            Get an engineering assessment of your bottlenecks, speed scores, and abandonment recovery flows.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-base font-semibold text-white btn-glow px-8 py-4 rounded-xl transition-all shadow-sm"
          >
            Request Free Store Audit
            <ArrowUpRight className="ml-1.5 w-4 h-4 text-blue-100" />
          </Link>
        </div>
      </section>
    </div>
  );
}
