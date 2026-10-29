import BlogHubClient from "@/components/blog/BlogHubClient";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Ecommerce Marketing Blog | CodeSquad",
  description:
    "Actionable playbooks on Google Ads, product SEO and AI search (AEO & GEO), email & SMS marketing, and order automation for online stores.",
  path: "/blog",
});

export default function BlogHubPage() {
  return <BlogHubClient />;
}
