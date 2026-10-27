import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeCta() {
  return (
    <section className="py-24 bg-[#0B0F1A] text-white relative overflow-hidden grain border-t border-white/[0.08]" aria-labelledby="cta-heading">
      {/* Background ambient mesh glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center_top] from-blue-600/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow-dark mb-6">
            Complimentary Assessment
          </span>
          <h2 id="cta-heading" className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
            Get an engineering audit of your online store.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10">
            We evaluate your Core Web Vitals, mobile PDP conversion bottlenecks, checkout ergonomics, and browse-abandonment flows — delivered with zero fluff.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center text-base font-semibold text-white btn-glow px-8 py-4 rounded-xl transition-all shadow-md group cursor-pointer"
            >
              Request Free Store Audit
              <ArrowUpRight className="ml-2 w-4 h-4 text-blue-100 group-hover:text-white transition-colors" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center text-base font-medium text-slate-200 hover:text-white btn-ghost-dark px-8 py-4 rounded-xl transition-colors cursor-pointer"
            >
              Explore All 6 Services
            </Link>
          </div>

          <div className="mt-8 text-xs text-slate-400 font-mono">
            Typically delivered within [TURNAROUND TIME — TO CONFIRM] · No obligation
          </div>
        </div>
      </div>
    </section>
  );
}
