import React from "react";

export default function HeroTrustStrip() {
  // Channels and tools named on the service pages.
  const platforms = ["Google Ads", "Meta Ads", "Google Merchant Center", "ChatGPT & Perplexity", "Klaviyo", "Shopify"];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 border-t border-border pt-8 pb-4">
      <span className="type-overline text-fg-muted">Channels & tools we run</span>
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {platforms.map((name) => (
          <li
            key={name}
            className="rounded-md border border-border bg-surface px-3 py-1.5 type-caption font-bold text-fg transition-[border-color,translate] duration-200 ease-standard hover:-translate-y-0.5 hover:border-border-strong motion-reduce:hover:translate-y-0"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
