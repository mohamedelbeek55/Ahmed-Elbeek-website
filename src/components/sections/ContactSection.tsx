import { Mail, Phone } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface ContactSectionProps {
  content: SiteContent;
}

export function ContactSection({ content }: ContactSectionProps) {
  const isRtl = content.dir === "rtl";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 bg-[#0B0F14] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#151F2B] p-6 sm:p-8 lg:p-10"
          style={{
            backgroundImage: isRtl
              ? "radial-gradient(460px circle at 92% 18%, rgba(181, 18, 25, 0.17), transparent 70%)"
              : "radial-gradient(460px circle at 8% 18%, rgba(181, 18, 25, 0.17), transparent 70%)",
          }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-[520px]">
              <h2
                id="contact-heading"
                className="text-[26px] font-extrabold leading-[1.25] text-[#F5F6F7] sm:text-[30px]"
              >
                {content.contact.heading}
              </h2>
              <p className="mt-2.5 text-[15px] leading-[1.7] text-[#A7B0BC] sm:text-[16px]">
                {content.contact.description}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={COMPANY_CONTACT.getWhatsAppUrl(content.locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-[10px] bg-[#B51219] px-6 text-[15px] font-bold text-white shadow-[0_12px_28px_-6px_rgba(181,18,25,0.6)] transition-colors hover:bg-[#9B0F15] sm:w-auto"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                <span>{content.contact.whatsappCta}</span>
              </a>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={COMPANY_CONTACT.primaryPhoneTel}
              aria-label={`${content.contact.phoneLabel}: ${COMPANY_CONTACT.primaryPhoneDisplay}`}
              className="flex min-h-[50px] items-center justify-between gap-3 rounded-[12px] border border-white/12 bg-[#121B26]/90 px-4 py-3 text-[#F5F6F7] transition-colors hover:border-white/30 hover:bg-[#192533]"
            >
              <span className="inline-flex items-center gap-2.5 text-[14px] text-[#A7B0BC]">
                <Phone className="h-4 w-4 shrink-0 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
                <span>{content.contact.phoneLabel}</span>
              </span>
              <bdi dir="ltr" className="text-[15px] font-bold tabular-nums text-[#F5F6F7]">
                {COMPANY_CONTACT.primaryPhoneDisplay}
              </bdi>
            </a>

            <a
              href={COMPANY_CONTACT.secondaryPhoneTel}
              aria-label={`${content.contact.phoneLabel}: ${COMPANY_CONTACT.secondaryPhoneDisplay}`}
              className="flex min-h-[50px] items-center justify-between gap-3 rounded-[12px] border border-white/12 bg-[#121B26]/90 px-4 py-3 text-[#F5F6F7] transition-colors hover:border-white/30 hover:bg-[#192533]"
            >
              <span className="inline-flex items-center gap-2.5 text-[14px] text-[#A7B0BC]">
                <Phone className="h-4 w-4 shrink-0 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
                <span>{content.contact.phoneLabel}</span>
              </span>
              <bdi dir="ltr" className="text-[15px] font-bold tabular-nums text-[#F5F6F7]">
                {COMPANY_CONTACT.secondaryPhoneDisplay}
              </bdi>
            </a>

            <a
              href={COMPANY_CONTACT.emailHref}
              aria-label={`${content.contact.emailLabel}: ${COMPANY_CONTACT.email}`}
              className="flex min-h-[50px] min-w-0 items-center justify-between gap-3 rounded-[12px] border border-white/12 bg-[#121B26]/90 px-4 py-3 text-[#F5F6F7] transition-colors hover:border-white/30 hover:bg-[#192533] sm:col-span-2 lg:col-span-1"
            >
              <span className="inline-flex shrink-0 items-center gap-2.5 text-[14px] text-[#A7B0BC]">
                <Mail className="h-4 w-4 shrink-0 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
                <span>{content.contact.emailLabel}</span>
              </span>
              <bdi dir="ltr" className="truncate text-[14.5px] font-semibold text-[#F5F6F7]">
                {COMPANY_CONTACT.email}
              </bdi>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
