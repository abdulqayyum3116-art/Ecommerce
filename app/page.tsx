import Hero from "@/components/home/Hero";
import StoreGrowthProblems from "@/components/home/StoreGrowthProblems";
import GrowthCycle from "@/components/home/GrowthCycle";
import FlatCaseStudiesShowcase from "@/components/home/FlatCaseStudiesShowcase";
import HomeCta from "@/components/home/HomeCta";
import Link from "next/link";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { cardClasses, IconTile } from "@/components/ui/Card";
import { TiltCard } from "@/components/ui/TiltCard";
import { TextLink } from "@/components/ui/Button";
import { icon } from "@/components/ui/icon";
import { ArrowUpRight, MousePointerClick, Megaphone, ScanSearch, Clapperboard, Mail, PackageCheck } from "lucide-react";

export default function HomePage() {
  const quickServices = [
    {
      title: "Google Shopping & Search Ads",
      href: "/services/google-ads",
      icon: MousePointerClick,
      desc: "Show up on Google the moment shoppers search for what you sell, with campaigns run for profit.",
    },
    {
      title: "Meta Ads",
      href: "/services/meta-ads",
      icon: Megaphone,
      desc: "Reach new buyers on Facebook and Instagram with catalog ads and fresh, tested creative.",
    },
    {
      title: "Search & AI Visibility",
      href: "/services/seo-geo",
      icon: ScanSearch,
      desc: "Product SEO, AEO and GEO so you rank on Google and get recommended by ChatGPT and Perplexity.",
    },
    {
      title: "Product Video Creation",
      href: "/services/product-video",
      icon: Clapperboard,
      desc: "Short product videos for ads, product pages and social that show why it's worth buying.",
    },
    {
      title: "Email & SMS Marketing",
      href: "/services/email-marketing",
      icon: Mail,
      desc: "Automatic flows and campaigns that recover carts and turn one-time buyers into regulars.",
    },
    {
      title: "Order Lifecycle Automation",
      href: "/services/order-automation",
      icon: PackageCheck,
      desc: "Order, shipping and delivery updates, reviews, returns and reorders, all handled automatically.",
    },
  ];

  return (
    <>
      {/* 1. Hero with single H1 */}
      <Hero />

      {/* 2. Practical starting points for store growth */}
      <StoreGrowthProblems />

      {/* 3. Growth system cycle (Attract → Convert → Retain → Repeat) */}
      <GrowthCycle />

      {/* 4. Services quick grid */}
      <Section tone="subtle" aria-labelledby="home-services-heading">
        <Container>
          <SectionHeader
            id="home-services-heading"
            overline="What we do"
            title="Six services, one goal: more profitable sales."
            lead="Pick one or combine them. Each channel feeds the others."
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
