import { Package, Sprout, Wheat } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Wheat,
    title: "Maize Farming",
    body: "We grow maize on our farms and supply produce for processing and wholesale markets.",
  },
  {
    icon: Sprout,
    title: "Rice Farming",
    body: "Local rice grown and milled into clean bags for shops, caterers and restaurants.",
  },
  {
    icon: Package,
    title: "Wholesale Supply",
    body: "Rice, gari and kokonte flour packed in 5kg, 25kg and 50kg bags for resellers.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="page">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          Sustainable and innovative agriculture
        </p>
        <div className="mt-3 grid gap-8 lg:grid-cols-2">
          <h2 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
            Innovative solutions for agriculture, crop growth and staple foods.
          </h2>
          <p className="leading-7 text-foreground/70">
            From the field at Akuse Junction to your shop or kitchen, Riosap Farms focuses on
            maize, rice and processed foodstuffs you can order in bulk.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-black/5 bg-background p-7"
            >
              <service.icon className="size-10 text-brand" />
              <h3 className="font-heading mt-4 text-xl font-bold text-brand-dark">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">{service.body}</p>
            </article>
          ))}
        </div>
        <Link href="/services" className="mt-8 inline-block text-sm font-bold text-brand hover:underline">
          View all services →
        </Link>
      </div>
    </section>
  );
}
