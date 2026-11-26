"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { MobileDrawer } from "@/components/layout/MobileDrawer";

interface HeaderProps {
  content: SiteContent;
}

export function Header({ content }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-4 focus:z-[60] focus:rounded-lg focus:bg-[#B51219] focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white focus:shadow-xl"
      >
        {content.header.skipToContent}
      </a>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0F14]/92 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-[1380px] items-center justify-between gap-2 px-4 sm:px-5 lg:h-[76px] lg:px-8">
          <div className="min-w-0 shrink">
            <BrandLogo
              title={content.brand.title}
              subtitle={content.brand.subtitle}
              alt={content.brand.logoAlt}
              locale={content.locale}
              variant="header"
            />
          </div>

          <nav
            aria-label={content.locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
            className="hidden items-center gap-4 lg:flex xl:gap-6"
          >
            {content.nav.map((item, idx) => (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-2 text-[14px] font-semibold whitespace-nowrap transition-colors xl:text-[15px] ${
                  idx === 0
                    ? "text-[#F5F6F7] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-[#B51219]"
                    : "text-[#A7B0BC] hover:text-[#F5F6F7]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 lg:gap-3">
            <a
              href={COMPANY_CONTACT.getWhatsAppUrl(content.locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center gap-2 rounded-[10px] border border-[#D4B27A]/30 bg-gradient-to-b from-[#CF1921] via-[#B51219] to-[#870B10] px-4 text-[14px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_8px_22px_-6px_rgba(181,18,25,0.58)] transition-all hover:brightness-110 lg:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>{content.header.whatsappCta}</span>
            </a>

            <div
              role="group"
              aria-label={content.header.switchLabel}
              className="inline-flex h-11 items-center rounded-[10px] border border-white/15 bg-[#151F2B]/80 p-1 text-[12.5px] font-bold lg:h-10"
            >
              <Link
                href="/en"
                aria-current={content.locale === "en" ? "page" : undefined}
                className={`rounded-[7px] px-2 py-1.5 transition-colors ${
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
                className={`rounded-[7px] px-2 py-1.5 transition-colors ${
                  content.locale === "ar"
                    ? "bg-[#B51219] text-white"
                    : "text-[#A7B0BC] hover:text-[#F5F6F7]"
                }`}
              >
                AR
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={content.header.menuOpenLabel}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/15 bg-[#151F2B] text-[#F5F6F7] transition-colors hover:bg-[#192533] lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        content={content}
      />
    </>
  );
}
