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
    description: "Get in front of people already searching for what you sell: on Google Shopping, in ads, and in AI answers like ChatGPT.",
    tactics: ["Accurate product listings", "Search & Shopping ads", "Visibility in ChatGPT & Perplexity"],
    icon: Compass,
  },
  {
    id: "convert",
    name: "Convert",
    number: "02",
    description: "Turn visitors into orders with pages that load in under a second, product pages built for phones, and a one-click checkout.",
    tactics: ["Faster store pages", "Always-visible Add to Cart", "Bundles & add-on offers"],
    icon: ShoppingBag,
  },
  {
    id: "retain",
    name: "Retain",
    number: "03",
    description: "Win back shoppers who leave without buying, with quick automatic texts, WhatsApp messages and reminder emails.",
    tactics: ["Abandoned cart reminders", "Automatic email flows", "Text links back to the cart"],
    icon: HeartHandshake,
  },
  {
    id: "repeat",
    name: "Repeat",
    number: "04",
    description: "Turn one-time buyers into regulars with timely restock reminders and rewards for your best customers.",
    tactics: ["Restock reminders", "VIP rewards", "Grow lifetime customer value"],
    icon: Repeat,
  },
];

export default function GrowthCycle() {
  const { index: activeStageIndex, isPaused, select, ref, pauseHandlers } = useAutoAdvance(stages.length, 3000);
  const activeStage = stages[activeStageIndex];
  const ActiveIcon = activeStage.icon;

  return (
    <Section aria-labelledby="growth-cycle-heading">
      <Container>
        <SectionHeader
          id="growth-cycle-heading"
          align="center"
          overline="How your store grows"
          title="Attract. Convert. Retain. Repeat."
          lead="Four stages that feed each other. We set up each one so your growth keeps compounding."
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12" ref={ref} {...pauseHandlers}>
          {/* Rotating ring */}
          <div data-reveal="" className="flex justify-center lg:col-span-5">
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
                  style={{ animationPlayState: isPaused ? "paused" : "running" }}
                />
              </svg>

              <div className="flex size-56 flex-col items-center justify-center rounded-full border border-border bg-surface p-6 text-center shadow-elevation-3">
                <span className="type-overline text-fg-muted">Stage {activeStage.number} of 04</span>
                <span key={activeStage.id} className="mt-1 type-h2 text-fg motion-safe:animate-rise">
                  {activeStage.name}
                </span>
                <span className="mt-1 type-caption font-bold text-accent-text">Click a stage to explore</span>
              </div>
            </div>
          </div>

          {/* Stage tabs + detail */}
          <div data-reveal="" className="lg:col-span-7">
            <Tabs
              label="Growth stages"
              variant="cards"
              value={activeStage.id}
              onChange={(id) => select(stages.findIndex((s) => s.id === id))}
              items={stages.map((s) => ({ id: s.id, label: s.name, meta: s.number }))}
            >
              <div
                key={activeStage.id}
                className="rounded-lg border border-border bg-surface p-6 shadow-elevation-1 motion-safe:animate-rise sm:p-8"
              >
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

                <h4 className="mb-3 font-body type-overline text-fg-muted">What we do</h4>
                <ul className="flex flex-wrap gap-2">
                  {activeStage.tactics.map((tactic, i) => (
                    <li key={tactic} className="motion-safe:animate-rise" style={{ animationDelay: `${120 + i * 60}ms` }}>
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
