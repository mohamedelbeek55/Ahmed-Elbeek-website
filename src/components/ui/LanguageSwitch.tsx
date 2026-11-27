import Link from "next/link";
import type { Locale } from "@/content/types";

interface LanguageSwitchProps {
  locale: Locale;
  label: string;
  surfaceClassName?: string;
}

/**
 * Bilingual segmented language toggle with 44x44px accessible hit targets
 * and recessed inner indicator pills.
 */
export function LanguageSwitch({
  locale,
  label,
  surfaceClassName = "bg-[#151F2B]/80",
}: LanguageSwitchProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`inline-flex h-11 items-center rounded-[10px] border border-white/15 ${surfaceClassName} text-[12.5px] font-bold`}
    >
      <Link
        href="/en"
        aria-current={locale === "en" ? "page" : undefined}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center p-1"
      >
        <span
          className={`inline-flex h-[34px] w-full items-center justify-center rounded-[7px] px-2 transition-colors ${
            locale === "en"
              ? "bg-[#B51219] text-white"
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
              ? "bg-[#B51219] text-white"
              : "text-[#A7B0BC] hover:text-[#F5F6F7]"
          }`}
        >
          AR
        </span>
      </Link>
    </div>
  );
}
