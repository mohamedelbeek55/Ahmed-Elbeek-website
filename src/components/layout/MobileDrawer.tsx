"use client";

import { useEffect, useRef, type RefObject } from "react";
import { Mail, Phone, X } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { trackEvent } from "@/lib/analytics";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ShareSaveActions } from "@/components/ui/ShareSaveActions";

interface MobileDrawerProps {
  open: boolean;
  activeSection: string;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
  content: SiteContent;
}

export function MobileDrawer({
  open,
  activeSection,
  onClose,
  triggerRef,
  content,
}: MobileDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const focusTimer = window.setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 40);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
          return;
        }
        if (e.key === "Tab" && panelRef.current) {
          const focusables = panelRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.clearTimeout(focusTimer);
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }

    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      triggerRef.current?.focus();
    }
  }, [open, onClose, triggerRef]);

  return (
    <div
      id="mobile-nav-drawer"
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      inert={!open || undefined}
      aria-label={content.header.menuOpenLabel}
      className={`fixed inset-0 z-50 lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 bg-[#0B0F14]/80 backdrop-blur-sm transition-opacity duration-[240ms] ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Slide-in Panel */}
      <div
        ref={panelRef}
        className={`fixed inset-y-0 end-0 flex w-[min(88vw,360px)] flex-col border-s border-white/10 bg-[#121B26] shadow-2xl transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "translate-x-0"
            : "ltr:translate-x-full rtl:-translate-x-full"
        }`}
      >
        <div className="flex h-[76px] items-center justify-between gap-2 border-b border-white/10 px-4 sm:h-[82px]">
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
            tabIndex={open ? 0 : -1}
            onClick={onClose}
            aria-label={content.header.menuCloseLabel}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-[#151F2B] text-[#F5F6F7] transition-colors hover:bg-[#192533]"
          >
            <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-3">
          <ul className="divide-y divide-white/10">
            {content.nav.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    tabIndex={open ? 0 : -1}
                    onClick={onClose}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex min-h-[48px] items-center justify-between px-2 text-[16px] font-semibold transition-colors ${
                      isActive
                        ? "text-[#F5F6F7]"
                        : "text-[#A7B0BC] hover:text-[#F5F6F7]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        className="h-2 w-2 rounded-full bg-[#D4B27A]"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-2.5 border-t border-white/10 bg-[#0B0F14]/80 p-4">
          <p className="text-[13px] font-bold text-[#D4B27A]">
            {content.header.directContactHeading}
          </p>

          <a
            href={COMPANY_CONTACT.getWhatsAppUrl(content.locale)}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            onClick={() =>
              trackEvent("whatsapp_click", {
                locale: content.locale,
                location: "drawer",
              })
            }
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#B51219] px-4 text-[15px] font-bold text-white shadow-[0_8px_20px_-6px_rgba(181,18,25,0.6)] transition-colors hover:bg-[#9B0F15]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>{content.header.whatsappCta}</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={COMPANY_CONTACT.primaryPhoneTel}
              tabIndex={open ? 0 : -1}
              onClick={() =>
                trackEvent("phone_click", {
                  locale: content.locale,
                  location: "drawer",
                  target: COMPANY_CONTACT.primaryPhoneDisplay,
                })
              }
              className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-[10px] border border-white/15 bg-[#151F2B] px-2 text-[13px] font-semibold text-[#F5F6F7] tabular-nums transition-colors hover:bg-[#192533]"
            >
              <Phone className="h-3.5 w-3.5 text-[#D4B27A]" strokeWidth={1.75} aria-hidden="true" />
              <bdi dir="ltr">{COMPANY_CONTACT.primaryPhoneDisplay}</bdi>
            </a>
            <a
              href={COMPANY_CONTACT.secondaryPhoneTel}
              tabIndex={open ? 0 : -1}
              onClick={() =>
                trackEvent("phone_click", {
                  locale: content.locale,
                  location: "drawer",
                  target: COMPANY_CONTACT.secondaryPhoneDisplay,
                })
              }
              className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-[10px] border border-white/15 bg-[#151F2B] px-2 text-[13px] font-semibold text-[#F5F6F7] tabular-nums transition-colors hover:bg-[#192533]"
            >
              <Phone className="h-3.5 w-3.5 text-[#D4B27A]" strokeWidth={1.75} aria-hidden="true" />
              <bdi dir="ltr">{COMPANY_CONTACT.secondaryPhoneDisplay}</bdi>
            </a>
          </div>

          <a
            href={COMPANY_CONTACT.emailHref}
            tabIndex={open ? 0 : -1}
            onClick={() =>
              trackEvent("email_click", {
                locale: content.locale,
                location: "drawer",
                target: COMPANY_CONTACT.email,
              })
            }
            className="flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-[#151F2B]/70 px-3 text-[13px] font-medium text-[#A7B0BC] transition-colors hover:text-[#F5F6F7]"
          >
            <Mail className="h-4 w-4 text-[#D4B27A]" strokeWidth={1.75} aria-hidden="true" />
            <bdi dir="ltr">{COMPANY_CONTACT.email}</bdi>
          </a>

          {open && (
            <ShareSaveActions
              locale={content.locale}
              saveLabel={content.contact.saveContact}
              shareLabel={content.contact.share}
              copiedLabel={content.contact.shareCopied}
              shareTitle={content.meta.title}
              shareText={content.contact.shareText}
              location="drawer"
              compact
            />
          )}
        </div>
      </div>
    </div>
  );
}
