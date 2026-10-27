export interface BlogPostData {
  slug: string;
  pillar: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  problem: string;
  steps: {
    title: string;
    description: string;
  }[];
  checklist: string[];
}

export const blogPillars = [
  "All",
  "Shopify / WooCommerce Builds",
  "CRO",
  "Product SEO / GEO",
  "Paid Ads for Stores",
  "Email & SMS Retention",
  "Automation & CRM for Ecommerce",
] as const;

export const blogPostsList: BlogPostData[] = [
  {
    slug: "shopify-vs-headless-nextjs-guide",
    pillar: "Shopify / WooCommerce Builds",
    title: "When to Stay on Monolithic Shopify vs. Replatforming to Headless Next.js",
    summary:
      "A technical evaluation framework for CTOs and founders deciding between Shopify Liquid and a headless Next.js App Router frontend.",
    readTime: "6 min read",
    date: "October 2026",
    problem:
      "Many high-growth DTC brands replatform to headless frontends prematurely, creating high developer maintenance overhead without achieving tangible conversion gains. Conversely, brands with heavy multi-market, localized, or complex configurator requirements frequently hit hard walls within standard monolithic theme limits.",
    steps: [
      {
        title: "1. Audit Your True Mobile Latency Bottleneck",
        description:
          "Benchmark whether slow performance stems from Shopify Liquid rendering or 30+ unvetted third-party JavaScript apps injecting blocking scripts into your document head.",
      },
      {
        title: "2. Evaluate Catalog Customization Complexity",
        description:
          "If your products require dynamic 3D configuration, real-time custom engraving previews, or multi-ERP pricing lookups, decoupled React Server Components provide distinct architectural advantages.",
      },
      {
        title: "3. Total Cost of Ownership (TCO) Calculation",
        description:
          "Account for ongoing hosting (e.g. Vercel / Cloudflare), headless CMS subscriptions, and developer maintenance before abandoning Shopify's native checkout and ecosystem.",
      },
    ],
    checklist: [
      "Benchmarked mobile Core Web Vitals on standard theme vs. prototype.",
      "Audited third-party app dependencies to confirm which can be replaced natively.",
      "Ensured marketing team has a headless CMS preview workflow ready.",
      "Calculated server-side caching strategy for catalog collections.",
    ],
  },
  {
    slug: "ecommerce-cro-checklist-conversions",
    pillar: "CRO",
    title: "The Mobile PDP Ergonomics Checklist: 7 Micro-Fixes That Lift Checkout Starts",
    summary:
      "Practical, code-level usability improvements for mobile product detail pages to eliminate hesitation and cart drop-offs.",
    readTime: "5 min read",
    date: "October 2026",
    problem:
      "Over 75% of ecommerce traffic lands on mobile devices, yet most product pages are designed on 27-inch desktop monitors. Mobile users encounter buried call-to-actions, ambiguous sizing information, and awkward thumb-reach zones that depress add-to-cart rates.",
    steps: [
      {
        title: "1. Implement a Persistent Sticky Add-to-Cart Bar",
        description:
          "Ensure the purchase action bar remains pinned to the bottom of the viewport when the primary button scrolls out of sight, displaying the selected variant and price.",
      },
      {
        title: "2. Move Shipping Estimates Above the Fold",
        description:
          "Explicit delivery timelines (e.g. 'Order within 3 hrs for delivery by Thursday') eliminate checkout hesitation far better than vague 'Fast shipping' badges.",
      },
      {
        title: "3. Upgrade to an Interactive Slide-Over Cart Drawer",
        description:
          "Keep customers on their current shopping page by opening a slide-over drawer with a live free-shipping progress meter rather than redirecting to a full cart page.",
      },
    ],
    checklist: [
      "Sticky mobile CTA tested across iOS Safari and Android Chrome.",
      "Dynamic free shipping threshold calculation tested with currency conversions.",
      "Variant swatch tap targets measure at least 44px by 44px.",
      "Clear returns and satisfaction guarantee visible within 200px of the purchase button.",
    ],
  },
  {
    slug: "product-seo-geo-ai-search-visibility",
    pillar: "Product SEO / GEO",
    title: "How to Structure Product Schemas for Generative Search (ChatGPT, Claude & Perplexity)",
    summary:
      "Preparing your ecommerce catalog for Generative Engine Optimization (GEO) so AI agents recommend your products.",
    readTime: "7 min read",
    date: "October 2026",
    problem:
      "AI search bots and conversational assistants like Perplexity, ChatGPT Search, and Claude do not parse websites the way traditional Google crawlers do. Without granular JSON-LD product specifications, structured FAQs, and crawlable entity relationships, your catalog remains invisible to AI shoppers.",
    steps: [
      {
        title: "1. Embed Complete Schema.org Product & Offer Graphs",
        description:
          "Include high-specificity attributes: GTIN-13, MPN, priceCurrency, priceValidUntil, itemCondition, and availability (InStock / BackOrder).",
      },
      {
        title: "2. Add Semantic Question-and-Answer Blocks",
        description:
          "Include schema-backed FAQPage data directly answering comparative questions (e.g. 'Is this waterproof?', 'How does this compare to Model X?').",
      },
      {
        title: "3. Configure AI Crawler Access in Robots.txt",
        description:
          "Explicitly permit GPTBot, OAI-SearchBot, ClaudeBot, and PerplexityBot to crawl your product and collection routes without blocking parameters.",
      },
    ],
    checklist: [
      "JSON-LD syntax verified via Google Rich Results Test.",
      "No missing offer or rating fields triggering Google Search Console warnings.",
      "Robots.txt updated with explicit user-agent permissions for major AI crawlers.",
      "Structured comparison tables rendered in clean HTML instead of locked inside images.",
    ],
  },
  {
    slug: "google-shopping-pmax-feed-optimization",
    pillar: "Paid Ads for Stores",
    title: "Why Margin-Based Feed Labels Outperform Standard Performance Max Campaigns",
    summary:
      "Restructuring Google Shopping feeds using custom labels to stop burning ad spend on low-margin products.",
    readTime: "5 min read",
    date: "October 2026",
    problem:
      "When Google Performance Max operates on a blended catalog ROAS target, the algorithm prioritizes products with low prices and high search volume — often low-margin commodities that yield negative net cash flow after ad costs and shipping.",
    steps: [
      {
        title: "1. Compute True Product Contribution Margin (COGS + Pick/Pack)",
        description:
          "Calculate net gross margin percentage for every active SKU rather than relying solely on retail pricing.",
      },
      {
        title: "2. Assign Custom Labels in Google Merchant Center",
        description:
          "Use supplemental feeds to categorize products: Custom Label 0 = High Margin (>65%), Medium Margin (40-65%), and Low Margin (<40%).",
      },
      {
        title: "3. Split Performance Max Campaigns by Margin Tiers",
        description:
          "Assign aggressive ROAS targets (e.g. 500%+) to low-margin items while letting high-margin hero SKUs scale with more flexible acquisition targets.",
      },
    ],
    checklist: [
      "Supplemental feed rule configured and syncing automatically with Shopify.",
      "Dead SKUs with zero conversions over 90 days isolated into a zombie-SKU test campaign.",
      "Negative brand search terms added to generic PMax asset groups.",
      "Inventory sync script configured to pause ads when SKU stock drops below 5 units.",
    ],
  },
  {
    slug: "email-sms-retention-post-purchase-flows",
    pillar: "Email & SMS Retention",
    title: "The 15-Minute Abandoned Cart Window: Speed-to-Lead Automations in Klaviyo",
    summary:
      "How sub-15-minute SMS notifications and personalized email triggers turn hesitated checkouts into completed orders.",
    readTime: "6 min read",
    date: "October 2026",
    problem:
      "Most stores wait 4 to 24 hours before sending an abandoned cart email. By then, the prospective customer has closed their browser, purchased from Amazon, or lost buying intent.",
    steps: [
      {
        title: "1. Fire Speed-to-Lead SMS Within 15 Minutes",
        description:
          "Send a concise SMS with a 1-tap cart return link: 'Hey [First Name], we reserved your items in cart. Click here to complete checkout in one tap.'",
      },
      {
        title: "2. Deploy a Dynamic 3-Part Email Cadence",
        description:
          "Hour 1: Helpful support/FAQ reminder. Hour 24: Customer review highlight on the specific product viewed. Hour 48: Urgency or complimentary sample offer.",
      },
      {
        title: "3. Prune Unengaged Profiles to Protect Deliverability",
        description:
          "Exclude contacts who haven't opened an email in 60 days from broadcast sends to keep your emails in the primary inbox.",
      },
    ],
    checklist: [
      "SMS compliance consent checkboxes verified at checkout.",
      "1-tap cart restoration URLs tested across both Safari and Chrome mobile.",
      "Dynamic product image and title tokens mapped correctly in email templates.",
      "Automatic flow cancellation enabled as soon as order webhook triggers.",
    ],
  },
  {
    slug: "order-fulfillment-crm-automation",
    pillar: "Automation & CRM for Ecommerce",
    title: "Architecting Multi-Warehouse Inventory Sync Without Overselling",
    summary:
      "Eliminating inventory discrepancies and manual order routing with event-driven webhooks and reliable idempotency.",
    readTime: "5 min read",
    date: "October 2026",
    problem:
      "Managing stock across regional 3PLs or physical retail locations causes constant synchronization lag. High-velocity flash sales lead to overselling, expensive cancellations, and frustrated shoppers.",
    steps: [
      {
        title: "1. Implement Event-Driven Webhooks Over Scheduled Polling",
        description:
          "Replace 30-minute scheduled cron syncs with real-time webhooks fired immediately upon order creation or warehouse inventory adjustment.",
      },
      {
        title: "2. Implement Safe Inventory Buffer Rules",
        description:
          "Maintain a dynamic safety threshold (e.g. publish stock as 0 when physical warehouse count reaches 3) for high-velocity SKUs.",
      },
      {
        title: "3. Automate Smart Routing by Delivery Destination",
        description:
          "Route orders automatically to the fulfillment hub nearest to the customer's delivery postal code with available inventory.",
      },
    ],
    checklist: [
      "Idempotency keys implemented on all order webhook handlers to prevent duplicate dispatches.",
      "Dead-letter queues configured to log and alert engineers of failed API syncs.",
      "Automated customer notification configured for split shipments.",
      "Customer support CRM synced with real-time tracking links.",
    ],
  },
];
