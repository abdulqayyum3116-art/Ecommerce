import Link from "next/link";
import { MousePointerClick, Megaphone, Sparkles, Clapperboard, Mail, PackageCheck, ArrowUpRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TopicCover } from "@/components/ui/TopicCover";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { icon } from "@/components/ui/icon";

export const metadata = generateSeoMetadata({
  title: "Ecommerce Marketing Services | CodeSquad",
  description:
    "CodeSquad's six ecommerce marketing services: Google Ads, Meta Ads, product SEO with AEO & GEO, product video creation, email & SMS marketing, and order lifecycle automation.",
  path: "/services",
});

const services = [
  {
    slug: "google-ads",
    tone: "amber" as const,
    title: "Google Shopping & Search Ads",
    eyebrow: "Service 01",
    icon: MousePointerClick,
    tag: "Shopping · Performance Max · Search",
    desc: "Put your products in front of shoppers already searching for them. We clean up your product feed, fix conversion tracking and structure campaigns around your margins.",
  },
  {
    slug: "meta-ads",
    tone: "rose" as const,
    title: "Meta Ads",
    eyebrow: "Service 02",
    icon: Megaphone,
    tag: "Facebook · Instagram · Advantage+",
    desc: "Reach new buyers while they scroll. Catalog ads, steady creative testing and Conversions API tracking so Meta finds the people most likely to buy.",
  },
  {
    slug: "seo-geo",
    tone: "teal" as const,
    title: "Search & AI Visibility",
    eyebrow: "Service 03",
    icon: Sparkles,
    tag: "Product SEO · AEO · GEO",
    desc: "Get your products found on Google and recommended by ChatGPT, Perplexity and AI Overviews, with product SEO, schema, clear answers and comparison content.",
  },
  {
    slug: "product-video",
    tone: "ink" as const,
    title: "Product Video Creation",
    eyebrow: "Service 04",
    icon: Clapperboard,
    tag: "Ad Creatives · UGC · Product Demos",
    desc: "Short, sales-focused videos for your ads, product pages and social channels, in every format each platform needs.",
  },
  {
    slug: "email-marketing",
    tone: "blue" as const,
    title: "Email & SMS Marketing",
    eyebrow: "Service 05",
    icon: Mail,
    tag: "Flows · Campaigns · Segments",
    desc: "Abandoned cart, welcome, post-purchase and win-back flows, plus regular campaigns that turn one-time buyers into regulars.",
  },
  {
    slug: "order-automation",
    tone: "green" as const,
    title: "Order Lifecycle Automation",
    eyebrow: "Service 06",
    icon: PackageCheck,
    tag: "Updates · Reviews · Returns · Reorders",
    desc: "Automatic order, shipping and delivery updates, review requests, easy returns and reorder reminders that keep customers informed and coming back.",
  },
];

export default function ServicesHubPage() {
  return (
    <div className="bg-bg">
      <PageHero
        overline="Ecommerce Marketing Services"
        title="Every channel that brings buyers in and brings them back."
        lead="Ads, search, video, email and automation, planned together around one goal: more profitable sales. Each service feeds the others, so you don't have to manage a handful of separate agencies."
      />

      {/* Services grid */}
      <Section tone="subtle" aria-label="Services">
        <Container>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => {
              return (
                <Card
                  as="li"
                  key={svc.slug}
                  padding="none"
                  interactive
                  className="group flex flex-col overflow-hidden"
                >
                  <TopicCover tone={svc.tone} icon={svc.icon} label={svc.eyebrow} meta={svc.tag} />
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      <h2 className="mb-3 type-h3 text-fg">{svc.title}</h2>
                      <p className="mb-6 type-body-sm text-fg-secondary">{svc.desc}</p>
                    </div>

                    <div className="border-t border-border pt-4">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-sm type-body-sm font-bold text-accent-text after:absolute after:inset-0 after:rounded-lg after:content-['']"
                      >
                        See how it works
                        <ArrowUpRight
                          {...icon.sm}
                          className="transition-transform duration-200 ease-standard group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CtaBand
        id="services-cta-heading"
        title="Not sure which channel to start with?"
        lead="We'll review your ads, product feed, search and AI visibility, and email flows, then tell you where the quickest wins are."
        actions={
          <ButtonLink href="/contact" size="lg" trailingIcon={<ArrowUpRight {...icon.sm} />}>
            Get a Free Marketing Audit
          </ButtonLink>
        }
      />
    </div>
  );
}
