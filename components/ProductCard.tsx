"use client";

import Image from "next/image";
import { useState } from "react";
import { formatCedis, orderMessage, type Product } from "@/data/products";
import { waLink } from "@/lib/site";

export default function ProductCard({ product }: { product: Product }) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const size = product.sizes[sizeIndex];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5">
      <div className="relative h-52">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {size.discountPercent ? (
          <span className="absolute top-3 right-3 rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-white">
            {size.discountPercent}% OFF
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-xl font-bold text-brand-dark">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-foreground/70">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.sizes.map((option, i) => (
            <button
              key={option.label}
              type="button"
              onClick={() => setSizeIndex(i)}
              className={`min-h-11 rounded-full px-3 text-xs font-bold transition ${
                i === sizeIndex
                  ? "bg-brand text-white"
                  : "bg-brand-cream text-brand-dark hover:bg-brand-mint"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="mt-4 font-heading text-2xl font-extrabold text-brand-orange">
          {formatCedis(size.price)}
        </p>
        <a
          href={waLink(orderMessage(product, size))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-4 text-sm font-bold text-white transition hover:bg-brand-dark"
        >
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}
