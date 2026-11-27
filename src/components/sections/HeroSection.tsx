import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { TrackedLink } from "@/components/ui/TrackedLink";

interface HeroSectionProps {
  content: SiteContent;
}

/**
 * Refined Concept A Hero (Server Component).
 * - Unfiltered authentic Al-Awja photograph (zero CSS filters, natural gradients only)
 * - 3 non-truncating wrapping port chips (safe at 360px)
 * - Diagonal crimson blade + single restrained radial glow (no grid watermark clutter)
 * - Clean solid crimson WhatsApp CTA (no gold border) & outline-only secondary CTA
 */
export function HeroSection({ content }: HeroSectionProps) {
  const isRtl = content.dir === "rtl";
  const SecondaryChevron = isRtl ? ChevronLeft : ChevronRight;
  const whatsappUrl = COMPANY_CONTACT.getWhatsAppUrl(content.locale);

  return (
    <section
      id="hero"
      aria-label={content.hero.headlineLine1}
      className="relative overflow-hidden bg-[#0B0F14]"
    >
      {/* ================= DESKTOP HERO (>= 1024px) ================= */}
      <div className="relative hidden lg:block lg:h-[550px] xl:h-[575px]">
        {/* Authentic Al-Awja Yard Photograph */}
        <div
          className={`absolute inset-y-0 w-[64%] overflow-hidden ${
            isRtl ? "left-0" : "right-0"
          }`}
        >
          <Image
            src="/images/al-awja-yard.jpg"
            alt={content.hero.yardAlt}
            fill
            priority
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="object-cover object-[65%_42%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: isRtl
                ? "linear-gradient(to top, #0B0F14 0%, rgba(11,15,20,0.12) 20%, transparent 45%), linear-gradient(to right, rgba(11,15,20,0.34) 0%, transparent 16%)"
                : "linear-gradient(to top, #0B0F14 0%, rgba(11,15,20,0.12) 20%, transparent 45%), linear-gradient(to left, rgba(11,15,20,0.34) 0%, transparent 16%)",
            }}
          />
        </div>

        {/* Diagonal Crimson Blade + Subtle Gold Edge Glint */}
        <svg
          viewBox="0 0 1440 575"
          preserveAspectRatio="none"
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-10 h-full w-full ${
            isRtl ? "" : "-scale-x-100"
          }`}
        >
          <polygon
            points="788,0 906,0 762,575 644,575"
            fill="rgba(181, 18, 25, 0.28)"
          />
          <polygon
            points="872,0 874.5,0 730.5,575 728,575"
            fill="rgba(212, 178, 122, 0.72)"
          />
          <polygon points="874.5,0 892,0 748,575 730.5,575" fill="#B51219" />
          <polygon points="891,0 1440,0 1440,575 747,575" fill="#0B0F14" />
        </svg>

        {/* Single Restrained Crimson Ambient Spotlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: isRtl
              ? "radial-gradient(540px circle at 84% 82%, rgba(181, 18, 25, 0.18), transparent 68%)"
              : "radial-gradient(540px circle at 16% 82%, rgba(181, 18, 25, 0.18), transparent 68%)",
          }}
        />

        {/* Desktop Content Column */}
        <div className="relative z-20 mx-auto flex h-full max-w-[1380px] items-center px-8">
          <div className="w-[45%] max-w-[565px]">
            {/* 3 Wrapping Port Chips (no pipes, no truncation) */}
            <ul className="mb-4 flex flex-wrap items-center gap-2">
              {content.hero.ports.map((port) => (
                <li
                  key={port}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#D4B27A]/30 bg-[#151F2B]/85 px-3 py-1 text-[12.5px] font-semibold text-[#D4B27A]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4B27A]" aria-hidden="true" />
                  <span>{port}</span>
                </li>
              ))}
            </ul>

            <div className="relative ps-4 before:absolute before:inset-y-1 before:start-0 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#D4B27A] before:to-[#B51219]">
              <h1 className="text-[46px] font-extrabold leading-[1.16] text-[#F5F6F7] xl:text-[54px]">
                <span className="block">{content.hero.headlineLine1}</span>
                <span className="mt-1 block">{content.hero.headlineLine2}</span>
              </h1>

              <p className="mt-3.5 text-[21px] font-bold leading-[1.4] text-[#F4585E] xl:text-[23px]">
                {content.hero.subheadline}
              </p>
            </div>

            <p className="mt-4 max-w-[39ch] text-[16px] leading-[1.75] text-[#A7B0BC] xl:text-[17px]">
              {content.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <TrackedLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="whatsapp_click"
                eventData={{ locale: content.locale, location: "hero_desktop" }}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-[10px] bg-[#B51219] px-6 text-[15px] font-bold text-white shadow-[0_12px_28px_-6px_rgba(181,18,25,0.6)] transition-colors hover:bg-[#9B0F15]"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                <span>{content.hero.primaryCta}</span>
              </TrackedLink>

              <a
                href="#services"
                className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-[10px] border border-white/34 bg-transparent px-5 text-[15px] font-bold text-[#F5F6F7] transition-colors hover:border-white/55 hover:bg-white/5"
              >
                <span>{content.hero.secondaryCta}</span>
                <SecondaryChevron className="h-4 w-4 text-[#D4B27A]" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE / TABLET HERO (< 1024px) ================= */}
      <div className="relative bg-[#0B0F14] lg:hidden">
        {/* Authentic Unfiltered Al-Awja Panoramic Stage */}
        <div className="relative h-[236px] w-full overflow-hidden min-[390px]:h-[276px] min-[430px]:h-[310px] sm:h-[365px] md:h-[400px]">
          <Image
            src="/images/al-awja-yard.jpg"
            alt={content.hero.yardAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_38%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(11,15,20,0.3) 0%, transparent 18%), linear-gradient(to top, #0B0F14 1%, rgba(11,15,20,0.2) 20%, transparent 44%)",
            }}
          />
        </div>

        {/* Diagonal Crimson + Subtle Gold Edge Transition */}
        <div className="relative z-10 -mt-12">
          <svg
            viewBox="0 0 390 52"
            preserveAspectRatio="none"
            aria-hidden="true"
            className={`block h-[52px] w-full ${isRtl ? "" : "-scale-x-100"}`}
          >
            <polygon points="0,30 390,0 390,14 0,44" fill="rgba(181, 18, 25, 0.34)" />
            <polygon points="0,38 390,8 390,10 0,40" fill="rgba(212, 178, 122, 0.78)" />
            <polygon points="0,40 390,10 390,17 0,47" fill="#B51219" />
            <polygon points="0,46 390,16 390,52 0,52" fill="#0B0F14" />
          </svg>
        </div>

        {/* Mobile Dark Content Stage (single restrained crimson glow) */}
        <div
          className="relative px-4 pb-8 pt-0.5 min-[390px]:px-5 sm:px-6 sm:pb-10"
          style={{
            background: isRtl
              ? "radial-gradient(340px circle at 92% 6%, rgba(181, 18, 25, 0.2), transparent 68%)"
              : "radial-gradient(340px circle at 8% 6%, rgba(181, 18, 25, 0.2), transparent 68%)",
          }}
        >
          <div className="mx-auto max-w-[640px]">
            {/* 3 Wrapping Port Chips (never truncates at 360px) */}
            <ul className="mb-2.5 flex flex-wrap items-center gap-1.5">
              {content.hero.ports.map((port) => (
                <li
                  key={port}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#D4B27A]/30 bg-[#151F2B]/85 px-2.5 py-1 text-[12px] font-semibold text-[#D4B27A]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4B27A]" aria-hidden="true" />
                  <span>{port}</span>
                </li>
              ))}
            </ul>

            <div className="relative ps-3.5 before:absolute before:inset-y-1 before:start-0 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#D4B27A] before:to-[#B51219]">
              <h1 className="text-[28px] font-extrabold leading-[1.15] text-[#F5F6F7] min-[390px]:text-[31px] min-[430px]:text-[34px] sm:text-[38px]">
                <span className="block">{content.hero.headlineLine1}</span>
                <span className="mt-0.5 block">{content.hero.headlineLine2}</span>
              </h1>

              <p className="mt-1.5 text-balance text-[16px] font-bold leading-[1.35] text-[#F4585E] min-[390px]:text-[18px] sm:text-[20px]">
                {content.hero.subheadline}
              </p>
            </div>

            <p className="mt-2.5 max-w-[40ch] text-[14.5px] leading-[1.62] text-[#A7B0BC] min-[390px]:text-[15px] min-[390px]:leading-[1.68] sm:text-[16px]">
              {content.hero.description}
            </p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3">
              <TrackedLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="whatsapp_click"
                eventData={{ locale: content.locale, location: "hero_mobile" }}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#B51219] px-5 text-[15px] font-bold text-white shadow-[0_12px_26px_-6px_rgba(181,18,25,0.62)] transition-colors hover:bg-[#9B0F15] sm:w-auto sm:flex-1"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                <span>{content.hero.primaryCta}</span>
              </TrackedLink>

              <a
                href="#services"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[10px] border border-white/34 bg-transparent px-5 text-[15px] font-bold text-[#F5F6F7] transition-colors hover:border-white/55 hover:bg-white/5 sm:w-auto sm:flex-1"
              >
                <span>{content.hero.secondaryCta}</span>
                <SecondaryChevron className="h-4 w-4 text-[#D4B27A]" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
