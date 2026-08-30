"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { withBasePath } from "../lib/basePath";

type Category = "all" | "window-installation" | "door-installation";

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
    alt: "Residential window project completed by Fox Windows Construction",
    category: "window-installation",
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
];

const EXPERIENCE = [
  {
    title: "Residential Projects",
    description:
      "Window and door installation for single-family homes, townhomes, and individual condominium units.",
    icon: "home",
  },
  {
    title: "Multifamily Experience",
    description:
      "Experience with larger condominium and multifamily window replacement projects involving coordinated installation and inspections.",
    icon: "building",
  },
  {
    title: "Commercial Capabilities",
    description:
      "Professional window and door installation for appropriately sized commercial properties and projects.",
    icon: "commercial",
  },
] as const;

type ExperienceIcon = (typeof EXPERIENCE)[number]["icon"];

function ProjectIcon({ type }: { type: ExperienceIcon }) {
  if (type === "home") {
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
        <path d="M4 11.5 12 4l8 7.5" />
        <path d="M6.5 10.5V20h11v-9.5" />
        <path d="M10 20v-5h4v5" />
      </svg>
    );
  }

  if (type === "building") {
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
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      </svg>
    );
  }

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
      <path d="M3 20h18" />
      <path d="M5 20V8l7-4 7 4v12" />
      <path d="M9 20v-5h6v5" />
      <path d="M8 10h2M14 10h2" />
    </svg>
  );
}

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
      {/* ==================== INTRO ==================== */}
      <section className="mx-auto max-w-screen-xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8">
        <div>
          <p className="max-w-3xl text-sm font-medium text-neutral-600">
            Residential, Multifamily &amp; Commercial Projects
          </p>
          <h1 className="max-w-3xl mt-2 text-[36px]/[1.05] font-semibold tracking-tight sm:text-[48px]/[1.02] lg:whitespace-nowrap">
            Our Work
          </h1>
          <p className="max-w-3xl mt-4 text-[15px] leading-7 text-neutral-600 sm:text-[17px]">
            Explore completed window and door installation projects by Fox
            Windows Construction. Our experience includes residential,
            condominium, multifamily, and select commercial properties
            throughout Northbrook and surrounding Chicagoland communities.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Browse Projects
          </p>

          <div
            className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3"
            role="group"
            aria-label="Filter portfolio projects"
          >
            {FILTERS.map((item, index) => (
              <FilterButton
                key={item.value}
                label={item.label}
                number={String(index + 1).padStart(2, "0")}
                active={filter === item.value}
                onClick={() => setFilter(item.value)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-3 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
              Completed Projects
            </p>

            <h2 className="mt-2 text-[28px]/[1.1] font-semibold tracking-tight sm:text-[36px]/[1.05]">
              See Our Work
            </h2>

            <p className="mt-3 text-[15px] leading-7 text-neutral-600">
              Browse photos from completed Fox Windows Construction projects.
              Select any image to view it in greater detail.
            </p>
          </div>

          {filteredPhotos.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="
                    group relative aspect-[4/3] overflow-hidden
                    rounded-3xl border border-[var(--border)]
                    bg-[var(--card)] text-left shadow-sm
                    transition duration-300
                    hover:-translate-y-0.5 hover:shadow-md
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-[#0b3b63]
                    focus-visible:ring-offset-2
                  "
                  aria-label={`Open project photo: ${photo.alt}`}
                >
                  <Image
                    src={withBasePath(photo.src)}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                      photo.position ?? "object-center"
                    }`}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                    <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <p className="text-[14px] font-medium leading-5 text-white">
                        {photo.alt}
                      </p>

                      <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#C89B3C]">
                        View Project
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-8 text-center">
              <h3 className="text-lg font-semibold">
                More project photos are coming soon
              </h3>

              <p className="mt-2 text-sm text-neutral-600">
                We are currently organizing additional photos for this project
                category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ==================== EXPERIENCE ==================== */}
      <section className="border-y border-[var(--border)] bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Project Experience
              </p>

              <h2 className="mt-2 text-[27px]/[1.1] font-semibold tracking-tight sm:text-[34px]/[1.05]">
                Experience Across Different Property Types
              </h2>

              <p className="mt-3 max-w-xl text-[14px] leading-6 text-neutral-600">
                Our work ranges from individual residential replacements to
                larger coordinated multifamily and select commercial
                installations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {EXPERIENCE.map((item) => (
                <article
                  key={item.title}
                  className="items-center rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-sm transition duration-200"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#C89B3C]">
                    <ProjectIcon type={item.icon} />
                  </div>

                  <h3 className="mt-4 text-[16px] font-semibold text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[13px] leading-5 text-neutral-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 rounded-3xl bg-[#062b4b] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm font-medium text-[#C89B3C]">
                Have a Project in Mind?
              </p>

              <h2 className="mt-1 text-[24px] font-semibold tracking-tight sm:text-[28px]">
                Planning a Window or Door Project?
              </h2>

              <p className="mt-2 max-w-2xl text-[14px] leading-6 text-white/70">
                Tell us about your property, project location, and installation
                needs. Our team will follow up to discuss availability and the
                next steps.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                View Services
              </Link>

              <Link
                href="/contact#quote"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0b3b63] px-6 text-[15px] font-medium text-white shadow-lg transition hover:bg-[#184061] hover:brightness-110"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LIGHTBOX ==================== */}
      {activePhoto && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-black">
              <Image
                src={withBasePath(activePhoto.src)}
                alt={activePhoto.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm leading-6 text-white/90">
                  {activePhoto.alt}
                </p>

                <p className="mt-1 text-xs text-white/60">
                  Image {activeIndex + 1} of {filteredPhotos.length}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={activeIndex === 0}
                  className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
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
                  className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
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
                  className="flex h-11 items-center justify-center rounded-xl bg-[#0b3b63] px-5 text-sm font-medium text-white transition hover:bg-[#184061]"
                  onClick={() => setActiveIndex(null)}
                >
                  Close
                </button>
              </div>
            </div>

            <p className="mt-2 text-xs text-white/50">
              Use the left and right arrow keys to navigate. Press Escape to
              close.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterButton({
  label,
  number,
  active,
  onClick,
}: {
  label: string;
  number: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "group flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition sm:min-w-[210px]",
        active
          ? "bg-[#0b3b63] text-white shadow-sm"
          : "border border-[var(--border)] bg-white text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50",
      ].join(" ")}
    >
      <span
        className={[
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold",
          active
            ? "bg-[#C89B3C]/15 text-[#C89B3C]"
            : "bg-neutral-100 text-neutral-500",
        ].join(" ")}
      >
        {number}
      </span>

      <span className="flex-1">{label}</span>

      {active && (
        <span className="text-[#C89B3C]" aria-hidden="true">
          ✓
        </span>
      )}
    </button>
  );
}
