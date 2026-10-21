export const site = {
  name: "Riosap Farms",
  tagline: "Premium Wholesale Foodstuffs",
  description:
    "Riosap Farms grows maize and rice and supplies local rice, gari and kokonte flour in bulk to retailers, caterers and restaurants from Akuse Junction, Somanya.",
  location: "Akuse Junction, Somanya",
  region: "Eastern Region, Ghana",
  email: "hello@riosapfarms.com",
  phones: [
    { label: "+233 24 460 9635", href: "tel:+233244609635", e164: "233244609635" },
    { label: "+233 20 819 0859", href: "tel:+233208190859", e164: "233208190859" },
  ],
  whatsappE164: "233244609635",
  delivery: "Uber, Yango & Bolt (fees apply)",
  terms: "Strictly no credit — payment on order",
  customers: "Retailers, caterers & restaurants",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Akuse%20Junction%20Somanya%20Ghana&t=&z=14&ie=UTF8&iwloc=&output=embed",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
] as const;
