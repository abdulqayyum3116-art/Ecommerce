/**
 * Case studies — imported from shahzaibhamid/codesquadwebsite: the ecommerce-
 * relevant entries of its Supabase `medspa_case_studies` table, taken from the
 * repo's bundled content/case-studies/*.html (2026-10-27).
 * Images are self-hosted in public/case-studies/.
 */

export interface CaseStudyItem {
  title: string;
  text: string;
}

export interface CaseStudySection {
  eyebrow: string;
  title: string;
  /** "ink" sections render on the dark band. */
  tone: "default" | "ink" | "soft";
  paragraphs?: string[];
  /** Problem bullets. */
  points?: CaseStudyItem[];
  /** Numbered solution cards. */
  cards?: CaseStudyItem[];
  capabilities?: { title: string; items: string[] }[];
  results?: CaseStudyItem[];
  highlights?: CaseStudyItem[];
  faq?: { q: string; a: string }[];
  media?: { src: string; alt: string };
}

export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  kicker: string;
  intro: string;
  services: string[];
  cover: { src: string; alt: string };
  metrics: { value: string; label: string }[];
  sections: CaseStudySection[];
  quote?: { text: string; cite: string };
  conclusion?: string[];
}

/** @deprecated Use CaseStudy. Kept as an alias for existing imports. */
export type CaseStudyData = CaseStudy;

export const caseStudiesList: CaseStudy[] = [
  {
    "slug": "energybits",
    "name": "ENERGYbits",
    "category": "DTC Wellness",
    "tagline": "15+ platforms. One publishing brain.",
    "kicker": "Marketing intelligence across a complex DTC stack",
    "intro": "Built a complete marketing intelligence platform analyzing 15+ connected ad and content platforms, with blog generation pipelines and SEO, AEO, and GEO scoring before publish.",
    "services": [
      "Marketing Intelligence"
    ],
    "cover": {
      "src": "/case-studies/energybits-cover.webp",
      "alt": "ENERGYbits case study cover"
    },
    "metrics": [
      {
        "value": "15+",
        "label": "Platforms connected"
      },
      {
        "value": "51.6K",
        "label": "Search clicks in 90 days"
      },
      {
        "value": "422K",
        "label": "Search impressions"
      },
      {
        "value": "5.8",
        "label": "Average search position"
      }
    ],
    "sections": [
      {
        "eyebrow": "The challenge",
        "title": "15+ platforms. One publishing brain.",
        "tone": "default",
        "paragraphs": [
          "With performance and content data spread across more than fifteen platforms, the team needed a practical way to turn fragmented signals into publish-ready decisions."
        ],
        "points": [
          {
            "title": "Too many data sources",
            "text": "Marketing context was distributed across ad, analytics, and content platforms."
          },
          {
            "title": "Manual content workflow",
            "text": "Research, drafting, and quality checks required repeated effort."
          },
          {
            "title": "New search landscape",
            "text": "Content needed to perform in traditional search and AI-generated answers."
          }
        ]
      },
      {
        "eyebrow": "The solution",
        "title": "A connected system designed around the way the team actually works.",
        "tone": "ink",
        "paragraphs": [
          "We built a connected marketing intelligence platform with automated blog pipelines and SEO, AEO, and GEO scoring before content goes live."
        ],
        "cards": [
          {
            "title": "Connected intelligence",
            "text": "Signals from 15+ platforms feed a shared decision layer."
          },
          {
            "title": "Automated blog pipeline",
            "text": "Research and structured drafting move through a consistent production flow."
          },
          {
            "title": "Pre-publish scoring",
            "text": "Every draft is evaluated for search, answer-engine, and generative-engine readiness."
          }
        ]
      },
      {
        "eyebrow": "Key capabilities",
        "title": "What the system does.",
        "tone": "default",
        "capabilities": [
          {
            "title": "Data connection",
            "items": [
              "15+ platform integrations",
              "Normalised marketing signals",
              "Unified analysis"
            ]
          },
          {
            "title": "Content automation",
            "items": [
              "Research pipeline",
              "Structured drafting",
              "Editorial workflow"
            ]
          },
          {
            "title": "Discoverability",
            "items": [
              "SEO scoring",
              "AEO scoring",
              "GEO scoring"
            ]
          }
        ]
      },
      {
        "eyebrow": "Search & AI visibility",
        "title": "The numbers behind the discoverability layer.",
        "tone": "ink",
        "paragraphs": [
          "Live reporting pulls traditional search (SEO) and AI answer-engine (AEO) performance into one view. The SEO figures cover Jul 29 – Oct 26, 2026; the AEO analysis was run on Oct 25, 2026 across GPT, Gemini, Claude, Perplexity, DeepSeek and Google AI Overviews."
        ],
        "cards": [
          {
            "title": "51,599",
            "text": "Clicks from search across 422,499 impressions between Jul 29 and Oct 26, 2026."
          },
          {
            "title": "12.2%",
            "text": "Average CTR at an average ranking position of 5.8."
          },
          {
            "title": "340 of 500",
            "text": "Tracked keywords on page one: 100 in positions 1–3 and 240 in positions 4–10."
          },
          {
            "title": "18.8%",
            "text": "Share of AI answers that mention ENERGYbits, across 48 responses from 6 AI engines."
          },
          {
            "title": "487 citations",
            "text": "Citations spanning 234 unique domains, with the brand present in 5 of 8 tracked questions."
          },
          {
            "title": "83.3%",
            "text": "Brand mention rate on the gut-health and natural-detox question, the strongest of the 8 tracked."
          }
        ]
      },
      {
        "eyebrow": "Results & impact",
        "title": "From fragmented work to a repeatable operation.",
        "tone": "soft",
        "results": [
          {
            "title": "Quality checks happen earlier",
            "text": "Content is evaluated before publication, when improvements are easiest to make."
          },
          {
            "title": "A scalable content operation",
            "text": "The team can increase output without multiplying manual research and coordination."
          },
          {
            "title": "Visibility beyond traditional search",
            "text": "The workflow accounts for both search engines and AI answer experiences."
          },
          {
            "title": "Strong, measurable search presence",
            "text": "Branded searches such as “energy bits” rank at position 3 with a 29.4% click-through rate, and 340 of 500 tracked keywords sit on page one."
          },
          {
            "title": "A clear AI-visibility roadmap",
            "text": "Brand mentions reach 18.8% across AI engines. Three tracked questions show zero presence, which gives the scoring pipeline specific topics to target next."
          }
        ]
      }
    ]
  },
  {
    "slug": "ipromo",
    "name": "iPromo",
    "category": "B2B E-commerce",
    "tagline": "Product-of-the-month, automated.",
    "kicker": "Automated product marketing for B2B e-commerce",
    "intro": "Built an automated product-of-the-month image pipeline integrated with Salesforce and email, plus enrichment and analysis for a 25-year-old promotional products company.",
    "services": [
      "Image Automation",
      "Salesforce"
    ],
    "cover": {
      "src": "/case-studies/ipromo-cover.webp",
      "alt": "iPromo case study cover"
    },
    "metrics": [
      {
        "value": "25+",
        "label": "Years in business"
      },
      {
        "value": "1",
        "label": "Connected pipeline"
      },
      {
        "value": "Automated",
        "label": "Product imagery"
      },
      {
        "value": "Faster",
        "label": "Campaign launch"
      }
    ],
    "sections": [
      {
        "eyebrow": "The challenge",
        "title": "Product-of-the-month, automated.",
        "tone": "default",
        "paragraphs": [
          "Product-of-the-month campaigns required repetitive image work, data enrichment, analysis, and coordination between sales and marketing systems."
        ],
        "points": [
          {
            "title": "Manual image production",
            "text": "Each campaign required repeated creative preparation and formatting."
          },
          {
            "title": "Disconnected customer data",
            "text": "Campaign inputs and Salesforce context lived in separate workflows."
          },
          {
            "title": "Limited analysis",
            "text": "Teams spent time assembling information before they could act on it."
          }
        ]
      },
      {
        "eyebrow": "The solution",
        "title": "A connected system designed around the way the team actually works.",
        "tone": "ink",
        "paragraphs": [
          "We built an automated image and campaign pipeline that enriches product data, prepares creative assets, and connects the result to Salesforce and email workflows."
        ],
        "cards": [
          {
            "title": "Automated creative production",
            "text": "Campaign-ready product imagery is generated through a consistent workflow."
          },
          {
            "title": "Salesforce integration",
            "text": "Customer and product context moves into the campaign without duplicate entry."
          },
          {
            "title": "Built-in enrichment",
            "text": "The system prepares and analyses product information before launch."
          }
        ]
      },
      {
        "eyebrow": "Key capabilities",
        "title": "What the system does.",
        "tone": "default",
        "capabilities": [
          {
            "title": "Creative automation",
            "items": [
              "Product image pipeline",
              "Campaign formatting",
              "Asset quality checks"
            ]
          },
          {
            "title": "CRM workflow",
            "items": [
              "Salesforce connection",
              "Record enrichment",
              "Campaign handoff"
            ]
          },
          {
            "title": "Marketing operations",
            "items": [
              "Email-ready outputs",
              "Repeatable monthly process",
              "Performance analysis"
            ]
          }
        ]
      },
      {
        "eyebrow": "Results & impact",
        "title": "From fragmented work to a repeatable operation.",
        "tone": "soft",
        "results": [
          {
            "title": "A faster path to market",
            "text": "Monthly campaigns move from selection to launch with fewer manual steps."
          },
          {
            "title": "Consistent campaign assets",
            "text": "Every product follows the same reliable creative workflow."
          },
          {
            "title": "Sales and marketing connected",
            "text": "Campaign execution uses the customer and product context already in Salesforce."
          }
        ]
      }
    ],
    "quote": {
      "text": "Shahzaib did a great job of communicating throughout the project. He found solutions to hurdles along the way and ultimately we were very satisfied with the results.",
      "cite": "Jon, iPromo"
    }
  },
  {
    "slug": "mamas-compass",
    "name": "Mama's Compass",
    "category": "Comparison & Aggregation",
    "tagline": "How Mama's Compass Turned Scattered Product Data Into Confident Comparisons",
    "kicker": "Product Comparison & Aggregation for Parents",
    "intro": "CodeSquad built Mama's Compass a product aggregation and comparison platform — pulling data from multiple sources, scoring products with AI, and generating SEO content that helps parents choose with confidence.",
    "services": [
      "Product Aggregation",
      "AI Scoring",
      "SEO Content"
    ],
    "cover": {
      "src": "/case-studies/mamas-compass-cover.webp",
      "alt": "Mama's Compass case study cover"
    },
    "metrics": [
      {
        "value": "Automated",
        "label": "Product data aggregated from multiple sources"
      },
      {
        "value": "AI-Scored",
        "label": "Products ranked and compared automatically"
      },
      {
        "value": "Always-Current",
        "label": "Pricing and stock monitored continuously"
      }
    ],
    "sections": [
      {
        "eyebrow": "The challenge",
        "title": "How Mama's Compass Turned Scattered Product Data Into Confident Comparisons",
        "tone": "default",
        "paragraphs": [
          "Mama's Compass wanted to help parents compare products with confidence, but the data needed to do that lived across dozens of disconnected sources.",
          "Pulling product details, pricing, and stock status from multiple retailers by hand didn't scale, and comparisons written manually couldn't keep pace with how often products and prices changed.",
          "Customer feedback on products was scattered across reviews and messages instead of feeding back into how products were scored and presented.",
          "Without a connected system, keeping comparisons accurate and current was a constant, manual effort."
        ]
      },
      {
        "eyebrow": "The solution",
        "title": "A connected system designed around the way the team actually works.",
        "tone": "ink",
        "paragraphs": [
          "CodeSquad built Mama's Compass an automated product aggregation and comparison engine.",
          "The system pulls product data from multiple sources automatically, scores and ranks products using AI, and keeps pricing and stock information current — while generating AI-assisted product descriptions and SEO content so comparison pages stay accurate and discoverable as the catalog grows. Customer feedback feeds back into scoring, and affiliate links are managed automatically across the catalog.",
          "Stack: Node.js data pipeline + AI scoring/ML + SEO content generation + affiliate link management."
        ]
      },
      {
        "eyebrow": "Key capabilities",
        "title": "What the system does.",
        "tone": "default",
        "highlights": [
          {
            "title": "Aggregate",
            "text": "Product data pulled from multiple sources automatically"
          },
          {
            "title": "Compare",
            "text": "AI scoring ranks and compares products for shoppers"
          },
          {
            "title": "Optimize",
            "text": "SEO content generated to match search intent"
          }
        ]
      },
      {
        "eyebrow": "FAQ",
        "title": "Common questions.",
        "tone": "default",
        "faq": [
          {
            "q": "Will this replace our existing platform?",
            "a": "No — it wraps around your existing system."
          },
          {
            "q": "What if we already have a marketing team?",
            "a": "Our Dashboard tier fits teams that just need visibility."
          },
          {
            "q": "How long to launch?",
            "a": "2-3 weeks"
          }
        ]
      }
    ],
    "quote": {
      "text": "I highly recommend Shahzaib and Code Squad. They were diligent, prompt and reliable over the course of two projects that I used their service. The project involved UX/UI, prompt engineering and ML to give incrementally better results. Wish them the best!",
      "cite": "Faraz Siddiqui O, Mama's Compass"
    },
    "conclusion": [
      "Mama's Compass no longer has to choose between scale and accuracy — the same system that aggregates product data also keeps comparisons current and search-ready.",
      "Product data, pricing, and stock stay in sync automatically, AI scoring keeps rankings meaningful as the catalog grows, and SEO content compounds visibility without manual writing for every product."
    ]
  },
  {
    "slug": "gengyveusa",
    "name": "GengyveUSA",
    "category": "Healthcare E-commerce",
    "tagline": "SEO, ads, and reviews — one view.",
    "kicker": "One intelligence layer for a healthcare commerce brand",
    "intro": "Unified SEO, paid ads, and review analysis into one automation layer for a veteran-owned oral care brand.",
    "services": [
      "SEO",
      "Ads",
      "Content"
    ],
    "cover": {
      "src": "/case-studies/gengyveusa-cover.webp",
      "alt": "GengyveUSA case study cover"
    },
    "metrics": [
      {
        "value": "3",
        "label": "Growth channels unified"
      },
      {
        "value": "1",
        "label": "Automation layer"
      },
      {
        "value": "Always on",
        "label": "Review analysis"
      },
      {
        "value": "Clearer",
        "label": "Marketing decisions"
      }
    ],
    "sections": [
      {
        "eyebrow": "The challenge",
        "title": "SEO, ads, and reviews — one view.",
        "tone": "default",
        "paragraphs": [
          "SEO, advertising, content, and customer reviews produced valuable signals, but those signals were isolated across tools and difficult to turn into coordinated action."
        ],
        "points": [
          {
            "title": "Channel silos",
            "text": "Organic and paid teams worked from separate views of performance."
          },
          {
            "title": "Unstructured feedback",
            "text": "Review insights were difficult to analyse consistently at scale."
          },
          {
            "title": "Slow decisions",
            "text": "Reporting took time away from improving campaigns and content."
          }
        ],
        "media": {
          "src": "/case-studies/gengyveusa-media-1.webp",
          "alt": "GengyveUSA project media"
        }
      },
      {
        "eyebrow": "The solution",
        "title": "A connected system designed around the way the team actually works.",
        "tone": "ink",
        "paragraphs": [
          "CodeSquad unified the brand’s marketing signals into one automation layer that connects search, ads, content, and customer sentiment."
        ],
        "cards": [
          {
            "title": "Unified marketing view",
            "text": "Cross-channel signals are organised around the decisions the team needs to make."
          },
          {
            "title": "Automated review intelligence",
            "text": "Customer feedback is grouped into recurring themes and opportunities."
          },
          {
            "title": "Actionable content inputs",
            "text": "Search and ad insights inform the next content priorities."
          }
        ]
      },
      {
        "eyebrow": "Key capabilities",
        "title": "What the system does.",
        "tone": "default",
        "capabilities": [
          {
            "title": "Search intelligence",
            "items": [
              "SEO monitoring",
              "Content opportunity discovery",
              "Performance signals"
            ]
          },
          {
            "title": "Paid media",
            "items": [
              "Campaign data connection",
              "Cross-channel context",
              "Decision support"
            ]
          },
          {
            "title": "Customer voice",
            "items": [
              "Review analysis",
              "Theme detection",
              "Messaging insights"
            ]
          }
        ]
      },
      {
        "eyebrow": "Results & impact",
        "title": "From fragmented work to a repeatable operation.",
        "tone": "soft",
        "results": [
          {
            "title": "One source of marketing context",
            "text": "The team can see how content, ads, search, and customer feedback influence each other."
          },
          {
            "title": "Less reporting overhead",
            "text": "Automated analysis replaces repetitive data assembly."
          },
          {
            "title": "Sharper priorities",
            "text": "Growth decisions are grounded in connected customer and performance signals."
          }
        ]
      }
    ]
  }
];

export const getCaseStudy = (slug: string) => caseStudiesList.find((c) => c.slug === slug);
