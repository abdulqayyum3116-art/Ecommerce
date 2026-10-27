import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Email & SMS Retention Automation for Ecommerce | CodeSquad",
  description:
    "Turn one-time buyers into repeat customers. Klaviyo and Omnisend automations for browse abandonment, cart recovery, and post-purchase win-backs.",
  path: "/services/retention",
});

export default function RetentionPage() {
  return (
    <ServiceTemplate
      eyebrow="Pillar 05 — Email & Retention Automation"
      h1="Turn single orders into predictable recurring revenue."
      leadParagraph="Acquiring a new customer is expensive; securing a second and third order from that same customer is where store profitability is made. We engineer automated email and SMS lifecycles that recover lost carts and systematically build repeat buying habits."
      problemHeading="Up to 70% of shoppers abandon carts, and most never return."
      problemDescription="Without immediate, automated follow-up, shoppers who add items to cart get distracted, compare prices, and forget. Furthermore, once an order is placed, most brands send generic receipt emails rather than timely replenishment prompts and brand-building onboarding."
      problemPoints={[
        "Cart abandonment emails sending 24 hours too late when the customer has already purchased elsewhere.",
        "Generic blast newsletters sent to entire lists, leading to high unsubscribe rates and low deliverability.",
        "Zero browse-abandonment capture for shoppers who viewed specific collections or products multiple times.",
        "Missing post-purchase replenishment flows timed to the exact consumable lifecycle of the product.",
      ]}
      solutionHeading="Event-driven Klaviyo flows, speed-to-lead SMS, and cohort replenishment."
      solutionDescription="We build sophisticated behavioral flow architectures. By connecting webhooks, viewing habits, and purchase dates, we deliver hyper-relevant messages via SMS and email within minutes of customer interaction."
      deliverables={[
        {
          title: "Speed-to-Lead SMS Cart Recovery",
          description: "Instant, friendly SMS notifications sent within 15 minutes of an abandoned checkout with a 1-tap cart return link.",
        },
        {
          title: "Multi-Tier Abandoned Checkout Flow",
          description: "3-part automated email sequences answering product FAQs, highlighting social proof, and overcoming hesitation.",
        },
        {
          title: "Browse Abandonment Automation",
          description: "Triggered emails for identified subscribers who view high-intent products without adding them to cart.",
        },
        {
          title: "Predictive Replenishment Flows",
          description: "Automated re-order prompts timed specifically to product usage intervals (e.g. 30, 60, or 90 days).",
        },
        {
          title: "VIP & Loyalty Customer Segmentation",
          description: "Exclusive automated offers, early access drops, and reward triggers for high-lifetime-value cohorts.",
        },
        {
          title: "Win-Back & Sunset Sequences",
          description: "Automated campaigns reactivating dormant buyers while pruning unengaged subscribers to preserve inbox placement.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "Retention & Cohort Audit",
          description: "We analyze repeat purchase rates, time between orders, and email list deliverability health.",
        },
        {
          step: "Phase 02",
          title: "Flow Architecture & Copywriting",
          description: "Drafting high-converting, on-brand copy and responsive email templates tailored to mobile screens.",
        },
        {
          step: "Phase 03",
          title: "Event Trigger Integration",
          description: "Wiring accurate custom events from your storefront to Klaviyo or Omnisend via API webhooks.",
        },
        {
          step: "Phase 04",
          title: "A/B Subject & Timing Optimization",
          description: "Continuous testing of send time delays, SMS copy variations, and dynamic product recommendations.",
        },
      ]}
      relatedCaseStudySlug="beauty-skincare-cro"
      relatedCaseStudyTitle="Beauty & Regimen Bundle Builder With Automated Replenishment"
    />
  );
}
