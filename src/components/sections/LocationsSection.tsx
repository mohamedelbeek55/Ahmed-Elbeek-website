import Image from "next/image";
import { Compass, MapPin } from "lucide-react";
import type { SiteContent } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface LocationsSectionProps {
  content: SiteContent;
}

export function LocationsSection({ content }: LocationsSectionProps) {
  const featured = content.locations.items.find((l) => l.featured) ?? content.locations.items[0];
  const secondary = content.locations.items.filter((l) => l.id !== featured.id);

  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="scroll-mt-20 border-y border-white/10 bg-[#121B26] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow={content.locations.eyebrow}
            heading={content.locations.heading}
            headingId="locations-heading"
            description={content.locations.description}
          />
        </RevealOnScroll>

        {/* Editorial Asymmetric Grid: Large Featured Al-Awja Card + Two Compact Sea-Port Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:mt-10 lg:grid-cols-12 lg:gap-6">
          {/* Featured Al-Awja Land Port Card */}
          <RevealOnScroll className="lg:col-span-7">
            <article className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#151F2B] transition-colors duration-200 hover:border-[#B51219]/45 hover:bg-[#192533]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B0F14] lg:aspect-[16/11]">
                <Image
                  src={featured.imageSrc}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  style={{ objectPosition: featured.objectPosition }}
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/90 via-[#0B0F14]/22 to-transparent"
                />
                <span className="absolute bottom-3.5 start-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#B51219] px-3.5 py-1 text-[12.5px] font-bold text-white shadow">
                  <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                  <span>{featured.typeBadge}</span>
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                <h3 className="text-[20px] font-extrabold text-[#F5F6F7] sm:text-[22px]">
                  {featured.name}
                </h3>
                <p className="mt-2 max-w-[54ch] text-[15px] leading-[1.7] text-[#A7B0BC]">
                  {featured.role}
                </p>
              </div>
            </article>
          </RevealOnScroll>

          {/* Secondary Sea Ports Stack (Alexandria & Damietta) */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {secondary.map((loc, index) => (
              <RevealOnScroll key={loc.id} delayMs={(index + 1) * 75} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#151F2B] transition-colors duration-200 hover:border-[#B51219]/45 hover:bg-[#192533] lg:flex-row">
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#0B0F14] lg:aspect-auto lg:w-[44%]">
                    <Image
                      src={loc.imageSrc}
                      alt={loc.imageAlt}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 22vw"
                      style={{ objectPosition: loc.objectPosition }}
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/88 via-[#0B0F14]/20 to-transparent"
                    />
                    <span className="absolute bottom-3 start-3 inline-flex items-center gap-1.5 rounded-full border border-[#D4B27A]/40 bg-[#0B0F14]/88 px-3 py-1 text-[12px] font-bold text-[#D4B27A] backdrop-blur-sm">
                      <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                      <span>{loc.typeBadge}</span>
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-center p-5">
                    <h3 className="text-[19px] font-bold text-[#F5F6F7]">
                      {loc.name}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.7] text-[#A7B0BC]">
                      {loc.role}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {content.locations.secondaryPorts && content.locations.secondaryPorts.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {content.locations.secondaryPorts.map((port, index) => (
              <RevealOnScroll key={port.id} delayMs={90 + index * 70}>
                <article className="group flex h-full flex-col justify-between rounded-[16px] border border-white/10 bg-[#151F2B] p-5 transition-colors duration-200 hover:border-[#B51219]/45 hover:bg-[#192533] sm:p-6">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[19px] font-bold text-[#F5F6F7] sm:text-[20px]">
                        {port.name}
                      </h3>
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#D4B27A]/40 bg-[#0B0F14]/88 px-3 py-1 text-[12px] font-bold text-[#D4B27A]">
                        <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                        <span>{port.typeBadge}</span>
                      </span>
                    </div>
                    <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[#A7B0BC] sm:text-[15px]">
                      {port.role}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        )}

        <RevealOnScroll delayMs={160}>
          <div className="mt-6 flex items-start gap-3 rounded-[14px] border border-white/10 bg-[#151F2B] p-4 sm:items-center sm:px-6">
            <Compass
              className="mt-0.5 h-5 w-5 shrink-0 text-[#D4B27A] sm:mt-0"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <p className="text-[14px] leading-[1.65] text-[#A7B0BC] sm:text-[15px]">
              {content.locations.flexibilityNote}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
