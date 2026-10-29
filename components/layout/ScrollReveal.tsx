"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STAGGER_MS = 150;
const MAX_STAGGER_STEPS = 5;
/** Fallbacks for --motion-reveal / --motion-ease-reveal (tokens). */
const FALLBACK_MS = 1200;
const FALLBACK_EASE = "cubic-bezier(0.33, 1, 0.68, 1)";

/** Elements already handled, so a re-scan never hides them twice. */
const seen = new WeakSet<Element>();

function hiddenFrame(el: HTMLElement): Keyframe {
  // Cards also grow slightly as they arrive.
  return el.dataset.reveal === "card"
    ? { opacity: 0, translate: "0 2rem", scale: "0.96" }
    : { opacity: 0, translate: "0 2rem" };
}

function shownFrame(el: HTMLElement): Keyframe {
  return el.dataset.reveal === "card" ? { opacity: 1, translate: "0 0", scale: "1" } : { opacity: 1, translate: "0 0" };
}

/**
 * Scroll reveal for every `[data-reveal]` element on the page.
 *
 * Only elements that start below the fold are hidden, so nothing in the first
 * viewport (hero, LCP text) is ever delayed. Without JS, or with
 * prefers-reduced-motion, content is simply shown. Re-scans on route change.
 *
 * Driven entirely by the Web Animations API: no attributes, classes or inline
 * styles are written, because this effect can run before the page segment
 * hydrates and React would flag any DOM attribute it did not render.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;

    const root = getComputedStyle(document.documentElement);
    const duration = parseFloat(root.getPropertyValue("--motion-reveal")) || FALLBACK_MS;
    const easing = root.getPropertyValue("--motion-ease-reveal").trim() || FALLBACK_EASE;

    // Holds each pending element in its hidden pose until it is revealed.
    const holds = new Map<HTMLElement, Animation>();
    let observer: IntersectionObserver | undefined;

    // Wait a frame so a route change has reset the scroll position.
    const frame = requestAnimationFrame(() => {
      const fold = window.innerHeight * 0.92;
      const pending = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
        // Unseen, outermost only (no double fades), and only below the fold.
        (el) => !seen.has(el) && !el.parentElement?.closest("[data-reveal]") && el.getBoundingClientRect().top > fold
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
            .forEach((entry, i) => {
              const el = entry.target as HTMLElement;
              observer?.unobserve(el);
              holds.get(el)?.cancel();
              holds.delete(el);
              // No forwards fill: once finished the component's own styles
              // and transitions (e.g. card hover lift) take over again.
              el.animate([hiddenFrame(el), shownFrame(el)], {
                duration,
                easing,
                delay: Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS,
                fill: "backwards",
              });
            });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
      );

      for (const el of pending) {
        seen.add(el);
        holds.set(el, el.animate([hiddenFrame(el), hiddenFrame(el)], { duration: 0, fill: "forwards" }));
        observer.observe(el);
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      // Anything still hidden (e.g. persistent layout content) is shown.
      holds.forEach((hold) => hold.cancel());
    };
  }, [pathname]);

  return null;
}
