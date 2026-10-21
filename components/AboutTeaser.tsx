import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const points = [
  "Maize and rice farming at Akuse Junction, Somanya",
  "Wholesale packs for shops, caterers and restaurants",
  "Payment on order — strictly no credit",
];

const stats = [
  { label: "100% Farm", sub: "Grown" },
  { label: "Wholesale", sub: "Packs" },
  { label: "Staple", sub: "Foods" },
];

export default function AboutTeaser() {
  return (
    <section className="page grid items-center gap-10 py-14 sm:gap-12 sm:py-20 lg:grid-cols-2">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">About us</p>
        <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
          Currently we are growing and selling staple foodstuffs from our farms.
        </h2>
        <p className="mt-5 leading-7 text-foreground/70">
          Riosap Farms is a maize and rice farm supplying premium wholesale foodstuffs —
          local rice, gari and kokonte flour — to retailers, caterers and restaurants across
          Ghana.
        </p>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-dark"
          >
            Discover More <ArrowUpRight className="size-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-brand-dark px-5 py-2.5 text-sm font-bold text-brand-dark"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80"
          alt="Fresh green leafy vegetables on a farm"
          width={900}
          height={700}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-56 w-full rounded-3xl object-cover shadow-lg sm:h-[420px]"
        />
        <div className="mt-3 grid grid-cols-3 overflow-hidden rounded-2xl bg-white text-center shadow-lg sm:absolute sm:right-6 sm:bottom-6 sm:left-6 sm:mt-0 sm:bg-white/95">
          {stats.map((item) => (
            <div key={item.label} className="border-r border-black/5 px-1 py-3 last:border-r-0 sm:px-2 sm:py-4">
              <p className="font-heading text-xs font-bold text-brand-dark sm:text-base">{item.label}</p>
              <p className="text-[11px] text-foreground/60 sm:text-xs">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
