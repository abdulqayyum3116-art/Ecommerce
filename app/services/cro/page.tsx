import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Ecommerce CRO & UX Optimization | CodeSquad",
  description:
    "Systematic conversion rate optimization (CRO) and UX engineering for ecommerce brands. Increase AOV, checkout completion, and mobile conversion rates.",
  path: "/services/cro",
});

export default function CroPage() {
  return (
    <ServiceTemplate
      eyebrow="Pillar 02 — CRO & UX"
      h1="Remove friction from click to payment completion."
      leadParagraph="Conversion rate optimization is an engineering discipline, not guesswork. We analyze shopper micro-behaviors, remove checkout drop-offs, and deploy ergonomic UX patterns that convert existing traffic into higher revenue per visitor."
      problemHeading="Traffic is getting more expensive, while conversion rates stagnate."
      problemDescription="Acquisition ad costs on Meta and Google continue to rise. If 98% of your store visitors bounce without adding an item to cart or completing checkout, pumping more ad dollars into the top of the funnel simply burns margin."
      problemPoints={[
        "Friction-heavy multi-step checkouts that cause 70%+ cart abandonment rates.",
        "Mobile product detail pages that bury the 'Add to Cart' button below multiple screen folds.",
        "Ambiguous shipping timelines, unexpected surprise fees at the final step, and lack of trust elements.",
        "Lack of strategic in-cart upsells, cross-sells, or free-shipping progress bars that leave AOV depressed.",
      ]}
      solutionHeading="Data-driven usability, sticky conversion UI, and friction removal."
      solutionDescription="We instrument qualitative session recordings, heatmaps, and funnel analytics to identify the exact moments shoppers hesitate. We then re-engineer product pages, cart drawers, and checkout flows to eliminate hesitation."
      deliverables={[
        {
          title: "Comprehensive Conversion Audit",
          description: "Full heuristic and data-backed teardown of your mobile and desktop purchase funnels.",
        },
        {
          title: "Slide-Over Cart Drawer Engineering",
          description: "Smart drawers featuring free-shipping thresholds, 1-click upsells, bundle offers, and discount inputs.",
        },
        {
          title: "Sticky Mobile Add-to-Cart",
          description: "Floating conversion action bar on mobile PDPs that remains visible regardless of scroll depth.",
        },
        {
          title: "Trust Architecture & Social Proof",
          description: "Strategic placement of verified customer reviews, clear delivery guarantees, and security seals.",
        },
        {
          title: "A/B Testing Program Deployment",
          description: "Statistically rigorous testing of high-impact PDP headlines, bundle configurations, and checkout layouts.",
        },
        {
          title: "Exit Intent & Browse Capture",
          description: "Non-intrusive recovery overlays capturing hesitant visitors before they navigate away.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "Funnel & Drop-off Diagnostics",
          description: "We analyze Google Analytics 4, heatmaps, and checkout step completion rates to locate leaks.",
        },
        {
          step: "Phase 02",
          title: "Hypothesis & UX Prototyping",
          description: "Formulating testable hypotheses and wireframing high-converting UI components.",
        },
        {
          step: "Phase 03",
          title: "Engineering & Implementation",
          description: "Writing lightweight, clean front-end code with zero layout shifts or performance degradation.",
        },
        {
          step: "Phase 04",
          title: "Measurement & Iteration",
          description: "Tracking lift in conversion rate, average order value, and revenue per session.",
        },
      ]}
      relatedCaseStudySlug="beauty-skincare-cro"
      relatedCaseStudyTitle="Beauty & Regimen Bundle Builder With Automated Replenishment"
    />
  );
}
