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
    <div className="w-full pt-8 pb-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400">
      <span className="font-mono text-slate-400 uppercase tracking-widest text-[11px]">
        Engineered Ecosystem Compatibility:
      </span>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {platforms.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-2 glass-card px-3.5 py-1.5 rounded-lg shadow-2xs hover:border-white/[0.15] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="font-semibold text-slate-200">{p.name}</span>
            <span className="text-[10px] font-mono text-slate-400">({p.note})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
