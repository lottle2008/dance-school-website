"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/data";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/courses", label: "课程体系" },
  { href: "/campuses", label: "校区环境" },
  { href: "/about", label: "关于我们" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-pink-600">
          {SCHOOL_INFO.name}
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${SCHOOL_INFO.phone}`}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-pink-600"
          >
            <Phone className="h-4 w-4" />
            {SCHOOL_INFO.phone}
          </a>
          <a
            href="#booking"
            className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700"
          >
            试听
          </a>
        </div>

        <button
          className="rounded-md p-2 text-slate-600 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="切换导航"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-700 hover:text-pink-600"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#booking"
              className="mt-2 rounded-full bg-pink-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              试听
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
