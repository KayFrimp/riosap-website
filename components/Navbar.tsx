"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 shadow-sm backdrop-blur">
      <div className="page flex items-center justify-between gap-3 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/logo.jpg"
            alt="Riosap Farms logo"
            width={52}
            height={52}
            className="size-10 shrink-0 rounded-full object-cover ring-2 ring-brand sm:size-12"
            priority
          />
          <span className="font-heading truncate text-base font-bold tracking-tight text-brand-dark sm:text-lg">
            Riosap Farms
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition ${
                  active ? "text-brand" : "text-foreground/80 hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-dark shadow-sm transition hover:bg-[#e6bb3a] sm:inline-flex"
          >
            Get In Touch
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white py-3 lg:hidden">
          <nav className="page flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-brand-mint"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-brand-yellow px-5 py-3 text-center text-sm font-bold text-brand-dark"
            >
              Get In Touch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
