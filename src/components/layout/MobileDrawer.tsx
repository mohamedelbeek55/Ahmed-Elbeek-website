"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone, X } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  content: SiteContent;
}

export function MobileDrawer({ open, onClose, content }: MobileDrawerProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-nav-drawer"
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={content.header.menuOpenLabel}
    >
      <div
        className="fixed inset-0 bg-[#0B0F14]/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 end-0 flex w-[min(86vw,360px)] flex-col border-s border-white/10 bg-[#121B26] shadow-2xl">
        <div className="flex h-[68px] items-center justify-between gap-2 border-b border-white/10 px-4">
          <div className="min-w-0 shrink">
            <BrandLogo
              title={content.brand.title}
              subtitle={content.brand.subtitle}
              alt={content.brand.logoAlt}
              locale={content.locale}
              variant="header"
            />
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label={content.header.menuCloseLabel}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-[#151F2B] text-[#F5F6F7] transition-colors hover:bg-[#192533]"
          >
            <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="divide-y divide-white/10">
            {content.nav.map((item, idx) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className={`flex min-h-[48px] items-center justify-between px-2 text-[16px] font-semibold transition-colors ${
                    idx === 0
                      ? "text-[#F5F6F7]"
                      : "text-[#A7B0BC] hover:text-[#F5F6F7]"
                  }`}
                >
                  <span>{item.label}</span>
                  {idx === 0 && (
                    <span className="h-2 w-2 rounded-full bg-[#B51219]" aria-hidden="true" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-white/10 bg-[#0B0F14]/75 p-4">
          <p className="text-[13px] font-bold text-[#F4585E]">
            {content.header.directContactHeading}
          </p>

          <a
            href={COMPANY_CONTACT.getWhatsAppUrl(content.locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#B51219] px-4 text-[15px] font-bold text-white shadow-[0_8px_20px_-6px_rgba(181,18,25,0.6)] transition-colors hover:bg-[#9B0F15]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>{content.header.whatsappCta}</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={COMPANY_CONTACT.primaryPhoneTel}
              className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-[10px] border border-white/15 bg-[#151F2B] px-2 text-[13px] font-semibold text-[#F5F6F7] tabular-nums transition-colors hover:bg-[#192533]"
            >
              <Phone className="h-3.5 w-3.5 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
              <bdi dir="ltr">{COMPANY_CONTACT.primaryPhoneDisplay}</bdi>
            </a>
            <a
              href={COMPANY_CONTACT.secondaryPhoneTel}
              className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-[10px] border border-white/15 bg-[#151F2B] px-2 text-[13px] font-semibold text-[#F5F6F7] tabular-nums transition-colors hover:bg-[#192533]"
            >
              <Phone className="h-3.5 w-3.5 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
              <bdi dir="ltr">{COMPANY_CONTACT.secondaryPhoneDisplay}</bdi>
            </a>
          </div>

          <a
            href={COMPANY_CONTACT.emailHref}
            className="flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-[#151F2B]/70 px-3 text-[13px] font-medium text-[#A7B0BC] transition-colors hover:text-[#F5F6F7]"
          >
            <Mail className="h-4 w-4 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
            <bdi dir="ltr">{COMPANY_CONTACT.email}</bdi>
          </a>
        </div>
      </div>
    </div>
  );
}
