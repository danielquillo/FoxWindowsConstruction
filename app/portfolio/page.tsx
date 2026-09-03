"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { withBasePath } from "../lib/basePath";

/* =========================================================
   TYPES
   ========================================================= */

type PrimaryFilter =
  | "all"
  | "windows"
  | "doors"
  | "multifamily-condos"
  | "videos";

type WindowFilter =
  | "all"
  | "residential"
  | "townhome-condo"
  | "multifamily"
  | "commercial";

type DoorFilter =
  | "all"
  | "entry"
  | "sliding-patio"
  | "hinged-patio"
  | "steel-commercial";

type MediaTag =
  | "windows"
  | "doors"
  | "multifamily-condos"
  | "window-residential"
  | "window-townhome-condo"
  | "window-multifamily"
  | "window-commercial"
  | "door-entry"
  | "door-sliding-patio"
  | "door-hinged-patio"
  | "door-steel-commercial";

type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  label: string;
  mediaType: "image" | "video";
  tags: MediaTag[];
  position?: string;
  poster?: string;
};

/* =========================================================
   PORTFOLIO ITEMS

   Replace all placeholder filenames with the real files.

   An item can have MULTIPLE tags.

   Example:
   A condo window project can be both:
   "windows"
   "multifamily-condos"
   "window-townhome-condo"
   ========================================================= */

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  /* ===================== WINDOWS ===================== */

  {
    id: "window-1",
    src: "/placeholder-window-1.jpg",
    alt: "Residential window installation by Fox Windows Construction",
    label: "Residential Windows",
    mediaType: "image",
    tags: ["windows", "window-residential"],
    position: "object-center",
  },
  {
    id: "window-2",
    src: "/placeholder-window-2.jpg",
    alt: "Residential replacement window project",
    label: "Residential Windows",
    mediaType: "image",
    tags: ["windows", "window-residential"],
    position: "object-center",
  },
  {
    id: "window-3",
    src: "/placeholder-window-3.jpg",
    alt: "Townhome window replacement project",
    label: "Townhome Windows",
    mediaType: "image",
    tags: [
      "windows",
      "multifamily-condos",
      "window-townhome-condo",
    ],
    position: "object-center",
  },
  {
    id: "window-4",
    src: "/placeholder-window-4.jpg",
    alt: "Condominium window installation project",
    label: "Condominium Windows",
    mediaType: "image",
    tags: [
      "windows",
      "multifamily-condos",
      "window-townhome-condo",
    ],
    position: "object-center",
  },
  {
    id: "window-5",
    src: "/placeholder-window-5.jpg",
    alt: "Multifamily window replacement project",
    label: "Multifamily Windows",
    mediaType: "image",
    tags: ["windows", "multifamily-condos", "window-multifamily"],
    position: "object-center",
  },
  {
    id: "window-6",
    src: "/placeholder-window-6.jpg",
    alt: "Large multifamily window installation",
    label: "Multifamily Windows",
    mediaType: "image",
    tags: ["windows", "multifamily-condos", "window-multifamily"],
    position: "object-center",
  },
  {
    id: "window-7",
    src: "/placeholder-window-7.jpg",
    alt: "Commercial window installation project",
    label: "Commercial Windows",
    mediaType: "image",
    tags: ["windows", "window-commercial"],
    position: "object-center",
  },
  {
    id: "window-8",
    src: "/placeholder-window-8.jpg",
    alt: "Completed replacement window installation",
    label: "Residential Windows",
    mediaType: "image",
    tags: ["windows", "window-residential"],
    position: "object-center",
  },

  /* ===================== ENTRY DOORS ===================== */

  {
    id: "entry-door-1",
    src: "/entry-door-1.jpg",
    alt: "Residential entry door installation",
    label: "Entry Door",
    mediaType: "image",
    tags: ["doors", "door-entry"],
    position: "object-center",
  },
  {
    id: "entry-door-2",
    src: "/entry-door-2.jpeg",
    alt: "Completed exterior entry door project",
    label: "Entry Door",
    mediaType: "image",
    tags: ["doors", "door-entry"],
    position: "object-center",
  },
  {
    id: "entry-door-3",
    src: "/entry-door-3.jpeg",
    alt: "Completed exterior entry door project",
    label: "Entry Door",
    mediaType: "image",
    tags: ["doors", "door-entry"],
    position: "object-center",
  },
  {
    id: "entry-door-4",
    src: "/entry-door-4.jpeg",
    alt: "Completed exterior entry door project",
    label: "Entry Door",
    mediaType: "image",
    tags: ["doors", "door-entry"],
    position: "object-center",
  },
  {
    id: "entry-door-5",
    src: "/entry-door-5.jpeg",
    alt: "Completed exterior entry door project",
    label: "Entry Door",
    mediaType: "image",
    tags: ["doors", "door-entry"],
    position: "object-center",
  },

  /* ===================== SLIDING PATIO ===================== */

  {
    id: "sliding-door-1",
    src: "/placeholder-sliding-door-1.jpg",
    alt: "Sliding patio door installation",
    label: "Sliding Patio Door",
    mediaType: "image",
    tags: ["doors", "door-sliding-patio"],
    position: "object-center",
  },
  {
    id: "sliding-door-2",
    src: "/placeholder-sliding-door-2.jpg",
    alt: "Residential sliding patio door replacement",
    label: "Sliding Patio Door",
    mediaType: "image",
    tags: ["doors", "door-sliding-patio"],
    position: "object-center",
  },

  /* ===================== HINGED PATIO ===================== */

  {
    id: "hinged-door-1",
    src: "/placeholder-hinged-door-1.jpg",
    alt: "Hinged patio door installation",
    label: "Hinged Patio Door",
    mediaType: "image",
    tags: ["doors", "door-hinged-patio"],
    position: "object-center",
  },
  {
    id: "hinged-door-2",
    src: "/placeholder-hinged-door-2.jpg",
    alt: "French style hinged patio door project",
    label: "Hinged Patio Door",
    mediaType: "image",
    tags: ["doors", "door-hinged-patio"],
    position: "object-center",
  },

  /* ===================== STEEL COMMERCIAL DOORS ===================== */

  {
    id: "steel-door-1",
    src: "/placeholder-steel-door-1.jpg",
    alt: "Steel commercial door installation",
    label: "Steel Commercial Door",
    mediaType: "image",
    tags: ["doors", "door-steel-commercial"],
    position: "object-center",
  },
  {
    id: "steel-door-2",
    src: "/placeholder-steel-door-2.jpg",
    alt: "Commercial steel entrance door project",
    label: "Steel Commercial Door",
    mediaType: "image",
    tags: ["doors", "door-steel-commercial"],
    position: "object-center",
  },

  /* ===================== CONDO / MULTIFAMILY DOORS ===================== */

  {
    id: "multifamily-door-1",
    src: "/placeholder-multifamily-door-1.jpg",
    alt: "Door installation for a condominium property",
    label: "Condominium Door",
    mediaType: "image",
    tags: ["doors", "multifamily-condos"],
    position: "object-center",
  },

  /* ===================== VIDEOS ===================== */

  {
    id: "video-1",
    src: "/placeholder-video-1.mp4",
    poster: "/placeholder-video-poster-1.jpg",
    alt: "Window installation project video",
    label: "Window Installation",
    mediaType: "video",
    tags: ["windows", "window-residential"],
  },
  {
    id: "video-2",
    src: "/placeholder-video-2.mp4",
    poster: "/placeholder-video-poster-2.jpg",
    alt: "Sliding patio door installation video",
    label: "Sliding Patio Door",
    mediaType: "video",
    tags: ["doors", "door-sliding-patio"],
  },
  {
    id: "video-3",
    src: "/placeholder-video-3.mp4",
    poster: "/placeholder-video-poster-3.jpg",
    alt: "Multifamily window project video",
    label: "Multifamily Windows",
    mediaType: "video",
    tags: ["windows", "multifamily-condos", "window-multifamily"],
  },
];

/* =========================================================
   FILTERS
   ========================================================= */

const PRIMARY_FILTERS: {
  label: string;
  value: PrimaryFilter;
}[] = [
  {
    label: "All Projects",
    value: "all",
  },
  {
    label: "Windows",
    value: "windows",
  },
  {
    label: "Doors",
    value: "doors",
  },
  {
    label: "Multifamily / Condos",
    value: "multifamily-condos",
  },
  {
    label: "Videos",
    value: "videos",
  },
];

const WINDOW_FILTERS: {
  label: string;
  value: WindowFilter;
}[] = [
  {
    label: "All Windows",
    value: "all",
  },
  {
    label: "Residential",
    value: "residential",
  },
  {
    label: "Townhomes / Condos",
    value: "townhome-condo",
  },
  {
    label: "Multifamily",
    value: "multifamily",
  },
  {
    label: "Commercial",
    value: "commercial",
  },
];

const DOOR_FILTERS: {
  label: string;
  value: DoorFilter;
}[] = [
  {
    label: "All Doors",
    value: "all",
  },
  {
    label: "Entry Doors",
    value: "entry",
  },
  {
    label: "Sliding Patio",
    value: "sliding-patio",
  },
  {
    label: "Hinged Patio",
    value: "hinged-patio",
  },
  {
    label: "Steel Commercial",
    value: "steel-commercial",
  },
];

const WINDOW_TAGS: Record<
  Exclude<WindowFilter, "all">,
  MediaTag
> = {
  residential: "window-residential",
  "townhome-condo": "window-townhome-condo",
  multifamily: "window-multifamily",
  commercial: "window-commercial",
};

const DOOR_TAGS: Record<
  Exclude<DoorFilter, "all">,
  MediaTag
> = {
  entry: "door-entry",
  "sliding-patio": "door-sliding-patio",
  "hinged-patio": "door-hinged-patio",
  "steel-commercial": "door-steel-commercial",
};

/* =========================================================
   EXPERIENCE
   ========================================================= */

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

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

/* =========================================================
   PAGINATION
   ========================================================= */

const INITIAL_VISIBLE = 12;
const LOAD_MORE_AMOUNT = 12;

/* =========================================================
   PAGE
   ========================================================= */

export default function PortfolioPage() {
  const [filter, setFilter] = useState<PrimaryFilter>("all");
  const [windowFilter, setWindowFilter] =
    useState<WindowFilter>("all");
  const [doorFilter, setDoorFilter] =
    useState<DoorFilter>("all");

  const [visibleCount, setVisibleCount] =
    useState(INITIAL_VISIBLE);

  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  /* ==================== FILTER LOGIC ==================== */

  const filteredItems = useMemo(() => {
    let items = PORTFOLIO_ITEMS;

    if (filter === "windows") {
      items = items.filter((item) =>
        item.tags.includes("windows")
      );

      if (windowFilter !== "all") {
        const requiredTag = WINDOW_TAGS[windowFilter];

        items = items.filter((item) =>
          item.tags.includes(requiredTag)
        );
      }
    }

    if (filter === "doors") {
      items = items.filter((item) =>
        item.tags.includes("doors")
      );

      if (doorFilter !== "all") {
        const requiredTag = DOOR_TAGS[doorFilter];

        items = items.filter((item) =>
          item.tags.includes(requiredTag)
        );
      }
    }

    if (filter === "multifamily-condos") {
      items = items.filter((item) =>
        item.tags.includes("multifamily-condos")
      );
    }

    if (filter === "videos") {
      items = items.filter(
        (item) => item.mediaType === "video"
      );
    }

    return items;
  }, [filter, windowFilter, doorFilter]);

  const visibleItems = filteredItems.slice(
    0,
    visibleCount
  );

  /* ==================== FILTER CHANGES ==================== */

  function handlePrimaryFilter(value: PrimaryFilter) {
    setFilter(value);
    setWindowFilter("all");
    setDoorFilter("all");
    setVisibleCount(INITIAL_VISIBLE);
    setActiveIndex(null);
  }

  function handleWindowFilter(value: WindowFilter) {
    setWindowFilter(value);
    setVisibleCount(INITIAL_VISIBLE);
    setActiveIndex(null);
  }

  function handleDoorFilter(value: DoorFilter) {
    setDoorFilter(value);
    setVisibleCount(INITIAL_VISIBLE);
    setActiveIndex(null);
  }

  /* ==================== LIGHTBOX ==================== */

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

          return Math.min(
            currentIndex + 1,
            filteredItems.length - 1
          );
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

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeIndex, filteredItems.length]);

  const activeItem =
    activeIndex !== null
      ? filteredItems[activeIndex]
      : null;

  return (
    <div className="bg-[var(--bg)] text-[var(--fg)]">
      {/* ==================== INTRO ==================== */}

      <section className="mx-auto max-w-screen-xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8">
        <div>
          <p className="max-w-3xl text-sm font-medium text-neutral-600">
            Residential, Multifamily &amp; Commercial Projects
          </p>

          <h1 className="mt-2 max-w-3xl text-[36px]/[1.05] font-semibold tracking-tight sm:text-[48px]/[1.02] lg:whitespace-nowrap">
            Our Work
          </h1>

          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-neutral-600 sm:text-[17px]">
            Explore completed window and door installation
            projects by Fox Windows Construction. Our experience
            includes residential, condominium, multifamily, and
            select commercial properties throughout Northbrook
            and surrounding Chicagoland communities.
          </p>
        </div>

        {/* ==================== PRIMARY FILTERS ==================== */}

        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Browse Projects
          </p>

          <div
            className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0"
            role="group"
            aria-label="Filter portfolio projects"
          >
            {PRIMARY_FILTERS.map((item, index) => (
              <FilterButton
                key={item.value}
                label={item.label}
                number={String(index + 1).padStart(
                  2,
                  "0"
                )}
                active={filter === item.value}
                onClick={() =>
                  handlePrimaryFilter(item.value)
                }
              />
            ))}
          </div>

          {/* ==================== WINDOW SUBFILTER ==================== */}

          {filter === "windows" && (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Refine Windows
              </p>

              <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
                {WINDOW_FILTERS.map((item) => (
                  <SecondaryFilterButton
                    key={item.value}
                    label={item.label}
                    active={
                      windowFilter === item.value
                    }
                    onClick={() =>
                      handleWindowFilter(item.value)
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {/* ==================== DOOR SUBFILTER ==================== */}

          {filter === "doors" && (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Refine Doors
              </p>

              <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
                {DOOR_FILTERS.map((item) => (
                  <SecondaryFilterButton
                    key={item.value}
                    label={item.label}
                    active={doorFilter === item.value}
                    onClick={() =>
                      handleDoorFilter(item.value)
                    }
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
              Completed Projects
            </p>

            <h2 className="mt-2 text-[28px]/[1.1] font-semibold tracking-tight sm:text-[36px]/[1.05]">
              See Our Work
            </h2>

            <p className="mt-3 text-[15px] leading-7 text-neutral-600">
              Browse completed Fox Windows Construction
              projects. Select any photo or video to view it
              in greater detail.
            </p>
          </div>

          {filteredItems.length > 0 ? (
            <>
              {/* ==================== MEDIA GRID ==================== */}

              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {visibleItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    className="
                      group relative aspect-[4/3] overflow-hidden
                      rounded-2xl border border-[var(--border)]
                      bg-[var(--card)] text-left shadow-sm
                      transition duration-300
                      hover:-translate-y-0.5 hover:shadow-md
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[var(--button-blue-bg)]
                      focus-visible:ring-offset-2
                      sm:rounded-3xl
                    "
                    aria-label={`Open project: ${item.alt}`}
                  >
                    {/* IMAGE */}

                    {item.mediaType === "image" && (
                      <Image
                        src={withBasePath(item.src)}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw"
                        className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                          item.position ??
                          "object-center"
                        }`}
                      />
                    )}

                    {/* VIDEO PREVIEW */}

                    {item.mediaType === "video" && (
                      <>
                        <video
                          src={withBasePath(item.src)}
                          poster={
                            item.poster
                              ? withBasePath(
                                  item.poster
                                )
                              : undefined
                          }
                          muted
                          playsInline
                          preload="metadata"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />

                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/65 text-white shadow-lg backdrop-blur-sm sm:h-14 sm:w-14">
                            <PlayIcon />
                          </div>
                        </div>
                      </>
                    )}

                    {/* HOVER OVERLAY */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden p-4 sm:block">
                      <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                        <p className="text-[13px] font-semibold text-white">
                          {item.label}
                        </p>

                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--gold-icon)]">
                          {item.mediaType === "video"
                            ? "Play Video"
                            : "View Project"}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* ==================== LOAD MORE ==================== */}

              <div className="mt-8 flex flex-col items-center gap-3">
                <p className="text-xs text-neutral-500">
                  Showing{" "}
                  {Math.min(
                    visibleCount,
                    filteredItems.length
                  )}{" "}
                  of {filteredItems.length} projects
                </p>

                {visibleCount <
                  filteredItems.length && (
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleCount(
                        (current) =>
                          current +
                          LOAD_MORE_AMOUNT
                      )
                    }
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--button-blue-bg)] px-7 text-[15px] font-medium text-white shadow-sm transition hover:bg-[var(--button-hover-bg)] hover:brightness-110"
                  >
                    Load More Projects
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-8 text-center">
              <h3 className="text-lg font-semibold">
                More projects are coming soon
              </h3>

              <p className="mt-2 text-sm text-neutral-600">
                We are currently organizing additional
                photos and videos for this category.
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
                Our work ranges from individual residential
                replacements to larger coordinated
                multifamily and select commercial
                installations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {EXPERIENCE.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gold-icon)]/15 text-[var(--gold-icon)]">
                    <ProjectIcon
                      type={item.icon}
                    />
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
          <div className="flex flex-col gap-5 rounded-3xl bg-[var(--dark-blue-bg)] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm font-medium text-[var(--gold-icon)]">
                Have a Project in Mind?
              </p>

              <h2 className="mt-1 text-[24px] font-semibold tracking-tight sm:text-[28px]">
                Planning a Window or Door Project?
              </h2>

              <p className="mt-2 max-w-2xl text-[14px] leading-6 text-white/70">
                Tell us about your property, project
                location, and installation needs. Our team
                will follow up to discuss availability and
                the next steps.
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
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--button-blue-bg)] px-6 text-[15px] font-medium text-white shadow-lg transition hover:bg-[var(--button-hover-bg)] hover:brightness-110"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LIGHTBOX ==================== */}

      {activeItem && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Project viewer"
          onClick={() =>
            setActiveIndex(null)
          }
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* IMAGE / VIDEO */}

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-black">
              {activeItem.mediaType ===
              "image" ? (
                <Image
                  src={withBasePath(
                    activeItem.src
                  )}
                  alt={activeItem.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              ) : (
                <video
                  key={activeItem.id}
                  src={withBasePath(
                    activeItem.src
                  )}
                  poster={
                    activeItem.poster
                      ? withBasePath(
                          activeItem.poster
                        )
                      : undefined
                  }
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              )}
            </div>

            {/* LIGHTBOX INFO */}

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  {activeItem.label}
                </p>

                <p className="mt-1 text-sm leading-6 text-white/75">
                  {activeItem.alt}
                </p>

                <p className="mt-1 text-xs text-white/50">
                  Project {activeIndex + 1} of{" "}
                  {filteredItems.length}
                </p>
              </div>

              {/* CONTROLS */}

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={activeIndex === 0}
                  className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                  onClick={() =>
                    setActiveIndex(
                      (currentIndex) =>
                        currentIndex === null
                          ? null
                          : Math.max(
                              currentIndex -
                                1,
                              0
                            )
                    )
                  }
                  aria-label="Previous project"
                >
                  ←
                </button>

                <button
                  type="button"
                  disabled={
                    activeIndex ===
                    filteredItems.length - 1
                  }
                  className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                  onClick={() =>
                    setActiveIndex(
                      (currentIndex) =>
                        currentIndex === null
                          ? null
                          : Math.min(
                              currentIndex +
                                1,
                              filteredItems.length -
                                1
                            )
                    )
                  }
                  aria-label="Next project"
                >
                  →
                </button>

                <button
                  type="button"
                  className="flex h-11 items-center justify-center rounded-xl bg-[var(--button-blue-bg)] px-5 text-sm font-medium text-white transition hover:bg-[var(--button-hover-bg)]"
                  onClick={() =>
                    setActiveIndex(null)
                  }
                >
                  Close
                </button>
              </div>
            </div>

            <p className="mt-2 text-xs text-white/50">
              Use the left and right arrow keys to
              navigate. Press Escape to close.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   PRIMARY FILTER BUTTON
   ========================================================= */

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
        "group flex min-h-12 min-w-max items-center gap-3 rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition sm:min-w-[175px]",
        active
          ? "bg-[var(--button-blue-bg)] text-white shadow-sm"
          : "border border-[var(--border)] bg-white text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50",
      ].join(" ")}
    >
      <span
        className={[
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold",
          active
            ? "bg-[var(--gold-icon)]/15 text-[var(--gold-icon)]"
            : "bg-neutral-100 text-neutral-500",
        ].join(" ")}
      >
        {number}
      </span>

      <span className="flex-1 whitespace-nowrap">
        {label}
      </span>

      {active && (
        <span
          className="text-[var(--gold-icon)]"
          aria-hidden="true"
        >
          ✓
        </span>
      )}
    </button>
  );
}

/* =========================================================
   SECONDARY FILTER BUTTON
   ========================================================= */

function SecondaryFilterButton({
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
        "min-w-max rounded-xl border px-4 py-2.5 text-[13px] font-medium transition",
        active
          ? "border-[var(--button-blue-bg)] bg-[var(--button-blue-bg)] text-white"
          : "border-[var(--border)] bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
