"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Must match the [data-reveal-state="shown"] transition in globals.css. */
const REVEAL_MS = 250;
const STAGGER_MS = 60;
const MAX_STAGGER_STEPS = 5;

/**
 * Scroll reveal for every `[data-reveal]` element on the page.
 *
 * Only elements that start below the fold are hidden, so nothing in the first
 * viewport (hero, LCP text) is ever delayed. Without JS, or with
 * prefers-reduced-motion, content is simply shown. Re-scans on route change.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const timers: number[] = [];
    let observer: IntersectionObserver | undefined;

    // Wait a frame so a route change has reset the scroll position.
    const frame = requestAnimationFrame(() => {
      const fold = window.innerHeight * 0.92;
      const pending = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-reveal-state])")).filter(
        // Outermost only (no double fades), and only below the fold.
        (el) => !el.parentElement?.closest("[data-reveal]") && el.getBoundingClientRect().top > fold
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
            .forEach((entry, i) => {
              const el = entry.target as HTMLElement;
              const delay = Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS;
              observer?.unobserve(el);
              el.style.setProperty("--reveal-delay", `${delay}ms`);
              el.dataset.revealState = "shown";
              // Hand transitions back to the component (e.g. card hover lift).
              timers.push(
                window.setTimeout(() => {
                  el.dataset.revealState = "done";
                  el.style.removeProperty("--reveal-delay");
                }, delay + REVEAL_MS + 50)
              );
            });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
      );

      for (const el of pending) {
        el.dataset.revealState = "pending";
        observer.observe(el);
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
