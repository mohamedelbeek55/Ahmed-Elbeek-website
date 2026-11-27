import type { SiteContent } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface ProcessSectionProps {
  content: SiteContent;
}

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-20 border-t border-white/10 bg-[#101721] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow={content.process.eyebrow}
            heading={content.process.heading}
            headingId="process-heading"
            description={content.process.description}
          />
        </RevealOnScroll>

        {/* Mobile Vertical Timeline + Desktop Horizontal 4-Step Timeline */}
        <div className="relative mt-8 lg:mt-12">
          {/* Desktop horizontal connector line linking step nodes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-6 hidden h-[2px] bg-gradient-to-r from-[#D4B27A]/15 via-[#D4B27A]/55 to-[#D4B27A]/15 lg:block"
          />

          <ol className="relative space-y-6 before:absolute before:bottom-6 before:start-[23px] before:top-6 before:w-[2px] before:bg-gradient-to-b before:from-[#D4B27A]/55 before:via-[#D4B27A]/35 before:to-[#D4B27A]/10 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0 lg:before:hidden">
            {content.process.steps.map((step, index) => (
              <li key={step.number} className="relative">
                <RevealOnScroll delayMs={index * 75} className="h-full">
                  <div className="flex h-full items-start gap-4 lg:flex-col lg:gap-5">
                    {/* Step Node */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4B27A]/45 bg-[#151F2B] text-[15px] font-extrabold text-[#D4B27A] tabular-nums shadow-[0_8px_20px_rgba(0,0,0,0.45)] ring-4 ring-[#101721]">
                      {step.number}
                    </div>

                    {/* Step Card */}
                    <div className="flex-1 rounded-[14px] border border-white/10 bg-[#151F2B] p-5 lg:w-full lg:p-6">
                      <h3 className="text-[18px] font-bold leading-snug text-[#F5F6F7]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-[1.7] text-[#A7B0BC] sm:text-[15px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
