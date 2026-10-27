"use client";

import React, { useEffect, useState } from "react";
import { UserCheck, Eye, ShoppingCart, CreditCard, CheckCircle2, RefreshCw, Sparkles, Pause, Play } from "lucide-react";

interface Step {
  id: number;
  label: string;
  sub: string;
  metric: string;
  actionCode: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    id: 1,
    label: "Visitor lands",
    sub: "Clean feed/search click",
    metric: "< 0.8s Mobile LCP",
    actionCode: "Feed GTIN matched",
    icon: UserCheck,
  },
  {
    id: 2,
    label: "Views product",
    sub: "Fast mobile PDP & variants",
    metric: "Instant Swatches",
    actionCode: "Sticky ATC triggered",
    icon: Eye,
  },
  {
    id: 3,
    label: "Adds to cart",
    sub: "Slide drawer & free ship bar",
    metric: "+18% AOV Tier",
    actionCode: "Threshold progress 100%",
    icon: ShoppingCart,
  },
  {
    id: 4,
    label: "Checks out",
    sub: "Frictionless 1-click pay",
    metric: "0-Lag Form",
    actionCode: "Apple Pay / Shop Pay",
    icon: CreditCard,
  },
  {
    id: 5,
    label: "Order confirmed",
    sub: "SMS confirmation triggered",
    metric: "15-sec Speed",
    actionCode: "Warehouse webhook sent",
    icon: CheckCircle2,
  },
  {
    id: 6,
    label: "Repeat purchase",
    sub: "Automated win-back sequence",
    metric: "+32% 90-Day LTV",
    actionCode: "Klaviyo VIP cohort fired",
    icon: RefreshCw,
  },
];

export default function StoreLoopMock() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div
      className="w-full glass-card rounded-2xl p-5 md:p-8 shadow-2xl relative overflow-hidden text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Header & Interactive Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-dot" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Live Conversion Flow Sequence
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-400/20">
              Interactive Teardown
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 transition-colors cursor-pointer border border-white/[0.08]"
            aria-label={isPaused ? "Resume automated loop" : "Pause automated loop"}
          >
            {isPaused ? (
              <>
                <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                <span>Paused (Click to Resume)</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 text-slate-300" />
                <span>Auto-playing (Hover to Pause)</span>
              </>
            )}
          </button>
          <span className="hidden sm:inline-block">
            Step 0{activeStep + 1} / 06
          </span>
        </div>
      </div>

      {/* Grid of 6 Steps with Connected Rail Styling */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => {
                setActiveStep(idx);
                setIsPaused(true);
              }}
              className={`text-left relative rounded-xl p-4 transition-all duration-300 flex flex-col justify-between border cursor-pointer ${
                isActive
                  ? "bg-blue-600/20 border-blue-400/80 shadow-lg ring-2 ring-blue-500/30 scale-[1.02] z-10"
                  : isPassed
                  ? "bg-white/[0.04] border-white/[0.08] text-slate-300 hover:bg-white/[0.08]"
                  : "bg-white/[0.02] border-white/[0.05] text-slate-500 hover:bg-white/[0.06]"
              }`}
              aria-label={`Jump to step 0${step.id}: ${step.label}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-blue-500 text-white shadow-md shadow-blue-500/40"
                        : isPassed
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-white/[0.05] text-slate-500"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-medium opacity-60 text-slate-400">
                    0{step.id}
                  </span>
                </div>
                <h4
                  className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors line-clamp-1 ${
                    isActive ? "text-white font-bold" : isPassed ? "text-slate-200" : "text-slate-400"
                  }`}
                >
                  {step.label}
                </h4>
              </div>

              <div className="mt-2 pt-2 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono font-medium text-slate-400">
                  {step.metric}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-dot" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Tactical Spotlight Bar */}
      <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-600/50">
            <CurrentIcon className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">
                Active Lever: {current.label}
              </span>
              <span className="text-slate-400 font-mono">({current.sub})</span>
            </div>
            <span className="text-slate-400 text-[11px] font-mono">
              Engineered Signal: <strong className="text-blue-300">{current.actionCode}</strong>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-200 shrink-0 font-medium bg-white/[0.06] px-3.5 py-1.5 rounded-lg border border-white/[0.1] shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Metric: <strong className="text-emerald-400">{current.metric}</strong></span>
        </div>
      </div>
    </div>
  );
}
