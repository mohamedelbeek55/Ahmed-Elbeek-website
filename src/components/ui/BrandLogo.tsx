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
 * - Header: crisp globe mark SVG directly on dark surface next to bilingual live HTML title/subtitle
 * - Footer: full stacked dark-mode SVG lockup cleanly sized without opaque plaque backing
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
      <div className="inline-block max-w-full">
        <Image
          src="/logo/logo-full-dark.svg"
          alt={alt}
          width={180}
          height={139}
          unoptimized
          className="h-auto w-[160px] object-contain sm:w-[180px]"
        />
      </div>
    );
  }

  return (
    <a
      href="#hero"
      className="group inline-flex min-h-[44px] min-w-0 items-center gap-2.5 py-1 transition-opacity duration-200 hover:opacity-90 sm:gap-3"
    >
      <Image
        src="/logo/logo-mark-dark.svg"
        alt={alt}
        width={40}
        height={40}
        priority
        unoptimized
        className="h-9 w-9 shrink-0 object-contain lg:h-10 lg:w-10"
      />
      <span className="flex min-w-0 flex-col">
        <span
          className={`truncate font-extrabold leading-tight text-[#F5F6F7] ${
            locale === "ar" ? "text-[15px] sm:text-[16px]" : "text-[14px] sm:text-[15px]"
          }`}
        >
          {title}
        </span>
        <span
          className={`truncate font-medium leading-tight text-[#D4B27A] ${
            locale === "ar"
              ? "text-[12px] sm:text-[12.5px]"
              : "text-[12px] uppercase tracking-[0.04em]"
          }`}
        >
          {subtitle}
        </span>
      </span>
    </a>
  );
}
