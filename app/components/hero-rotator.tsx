// 


import { withBasePath } from "../lib/basePath";
import Image from "next/image";
import Link from "next/link";

export default function HeroRotator() {
  return (
    <section
      className="
        relative
        h-[calc(100dvh-72px)]
        min-h-[480px]
        w-full
        overflow-hidden
      "
    >
      {/* Mobile hero image */}
      <Image
        src={withBasePath("/new-front-page.png")}
        alt="Fox Windows Construction window installation designed for summer and winter comfort"
        fill
        sizes="100vw"
        className="object-cover object-[center_10%] md:hidden"
        priority
      />

      {/* Desktop hero image */}
      <Image
        src={withBasePath("/front-page-desktop.PNG")}
        alt="Fox Windows Construction window installation designed for summer and winter comfort"
        fill
        sizes="100vw"
        className="hidden object-cover object-top md:block"
        priority
      />

      {/* Dark gradient for button visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

      {/* Hero actions */}
      <div
        className="
          absolute inset-x-0
          bottom-[max(1rem,env(safe-area-inset-bottom))]
          z-10
          mx-auto
          max-w-screen-md
          px-4
          sm:px-6
        "
      >
        <div className="flex flex-wrap gap-2">
          <a
            href="#homepage-content"
            className="
              inline-flex h-11 items-center justify-center gap-2
              rounded-lg border border-white/70
              bg-white/10 px-4
              text-[15px] font-medium text-white
              shadow-sm backdrop-blur-sm
              transition
              hover:bg-white/20
            "
          >
            See More

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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>

          {/* <Link
            href="/services"
            className="
              inline-flex h-11 items-center justify-center
              rounded-lg bg-black/70 px-4
              text-[15px] font-medium text-white
              shadow-sm transition
              hover:bg-black/85
            "
          >
            Our Services
          </Link> */}
        </div>
      </div>
    </section>
  );
}
