"use client";

import { useId, useRef, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TabItem = { id: string; label: ReactNode; meta?: ReactNode };

/**
 * WAI-ARIA tabs (controlled). Arrow keys / Home / End move focus and select;
 * only the active tab is in the tab order.
 */
export function Tabs({
  items,
  value,
  onChange,
  label,
  variant = "underline",
  className,
  children,
}: {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  /** Accessible name for the tab list. */
  label: string;
  variant?: "underline" | "cards";
  className?: string;
  /** Panel for the active tab. */
  children: ReactNode;
}) {
  const baseId = useId();
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const index = Math.max(0, items.findIndex((i) => i.id === value));

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const last = items.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? (index + 1) % items.length
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? (index - 1 + items.length) % items.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    onChange(items[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className={cn(
          variant === "underline" && "flex gap-1 overflow-x-auto border-b border-border",
          variant === "cards" && "grid grid-cols-2 gap-2 sm:grid-cols-4"
        )}
      >
        {items.map((item, i) => {
          const selected = i === index;
          return (
            <button
              key={item.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(item.id)}
              className={cn(
                "text-left transition-[background-color,border-color,color,box-shadow] duration-150 ease-standard",
                variant === "underline" &&
                  cn(
                    "-mb-px whitespace-nowrap border-b-2 px-4 py-3 type-button",
                    selected ? "border-accent text-fg" : "border-transparent text-fg-muted hover:text-fg"
                  ),
                variant === "cards" &&
                  cn(
                    "rounded-md border p-4",
                    selected
                      ? "border-accent bg-accent-subtle text-fg shadow-elevation-1"
                      : "border-border bg-surface text-fg-secondary hover:border-border-strong hover:text-fg"
                  )
              )}
            >
              {item.meta && <span className="mb-1 block type-caption numeric text-fg-muted">{item.meta}</span>}
              <span className={cn(variant === "cards" && "type-body-sm font-bold")}>{item.label}</span>
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${items[index]?.id}`}
        tabIndex={0}
        className="mt-6 rounded-lg focus-visible:outline-offset-4"
      >
        {children}
      </div>
    </div>
  );
}
