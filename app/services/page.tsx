import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "../lib/basePath";

const COMPANY = "Fox Windows Construction";

export const metadata: Metadata = {
  title: `Window & Door Installation Services | ${COMPANY}`,
  description:
    "Explore professional window replacement, patio door installation, entry door installation, and small commercial installation services from Fox Windows Construction in Northbrook and the Chicago area.",
};

type Benefit = {
  title: string;
  description: string;
  icon: "light" | "efficiency" | "comfort" | "performance" | "security" | "design";
};

type ServiceOption = {
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
};

type ServiceSection = {
  id: "window-installation" | "door-services";
  eyebrow: string;
  title: string;
  headline: string;
  introduction: string;
  heroImage: string;
  heroImagePosition?: string;
  benefits: Benefit[];
  optionsHeading: string;
  optionsDescription: string;
  options: ServiceOption[];
  experienceTitle: string;
  experienceDescription: string;
  experiencePoints: string[];
};

const SERVICES: ServiceSection[] = [
  {
    id: "window-installation",
    eyebrow: "Professional Window Installation",
    title: "Window Installation & Replacement",
    headline: "Beautiful Windows. Professionally Installed.",
    introduction:
      "Fox Windows Construction installs replacement windows for single-family homes, townhomes, condominiums, multifamily properties, and commercial buildings. Every project is approached with careful fitting, dependable installation, and attention to long-term performance.",
    heroImage: "/window-hero2.png",
    heroImagePosition: "object-center",
    benefits: [
      {
        title: "More Natural Light",
        description:
          "Well-designed windows can brighten rooms and create a more comfortable interior.",
        icon: "light",
      },
      {
        title: "Energy Efficiency",
        description:
          "Professional fitting and sealing can help reduce drafts and improve year-round comfort.",
        icon: "efficiency",
      },
      {
        title: "Quieter Comfort",
        description:
          "Quality replacement windows can help reduce outside noise and create a more peaceful home.",
        icon: "comfort",
      },
      {
        title: "Lasting Performance",
        description:
          "Careful installation supports smooth operation, dependable sealing, and long-term durability.",
        icon: "performance",
      },
    ],
    optionsHeading: "Window Solutions for Different Properties",
    optionsDescription:
      "Installation services are available for individual homes, multifamily buildings, condominium communities, and select commercial projects.",
    options: [
      {
        title: "Residential Replacement Windows",
        description:
          "Professional window replacement for single-family homes and individual residential properties.",
        image: "/window-residential.png",
        imagePosition: "object-center",
      },
      {
        title: "Townhome & Condominium Windows",
        description:
          "Coordinated installation for townhomes, condominiums, and properties with association requirements.",
        image: "/window-condo.png",
        imagePosition: "object-center",
      },
      {
        title: "Multifamily Window Projects",
        description:
          "Organized replacement work for apartment and condominium buildings involving multiple units.",
        image: "/window-multifamily.png",
        imagePosition: "object-center",
      },
      {
        title: "Small Commercial Installations",
        description:
          "Window installation for offices, churches, community buildings, and other appropriately sized commercial properties.",
        image: "/window-commercial.png",
        imagePosition: "object-center",
      },
    ],
    experienceTitle: "Experience with Residential and Permitted Projects",
    experienceDescription:
      "Fox Windows Construction has completed projects ranging from individual residential replacements to large permitted multifamily installations.",
    experiencePoints: [
      "Experience with projects involving hundreds of replacement windows",
      "Residential, condominium, multifamily, and commercial capabilities",
      "Familiarity with municipal permits and inspection requirements",
      "Installation planning across multiple units and occupied properties",
    ],
  },
  {
    id: "door-services",
    eyebrow: "Entry, Patio & Commercial Doors",
    title: "Door Installation",
    headline: "Beautiful Doors. Reliable Installation.",
    introduction:
      "Fox Windows Construction provides installation services for exterior entry doors, patio doors, and select steel commercial door projects. Each installation is completed with attention to fit, security, operation, and the overall appearance of the property.",
    heroImage: "/door-hero2.png",
    heroImagePosition: "object-center",
    benefits: [
      {
        title: "Improved Security",
        description:
          "Proper installation supports dependable locking, alignment, and everyday operation.",
        icon: "security",
      },
      {
        title: "Indoor-Outdoor Connection",
        description:
          "Patio doors can open living spaces to decks, patios, yards, and outdoor views.",
        icon: "light",
      },
      {
        title: "Comfort & Efficiency",
        description:
          "Well-fitted doors help reduce drafts and support a more comfortable interior.",
        icon: "efficiency",
      },
      {
        title: "Strong First Impression",
        description:
          "A professionally installed entry door can improve both curb appeal and function.",
        icon: "design",
      },
    ],
    optionsHeading: "Door Installation Options",
    optionsDescription:
      "Door installation is available for residential properties and select appropriately sized commercial projects.",
    options: [
      {
        title: "Entry Doors",
        description:
          "Exterior entry door installation designed to support security, appearance, and dependable daily use.",
        image: "/entry-door.png",
        imagePosition: "object-center",
      },
      {
        title: "Sliding Patio Doors",
        description:
          "Patio door installation for smooth operation, natural light, and convenient outdoor access.",
        image: "/sliding-patio-door.png",
        imagePosition: "object-center",
      },
      {
        title: "Hinged Patio Doors",
        description:
          "Traditional hinged patio door installations for homes and residential properties.",
        image: "/hinged-patio-door.png",
        imagePosition: "object-center",
      },
      {
        title: "Steel Commercial Doors",
        description:
          "Select steel door installation for churches, offices, community buildings, and similar commercial properties.",
        image: "/commercial-door.png",
        imagePosition: "object-center",
      },
    ],
    experienceTitle: "Residential and Small Commercial Door Capabilities",
    experienceDescription:
      "Door projects are selected based on property type, project scale, installation requirements, and scheduling needs.",
    experiencePoints: [
      "Exterior entry door installation",
      "Sliding and hinged patio door installation",
      "Steel commercial door installation",
      "Work for churches, offices, community buildings, and similar properties",
    ],
  },
];

function ServiceIcon({ type }: { type: Benefit["icon"] }) {
  const paths: Record<Benefit["icon"], React.ReactNode> = {
    light: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </>
    ),
    efficiency: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6M8 12h8M10 17h4" />
      </>
    ),
    comfort: (
      <>
        <path d="M4 12h10" />
        <path d="M10 8l4 4-4 4" />
        <path d="M18 7v10" />
      </>
    ),
    performance: (
      <>
        <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    security: (
      <>
        <rect x="6" y="10" width="12" height="10" rx="2" />
        <path d="M9 10V7a3 3 0 0 1 6 0v3" />
      </>
    ),
    design: (
      <>
        <path d="M4 19h16" />
        <path d="M7 19V8l5-4 5 4v11" />
        <path d="M10 19v-5h4v5" />
      </>
    ),
  };

  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
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
    </div>
  );
}

function ServiceLandingSection({
  service,
  index,
}: {
  service: ServiceSection;
  index: number;
}) {
  return (
    <section
      id={service.id}
      className="scroll-mt-[104px]"
      aria-labelledby={`${service.id}-title`}
    >
      {/* Promotional hero */}
      <div className="relative min-h-[560px] overflow-hidden sm:min-h-[620px] lg:min-h-[680px]">  
        <Image
          src={withBasePath(service.heroImage)}
          alt={`${service.title} by Fox Windows Construction`}
          fill
          sizes="100vw"
          className={`object-cover ${service.heroImagePosition ?? "object-center"}`}
          priority={index === 0}
        />
      
        {/* Mobile: lighter fade, spans full width */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10 lg:hidden" />

        {/* Desk top: stronger fade, holds to the middle */}
        <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.85)_25%,rgba(0,0,0,0.6)_40%,transparent_50%)]" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 lg:hidden" />
        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-screen-xl items-end px-4 py-10 sm:min-h-[620px] sm:px-6 sm:py-14 lg:min-h-[680px] lg:items-center lg:px-8">    
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              {service.eyebrow}
            </p>

            <h2
              id={`${service.id}-title`}
              className="mt-3 text-[38px]/[1.02] font-semibold tracking-tight sm:text-[50px]/[1.02] lg:text-[64px]/[0.98]"
            >
              {service.headline}
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/90 sm:text-[17px]">
              {service.introduction}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact#quote"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0b3b63] 
                px-6 text-[15px] font-medium text-white shadow-lg transition 
                 hover:bg-[#184061] hover:brightness-110"
              >
                Request a Quote
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-xl border 
                border-white/60 bg-white/10 px-6 text-[15px] font-medium 
                text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="bg-[var(--bg)]">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
              Explore the service
            </p>

            <h3 className="mt-2 text-[28px]/[1.1] font-semibold tracking-tight sm:text-[36px]/[1.05]">
              {service.optionsHeading}
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-neutral-600">
              {service.optionsDescription}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.options.map((option) => (
              <article
                key={option.title}
                className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={withBasePath(option.image)}
                    alt={option.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                      option.imagePosition ?? "object-center"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <h4 className="text-[17px] font-semibold tracking-tight">
                    {option.title}
                  </h4>

                  <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                    {option.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="border-b border-[#0b3b63] bg-[#062b4b]">
        <div className="mx-auto grid max-w-screen-xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {service.benefits.map((benefit) => (
            <article 
              key={benefit.title} 
              className="flex gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15">
                <div className="text-[#C89B3C]">
                  <ServiceIcon type={benefit.icon} />
                </div>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-1 text-[13px] leading-5 text-white/75">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[--bg] text-[--fg]">
      {/* Page introduction */}
      <section className="mx-auto max-w-screen-xl px-4 pb-8 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-neutral-600">
            Serving the Chicagoland
          </p>

          <h1 className="mt-2 text-[36px]/[1.05] font-semibold tracking-tight sm:text-[48px]/[1.02]">
            Our Services
          </h1>

          <p className="mt-4 text-[15px] leading-7 text-neutral-600 sm:text-[17px]">
            Fox Windows Construction provides professional window replacement,
            entry door installation, patio door installation, and select steel
            commercial door services for residential, multifamily, and
            appropriately sized commercial properties.
          </p>
        </div>

        {/* Page navigation */}
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Jump to a service
          </p>
          <nav aria-label="Services on this page" className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-3">
            {SERVICES.map((service, i) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group flex items-center gap-3 rounded-2xl 
                bg-[#0b3b63] px-4 py-3 text-[15px] font-medium text-white transition hover:border-neutral-300 
                 hover:brightness-110 hover:bg-[#184061]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[13px] font-semibold text-[#C89B3C]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 ">{service.title}</span>
                <span
                  aria-hidden="true"
                  className="text-white transition "
                >
                  ↓
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Service landing sections */}
      <div>
        {SERVICES.map((service, index) => (
          <ServiceLandingSection
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-5 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-medium text-neutral-600">
              Quality Installation. Lasting Performance.
            </p>

            <h2 className="mt-1 text-[24px] font-semibold tracking-tight sm:text-[28px]">
              Ready to Discuss Your Window or Door Project?
            </h2>

            <p className="mt-2 max-w-2xl text-[14px] leading-6 text-neutral-600">
              Tell us about your property, project location, and installation
              needs. Our team will follow up to discuss availability and the
              next steps.
            </p>
          </div>

          <Link
            href="/contact#quote"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0b3b63] 
                px-6 text-[15px] font-medium text-white shadow-lg transition 
                 hover:bg-[#184061] hover:brightness-110"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
