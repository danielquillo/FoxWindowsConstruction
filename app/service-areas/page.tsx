import type { Metadata } from "next";
import Link from "next/link";

const COMPANY = "Fox Windows Construction";

export const metadata: Metadata = {
  title: `Window & Door Installation Service Areas | ${COMPANY}`,
  description:
    "Fox Windows Construction provides professional window replacement, patio door installation, entry door installation, and finishing services throughout Northbrook and Chicago's North Shore.",
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

function slugifyCity(city: string) {
  return city.toLowerCase().trim().replace(/\s+/g, "-");
}

export default function ServiceAreasPage() {
  return (
    <div className="bg-[--bg] text-[--fg]">
      {/* Page introduction */}
      <section className="mx-auto max-w-screen-xl px-4 pb-6 pt-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-neutral-600">
            Based in Northbrook, Illinois
          </p>

          <h1 className="mt-2 text-[34px]/[1.1] font-semibold tracking-tight md:text-[48px]/[1.05]">
            Window &amp; Door Installation Service Areas
          </h1>

          <p className="mt-3 text-[15px] text-neutral-600 md:text-[16px]">
            Fox Windows Construction provides professional window replacement,
            patio door installation, entry door installation, and finish work
            throughout Northbrook, Techny, Chicago&apos;s North Shore, and
            surrounding communities.
          </p>

          {/* <p className="mt-3 text-[15px] text-neutral-600 md:text-[16px]">
            We work with single-family homes, townhomes, condominiums,
            multifamily properties, high-rises, and commercial projects.
          </p> */}
        </div>
      </section>

      {/* Map and area summary */}
      <section className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Map */}
          <div className="lg:col-span-7">
            <div className="h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-white">
              <iframe
                title="Fox Windows Construction location in Northbrook, Illinois"
                className="h-[340px] w-full md:h-[430px] lg:h-full lg:min-h-[430px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=1986+Raymond+Dr,+Northbrook,+IL+60062&output=embed"
              />
            </div>
          </div>

          {/* Area summary */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight">
                Local Service Across the North Shore
              </h2>

              <p className="mt-2 text-[14px] leading-6 text-neutral-700">
                Located at 1986 Raymond Dr in Northbrook, Fox Windows
                Construction serves homeowners, property managers,
                condominium associations, builders, and commercial clients
                throughout Chicago&apos;s North Shore and nearby suburbs.
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
                  <p className="text-[13px] font-semibold text-neutral-900">
                    Services available
                  </p>

                  <p className="mt-1 text-[14px] leading-6 text-neutral-700">
                    Window installation and replacement, entry doors, patio
                    doors, mechanical patio door adjustments, painting, and
                    custom trim finishing.
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
                  <p className="text-[13px] font-semibold text-neutral-900">
                    Properties served
                  </p>

                  <p className="mt-1 text-[14px] leading-6 text-neutral-700">
                    Single-family homes, townhomes, condominiums, multifamily
                    buildings, high-rises, and commercial properties.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/contact#quote"
                  className="flex h-11 items-center justify-center rounded-xl bg-blue-700 px-4 text-[15px] font-medium text-white transition hover:opacity-90"
                >
                  Request a Quote
                </Link>

                <Link
                  href="/services"
                  className="flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white px-4 text-[15px] font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities grid */}
      <section className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-[24px] font-semibold tracking-tight md:text-[30px]">
            Communities We Serve
          </h2>

          <p className="mt-2 max-w-2xl text-[14px] leading-6 text-neutral-600">
            Select a community to learn more about professional window and door
            installation services available in your area.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((city) => {
            const slug = slugifyCity(city);

            return (
              // <Link
              <div
                key={city}
                // href={`/service-areas/${slug}`}
                className="group rounded-2xl border border-[var(--border)] bg-white p-5 transition-colors hover:bg-neutral-50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[16px] font-semibold">{city}</h3>

                    <p className="mt-1 text-[13px] leading-5 text-neutral-600">
                      Window replacement, entry doors, patio doors, and finish
                      work.
                    </p>
                  </div>

                  <span className="shrink-0 text-[13px] font-medium text-neutral-900 underline-offset-4 group-hover:underline">
                    View →
                  </span>
                </div>
              </div>
              // >/Link>
            );
          })}
        </div>

        {/* Not listed CTA */}
        <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-[20px] font-semibold tracking-tight">
              Don&apos;t See Your Community Listed?
            </h2>

            <p className="mt-1 max-w-2xl text-[14px] leading-6 text-neutral-600">
              Our service area extends beyond the cities shown above. Send us
              your project location, city, and ZIP code so we can confirm
              availability.
            </p>
          </div>

          <Link
            href="/contact#quote"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 px-5 text-[15px] font-medium text-white transition hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
