import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-deeper text-white">
      <div className="page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Riosap Farms logo"
              width={48}
              height={48}
              className="size-12 rounded-full object-cover"
            />
            <p className="font-heading text-lg font-bold">Riosap Farms</p>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/80">
            {site.tagline} from our maize and rice farms at {site.location}. Perfect for{" "}
            {site.customers.toLowerCase()}.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Wholesale
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Local Rice</li>
            <li>Gari</li>
            <li>Kokonte Flour</li>
            <li>Maize &amp; rice produce</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {site.location}, {site.region}
            </li>
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="size-4" />
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="size-4" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 pb-16 text-center text-xs text-white/60 sm:pb-[max(1rem,env(safe-area-inset-bottom))]">
        © 2026 Riosap Farms. All rights reserved.
      </div>
    </footer>
  );
}
