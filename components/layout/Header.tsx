"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { icon } from "@/components/ui/icon";
import { NavLink } from "./NavLink";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="font-display text-[length:var(--type-h4-size)] leading-none font-semibold tracking-[-0.02em]">
        Ecommerce<span className="text-accent">.</span>
      </span>
      <span className="rounded-full border border-border px-2 py-0.5 type-overline text-fg-muted">By CodeSquad</span>
    </span>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Page heroes (Hero, PageHero) slide up under the header so their glow shows
  // through; they add the header height to their top padding to compensate.
  const overlapHero = !pathname?.startsWith("/styleguide");

  // Transparent at the top of the page; frosted bar once the user scrolls.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Process", href: "/process" },
  ];

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b text-fg transition-[background-color,border-color,box-shadow] duration-250 ease-standard",
        overlapHero && "-mb-16",
        scrolled ? "border-border bg-bg/85 shadow-elevation-1 backdrop-blur-xl" : "border-transparent bg-transparent"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-surface-raised focus:px-4 focus:py-2 focus:type-body-sm focus:shadow-elevation-3"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between">
        <NavLink href="/" aria-label="Ecommerce By CodeSquad Homepage" className="rounded-sm">
          <BrandMark />
        </NavLink>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <NavLink
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 type-body-sm font-medium transition-colors duration-150 ease-standard",
                  active ? "text-fg" : "text-fg-secondary hover:bg-bg-muted hover:text-fg"
                )}
              >
                {link.label}
                {active && <span aria-hidden className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent" />}
              </NavLink>
            );
          })}
          <ButtonLink href="/contact" size="sm" className="ml-3" trailingIcon={<ArrowUpRight {...icon.sm} />}>
            Free Marketing Audit
          </ButtonLink>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-fg transition-colors duration-150 hover:bg-bg-muted md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-haspopup="dialog"
        >
          <Menu {...icon.lg} />
        </button>
      </div>

      {/* Mobile drawer */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        title="Menu"
        variant="drawer"
        footer={
          <ButtonLink
            href="/contact"
            fullWidth
            onClick={() => setMobileMenuOpen(false)}
            trailingIcon={<ArrowUpRight {...icon.sm} />}
          >
            Free Marketing Audit
          </ButtonLink>
        }
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center rounded-md px-4 type-body-lg font-medium transition-colors duration-150",
                      active ? "bg-accent-subtle text-accent-text" : "text-fg hover:bg-bg-muted"
                    )}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </Dialog>
    </header>
  );
}
