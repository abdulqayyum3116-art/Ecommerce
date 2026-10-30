import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ecommerce.codesquad.ai";

  const routes = [
    "",
    "/services",
    "/services/google-ads",
    "/services/meta-ads",
    "/services/seo-geo",
    "/services/social-media-handling",
    "/services/email-marketing",
    "/services/order-automation",
    "/case-studies",
    "/case-studies/energybits",
    "/case-studies/ipromo",
    "/case-studies/mamas-compass",
    "/case-studies/gengyveusa",
    "/blog",
    "/blog/product-seo-geo-ai-search-visibility",
    "/blog/google-shopping-pmax-feed-optimization",
    "/blog/email-sms-retention-post-purchase-flows",
    "/blog/order-fulfillment-crm-automation",
    "/process",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));
}
