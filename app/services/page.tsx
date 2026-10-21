import type { Metadata } from "next";
import { Package, Sprout, Store, Wheat } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description: "Maize farming, rice farming and wholesale produce supply from Riosap Farms.",
};

const services = [
  {
    icon: Wheat,
    title: "Maize farming",
    body: "We grow maize on our farms at Akuse Junction and supply produce for processing and wholesale buyers.",
  },
  {
    icon: Sprout,
    title: "Rice farming & processing",
    body: "Local rice grown and milled into clean 5kg, 25kg and 50kg bags for shops and kitchens.",
  },
  {
    icon: Package,
    title: "Wholesale produce supply",
    body: "Gari, kokonte flour and rice packed for retailers, caterers and restaurants who buy in bulk.",
  },
  {
    icon: Store,
    title: "Bulk orders for resellers",
    body: "One 5kg bag fills about 18 margarine tins — a practical pack size for resellers and chop bars.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Farming & supply services"
        subtitle="Maize, rice and wholesale foodstuffs for businesses that cook and sell at scale."
      />
      <section className="page grid gap-6 py-14 sm:py-16 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-3xl bg-white p-5 shadow-md ring-1 ring-black/5 sm:p-8">
            <service.icon className="size-10 text-brand" />
            <h2 className="font-heading mt-4 text-2xl font-bold text-brand-dark">{service.title}</h2>
            <p className="mt-3 leading-7 text-foreground/70">{service.body}</p>
          </article>
        ))}
      </section>
      <CTABanner />
    </>
  );
}
