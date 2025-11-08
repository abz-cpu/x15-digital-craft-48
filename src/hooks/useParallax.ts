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

    let rafId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const delta = (scrollY - lastScrollY) * speed;
        
        setOffset((prev) => {
          const newOffset = prev + delta;
          return Math.max(-maxOffset, Math.min(maxOffset, newOffset));
        });
        
        lastScrollY = scrollY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed, maxOffset]);

  return offset;
};
