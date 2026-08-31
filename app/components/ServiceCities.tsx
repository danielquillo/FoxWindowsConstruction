"use client";

import { useState } from "react";

type ServiceCitiesProps = {
  cities: readonly string[];
};

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function ServiceCities({
  cities,
}: ServiceCitiesProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleCities = showAll ? cities : cities.slice(0, 6);

  return (
    <>
      
      {/* 

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#C89B3C]"> */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCities.map((city) => (
          <div
            key={city}
            className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#C89B3C]">
              <LocationIcon />
            </div>

            <div>
              <h3 className="text-[16px] font-semibold text-white">
                {city}
              </h3>
              
              <p className="mt-1 text-[13px] leading-5 text-white/70">
                Window &amp; door installation
              </p>
            </div>
          </div>
        ))}
      </div>

      {cities.length > 6 && (
        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0b3b63] px-6 text-[15px] font-medium text-white transition hover:bg-[#184061] hover:brightness-110"
          >
            {showAll ? "Show Fewer" : "See More"}
          </button>
        </div>
      )}
    </>
  );
}
