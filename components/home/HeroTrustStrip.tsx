import React from "react";

export default function HeroTrustStrip() {
  // Store platforms we build on (per the store-build service page).
  const platforms = ["Shopify", "Shopify Plus", "WooCommerce", "Next.js (Headless)", "Shopify Hydrogen"];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 border-t border-border pt-8 pb-4">
      <span className="type-overline text-fg-muted">Engineered Ecosystem Compatibility:</span>
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {platforms.map((name) => (
          <li
            key={name}
            className="rounded-md border border-border bg-surface px-3 py-1.5 type-caption font-bold text-fg transition-colors duration-150 hover:border-border-strong"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
