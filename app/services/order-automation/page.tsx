import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Order Lifecycle Automation for Ecommerce | CodeSquad",
  description:
    "Automate every step after checkout: order confirmations, shipping updates, delivery follow-ups, reviews, returns and reorders, so customers stay informed and come back.",
  path: "/services/order-automation",
});

export default function OrderAutomationPage() {
  return (
    <ServiceTemplate
      eyebrow="Service 06 — Order Lifecycle Automation"
      h1="Keep every customer informed from checkout to reorder."
      leadParagraph="What happens after someone buys decides whether they buy again. We automate the full order lifecycle: confirmations, shipping and delivery updates, review requests, returns and reorder reminders, so every customer has a great experience without extra work for your team."
      problemHeading="Silence after checkout costs repeat orders."
      problemDescription="When customers have to chase their order, they contact support, leave bad reviews and rarely come back. Handling updates by hand doesn't scale as orders grow."
      problemPoints={[
        "Customers asking 'where is my order?' because tracking updates aren't sent.",
        "No follow-up after delivery, so reviews and repeat orders are left to chance.",
        "Returns and exchanges handled by email back-and-forth.",
        "Order, customer and support data spread across tools that don't talk to each other.",
      ]}
      solutionHeading="Automatic updates and follow-ups at every stage."
      solutionDescription="We connect your store, shipping, email/SMS and support tools so each order triggers the right message at the right time, and every step feeds back into your marketing."
      deliverables={[
        {
          title: "Order & Shipping Updates",
          description: "Instant confirmations plus shipped, out-for-delivery and delivered updates by email, SMS or WhatsApp.",
        },
        {
          title: "Delivery Follow-Ups",
          description: "A check-in after delivery with how-to-use tips and support links.",
        },
        {
          title: "Review & UGC Requests",
          description: "Automatic requests for reviews and photos at the right moment after delivery.",
        },
        {
          title: "Returns & Exchanges",
          description: "Self-service returns and exchanges, with offers that keep the sale as store credit or a swap.",
        },
        {
          title: "Reorder Reminders",
          description: "Reminders timed to when customers are likely to run out, linked to a one-click reorder.",
        },
        {
          title: "Connected Customer Data",
          description: "Order and customer data synced to your CRM and email platform for better targeting.",
        },
      ]}
      processSteps={[
        {
          step: "Step 01",
          title: "Lifecycle Map",
          description: "Mapping every step and message from checkout to reorder, and finding the gaps.",
        },
        {
          step: "Step 02",
          title: "Connect Your Tools",
          description: "Linking your store, shipping, messaging and support tools together.",
        },
        {
          step: "Step 03",
          title: "Build Automations",
          description: "Setting up the messages and workflows for each stage, then testing them end to end.",
        },
        {
          step: "Step 04",
          title: "Monitor & Improve",
          description: "Tracking support tickets, reviews and repeat orders, and refining each step.",
        },
      ]}
    />
  );
}
