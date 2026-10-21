import type { Metadata } from "next";
import { Phone, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import PageHero from "@/components/PageHero";
import { products } from "@/data/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Wholesale price list for local rice, gari and kokonte flour from Riosap Farms.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Wholesale price list"
        subtitle="Perfect for retailers, caterers and restaurants. Select a bag size and order on WhatsApp."
      />
      <section className="page py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 grid gap-4 rounded-3xl bg-brand-cream p-6 md:grid-cols-2">
          <p className="flex items-start gap-3 text-sm text-brand-dark">
            <Truck className="mt-0.5 size-5 shrink-0" />
            <span>
              <strong>Delivery:</strong> {site.delivery}
            </span>
          </p>
          <p className="flex items-start gap-3 text-sm text-brand-dark">
            <Phone className="mt-0.5 size-5 shrink-0" />
            <span>
              <strong>Terms:</strong> {site.terms}. Call {site.phones[0].label} or{" "}
              {site.phones[1].label}.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
