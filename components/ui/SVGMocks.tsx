import React from "react";

export function StorefrontMockSVG() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Browser Frame */}
      <rect width="400" height="240" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
      <rect width="400" height="32" rx="8" fill="#FFFFFF" />
      <line x1="0" y1="32" x2="400" y2="32" stroke="#E2E8F0" strokeWidth="1" />
      {/* Window Controls */}
      <circle cx="18" cy="16" r="4" fill="#CBD5E1" />
      <circle cx="32" cy="16" r="4" fill="#E2E8F0" />
      <circle cx="46" cy="16" r="4" fill="#E2E8F0" />
      {/* Search Bar */}
      <rect x="90" y="8" width="220" height="16" rx="4" fill="#F1F5F9" />
      {/* Banner */}
      <rect x="20" y="44" width="360" height="64" rx="6" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
      <rect x="36" y="58" width="140" height="12" rx="3" fill="#1E40AF" opacity="0.8" />
      <rect x="36" y="76" width="90" height="8" rx="2" fill="#3B82F6" opacity="0.6" />
      <rect x="36" y="90" width="60" height="10" rx="3" fill="#2563EB" />
      {/* Product Cards */}
      <g transform="translate(20, 120)">
        <rect width="112" height="104" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
        <rect x="8" y="8" width="96" height="54" rx="4" fill="#F1F5F9" />
        <rect x="8" y="70" width="70" height="8" rx="2" fill="#0F172A" />
        <rect x="8" y="84" width="40" height="6" rx="2" fill="#64748B" />
        <circle cx="98" cy="87" r="6" fill="#2563EB" opacity="0.2" />
      </g>
      <g transform="translate(144, 120)">
        <rect width="112" height="104" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
        <rect x="8" y="8" width="96" height="54" rx="4" fill="#F1F5F9" />
        <rect x="8" y="70" width="60" height="8" rx="2" fill="#0F172A" />
        <rect x="8" y="84" width="45" height="6" rx="2" fill="#64748B" />
        <circle cx="98" cy="87" r="6" fill="#2563EB" opacity="0.2" />
      </g>
      <g transform="translate(268, 120)">
        <rect width="112" height="104" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
        <rect x="8" y="8" width="96" height="54" rx="4" fill="#F1F5F9" />
        <rect x="8" y="70" width="65" height="8" rx="2" fill="#0F172A" />
        <rect x="8" y="84" width="35" height="6" rx="2" fill="#64748B" />
        <circle cx="98" cy="87" r="6" fill="#2563EB" opacity="0.2" />
      </g>
    </svg>
  );
}

export function PDPMockSVG() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="400" height="240" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Product Image Gallery */}
      <rect x="24" y="24" width="160" height="160" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
      <circle cx="104" cy="94" r="28" fill="#E2E8F0" />
      {/* Thumbnails */}
      <rect x="24" y="194" width="34" height="26" rx="3" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
      <rect x="66" y="194" width="34" height="26" rx="3" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="108" y="194" width="34" height="26" rx="3" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="150" y="194" width="34" height="26" rx="3" fill="#F8FAFC" stroke="#E2E8F0" />
      {/* Product Details */}
      <rect x="206" y="28" width="140" height="14" rx="3" fill="#0F172A" />
      <rect x="206" y="50" width="70" height="12" rx="3" fill="#2563EB" />
      <rect x="206" y="74" width="170" height="8" rx="2" fill="#94A3B8" />
      <rect x="206" y="88" width="150" height="8" rx="2" fill="#94A3B8" />
      {/* Variant Pills */}
      <rect x="206" y="112" width="36" height="22" rx="4" fill="#0F172A" />
      <rect x="248" y="112" width="36" height="22" rx="4" fill="#F1F5F9" stroke="#E2E8F0" />
      <rect x="290" y="112" width="36" height="22" rx="4" fill="#F1F5F9" stroke="#E2E8F0" />
      {/* Sticky Add to Cart Button */}
      <rect x="206" y="150" width="170" height="34" rx="6" fill="#2563EB" />
      <rect x="246" y="163" width="90" height="8" rx="2" fill="#FFFFFF" />
      {/* Speed Guarantee */}
      <rect x="206" y="196" width="120" height="8" rx="2" fill="#10B981" opacity="0.8" />
    </svg>
  );
}

export function CheckoutFlowSVG() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="400" height="240" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Step Indicators */}
      <g transform="translate(60, 20)">
        <circle cx="20" cy="14" r="10" fill="#2563EB" />
        <rect x="40" y="13" width="70" height="2" fill="#2563EB" />
        <circle cx="120" cy="14" r="10" fill="#2563EB" />
        <rect x="140" y="13" width="70" height="2" fill="#E2E8F0" />
        <circle cx="220" cy="14" r="10" fill="#F1F5F9" stroke="#CBD5E1" />
      </g>
      {/* Checkout Form Mocks */}
      <rect x="30" y="56" width="200" height="154" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
      <rect x="46" y="74" width="70" height="8" rx="2" fill="#0F172A" />
      <rect x="46" y="90" width="168" height="24" rx="4" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="46" y="124" width="78" height="24" rx="4" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="136" y="124" width="78" height="24" rx="4" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="46" y="160" width="168" height="30" rx="6" fill="#059669" />
      {/* Order Summary Drawer Card */}
      <rect x="246" y="56" width="124" height="154" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
      <rect x="260" y="74" width="60" height="8" rx="2" fill="#0F172A" />
      <line x1="260" y1="92" x2="356" y2="92" stroke="#F1F5F9" />
      <rect x="260" y="104" width="50" height="6" rx="2" fill="#64748B" />
      <rect x="330" y="104" width="26" height="6" rx="2" fill="#0F172A" />
      <rect x="260" y="120" width="40" height="6" rx="2" fill="#64748B" />
      <rect x="330" y="120" width="26" height="6" rx="2" fill="#10B981" />
      <line x1="260" y1="138" x2="356" y2="138" stroke="#E2E8F0" />
      <rect x="260" y="152" width="45" height="10" rx="2" fill="#0F172A" />
      <rect x="325" y="152" width="31" height="10" rx="2" fill="#2563EB" />
    </svg>
  );
}

export function DashboardMockSVG() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="400" height="240" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Sidebar Mock */}
      <rect x="0" y="0" width="80" height="240" fill="#F8FAFC" />
      <line x1="80" y1="0" x2="80" y2="240" stroke="#E2E8F0" />
      <rect x="14" y="20" width="52" height="12" rx="3" fill="#0F172A" />
      <rect x="14" y="50" width="44" height="8" rx="2" fill="#2563EB" />
      <rect x="14" y="70" width="40" height="8" rx="2" fill="#94A3B8" />
      <rect x="14" y="90" width="48" height="8" rx="2" fill="#94A3B8" />
      {/* Top Stats */}
      <g transform="translate(98, 20)">
        <rect width="90" height="54" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
        <rect x="12" y="10" width="40" height="6" rx="2" fill="#64748B" />
        <rect x="12" y="24" width="60" height="14" rx="3" fill="#0F172A" />
      </g>
      <g transform="translate(196, 20)">
        <rect width="90" height="54" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
        <rect x="12" y="10" width="45" height="6" rx="2" fill="#64748B" />
        <rect x="12" y="24" width="55" height="14" rx="3" fill="#059669" />
      </g>
      <g transform="translate(294, 20)">
        <rect width="90" height="54" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
        <rect x="12" y="10" width="35" height="6" rx="2" fill="#64748B" />
        <rect x="12" y="24" width="50" height="14" rx="3" fill="#2563EB" />
      </g>
      {/* Chart Area */}
      <rect x="98" y="90" width="286" height="130" rx="6" fill="#FAFAFA" stroke="#E2E8F0" />
      <path d="M110 180 Q 150 160 190 170 T 270 120 T 360 100" stroke="#2563EB" strokeWidth="2.5" fill="none" />
      <path d="M110 180 Q 150 160 190 170 T 270 120 T 360 100 L 360 205 L 110 205 Z" fill="#2563EB" fillOpacity="0.05" />
    </svg>
  );
}

export function FunnelMockSVG() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="400" height="240" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Funnel Layers */}
      <path d="M40 36 L360 36 L320 76 L80 76 Z" fill="#2563EB" opacity="0.9" />
      <text x="200" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="600" fontFamily="sans-serif">
        Attract (Google Ads · GEO/AEO · Shopping SEO)
      </text>

      <path d="M86 86 L314 86 L278 126 L122 126 Z" fill="#0284C7" opacity="0.9" />
      <text x="200" y="110" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="600" fontFamily="sans-serif">
        Convert (Fast PDPs · Mobile UX · 1-Click Checkout)
      </text>

      <path d="M128 136 L272 136 L240 176 L160 176 Z" fill="#0EA5E9" opacity="0.9" />
      <text x="200" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="600" fontFamily="sans-serif">
        Retain (Cart Abandonment · SMS/Email Flows)
      </text>

      <path d="M166 186 L234 186 L220 216 L180 216 Z" fill="#059669" opacity="0.95" />
      <text x="200" y="204" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">
        Repeat
      </text>
    </svg>
  );
}
