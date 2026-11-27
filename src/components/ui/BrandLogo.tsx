import Image from "next/image";

interface BrandLogoProps {
  title: string;
  subtitle: string;
  alt: string;
  locale: "ar" | "en";
  variant?: "header" | "footer";
}

/**
 * Transparent vector brand logo system:
 * - Header: full stacked dark-mode SVG lockup presented cleanly at prominent scale
 *   so globe, "Ahmed Elbeek", and "IMPORT & EXPORT" remain crisp without extra box chrome.
 * - Footer: full stacked SVG lockup beside localized company identity.
 */
export function BrandLogo({
  title,
  subtitle,
  alt,
  locale,
  variant = "header",
}: BrandLogoProps) {
  if (variant === "footer") {
    return (
      <div className="flex flex-wrap items-center gap-4">
        <Image
          src="/logo/logo-full-dark.svg"
          alt={alt}
          width={180}
          height={139}
          unoptimized
          className="h-auto w-[150px] shrink-0 object-contain sm:w-[176px]"
        />
        <div className="min-w-0">
          <p className="text-[19px] font-extrabold leading-snug text-[#F5F6F7] sm:text-[21px]">
            {title}
          </p>
          <p
            className={`mt-0.5 font-semibold text-[#D4B27A] ${
              locale === "ar"
                ? "text-[14px]"
                : "text-[12.5px] uppercase tracking-[0.08em]"
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    );
  }

  return (
    <a
      href="#hero"
      className="group inline-flex min-h-[48px] shrink-0 items-center py-1 transition-opacity duration-200 hover:opacity-90"
    >
      <Image
        src="/logo/logo-full-dark.svg"
        alt={alt}
        width={106}
        height={82}
        priority
        unoptimized
        className="h-[58px] w-auto object-contain sm:h-[64px] lg:h-[72px]"
      />
    </a>
  );
}
