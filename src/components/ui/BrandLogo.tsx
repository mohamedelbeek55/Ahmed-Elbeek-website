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
 * - Header: crisp globe mark SVG seamlessly on dark nav next to live bilingual
 *   title + official "Ahmed Elbeek · IMPORT & EXPORT" typography (no boxed frame).
 * - Footer: full stacked dark-mode SVG lockup beside localized brand name.
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
          width={176}
          height={136}
          unoptimized
          className="h-auto w-[142px] shrink-0 object-contain sm:w-[168px]"
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
      className="group inline-flex min-h-[44px] min-w-0 items-center gap-2.5 py-0.5 transition-opacity duration-200 hover:opacity-90 sm:gap-3"
    >
      <Image
        src="/logo/logo-mark-dark.svg"
        alt={alt}
        width={42}
        height={42}
        priority
        unoptimized
        className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10 lg:h-[42px] lg:w-[42px]"
      />
      {locale === "ar" ? (
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-[14.5px] font-extrabold leading-tight text-[#F5F6F7] sm:text-[15.5px]">
            {title}
            <span className="hidden min-[430px]:inline lg:hidden xl:inline">
              {" "}
              {subtitle}
            </span>
          </span>
          <span
            dir="ltr"
            className="mt-0.5 flex items-center gap-1.5 truncate text-[12px] font-semibold leading-tight text-[#D4B27A]"
          >
            <span
              aria-hidden="true"
              className="hidden h-[1.5px] w-2.5 shrink-0 bg-[#B51219] xl:inline-block"
            />
            <span className="truncate tracking-[0.02em]">
              Ahmed Elbeek
              <span className="hidden sm:inline lg:hidden xl:inline">
                {" "}
                · IMPORT &amp; EXPORT
              </span>
            </span>
            <span
              aria-hidden="true"
              className="hidden h-[1.5px] w-2.5 shrink-0 bg-[#B51219] xl:inline-block"
            />
          </span>
        </span>
      ) : (
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-[15px] font-extrabold leading-tight text-[#F5F6F7] sm:text-[16px]">
            {title}
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 truncate text-[12px] font-semibold uppercase leading-tight tracking-[0.05em] text-[#D4B27A]">
            <span
              aria-hidden="true"
              className="hidden h-[1.5px] w-2.5 shrink-0 bg-[#B51219] sm:inline-block"
            />
            <span className="truncate">{subtitle}</span>
            <span
              aria-hidden="true"
              className="hidden h-[1.5px] w-2.5 shrink-0 bg-[#B51219] sm:inline-block"
            />
          </span>
        </span>
      )}
    </a>
  );
}
