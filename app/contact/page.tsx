import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "../components/QuoteForm";
import ServiceAreaMap from "../components/ServiceAreaMap";

const COMPANY = "Fox Windows Construction";

export const metadata: Metadata = {
  title: `Contact | ${COMPANY}`,
  description:
    "Contact Fox Windows Construction to discuss professional window replacement and door installation projects in Northbrook and surrounding Chicagoland communities.",
};

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

function ClockIcon() {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ServiceAreaIcon() {
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
      <path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20V6.5Z" />
      <path d="M9 4v13.5M15 6.5V20" />
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

export default function ContactPage() {
  return (
    <div className="bg-[--bg] text-[--fg]">
      {/* ==================== INTRO ==================== */}
      <section className="mx-auto max-w-screen-xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8">
        <div>
          <p className="max-w-3xl text-sm font-medium text-neutral-600">
            Start Your Project
          </p>
          <h1 className="max-w-3xl mt-2 text-[36px]/[1.05] font-semibold tracking-tight sm:text-[48px]/[1.02] lg:whitespace-nowrap">
            Contact Fox Windows Construction
          </h1>
          <p className="max-w-3xl mt-4 text-[15px] leading-7 text-neutral-600 sm:text-[17px]">
            Tell us about your window or door project and our team will follow
            up to discuss your needs, project location, and next steps.
            Responses are typically provided within 1–2 business days.
          </p>
        </div>
      </section>

      {/* ==================== CONTACT + FORM ==================== */}
      <section className="mx-auto max-w-screen-xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm lg:grid-cols-12">
          {/* Information panel */}
          <div className="bg-[#062b4b] p-6 text-white sm:p-8 lg:col-span-5 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#C89B3C]">
              Get in Touch
            </p>

            <h2 className="mt-3 text-[28px]/[1.1] font-semibold tracking-tight sm:text-[36px]/[1.05]">
              Let&apos;s Talk About Your Project
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-white/75">
              Whether you&apos;re planning a residential replacement,
              multifamily project, or select commercial installation, send us
              your project details and we&apos;ll help determine the next step.
            </p>

            {/* Information cards */}
            <div className="mt-8 space-y-3 lg:mt-6 lg:space-y-2">
              {/* Location */}
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 lg:p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#C89B3C]">
                    <LocationIcon />
                  </div>

                  <div>
                    <p className="text-[15px] font-semibold text-white">
                      Location
                    </p>

                    <p className="mt-1 text-[14px] leading-6 text-white/70">
                      1986 Raymond Dr
                      <br />
                      Northbrook, IL 60062
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 lg:p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#C89B3C]">
                    <ClockIcon />
                  </div>

                  <div>
                    <p className="text-[15px] font-semibold text-white">
                      Business Hours
                    </p>

                    <p className="mt-1 text-[14px] leading-6 text-white/70">
                      Monday–Friday
                      <br />
                      8:00 AM–5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Service area */}
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 lg:p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#C89B3C]">
                    <ServiceAreaIcon />
                  </div>

                  <div>
                    <p className="text-[15px] font-semibold text-white">
                      Service Area
                    </p>

                    <p className="mt-1 text-[14px] leading-6 text-white/70">
                      Northbrook, Chicago&apos;s North Shore, and surrounding
                      Chicagoland communities.
                    </p>

                    <Link
                      href="/service-areas"
                      className="mt-3 inline-flex items-center gap-2 text-[14px] font-medium text-[#C89B3C] transition hover:text-white"
                    >
                      View Service Areas
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            {/* Service Area Map */}
            <div className="relative z-0 mt-6 h-[300px] overflow-hidden rounded-2xl border border-white/15 bg-white">
              <ServiceAreaMap />
            </div>
          </div>

          {/* Quote form */}
          <div
            id="quote"
            className="scroll-mt-[120px] bg-white p-6 sm:p-8 lg:col-span-7 lg:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
              Request a Quote
            </p>

            <h2 className="mt-2 text-[28px]/[1.1] font-semibold tracking-tight sm:text-[36px]/[1.05]">
              Tell Us About Your Project
            </h2>

            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-neutral-600">
              Provide as much information as you can. Including your city or ZIP
              code helps us confirm service availability and respond more
              efficiently.
            </p>

            {/* Helpful details */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#C89B3C]">
                    <CheckIcon />
                  </div>

                  <p className="text-[13px] font-semibold text-neutral-900">
                    Project Type
                  </p>
                </div>

                <p className="mt-2 text-[12px] leading-5 text-neutral-600">
                  Window or door installation
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#C89B3C]">
                    <CheckIcon />
                  </div>

                  <p className="text-[13px] font-semibold text-neutral-900">
                    Project Location
                  </p>
                </div>

                <p className="mt-2 text-[12px] leading-5 text-neutral-600">
                  City and ZIP code
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[#C89B3C]">
                    <CheckIcon />
                  </div>

                  <p className="text-[13px] font-semibold text-neutral-900">
                    Project Details
                  </p>
                </div>

                <p className="mt-2 text-[12px] leading-5 text-neutral-600">
                  Tell us what you need
                </p>
              </div>
            </div>

            <div className="mt-8">
              <QuoteForm className="flex flex-col" />
            </div>
            {/* Desktop only: What happens next */}
            <div className="mt-10 hidden border-t border-[var(--border)] pt-8 lg:block">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                What Happens Next?
              </p>

              <div className="mt-5 grid grid-cols-3 gap-5">
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[13px] font-semibold text-[#C89B3C]">
                    01
                  </div>

                  <h3 className="mt-3 text-[15px] font-semibold text-neutral-900">
                    Send Your Details
                  </h3>

                  <p className="mt-1 text-[13px] leading-5 text-neutral-600">
                    Tell us about your property, location, and installation needs.
                  </p>
                </div>

                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[13px] font-semibold text-[#C89B3C]">
                    02
                  </div>

                  <h3 className="mt-3 text-[15px] font-semibold text-neutral-900">
                    We&apos;ll Review Your Request
                  </h3>

                  <p className="mt-1 text-[13px] leading-5 text-neutral-600">
                    Our team will review the project information and service location.
                  </p>
                </div>

                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C89B3C]/15 text-[13px] font-semibold text-[#C89B3C]">
                    03
                  </div>

                  <h3 className="mt-3 text-[15px] font-semibold text-neutral-900">
                    We&apos;ll Follow Up
                  </h3>

                  <p className="mt-1 text-[13px] leading-5 text-neutral-600">
                    Expect a response within approximately 1–2 business days.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== RESPONSE EXPECTATIONS ==================== */}
      <section className="bg-[#062b4b] text-white lg:hidden">
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#C89B3C]">
                01
              </p>

              <h3 className="mt-2 text-[17px] font-semibold">
                Send Your Details
              </h3>

              <p className="mt-2 text-[14px] leading-6 text-white/70">
                Tell us about your property, location, and installation needs.
              </p>
            </div>

            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#C89B3C]">
                02
              </p>

              <h3 className="mt-2 text-[17px] font-semibold">
                We&apos;ll Review Your Request
              </h3>

              <p className="mt-2 text-[14px] leading-6 text-white/70">
                Our team will review the project information and service
                location.
              </p>
            </div>

            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#C89B3C]">
                03
              </p>

              <h3 className="mt-2 text-[17px] font-semibold">
                We&apos;ll Follow Up
              </h3>

              <p className="mt-2 text-[14px] leading-6 text-white/70">
                Expect a response within approximately 1–2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
