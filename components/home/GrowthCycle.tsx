"use client";

import React, { useState } from "react";
import { Compass, ShoppingBag, HeartHandshake, Repeat } from "lucide-react";

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
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = stages[activeStageIndex];
  const ActiveIcon = activeStage.icon;

  return (
    <section className="py-24 bg-[#0B0F1A] text-white border-b border-white/[0.08] relative overflow-hidden" aria-labelledby="growth-cycle-heading">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="eyebrow-dark">
            The Ecommerce Growth Engine
          </span>
          <h2 id="growth-cycle-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 text-white">
            Attract. Convert. Retain. Repeat.
          </h2>
          <p className="text-slate-300 text-lg mt-4 leading-relaxed">
            The four connected stages of a profitable online store. We engineer and automate each transition point so your store scales predictably.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* SVG Animated Rotating Ring Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer SVG rotating dash circle */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3.5"
                  strokeDasharray="20 40"
                  className="animate-dash origin-center"
                />
              </svg>

              {/* Central Hub Display */}
              <div className="text-center p-6 glass-card rounded-full shadow-2xl w-56 h-56 flex flex-col items-center justify-center border border-white/[0.12]">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Stage {activeStage.number} of 04
                </span>
                <span className="text-3xl font-serif font-bold text-white mt-1">
                  {activeStage.name}
                </span>
                <span className="text-xs text-blue-400 font-semibold mt-1">
                  CodeSquad System
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Stage Controls and Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stages.map((stage, idx) => {
                const isSelected = idx === activeStageIndex;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/20"
                        : "glass-card text-slate-300 hover:bg-white/[0.08]"
                    }`}
                    aria-label={`Select stage ${stage.name}`}
                  >
                    <div className="text-xs font-mono opacity-70 mb-1">{stage.number}</div>
                    <div className="font-semibold text-sm">{stage.name}</div>
                  </button>
                );
              })}
            </div>

            {/* Stage Detail Card */}
            <div className="p-8 rounded-2xl glass-card border border-white/[0.12] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 text-blue-300 rounded-xl border border-blue-400/30">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {activeStage.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">Stage {activeStage.number}</span>
                </div>
              </div>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {activeStage.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-200 mb-3">
                  Core Implementation Levers:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeStage.tactics.map((tactic) => (
                    <span
                      key={tactic}
                      className="text-xs font-medium bg-white/[0.06] border border-white/[0.1] text-slate-200 px-3 py-1.5 rounded-lg shadow-2xs"
                    >
                      {tactic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
