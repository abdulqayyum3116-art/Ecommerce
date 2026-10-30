"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const completed = new WeakSet<Element>();

/**
 * Reads a CSS time as milliseconds. The CSS build minifies `700ms` to `.7s`,
 * so a bare parseFloat would return 0.7 and the reveal would finish instantly.
 */
function toMs(value: string, fallback: number) {
  const v = value.trim();
  const n = parseFloat(v);
  if (!Number.isFinite(n) || n <= 0) return fallback;
  return v.endsWith("ms") ? n : v.endsWith("s") ? n * 1000 : n;
}

function frames(card: boolean): Keyframe[] {
  return [
    { opacity: 0, translate: "0 30px", ...(card && { scale: "0.985" }), offset: 0 },
    { opacity: 1, translate: "0 0", ...(card && { scale: "1" }), offset: 1 },
  ];
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pending = new Map<HTMLElement, Animation>();
    const running = new Map<HTMLElement, Animation>();
    const registered = new WeakSet<Element>();
    const root = document.querySelector("main");
    if (!root) return;
    const styles = getComputedStyle(document.documentElement);
    const duration = toMs(styles.getPropertyValue("--motion-reveal"), 700);
    const easing = styles.getPropertyValue("--motion-ease-reveal").trim() || "cubic-bezier(0.33, 1, 0.68, 1)";
    const desktop = window.matchMedia("(min-width: 1024px)");

    function show(el: HTMLElement) {
      observer.unobserve(el);
      pending.get(el)?.cancel();
      pending.delete(el);
      running.get(el)?.cancel();
      running.delete(el);
      completed.add(el);
    }

    function delayFor(el: HTMLElement) {
      const group = el.closest("[data-reveal-group]");
      if (!desktop.matches || !group) return 0;
      const top = el.offsetTop;
      const row = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
        (item) => item.closest("[data-reveal-group]") === group &&
          !item.parentElement?.closest("[data-reveal]") &&
          item.offsetParent === el.offsetParent && Math.abs(item.offsetTop - top) < 8
      );
      row.sort((a, b) => a.offsetLeft - b.offsetLeft);
      return Math.min(Math.max(0, row.indexOf(el)) * 90, 180);
    }

    function reveal(el: HTMLElement) {
      if (preference.matches) { show(el); return; }
      const delay = delayFor(el);
      show(el);
      const animation = el.animate(frames(el.dataset.reveal === "card"), {
        duration, easing, delay, fill: "backwards",
      });
      running.set(el, animation);
      animation.onfinish = () => running.delete(el);
    }

    // Start once the element's top is a quarter of the way up the screen, so the
    // motion plays where the reader is looking rather than at the bottom edge.
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) reveal(entry.target as HTMLElement);
      }
    }, { rootMargin: "0px 0px -25% 0px", threshold: 0 });

    // Content at the very end of a page may never reach that line: reveal
    // whatever is on screen once the page can't scroll any further.
    const onScroll = () => {
      if (window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 2) return;
      for (const el of [...pending.keys()]) {
        if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
      }
    };

    function register(scope: Element, initial = false) {
      const elements = [
        ...(scope.matches("[data-reveal]") ? [scope as HTMLElement] : []),
        ...scope.querySelectorAll<HTMLElement>("[data-reveal]"),
      ];
      for (const el of elements) {
        if (registered.has(el) || completed.has(el) || el.parentElement?.closest("[data-reveal]")) continue;
        registered.add(el);
        if (preference.matches || el.contains(document.activeElement) ||
          (initial && el.getBoundingClientRect().top < window.innerHeight)) {
          completed.add(el);
          continue;
        }
        const hidden = frames(el.dataset.reveal === "card")[0];
        pending.set(el, el.animate([hidden, hidden], { duration: 0, fill: "forwards" }));
        observer.observe(el);
      }
    }

    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => { if (node instanceof Element) register(node); });
      }
      for (const el of [...pending.keys(), ...running.keys()]) {
        if (!el.isConnected) show(el);
      }
    });
    const frame = requestAnimationFrame(() => {
      register(root, true);
      mutation.observe(root, { childList: true, subtree: true });
    });
    const onPreference = () => {
      if (preference.matches) {
        for (const el of [...pending.keys(), ...running.keys()]) show(el);
      }
    };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const el = event.target.closest<HTMLElement>("[data-reveal]");
      if (el) show(el);
    };
    preference.addEventListener("change", onPreference);
    root.addEventListener("focusin", onFocus);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      observer.disconnect();
      mutation.disconnect();
      preference.removeEventListener("change", onPreference);
      root.removeEventListener("focusin", onFocus);
      pending.forEach((animation) => animation.cancel());
      running.forEach((animation) => animation.cancel());
    };
  }, [pathname]);

  return null;
}
