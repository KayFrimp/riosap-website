export type ProductSize = {
  label: string;
  kg: number;
  price: number;
  discountPercent?: number;
};

export type Product = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  imageAlt: string;
  sizes: ProductSize[];
};

export const products: Product[] = [
  {
    id: "local-rice",
    name: "Local Rice",
    shortName: "Local Rice",
    description:
      "Clean, locally grown rice milled for everyday cooking. A staple for chop bars, restaurants and family packs.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Uncooked white rice in a bowl",
    sizes: [
      { label: "5kg Bag", kg: 5, price: 100 },
      { label: "25kg Bag", kg: 25, price: 450 },
      { label: "50kg Bag", kg: 50, price: 850, discountPercent: 15 },
    ],
  },
  {
    id: "gari",
    name: "Gari",
    shortName: "Gari",
    description:
      "Crisp, well-sieved gari processed for bulk buyers. Ideal for resellers and high-volume kitchens.",
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Yellow cassava flour in a bowl",
    sizes: [
      { label: "5kg Bag", kg: 5, price: 75 },
      { label: "25kg Bag", kg: 25, price: 350, discountPercent: 6.7 },
      { label: "50kg Bag", kg: 50, price: 600, discountPercent: 20 },
    ],
  },
  {
    id: "kokonte",
    name: "Kokonte Flour",
    shortName: "Kokonte Flour",
    description:
      "Smooth kokonte flour for traditional meals. Packed for caterers, chop bars and wholesale shops.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Brown flour in a wooden bowl",
    sizes: [
      { label: "5kg Bag", kg: 5, price: 50 },
      { label: "25kg Bag", kg: 25, price: 225, discountPercent: 10 },
      { label: "50kg Bag", kg: 50, price: 450, discountPercent: 10 },
    ],
  },
];

export const bulkFact =
  "1 bag (5kg) fills 18 margarine tins — ideal for resellers.";

export function formatCedis(amount: number) {
  return `GH₵${amount}`;
}

export function orderMessage(product: Product, size: ProductSize) {
  return `Hello Riosap, I'd like to order 1 x ${size.label} ${product.shortName} (${formatCedis(size.price)}).`;
}
