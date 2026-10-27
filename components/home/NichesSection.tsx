import Link from "next/link";
import { ArrowUpRight, Shirt, Sparkles, Cpu, ShoppingBag } from "lucide-react";

interface Niche {
  title: string;
  badge: string;
  description: string;
  focusArea: string;
  icon: React.ElementType;
}

const niches: Niche[] = [
  {
    title: "Fashion & Apparel",
    badge: "Variant Speed & Lookbooks",
    description: "High-SKU visual merchandising, instant variant swatches, size-recommenders, and visual UGC integration that drops return rates.",
    focusArea: "Attract & Convert",
    icon: Shirt,
  },
  {
    title: "Beauty & Cosmetics",
    badge: "Sub-second PDPs & Bundles",
    description: "Multi-step regimen builders, automated subscription replenish intervals, and shade-finder UX optimized for sub-second mobile buying.",
    focusArea: "Convert & Retain",
    icon: Sparkles,
  },
  {
    title: "Consumer Electronics",
    badge: "Spec Comparisons & Warranties",
    description: "Complex technical spec matrices, warranty upsells in cart, and AI-driven search that guides buyers directly to compatible accessories.",
    focusArea: "Convert & Repeat",
    icon: Cpu,
  },
  {
    title: "DTC Scale Brands",
    badge: "High-Volume Funnels & LTV",
    description: "Custom headless Next.js or advanced Shopify Plus architecture designed for flash sales, global multi-currency, and Klaviyo lifecycle flows.",
    focusArea: "Attract to Repeat",
    icon: ShoppingBag,
  },
];

export default function NichesSection() {
  return (
    <section className="py-24 bg-[#0B0F1A] text-white border-b border-white/[0.08] relative overflow-hidden" aria-labelledby="niches-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow-dark">
            Specialized Verticals
          </span>
          <h2 id="niches-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 text-white">
            Engineered for high-velocity ecommerce niches.
          </h2>
          <p className="text-slate-300 text-lg mt-4 leading-relaxed">
            Generic templates fail specialized catalogs. We tailor UX, checkout ergonomics, and retention automations to the exact purchasing rhythms of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {niches.map((niche) => {
            const Icon = niche.icon;
            return (
              <div
                key={niche.title}
                className="glass-card rounded-2xl p-7 hover:border-white/[0.18] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider block mb-2">
                    {niche.focusArea}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {niche.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {niche.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <span className="text-xs font-semibold text-slate-200 bg-white/[0.06] border border-white/[0.1] px-2.5 py-1 rounded">
                    {niche.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 p-6 glass-card rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300">
            Operating in a different direct-to-consumer vertical or B2B commerce? We build custom catalog architectures.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 whitespace-nowrap"
          >
            Request custom vertical audit
            <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
