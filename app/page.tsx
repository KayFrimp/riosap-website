import AboutTeaser from "@/components/AboutTeaser";
import CTABanner from "@/components/CTABanner";
import FeatureCards from "@/components/FeatureCards";
import GrassDivider from "@/components/GrassDivider";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import ServicesPreview from "@/components/ServicesPreview";
import StatsBar from "@/components/StatsBar";
import Testimonials from "@/components/Testimonials";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <AboutTeaser />
      <section className="bg-brand-cream/60 py-20">
        <div className="page">
          <SectionHeading
            eyebrow="Shop wholesale"
            title="Featured foodstuffs"
            description="Order local rice, gari and kokonte flour in 5kg, 25kg or 50kg bags."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <GrassDivider />
      <ServicesPreview />
      <StatsBar />
      <Marquee />
      <Testimonials />
      <CTABanner />
    </>
  );
}
