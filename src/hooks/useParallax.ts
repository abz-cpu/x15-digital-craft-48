import { useEffect, useState } from "react";

interface UseParallaxOptions {
  speed?: number;
  maxOffset?: number;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, maxOffset = 100 } = options;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const rawOffset = scrollY * speed;
        const clamped = Math.max(-maxOffset, Math.min(maxOffset, rawOffset));
        setOffset(clamped);
        ticking = false;
      });
    };

    // initial value
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, maxOffset]);

  return offset;
};
