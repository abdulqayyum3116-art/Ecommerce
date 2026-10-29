import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Google Shopping & Search Ads for Ecommerce | CodeSquad",
  description:
    "Google Shopping, Performance Max and Search campaigns for online stores, built on a clean product feed and managed for profit, not clicks.",
  path: "/services/google-ads",
});

export default function GoogleAdsPage() {
  return (
    <ServiceTemplate
      eyebrow="Service 01 — Google Ads"
      h1="Show up on Google the moment shoppers are ready to buy."
      leadParagraph="Google Shopping, Performance Max and Search campaigns that put your products in front of people already searching for them. We run them on a clean product feed and judge every campaign by the profit it brings in, not just clicks."
      problemHeading="Most Google Ads accounts pay for clicks that never turn into profit."
      problemDescription="Performance Max and Shopping campaigns are only as smart as the feed and the conversion data you give them. With messy product data and weak tracking, Google spends your budget on the wrong products and the wrong searches."
      problemPoints={[
        "Every product lumped into one campaign, so best-sellers and low-margin items fight for the same budget.",
        "Product feed errors and disapprovals in Merchant Center quietly hiding products from Shopping.",
        "Conversion tracking that misses sales, so Google optimises toward the wrong shoppers.",
        "Search terms full of irrelevant queries that drain budget every day.",
      ]}
      solutionHeading="Feed-first campaigns, structured around your margins."
      solutionDescription="We fix the product feed, set up reliable conversion tracking, and split campaigns by margin and performance so Google spends more where you actually make money."
      deliverables={[
        {
          title: "Merchant Center Feed Cleanup",
          description: "Fixing disapprovals, titles, categories, GTINs and shipping details so every product can show in Shopping.",
        },
        {
          title: "Performance Max & Shopping",
          description: "Campaigns grouped by margin, best-sellers and new arrivals, each with its own budget and goals.",
        },
        {
          title: "Search Campaigns",
          description: "Brand and high-intent search campaigns with tight keyword lists and regular negative-keyword cleanup.",
        },
        {
          title: "Enhanced Conversions",
          description: "Accurate purchase tracking with order value, so Google learns from real sales.",
        },
        {
          title: "Remarketing",
          description: "Bringing back shoppers who viewed products or left items in their cart, across Search, YouTube and Display.",
        },
        {
          title: "Profit-Based Reporting",
          description: "Clear monthly reports on revenue, ad spend and return by product group, not just clicks and impressions.",
        },
      ]}
      processSteps={[
        {
          step: "Step 01",
          title: "Account & Feed Audit",
          description: "Reviewing your campaigns, search terms, tracking and Merchant Center health.",
        },
        {
          step: "Step 02",
          title: "Feed & Tracking Fixes",
          description: "Cleaning up the product feed and setting up accurate conversion tracking.",
        },
        {
          step: "Step 03",
          title: "Campaign Rebuild",
          description: "Restructuring campaigns by margin and performance, with clear budgets for each.",
        },
        {
          step: "Step 04",
          title: "Optimise & Scale",
          description: "Weekly search-term and budget reviews, moving spend toward what is profitable.",
        },
      ]}
      relatedCaseStudySlug="gengyveusa"
    />
  );
}
