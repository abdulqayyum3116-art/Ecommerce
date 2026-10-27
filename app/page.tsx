import Hero from "@/components/home/Hero";
import StoreLoopMock from "@/components/home/StoreLoopMock";
import GrowthCycle from "@/components/home/GrowthCycle";
import NichesSection from "@/components/home/NichesSection";
import FlatCaseStudiesShowcase from "@/components/home/FlatCaseStudiesShowcase";
import HomeCta from "@/components/home/HomeCta";
import Link from "next/link";
import { ArrowUpRight, ShoppingCart, TrendingUp, Search, Megaphone, Mail, RefreshCw } from "lucide-react";

export default function HomePage() {
  const quickServices = [
    {
      title: "Store Build & Redesign",
      href: "/services/store-build",
      icon: ShoppingCart,
      desc: "High-performance Shopify, WooCommerce, and Headless Next.js storefronts built to scale.",
      accent: "from-blue-500 to-cyan-500",
    },
    {
      title: "CRO & UX Optimization",
      href: "/services/cro",
      icon: TrendingUp,
      desc: "Remove checkout drop-offs and maximize average order value with rapid testing.",
      accent: "from-violet-500 to-purple-500",
    },
    {
      title: "SEO & GEO for Products",
      href: "/services/seo-geo",
      icon: Search,
      desc: "Product feed optimization for Google Shopping, Perplexity, and AI search engines.",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      title: "Paid Shopping & Ads",
      href: "/services/paid-ads",
      icon: Megaphone,
      desc: "Performance Max and feed-driven acquisition campaigns tied directly to order margins.",
      accent: "from-amber-500 to-orange-500",
    },
    {
      title: "Email & SMS Retention",
      href: "/services/retention",
      icon: Mail,
      desc: "Klaviyo automated flows for cart abandonment, post-purchase, and win-back sequences.",
      accent: "from-rose-500 to-pink-500",
    },
    {
      title: "CRM & Order Automation",
      href: "/services/automation-crm",
      icon: RefreshCw,
      desc: "Automated warehouse syncing, order routing, fraud screening, and returns management.",
      accent: "from-blue-600 to-indigo-600",
    },
  ];

  return (
    <>
      {/* 1. Hero with Single H1 (Dark Mesh) */}
      <Hero />

      {/* 2. Interactive Store Loop Mock Section */}
      <section className="py-20 bg-[#070A12] text-white border-b border-white/[0.08]" aria-labelledby="conversion-sequence-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="eyebrow-dark mb-4">
              Conversion Lifecycle
            </span>
            <h2 id="conversion-sequence-heading" className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-2">
              The 6-stage store conversion sequence.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              Hover over or select any phase to inspect the engineering levers powering that transition.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <StoreLoopMock />
          </div>
        </div>
      </section>

      {/* 3. Growth System Cycle (Attract -> Convert -> Retain -> Repeat) (Deep Dark) */}
      <GrowthCycle />

      {/* 3. Services Quick Grid (Clean Light Surface for Contrast) */}
      <section className="py-24 bg-[#FAFBFC] border-b border-slate-200" aria-labelledby="home-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="eyebrow-light">
                End-to-End Capabilities
              </span>
              <h2 id="home-services-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 text-slate-950">
                Six focused pillars for store revenue.
              </h2>
              <p className="text-slate-600 text-lg mt-3 max-w-2xl">
                Every service connects directly into the revenue cycle. No fragmented handoffs or guesswork.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600"
            >
              View detailed services hub
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="group card-light p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-blue-50 group-hover:to-blue-100 text-slate-800 group-hover:text-blue-600 flex items-center justify-center mb-6 transition-all shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-blue-600 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{svc.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-700 group-hover:text-blue-600">
                    <span>Explore capability</span>
                    <ArrowUpRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Specialized Niches (Dark Immersive Atmosphere) */}
      <NichesSection />

      {/* 5. Flat Case Studies Showcase (Clean Light Surface for Readability) */}
      <FlatCaseStudiesShowcase />

      {/* 6. High-Conversion Audit CTA (Dark Mesh Gradient Closing) */}
      <HomeCta />
    </>
  );
}
