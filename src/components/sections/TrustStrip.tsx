import { Anchor, Compass, FileCheck2, Ship } from "lucide-react";
import type { SiteContent, TrustItem } from "@/content/types";

interface TrustStripProps {
  content: SiteContent;
}

function TrustIcon({ icon }: { icon: TrustItem["icon"] }) {
  const props = {
    className: "h-5 w-5 text-[#D4B27A]",
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

/**
 * Slim single-band trust strip (no per-item boxes).
 * Mobile: compact 2x2 (titles only). Desktop: 4 columns separated by hairlines.
 */
export function TrustStrip({ content }: TrustStripProps) {
  return (
    <section
      aria-label={content.trustStrip.ariaLabel}
      className="bg-[#0B0F14] pb-10 pt-8 min-[390px]:pt-9 sm:pb-14 sm:pt-11 lg:pb-16 lg:pt-12"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <div className="rounded-[14px] border border-white/10 bg-[#121B26]/75 px-4 py-5 sm:px-6 sm:py-6">
          <ul className="grid grid-cols-2 gap-x-3 gap-y-4 lg:grid-cols-4 lg:gap-0">
            {content.trustStrip.items.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2.5 sm:gap-3.5 lg:border-s lg:border-white/10 lg:ps-6 lg:first:border-s-0 lg:first:ps-0"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4B27A]/30 sm:h-10 sm:w-10">
                  <TrustIcon icon={item.icon} />
                </span>
                <div className="min-w-0">
                  <p className="text-[13.5px] font-bold leading-snug text-[#F5F6F7] sm:text-[14.5px]">
                    {item.title}
                  </p>
                  <p className="mt-0.5 hidden text-[12.5px] leading-snug text-[#A7B0BC] sm:block">
                    {item.subtitle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
