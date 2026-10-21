import Link from "next/link";
import { bulkFact } from "@/data/products";
import { site, waLink } from "@/lib/site";

export default function CTABanner() {
  return (
    <section className="bg-brand-yellow">
      <div className="page flex flex-col items-stretch justify-between gap-6 py-12 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-brand-dark/70">Bulk fact</p>
          <h2 className="font-heading mt-1 max-w-2xl text-2xl font-extrabold text-brand-dark sm:text-3xl">
            {bulkFact}
          </h2>
          <p className="mt-3 text-sm text-brand-dark/80">
            Delivery: {site.delivery}. {site.terms}.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <a
            href={waLink("Hello Riosap, I would like a bulk wholesale quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white sm:w-auto"
          >
            Order on WhatsApp
          </a>
          <Link
            href="/products"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-brand-dark px-6 py-3 text-sm font-bold text-brand-dark sm:w-auto"
          >
            See Price List
          </Link>
        </div>
      </div>
    </section>
  );
}
