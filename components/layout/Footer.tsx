import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070A12] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Ecommerce By CodeSquad Homepage"
            >
              <span className="font-bold text-2xl tracking-tight text-white font-serif">
                Ecommerce<span className="text-blue-500">.</span>
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-300 bg-white/[0.06] border border-white/[0.1] px-2.5 py-0.5 rounded-full">
                By CodeSquad
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              We engineer, optimize, and scale high-performance online stores. Bespoke commerce solutions, speed-to-lead follow-up, and AI-driven retention for direct-to-consumer retailers.
            </p>
            {/* Link back to Main Agency */}
            <div className="pt-2">
              <a
                href="https://codesquad.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-950/40 px-3.5 py-1.5 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all"
              >
                Part of CodeSquad Agency — Visit codesquad.ai
                <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">Solutions</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/store-build" className="hover:text-white transition-colors">
                  Store Build &amp; Redesign
                </Link>
              </li>
              <li>
                <Link href="/services/cro" className="hover:text-white transition-colors">
                  CRO &amp; UX Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/seo-geo" className="hover:text-white transition-colors">
                  SEO &amp; GEO for Products
                </Link>
              </li>
              <li>
                <Link href="/services/paid-ads" className="hover:text-white transition-colors">
                  Paid Shopping &amp; Ads
                </Link>
              </li>
              <li>
                <Link href="/services/retention" className="hover:text-white transition-colors">
                  Email &amp; SMS Retention
                </Link>
              </li>
              <li>
                <Link href="/services/automation-crm" className="hover:text-white transition-colors">
                  CRM &amp; Order Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">Growth</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Ecommerce Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Free Store Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Practices Column */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">CodeSquad Verticals</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://medgrow.codesquad.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-white transition-colors"
                >
                  Healthcare (MedGrow)
                  <ArrowUpRight className="ml-1 w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://codesquad.ai/it-engineering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-white transition-colors"
                >
                  IT &amp; Engineering
                  <ArrowUpRight className="ml-1 w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://codesquad.ai/services/ai-automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-white transition-colors"
                >
                  Custom AI Automation
                  <ArrowUpRight className="ml-1 w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 CodeSquad Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://codesquad.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Main Agency: codesquad.ai
            </a>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Free Store Audit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
