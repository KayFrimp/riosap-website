import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call, WhatsApp or visit Riosap Farms at ${site.location}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in touch"
        subtitle="Call, WhatsApp or send a message. We take orders with payment on confirmation."
      />
      <section className="page grid gap-10 py-14 sm:py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold text-brand-dark">Visit &amp; call</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="size-5 text-brand" />
              {site.location}, {site.region}
            </li>
            {site.phones.map((phone) => (
              <li key={phone.href} className="flex gap-3">
                <Phone className="size-5 text-brand" />
                <a href={phone.href} className="font-semibold hover:text-brand">
                  {phone.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <Mail className="size-5 text-brand" />
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
          </ul>
          <a
            href={waLink("Hello Riosap, I would like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white"
          >
            Chat on WhatsApp
          </a>
          <p className="mt-4 text-sm text-foreground/65">
            Delivery: {site.delivery}. {site.terms}.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl ring-1 ring-black/10">
            <iframe
              title="Map of Akuse Junction, Somanya"
              src={site.mapEmbedUrl}
              className="h-56 w-full border-0 sm:h-72"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h2 className="font-heading mb-4 text-2xl font-bold text-brand-dark">
            Send a WhatsApp message
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
