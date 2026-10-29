import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Email & SMS Marketing for Ecommerce | CodeSquad",
  description:
    "Email and SMS marketing for online stores: welcome, abandoned cart, post-purchase and win-back flows plus campaigns that turn one-time buyers into regulars.",
  path: "/services/email-marketing",
});

export default function EmailMarketingPage() {
  return (
    <ServiceTemplate
      eyebrow="Service 05 — Email & SMS Marketing"
      h1="Turn one-time buyers into regulars."
      leadParagraph="The cheapest sale is the one from someone who already knows you. We set up automatic email and SMS flows and run regular campaigns that recover abandoned carts, welcome new subscribers and bring past customers back."
      problemHeading="Most stores pay to get customers, then let them drift away."
      problemDescription="Without the right automated flows, shoppers who leave their cart or buy once are rarely heard from again. Sending the same newsletter to everyone doesn't fix it."
      problemPoints={[
        "No reminder when a shopper leaves items in their cart.",
        "New subscribers get a discount code and nothing else.",
        "No follow-up after a purchase, so first-time buyers never come back.",
        "The same email blasted to the whole list, hurting inbox placement.",
      ]}
      solutionHeading="Automated flows plus campaigns that fit each customer."
      solutionDescription="We build the core email and SMS flows once, so they work for you every day, then add campaigns targeted by what each customer has browsed and bought."
      deliverables={[
        {
          title: "Abandoned Cart & Browse",
          description: "Timely email and SMS reminders that bring shoppers back to the products they looked at.",
        },
        {
          title: "Welcome Series",
          description: "A short series that introduces your brand and turns new subscribers into first-time buyers.",
        },
        {
          title: "Post-Purchase Flows",
          description: "Thank-you, how-to-use, review request and cross-sell emails after every order.",
        },
        {
          title: "Restock & Win-Back",
          description: "Reminders when it's time to reorder, and offers that bring lapsed customers back.",
        },
        {
          title: "Campaigns & Segments",
          description: "Regular campaigns sent to the right groups, based on what customers have browsed and bought.",
        },
        {
          title: "List Health",
          description: "Cleaning out unengaged contacts and setting up sender authentication so emails reach the inbox.",
        },
      ]}
      processSteps={[
        {
          step: "Step 01",
          title: "Flow Audit",
          description: "Reviewing your current flows, campaigns, list health and email platform setup.",
        },
        {
          step: "Step 02",
          title: "Core Flows",
          description: "Building or rebuilding the cart, welcome, post-purchase and win-back flows.",
        },
        {
          step: "Step 03",
          title: "Campaign Calendar",
          description: "Planning and sending regular campaigns to well-defined customer segments.",
        },
        {
          step: "Step 04",
          title: "Test & Improve",
          description: "Testing subject lines, timing and offers, and improving what brings in repeat orders.",
        },
      ]}
      relatedCaseStudySlug="ipromo"
    />
  );
}
