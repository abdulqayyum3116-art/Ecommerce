import Hero from "@/components/home/Hero";
import StoreLoopMock from "@/components/home/StoreLoopMock";
import GrowthCycle from "@/components/home/GrowthCycle";
import FlatCaseStudiesShowcase from "@/components/home/FlatCaseStudiesShowcase";
import HomeCta from "@/components/home/HomeCta";
import Link from "next/link";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { cardClasses, IconTile } from "@/components/ui/Card";
import { TiltCard } from "@/components/ui/TiltCard";
import { TextLink } from "@/components/ui/Button";
import { icon } from "@/components/ui/icon";
import { ArrowUpRight, ShoppingCart, TrendingUp, Search, Megaphone, Mail, RefreshCw } from "lucide-react";

export default function HomePage() {
  const quickServices = [
    {
      title: "Store Build & Redesign",
      href: "/services/store-build",
      icon: ShoppingCart,
      desc: "A fast, good-looking store on Shopify, WooCommerce or a custom build that grows with you.",
    },
    {
      title: "Conversion Optimization",
      href: "/services/cro",
      icon: TrendingUp,
      desc: "Find and fix what stops shoppers from buying, then test changes that lift sales.",
    },
    {
      title: "Search & AI Visibility",
      href: "/services/seo-geo",
      icon: Search,
      desc: "Get your products found on Google, Google Shopping and AI assistants like ChatGPT.",
    },
    {
      title: "Shopping Ads",
      href: "/services/paid-ads",
      icon: Megaphone,
      desc: "Google Shopping and Performance Max ads measured on profit, not just clicks.",
    },
    {
      title: "Email & SMS Retention",
      href: "/services/retention",
      icon: Mail,
      desc: "Automatic emails and texts that recover abandoned carts and bring buyers back.",
    },
    {
      title: "Order Automation",
      href: "/services/automation-crm",
      icon: RefreshCw,
      desc: "Orders, stock, fraud checks and returns handled automatically, so nothing slips.",
    },
  ];

  return (
    <>
      {/* 1. Hero with single H1 */}
      <Hero />

      {/* 2. Interactive store-loop mock on an ink band */}
      <Section tone="band" aria-labelledby="conversion-sequence-heading">
        <Container>
          <SectionHeader
            id="conversion-sequence-heading"
            align="center"
            overline="From click to repeat order"
            title="The 6 moments that win or lose a sale."
            lead="Click any step to see what we fix there and the result it usually brings."
          />
          <div className="mx-auto max-w-5xl">
            <StoreLoopMock />
          </div>
        </Container>
      </Section>

      {/* 3. Growth system cycle (Attract → Convert → Retain → Repeat) */}
      <GrowthCycle />

      {/* 4. Services quick grid */}
      <Section tone="subtle" aria-labelledby="home-services-heading">
        <Container>
          <SectionHeader
            id="home-services-heading"
            overline="What we do"
            title="Six services, one goal: more sales."
            lead="Pick one or combine them. Each one plugs into the same growth system."
            action={
              <TextLink href="/services">
                See all services
                <ArrowUpRight {...icon.sm} />
              </TextLink>
            }
          />

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quickServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <TiltCard
                  as="li"
                  key={svc.title}
                  data-reveal="card"
                  className={cardClasses({ interactive: true, className: "group flex flex-col justify-between" })}
                >
                  <div>
                    <IconTile className="mb-6 transition-[background-color,color,scale,rotate] duration-300 ease-standard group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-accent group-hover:text-on-accent">
                      <Icon {...icon.lg} />
                    </IconTile>
                    <h3 className="mb-3 type-h4 text-fg">
                      <Link
                        href={svc.href}
                        className="rounded-sm after:absolute after:inset-0 after:rounded-lg after:content-['']"
                      >
                        {svc.title}
                      </Link>
                    </h3>
                    <p className="mb-6 type-body-sm text-fg-secondary">{svc.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 border-t border-border pt-4 type-body-sm font-bold text-accent-text">
                    <span>Learn more</span>
                    <ArrowUpRight
                      {...icon.sm}
                      className="transition-transform duration-200 ease-standard group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </TiltCard>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* 5. Case studies showcase */}
      <FlatCaseStudiesShowcase />

      {/* 6. Audit CTA on an ink band */}
      <HomeCta />
    </>
  );
}
