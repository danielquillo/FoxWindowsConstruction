"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { withBasePath } from "../lib/basePath";

type Category =
  | "all"
  | "window-installation"
  | "door-installation"
  | "finishing-work";

type Photo = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
  position?: string;
};

const PHOTOS: Photo[] = [
  {
    id: "project-1",
    src: "/gallery-1.JPG",
    alt: "Residential window installation completed by Fox Windows Construction",
    category: "window-installation",
    position: "object-center",
  },
  {
    id: "project-2",
    src: "/gallery-2.JPG",
    alt: "Large residential window replacement project on Chicago's North Shore",
    category: "window-installation",
    position: "object-center",
  },
  {
    id: "project-3",
    src: "/gallery-3.JPG",
    alt: "Energy-efficient residential window installation in the Chicago area",
    category: "window-installation",
    position: "object-center",
  },
  {
    id: "project-4",
    src: "/gallery-4.JPG",
    alt: "Completed window replacement project by Fox Windows Construction",
    category: "window-installation",
    position: "object-center",
  },
  {
    id: "project-5",
    src: "/gallery-5.jpeg",
    alt: "Professional entry door and window installation project",
    category: "door-installation",
    position: "object-center",
  },
  {
    id: "project-6",
    src: "/gallery-6.jpeg",
    alt: "Residential window and trim finishing project",
    category: "finishing-work",
    position: "object-center",
  },
];

const FILTERS: {
  label: string;
  value: Category;
}[] = [
  {
    label: "All Projects",
    value: "all",
  },
  {
    label: "Window Installation",
    value: "window-installation",
  },
  {
    label: "Door Installation",
    value: "door-installation",
  },
  {
    label: "Painting & Finish Work",
    value: "finishing-work",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Category>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (filter === "all") {
      return PHOTOS;
    }

    return PHOTOS.filter((photo) => photo.category === filter);
  }, [filter]);

  useEffect(() => {
    setActiveIndex(null);
  }, [filter]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((currentIndex) => {
          if (currentIndex === null) {
            return null;
          }

          return Math.min(currentIndex + 1, filteredPhotos.length - 1);
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((currentIndex) => {
          if (currentIndex === null) {
            return null;
          }

          return Math.max(currentIndex - 1, 0);
        });
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, filteredPhotos.length]);

  const activePhoto =
    activeIndex !== null ? filteredPhotos[activeIndex] : null;

  return (
    <div className="bg-[--bg] text-[--fg]">
      {/* Page introduction */}
      <section className="mx-auto max-w-screen-xl px-4 pb-6 pt-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-neutral-600">
            Residential, Multifamily &amp; Commercial Projects
          </p>

          <h1 className="mt-2 text-[34px]/[1.1] font-semibold tracking-tight md:text-[48px]/[1.05]">
            Window &amp; Door Project Portfolio
          </h1>

          <p className="mt-3 text-[15px] leading-7 text-neutral-600 md:text-[16px]">
            Explore completed window replacement, door installation, and finish
            work by Fox Windows Construction. Our project experience includes
            single-family homes, townhomes, condominiums, multifamily
            properties, high-rises, and commercial buildings throughout
            Northbrook and Chicago&apos;s North Shore.
          </p>
        </div>

        {/* Filter pills */}
        <div
          className="mt-6 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter portfolio projects"
        >
          {FILTERS.map((item) => (
            <FilterPill
              key={item.value}
              label={item.label}
              active={filter === item.value}
              onClick={() => setFilter(item.value)}
            />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 lg:px-8">
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {filteredPhotos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="
                  group relative aspect-[4/3] overflow-hidden
                  rounded-2xl border border-[var(--border)]
                  bg-[var(--card)] text-left shadow-sm
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-blue-700
                  focus-visible:ring-offset-2
                "
                aria-label={`Open project photo: ${photo.alt}`}
              >
                <Image
                  src={withBasePath(photo.src)}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className={`object-cover transition-transform duration-300 group-hover:scale-[1.04] ${
                    photo.position ?? "object-center"
                  }`}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

                <div className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-2 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <p className="line-clamp-2 text-[12px] font-medium text-white">
                    {photo.alt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-[var(--border)] bg-white p-8 text-center">
            <h2 className="text-lg font-semibold">
              More project photos are coming soon
            </h2>

            <p className="mt-2 text-sm text-neutral-600">
              We are currently organizing additional photos for this project
              category.
            </p>
          </div>
        )}

        {/* Project experience */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Residential Projects
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Window and door installation for single-family homes, townhomes,
              and individual condominium units.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Multifamily Experience
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Experience with larger condominium and multifamily window
              replacement projects involving coordinated installation and
              inspections.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Commercial Capabilities
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Professional installation support for commercial properties and
              large-scale exterior improvement projects.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Planning a Window or Door Project?
            </h2>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-neutral-600">
              Tell us about your property, location, and installation needs.
              Fox Windows Construction will follow up to discuss your project
              and the next steps.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/services"
              className="flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white px-5 text-[15px] font-medium text-neutral-900 hover:bg-neutral-50"
            >
              View Services
            </Link>

            <Link
              href="/contact#quote"
              className="flex h-11 items-center justify-center rounded-xl bg-blue-700 px-5 text-[15px] font-medium text-white transition hover:opacity-90"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activePhoto && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black">
              <Image
                src={withBasePath(activePhoto.src)}
                alt={activePhoto.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-white/90">{activePhoto.alt}</p>

                <p className="mt-1 text-xs text-white/60">
                  Image {activeIndex + 1} of {filteredPhotos.length}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={activeIndex === 0}
                  className="
                    flex h-10 items-center justify-center rounded-xl
                    border border-white/20 bg-white/10 px-4
                    text-sm text-white transition hover:bg-white/15
                    disabled:cursor-not-allowed disabled:opacity-40
                  "
                  onClick={() =>
                    setActiveIndex((currentIndex) =>
                      currentIndex === null
                        ? null
                        : Math.max(currentIndex - 1, 0)
                    )
                  }
                  aria-label="Previous image"
                >
                  ←
                </button>

                <button
                  type="button"
                  disabled={activeIndex === filteredPhotos.length - 1}
                  className="
                    flex h-10 items-center justify-center rounded-xl
                    border border-white/20 bg-white/10 px-4
                    text-sm text-white transition hover:bg-white/15
                    disabled:cursor-not-allowed disabled:opacity-40
                  "
                  onClick={() =>
                    setActiveIndex((currentIndex) =>
                      currentIndex === null
                        ? null
                        : Math.min(
                            currentIndex + 1,
                            filteredPhotos.length - 1
                          )
                    )
                  }
                  aria-label="Next image"
                >
                  →
                </button>

                <button
                  type="button"
                  className="flex h-10 items-center justify-center rounded-xl bg-white px-4 text-sm font-medium text-neutral-900"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Close image viewer"
                >
                  Close
                </button>
              </div>
            </div>

            <p className="mt-2 text-xs text-white/60">
              Use the left and right arrow keys to navigate. Press Escape to
              close.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "h-10 rounded-full border px-4 text-sm font-medium transition-colors",
        active
          ? "border-neutral-900 bg-neutral-900 text-white"
          : "border-[var(--border)] bg-white text-neutral-900 hover:bg-neutral-50",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
