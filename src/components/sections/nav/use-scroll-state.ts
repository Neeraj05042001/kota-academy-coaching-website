"use client";

import { useEffect, useState } from "react";

/**
 * useScrollState — fires `true` once scrollY crosses `threshold`,
 * back to `false` when it returns above. Uses passive scroll +
 * rAF so it never blocks the main thread.
 *
 * The 8px hysteresis (return-trigger sits below the forward
 * trigger) prevents flicker right at the boundary.
 */
export function useScrollState(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > threshold) return true;
        if (prev && y < Math.max(threshold - 8, 0)) return false;
        return prev;
      });
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(check);
    };

    // Set initial state (in case page loads scrolled)
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [threshold]);

  return scrolled;
}