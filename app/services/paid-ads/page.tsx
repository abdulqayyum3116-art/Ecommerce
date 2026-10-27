import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Paid Shopping & Performance Ads for Stores | CodeSquad",
  description:
    "Google Shopping, Performance Max, and Meta paid advertising tied directly to ecommerce contribution margins and inventory stock levels.",
  path: "/services/paid-ads",
});

export default function PaidAdsPage() {
  return (
    <ServiceTemplate
      eyebrow="Pillar 04 — Paid Ads for Stores"
      h1="Shopping & Performance Max ads tied to true contribution margin."
      leadParagraph="Platform ROAS metrics often mislead store owners. We build feed-driven Google Shopping, Performance Max, and Meta campaigns structured by product margin, inventory availability, and customer acquisition cost (CAC) — ensuring every ad dollar generates real bottom-line profit."
      problemHeading="Ad spend is frequently wasted on low-margin or out-of-stock SKUs."
      problemDescription="Standard ad setups lump high-margin best-sellers together with low-margin commodities or seasonal items with low inventory. Ad platform algorithms naturally gravitate toward easy, cheap clicks rather than the orders that actually generate cash flow."
      problemPoints={[
        "Performance Max campaigns spending heavily on low-margin products that produce negative net profit.",
        "Ad spend continuing on out-of-stock or low-size-availability SKUs due to delayed feed updates.",
        "Over-reliance on platform-reported ROAS that counts existing brand searchers as new customer acquisitions.",
        "Disconnected post-click landing pages that send paid traffic to generic homepages rather than dedicated conversion PDPs.",
      ]}
      solutionHeading="Feed custom labels, margin-tiered bidding, and automated inventory sync."
      solutionDescription="We engineer your product feeds using automated custom labels (High Margin, Hero SKU, Liquidation, Low Stock). This allows us to segment campaigns ruthlessly so budget concentrates only where profit exists."
      deliverables={[
        {
          title: "Custom Label Feed Segmentation",
          description: "Dynamic feed categorization by product margin, price tier, and historical conversion velocity.",
        },
        {
          title: "Margin-Based Performance Max Structure",
          description: "Segmented asset groups allocating spend based on product profitability rather than top-line revenue.",
        },
        {
          title: "Inventory-Aware Ad Scripts",
          description: "Automated scripts pausing or lowering bids on SKUs when inventory drops below critical thresholds.",
        },
        {
          title: "New Customer Acquisition (NCA) Focus",
          description: "Bidding models configured to distinguish genuinely new buyers from returning customers searching your brand name.",
        },
        {
          title: "Dedicated High-Converting Landing PDPs",
          description: "Mobile-first landing pages tailored to match the exact search queries driving the paid click.",
        },
        {
          title: "Server-Side Conversion Tracking (CAPI)",
          description: "Meta Conversions API and Google Enhanced Conversions to recover lost attribution data.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "Margin & Feed Diagnostics",
          description: "We audit product COGS, gross margins, and historical ad spend distribution across your catalog.",
        },
        {
          step: "Phase 02",
          title: "Feed Rule Engineering",
          description: "Implementing automated custom label rules in Google Merchant Center and supplemental feeds.",
        },
        {
          step: "Phase 03",
          title: "Campaign Restructure",
          description: "Launching disciplined, margin-segmented Performance Max and Search campaigns.",
        },
        {
          step: "Phase 04",
          title: "Contribution Margin Optimization",
          description: "Weekly bid optimization and negative keyword maintenance focused on net profit per order.",
        },
      ]}
      relatedCaseStudySlug="electronics-order-automation"
      relatedCaseStudyTitle="High-Ticket Electronics Catalog & Automated Multi-Warehouse CRM"
    />
  );
}
