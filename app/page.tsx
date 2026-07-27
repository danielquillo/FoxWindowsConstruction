import Image from "next/image";
import Link from "next/link";
import HeroRotator from "./components/hero-rotator";
import { withBasePath } from "./lib/basePath";
import QuoteForm from "./components/QuoteForm";
import StickyQuoteButton from "./components/StickyQuoteButton";

const COMPANY = "Fox Windows Construction";
const SITE_URL = "https://foxwindowsconstruction.com";

const cities = [
  "Northbrook",
  "Techny",
  "Glenview",
  "Deerfield",
  "Highland Park",
  "Lake Forest",
  "Winnetka",
  "Evanston",
];

const serviceCategories = [
  {
    id: "window-installation",
    title: "Window Installation & Replacement",
    blurb:
      "Custom-crafted, energy-efficient windows installed with precision for lasting comfort, performance, and curb appeal.",
    href: "/services#window-installation",
    image: "/window-installation.jpeg",
    position: "object-center",
  },
  {
    id: "door-services",
    title: "Entry & Patio Door Services",
    blurb:
      "Professional installation and adjustment of entry doors, standard patio doors, and mechanical patio door systems.",
    href: "/services#door-services",
    image: "/entry-windows.jpeg",
    position: "object-[center_28%]",
  },
  {
    id: "finishing-services",
    title: "Painting & Finish Work",
    blurb:
      "Post-installation painting for windows, doors, custom trim, and surrounding finishes for a complete, polished result.",
    href: "/services#finishing-services",
    image: "/painting-finish-work.JPG",
    position: "object-center",
  },
] as const;

const popularServices = [
  {
    name: "Replacement Windows",
    blurb:
      "Energy-efficient window replacement for homes, condominiums, townhomes, and commercial properties.",
  },
  {
    name: "Patio Door Installation",
    blurb:
      "Professional patio door installation and adjustment for smooth operation, security, and long-term reliability.",
  },
  {
    name: "Entry Door Installation",
    blurb:
      "Precision installation of exterior entry doors designed to improve appearance, comfort, and protection.",
  },
  {
    name: "Commercial Window Projects",
    blurb:
      "Window installation and replacement services for commercial buildings and large multifamily properties.",
  },
  {
    name: "Multifamily Installations",
    blurb:
      "Organized, permit-conscious installation services for condominium, apartment, and townhome communities.",
  },
] as const;

const gallery = [
  {
    id: "gallery-1",
    src: "/gallery-1.JPG",
    alt: "Residential window installation by Fox Windows Construction",
  },
  {
    id: "gallery-2",
    src: "/gallery-2.JPG",
    alt: "Professional window installation on Chicago's North Shore",
  },
  {
    id: "gallery-3",
    src: "/gallery-3.JPG",
    alt: "Residential window replacement project in the Chicago area",
  },
  {
    id: "gallery-4",
    src: "/gallery-4.JPG",
    alt: "Completed residential window installation",
  },
  {
    id: "gallery-5",
    src: "/gallery-5.jpeg",
    alt: "Fox Windows Construction completed window project",
  },
  {
    id: "gallery-6",
    src: "/gallery-6.jpeg",
    alt: "Residential window replacement by Fox Windows Construction",
  },
] as const;

const reasons = [
  {
    title: "Licensed & Experienced",
    desc:
      "A licensed Illinois window contractor with experience completing residential, multifamily, and commercial installations.",
  },
  {
    title: "Residential & Commercial",
    desc:
      "Professional service for single-family homes, townhomes, condominiums, high-rises, and commercial properties.",
  },
  {
    title: "Large-Project Capability",
    desc:
      "Experience with permitted multifamily projects involving hundreds of replacement windows and coordinated inspections.",
  },
  {
    title: "Precision-Focused Work",
    desc:
      "Careful, engineering-forward installation focused on fit, energy efficiency, appearance, and lasting performance.",
  },
] as const;

export default function Home() {
  return (
    <div className="relative">
      {/* Sticky hero */}
      <div
        id="home-hero"
        className="
          top-[88px]
          z-0
          h-[calc(100dvh-88px)]
          min-h-[480px]
        "
      >
        <HeroRotator />
      </div>

      {/* JSON-LD for local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: COMPANY,
            description:
              "Fox Windows Construction provides professional window replacement, window installation, patio door installation, entry door installation, and finishing services throughout Northbrook and Chicago's North Shore.",
            url: SITE_URL,
            address: {
              "@type": "PostalAddress",
              streetAddress: "1986 Raymond Dr",
              addressLocality: "Northbrook",
              addressRegion: "IL",
              postalCode: "60062",
              addressCountry: "US",
            },
            areaServed: cities.map((city) => ({
              "@type": "City",
              name: `${city}, Illinois`,
            })),
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
              },
            ],
            serviceType: [
              "Window installation",
              "Window replacement",
              "Patio door installation",
              "Entry door installation",
              "Window and door painting",
              "Commercial window installation",
              "Residential window installation",
            ],
          }),
        }}
      />

      {/* Homepage content scrolling over hero */}
      <main
        className="
          relative
          z-10
          bg-[var(--bg)]
          
          shadow-[0_-12px_30px_rgba(0,0,0,0.12)]
        "
      >
        {/* Quick intro + lead form */}
        <section
          id="homepage-content"
          className="
            scroll-mt-[70px]
            mx-auto
            max-w-screen-xl
            px-4
            pt-8
            sm:px-6
            lg:px-8
          "
        >
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-[--border] bg-[--bg] p-6 shadow-sm sm:p-8">
              <p className="text-sm font-medium text-[--nav-fg]/70">
                Serving Northbrook and Chicago&apos;s North Shore
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Expert Window &amp; Door Installation for Homes and Businesses
              </h2>

              <p className="mt-2 max-w-prose text-[15px] text-[--nav-fg]/70">
                Fox Windows Construction is a locally based exterior contractor
                specializing in precision window replacement, patio door
                installation, entry doors, and professional finish work. From
                single-family homes to large multifamily and commercial
                properties, we deliver dependable installation designed to
                improve energy efficiency, appearance, and long-term
                performance.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="#quote"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-medium text-white shadow-sm hover:opacity-95"
                >
                  Contact Form
                </a>

                <Link
                  href="/portfolio"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[--border] bg-[--bg] px-5 text-sm font-medium hover:bg-black/5"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto mt-10 max-w-screen-xl px-4 sm:mt-14 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Window &amp; Door Services
              </h2>

              <p className="mt-1 text-sm text-[--nav-fg]/70">
                Professional installation and finishing services for
                residential, multifamily, and commercial properties.
              </p>
            </div>

            <Link
              href="/services"
              className="shrink-0 text-sm font-medium underline underline-offset-4"
            >
              See all services
            </Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {serviceCategories.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group relative overflow-hidden rounded-3xl border border-[--border] bg-[--card] shadow-sm"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={withBasePath(service.image)}
                    alt={service.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover ${service.position}`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[--fg] underline-offset-4 group-hover:underline">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-sm text-[--nav-fg]/70">
                    {service.blurb}
                  </p>

                  <p className="mt-3 text-sm font-medium">
                    Explore service →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Popular services */}
          <div className="mt-10">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <h3 className="text-xl font-semibold tracking-tight">
                Popular Services
              </h3>

              <Link
                href="/services"
                className="text-sm font-medium underline underline-offset-4"
              >
                View details
              </Link>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {popularServices.map((service) => (
                <div
                  key={service.name}
                  className="rounded-2xl border border-[--border] bg-[--bg] p-5 shadow-sm"
                >
                  <h4 className="font-semibold">{service.name}</h4>

                  <p className="mt-1 text-sm text-[--nav-fg]/70">
                    {service.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent work */}
        <section className="mx-auto mt-12 max-w-screen-xl px-4 sm:mt-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Recent Window &amp; Door Projects
              </h2>

              <p className="mt-1 text-sm text-[--nav-fg]/70">
                Explore residential, multifamily, and commercial installations
                completed throughout Northbrook, Evanston, and Chicago&apos;s
                North Shore.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="text-sm font-medium underline underline-offset-4"
            >
              View full portfolio
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((project) => (
              <div
                key={project.id}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[--border] bg-[--card] shadow-sm"
              >
                <Image
                  src={withBasePath(project.src)}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Why choose us */}
        <section className="mx-auto mt-12 max-w-screen-xl px-4 sm:mt-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[--border] bg-[--card] p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Why Property Owners Choose Fox Windows Construction
            </h2>

            <p className="mt-1 text-sm text-[--nav-fg]/70">
              Professional service, proven project experience, and precise
              installation from a locally based Northbrook contractor.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-[--border] bg-[--bg] p-5"
                >
                  <p className="font-semibold">{reason.title}</p>

                  <p className="mt-1 text-sm text-[--nav-fg]/70">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section className="mx-auto mt-12 max-w-screen-xl px-4 pb-28 sm:mt-16 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Window &amp; Door Installation Service Areas
            </h2>

            <p className="mt-1 text-sm text-[--nav-fg]/70">
              Proudly serving homeowners, property managers, condominium
              associations, and businesses throughout Northbrook, Techny,
              Evanston, and surrounding Chicago North Shore communities.
            </p>

            <Link
              href="/service-areas"
              className="mt-2 inline-block text-sm font-medium underline underline-offset-4"
            >
              See all service areas
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {cities.map((city) => (
              <Link
                key={city}
                href={`/service-areas/${city
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="inline-flex h-9 items-center rounded-full border border-[--border] bg-[--bg] px-3 text-[14px] hover:bg-black/5"
              >
                {city}
              </Link>
            ))}
          </div>

          {/* Contact strip */}
          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-[--border] bg-[--bg] p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Ready to Upgrade Your Windows or Doors?
              </h3>

              <p className="mt-1 text-sm text-[--nav-fg]/70">
                From individual residential replacements to large multifamily
                and commercial installations, our team is ready to discuss your
                project.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="#quote"
                className="inline-flex h-11 items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-medium text-white shadow-sm hover:opacity-95"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* <StickyQuoteButton /> */}
    </div>
  );
}
