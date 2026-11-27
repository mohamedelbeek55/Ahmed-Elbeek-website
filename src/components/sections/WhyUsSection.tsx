import { MessageSquare, RefreshCw, ShieldCheck, Target } from "lucide-react";
import type { SiteContent, WhyUsItem } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface WhyUsSectionProps {
  content: SiteContent;
}

function WhyUsIcon({ icon }: { icon: WhyUsItem["icon"] }) {
  const props = {
    className: "h-7 w-7 text-[#D4B27A]",
    strokeWidth: 1.65,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "target":
      return <Target {...props} />;
    case "message":
      return <MessageSquare {...props} />;
    case "workflow":
      return <RefreshCw {...props} />;
    case "shield":
      return <ShieldCheck {...props} />;
  }
}

export function WhyUsSection({ content }: WhyUsSectionProps) {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="scroll-mt-20 border-t border-white/10 bg-[#0B0F14] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow={content.whyUs.eyebrow}
            heading={content.whyUs.heading}
            headingId="why-us-heading"
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
            {content.whyUs.items.map((item) => (
              <article
                key={item.id}
                className="flex flex-col bg-[#151F2B] p-6 transition-colors duration-200 hover:bg-[#192533]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#D4B27A]/25 bg-[#0B0F14]/70">
                  <WhyUsIcon icon={item.icon} />
                </div>

                <h3 className="mt-4 text-[17.5px] font-bold leading-snug text-[#F5F6F7] sm:text-[18px]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#A7B0BC]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
