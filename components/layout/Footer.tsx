import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
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
              <Logo />
            </NavLink>
            <p className="max-w-sm type-body-sm text-fg-secondary">
              Ecommerce marketing for growing online brands: Google and Meta ads, product SEO and AI search visibility, product video, email and SMS, and order automation, all in one plan.
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
            <Column title="Services">
              <li><Link href="/services/google-ads" className={linkClass}>Google Shopping &amp; Search Ads</Link></li>
              <li><Link href="/services/meta-ads" className={linkClass}>Meta Ads</Link></li>
              <li><Link href="/services/seo-geo" className={linkClass}>Search &amp; AI Visibility</Link></li>
              <li><Link href="/services/product-video" className={linkClass}>Product Video Creation</Link></li>
              <li><Link href="/services/email-marketing" className={linkClass}>Email &amp; SMS Marketing</Link></li>
              <li><Link href="/services/order-automation" className={linkClass}>Order Lifecycle Automation</Link></li>
            </Column>
          </div>

          <div className="md:col-span-2">
            <Column title="Growth">
              <li><Link href="/case-studies" className={linkClass}>Case Studies</Link></li>
              <li><Link href="/process" className={linkClass}>Our Process</Link></li>
              <li><Link href="/blog" className={linkClass}>Marketing Insights</Link></li>
              <li><Link href="/contact" className={linkClass}>Free Marketing Audit</Link></li>
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
              Free Marketing Audit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
