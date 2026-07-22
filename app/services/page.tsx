import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "../lib/basePath";

const PHONE_DISPLAY = "847-322-5748";
const PHONE_TEL = "8473225748";

type ServiceSection = {
    id: "Service 1" | "Service 2" | "Service 3";
    title: string;
    subtitle: string;
    image: string;
    bullets: string[];
    includes: string[];
    seasonalNote?: string;
};

const SECTIONS: ServiceSection[] = [
    {
        id: "Service 1",
        title: "Service 1",
        subtitle: "Description of Service 1 goes here.",
        image: "/placeholder_image.jpg",
        bullets: [
            "Bullet 1",
            "Bullet 2",
            "Bullet 3"
        ],
        includes: [
            "Bullet 1",
            "Bullet 2",
            "Bullet 3"
        ],
    },
    {
        id: "Service 2",
        title: "Service 2",
        subtitle: "Description of Service 2 goes here.",
        image: "/placeholder_image.jpg",
        bullets: [
            "Bullet 1",
            "Bullet 2",
            "Bullet 3"
        ],
        includes: [
            "Bullet 1",
            "Bullet 2",
            "Bullet 3"
        ],
    },
    {
        id: "Service 3",
        title: "Service 3",
        subtitle: "Description of Service 3 goes here.",
        image: "/placeholder_image.jpg",
        bullets: [
            "Bullet 1",
            "Bullet 2",
            "Bullet 3"
        ],
        includes: [
            "Bullet 1",
            "Bullet 2",
            "Bullet 3"
        ],
    },
];

function Section({ s }: { s: ServiceSection }) {
  return (
    <section id={s.id} className="scroll-mt-24">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white lg:col-span-5">
          <div className="relative aspect-[4/3]">
            <Image
              src={withBasePath(s.image)}
              alt={s.title}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority={s.id === "Service 1"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" /> 
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7">
          <h2 className="text-[28px]/[1.15] md:text-[34px]/[1.1] font-semibold tracking-tight">
            {s.title}
          </h2>
          <p className="mt-2 text-[15px] md:text-[16px] text-neutral-600">{s.subtitle}</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
              <p className="text-[13px] font-semibold text-neutral-900">Popular requests</p>
              <ul className="mt-2 space-y-2 text-[14px] text-neutral-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neutral-900/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-[14px] text-neutral-700">
              <p className="text-[13px] font-semibold text-neutral-900">What's included</p>
              <ul className="mt-2 space-y-2 text-[14px] text-neutral-700">
                {s.includes.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neutral-900/70" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {s.seasonalNote && (
            <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-[14px] text-neutral-700">
              <span className="font-semibold text-neutral-900">Seasonal note:</span> {s.seasonalNote}
            </div>
          )}

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a
              href={`tel:${PHONE_TEL}`}
              className="h-11 px-4 rounded-xl bg-neutral-900 text-white text-[15px] font-medium flex items-center justify-center hover:backdrop-opacity-95"
            >
              Call {PHONE_DISPLAY}      
            </a>
            <Link
              href="/#quote"
              className="h-11 px-4 rounded-xl border border-[var(--border)] bg-white text-neutral-900 text-[15px] font-medium flex items-center justify-center hover:bg-neutral-50"
            >
              Contact Form
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
      {/* Hero */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="max-w-2xl">
          <h1 className="text-[34px]/[1.1] md:text-[48px]/[1.05] font-semibold tracking-tight">
            Services
          </h1>
          <p className="mt-3 text-[15px] md:text-[16px] text-neutral-600">
            Description of Services page goes here. This is a placeholder text that can be replaced with actual content describing the services offered by the company.
          </p>
        </div>

        {/* Quick jump links */}
        <div className="mt-6 flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="h-10 px-4 rounded-full border border-[var(--border)] bg-white text-[14px] font-medium text-neutral-900 inline-flex items-center hover:bg-neutral-50"
            >
              {s.title}
            </a>
          ))}
        </div>

        {/* Contact strip */}
        {/* <div className="mt-6 rounded-3xl border border-[var(--border)] bg-white p-4 sm:p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[14px] text-neutral-600">Need service this week?</p>
            <p className="text-[16px] font-semibold">Call or request a fast quote.</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={`tel:${PHONE_TEL}`}
              className="h-11 px-4 rounded-xl bg-neutral-900 text-white text-[15px] font-medium flex items-center justify-center"
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/#quote"
              className="h-11 px-4 rounded-xl border border-[var(--border)] bg-white text-neutral-900 text-[15px] font-medium flex items-center justify-center hover:bg-neutral-50"
            >
              Request a quote
            </Link>
          </div>
        </div> */}
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-16 space-y-14">
        {SECTIONS.map((s) => (
          <Section key={s.id} s={s} />
        ))}
      </section>

      {/* Bottom CTA */}
      {/* <section className="border-t border-[var(--border)] bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[18px] font-semibold">Ready to get started?</p>
            <p className="text-[14px] text-neutral-600">Call now or request a quick quote—no pressure.</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={`tel:${PHONE_TEL}`}
              className="h-11 px-4 rounded-xl bg-neutral-900 text-white text-[15px] font-medium flex items-center justify-center"
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/#quote"
              className="h-11 px-4 rounded-xl border border-[var(--border)] bg-white text-neutral-900 text-[15px] font-medium flex items-center justify-center hover:bg-neutral-50"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
