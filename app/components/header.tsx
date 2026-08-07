'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { withBasePath } from '../lib/basePath';
import Link from 'next/link';
import Image from 'next/image';

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
  { label: 'About Us', href: '/aboutus' },
];

const PHONE_DISPLAY = '0-0-0';
const PHONE_TEL = '0';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    }
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${ scrolled ? "bg-[var(--nav-bg)] border-b border-[var(--border)] md:bg-transparent md:border-transparent" : "bg-[var(--nav-bg)] border-b border-[var(--border)]"}`} >
      <div className="relative mx-auto px-4 lg:px-6 pt-2">
        <nav className={`relative flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'}`}>

          {/* ============ MOBILE (< md) ============ */}

          <div className="flex items-center gap-2 md:hidden">
            <button type="button" onClick={() => setOpen((s) => !s)} className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border bg-[var(--nav-bg)] border-[var(--border)] text-[var(--nav-fg)]/80 hover:text-[var(--nav-fg)] transition-transform active:scale-90" aria-label="Toggle menu" aria-expanded={open} >
              <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 ease-out" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }} aria-hidden="true"> {open ? (
                  <path fill="currentColor" d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z" 
                  /> ) : (
                  <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" 
                  /> )}
              </svg>
            </button>
          </div>

          <Link href="/" onClick={handleLogoClick} aria-label="Fox Windows Construction — Home" className="absolute left-1/2 -translate-x-1/2 flex items-center md:hidden" >
            <Image src={withBasePath('/logo.JPG')} alt="Fox Windows Construction Inc." width={180} height={54} className={`w-auto transition-all duration-300 ${scrolled ? 'h-10' : 'h-15'}`} priority
            />
          </Link>

          {/* ============ DESKTOP (>= md) ============ */}

          <div className="hidden md:grid w-full grid-cols-[1fr_auto_1fr] items-center">
            <div className="flex items-center gap-4">
              <Link href="/" onClick={handleLogoClick} aria-label="Fox Windows Construction — Home" className="flex items-center shrink-0">
                <div className={`rounded-full overflow-hidden bg-white flex items-center justify-center transition-all duration-300 ${ scrolled ? 'h-14 w-14 p-1.5 border' : 'h-20 w-20 p-2 border-0' }`} style={{ borderColor: 'var(--border)' }} >
                  <Image src={withBasePath('/logo.JPG')} alt="Fox Windows Construction Inc." width={56} height={56} className="h-full w-full object-contain" priority />
                </div>
              </Link>
            </div>

            <div className="flex items-center justify-center flex-1">
              <div className="hidden md:flex items-center rounded-full border px-2 h-12 bg-white/95 shadow-[0_12px_35px_rgba(0,0,0,0.12)]" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--nav-bg)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', }} >
                <ul className="flex items-center gap-1">
                  {nav.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                            isActive
                              ? 'bg-black/5 text-black shadow-sm'
                              : 'text-[var(--nav-fg)] hover:bg-black/5'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="mx-3 h-6 w-px" style={{ backgroundColor: 'var(--border)' }} />
                <Link href="/contact#quote" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-[#0b3b63] text-white hover:opacity-90 transition" >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* ============ MOBILE BACKDROP OVERLAY ============ */}
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className={`md:hidden absolute top-full left-0 right-0 h-screen z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* ============ MOBILE MENU (slide + fade) ============ */}
        <div className={`md:hidden absolute top-full left-4 right-4 z-50 mt-2 overflow-hidden rounded-2xl border bg-[var(--nav-bg)] border-[var(--border)] shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition-all duration-300 ease-in-out ${ open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0 shadow-none' }`} >
          <div className={`px-4 py-3 transition-all duration-300 ease-out ${ open ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-2 opacity-0' }`} >
            <ul className="flex flex-col divide-y divide-[var(--border)]/50">
              {nav.map((item, i) => {
                const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);
                return (
                  <li key={item.href} className={`transition-all duration-300 ease-out ${ open ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0' }`} style={{ transitionDelay: open ? `${80 + i * 40}ms` : '0ms' }} >
                    <Link href={item.href} onClick={() => setOpen(false)} className={`flex items-center py-3.5 px-3 -mx-3 text-[16px] rounded-xl transition-all duration-150 ease-out active:scale-[0.97] active:duration-75 ${
                      isActive
                        ? 'text-black font-medium bg-black/5'
                        : 'text-[var(--nav-fg)] active:bg-black/5'
                    }`} >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/contact#quote" onClick={() => setOpen(false)} className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[#0b3b63] px-4 py-3 text-white font-medium active:scale-[0.98] transition-transform" >
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
