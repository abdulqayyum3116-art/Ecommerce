export interface CaseStudyData {
  slug: string;
  clientType: string;
  storeType: string;
  title: string;
  summary: string;
  challenge: string;
  whatWeBuilt: {
    stack: string[];
    pages: string[];
    automations: string[];
  };
  resultsPlaceholder: string;
  resultDetails: string[];
}

export const caseStudiesList: CaseStudyData[] = [
  {
    slug: "apparel-dtc-growth",
    clientType: "[CLIENT NAME — TO CONFIRM]",
    storeType: "[STORE TYPE — TO CONFIRM: High-SKU DTC Fashion & Streetwear]",
    title: "Multi-SKU Apparel Storefront Re-Architecture & Mobile Checkout Streamline",
    summary:
      "Transitioned a high-volume fashion catalog from a slow legacy theme to a lightweight Shopify architecture with sub-second mobile PDPs and automated cart recovery.",
    challenge:
      "The client was experiencing severe mobile drop-off on product detail pages due to bloated app scripts and sluggish color variant loading. Their mobile page speed score was under 35 on Google PageSpeed Insights, and checkout abandonment was hovering over 74%. Marketing spend on Meta was yielding diminished returns due to poor conversion efficiency.",
    whatWeBuilt: {
      stack: [
        "Shopify Clean Theme (Liquid + Tailwind)",
        "Klaviyo Automated Retention",
        "Cloudflare CDN & Edge Caching",
        "Google Enhanced Conversions",
      ],
      pages: [
        "Sub-Second Mobile PDP with Sticky ATC",
        "Instant Color/Size Swatch Selector",
        "Slide-Over Cart Drawer with Dynamic Free-Shipping Tier",
        "Streamlined One-Page Checkout",
      ],
      automations: [
        "15-Minute SMS & Email Cart Abandonment Recovery Flow",
        "Back-in-Stock Instant Notification Webhook",
        "Automated High-Fraud Order Verification Alert",
      ],
    },
    resultsPlaceholder: "[RESULT — TO CONFIRM]",
    resultDetails: [
      "Mobile Core Web Vitals improved: [RESULT — TO CONFIRM]",
      "Checkout completion rate lift: [RESULT — TO CONFIRM]",
      "Abandoned cart revenue recovered in 60 days: [RESULT — TO CONFIRM]",
    ],
  },
  {
    slug: "beauty-skincare-cro",
    clientType: "[CLIENT NAME — TO CONFIRM]",
    storeType: "[STORE TYPE — TO CONFIRM: Clean Cosmetics & Clinical Skincare]",
    title: "Beauty & Regimen Bundle Builder With Automated Replenishment",
    summary:
      "Engineered an interactive 3-step skincare routine selector with automatic 30/60/90-day replenishment subscriptions and speed-to-lead follow-up.",
    challenge:
      "Shoppers found it overwhelming to select compatible skincare products from a complex catalog of 120+ formulas. Most customers only purchased a single cleanser and never re-ordered, resulting in depressed Average Order Value (AOV) and low Customer Lifetime Value (LTV).",
    whatWeBuilt: {
      stack: [
        "Custom Shopify React Routine Builder",
        "Recharge Subscription Engine",
        "Klaviyo Automated Replenishment Lifecycle",
        "Gorgias Customer Support Integration",
      ],
      pages: [
        "Interactive 3-Step Routine Builder Landing Page",
        "Dynamic Skincare Regimen Bundle PDP",
        "Self-Service Subscription Portal",
      ],
      automations: [
        "Calculated 30/60/90-Day Replenishment Reminder Sequences",
        "Personalized Cross-Sell Email Triggered by Skin Concern Tag",
        "VIP Tier Unlock Notifications on Second Repeat Purchase",
      ],
    },
    resultsPlaceholder: "[RESULT — TO CONFIRM]",
    resultDetails: [
      "Average Order Value (AOV) increase: [RESULT — TO CONFIRM]",
      "Repeat purchase rate after 90 days: [RESULT — TO CONFIRM]",
      "Subscription enrollment rate: [RESULT — TO CONFIRM]",
    ],
  },
  {
    slug: "electronics-order-automation",
    clientType: "[CLIENT NAME — TO CONFIRM]",
    storeType: "[STORE TYPE — TO CONFIRM: High-Ticket Audio & Smart Home Gear]",
    title: "High-Ticket Electronics Catalog & Automated Multi-Warehouse CRM",
    summary:
      "Automated real-time inventory synchronization across multi-location warehouses with automated fraud screening and margin-tiered Google Shopping feeds.",
    challenge:
      "Selling high-ticket audio gear across three distinct fulfillment warehouses resulted in constant inventory discrepancies, accidental overselling, and manual dispatch delays. The business was also spending hundreds of staff hours manually screening orders for credit card fraud.",
    whatWeBuilt: {
      stack: [
        "Shopify Plus + Custom Node.js Webhook Microservices",
        "HubSpot CRM + Multi-Warehouse WMS",
        "Google Merchant Center Margin Feed Rules",
        "NoFraud Automated Screening API",
      ],
      pages: [
        "Technical Specification Comparison PDPs",
        "Warranty & Accessory Add-on In-Cart Module",
        "Order Tracking & Self-Service Return Portal",
      ],
      automations: [
        "Real-Time Multi-Warehouse Inventory Sync Webhooks",
        "Automated Fraud Score Routing (Pass, Review, Void)",
        "Automated Delivery Tracking SMS and Review Collection",
      ],
    },
    resultsPlaceholder: "[RESULT — TO CONFIRM]",
    resultDetails: [
      "Warehouse dispatch time reduction: [RESULT — TO CONFIRM]",
      "Chargeback rate decrease: [RESULT — TO CONFIRM]",
      "Margin improvement on Google Shopping campaigns: [RESULT — TO CONFIRM]",
    ],
  },
];
