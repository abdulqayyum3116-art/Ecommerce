import BlogHubClient from "@/components/blog/BlogHubClient";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Ecommerce Engineering & CRO Blog | CodeSquad",
  description:
    "Actionable playbooks on Shopify builds, headless Next.js architecture, conversion rate optimization, product GEO/SEO, and retention automations.",
  path: "/blog",
});

export default function BlogHubPage() {
  return <BlogHubClient />;
}
