import { Anchor, Compass, FileCheck2, Ship } from "lucide-react";
import type { SiteContent, TrustItem } from "@/content/types";

interface TrustStripProps {
  content: SiteContent;
}

function TrustIcon({ icon }: { icon: TrustItem["icon"] }) {
  const props = {
    className: "h-5 w-5 text-[#F4585E]",
    strokeWidth: 1.75,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "ports":
      return <Anchor {...props} />;
    case "trade":
      return <Ship {...props} />;
    case "clearance":
      return <FileCheck2 {...props} />;
    case "followup":
      return <Compass {...props} />;
  }
}

export function TrustStrip({ content }: TrustStripProps) {
  return (
    <section
      aria-label={content.trustStrip.ariaLabel}
      className="border-t border-white/10 bg-[#0F1620] py-5 sm:py-6"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {content.trustStrip.items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3.5 rounded-[12px] border border-white/10 bg-[#151F2B]/80 px-4 py-3.5"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-[#D4B27A]/25 bg-[#0B0F14]/80">
                <TrustIcon icon={item.icon} />
              </span>
              <div className="min-w-0">
                <p className="text-[14.5px] font-bold leading-snug text-[#F5F6F7]">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-[#A7B0BC]">
                  {item.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
