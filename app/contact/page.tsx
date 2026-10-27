import ContactForm from "@/components/forms/ContactForm";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Container, Overline } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { icon } from "@/components/ui/icon";

export const metadata = generateSeoMetadata({
  title: "Request Free Store Audit & Contact | CodeSquad Ecommerce",
  description:
    "Request a complimentary technical audit of your online store. We review mobile speed, checkout friction, product SEO schema, and abandoned cart automations.",
  path: "/contact",
});

export default function ContactPage() {
  const auditPoints = [
    "Mobile PageSpeed & Core Web Vitals audit (LCP, INP, CLS)",
    "Checkout ergonomics and high-dropoff step identification",
    "Third-party app script bloat & payload reduction suggestions",
    "Generative Engine Optimization (GEO) & schema validation check",
    "Speed-to-lead cart abandonment SMS & email review",
  ];

  return (
    <div className="bg-bg">
      <PageHero
        overline="Zero Obligation"
        title="Get an engineering teardown of your store."
        lead="Submit your store URL below. Our technical ecommerce team will conduct a thorough audit of your speed bottlenecks, checkout UX friction, and retention gaps."
      />

      <Section tone="subtle" aria-label="Request an audit">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Context & what you receive */}
            <div className="lg:col-span-6">
              <Overline className="mb-3">Comprehensive Teardown</Overline>
              <h2 className="mb-6 type-h2 text-fg">What Your Store Audit Delivers:</h2>
              <p className="mb-8 type-body-lg text-fg-secondary">
                We dive straight into the code, analytics, and checkout behavior. No high-pressure sales pitch — just concrete data and actionable engineering priorities.
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
                  <strong className="text-fg">Transparent Review:</strong> Delivered by engineers, not commission-based salespeople. If your store does not need a redesign, we will tell you directly.
                </p>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
