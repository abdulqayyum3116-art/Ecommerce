"use client";

import React from "react";
import { Compass, ShoppingBag, HeartHandshake, Repeat } from "lucide-react";
import { useAutoAdvance } from "@/lib/useAutoAdvance";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { Badge } from "@/components/ui/Badge";
import { IconTile } from "@/components/ui/Card";
import { icon } from "@/components/ui/icon";

interface Stage {
  id: string;
  name: string;
  number: string;
  description: string;
  tactics: string[];
  icon: React.ElementType;
}

const stages: Stage[] = [
  {
    id: "attract",
    name: "Attract",
    number: "01",
    description: "Capturing high-intent buyers through feed-optimized Google Shopping, Performance Max, and AI Engine Optimization (GEO/AEO).",
    tactics: ["Clean Merchant Center Feed", "Search & Shopping Ads", "Perplexity & ChatGPT GEO Optimization"],
    icon: Compass,
  },
  {
    id: "convert",
    name: "Convert",
    number: "02",
    description: "Turning ad traffic into orders with sub-second page loads, mobile-first PDPs, and frictionless 1-click checkout flows.",
    tactics: ["Next.js / Shopify Hydrogen Speed", "Sticky Add-To-Cart", "Dynamic Bundles & Upsells"],
    icon: ShoppingBag,
  },
  {
    id: "retain",
    name: "Retain",
    number: "03",
    description: "Recovering high-intent shoppers who hesitate, via speed-to-lead automated SMS, WhatsApp, and browse-abandonment emails.",
    tactics: ["Browse & Cart Abandonment", "Klaviyo Automated Flows", "Instant SMS Return Links"],
    icon: HeartHandshake,
  },
  {
    id: "repeat",
    name: "Repeat",
    number: "04",
    description: "Engineering post-purchase replenishment and VIP win-back sequences that transform single-item buyers into repeat regulars.",
    tactics: ["Replenishment Reminders", "VIP Loyalty Triggers", "Cohort Lifetime Value (LTV) Scaling"],
    icon: Repeat,
  },
];

export default function GrowthCycle() {
  const { index: activeStageIndex, select, ref, pauseHandlers } = useAutoAdvance(stages.length, 3000);
  const activeStage = stages[activeStageIndex];
  const ActiveIcon = activeStage.icon;

  return (
    <Section aria-labelledby="growth-cycle-heading">
      <Container>
        <SectionHeader
          id="growth-cycle-heading"
          align="center"
          overline="The Ecommerce Growth Engine"
          title="Attract. Convert. Retain. Repeat."
          lead="The four connected stages of a profitable online store. We engineer and automate each transition point so your store scales predictably."
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12" ref={ref} {...pauseHandlers}>
          {/* Rotating ring */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative flex size-72 items-center justify-center sm:size-80">
              <svg aria-hidden className="absolute inset-0 size-full" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="85" fill="none" className="stroke-border" strokeWidth="3" />
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  className="origin-center stroke-accent motion-safe:animate-ring-dash"
                  strokeWidth="3.5"
                  strokeDasharray="20 40"
                  strokeLinecap="round"
                />
              </svg>

              <div className="flex size-56 flex-col items-center justify-center rounded-full border border-border bg-surface p-6 text-center shadow-elevation-3">
                <span className="type-overline text-fg-muted">Stage {activeStage.number} of 04</span>
                <span className="mt-1 type-h2 text-fg">{activeStage.name}</span>
                <span className="mt-1 type-caption font-bold text-accent-text">CodeSquad System</span>
              </div>
            </div>
          </div>

          {/* Stage tabs + detail */}
          <div className="lg:col-span-7">
            <Tabs
              label="Growth stages"
              variant="cards"
              value={activeStage.id}
              onChange={(id) => select(stages.findIndex((s) => s.id === id))}
              items={stages.map((s) => ({ id: s.id, label: s.name, meta: s.number }))}
            >
              <div className="rounded-lg border border-border bg-surface p-6 shadow-elevation-1 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <IconTile>
                    <ActiveIcon {...icon.md} />
                  </IconTile>
                  <div>
                    <h3 className="type-h3 text-fg">{activeStage.name}</h3>
                    <span className="type-caption numeric text-fg-muted">Stage {activeStage.number}</span>
                  </div>
                </div>
                <p className="mb-6 type-body text-fg-secondary">{activeStage.description}</p>

                <h4 className="mb-3 font-body type-overline text-fg-muted">Core Implementation Levers:</h4>
                <ul className="flex flex-wrap gap-2">
                  {activeStage.tactics.map((tactic) => (
                    <li key={tactic}>
                      <Badge tone="outline" shape="tag">
                        {tactic}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Tabs>
          </div>
        </div>
      </Container>
    </Section>
  );
}
