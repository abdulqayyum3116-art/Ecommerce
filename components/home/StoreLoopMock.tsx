"use client";

import React from "react";
import { UserCheck, Eye, ShoppingCart, CreditCard, CheckCircle2, RefreshCw } from "lucide-react";
import { cn } from "@/lib/cn";
import { useAutoAdvance } from "@/lib/useAutoAdvance";
import { StatusDot } from "@/components/ui/Badge";
import { icon } from "@/components/ui/icon";

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
  const { index: activeStep, isPaused, select, ref, pauseHandlers } = useAutoAdvance(steps.length, 2000);

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-border bg-surface p-5 text-fg shadow-elevation-4 md:p-8"
      ref={ref}
      {...pauseHandlers}
    >
      {/* Header & status bar */}
      <div className="mb-6 flex flex-col justify-between gap-3 border-b border-border pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <StatusDot live={!isPaused} />
          <span className="type-overline text-fg-secondary">Conversion Flow Sequence</span>
          <span className="hidden rounded-sm border border-accent-subtle-border bg-accent-subtle px-2 py-0.5 type-caption text-accent-text sm:inline-block">
            Interactive Teardown
          </span>
        </div>

        <div className="flex items-center gap-4 type-caption text-fg-muted">
          <span className="hidden numeric sm:inline-block">
            Step 0{activeStep + 1} / 06
          </span>
        </div>
      </div>

      {/* Six steps */}
      <div className="relative mb-6 grid grid-cols-2 gap-3 md:grid-cols-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => {
                select(idx);
              }}
              aria-pressed={isActive}
              className={cn(
                "relative flex flex-col justify-between rounded-md border p-4 text-left transition-[background-color,border-color,box-shadow,transform] duration-200 ease-standard",
                isActive
                  ? "z-10 border-accent bg-accent-subtle shadow-elevation-2 motion-safe:scale-[1.02]"
                  : isPassed
                    ? "border-border bg-bg-subtle hover:border-border-strong"
                    : "border-border bg-surface hover:border-border-strong"
              )}
              aria-label={`Jump to step 0${step.id}: ${step.label}`}
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={cn(
                      "flex size-8 items-center justify-center rounded-sm transition-colors duration-200",
                      isActive ? "bg-accent text-on-accent" : isPassed ? "bg-accent-subtle text-accent-text" : "bg-bg-muted text-fg-muted"
                    )}
                  >
                    <Icon {...icon.sm} />
                  </span>
                  <span className="type-caption numeric text-fg-muted">0{step.id}</span>
                </div>
                <span className={cn("line-clamp-1 block type-body-sm font-bold", isActive || isPassed ? "text-fg" : "text-fg-secondary")}>
                  {step.label}
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
                <span className="type-caption text-fg-muted">{step.metric}</span>
                {isActive && <StatusDot tone="accent" live />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active step spotlight */}
      <div className="flex flex-col justify-between gap-3 rounded-md border border-border bg-bg-subtle p-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-accent text-on-accent">
            <CurrentIcon {...icon.sm} />
          </span>
          <div className="type-body-sm">
            <p>
              <span className="font-bold text-fg">Active Lever: {current.label}</span>{" "}
              <span className="text-fg-muted">({current.sub})</span>
            </p>
            <p className="type-caption text-fg-muted">
              Engineered Signal: <strong className="text-accent-text">{current.actionCode}</strong>
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 type-body-sm font-medium text-fg-secondary">
          <span>
            Metric: <strong className="text-success-text">{current.metric}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
