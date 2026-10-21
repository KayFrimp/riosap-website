const quotes = [
  {
    name: "Ama Boateng",
    role: "Caterer, Accra",
    quote:
      "The 50kg rice bags keep my kitchen running. Quality is consistent and ordering on WhatsApp is easy.",
  },
  {
    name: "Kwame Mensah",
    role: "Retail shop, Koforidua",
    quote:
      "Gari and kokonte sell fast in my shop. Bulk discounts make restocking worthwhile.",
  },
  {
    name: "Efua Sarpong",
    role: "Restaurant owner",
    quote:
      "Reliable farm produce and clear prices. Payment on order keeps everything straightforward.",
  },
];

export default function Testimonials() {
  return (
    <section className="page py-14 sm:py-20">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-brand">
        Testimonials
      </p>
      <h2 className="font-heading mt-2 text-center text-3xl font-bold text-brand-dark sm:text-4xl">
        Trusted by kitchens and shops
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quotes.map((item) => (
          <blockquote key={item.name} className="rounded-3xl bg-white p-7 shadow-md ring-1 ring-black/5">
            <p className="text-sm leading-7 text-foreground/75">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-5">
              <p className="font-heading font-bold text-brand-dark">{item.name}</p>
              <p className="text-xs text-foreground/55">{item.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-foreground/45">
        Names and quotes are placeholders until customer reviews are collected.
      </p>
    </section>
  );
}
