import type { Metadata } from "next";
import Link from "next/link";

const COMPANY = "Fox Windows Construction";

export const metadata: Metadata = {
  title: `About Us | ${COMPANY}`,
  description:
    "Learn about Fox Windows Construction, a locally based Northbrook contractor providing professional window replacement, door installation, and finish work throughout Chicago's North Shore.",
};

const VALUES = [
  {
    title: "Precise Installation",
    description:
      "Every window and door project is approached with careful measurements, proper alignment, and close attention to fit and operation.",
  },
  {
    title: "Lasting Performance",
    description:
      "Our work is focused on dependable installation, improved energy efficiency, and results designed to perform for years to come.",
  },
  {
    title: "Professional Service",
    description:
      "We work respectfully in homes, multifamily buildings, and commercial properties while keeping projects organized and work areas clean.",
  },
];

const EXPERIENCE = [
  {
    value: "20+",
    label: "Years of industry experience",
  },
  {
    value: "300+",
    label: "Windows in a major condominium project",
  },
  {
    value: "Residential & Commercial",
    label: "Project capabilities",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[--bg] text-[--fg]">
      {/* Page introduction */}
      <section className="mx-auto max-w-screen-xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-neutral-600">
            Locally Based in Northbrook, Illinois
          </p>

          <h1 className="mt-2 text-[34px]/[1.1] font-semibold tracking-tight md:text-[48px]/[1.05]">
            About Fox Windows Construction
          </h1>

          {/* <p className="mt-4 text-[16px] leading-7 text-neutral-600 md:text-[18px]">
            Fox Windows Construction is a locally based exterior contractor
            specializing in professional window replacement, door installation,
            and post-installation finish work throughout Northbrook and
            Chicago&apos;s North Shore.
          </p> */}
        </div>
      </section>

      {/* Main company story */}
      <section className="mx-auto max-w-screen-xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="rounded-3xl border border-[var(--border)] bg-white p-6 sm:p-8 lg:col-span-7">
            <p className="text-sm font-medium text-neutral-600">
              Our Story
            </p>

            <h2 className="mt-2 text-[26px]/[1.15] font-semibold tracking-tight md:text-[34px]/[1.1]">
              Experience Built Around Quality Installation
            </h2>

            <div className="mt-5 space-y-4 text-[15px] leading-7 text-neutral-700">
              <p>
                For more than two decades, Fox Windows Construction has helped
                property owners improve the appearance, comfort, and
                performance of their buildings through carefully completed
                window and door projects.
              </p>

              <p>
                Our work includes custom-crafted, energy-efficient windows,
                entry doors, standard and mechanical patio doors, painting,
                custom trim, and post-installation finishing. We serve
                single-family homes, townhomes, condominiums, multifamily
                properties, high-rises, and commercial projects.
              </p>

              <p>
                Based at 1986 Raymond Dr in Northbrook, our team brings a
                precise, engineering-forward approach to every installation.
                From an individual residential replacement to a large
                multifamily project, the goal remains the same: professional
                fitment, dependable operation, and a clean finished result.
              </p>
            </div>
          </div>

          {/* Company summary
          <aside className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 lg:col-span-5">
            <h2 className="text-xl font-semibold tracking-tight">
              Company at a Glance
            </h2>

            <dl className="mt-5 divide-y divide-[var(--border)]">
              <div className="py-4 first:pt-0">
                <dt className="text-[13px] font-semibold text-neutral-900">
                  Location
                </dt>
                <dd className="mt-1 text-[14px] leading-6 text-neutral-700">
                  1986 Raymond Dr
                  <br />
                  Northbrook, IL 60062
                </dd>
              </div>

              <div className="py-4">
                <dt className="text-[13px] font-semibold text-neutral-900">
                  Primary services
                </dt>
                <dd className="mt-1 text-[14px] leading-6 text-neutral-700">
                  Window replacement, entry and patio door installation,
                  mechanical door adjustment, painting, and custom trim work.
                </dd>
              </div>

              <div className="py-4">
                <dt className="text-[13px] font-semibold text-neutral-900">
                  Properties served
                </dt>
                <dd className="mt-1 text-[14px] leading-6 text-neutral-700">
                  Homes, townhomes, condominiums, multifamily buildings,
                  high-rises, and commercial properties.
                </dd>
              </div>

              <div className="py-4 last:pb-0">
                <dt className="text-[13px] font-semibold text-neutral-900">
                  Standard hours
                </dt>
                <dd className="mt-1 text-[14px] text-neutral-700">
                  Monday through Friday
                </dd>
              </div>
            </dl>
          </aside> */}
        </div>
      </section>

      {/* Licensing and project experience */}
      <section className="border-y border-[var(--border)] bg-[var(--card)]">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Introduction */}
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-neutral-600">
                Licensed &amp; Experienced
              </p>

              <h2 className="mt-2 text-[26px]/[1.15] font-semibold tracking-tight md:text-[34px]/[1.1]">
                Proven Experience with Permitted Projects
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-neutral-700">
                Fox Windows Construction is an Illinois-licensed window contractor
                with experience completing residential, multifamily, condominium, and
                commercial window replacement projects.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-neutral-700">
                Public permit records reflect experience working on projects that
                require municipal coordination, inspections, organized scheduling,
                and installation across multiple units.
              </p>
            </div>

            {/* Credentials and permit history */}
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              <article className="rounded-3xl border border-[var(--border)] bg-white p-6">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-neutral-500">
                  Contractor Credentials
                </p>

                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  Active Illinois Contractor Licensing
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                  Fox Windows Construction is listed as an actively licensed Illinois
                  window contractor.
                </p>

                <div className="mt-5 rounded-2xl bg-[var(--card)] p-4">
                  <p className="text-2xl font-semibold tracking-tight">96</p>
                  <p className="mt-1 text-[13px] leading-5 text-neutral-600">
                    BuildZoom score, placing the company within the top 20% of
                    contractors tracked by the platform.
                  </p>
                </div>
              </article>

              <article className="rounded-3xl border border-[var(--border)] bg-white p-6">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-neutral-500">
                  2023 Permit History
                </p>

                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  318-Window Condominium Project
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                  Permit records show the replacement of 318 windows at a condominium
                  complex on Hinman Avenue in Evanston.
                </p>

                <p className="mt-4 text-[14px] leading-6 text-neutral-600">
                  A project of this scale requires careful coordination across
                  multiple units, adherence to permit requirements, and organized
                  installation planning.
                </p>
              </article>

              <article className="rounded-3xl border border-[var(--border)] bg-white p-6 sm:col-span-2">
                <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-center">
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-neutral-500">
                      2024 Permit History
                    </p>

                    <h3 className="mt-3 text-lg font-semibold tracking-tight">
                      Continued Work Throughout Evanston
                    </h3>
                  </div>

                  <p className="text-[14px] leading-6 text-neutral-600">
                    Additional permit records from 2024 reflect both multifamily and
                    residential window replacement work in Evanston. Together, these
                    projects demonstrate experience handling individual residential
                    installations as well as larger properties involving municipal
                    permits and inspections.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Experience statistics */}
      <section className="border-y border-[var(--border)] bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {EXPERIENCE.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
              >
                <p className="text-[22px] font-semibold tracking-tight text-neutral-900 md:text-[26px]">
                  {item.value}
                </p>

                <p className="mt-1 text-[14px] leading-6 text-neutral-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-600">
            Our Approach
          </p>

          <h2 className="mt-2 text-[26px]/[1.15] font-semibold tracking-tight md:text-[34px]/[1.1]">
            Quality Installation. Lasting Performance.
          </h2>

          <p className="mt-3 text-[15px] leading-7 text-neutral-600">
            We believe a successful project requires more than a quality
            product. It also requires accurate installation, thoughtful
            coordination, and attention to the details that affect long-term
            performance.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {VALUES.map((value) => (
            <article
              key={value.title}
              className="rounded-3xl border border-[var(--border)] bg-white p-6"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white"
                aria-hidden="true"
              >
                ✓
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {value.title}
              </h3>

              <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Property types */}
      {/* <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Single-Family Homes",
              description:
                "Window and door improvements designed around the needs and character of each home.",
            },
            {
              title: "Townhomes & Condos",
              description:
                "Professional installations completed with care for shared properties and association requirements.",
            },
            {
              title: "Multifamily Buildings",
              description:
                "Organized project coordination for larger properties involving multiple units and installations.",
            },
            {
              title: "Commercial Properties",
              description:
                "Precise window and door installation support for commercial and professionally managed buildings.",
            },
          ].map((property) => (
            <article
              key={property.title}
              className="rounded-2xl border border-[var(--border)] bg-white p-5"
            >
              <h3 className="text-[16px] font-semibold tracking-tight">
                {property.title}
              </h3>

              <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                {property.description}
              </p>
            </article>
          ))}
        </div>
      </section> */}

      {/* Bottom CTA */}
      <section className="border-t border-[var(--border)] bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-5 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Let&apos;s Discuss Your Project
            </h2>

            <p className="mt-1 max-w-2xl text-[14px] leading-6 text-neutral-600">
              Tell us about your property, location, and window or door needs.
              We&apos;ll follow up to discuss the next steps.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/portfolio"
              className="flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white px-5 text-[15px] font-medium text-neutral-900 transition hover:bg-neutral-50"
            >
              View Our Work
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
    </div>
  );
}
