import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface HeroSectionProps {
  content: SiteContent;
}

/**
 * Option 2 Executive Luxury Hero (Authentic Al-Awja + Obsidian + Ruby + Champagne Gold).
 * Prioritizes mobile first-screen drama, photo brightness/clarity, double-foil crimson/gold
 * geometric divider, and sculpted CTA surfaces while preserving the approved desktop split.
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
      <div className="relative hidden lg:block lg:h-[560px] xl:h-[580px]">
        {/* Authentic Al-Awja Yard Photograph — vibrant natural exposure without heavy middle dimming */}
        <div
          className={`absolute inset-y-0 w-[65%] overflow-hidden ${
            isRtl ? "left-0" : "right-0"
          }`}
        >
          <Image
            src="/images/al-awja-yard.jpg"
            alt={content.hero.yardAlt}
            fill
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover object-[65%_42%] brightness-[1.24] contrast-[1.07] saturate-[1.1]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: isRtl
                ? "linear-gradient(to top, #0B0F14 0%, rgba(11,15,20,0.08) 18%, transparent 40%), linear-gradient(to right, rgba(11,15,20,0.32) 0%, transparent 14%)"
                : "linear-gradient(to top, #0B0F14 0%, rgba(11,15,20,0.08) 18%, transparent 40%), linear-gradient(to left, rgba(11,15,20,0.32) 0%, transparent 14%)",
            }}
          />
        </div>

        {/* Sculpted Multi-Plane Diagonal Prism: Ruby Wing + Lacquered Crimson Blade + Champagne Gold Glint */}
        <svg
          viewBox="0 0 1440 580"
          preserveAspectRatio="none"
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-10 h-full w-full ${
            isRtl ? "" : "-scale-x-100"
          }`}
        >
          <defs>
            <linearGradient id="rubySlashWing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(181, 18, 25, 0.42)" />
              <stop offset="100%" stopColor="rgba(181, 18, 25, 0.16)" />
            </linearGradient>
            <linearGradient id="crimsonPrism" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#CF1820" />
              <stop offset="50%" stopColor="#B51219" />
              <stop offset="100%" stopColor="#850B10" />
            </linearGradient>
            <linearGradient id="goldGlintEdge" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(212, 178, 122, 0.85)" />
              <stop offset="55%" stopColor="rgba(212, 178, 122, 0.45)" />
              <stop offset="100%" stopColor="rgba(212, 178, 122, 0.8)" />
            </linearGradient>
          </defs>

          {/* Translucent ruby atmospheric aura */}
          <polygon points="784,0 906,0 760,580 638,580" fill="url(#rubySlashWing)" />
          {/* Champagne Gold specular catch line */}
          <polygon points="871,0 874,0 728,580 725,580" fill="url(#goldGlintEdge)" />
          {/* Lacquered Crimson structural blade */}
          <polygon points="874,0 892,0 746,580 728,580" fill="url(#crimsonPrism)" />
          {/* Obsidian dark panel backing */}
          <polygon points="891,0 1440,0 1440,580 745,580" fill="#0B0F14" />
        </svg>

        {/* Subtle Architectural Grid Watermark + Warm Ruby/Gold Ambient Lighting on Panel */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-10 w-[48%]"
          style={{
            insetInlineStart: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(212,178,122,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,178,122,0.03) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            maskImage: "radial-gradient(ellipse at 50% 48%, black 20%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 48%, black 20%, transparent 78%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: isRtl
              ? "radial-gradient(560px circle at 84% 78%, rgba(181, 18, 25, 0.22), transparent 68%), radial-gradient(380px circle at 92% 20%, rgba(212, 178, 122, 0.06), transparent 65%)"
              : "radial-gradient(560px circle at 16% 78%, rgba(181, 18, 25, 0.22), transparent 68%), radial-gradient(380px circle at 8% 20%, rgba(212, 178, 122, 0.06), transparent 65%)",
          }}
        />

        {/* Desktop Content Column */}
        <div className="relative z-20 mx-auto flex h-full max-w-[1380px] items-center px-8">
          <div className="w-[45%] max-w-[565px]">
            {/* Factual Champagne-Gold Ports Kicker */}
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#D4B27A]/30 bg-[#151F2B]/75 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4B27A]" aria-hidden="true" />
              <span className="text-[12.5px] font-semibold text-[#D4B27A]">
                {content.hero.portsLine}
              </span>
            </div>

            <div className="relative ps-4 before:absolute before:inset-y-1 before:start-0 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#D4B27A] before:via-[#B51219] before:to-[#B51219]/25">
              <h1 className="text-[46px] font-extrabold leading-[1.16] text-[#F5F6F7] xl:text-[54px]">
                <span className="block">{content.hero.headlineLine1}</span>
                <span className="mt-1 block">{content.hero.headlineLine2}</span>
              </h1>

              <p className="mt-3.5 text-[21px] font-bold leading-[1.4] text-[#F4585E] xl:text-[23px]">
                {content.hero.subheadline}
              </p>
            </div>

            <p className="mt-4 max-w-[39ch] text-[16px] leading-[1.75] text-[#B7C0CC] xl:text-[17px]">
              {content.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-[10px] border border-[#D4B27A]/35 bg-gradient-to-b from-[#CF1921] via-[#B51219] to-[#870B10] px-6 text-[15px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_14px_30px_-6px_rgba(181,18,25,0.68)] transition-all hover:brightness-110"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                <span>{content.hero.primaryCta}</span>
              </a>

              <a
                href="#services"
                className="inline-flex min-h-[50px] items-center justify-center gap-1.5 rounded-[10px] border border-[#D4B27A]/35 bg-[#151F2B]/80 px-5 text-[15px] font-bold text-[#F5F6F7] transition-colors hover:border-[#D4B27A]/65 hover:bg-[#192533]"
              >
                <span>{content.hero.secondaryCta}</span>
                <SecondaryChevron className="h-4 w-4 text-[#D4B27A]" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE / TABLET HERO (< 1024px) — PRIORITY #1 ================= */}
      <div className="relative bg-[#0B0F14] lg:hidden">
        {/* Vivid, Taller Al-Awja Panoramic Stage (Flag, Gate Arch & Truck Convoy) */}
        <div className="relative h-[274px] w-full overflow-hidden min-[390px]:h-[308px] min-[430px]:h-[346px] sm:h-[385px] md:h-[420px]">
          <Image
            src="/images/al-awja-yard.jpg"
            alt={content.hero.yardAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_38%] brightness-[1.25] contrast-[1.07] saturate-[1.1]"
          />
          {/* Minimal edge blending only at top header join & bottom diagonal edge */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(11,15,20,0.28) 0%, transparent 16%), linear-gradient(to top, #0B0F14 1%, rgba(11,15,20,0.18) 18%, transparent 40%)",
            }}
          />
        </div>

        {/* Sculpted Multi-Plane Diagonal Crimson + Champagne Gold Bevel Transition */}
        <div className="relative z-10 -mt-12">
          <svg
            viewBox="0 0 390 56"
            preserveAspectRatio="none"
            aria-hidden="true"
            className={`block h-[56px] w-full ${isRtl ? "" : "-scale-x-100"}`}
          >
            <defs>
              <linearGradient id="mobileRubyGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(181, 18, 25, 0.25)" />
                <stop offset="100%" stopColor="rgba(181, 18, 25, 0.55)" />
              </linearGradient>
              <linearGradient id="mobileGoldEdge" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(212, 178, 122, 0.45)" />
                <stop offset="65%" stopColor="rgba(212, 178, 122, 0.95)" />
                <stop offset="100%" stopColor="rgba(212, 178, 122, 0.7)" />
              </linearGradient>
            </defs>
            {/* Ruby atmospheric wing */}
            <polygon points="0,33 390,0 390,15 0,48" fill="url(#mobileRubyGlow)" />
            {/* 1.5px Champagne Gold architectural specular edge */}
            <polygon points="0,41 390,8 390,10 0,43" fill="url(#mobileGoldEdge)" />
            {/* Lacquered Crimson ridge */}
            <polygon points="0,43 390,10 390,18 0,51" fill="#B51219" />
            {/* Dark stage anchor */}
            <polygon points="0,50 390,17 390,56 0,56" fill="#0B0F14" />
          </svg>
        </div>

        {/* Elevated Luxury Content Stage */}
        <div
          className="relative overflow-hidden px-4 pb-10 pt-1 min-[390px]:px-5 sm:px-6 sm:pb-12"
          style={{
            background: isRtl
              ? "radial-gradient(360px circle at 92% 4%, rgba(181, 18, 25, 0.24), transparent 66%), radial-gradient(240px circle at 10% 35%, rgba(212, 178, 122, 0.06), transparent 70%), linear-gradient(180deg, #0B0F14 0%, #101721 100%)"
              : "radial-gradient(360px circle at 8% 4%, rgba(181, 18, 25, 0.24), transparent 66%), radial-gradient(240px circle at 90% 35%, rgba(212, 178, 122, 0.06), transparent 70%), linear-gradient(180deg, #0B0F14 0%, #101721 100%)",
          }}
        >
          {/* Subtle architectural grid watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(212,178,122,0.032) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,178,122,0.032) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage: "linear-gradient(to bottom, black 10%, transparent 85%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 10%, transparent 85%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-[640px]">
            {/* Factual Champagne-Gold Multi-Port Authority Pill */}
            <div className="mb-2.5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#D4B27A]/30 bg-[#151F2B]/85 px-3 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4B27A]" aria-hidden="true" />
              <span className="truncate text-[11.5px] font-semibold text-[#D4B27A] min-[390px]:text-[12px]">
                {content.hero.portsLine}
              </span>
            </div>

            <div className="relative ps-3.5 before:absolute before:inset-y-1 before:start-0 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#D4B27A] before:via-[#B51219] before:to-[#B51219]/30">
              <h1 className="text-[30px] font-extrabold leading-[1.16] text-[#F5F6F7] min-[390px]:text-[32px] min-[430px]:text-[34px] sm:text-[38px]">
                <span className="block">{content.hero.headlineLine1}</span>
                <span className="mt-0.5 block">{content.hero.headlineLine2}</span>
              </h1>

              <p className="mt-2 text-balance text-[17px] font-bold leading-[1.36] text-[#F4585E] min-[390px]:text-[18px] sm:text-[20px]">
                {content.hero.subheadline}
              </p>
            </div>

            <p className="mt-3 max-w-[40ch] text-[14.5px] leading-[1.7] text-[#B7C0CC] min-[390px]:text-[15px] sm:text-[16px]">
              {content.hero.description}
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[10px] border border-[#D4B27A]/35 bg-gradient-to-b from-[#CF1921] via-[#B51219] to-[#870B10] px-5 text-[15px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_14px_28px_-6px_rgba(181,18,25,0.7)] transition-all hover:brightness-110 sm:w-auto sm:flex-1"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                <span>{content.hero.primaryCta}</span>
              </a>

              <a
                href="#services"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[10px] border border-[#D4B27A]/35 bg-[#151F2B]/90 px-5 text-[15px] font-bold text-[#F5F6F7] transition-colors hover:border-[#D4B27A]/65 hover:bg-[#192533] sm:w-auto sm:flex-1"
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
