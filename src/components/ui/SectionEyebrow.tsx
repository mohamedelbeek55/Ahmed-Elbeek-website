interface SectionEyebrowProps {
  eyebrow: string;
  heading: string;
  headingId: string;
  description?: string;
  maxWidthClass?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  headingId,
  description,
  maxWidthClass = "max-w-[700px]",
}: SectionEyebrowProps) {
  return (
    <div className={maxWidthClass}>
      <p className="text-[13px] font-bold tracking-normal text-[#D4B27A] sm:text-[14px]">
        {eyebrow}
      </p>
      <div
        aria-hidden="true"
        className="mt-2 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#D4B27A] to-[#D4B27A]/15"
      />
      <h2
        id={headingId}
        className="mt-3 text-[26px] font-extrabold leading-[1.25] text-[#F5F6F7] sm:text-[32px] lg:text-[40px] xl:text-[42px]"
      >
        {heading}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-[1.75] text-[#A7B0BC] sm:text-[16px]">
          {description}
        </p>
      )}
    </div>
  );
}
