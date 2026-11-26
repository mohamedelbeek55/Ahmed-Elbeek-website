import { COMPANY_CONTACT } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface FloatingWhatsAppProps {
  content: SiteContent;
}

/**
 * Persistent WhatsApp Floating Action Button.
 * Always remains visible across the entire browsing experience.
 * Uses #25D366 recognizable WhatsApp green with #0B0F14 high-contrast ink (9.69:1).
 */
export function FloatingWhatsApp({ content }: FloatingWhatsAppProps) {
  return (
    <a
      href={COMPANY_CONTACT.getWhatsAppUrl(content.locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={content.floatingWhatsapp.ariaLabel}
      className="fixed bottom-[calc(16px+env(safe-area-inset-bottom))] end-4 z-35 inline-flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#25D366] text-[#0B0F14] shadow-[0_12px_28px_rgba(0,0,0,0.58)] ring-1 ring-white/25 transition-transform duration-200 hover:scale-[1.03] hover:bg-[#20BD5A] lg:bottom-6 lg:end-6 lg:h-12 lg:w-auto lg:gap-2 lg:px-4"
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0 lg:h-5 lg:w-5" strokeWidth={2.1} />
      <span className="hidden text-[14px] font-extrabold lg:inline">
        {content.floatingWhatsapp.label}
      </span>
    </a>
  );
}
