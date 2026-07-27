import Link from "next/link"
import QuoteForm from "../components/QuoteForm";

const COMPANY = "Fox Windows Construction";

export default function ContactPage() {
  return (
    <div className="bg-[--bg] text-[--fg]">
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div>
          <h1 className="text-[34px]/[1.1] md:text-[48px]/[1.05] font-semibold tracking-tight max-w-2xl">
            Contact
          </h1>
          <p className="mt-3 text-[15px] md:text-[16px] text-neutral-600 max-w-2xl lg:max-w-none">
            Interested in <strong className="font-semibold text-neutral-900">Trusted Installation & Beautiful Results</strong>? Fill out the form below — receive our phone number and expect a reply within 1–2 business days. 
          </p>
        </div>
      </section>


      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5 h-full">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
              <div className="mt-0 space-y-3 text-[14px] text-neutral-700">
                <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
                  <p className="font-semibold">
                    Location
                  </p>
                  <p className="mt-1 text-neutral-600">
                    1986 Raymond Dr, Northbrook, IL, 60062
                  </p>
                  <div className="mt-4 rounded-2xl overflow-hidden border border-[var(--border)] bg-white">
                    <iframe title="Service area map" className="w-full h-[240px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.7454913355346!2d-87.828828!3d42.1129213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc716c43bbc63%3A0x1d7bbcf63e7961ca!2s1986%20Raymond%20Dr%2C%20Northbrook%2C%20IL%2060062!5e0!3m2!1sen!2sus!4v1785130244681!5m2!1sen!2sus"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
                  <p className="font-semibold">
                    Business hours
                  </p>
                  <p className="mt-1 text-neutral-600">
                    Mon–Fri: 8am–5pm
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
                  <p className="font-semibold">
                    Service areas
                  </p>
                  <p className="mt-1 text-neutral-600">
                    Chicago's North Shore + nearby suburbs.
                  </p>
                  <Link href="/service-areas" className="mt-3 inline-block underline underline-offset-4">
                    View Service Areas
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div id="quote" className="lg:col-span-7">
            <div className="h-full flex flex-col rounded-3xl border border-[var(--border)] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight">
                Contact Form
              </h2>
              <p className="mt-1 text-sm text-neutral-600">
                Include your city/ZIP for fastest scheduling.
              </p>
              <QuoteForm className="flex-1 flex flex-col" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
