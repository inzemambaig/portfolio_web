"use client";

import { useEffect, useRef } from "react";

/**
 * CursorSpotlight
 * Renders a radial gradient that follows the user's cursor,
 * creating the "spotlight" effect seen on brittanychiang.com.
 * Only active on devices with a fine pointer (i.e. desktop/mouse).
 */
export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    // Only run on devices with a mouse (not touch-only)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      el.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-[background] duration-300"
      aria-hidden="true"
      // default gradient before mouse moves — centered, subtle
      style={{
        background:
          "radial-gradient(600px at 50% 50%, rgba(29,78,216,0.08), transparent 80%)",
      }}
    />
  );
}
