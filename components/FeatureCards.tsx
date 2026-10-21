import { ArrowUpRight, Leaf, Truck, Wallet } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "Farm Fresh Staples",
    body: "Maize and rice grown on our land, processed into foodstuffs you can stock with confidence.",
    href: "/about",
    className: "bg-brand-dark text-white",
    icon: Leaf,
  },
  {
    title: "Wholesale Prices",
    body: "5kg, 25kg and 50kg packs with bulk discounts that work for shops, caterers and restaurants.",
    href: "/products",
    className: "bg-brand-yellow text-brand-dark",
    icon: Wallet,
  },
  {
    title: "Fast Delivery",
    body: "Order by call or WhatsApp. We deliver via Uber, Yango and Bolt — fees apply.",
    href: "/contact",
    className: "bg-brand-mint text-brand-dark",
    icon: Truck,
  },
];

export default function FeatureCards() {
  return (
    <section className="relative z-10 -mt-8 md:-mt-16">
      <div className="page grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className={`rounded-2xl p-5 shadow-xl sm:p-7 ${card.className}`}>
            <card.icon className="mb-4 size-8" />
            <h3 className="font-heading text-xl font-bold">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 opacity-90">{card.body}</p>
            <Link
              href={card.href}
              className="mt-5 inline-flex items-center gap-1 text-sm font-bold underline-offset-4 hover:underline"
            >
              Discover More <ArrowUpRight className="size-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
