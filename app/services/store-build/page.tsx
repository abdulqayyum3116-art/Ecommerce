import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Shopify & Headless Next.js Store Build & Redesign | CodeSquad",
  description:
    "Custom Shopify theme development, WooCommerce builds, and Headless Next.js storefronts engineered for sub-second mobile speed and high conversion.",
  path: "/services/store-build",
});

export default function StoreBuildPage() {
  return (
    <ServiceTemplate
      eyebrow="Pillar 01 — Store Build & Redesign"
      h1="High-performance storefronts engineered for conversion."
      leadParagraph="We design and build clean, lightning-fast ecommerce stores. Whether engineering a bespoke Shopify theme, a high-converting WooCommerce build, or a headless Next.js storefront, we eliminate code bloat and deliver sub-second mobile page loads."
      problemHeading="Slow themes and app bloat are silent revenue killers."
      problemDescription="Most commercial stores are weighed down by decades of accumulated third-party apps, redundant tracking scripts, and bloated pre-built themes. Every second of mobile latency directly drops conversion rates and raises your paid customer acquisition cost (CAC)."
      problemPoints={[
        "Bloated pre-built marketplace themes with 80+ unused CSS and JavaScript libraries.",
        "Third-party apps injecting unoptimized scripts that degrade Core Web Vitals (LCP, CLS, INP).",
        "Clunky mobile navigation, illegible variant selectors, and frustrating checkout friction.",
        "Rigid CMS setups where marketing teams cannot launch promotional landing pages without developer intervention.",
      ]}
      solutionHeading="Clean code, modular architecture, and sub-second rendering."
      solutionDescription="We approach store builds as high-performance web applications. We prioritize Shopify as our lead platform for stable, reliable commerce operations, while offering WooCommerce and headless Next.js / Hydrogen architectures for bespoke brand requirements."
      leadPlatformNotice="Shopify is our primary recommended lead platform for speed, checkout reliability, and low operational overhead. WooCommerce and headless Next.js architectures are deployed for unique multi-catalog or headless use cases."
      deliverables={[
        {
          title: "Bespoke Lightweight Shopify Theme",
          description: "Clean Liquid codebase stripped of bloated libraries, achieving 90+ mobile Core Web Vitals.",
        },
        {
          title: "Headless Next.js / Hydrogen Option",
          description: "Decoupled frontend built with Next.js App Router for instant edge rendering and custom brand UX.",
        },
        {
          title: "Mobile-First PDP & Cart Drawer",
          description: "Sub-second product detail page layout with sticky purchase buttons and dynamic free-shipping progress bars.",
        },
        {
          title: "Modular Section Library",
          description: "Custom drag-and-drop sections so marketing teams can launch high-converting landing pages independently.",
        },
        {
          title: "Native App Consolidation",
          description: "Replacing 10+ third-party monthly SaaS apps with native Liquid and webhooks, reducing page payload by up to 60%.",
        },
        {
          title: "Full Analytics & Tracking GTM Wire",
          description: "Server-side and client-side conversion tracking configured without frontend script lag.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "Architecture & Speed Audit",
          description: "We benchmark existing Core Web Vitals, identify app script bloat, and plan the migration.",
        },
        {
          step: "Phase 02",
          title: "Design System & Wireframing",
          description: "Designing conversion-focused mobile PDPs, category filters, and streamlined cart drawer flows.",
        },
        {
          step: "Phase 03",
          title: "Clean Code Development",
          description: "Developing custom Liquid or React components, ensuring 100% responsive fidelity across devices.",
        },
        {
          step: "Phase 04",
          title: "QA & Zero-Downtime Launch",
          description: "Extensive cross-browser checkout testing, 301 redirect mapping, and zero-downtime DNS deployment.",
        },
      ]}
      relatedCaseStudySlug="apparel-dtc-growth"
      relatedCaseStudyTitle="Multi-SKU Apparel Storefront Re-Architecture & Mobile Checkout Streamline"
    />
  );
}
