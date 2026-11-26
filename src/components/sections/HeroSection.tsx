import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface HeroSectionProps {
  content: SiteContent;
}

/**
 * Approved Concept A — Authentic Al-Awja Hero.
 * Desktop preserves split left-photo / right-panel composition with diagonal crimson separator.
 * Mobile presents an uncluttered, sharp panoramic crop preserving flag, gate, and truck queue
 * transitioning smoothly into the dark corporate content stage.
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
      <div className="relative hidden lg:block lg:h-[540px] xl:h-[560px]">
        {/* Authentic Al-Awja Yard Photograph (Left in RTL / Right in LTR) */}
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
            sizes="(min-width: 1024px) 65vw, 100vw"
            className="object-cover object-[66%_43%] brightness-[1.06] contrast-[1.05]"
          />
          {/* Subtle atmospheric edge blending into dark surface */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: isRtl
                ? "linear-gradient(to top, #0B0F14 0%, rgba(11,15,20,0.16) 22%, transparent 50%), linear-gradient(to right, rgba(11,15,20,0.42) 0%, transparent 18%)"
                : "linear-gradient(to top, #0B0F14 0%, rgba(11,15,20,0.16) 22%, transparent 50%), linear-gradient(to left, rgba(11,15,20,0.42) 0%, transparent 18%)",
            }}
          />
        </div>

        {/* Diagonal Crimson Geometric Separator + Dark Content Backing */}
        <svg
          viewBox="0 0 1440 560"
          preserveAspectRatio="none"
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-10 h-full w-full ${
            isRtl ? "" : "-scale-x-100"
          }`}
        >
          <polygon
            points="788,0 904,0 762,560 646,560"
            fill="rgba(181, 18, 25, 0.28)"
          />
          <polygon
            points="874,0 890,0 748,560 732,560"
            fill="#B51219"
          />
          <polygon
            points="889,0 1440,0 1440,560 747,560"
            fill="#0B0F14"
          />
        </svg>

        {/* Subtle Ambient Red Lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: isRtl
              ? "radial-gradient(540px circle at 84% 88%, rgba(181, 18, 25, 0.16), transparent 70%)"
              : "radial-gradient(540px circle at 16% 88%, rgba(181, 18, 25, 0.16), transparent 70%)",
          }}
        />

        {/* Desktop Content Column */}
        <div className="relative z-20 mx-auto flex h-full max-w-[1380px] items-center px-8">
          <div className="w-[44%] max-w-[560px]">
            <h1 className="text-[44px] font-extrabold leading-[1.18] text-[#F5F6F7] xl:text-[52px]">
              <span className="block">{content.hero.headlineLine1}</span>
              <span className="mt-1 block">{content.hero.headlineLine2}</span>
            </h1>

            <p className="mt-4 text-[21px] font-bold leading-[1.4] text-[#F4585E] xl:text-[23px]">
              {content.hero.subheadline}
            </p>

            <p className="mt-4 max-w-[38ch] text-[16px] leading-[1.75] text-[#A7B0BC] xl:text-[17px]">
              {content.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-[10px] bg-[#B51219] px-6 text-[15px] font-bold text-white shadow-[0_12px_28px_-6px_rgba(181,18,25,0.6)] transition-colors hover:bg-[#9B0F15]"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                <span>{content.hero.primaryCta}</span>
              </a>

              <a
                href="#services"
                className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-[10px] border border-white/34 bg-[#151F2B]/65 px-5 text-[15px] font-bold text-[#F5F6F7] transition-colors hover:border-white/55 hover:bg-[#192533]"
              >
                <span>{content.hero.secondaryCta}</span>
                <SecondaryChevron className="h-4 w-4 text-[#F4585E]" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE / TABLET HERO (< 1024px) ================= */}
      {/* Uncluttered refined Concept A: sharp yard panorama (gate + trucks + flag) -> diagonal crimson transition -> deep dark panel */}
      <div className="relative bg-[#0B0F14] lg:hidden">
        {/* Prominent Edge-to-Edge Al-Awja Yard Photo (natural tone + crisp framing of gate, trucks & flag) */}
        <div className="relative h-[255px] w-full overflow-hidden min-[390px]:h-[272px] min-[430px]:h-[292px] sm:h-[340px] md:h-[380px]">
          <Image
            src="/images/al-awja-yard.jpg"
            alt={content.hero.yardAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[66%_38%] brightness-[1.07] contrast-[1.06]"
          />
          {/* Clean atmospheric header integration & subtle bottom twilight transition */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(11,15,20,0.4) 0%, transparent 24%), linear-gradient(to top, #0B0F14 2%, rgba(11,15,20,0.42) 28%, transparent 64%)",
            }}
          />
        </div>

        {/* Multi-Plane Diagonal Crimson Geometric Transition */}
        <div className="relative z-10 -mt-11">
          <svg
            viewBox="0 0 390 48"
            preserveAspectRatio="none"
            aria-hidden="true"
            className={`block h-[48px] w-full ${isRtl ? "" : "-scale-x-100"}`}
          >
            {/* Translucent crimson architectural wing */}
            <polygon points="0,30 390,0 390,14 0,44" fill="rgba(181, 18, 25, 0.34)" />
            {/* Crisp crimson geometric ridge */}
            <polygon points="0,38 390,8 390,14 0,44" fill="#B51219" />
            {/* Connected dark stage edge */}
            <polygon points="0,44 390,14 390,48 0,48" fill="#0B0F14" />
          </svg>
        </div>

        {/* Connected Deep-Charcoal Content Stage */}
        <div
          className="relative px-4 pb-10 pt-2 min-[390px]:px-5 sm:px-6 sm:pb-12"
          style={{
            background: isRtl
              ? "radial-gradient(320px circle at 92% 8%, rgba(181, 18, 25, 0.16), transparent 72%)"
              : "radial-gradient(320px circle at 8% 8%, rgba(181, 18, 25, 0.16), transparent 72%)",
          }}
        >
          <div className="mx-auto max-w-[640px]">
            <div className="border-s-[3px] border-[#B51219] ps-3.5">
              <h1 className="text-[30px] font-extrabold leading-[1.2] text-[#F5F6F7] min-[390px]:text-[32px] min-[430px]:text-[34px] sm:text-[38px]">
                <span className="block">{content.hero.headlineLine1}</span>
                <span className="mt-0.5 block">{content.hero.headlineLine2}</span>
              </h1>

              <p className="mt-2.5 text-balance text-[17.5px] font-bold leading-[1.4] text-[#F4585E] min-[390px]:text-[18.5px] sm:text-[20px]">
                {content.hero.subheadline}
              </p>
            </div>

            <p className="mt-4 max-w-[40ch] text-[15px] leading-[1.75] text-[#A7B0BC] sm:text-[16px]">
              {content.hero.description}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#B51219] px-5 text-[15px] font-bold text-white shadow-[0_10px_24px_-6px_rgba(181,18,25,0.6)] transition-colors hover:bg-[#9B0F15] sm:w-auto sm:flex-1"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                <span>{content.hero.primaryCta}</span>
              </a>

              <a
                href="#services"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[10px] border border-white/34 bg-[#151F2B]/80 px-5 text-[15px] font-bold text-[#F5F6F7] transition-colors hover:border-white/55 hover:bg-[#192533] sm:w-auto sm:flex-1"
              >
                <span>{content.hero.secondaryCta}</span>
                <SecondaryChevron className="h-4 w-4 text-[#F4585E]" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
