import ContactForm from "@/components/forms/ContactForm";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, Overline } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { icon } from "@/components/ui/icon";

export const metadata = generateSeoMetadata({
  title: "Free Ecommerce Marketing Audit & Contact | CodeSquad Ecommerce",
  description:
    "Request a free marketing audit of your online store. We review your Google and Meta ad accounts, product feed, SEO and AI search visibility, and email and order flows.",
  path: "/contact",
});

export default function ContactPage() {
  const auditPoints = [
    "Google Ads and Meta Ads account review (structure, spend and wasted budget)",
    "Merchant Center product feed and conversion tracking check",
    "Product SEO and AI search visibility (ChatGPT, Perplexity, AI Overviews)",
    "Product page and ad creative review, including video",
    "Email, SMS and order-update flow review",
  ];

  return (
    <div className="bg-bg">
      <PageHero
        overline="Zero Obligation"
        title="Get a free audit of your store's marketing."
        lead="Share your store URL below. We'll review your ads, search visibility, creative and email flows, and show you where you're losing sales."
      />

      <Section tone="subtle" aria-label="Request an audit">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Context & what you receive */}
            <div data-reveal="" className="lg:col-span-6">
              <Overline className="mb-3">What You Get</Overline>
              <h2 className="mb-6 type-h2 text-fg">What Your Marketing Audit Covers:</h2>
              <p className="mb-8 type-body-lg text-fg-secondary">
                We look at your real accounts and data. No high-pressure sales pitch, just a clear, prioritised list of what to fix and where to grow.
              </p>

              <Card padding="lg" className="mb-6">
                <h3 className="mb-5 type-overline text-fg">Audit Scope Checklist:</h3>
                <ul className="space-y-4">
                  {auditPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 type-body-sm text-fg-secondary">
                      <CheckCircle2 {...icon.md} className="shrink-0 text-success-solid" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card tone="accent" className="flex items-start gap-3.5">
                <ShieldAlert {...icon.md} className="mt-0.5 shrink-0 text-accent-text" />
                <p className="type-body-sm text-fg-secondary">
                  <strong className="text-fg">Transparent Review:</strong> Done by marketers who run these channels every day, not commission-based salespeople. If a channel isn&apos;t right for you yet, we&apos;ll tell you directly.
                </p>
              </Card>
            </div>

            {/* Form */}
            <div data-reveal="" className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
