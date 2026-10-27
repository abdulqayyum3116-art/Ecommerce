import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Product SEO & GEO (Generative Engine Optimization) | CodeSquad",
  description:
    "Product SEO and Generative Engine Optimization (GEO) for AI search engines like Perplexity, ChatGPT, Claude, and Google Shopping AI Overviews.",
  path: "/services/seo-geo",
});

export default function SeoGeoPage() {
  return (
    <ServiceTemplate
      eyebrow="Pillar 03 — SEO & GEO for Products"
      h1="Be recommended by Google and AI search engines alike."
      leadParagraph="Modern shoppers don't just search on Google — they ask ChatGPT, Perplexity, and AI search engines: 'What is the best running shoe for flat feet under $150?' We engineer your product catalog and schema to rank on traditional Google organic and be cited by generative AI engines."
      problemHeading="Traditional keyword stuffing fails modern AI search models."
      problemDescription="Large language models (LLMs) and Google's AI Overviews do not rank pages based on old-school keyword density. They look for clean entity graphs, authoritative product schema, rich structured specifications, and verifiable citation signals."
      problemPoints={[
        "Incomplete or malformed Product schema resulting in missing rich snippets in Google Shopping.",
        "Thin manufacturer product descriptions duplicated across dozens of competitor websites.",
        "Zero optimization for Generative Engine Optimization (GEO), causing AI search engines to recommend competitors.",
        "Faceted navigation issues causing indexation bloat, duplicate URLs, and crawl budget waste.",
      ]}
      solutionHeading="Entity-rich structured data, comprehensive product feeds, and citation architecture."
      solutionDescription="We optimize your entire product taxonomy. From deep JSON-LD schema implementation (Product, Offer, AggregateRating, BreadcrumbList) to structured comparison tables and conversational FAQ blocks that generative AI models cite directly."
      deliverables={[
        {
          title: "Comprehensive Schema Architecture",
          description: "Full JSON-LD structured data for every product, variant, availability state, and pricing tier.",
        },
        {
          title: "Generative Engine Optimization (GEO)",
          description: "Structuring authoritative comparison guides and question-answer entities cited by ChatGPT, Perplexity, and Claude.",
        },
        {
          title: "Google Merchant Center Clean Feed",
          description: "Validating GTINs, MPNs, category taxonomy, and shipping attributes for enhanced organic Google Shopping listings.",
        },
        {
          title: "Collection & Category Optimization",
          description: "High-intent collection page architecture targeting bottom-of-funnel commercial search queries.",
        },
        {
          title: "Faceted Crawl Budget Management",
          description: "Clean canonicalization and robots directives preventing parameter bloat from indexing duplicate variant URLs.",
        },
        {
          title: "AI Crawler Accessibility",
          description: "Optimized robots.txt rules explicitly welcoming GPTBot, ClaudeBot, and PerplexityBot to index product pages.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "Schema & Feed Audit",
          description: "Analyzing Google Search Console, Merchant Center warnings, and current schema coverage.",
        },
        {
          step: "Phase 02",
          title: "Taxonomy & Entity Mapping",
          description: "Structuring product categories, attributes, and conversational product query clusters.",
        },
        {
          step: "Phase 03",
          title: "JSON-LD & Content Deployment",
          description: "Deploying automated schema generators and technical comparison content into your theme.",
        },
        {
          step: "Phase 04",
          title: "Search Bot Monitoring",
          description: "Tracking rich snippet impressions, Merchant Center clicks, and AI engine referral mentions.",
        },
      ]}
      relatedCaseStudySlug="energybits"
      relatedCaseStudyTitle="ENERGYbits"
    />
  );
}
