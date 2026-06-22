// useScrollReveal.js
// Lightweight scroll-triggered animation hook — no external deps
// Uses IntersectionObserver + CSS custom properties

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, adds the class `is-visible`.
 *
 * @param {Object} options
 * @param {number} options.threshold  – 0–1, default 0.15
 * @param {string} options.rootMargin – e.g. "0px 0px -60px 0px"
 * @param {boolean} options.once      – stop observing after first trigger (default true)
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -100px 0px",  
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference — mark visible immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("is-visible");
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}