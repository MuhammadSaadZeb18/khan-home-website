"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Group Companies", href: "#group" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function updateHeight() {
      if (headerRef.current) setHeight(headerRef.current.offsetHeight);
    }

    function onScroll() {
      setIsSticky(window.scrollY > 80);
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const topBarClass = isSticky ? "hidden" : "";
  const headerClass = isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative z-20";
  const whiteBarClass = isSticky ? " bg-white " : " ";

  return (
    <>
      {isSticky && <div aria-hidden="true" style={{ height }} />}
      <header ref={headerRef} className={headerClass}>

        <div className={`bg-[#081d56] text-slate-100 transition-all ${topBarClass}`}>
          <div className="maincontainer mx-auto flex flex-col gap-3 px-0 py-1.5 text-sm md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-4 text-slate-200">
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">☎</span>
                +971 54 204 6142
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">✉</span>
                info@khanhome.ae
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-200">
              <a href="https://facebook.com" aria-label="Facebook" className="transition hover:text-white">FB</a>
              <a href="https://instagram.com" aria-label="Instagram" className="transition hover:text-white">IG</a>
              <a href="https://youtube.com" aria-label="YouTube" className="transition hover:text-white">YT</a>
              <a href="https://tiktok.com" aria-label="TikTok" className="transition hover:text-white">TT</a>
            </div>
          </div>
        </div>

        <div className={`${whiteBarClass}`}>
          <div className="maincontainer mx-auto flex flex-wrap items-center justify-between gap-4 px-22 py-3">
            <Link href="#home" className="flex items-center gap-3 text-slate-900">
              <Image src="/KhanHomeLogo.png" alt="Khan Home Logo" width={160} height={56} priority />
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="transition hover:text-[#0f3471]">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link href="#contact" className="hidden rounded-full bg-[#0f3471] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0f3471]/10 transition hover:bg-[#112b6d] md:inline-flex">
                Get a Quote
              </Link>
              <button type="button" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden">
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
