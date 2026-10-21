const stats = [
  { value: "Maize & Rice", label: "Crops we grow" },
  { value: "3 Staples", label: "Wholesale products" },
  { value: "Akuse Junction", label: "Farm location" },
  { value: "Same-day*", label: "Call to arrange delivery" },
];

export default function StatsBar() {
  return (
    <section className="bg-brand py-12 text-white">
      <div className="page grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-heading text-2xl font-extrabold sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
