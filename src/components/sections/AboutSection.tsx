import type { SiteContent } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface AboutSectionProps {
  content: SiteContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-y border-white/10 bg-[#121B26] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow={content.about.eyebrow}
                heading={content.about.heading}
                headingId="about-heading"
                maxWidthClass="max-w-[660px]"
              />
              <div className="mt-5 space-y-3.5 text-[15px] leading-[1.78] text-[#A7B0BC] sm:text-[16px]">
                {content.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="max-w-[60ch]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="divide-y divide-white/10 rounded-[14px] border border-white/10 bg-[#151F2B]">
                {content.about.pillars.map((pillar) => (
                  <div key={pillar.label} className="p-5 sm:p-6">
                    <div className="flex items-center gap-2.5">
                      <span className="h-3.5 w-[3px] rounded-full bg-[#D4B27A]" aria-hidden="true" />
                      <h3 className="text-[14px] font-bold text-[#D4B27A]">
                        {pillar.label}
                      </h3>
                    </div>
                    <p className="mt-2 text-[15px] font-medium leading-[1.65] text-[#F5F6F7]">
                      {pillar.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
