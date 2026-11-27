"use client";

import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { trackEvent } from "@/lib/analytics";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { MobileDrawer } from "@/components/layout/MobileDrawer";

interface HeaderProps {
  content: SiteContent;
}

export function Header({ content }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ids = content.nav.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibleRatios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        // Choose visible section with largest intersection ratio (or closest in viewport)
        let bestId = activeSection;
        let bestScore = 0;
        for (const id of ids) {
          const score = visibleRatios.get(id) ?? 0;
          if (score > bestScore) {
            bestScore = score;
            bestId = id;
          }
        }
        if (bestScore > 0) {
          setActiveSection(bestId);
        }
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    for (const el of elements) observer.observe(el);

    const handleScrollBounds = () => {
      if (window.scrollY < 100) {
        setActiveSection("hero");
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection(ids[ids.length - 1]);
      }
    };

    window.addEventListener("scroll", handleScrollBounds, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollBounds);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content.nav]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-4 focus:z-[60] focus:rounded-lg focus:bg-[#B51219] focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white focus:shadow-xl"
      >
        {content.header.skipToContent}
      </a>

      <header className="sticky top-0 z-40 border-b border-white/12 bg-[#0D131C]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[70px] max-w-[1380px] items-center justify-between gap-2 px-4 sm:px-5 lg:h-[78px] lg:px-8">
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
            className="hidden items-center gap-3.5 lg:flex xl:gap-5"
          >
            {content.nav.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative inline-flex min-h-[44px] items-center text-[13.5px] font-semibold whitespace-nowrap transition-colors xl:text-[14.5px] ${
                    isActive
                      ? "text-[#F5F6F7] after:absolute after:inset-x-0 after:bottom-1 after:h-[2px] after:rounded-full after:bg-[#D4B27A]"
                      : "text-[#A7B0BC] hover:text-[#F5F6F7]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 lg:gap-3">
            <a
              href={COMPANY_CONTACT.getWhatsAppUrl(content.locale)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", {
                  locale: content.locale,
                  location: "header",
                })
              }
              className="hidden h-11 items-center gap-2 rounded-[10px] bg-[#B51219] px-4 text-[14px] font-bold text-white shadow-[0_8px_22px_-6px_rgba(181,18,25,0.55)] transition-colors hover:bg-[#9B0F15] lg:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>{content.header.whatsappCta}</span>
            </a>

            <LanguageSwitch locale={content.locale} label={content.header.switchLabel} />

            <button
              ref={menuBtnRef}
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
        activeSection={activeSection}
        onClose={() => setDrawerOpen(false)}
        triggerRef={menuBtnRef}
        content={content}
      />
    </>
  );
}
