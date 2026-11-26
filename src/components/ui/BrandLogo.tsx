import Image from "next/image";

interface BrandLogoProps {
  title: string;
  subtitle: string;
  alt: string;
  locale: "ar" | "en";
  variant?: "header" | "footer";
}

/**
 * Deliberate architectural white crest plaque framing the unmodified 1254x1254
 * master PNG so it integrates naturally with the dark charcoal surfaces.
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
      <div className="flex items-center gap-4">
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-[16px] border border-white/20 border-b-[3px] border-b-[#B51219] bg-[#FDFDFD] p-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.55)] sm:h-[108px] sm:w-[108px]">
          <Image
            src="/images/Ahmed Elbeek Global Trade Logo.png"
            alt={alt}
            width={1254}
            height={1254}
            sizes="112px"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[19px] font-extrabold leading-snug text-[#F5F6F7] sm:text-[21px]">
            {title}
          </p>
          <p
            className={`mt-0.5 font-semibold text-[#F4585E] ${
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
      className="group inline-flex min-w-0 items-center gap-2.5 rounded-[12px] border border-white/10 bg-[#151F2B]/90 p-1 pe-3 shadow-[0_6px_18px_rgba(0,0,0,0.42)] transition-colors duration-200 hover:border-white/20 sm:gap-3 sm:p-1.5 sm:pe-3.5"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[8px] border-b-2 border-[#B51219] bg-[#FDFDFD] p-0.5 ring-1 ring-black/10 sm:h-11 sm:w-11">
        <Image
          src="/images/Ahmed Elbeek Global Trade Logo.png"
          alt={alt}
          width={1254}
          height={1254}
          priority
          sizes="48px"
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex min-w-0 flex-col">
        <span
          className={`truncate font-extrabold leading-tight text-[#F5F6F7] ${
            locale === "ar" ? "text-[15px] sm:text-[16px]" : "text-[14px] sm:text-[15px]"
          }`}
        >
          {title}
        </span>
        <span
          className={`truncate font-medium leading-tight text-[#A7B0BC] ${
            locale === "ar"
              ? "text-[11px] sm:text-[12px]"
              : "text-[11px] uppercase tracking-[0.06em] sm:text-[11.5px]"
          }`}
        >
          {subtitle}
        </span>
      </span>
    </a>
  );
}
