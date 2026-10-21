import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-[32rem] overflow-hidden sm:min-h-[78vh]">
      <Image
        src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1920&q=80"
        alt="Green and yellow tractor working a farm field"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-brand-deeper/85 via-brand-dark/70 to-black/25" />
      <div className="page relative flex min-h-[32rem] flex-col justify-center py-16 pb-24 sm:min-h-[78vh] sm:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-yellow sm:text-sm sm:tracking-[0.2em]">
          Innovative modern agriculture for Ghana
        </p>
        <h1 className="font-heading max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Premium Wholesale Foodstuffs from Our Farms.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
          Local rice, gari and kokonte flour — grown, processed and packed for retailers,
          caterers and restaurants from Akuse Junction, Somanya.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <Link
            href="/products"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark sm:w-auto"
          >
            View Products
            <ArrowUpRight className="size-4" />
          </Link>
          <a
            href={waLink("Hello Riosap, I would like to place a wholesale order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
