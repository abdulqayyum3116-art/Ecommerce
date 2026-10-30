"use client";

import { useEffect, useRef } from "react";

export default function GrowthProblemIllustration({ variant }: { variant: 0 | 1 | 2 }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    const animations: Animation[] = [];
    let timer: ReturnType<typeof setTimeout> | undefined;
    let played = false;
    const finish = () => {
      clearTimeout(timer);
      animations.forEach((animation) => animation.cancel());
    };
    const observer = new IntersectionObserver((entries) => {
      if (played || !entries.some((entry) => entry.isIntersecting)) return;
      played = true;
      observer.disconnect();
      timer = setTimeout(() => {
        if (preference.matches) return;
        root.querySelectorAll<SVGElement>("[data-draw]").forEach((path) => {
          animations.push(path.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], {
            duration: 1600, easing: "cubic-bezier(0.33, 1, 0.68, 1)",
          }));
        });
        root.querySelectorAll<SVGElement>("[data-arrive]").forEach((element, index) => {
          animations.push(element.animate([{ opacity: 0, transform: "translateX(-12px)" }, { opacity: 1, transform: "translateX(0)" }], {
            duration: 900, delay: index * 120, fill: "backwards", easing: "ease-out",
          }));
        });
      }, window.matchMedia("(min-width: 1024px)").matches ? variant * 120 : 0);
    }, { threshold: 0.25 });
    const onPreferenceChange = () => {
      if (preference.matches) { observer.disconnect(); finish(); }
    };
    preference.addEventListener("change", onPreferenceChange);
    observer.observe(root);
    return () => { observer.disconnect(); finish(); preference.removeEventListener("change", onPreferenceChange); };
  }, [variant]);

  return (
    <div ref={ref} aria-hidden="true" className="mb-6 rounded-md border border-border bg-bg-subtle p-3">
      <p className="mb-1 type-caption text-fg-muted">Illustrative</p>
      <svg viewBox="0 0 280 120" className="h-32 w-full" fill="none">
        {variant === 0 && <>
          <path d="M20 15V100H260" className="stroke-border-strong" />
          <path data-draw pathLength="1" strokeDasharray="1" d="M25 86L80 72L135 62L190 40L250 20" className="stroke-accent" strokeWidth="3" strokeLinecap="round" />
          <path data-draw pathLength="1" strokeDasharray="1" d="M25 92L80 88L135 90L190 84L250 82" className="stroke-fg-muted" strokeWidth="3" strokeLinecap="round" />
          <text x="180" y="18" fill="currentColor" className="text-accent-text" fontSize="12">Ad spend</text>
          <text x="213" y="112" fill="currentColor" className="text-fg-muted" fontSize="12">Sales</text>
        </>}
        {variant === 1 && <>
          <text x="15" y="22" fill="currentColor" className="text-fg-secondary" fontSize="12">Visits</text>
          <text x="218" y="22" fill="currentColor" className="text-fg-secondary" fontSize="12">Orders</text>
          <path d="M15 38L165 52H260M15 106L165 88H260" className="stroke-border-strong" strokeWidth="2" />
          {[0, 1, 2, 3, 4, 5].map((i) => <circle key={i} data-arrive cx={30 + (i % 3) * 32} cy={58 + Math.floor(i / 3) * 28} r="5" className="fill-fg-muted" />)}
          <path data-draw pathLength="1" strokeDasharray="1" d="M130 70H225" className="stroke-accent" strokeWidth="2" />
          <circle data-arrive cx="242" cy="70" r="8" className="fill-accent" />
        </>}
        {variant === 2 && <>
          <rect data-arrive x="20" y="36" width="48" height="44" rx="7" className="fill-accent-subtle stroke-accent" strokeWidth="2" />
          <path d="M32 55L41 64L57 48" className="stroke-accent" strokeWidth="2" />
          <path data-draw pathLength="1" strokeDasharray="1" d="M76 60C110 15 170 15 206 54" className="stroke-accent" strokeWidth="2" />
          <path d="M197 51L207 55L207 44" className="stroke-accent" strokeWidth="2" />
          <rect data-arrive x="215" y="36" width="48" height="44" rx="7" className="stroke-fg-muted" strokeWidth="2" strokeDasharray="4 4" />
          <text x="18" y="106" fill="currentColor" className="text-fg-secondary" fontSize="12">First order</text>
          <text x="190" y="106" fill="currentColor" className="text-fg-secondary" fontSize="12">Next order?</text>
        </>}
      </svg>
    </div>
  );
}
