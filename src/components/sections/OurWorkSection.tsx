import { ClipboardCheck, Container, PackageOpen, Truck } from "lucide-react";
import type { SiteContent, WorkSlotItem } from "@/content/types";

interface OurWorkSectionProps {
  content: SiteContent;
}

function WorkSlotIcon({ icon }: { icon: WorkSlotItem["icon"] }) {
  const props = {
    className: "h-7 w-7 text-[#F4585E]",
    strokeWidth: 1.65,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "loading":
      return <PackageOpen {...props} />;
    case "truck":
      return <Truck {...props} />;
    case "cargo":
      return <Container {...props} />;
    case "operations":
      return <ClipboardCheck {...props} />;
  }
}

export function OurWorkSection({ content }: OurWorkSectionProps) {
  return (
    <section
      id="our-work"
      aria-labelledby="our-work-heading"
      className="scroll-mt-20 bg-[#0B0F14] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <div className="max-w-[680px]">
          <p className="text-[13px] font-bold text-[#F4585E] sm:text-[14px]">
            {content.ourWork.eyebrow}
          </p>
          <h2
            id="our-work-heading"
            className="mt-2 text-[26px] font-extrabold leading-[1.28] text-[#F5F6F7] sm:text-[32px] lg:text-[36px]"
          >
            {content.ourWork.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.75] text-[#A7B0BC] sm:text-[16px]">
            {content.ourWork.description}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {content.ourWork.slots.map((slot) => (
            <article
              key={slot.id}
              className="group flex flex-col overflow-hidden rounded-[14px] border border-white/10 bg-[#151F2B] transition-colors duration-200 hover:border-[#B51219]/45 hover:bg-[#192533]"
            >
              {/* Architectural Visual Slot ready for future authentic field photography */}
              <div
                className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-white/10 bg-[#0E151D]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              >
                {/* Restrained crimson architectural corner marks */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-3 start-3 h-3 w-3 border-t-2 border-s-2 border-[#B51219]/60"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3 end-3 h-3 w-3 border-b-2 border-e-2 border-[#B51219]/60"
                />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#151F2B] shadow-[0_8px_22px_rgba(0,0,0,0.45)]">
                  <WorkSlotIcon icon={slot.icon} />
                </div>

                <span className="absolute bottom-3 start-3 rounded-full border border-white/12 bg-[#0B0F14]/85 px-2.5 py-0.5 text-[11.5px] font-semibold text-[#F5F6F7]">
                  {slot.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[18px] font-bold text-[#F5F6F7]">
                  {slot.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#A7B0BC]">
                  {slot.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-[13px] leading-[1.6] text-[#A7B0BC]">
          {content.ourWork.fieldNote}
        </p>
      </div>
    </section>
  );
}
