import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="bg-brand text-white text-sm">
      <div className="page flex h-10 flex-nowrap items-center justify-center gap-5 overflow-hidden sm:justify-between">
        <p className="hidden shrink-0 font-medium lg:block">
          Growing maize and rice. Supplying Ghana&apos;s kitchens.
        </p>
        <div className="flex min-w-0 items-center gap-5 overflow-hidden">
          <span className="hidden items-center gap-1.5 whitespace-nowrap sm:inline-flex">
            <MapPin className="size-3.5 shrink-0" />
            {site.location}
          </span>
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-1.5 whitespace-nowrap hover:text-brand-yellow lg:inline-flex"
          >
            <Mail className="size-3.5 shrink-0" />
            {site.email}
          </a>
          <a
            href={site.phones[0].href}
            className="inline-flex items-center gap-1.5 whitespace-nowrap hover:text-brand-yellow"
          >
            <Phone className="size-3.5 shrink-0" />
            {site.phones[0].label}
          </a>
        </div>
      </div>
    </div>
  );
}
