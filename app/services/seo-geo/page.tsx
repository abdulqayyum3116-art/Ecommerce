import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Product SEO, AEO & GEO for Ecommerce | CodeSquad",
  description:
    "Get your products found on Google, Google Shopping and AI assistants like ChatGPT and Perplexity with product SEO, Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO).",
  path: "/services/seo-geo",
});

export default function SeoGeoPage() {
  return (
    <ServiceTemplate
      eyebrow="Service 03 — Search & AI Visibility"
      h1="Get your products found on Google and recommended by AI."
      leadParagraph="Shoppers now search on Google and ask ChatGPT, Perplexity and Google's AI Overviews things like 'What is the best running shoe for flat feet under $150?' We make sure your products show up in both, with product SEO, Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO)."
      problemHeading="Thin product pages get skipped by Google and ignored by AI."
      problemDescription="Search engines and AI assistants look for clear product details, structured data and trustworthy answers. Copy-pasted descriptions and missing schema leave them with nothing to rank or quote."
      problemPoints={[
        "Missing or broken product schema, so prices, stock and reviews don't show in search results.",
        "Manufacturer descriptions copied across dozens of other stores.",
        "No clear answers to the questions shoppers actually ask, so AI assistants recommend competitors.",
        "Collection pages that don't target the searches buyers make right before they purchase.",
      ]}
      solutionHeading="Product SEO, AEO and GEO working together."
      solutionDescription="Product SEO gets your pages ranking on Google. AEO structures clear answers that search features and assistants can pull directly. GEO builds the comparisons and trust signals that AI tools cite when they recommend products."
      deliverables={[
        {
          title: "Product & Collection SEO",
          description: "Keyword research, page titles, descriptions and collection pages built around how buyers search.",
        },
        {
          title: "Product Schema",
          description: "Full structured data for products, prices, stock and reviews, so search results show rich details.",
        },
        {
          title: "Answer Engine Optimization (AEO)",
          description: "Clear, question-and-answer content and FAQ schema that answer engines can pull straight into results.",
        },
        {
          title: "Generative Engine Optimization (GEO)",
          description: "Comparison guides and trusted product content that ChatGPT, Perplexity and AI Overviews cite.",
        },
        {
          title: "Free Shopping Listings",
          description: "A clean Merchant Center feed so your products also appear in Google Shopping's free listings.",
        },
        {
          title: "AI Visibility Tracking",
          description: "Monitoring where your brand and products appear in AI answers and which competitors show instead.",
        },
      ]}
      processSteps={[
        {
          step: "Step 01",
          title: "Search & AI Audit",
          description: "Checking rankings, schema coverage and how AI assistants currently describe your products.",
        },
        {
          step: "Step 02",
          title: "Keyword & Question Map",
          description: "Mapping the searches and questions buyers ask to the right products and pages.",
        },
        {
          step: "Step 03",
          title: "Content & Schema",
          description: "Rolling out improved product pages, FAQ answers, comparison content and structured data.",
        },
        {
          step: "Step 04",
          title: "Track & Expand",
          description: "Tracking rankings, Shopping clicks and AI mentions, then expanding to new product groups.",
        },
      ]}
      relatedCaseStudySlug="mamas-compass"
    />
  );
}
