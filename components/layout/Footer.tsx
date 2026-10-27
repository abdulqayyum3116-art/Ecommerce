import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "./Header";
import { NavLink } from "./NavLink";
import { icon } from "@/components/ui/icon";

const linkClass = "inline-flex items-center gap-1 rounded-sm text-fg-secondary transition-colors duration-150 hover:text-fg";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 type-overline text-fg-muted">{title}</h2>
      <ul className="space-y-3 type-body-sm">{children}</ul>
    </div>
  );
}

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
      <ArrowUpRight {...icon.sm} size={14} className="text-fg-muted" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer data-theme="dark" className="border-t border-border bg-bg-subtle text-fg">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-12">
          {/* Brand column */}
          <div className="space-y-5 sm:col-span-2 md:col-span-5">
            <NavLink href="/" aria-label="Ecommerce By CodeSquad Homepage" className="inline-flex rounded-sm">
              <BrandMark />
            </NavLink>
            <p className="max-w-sm type-body-sm text-fg-secondary">
              We engineer, optimize, and scale high-performance online stores. Bespoke commerce solutions, speed-to-lead follow-up, and AI-driven retention for direct-to-consumer retailers.
            </p>
            <a
              href="https://codesquad.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-accent-subtle-border bg-accent-subtle px-3.5 py-1.5 type-caption font-bold text-accent-text transition-colors duration-150 hover:border-accent"
            >
              Part of CodeSquad Agency — Visit codesquad.ai
              <ArrowUpRight {...icon.sm} size={14} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <div className="md:col-span-3">
            <Column title="Solutions">
              <li><Link href="/services/store-build" className={linkClass}>Store Build &amp; Redesign</Link></li>
              <li><Link href="/services/cro" className={linkClass}>CRO &amp; UX Optimization</Link></li>
              <li><Link href="/services/seo-geo" className={linkClass}>SEO &amp; GEO for Products</Link></li>
              <li><Link href="/services/paid-ads" className={linkClass}>Paid Shopping &amp; Ads</Link></li>
              <li><Link href="/services/retention" className={linkClass}>Email &amp; SMS Retention</Link></li>
              <li><Link href="/services/automation-crm" className={linkClass}>CRM &amp; Order Automation</Link></li>
            </Column>
          </div>

          <div className="md:col-span-2">
            <Column title="Growth">
              <li><Link href="/case-studies" className={linkClass}>Case Studies</Link></li>
              <li><Link href="/process" className={linkClass}>Our Process</Link></li>
              <li><Link href="/blog" className={linkClass}>Ecommerce Insights</Link></li>
              <li><Link href="/contact" className={linkClass}>Free Store Audit</Link></li>
            </Column>
          </div>

          <div className="md:col-span-2">
            <Column title="CodeSquad Verticals">
              <li><External href="https://medgrow.codesquad.ai">Healthcare (MedGrow)</External></li>
              <li><External href="https://codesquad.ai/it-engineering">IT &amp; Engineering</External></li>
              <li><External href="https://codesquad.ai/services/ai-automation">Custom AI Automation</External></li>
            </Column>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 type-caption text-fg-muted sm:flex-row">
          <p>© 2026 CodeSquad Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://codesquad.ai" target="_blank" rel="noopener noreferrer" className="rounded-sm transition-colors duration-150 hover:text-fg">
              Main Agency: codesquad.ai
            </a>
            <Link href="/contact" className="rounded-sm transition-colors duration-150 hover:text-fg">
              Free Store Audit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
