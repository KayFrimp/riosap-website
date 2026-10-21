import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name}, a maize and rice farm at ${site.location}.`,
};

const values = [
  {
    title: "Farm-grown quality",
    body: "We grow maize and rice on our land so the staples we sell start with produce we know.",
  },
  {
    title: "Fair wholesale pricing",
    body: "Clear bag sizes and bulk discounts for shops, caterers and restaurants.",
  },
  {
    title: "Straightforward terms",
    body: "Payment on order, no credit. Delivery arranged through Uber, Yango or Bolt.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Riosap Farms"
        subtitle="A maize and rice farm supplying premium wholesale foodstuffs from Akuse Junction, Somanya."
      />
      <section className="page grid items-center gap-10 py-14 sm:gap-12 sm:py-16 lg:grid-cols-2">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
          alt="Green farmland under a wide sky"
          width={1000}
          height={700}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-56 w-full rounded-3xl object-cover shadow-lg sm:h-[420px]"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Our story</p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-brand-dark">
            From our fields to Ghana&apos;s kitchens
          </h2>
          <p className="mt-4 leading-7 text-foreground/70">
            Riosap Farms is based at {site.location} in the {site.region}. We farm maize and rice,
            then supply local rice, gari and kokonte flour in bulk. Our customers are retailers,
            caterers and restaurants who need reliable staples at wholesale prices.
          </p>
          <p className="mt-4 leading-7 text-foreground/70">
            Orders are placed by phone or WhatsApp. Delivery is available via Uber, Yango and Bolt
            (fees apply). Terms are simple: strictly no credit, payment on order.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Location: Akuse Junction, Somanya",
              "Crops: maize and rice",
              "Products: local rice, gari, kokonte flour",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 size-5 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="page">
          <h2 className="font-heading text-center text-3xl font-bold text-brand-dark">
            Why choose Riosap
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl bg-background p-7 ring-1 ring-black/5">
                <h3 className="font-heading text-xl font-bold text-brand-dark">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground/70">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
