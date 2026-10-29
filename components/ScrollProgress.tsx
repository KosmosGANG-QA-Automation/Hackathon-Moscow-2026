"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[3px]" aria-hidden>
      <div
        ref={ref}
        className="h-full origin-left bg-gradient-to-r from-accent-2 via-accent to-gold"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
