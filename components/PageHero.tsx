type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="bg-brand-dark py-10 text-white sm:py-16">
      <div className="page">
        <h1 className="font-heading text-3xl font-bold tracking-tight break-words sm:text-5xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-white/80">{subtitle}</p> : null}
      </div>
    </section>
  );
}
