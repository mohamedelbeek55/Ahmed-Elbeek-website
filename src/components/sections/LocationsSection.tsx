import Image from "next/image";
import { Compass, MapPin } from "lucide-react";
import type { SiteContent } from "@/content/types";

interface LocationsSectionProps {
  content: SiteContent;
}

export function LocationsSection({ content }: LocationsSectionProps) {
  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="scroll-mt-20 border-y border-white/10 bg-[#121B26] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-bold text-[#F4585E] sm:text-[14px]">
            {content.locations.eyebrow}
          </p>
          <h2
            id="locations-heading"
            className="mt-2 text-[26px] font-extrabold leading-[1.28] text-[#F5F6F7] sm:text-[32px] lg:text-[36px]"
          >
            {content.locations.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.75] text-[#A7B0BC] sm:text-[16px]">
            {content.locations.description}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {content.locations.items.map((loc) => (
            <article
              key={loc.id}
              className={`group flex flex-col overflow-hidden rounded-[14px] border border-white/10 bg-[#151F2B] transition-colors duration-200 hover:border-[#B51219]/45 hover:bg-[#192533] ${
                loc.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B0F14]">
                <Image
                  src={loc.imageSrc}
                  alt={loc.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  style={{ objectPosition: loc.objectPosition }}
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                {/* Bottom twilight scrim protecting badge legibility and darkening extreme bottom edge */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/90 via-[#0B0F14]/22 to-transparent"
                />
                <span
                  className={`absolute bottom-3 start-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-bold shadow ${
                    loc.featured
                      ? "border border-[#D4B27A]/40 bg-gradient-to-b from-[#CF1921] to-[#980D13] text-white"
                      : "border border-[#D4B27A]/35 bg-[#0B0F14]/88 text-[#D4B27A] backdrop-blur-sm"
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                  <span>{loc.typeBadge}</span>
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-[19px] font-bold text-[#F5F6F7] sm:text-[20px]">
                  {loc.name}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#A7B0BC] sm:text-[15px]">
                  {loc.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-[14px] border border-white/10 bg-[#151F2B] p-4 sm:items-center sm:px-6">
          <Compass
            className="mt-0.5 h-5 w-5 shrink-0 text-[#F4585E] sm:mt-0"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <p className="text-[14px] leading-[1.65] text-[#A7B0BC] sm:text-[15px]">
            {content.locations.flexibilityNote}
          </p>
        </div>
      </div>
    </section>
  );
}
