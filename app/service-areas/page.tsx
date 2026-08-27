import type { Metadata } from "next";
import Link from "next/link";
import ServiceAreaMap from "../components/ServiceAreaMap";
import ServiceCities from "../components/ServiceCities";

const COMPANY = "Fox Windows Construction";

export const metadata: Metadata = {
  title: `Window & Door Installation Service Areas | ${COMPANY}`,
  description:
    "Fox Windows Construction provides professional window replacement and door installation throughout Northbrook, Chicago's North Shore, and surrounding Chicagoland communities.",
};

const CITIES = [
  "Northbrook",
  "Techny",
  "Glenview",
  "Deerfield",
  "Highland Park",
  "Lake Forest",
  "Winnetka",
  "Evanston",
  "Glencoe",
  "Wilmette",
  "Buffalo Grove",
  "Arlington Heights",
  "Libertyville",
] as const;

const SERVICE_TYPES = [
  {
    title: "Window Installation",
    description:
      "Replacement windows for residential, condominium, multifamily, and select commercial properties.",
  },
  {
    title: "Door Installation",
    description:
      "Entry doors, patio doors, and select steel commercial door installation.",
  },
];

const PROPERTY_TYPES = [
  "Single-Family Homes",
  "Townhomes",
  "Condominiums",
  "Multifamily Buildings",
  "Property Associations",
  "Select Commercial Properties",
];

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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function ServiceAreasPage() {
  return (
    <div className="bg-[--bg] text-[--fg]">
      {/* ==================== INTRO ==================== */}
      <section className="mx-auto max-w-screen-xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-neutral-600">
            Based in Northbrook, Illinois
          </p>

          <h1 className="mt-2 text-[36px]/[1.05] font-semibold tracking-tight sm:text-[48px]/[1.02]">
            Service Areas
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-neutral-600 sm:text-[17px]">
            Fox Windows Construction provides professional window and door
            installation throughout Northbrook, Chicago&apos;s North Shore, and
            surrounding Chicagoland communities.
          </p>
        </div>
      </section>

      {/* ==================== MAP + AREA OVERVIEW ==================== */}
      <section className="mx-auto max-w-screen-xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm lg:grid-cols-12">
          {/* Map */}
          <div className="relative z-0 min-h-[350px] overflow-hidden lg:col-span-7 lg:min-h-[520px]">
            <ServiceAreaMap />
          </div>

          {/* Dark overview panel bg-[#062b4b]*/}
          <div className="bg-[#062b4b] p-6 text-white sm:p-8 lg:col-span-5 lg:p-10">

            <h2 className="mt-3 text-[27px]/[1.1] font-semibold tracking-tight sm:text-[34px]/[1.05]">
              Local Service Across Chicagoland
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-white/75">
              Located in Northbrook, Fox Windows Construction serves
              homeowners, property managers, condominium associations, builders,
              and commercial clients throughout the surrounding area.
            </p>

            <div className="mt-7 rounded-2xl border border-white/15 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#C89B3C]">
                  <LocationIcon />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Fox Windows Construction
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/70">
                    1986 Raymond Dr
                    <br />
                    Northbrook, IL 60062
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#quote"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0b3b63] px-6 text-[15px] font-medium text-white shadow-lg transition hover:bg-[#184061] hover:brightness-110"
              >
                Request a Quote
              </Link>

              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COMMUNITIES ==================== */}
      <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Local Service
          </p>

          <h2 className="mt-2 text-[28px]/[1.1] font-semibold tracking-tight sm:text-[36px]/[1.05]">
            Communities We Commonly Serve
          </h2>

          <p className="mt-3 text-[15px] leading-7 text-neutral-600">
            We regularly complete window and door installation projects
            throughout Northbrook and surrounding communities. If your city
            isn&apos;t listed, contact us to confirm availability.
          </p>
        </div>

        <ServiceCities cities={CITIES} />
      </section>

      {/* ==================== PROPERTY TYPES ==================== */}
      <section className="border-y border-[var(--border)] bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Projects of Different Sizes
              </p>

              <h2 className="mt-2 text-[27px]/[1.1] font-semibold tracking-tight sm:text-[34px]/[1.05]">
                Properties We Work With
              </h2>

              <p className="mt-3 max-w-xl text-[14px] leading-6 text-neutral-600">
                From individual homes to larger coordinated installations, our
                experience spans several property types throughout the area.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {PROPERTY_TYPES.map((property) => (
                <div
                  key={property}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#C89B3C]">
                    <CheckIcon />
                  </div>

                  <p className="text-[14px] font-medium text-neutral-800">
                    {property}
                  </p>
                </div>
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
                Don&apos;t See Your Community Listed?
              </p>

              <h2 className="mt-1 text-[24px] font-semibold tracking-tight sm:text-[28px]">
                Let&apos;s Confirm Your Project Location
              </h2>

              <p className="mt-2 max-w-2xl text-[14px] leading-6 text-white/70">
                Our service area extends beyond the communities shown above.
                Send us your city, ZIP code, and project details and we&apos;ll
                confirm availability.
              </p>
            </div>

            <Link
              href="/contact#quote"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-[#0b3b63] px-6 text-[15px] font-medium text-white shadow-lg transition hover:bg-[#184061] hover:brightness-110"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
