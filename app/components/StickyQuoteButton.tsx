"use client";

import { useEffect, useState } from "react";

export default function StickyQuoteButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home-hero");

    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide while the hero is visible.
        // Show after the user scrolls beyond it.
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-1 z-50 px-3 transition-all duration-300 md:hidden ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <a
        href="#quote"
        tabIndex={isVisible ? 0 : -1}
        className="flex h-12 w-full items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white shadow-lg hover:bg-blue-800"
      >
        Get a Quote
      </a>
    </div>
  );
}
