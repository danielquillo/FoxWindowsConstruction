import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "./lib/basePath";

const COMPANY = "Fox Windows Construction";
const SITE_URL = "https://YOUR-DOMAIN.com";

/* =========================================================
   REPLACE THESE IMAGE PATHS
   ========================================================= */

const IMAGES = {
  hero: "/new_hero.png",
  
  windowService: "/window-hero2.png",
  doorService: "/door-hero2.png",
  projectFeatured: "/window-installation.jpeg",
  projectSecond: "/painting-finish-work.JPG",
  projectThird: "/window5.jpeg",
};

/* =========================================================
   REPLACE THESE LINKS
   ========================================================= */

const LINKS = {
  quote: "/contact#quote",
  services: "/services",
  window_services: "/services#window-installation",
  door_services: "/services#door-services",
  portfolio: "/portfolio",
  serviceAreas: "/service-areas",
  reviews: "https://www.google.com/search?q=fox+windows+construction&oq=&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxOTcxajBqNKgCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x880fc74247c9ca6b:0xb4c54199dfb521ba,1,,,,",
};

/* =========================================================
   DATA
   ========================================================= */

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

const services = [
  {
    title: "Window Installation & Replacement",
    description:
      "Professional replacement window installation for single-family homes, condominiums, multifamily properties, and select commercial projects.",
    image: IMAGES.windowService,
    href: LINKS.window_services,
  },
  {
    title: "Door Installation",
    description:
      "Entry doors, sliding patio doors, hinged patio doors, and select steel commercial door installation.",
    image: IMAGES.doorService,
    href: LINKS.door_services,
  },
];

const credibility = [
  {
    title: "Careful Installation",
    description:
      "Every project is approached with attention to fit, operation, appearance, and long-term performance.",
    icon: "precision",
  },
  {
    title: "Residential & Multifamily",
    description:
      "Experience with homes, townhomes, condominiums, multifamily properties, and coordinated installations.",
    icon: "property",
  },
  {
    title: "Local Chicagoland Service",
    description:
      "Based in Northbrook and serving surrounding North Shore and Chicagoland communities.",
    icon: "location",
  },
] as const;

const reasons = [
  {
    title: "Licensed & Experienced",
    description:
      "A licensed Illinois window contractor with experience across residential, multifamily, and select commercial installations.",
    icon: "shield",
  },
  {
    title: "Residential & Multifamily",
    description:
      "Professional installation for homes, townhomes, condominiums, and larger multifamily properties.",
    icon: "home",
  },
  {
    title: "Permitted Project Experience",
    description:
      "Experience with coordinated multifamily projects involving permits, inspections, and hundreds of replacement windows.",
    icon: "building",
  },
  {
    title: "Precision-Focused Work",
    description:
      "Careful installation focused on fit, efficiency, appearance, dependable operation, and lasting performance.",
    icon: "precision",
  },
] as const;

/*
  Replace these with the four real Google reviews.
  Since all four are positive, showing all four is completely fine.
*/
const testimonials = [
  {
    quote: "Great experience with Fox Windows Construction. Very professional from start to finish. Showed up on time, knew exactly what they were doing, and the quality of work speaks for itself. Sliding glass door installation came out clean, solid, and works perfectly. No issues, no mess, no headaches. Price was fair for the level of workmanship.Would 100% recommend and use again",
    name: "superatrs1",
  },
  {
    quote: "Yevhenii did the follow-up painting on our new door and transom window installed by Renewal by Andersen (see review), and he did an incredible job, working efficiently with attention to detail. And he's a great guy as well! Very pleased and can't recommend Yevhenii highly enough.",
    name: "Beata Z.",
  },
  {
    quote: "Thank you Fox Windows Construction for professional fast service installing windows ,patio doors and entry door. Exceptional clean work, best price ,easy to order .Fully explained process of work.I can choose whatever windows I like. Windows look great form inside and out.Also they painted newly installed window and door trims. Very very happy .",
    name: "Micheal H.",
  },
  {
    quote: "Recently had my windows replaced, and I could not be happier with the results. From the initial consultation to the final installation, the entire process was professional, efficient, and stress-free. If you are looking for a reliable, honest, and highly skilled window installer, I strongly recommend this company. Their commitment to quality workmanship and customer satisfaction is truly outstanding.",
    name: "A Oz",
  },
];

/* =========================================================
   ICONS
   ========================================================= */

type IconType =
  | "precision"
  | "property"
  | "location"
  | "shield"
  | "home"
  | "building";

function FeatureIcon({ type }: { type: IconType }) {
  const paths: Record<IconType, React.ReactNode> = {
    precision: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </>
    ),

    property: (
      <>
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M9 20v-6h6v6" />
      </>
    ),

    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    shield: (
      <>
        <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),

    home: (
      <>
        <path d="M4 11.5 12 4l8 7.5" />
        <path d="M6.5 10.5V20h11v-9.5" />
        <path d="M10 20v-5h4v5" />
      </>
    ),

    building: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      </>
    ),
  };

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
      {paths[type]}
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
      aria-hidden="true"
    >
      <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4-4.7-4.6 6.5-.9L12 2.5Z" />
    </svg>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function Home() {
  return (
    <div className="bg-[var(--bg)] text-[var(--fg)]">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative min-h-[650px] overflow-hidden sm:min-h-[700px] lg:min-h-[740px]">
        <Image
          src={withBasePath(IMAGES.hero)}
          alt="Fox Windows Construction window and door installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20 lg:hidden" />

        {/* Desktop overlay */}
        <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.76)_30%,rgba(0,0,0,0.42)_48%,transparent_67%)]" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />

        <div className="relative z-10 mx-auto flex min-h-[700px] max-w-screen-xl items-start px-4 pb-44 pt-24 sm:min-h-[650px] sm:px-6 sm:pb-44 lg:min-h-[700px] lg:items-center lg:px-8 lg:py-16">          
          <div className="w-full max-w-2xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              Window &amp; Door Installation • Northbrook, Illinois
            </p>

            <h1 className="mt-3 text-[42px]/[0.98] font-semibold tracking-tight sm:text-[56px]/[0.98] lg:text-[68px]/[0.96]">
              Professional Window &amp; Door Installation, Built to Last.
            </h1>

            <p className="mt-5 max-w-xl text-[16px] leading-7 text-white/90 sm:text-[18px]">
              Window replacement and door installation for residential,
              multifamily, and select commercial properties throughout
              Chicagoland.
            </p>

            <div className="absolute inset-x-4 bottom-8 flex flex-col gap-3 sm:inset-x-6 lg:static lg:mt-7 lg:flex-row">
              <Link
                href={LINKS.quote}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--button-blue-bg)] px-6 text-[15px] font-medium text-white shadow-lg transition hover:bg-[var(--button-hover-bg)] hover:brightness-110"
              >
                Request a Quote
              </Link>

              <Link
                href={LINKS.portfolio}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/60 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCAL INTRO
          ===================================================== */}

      <section className="hidden  bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Local Installation Experience
              </p>

              <h2 className="mt-2 max-w-xl text-[30px]/[1.08] font-semibold tracking-tight sm:text-[40px]/[1.04]">
                Window &amp; Door Installation for Homes, Multifamily Properties
                &amp; Businesses
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                Fox Windows Construction is a Northbrook-based contractor
                specializing in professional window replacement and door
                installation. From individual homes to coordinated multifamily
                projects and select commercial properties, each installation is
                approached with attention to fit, function, appearance, and
                long-term performance.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {credibility.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold-icon)]/15 text-[var(--gold-icon)]">
                      <FeatureIcon type={item.icon} />
                    </div>

                    <h3 className="mt-4 text-[15px] font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-5 text-neutral-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
          ===================================================== */}

      <section className="bg-[var(--bg)]">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
              Our Services
            </p>

            <h2 className="mt-2 text-[30px]/[1.08] font-semibold tracking-tight sm:text-[40px]/[1.04]">
              Professional Window &amp; Door Installation
            </h2>

            <p className="mt-3 text-[15px] leading-7 text-neutral-600">
              Installation services for residential, condominium, multifamily,
              and appropriately sized commercial properties.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={withBasePath(service.image)}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-[22px] font-semibold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-[14px] leading-6 text-neutral-600">
                    {service.description}
                  </p>

                  <p className="mt-4 text-[14px] font-semibold text-[var(--button-blue-bg)]">
                    Explore Service →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-7 flex justify-center">
            <Link
              href={LINKS.services}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--button-blue-bg)] px-6 text-[15px] font-medium text-white transition hover:bg-[var(--button-hover-bg)] hover:brightness-110"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          RECENT PROJECTS
          ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Recent Projects
              </p>

              <h2 className="mt-2 text-[30px]/[1.08] font-semibold tracking-tight sm:text-[40px]/[1.04]">
                See Our Work
              </h2>

              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-neutral-600">
                Explore completed window and door installation projects from
                homes, condominium communities, multifamily properties, and
                select commercial work.
              </p>
            </div>

            <Link
              href={LINKS.portfolio}
              className="shrink-0 text-[14px] font-semibold text-[var(--button-blue-bg)]"
            >
              View Full Portfolio →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            {/* Featured project */}
            <Link
              href={LINKS.portfolio}
              className="group relative min-h-[420px] overflow-hidden rounded-3xl sm:min-h-[520px]"
            >
              <Image
                src={withBasePath(IMAGES.projectFeatured)}
                alt="Featured Fox Windows Construction project"
                fill
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                  Featured Project
                </p>

                <h3 className="mt-2 text-[24px] font-semibold tracking-tight sm:text-[28px]">
                  Recent Window Installation
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  View project details →
                </p>
              </div>
            </Link>

            {/* Smaller projects */}
            <div className="hidden gap-4 lg:grid lg:grid-cols-1">
              <Link
                href={LINKS.portfolio}
                className="group relative min-h-[250px] overflow-hidden rounded-3xl"
              >
                <Image
                  src={withBasePath(IMAGES.projectSecond)}
                  alt="Fox Windows Construction completed project"
                  fill
                  sizes="(min-width: 1024px) 35vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </Link>

              <Link
                href={LINKS.portfolio}
                className="group relative min-h-[250px] overflow-hidden rounded-3xl"
              >
                <Image
                  src={withBasePath(IMAGES.projectThird)}
                  alt="Fox Windows Construction completed project"
                  fill
                  sizes="(min-width: 1024px) 35vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
          ===================================================== */}

      <section className="bg-[var(--bg)]">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
              Customer Reviews
            </p>

            <h2 className="mt-2 text-[30px]/[1.08] font-semibold tracking-tight sm:text-[40px]/[1.04]">
              What Our Customers Say
            </h2>

            <p className="mt-3 text-[15px] leading-7 text-neutral-600">
              Feedback from customers who have worked with Fox Windows
              Construction.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                // className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm sm:p-7"
                className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm sm:p-7"
              >
                <div
                  className="flex gap-1 text-[var(--gold-icon)]"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={starIndex} />
                  ))}
                </div>

                <blockquote className="mt-8 text-[16px] leading-7 text-neutral-700 pb-3">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-auto border-t border-[var(--border)] pt-4">
                  <p className="text-sm font-semibold text-neutral-900">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs text-neutral-500">
                    Google Review
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7 flex justify-center">
            <Link
              href={LINKS.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-semibold text-[var(--button-blue-bg)]"
            >
              Read Our Reviews on Google →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY FOX
          ===================================================== */}

      <section className="bg-[var(--dark-blue-bg)] text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--gold-icon)]">
              Why Fox Windows Construction
            </p>

            <h2 className="mt-2 text-[30px]/[1.08] font-semibold tracking-tight sm:text-[40px]/[1.04]">
              Professional Installation. Proven Experience.
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/70">
              Professional service, coordinated project experience, and
              installation focused on reliable long-term performance.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article key={reason.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--gold-icon)]/15 text-[var(--gold-icon)]">
                  <FeatureIcon type={reason.icon} />
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-white/70">
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE AREAS
          ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Service Area
              </p>

              <h2 className="mt-2 text-[30px]/[1.08] font-semibold tracking-tight sm:text-[40px]/[1.04]">
                Serving Northbrook &amp; Surrounding Chicagoland
              </h2>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-neutral-600">
                Fox Windows Construction serves homeowners, property managers,
                condominium communities, and select commercial properties
                throughout Northbrook and surrounding communities.
              </p>

              <Link
                href={LINKS.serviceAreas}
                className="mt-5 inline-flex text-[14px] font-semibold text-[var(--button-blue-bg)]"
              >
                Explore Our Service Areas →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {cities.slice(0, 6).map((city) => (
                <div
                  key={city}
                  className="flex min-h-16 items-center rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3"
                >
                  <div className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--gold-icon)]/15 text-[var(--gold-icon)]">
                    <FeatureIcon type="location" />
                  </div>

                  <p className="text-[14px] font-medium text-neutral-800">
                    {city}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
          <div className="flex flex-col gap-6 rounded-3xl bg-[var(--dark-blue-bg)] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10">
            <div>
              <p className="text-sm font-medium text-[var(--gold-icon)]">
                Ready to Get Started?
              </p>

              <h2 className="mt-1 text-[25px] font-semibold tracking-tight sm:text-[30px]">
                Ready to Start Your Window or Door Project?
              </h2>

              <p className="mt-2 max-w-2xl text-[14px] leading-6 text-white/70">
                Tell us about your property, location, and installation needs
                and our team will follow up to discuss the next steps.
              </p>
            </div>

            <Link
              href={LINKS.quote}
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-[var(--button-blue-bg)] px-6 text-[15px] font-medium text-white shadow-lg transition hover:bg-[var(--button-hover-bg)] hover:brightness-110"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCAL SEO STRUCTURED DATA
          ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: COMPANY,
            description:
              "Fox Windows Construction provides professional window replacement, window installation, patio door installation, entry door installation, and select commercial installation services throughout Northbrook and surrounding Chicagoland communities.",
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
              "Commercial window installation",
              "Residential window installation",
              "Multifamily window installation",
            ],
          }),
        }}
      />
    </div>
  );
}
