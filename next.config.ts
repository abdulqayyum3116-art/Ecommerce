import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  async redirects() {
    // The original placeholder case studies were replaced by real ones.
    const caseStudies = ["apparel-dtc-growth", "beauty-skincare-cro", "electronics-order-automation"].map((slug) => ({
      source: `/case-studies/${slug}`,
      destination: "/case-studies",
      permanent: true,
    }));
    // Store-build era services and posts, retired when the site moved to marketing services.
    const retired: [string, string][] = [
      ["/services/store-build", "/services"],
      ["/services/cro", "/services"],
      ["/services/paid-ads", "/services/google-ads"],
      ["/services/retention", "/services/email-marketing"],
      ["/services/automation-crm", "/services/order-automation"],
      ["/blog/shopify-vs-headless-nextjs-guide", "/blog"],
      ["/blog/ecommerce-cro-checklist-conversions", "/blog"],
    ];
    return [
      { source: "/services/product-video", destination: "/services/social-media-handling", permanent: true },
      ...caseStudies,
      ...retired.map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
