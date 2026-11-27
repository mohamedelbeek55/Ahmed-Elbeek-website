import { Mail, Phone } from "lucide-react";
import { COMPANY_CONTACT, COMPANY_DETAILS } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { TrackedLink } from "@/components/ui/TrackedLink";

interface FooterProps {
  content: SiteContent;
}

export function Footer({ content }: FooterProps) {
  const isRtl = content.dir === "rtl";
  const footerMeta: Array<{ label: string; value: string; ltr?: boolean }> = [];

  if (COMPANY_DETAILS.commercialRegister) {
    footerMeta.push({
      label: content.contact.detailsLabels.commercialRegister,
      value: COMPANY_DETAILS.commercialRegister,
      ltr: true,
    });
  }
  if (COMPANY_DETAILS.taxCard) {
    footerMeta.push({
      label: content.contact.detailsLabels.taxCard,
      value: COMPANY_DETAILS.taxCard,
      ltr: true,
    });
  }
  if (COMPANY_DETAILS.importersRegister) {
    footerMeta.push({
      label: content.contact.detailsLabels.importersRegister,
      value: COMPANY_DETAILS.importersRegister,
      ltr: true,
    });
  }
  if (COMPANY_DETAILS.address) {
    const addr = isRtl ? COMPANY_DETAILS.address.ar : COMPANY_DETAILS.address.en;
    if (addr) footerMeta.push({ label: content.contact.detailsLabels.address, value: addr });
  }
  if (COMPANY_DETAILS.workingHours) {
    const hrs = isRtl ? COMPANY_DETAILS.workingHours.ar : COMPANY_DETAILS.workingHours.en;
    if (hrs) footerMeta.push({ label: content.contact.detailsLabels.workingHours, value: hrs });
  }

  return (
    <footer className="border-t border-white/10 bg-[#0B0F14] pt-12 pb-24 lg:pb-12">
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-4 lg:col-span-5">
            <BrandLogo
              title={content.brand.title}
              subtitle={content.brand.subtitle}
              alt={content.brand.logoAlt}
              locale={content.locale}
              variant="footer"
            />
            <p className="max-w-[44ch] text-[14.5px] leading-[1.75] text-[#A7B0BC]">
              {content.footer.summary}
            </p>
            {footerMeta.length > 0 && (
              <ul className="space-y-1.5 pt-1 text-[13px] text-[#A7B0BC]">
                {footerMeta.map((item) => (
                  <li key={item.label}>
                    <span className="font-semibold text-[#D4B27A]">{item.label}: </span>
                    {item.ltr ? <bdi dir="ltr">{item.value}</bdi> : item.value}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-[14px] font-bold text-[#F4585E]">
              {content.footer.navigationTitle}
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
              {content.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-[14.5px] font-medium text-[#A7B0BC] transition-colors hover:text-[#F5F6F7]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[14px] font-bold text-[#F4585E]">
              {content.footer.contactTitle}
            </h3>
            <ul className="mt-3 space-y-1 text-[14.5px]">
              <li>
                <TrackedLink
                  href={COMPANY_CONTACT.primaryPhoneTel}
                  eventName="phone_click"
                  eventData={{
                    locale: content.locale,
                    location: "footer",
                    target: COMPANY_CONTACT.primaryPhoneDisplay,
                  }}
                  className="inline-flex min-h-[44px] items-center gap-2.5 text-[#F5F6F7] tabular-nums transition-colors hover:text-[#F4585E]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
                  <bdi dir="ltr">{COMPANY_CONTACT.primaryPhoneDisplay}</bdi>
                </TrackedLink>
              </li>
              <li>
                <TrackedLink
                  href={COMPANY_CONTACT.secondaryPhoneTel}
                  eventName="phone_click"
                  eventData={{
                    locale: content.locale,
                    location: "footer",
                    target: COMPANY_CONTACT.secondaryPhoneDisplay,
                  }}
                  className="inline-flex min-h-[44px] items-center gap-2.5 text-[#F5F6F7] tabular-nums transition-colors hover:text-[#F4585E]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
                  <bdi dir="ltr">{COMPANY_CONTACT.secondaryPhoneDisplay}</bdi>
                </TrackedLink>
              </li>
              <li>
                <TrackedLink
                  href={COMPANY_CONTACT.emailHref}
                  eventName="email_click"
                  eventData={{
                    locale: content.locale,
                    location: "footer",
                    target: COMPANY_CONTACT.email,
                  }}
                  className="inline-flex min-h-[44px] items-center gap-2.5 text-[#A7B0BC] transition-colors hover:text-[#F5F6F7]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
                  <bdi dir="ltr">{COMPANY_CONTACT.email}</bdi>
                </TrackedLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center lg:pe-36">
          <p className="text-[13px] text-[#A7B0BC]">
            {content.footer.copyright}
          </p>

          <LanguageSwitch
            locale={content.locale}
            label={content.header.switchLabel}
            surfaceClassName="bg-[#151F2B]"
          />
        </div>
      </div>
    </footer>
  );
}
