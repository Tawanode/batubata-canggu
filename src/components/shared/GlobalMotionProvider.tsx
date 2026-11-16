"use client";

import { useEffect } from "react";

/**
 * GlobalMotionProvider handles:
 * 1. Viewport entrance reveal using a high-performance IntersectionObserver.
 * 2. Mouse-tracking radial spotlight on cards and interactive containers.
 * Respects 'prefers-reduced-motion'.
 */
export function GlobalMotionProvider() {
  useEffect(() => {
    // Check reduced motion preference
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. Intersection Observer for Scroll Reveals
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    });

    // Automatically observe main content sections and marked elements
    const elementsToObserve = document.querySelectorAll(
      "section, .reveal-on-scroll, article, blockquote"
    );
    elementsToObserve.forEach((el, index) => {
      // Don't animate full viewport heroes on initial load to avoid layout jump
      if (index === 0 && el.tagName.toLowerCase() === "section") {
        el.classList.add("is-revealed");
        return;
      }
      el.classList.add("reveal-element");
      revealObserver.observe(el);
    });

    // 2. Mouse-tracking Radial Spotlight on Cards
    const handlePointerMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(".interactive-card") as HTMLElement | null;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return null;
}

