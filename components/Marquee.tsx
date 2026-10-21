const items = ["Local", "Natural", "Fresh", "Wholesale", "Farm Grown", "Bulk Ready"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-brand-dark py-5">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-heading text-lg font-bold uppercase tracking-wide text-white/90 sm:text-2xl"
          >
            {item} <span className="text-brand-yellow">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
