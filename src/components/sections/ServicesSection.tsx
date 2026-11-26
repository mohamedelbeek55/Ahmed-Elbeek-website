import { FileCheck2, Layers, PackageCheck, Truck } from "lucide-react";
import type { ServiceItem, SiteContent } from "@/content/types";

interface ServicesSectionProps {
  content: SiteContent;
}

function ServiceIcon({ icon }: { icon: ServiceItem["icon"] }) {
  const props = {
    className: "h-8 w-8 text-[#F4585E]",
    strokeWidth: 1.65,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "package":
      return <PackageCheck {...props} />;
    case "file":
      return <FileCheck2 {...props} />;
    case "truck":
      return <Truck {...props} />;
    case "layers":
      return <Layers {...props} />;
  }
}

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 bg-[#0B0F14] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <div className="max-w-[640px]">
          <p className="text-[13px] font-bold text-[#F4585E] sm:text-[14px]">
            {content.services.eyebrow}
          </p>
          <h2
            id="services-heading"
            className="mt-2 text-[26px] font-extrabold leading-[1.28] text-[#F5F6F7] sm:text-[32px] lg:text-[36px]"
          >
            {content.services.heading}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {content.services.items.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col rounded-[14px] border border-white/10 bg-[#151F2B] p-6 transition-colors duration-200 hover:border-[#B51219]/45 hover:bg-[#192533]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#B51219]/25 bg-[#0B0F14]/70">
                <ServiceIcon icon={service.icon} />
              </div>

              <h3 className="mt-5 text-[18.5px] font-bold leading-snug text-[#F5F6F7] sm:text-[19px]">
                {service.title}
              </h3>

              <p className="mt-2.5 text-[15px] leading-[1.7] text-[#A7B0BC]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
