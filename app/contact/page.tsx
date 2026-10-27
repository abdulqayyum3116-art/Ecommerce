import ContactForm from "@/components/forms/ContactForm";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Request Free Store Audit & Contact | CodeSquad Ecommerce",
  description:
    "Request a complimentary technical audit of your online store. We review mobile speed, checkout friction, product SEO schema, and abandoned cart automations.",
  path: "/contact",
});

export default function ContactPage() {
  const auditPoints = [
    "Mobile PageSpeed & Core Web Vitals audit (LCP, INP, CLS)",
    "Checkout ergonomics and high-dropoff step identification",
    "Third-party app script bloat & payload reduction suggestions",
    "Generative Engine Optimization (GEO) & schema validation check",
    "Speed-to-lead cart abandonment SMS & email review",
  ];

  return (
    <div className="bg-[#FAFBFC]">
      {/* Top Banner (Dark Mesh) */}
      <section className="pt-20 pb-24 border-b border-white/[0.08] mesh-gradient-hero grain text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow-dark mb-6">
              Zero Obligation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Get an engineering teardown of your store.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Submit your store URL below. Our technical ecommerce team will conduct a thorough audit of your speed bottlenecks, checkout UX friction, and retention gaps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & What You Receive */}
          <div className="lg:col-span-6">
            <span className="eyebrow-light mb-3">
              Comprehensive Teardown
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-950 mb-6 mt-2">
              What Your Store Audit Delivers:
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              We dive straight into the code, analytics, and checkout behavior. No high-pressure sales pitch — just concrete data and actionable engineering priorities.
            </p>

            <div className="card-light p-8 mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-5">
                Audit Scope Checklist:
              </h3>
              <ul className="space-y-3.5">
                {auditPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white flex items-start gap-3.5 shadow-2xs">
              <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Transparent Review:</strong> Delivered by engineers, not commission-based salespeople. If your store does not need a redesign, we will tell you directly.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
