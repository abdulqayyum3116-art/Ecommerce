import React from "react";

export function StorefrontMockSVG() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Browser Frame */}
      <rect className="fill-bg-subtle stroke-border" width="400" height="240" rx="8" strokeWidth="1.5" />
      <rect className="fill-surface-raised" width="400" height="32" rx="8" />
      <line className="stroke-border" x1="0" y1="32" x2="400" y2="32" strokeWidth="1" />
      {/* Window Controls */}
      <circle className="fill-border-strong" cx="18" cy="16" r="4" />
      <circle className="fill-bg-muted" cx="32" cy="16" r="4" />
      <circle className="fill-bg-muted" cx="46" cy="16" r="4" />
      {/* Search Bar */}
      <rect className="fill-bg-muted" x="90" y="8" width="220" height="16" rx="4" />
      {/* Banner */}
      <rect className="fill-accent-subtle stroke-accent-subtle-border" x="20" y="44" width="360" height="64" rx="6" strokeWidth="1" />
      <rect className="fill-accent-pressed" x="36" y="58" width="140" height="12" rx="3" opacity="0.8" />
      <rect className="fill-accent" x="36" y="76" width="90" height="8" rx="2" opacity="0.6" />
      <rect className="fill-accent" x="36" y="90" width="60" height="10" rx="3" />
      {/* Product Cards */}
      <g transform="translate(20, 120)">
        <rect className="fill-surface-raised stroke-border" width="112" height="104" rx="6" />
        <rect className="fill-bg-muted" x="8" y="8" width="96" height="54" rx="4" />
        <rect className="fill-fg" x="8" y="70" width="70" height="8" rx="2" />
        <rect className="fill-fg-muted" x="8" y="84" width="40" height="6" rx="2" />
        <circle className="fill-accent" cx="98" cy="87" r="6" opacity="0.2" />
      </g>
      <g transform="translate(144, 120)">
        <rect className="fill-surface-raised stroke-border" width="112" height="104" rx="6" />
        <rect className="fill-bg-muted" x="8" y="8" width="96" height="54" rx="4" />
        <rect className="fill-fg" x="8" y="70" width="60" height="8" rx="2" />
        <rect className="fill-fg-muted" x="8" y="84" width="45" height="6" rx="2" />
        <circle className="fill-accent" cx="98" cy="87" r="6" opacity="0.2" />
      </g>
      <g transform="translate(268, 120)">
        <rect className="fill-surface-raised stroke-border" width="112" height="104" rx="6" />
        <rect className="fill-bg-muted" x="8" y="8" width="96" height="54" rx="4" />
        <rect className="fill-fg" x="8" y="70" width="65" height="8" rx="2" />
        <rect className="fill-fg-muted" x="8" y="84" width="35" height="6" rx="2" />
        <circle className="fill-accent" cx="98" cy="87" r="6" opacity="0.2" />
      </g>
    </svg>
  );
}

export function PDPMockSVG() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect className="fill-surface-raised stroke-border" width="400" height="240" rx="8" strokeWidth="1.5" />
      {/* Product Image Gallery */}
      <rect className="fill-bg-subtle stroke-border" x="24" y="24" width="160" height="160" rx="6" />
      <circle className="fill-bg-muted" cx="104" cy="94" r="28" />
      {/* Thumbnails */}
      <rect className="fill-accent-subtle stroke-accent" x="24" y="194" width="34" height="26" rx="3" strokeWidth="1.5" />
      <rect className="fill-bg-subtle stroke-border" x="66" y="194" width="34" height="26" rx="3" />
      <rect className="fill-bg-subtle stroke-border" x="108" y="194" width="34" height="26" rx="3" />
      <rect className="fill-bg-subtle stroke-border" x="150" y="194" width="34" height="26" rx="3" />
      {/* Product Details */}
      <rect className="fill-fg" x="206" y="28" width="140" height="14" rx="3" />
      <rect className="fill-accent" x="206" y="50" width="70" height="12" rx="3" />
      <rect className="fill-border-strong" x="206" y="74" width="170" height="8" rx="2" />
      <rect className="fill-border-strong" x="206" y="88" width="150" height="8" rx="2" />
      {/* Variant Pills */}
      <rect className="fill-fg" x="206" y="112" width="36" height="22" rx="4" />
      <rect className="fill-bg-muted stroke-border" x="248" y="112" width="36" height="22" rx="4" />
      <rect className="fill-bg-muted stroke-border" x="290" y="112" width="36" height="22" rx="4" />
      {/* Sticky Add to Cart Button */}
      <rect className="fill-accent" x="206" y="150" width="170" height="34" rx="6" />
      <rect className="fill-surface-raised" x="246" y="163" width="90" height="8" rx="2" />
      {/* Speed Guarantee */}
      <rect className="fill-success-solid" x="206" y="196" width="120" height="8" rx="2" opacity="0.8" />
    </svg>
  );
}

export function CheckoutFlowSVG() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect className="fill-bg-subtle stroke-border" width="400" height="240" rx="8" strokeWidth="1.5" />
      {/* Step Indicators */}
      <g transform="translate(60, 20)">
        <circle className="fill-accent" cx="20" cy="14" r="10" />
        <rect className="fill-accent" x="40" y="13" width="70" height="2" />
        <circle className="fill-accent" cx="120" cy="14" r="10" />
        <rect className="fill-bg-muted" x="140" y="13" width="70" height="2" />
        <circle className="fill-bg-muted stroke-border-strong" cx="220" cy="14" r="10" />
      </g>
      {/* Checkout Form Mocks */}
      <rect className="fill-surface-raised stroke-border" x="30" y="56" width="200" height="154" rx="6" />
      <rect className="fill-fg" x="46" y="74" width="70" height="8" rx="2" />
      <rect className="fill-bg-subtle stroke-border" x="46" y="90" width="168" height="24" rx="4" />
      <rect className="fill-bg-subtle stroke-border" x="46" y="124" width="78" height="24" rx="4" />
      <rect className="fill-bg-subtle stroke-border" x="136" y="124" width="78" height="24" rx="4" />
      <rect className="fill-success-solid" x="46" y="160" width="168" height="30" rx="6" />
      {/* Order Summary Drawer Card */}
      <rect className="fill-surface-raised stroke-border" x="246" y="56" width="124" height="154" rx="6" />
      <rect className="fill-fg" x="260" y="74" width="60" height="8" rx="2" />
      <line className="stroke-border" x1="260" y1="92" x2="356" y2="92" />
      <rect className="fill-fg-muted" x="260" y="104" width="50" height="6" rx="2" />
      <rect className="fill-fg" x="330" y="104" width="26" height="6" rx="2" />
      <rect className="fill-fg-muted" x="260" y="120" width="40" height="6" rx="2" />
      <rect className="fill-success-solid" x="330" y="120" width="26" height="6" rx="2" />
      <line className="stroke-border" x1="260" y1="138" x2="356" y2="138" />
      <rect className="fill-fg" x="260" y="152" width="45" height="10" rx="2" />
      <rect className="fill-accent" x="325" y="152" width="31" height="10" rx="2" />
    </svg>
  );
}

export function DashboardMockSVG() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect className="fill-surface-raised stroke-border" width="400" height="240" rx="8" strokeWidth="1.5" />
      {/* Sidebar Mock */}
      <rect className="fill-bg-subtle" x="0" y="0" width="80" height="240" />
      <line className="stroke-border" x1="80" y1="0" x2="80" y2="240" />
      <rect className="fill-fg" x="14" y="20" width="52" height="12" rx="3" />
      <rect className="fill-accent" x="14" y="50" width="44" height="8" rx="2" />
      <rect className="fill-border-strong" x="14" y="70" width="40" height="8" rx="2" />
      <rect className="fill-border-strong" x="14" y="90" width="48" height="8" rx="2" />
      {/* Top Stats */}
      <g transform="translate(98, 20)">
        <rect className="fill-bg-subtle stroke-border" width="90" height="54" rx="6" />
        <rect className="fill-fg-muted" x="12" y="10" width="40" height="6" rx="2" />
        <rect className="fill-fg" x="12" y="24" width="60" height="14" rx="3" />
      </g>
      <g transform="translate(196, 20)">
        <rect className="fill-bg-subtle stroke-border" width="90" height="54" rx="6" />
        <rect className="fill-fg-muted" x="12" y="10" width="45" height="6" rx="2" />
        <rect className="fill-success-solid" x="12" y="24" width="55" height="14" rx="3" />
      </g>
      <g transform="translate(294, 20)">
        <rect className="fill-bg-subtle stroke-border" width="90" height="54" rx="6" />
        <rect className="fill-fg-muted" x="12" y="10" width="35" height="6" rx="2" />
        <rect className="fill-accent" x="12" y="24" width="50" height="14" rx="3" />
      </g>
      {/* Chart Area */}
      <rect className="fill-bg-subtle stroke-border" x="98" y="90" width="286" height="130" rx="6" />
      <path className="stroke-accent" d="M110 180 Q 150 160 190 170 T 270 120 T 360 100" strokeWidth="2.5" fill="none" />
      <path className="fill-accent" d="M110 180 Q 150 160 190 170 T 270 120 T 360 100 L 360 205 L 110 205 Z" fillOpacity="0.05" />
    </svg>
  );
}

export function FunnelMockSVG() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect className="fill-bg-subtle stroke-border" width="400" height="240" rx="8" strokeWidth="1.5" />
      {/* Funnel Layers */}
      <path className="fill-accent" d="M40 36 L360 36 L320 76 L80 76 Z" opacity="0.9" />
      <text className="fill-on-accent font-body" x="200" y="60" textAnchor="middle" fontSize="12" fontWeight="600">
        Attract (Google Ads · GEO/AEO · Shopping SEO)
      </text>

      <path className="fill-accent-hover" d="M86 86 L314 86 L278 126 L122 126 Z" opacity="0.9" />
      <text className="fill-on-accent font-body" x="200" y="110" textAnchor="middle" fontSize="12" fontWeight="600">
        Convert (Fast PDPs · Mobile UX · 1-Click Checkout)
      </text>

      <path className="fill-accent-text" d="M128 136 L272 136 L240 176 L160 176 Z" opacity="0.9" />
      <text className="fill-on-accent font-body" x="200" y="160" textAnchor="middle" fontSize="12" fontWeight="600">
        Retain (Cart Abandonment · SMS/Email Flows)
      </text>

      <path className="fill-success-solid" d="M166 186 L234 186 L220 216 L180 216 Z" opacity="0.95" />
      <text className="fill-on-accent font-body" x="200" y="204" textAnchor="middle" fontSize="11" fontWeight="600">
        Repeat
      </text>
    </svg>
  );
}
