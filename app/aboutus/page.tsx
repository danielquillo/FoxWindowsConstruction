import type { Metadata } from "next";
import Link from "next/link";

const COMPANY = "Fox Windows Construction";

export const metadata: Metadata = {
  title: `About Us | ${COMPANY}`,
  description:
    "Learn about Fox Windows Construction, a locally based Northbrook contractor providing professional window replacement, door installation, and finish work throughout Chicago's North Shore.",
};

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
      <section className="mx-auto max-w-screen-xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8">
        <div>
          <p className="max-w-3xl text-sm font-medium text-neutral-600">
            Our Story
          </p>
          <h1 className="max-w-3xl mt-2 text-[36px]/[1.05] font-semibold tracking-tight sm:text-[48px]/[1.02] lg:whitespace-nowrap">
            About Fox Windows Construction
          </h1>
          <p className="max-w-3xl mt-4 text-[15px] leading-7 text-neutral-600 sm:text-[17px]">
            Based in Northbrook, IL, our team brings a
            precise, engineering-forward approach to window and door installation.
            From individual home replacements to larger projects, we focus on proper fit, dependable operation, and clean finished results.
          </p>
          <p className="max-w-3xl mt-4 text-[15px] leading-7 text-neutral-600 sm:text-[17px]">
            With more than 20 years of experience, we serve homes, townhomes,
            condominiums, multifamily properties, high-rises, and commercial buildings with custom windows, 
            entry doors and even patio doors.
          </p>
        </div>
      </section>

      {/* Licensing and project experience */}
      <section className="bg-[#062b4b] text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Introduction */}
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#C89B3C]">
                Licensed &amp; Experienced
              </p>

              <h2 className="mt-2 text-[28px]/[1.1] font-semibold tracking-tight sm:text-[36px]/[1.05]">
                Proven Experience with Permitted Projects
              </h2>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/70">
                Fox Windows Construction is an Illinois-licensed window contractor. 
                Public permit records reflect experience working on projects that
                require municipal coordination, inspections, organized scheduling,
                and installation across multiple units.
              </p>
            </div>

            {/* Credentials and permit history */}
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-[#C89B3C]">
                  Contractor Credentials
                </p>
                <h3 className="mt-4 text-[16px] font-semibold text-white">
                  Active Illinois Contractor Licensing
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-white/70">
                  Fox Windows Construction is listed as an actively licensed Illinois
                  window contractor.
                </p>

                <div className="mt-5 rounded-xl border border-white/10 bg-[#C89B3C] p-4">
                  <p className="text-2xl font-semibold tracking-tight text-white">
                    96
                  </p>
                  <p className="mt-1 text-[13px] leading-5 text-white/70">
                    BuildZoom score, placing the company within the top 20% of contractors
                    tracked by the platform.
                  </p>
                </div>
              </article>

              <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-[#C89B3C]">
                  2023 Permit History
                </p>

                <h3 className="mt-4 text-[16px] font-semibold text-white">
                  318-Window Condominium Project
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-white/70">
                  Permit records show the replacement of 318 windows at a condominium
                  complex on Hinman Avenue in Evanston.
                </p>

                <p className="mt-2 text-[13px] leading-6 text-white/70">
                  A project of this scale requires careful coordination across
                  multiple units, adherence to permit requirements, and organized
                  installation planning.
                </p>
              </article>

              <article className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:col-span-2">
                <div className="grid gap-5 md:grid-cols-[0.65fr_1.35fr] md:items-center">

                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-[#C89B3C]">
                      2024 Permit History
                    </p>

                    <h3 className="mt-4 text-[16px] font-semibold text-white">
                      Continued Work Throughout Evanston
                    </h3>
                  </div>

                  <p className="text-[13px] leading-6 text-white/70">
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
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {EXPERIENCE.map((item) => (
              <div
                key={item.label}
                className="items-center rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-sm transition duration-200"
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

      {/* Bottom CTA */}
      <section className="border-t border-[var(--border)] bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 rounded-3xl bg-[#062b4b] p-6 text-white shadow-sm transition duration-200 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm font-medium text-[#C89B3C]">
                Ready to Improve Your Property?
              </p>

              <h2 className="mt-1 text-[24px] font-semibold tracking-tight sm:text-[28px]">
                Let&apos;s Discuss Your Project
              </h2>

              <p className="mt-2 max-w-2xl text-[14px] leading-6 text-white/70">
                Tell us about your property, location, and window or door needs.
                We&apos;ll follow up to discuss the next steps.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                View Our Work
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
    </div>
  );
}