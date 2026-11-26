import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface FooterProps {
  content: SiteContent;
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#0B0F14] pt-12 pb-24 lg:pb-12">
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Larger Executive Logo Crest Presentation */}
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
          </div>

          {/* Navigation Anchors */}
          <div className="lg:col-span-4">
            <h3 className="text-[14px] font-bold text-[#F4585E]">
              {content.footer.navigationTitle}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {content.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[36px] items-center text-[14.5px] font-medium text-[#A7B0BC] transition-colors hover:text-[#F5F6F7]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Summary */}
          <div className="lg:col-span-3">
            <h3 className="text-[14px] font-bold text-[#F4585E]">
              {content.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              <li>
                <a
                  href={COMPANY_CONTACT.primaryPhoneTel}
                  className="inline-flex min-h-[36px] items-center gap-2.5 text-[#F5F6F7] tabular-nums transition-colors hover:text-[#F4585E]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
                  <bdi dir="ltr">{COMPANY_CONTACT.primaryPhoneDisplay}</bdi>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONTACT.secondaryPhoneTel}
                  className="inline-flex min-h-[36px] items-center gap-2.5 text-[#F5F6F7] tabular-nums transition-colors hover:text-[#F4585E]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
                  <bdi dir="ltr">{COMPANY_CONTACT.secondaryPhoneDisplay}</bdi>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONTACT.emailHref}
                  className="inline-flex min-h-[36px] items-center gap-2.5 text-[#A7B0BC] transition-colors hover:text-[#F5F6F7]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
                  <bdi dir="ltr">{COMPANY_CONTACT.email}</bdi>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center lg:pe-36">
          <p className="text-[13px] text-[#A7B0BC]">
            {content.footer.copyright}
          </p>

          <div
            role="group"
            aria-label={content.header.switchLabel}
            className="inline-flex h-10 items-center rounded-[10px] border border-white/15 bg-[#151F2B] p-1 text-[12.5px] font-bold"
          >
            <Link
              href="/en"
              aria-current={content.locale === "en" ? "page" : undefined}
              className={`rounded-[7px] px-2.5 py-1 transition-colors ${
                content.locale === "en"
                  ? "bg-[#B51219] text-white"
                  : "text-[#A7B0BC] hover:text-[#F5F6F7]"
              }`}
            >
              EN
            </Link>
            <span className="mx-0.5 text-white/20" aria-hidden="true">
              |
            </span>
            <Link
              href="/"
              aria-current={content.locale === "ar" ? "page" : undefined}
              className={`rounded-[7px] px-2.5 py-1 transition-colors ${
                content.locale === "ar"
                  ? "bg-[#B51219] text-white"
                  : "text-[#A7B0BC] hover:text-[#F5F6F7]"
              }`}
            >
              AR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
