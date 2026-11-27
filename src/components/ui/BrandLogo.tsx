import Image from "next/image";

interface BrandLogoProps {
  title: string;
  subtitle: string;
  alt: string;
  locale: "ar" | "en";
  variant?: "header" | "footer";
}

/**
 * Transparent vector brand logo system preserving the full stacked lockup
 * (globe + "Ahmed Elbeek" + "IMPORT & EXPORT") without any white box backing.
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
      className="group inline-flex min-h-[44px] min-w-0 items-center gap-2 py-0.5 transition-opacity duration-200 hover:opacity-90 sm:gap-3"
    >
      <Image
        src="/logo/logo-full-dark.svg"
        alt={alt}
        width={65}
        height={50}
        priority
        unoptimized
        className="h-10 w-auto shrink-0 object-contain sm:h-11 lg:h-[50px]"
      />
      <span className="flex min-w-0 flex-col">
        <span
          className={`truncate font-extrabold leading-tight text-[#F5F6F7] ${
            locale === "ar" ? "text-[14.5px] sm:text-[16px]" : "text-[13.5px] sm:text-[15px]"
          }`}
        >
          {title}
        </span>
        <span
          className={`truncate font-medium leading-tight text-[#D4B27A] ${
            locale === "ar"
              ? "text-[12px] sm:text-[12.5px]"
              : "text-[11px] min-[390px]:text-[12px] uppercase tracking-[0.03em]"
          }`}
        >
          {subtitle}
        </span>
      </span>
    </a>
  );
}
