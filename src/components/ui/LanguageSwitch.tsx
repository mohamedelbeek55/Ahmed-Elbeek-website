import Link from "next/link";
import type { Locale } from "@/content/types";

interface LanguageSwitchProps {
  locale: Locale;
  label: string;
  surfaceClassName?: string;
  compactOnMobile?: boolean;
}

/**
 * Bilingual language switcher:
 * - Optional compact 44x44 single-button toggle on mobile (< lg) freeing space for the navbar logo
 * - Segmented two-pill switcher on desktop (>= lg) and in static contexts
 */
export function LanguageSwitch({
  locale,
  label,
  surfaceClassName = "bg-[#151F2B]/80",
  compactOnMobile = false,
}: LanguageSwitchProps) {
  const targetHref = locale === "ar" ? "/en" : "/";
  const targetCode = locale === "ar" ? "EN" : "AR";

  return (
    <>
      {compactOnMobile && (
        <Link
          href={targetHref}
          aria-label={label}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/15 bg-[#151F2B] text-[13px] font-extrabold tracking-wide text-[#D4B27A] transition-colors hover:border-[#D4B27A]/45 hover:bg-[#192533] lg:hidden"
        >
          {targetCode}
        </Link>
      )}

      <div
        role="group"
        aria-label={label}
        className={`${
          compactOnMobile ? "hidden lg:inline-flex" : "inline-flex"
        } h-11 items-center rounded-[10px] border border-white/15 ${surfaceClassName} text-[12.5px] font-bold`}
      >
        <Link
          href="/en"
          aria-current={locale === "en" ? "page" : undefined}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center p-1"
        >
          <span
            className={`inline-flex h-[34px] w-full items-center justify-center rounded-[7px] px-2 transition-colors ${
              locale === "en"
                ? "bg-[#D4B27A] text-[#0B0F14]"
                : "text-[#A7B0BC] hover:text-[#F5F6F7]"
            }`}
          >
            EN
          </span>
        </Link>
        <span className="h-4 w-px bg-white/15" aria-hidden="true" />
        <Link
          href="/"
          aria-current={locale === "ar" ? "page" : undefined}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center p-1"
        >
          <span
            className={`inline-flex h-[34px] w-full items-center justify-center rounded-[7px] px-2 transition-colors ${
              locale === "ar"
                ? "bg-[#D4B27A] text-[#0B0F14]"
                : "text-[#A7B0BC] hover:text-[#F5F6F7]"
            }`}
          >
            AR
          </span>
        </Link>
      </div>
    </>
  );
}
