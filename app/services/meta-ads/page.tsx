import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Meta Ads for Ecommerce (Facebook & Instagram) | CodeSquad",
  description:
    "Facebook and Instagram ads for online stores: catalog ads, scroll-stopping creative and accurate Conversions API tracking that turn new audiences into buyers.",
  path: "/services/meta-ads",
});

export default function MetaAdsPage() {
  return (
    <ServiceTemplate
      eyebrow="Service 02 — Meta Ads"
      h1="Reach new buyers on Facebook and Instagram."
      leadParagraph="Most shoppers discover new brands while scrolling. We run Meta campaigns that stop the scroll with strong product creative, show the right products to the right people, and bring back shoppers who looked but did not buy."
      problemHeading="On Meta, weak creative and broken tracking waste most of the budget."
      problemDescription="Meta's algorithm finds buyers for you, but only if it gets strong creative to test and reliable purchase data to learn from. Without both, costs climb and results stall."
      problemPoints={[
        "The same few ads running for months until people stop noticing them.",
        "Purchases missing from Ads Manager because the pixel alone no longer catches every sale.",
        "Product catalog out of sync with the store, so ads show the wrong prices or sold-out items.",
        "No clear split between finding new customers and retargeting people who already visited.",
      ]}
      solutionHeading="Fresh creative, a synced catalog, and tracking Meta can trust."
      solutionDescription="We set up accurate tracking, connect your product catalog, and keep a steady pipeline of new ad creative, including product videos, so campaigns keep finding new buyers."
      deliverables={[
        {
          title: "Conversions API Setup",
          description: "Server-side purchase tracking alongside the pixel, so Meta sees the sales your ads actually drive.",
        },
        {
          title: "Catalog & Advantage+ Shopping",
          description: "A synced product catalog powering dynamic product ads and Advantage+ shopping campaigns.",
        },
        {
          title: "Creative Testing",
          description: "A regular flow of new images, videos and hooks, tested against each other to find what sells.",
        },
        {
          title: "Prospecting Campaigns",
          description: "Campaigns built to reach people who have never heard of your brand but are likely to buy.",
        },
        {
          title: "Retargeting",
          description: "Ads that bring back visitors and cart abandoners with the exact products they looked at.",
        },
        {
          title: "Clear Reporting",
          description: "Monthly reports on new customers, revenue and return on ad spend, in plain language.",
        },
      ]}
      processSteps={[
        {
          step: "Step 01",
          title: "Account Audit",
          description: "Reviewing your campaigns, audiences, creative history and tracking setup.",
        },
        {
          step: "Step 02",
          title: "Tracking & Catalog",
          description: "Setting up Conversions API and connecting a clean, synced product catalog.",
        },
        {
          step: "Step 03",
          title: "Creative & Launch",
          description: "Producing the first round of ad creative and launching prospecting and retargeting campaigns.",
        },
        {
          step: "Step 04",
          title: "Test & Scale",
          description: "Refreshing creative regularly and moving budget toward the ads that bring in buyers.",
        },
      ]}
    />
  );
}
