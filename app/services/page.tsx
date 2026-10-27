import Link from "next/link";
import { ShoppingCart, TrendingUp, Search, Megaphone, Mail, RefreshCw, ArrowUpRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Ecommerce Services & Growth Capabilities | CodeSquad",
  description:
    "Explore CodeSquad's six core ecommerce services: Store builds, CRO, SEO/GEO for product feeds, paid ads, retention automations, and CRM order workflows.",
  path: "/services",
});

const services = [
  {
    slug: "store-build",
    title: "Store Build & Redesign",
    eyebrow: "Pillar 01",
    icon: ShoppingCart,
    tag: "Shopify Lead · Next.js Headless",
    desc: "We engineer lightweight, blazing-fast storefronts built for conversion. From clean Shopify theme development to headless Next.js architectures, we strip bloat and optimize checkout ergonomics.",
  },
  {
    slug: "cro",
    title: "CRO & UX Optimization",
    eyebrow: "Pillar 02",
    icon: TrendingUp,
    tag: "Mobile-First · Cart Drawer UX",
    desc: "Eliminate checkout drop-offs and elevate average order value (AOV). We deploy sticky add-to-cart controls, dynamic bundle builders, instant variant swatches, and frictionless one-page checkouts.",
  },
  {
    slug: "seo-geo",
    title: "SEO / GEO for Products",
    eyebrow: "Pillar 03",
    icon: Search,
    tag: "AI Search Bots · Google Shopping",
    desc: "Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). We structure product schema, merchant feeds, and descriptive FAQs for discovery on Google, Perplexity, and ChatGPT.",
  },
  {
    slug: "paid-ads",
    title: "Paid Ads for Stores",
    eyebrow: "Pillar 04",
    icon: Megaphone,
    tag: "Google Shopping · Performance Max",
    desc: "Acquisition campaigns tied to true order contribution margin. We optimize product feeds, structure Google Shopping campaigns by inventory margins, and eliminate wasted spend on dead SKUs.",
  },
  {
    slug: "retention",
    title: "Email & Retention Automation",
    eyebrow: "Pillar 05",
    icon: Mail,
    tag: "Klaviyo · SMS Speed-to-Lead",
    desc: "Transform one-time purchasers into repeat buyers. Automated browse abandonment, speed-to-lead SMS cart recovery, post-purchase replenishment reminders, and cohort-specific VIP flows.",
  },
  {
    slug: "automation-crm",
    title: "CRM & Order Automation",
    eyebrow: "Pillar 06",
    icon: RefreshCw,
    tag: "Multi-Warehouse · Fraud Screening",
    desc: "Remove operational friction behind every order. Real-time multi-location inventory syncing, automated routing to 3PL fulfillment centers, high-fraud flagging, and self-service return workflows.",
  },
];

export default function ServicesHubPage() {
  return (
    <div className="bg-[#FAFBFC]">
      {/* Header (Dark Mesh) */}
      <section className="pt-20 pb-24 border-b border-white/[0.08] mesh-gradient-hero grain text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow-dark mb-6">
              Integrated Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Engineering high-growth online stores from click to repeat order.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Every service is connected to the core ecommerce cycle: Attract, Convert, Retain, and Repeat. We eliminate fragmented agency handoffs by engineering the full growth system.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (6 Unified Cards) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="card-light p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {svc.eyebrow}
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md inline-block mb-3">
                      {svc.tag}
                    </span>

                    <h2 className="text-2xl font-bold text-slate-950 mb-3">
                      {svc.title}
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 group"
                    >
                      View full service breakdown
                      <ArrowUpRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0B0F1A] text-white border-t border-white/[0.08] grain">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Unsure which service will move the needle first?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            We will audit your store to identify whether traffic, checkout conversion, or repeat rate is your primary bottleneck.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-semibold text-white btn-glow px-7 py-3.5 rounded-xl transition-all shadow-sm"
          >
            Request Free Store Audit
            <ArrowUpRight className="ml-1 w-4 h-4 text-blue-100" />
          </Link>
        </div>
      </section>
    </div>
  );
}
