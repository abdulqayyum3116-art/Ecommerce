import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "CRM & Order Automation for Ecommerce | CodeSquad",
  description:
    "Automate order fulfillment, multi-warehouse inventory syncing, fraud prevention, and CRM workflows for high-growth ecommerce stores.",
  path: "/services/automation-crm",
});

export default function AutomationCrmPage() {
  return (
    <ServiceTemplate
      eyebrow="Pillar 06 — CRM & Order Automation"
      h1="Automate the operational busywork behind every order."
      leadParagraph="As store volume scales, manual fulfillment errors, multi-warehouse inventory discrepancies, and fraud investigations slow down your operations. We build resilient integrations and automations that connect your storefront directly to ERPs, CRMs, and 3PL warehouses."
      problemHeading="Manual order routing and disjointed tools create customer service bottlenecks."
      problemDescription="When orders are held up by manual entry, or when customers receive incorrect tracking information, customer support costs explode and negative reviews pile up. Scaling stores require automated data flow between the checkout and the warehouse floor."
      problemPoints={[
        "Inventory counts getting out of sync across multiple fulfillment centers, causing overselling and stockouts.",
        "Manual order verification and fraud screening consuming hours of administrative staff time every morning.",
        "Disconnected CRM records where customer support cannot see recent order updates or tracking links in one place.",
        "Cumbersome return authorization processes that frustrate customers and delay restock availability.",
      ]}
      solutionHeading="Real-time webhooks, automated fraud scoring, and unified CRM pipelines."
      solutionDescription="We connect your ecommerce storefront to your operational stack using clean APIs and automated workflow engines. Orders route instantly to the nearest 3PL warehouse, fraud is flagged in real-time, and customers receive instant self-service updates."
      deliverables={[
        {
          title: "Multi-Location Inventory Synchronization",
          description: "Real-time bi-directional inventory syncing between Shopify/WooCommerce and regional warehouse ERPs.",
        },
        {
          title: "Intelligent Order Routing (3PL)",
          description: "Automated routing rules dispatching orders based on delivery zip code, stock availability, and shipping carrier cost.",
        },
        {
          title: "Automated Fraud & Address Screening",
          description: "Real-time risk scoring flagging suspicious high-ticket orders and verifying invalid mailing addresses before dispatch.",
        },
        {
          title: "Unified Customer Support CRM Integration",
          description: "Syncing customer order history, tracking statuses, and lifetime value directly into Zendesk, Gorgias, or HubSpot.",
        },
        {
          title: "Self-Service Returns Automation",
          description: "Automated return portal generating pre-paid labels and triggering instant store credit or exchange workflows.",
        },
        {
          title: "B2B Wholesale Ordering Pipelines",
          description: "Automated net-term invoicing, custom price lists, and tiered volume discount workflows for wholesale buyers.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "System & Toolchain Audit",
          description: "We map all existing software touchpoints: storefront, ERP, warehouse management system (WMS), and CRM.",
        },
        {
          step: "Phase 02",
          title: "API & Webhook Architecture",
          description: "Designing reliable, idempotency-backed data pipelines with automated failure retries and alert monitoring.",
        },
        {
          step: "Phase 03",
          title: "Testing & Sandbox Simulation",
          description: "Simulating edge cases including order cancellations, partial fulfillments, split shipments, and refund triggers.",
        },
        {
          step: "Phase 04",
          title: "Deployment & Team Onboarding",
          description: "Deploying live automations with step-by-step documentation for your warehouse and support teams.",
        },
      ]}
      relatedCaseStudySlug="ipromo"
      relatedCaseStudyTitle="iPromo"
    />
  );
}
