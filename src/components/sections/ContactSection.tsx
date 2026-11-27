import { Mail, Phone } from "lucide-react";
import { COMPANY_CONTACT, COMPANY_DETAILS } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { ShareSaveActions } from "@/components/ui/ShareSaveActions";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface ContactSectionProps {
  content: SiteContent;
}

export function ContactSection({ content }: ContactSectionProps) {
  const isRtl = content.dir === "rtl";

  // Build populated optional company details without inventing empty placeholders
  const populatedDetails: Array<{ label: string; value: string; ltr?: boolean }> = [];
  if (COMPANY_DETAILS.commercialRegister) {
    populatedDetails.push({
      label: content.contact.detailsLabels.commercialRegister,
      value: COMPANY_DETAILS.commercialRegister,
      ltr: true,
    });
  }
  if (COMPANY_DETAILS.taxCard) {
    populatedDetails.push({
      label: content.contact.detailsLabels.taxCard,
      value: COMPANY_DETAILS.taxCard,
      ltr: true,
    });
  }
  if (COMPANY_DETAILS.importersRegister) {
    populatedDetails.push({
      label: content.contact.detailsLabels.importersRegister,
      value: COMPANY_DETAILS.importersRegister,
      ltr: true,
    });
  }
  if (COMPANY_DETAILS.address) {
    const addr = isRtl ? COMPANY_DETAILS.address.ar : COMPANY_DETAILS.address.en;
    if (addr) {
      populatedDetails.push({
        label: content.contact.detailsLabels.address,
        value: addr,
      });
    }
  }
  if (COMPANY_DETAILS.workingHours) {
    const hrs = isRtl ? COMPANY_DETAILS.workingHours.ar : COMPANY_DETAILS.workingHours.en;
    if (hrs) {
      populatedDetails.push({
        label: content.contact.detailsLabels.workingHours,
        value: hrs,
      });
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-white/10 bg-[#101721] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div
            className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#151F2B] p-6 sm:p-8 lg:p-10"
            style={{
              backgroundImage: isRtl
                ? "radial-gradient(460px circle at 92% 18%, rgba(212, 178, 122, 0.08), transparent 70%)"
                : "radial-gradient(460px circle at 8% 18%, rgba(212, 178, 122, 0.08), transparent 70%)",
            }}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              <div className="max-w-[540px]">
                <h2
                  id="contact-heading"
                  className="text-[26px] font-extrabold leading-[1.25] text-[#F5F6F7] sm:text-[32px] lg:text-[36px]"
                >
                  {content.contact.heading}
                </h2>
                <div
                  aria-hidden="true"
                  className="mt-2.5 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#D4B27A] to-[#D4B27A]/15"
                />
                <p className="mt-3 text-[15px] leading-[1.7] text-[#A7B0BC] sm:text-[16px]">
                  {content.contact.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:min-w-[300px]">
                <TrackedLink
                  href={COMPANY_CONTACT.getWhatsAppUrl(content.locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  eventData={{ locale: content.locale, location: "contact" }}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-[10px] bg-[#B51219] px-6 text-[15px] font-bold text-white shadow-[0_12px_28px_-6px_rgba(181,18,25,0.62)] transition-colors hover:bg-[#9B0F15]"
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                  <span>{content.contact.whatsappCta}</span>
                </TrackedLink>

                <ShareSaveActions
                  locale={content.locale}
                  saveLabel={content.contact.saveContact}
                  shareLabel={content.contact.share}
                  copiedLabel={content.contact.shareCopied}
                  shareTitle={content.meta.title}
                  shareText={content.contact.shareText}
                  location="contact"
                />
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-3">
              <TrackedLink
                href={COMPANY_CONTACT.primaryPhoneTel}
                eventName="phone_click"
                eventData={{
                  locale: content.locale,
                  location: "contact",
                  target: COMPANY_CONTACT.primaryPhoneDisplay,
                }}
                aria-label={`${content.contact.phoneLabel}: ${COMPANY_CONTACT.primaryPhoneDisplay}`}
                className="flex min-h-[50px] items-center justify-between gap-3 rounded-[12px] border border-white/12 bg-[#121B26]/90 px-4 py-3 text-[#F5F6F7] transition-colors hover:border-white/30 hover:bg-[#192533]"
              >
                <span className="inline-flex items-center gap-2.5 text-[14px] text-[#A7B0BC]">
                  <Phone className="h-4 w-4 shrink-0 text-[#D4B27A]" strokeWidth={1.75} aria-hidden="true" />
                  <span>{content.contact.phoneLabel}</span>
                </span>
                <bdi dir="ltr" className="text-[15px] font-bold tabular-nums text-[#F5F6F7]">
                  {COMPANY_CONTACT.primaryPhoneDisplay}
                </bdi>
              </TrackedLink>

              <TrackedLink
                href={COMPANY_CONTACT.secondaryPhoneTel}
                eventName="phone_click"
                eventData={{
                  locale: content.locale,
                  location: "contact",
                  target: COMPANY_CONTACT.secondaryPhoneDisplay,
                }}
                aria-label={`${content.contact.phoneLabel}: ${COMPANY_CONTACT.secondaryPhoneDisplay}`}
                className="flex min-h-[50px] items-center justify-between gap-3 rounded-[12px] border border-white/12 bg-[#121B26]/90 px-4 py-3 text-[#F5F6F7] transition-colors hover:border-white/30 hover:bg-[#192533]"
              >
                <span className="inline-flex items-center gap-2.5 text-[14px] text-[#A7B0BC]">
                  <Phone className="h-4 w-4 shrink-0 text-[#D4B27A]" strokeWidth={1.75} aria-hidden="true" />
                  <span>{content.contact.phoneLabel}</span>
                </span>
                <bdi dir="ltr" className="text-[15px] font-bold tabular-nums text-[#F5F6F7]">
                  {COMPANY_CONTACT.secondaryPhoneDisplay}
                </bdi>
              </TrackedLink>

              <TrackedLink
                href={COMPANY_CONTACT.emailHref}
                eventName="email_click"
                eventData={{
                  locale: content.locale,
                  location: "contact",
                  target: COMPANY_CONTACT.email,
                }}
                aria-label={`${content.contact.emailLabel}: ${COMPANY_CONTACT.email}`}
                className="flex min-h-[50px] min-w-0 items-center justify-between gap-3 rounded-[12px] border border-white/12 bg-[#121B26]/90 px-4 py-3 text-[#F5F6F7] transition-colors hover:border-white/30 hover:bg-[#192533] sm:col-span-2 lg:col-span-1"
              >
                <span className="inline-flex shrink-0 items-center gap-2.5 text-[14px] text-[#A7B0BC]">
                  <Mail className="h-4 w-4 shrink-0 text-[#D4B27A]" strokeWidth={1.75} aria-hidden="true" />
                  <span>{content.contact.emailLabel}</span>
                </span>
                <bdi dir="ltr" className="truncate text-[14.5px] font-semibold text-[#F5F6F7]">
                  {COMPANY_CONTACT.email}
                </bdi>
              </TrackedLink>
            </div>

            {populatedDetails.length > 0 && (
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-[13px] font-bold text-[#D4B27A]">
                  {content.contact.companyDetailsHeading}
                </p>
                <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {populatedDetails.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[10px] border border-white/10 bg-[#121B26]/70 px-4 py-3"
                    >
                      <dt className="text-[12.5px] font-semibold text-[#A7B0BC]">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-[14px] font-bold text-[#F5F6F7] tabular-nums">
                        {item.ltr ? <bdi dir="ltr">{item.value}</bdi> : item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
