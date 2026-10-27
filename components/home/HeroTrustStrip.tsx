import React from "react";

export default function HeroTrustStrip() {
  const platforms = [
    { name: "Shopify Plus", note: "Lead Architecture" },
    { name: "Headless Next.js", note: "App Router / Edge" },
    { name: "Klaviyo", note: "Automated Retention" },
    { name: "Google Merchant", note: "Feed / PMax Sync" },
    { name: "Recharge", note: "Subscriptions & LTV" },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 border-t border-border pt-8 pb-4">
      <span className="type-overline text-fg-muted">Engineered Ecosystem Compatibility:</span>
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {platforms.map((p) => (
          <li
            key={p.name}
            className="flex items-baseline gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 type-caption transition-colors duration-150 hover:border-border-strong"
          >
            <span className="font-bold text-fg">{p.name}</span>
            <span className="text-fg-muted">({p.note})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
