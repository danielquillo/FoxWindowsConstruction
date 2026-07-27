import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "../lib/basePath";

const COMPANY = "Fox Windows Construction";

export const metadata: Metadata = {
  title: `Window & Door Installation Services | ${COMPANY}`,
  description:
    "Explore professional window replacement, patio door installation, entry door installation, and finishing services from Fox Windows Construction in Northbrook and Chicago's North Shore.",
};

type ServiceSection = {
  id: "window-installation" | "door-services" | "finishing-services";
  title: string;
  subtitle: string;
  image: string;
  imagePosition?: string;
  popularRequests: string[];
  includes: string[];
  projectNote?: string;
};

const SECTIONS: ServiceSection[] = [
  {
    id: "window-installation",
    title: "Window Installation & Replacement",
    subtitle:
      "Custom-crafted, energy-efficient window installation for residential, multifamily, and commercial properties throughout Northbrook and Chicago’s North Shore.",
    image: "/window-installation.jpeg",
    imagePosition: "object-center",
    popularRequests: [
      "Residential window replacement",
      "Energy-efficient window installation",
      "Condominium and townhome window projects",
      "Multifamily window replacement",
      "Commercial window installation",
    ],
    includes: [
      "Careful removal of existing windows",
      "Precise fitting and professional installation",
      "Adjustment for proper operation",
      "Attention to sealing and energy efficiency",
      "Cleanup of the immediate work area",
    ],
    projectNote:
      "Fox Windows Construction has experience with projects ranging from individual residential replacements to large permitted multifamily installations involving hundreds of windows.",
  },
  {
    id: "door-services",
    title: "Entry & Patio Door Services",
    subtitle:
      "Professional installation and adjustment of entry doors, standard patio doors, and mechanical patio door systems for homes and commercial properties.",
    image: "/entry-patio-services.jpeg",
    imagePosition: "object-center",
    popularRequests: [
      "Exterior entry door installation",
      "Patio door installation",
      "Mechanical patio door adjustment",
      "Sliding door replacement",
      "Door fit and operation corrections",
    ],
    includes: [
      "Removal of the existing door when required",
      "Precise positioning and installation",
      "Adjustment for smooth opening and closing",
      "Attention to alignment, fit, and security",
      "Preparation for final painting and trim work",
    ],
    projectNote:
      "Each door is installed with a precision-focused approach intended to support dependable operation, improved comfort, and lasting performance.",
  },
  {
    id: "finishing-services",
    title: "Painting & Finish Work",
    subtitle:
      "Post-installation painting and finishing services for windows, doors, custom trim, and surrounding surfaces.",
    image: "/paint-finish-services.jpeg",
    imagePosition: "object-center",
    popularRequests: [
      "Window painting",
      "Entry door painting",
      "Patio door painting",
      "Custom trim painting",
      "Post-installation touch-ups",
    ],
    includes: [
      "Surface preparation",
      "Painting of newly installed windows or doors",
      "Custom trim finishing",
      "Touch-ups around the installation area",
      "A clean and polished final appearance",
    ],
    projectNote:
      "Finishing services help provide a complete result by coordinating the appearance of newly installed windows, doors, and trim with the surrounding property.",
  },
];

function ServiceSectionCard({ service }: { service: ServiceSection }) {
  return (
    <section
      id={service.id}
      className="scroll-mt-[104px]"
      aria-labelledby={`${service.id}-title`}
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white lg:col-span-5">
          <div className="relative aspect-[4/3]">
            <Image
              src={withBasePath(service.image)}
              alt={`${service.title} by Fox Windows Construction`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className={`object-cover ${
                service.imagePosition ?? "object-center"
              }`}
              priority={service.id === "window-installation"}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7">
          <h2
            id={`${service.id}-title`}
            className="text-[28px]/[1.15] font-semibold tracking-tight md:text-[34px]/[1.1]"
          >
            {service.title}
          </h2>

          <p className="mt-2 text-[15px] text-neutral-600 md:text-[16px]">
            {service.subtitle}
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
              <p className="text-[13px] font-semibold text-neutral-900">
                Popular requests
              </p>

              <ul className="mt-2 space-y-2 text-[14px] text-neutral-700">
                {service.popularRequests.map((request) => (
                  <li key={request} className="flex gap-2">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900/70"
                      aria-hidden="true"
                    />
                    <span>{request}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
              <p className="text-[13px] font-semibold text-neutral-900">
                What&apos;s included
              </p>

              <ul className="mt-2 space-y-2 text-[14px] text-neutral-700">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900/70"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {service.projectNote && (
            <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-[14px] text-neutral-700">
              <span className="font-semibold text-neutral-900">
                Project experience:
              </span>{" "}
              {service.projectNote}
            </div>
          )}

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/contact#quote"
              className="flex h-11 items-center justify-center rounded-xl bg-blue-700 px-4 text-[15px] font-medium text-white transition hover:opacity-90"
            >
              Request a Quote
            </Link>

            <Link
              href="/portfolio"
              className="flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white px-4 text-[15px] font-medium text-neutral-900 hover:bg-neutral-50"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[--bg] text-[--fg]">
      {/* Page introduction */}
      <section className="mx-auto max-w-screen-xl px-4 pb-6 pt-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-neutral-600">
            Serving Northbrook and Chicago&apos;s North Shore
          </p>

          <h1 className="mt-2 text-[34px]/[1.1] font-semibold tracking-tight md:text-[48px]/[1.05]">
            Window &amp; Door Installation Services
          </h1>

          <p className="mt-3 text-[15px] text-neutral-600 md:text-[16px]">
            Fox Windows Construction provides professional window replacement,
            door installation, and finishing services for single-family homes,
            townhomes, condominiums, multifamily properties, and commercial
            projects.
          </p>
        </div>

        {/* Quick jump links */}
        <nav
          aria-label="Services on this page"
          className="mt-6 flex flex-wrap gap-2"
        >
          {SECTIONS.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="inline-flex h-10 items-center rounded-full border border-[var(--border)] bg-white px-4 text-[14px] font-medium text-neutral-900 transition hover:bg-neutral-50"
            >
              {service.title}
            </a>
          ))}
        </nav>
      </section>

      {/* Services */}
      <div className="mx-auto max-w-screen-xl space-y-14 px-4 pb-16 sm:px-6 lg:px-8">
        {SECTIONS.map((service) => (
          <ServiceSectionCard key={service.id} service={service} />
        ))}
      </div>

      {/* Residential and commercial experience */}
      <section className="border-y border-[var(--border)] bg-[var(--card)]">
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-medium text-neutral-600">
                Projects of all sizes
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                Residential, Multifamily &amp; Commercial Experience
              </h2>
            </div>

            <div>
              <p className="text-[15px] leading-7 text-neutral-700">
                Fox Windows Construction serves homeowners, property managers,
                condominium associations, builders, and commercial clients
                throughout Northbrook, Evanston, and surrounding Chicago North
                Shore communities.
              </p>

              <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                The company&apos;s project history includes residential
                installations as well as large permitted multifamily window
                replacement work involving hundreds of windows. This experience
                supports organized project coordination and familiarity with
                municipal permit and inspection requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Ready to Discuss Your Window or Door Project?
            </h2>

            <p className="mt-1 text-[14px] text-neutral-600">
              Tell us about your property and the services you need. Our team
              will follow up to discuss the next steps.
            </p>
          </div>

          <Link
            href="/contact#quote"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 px-5 text-[15px] font-medium text-white transition hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
