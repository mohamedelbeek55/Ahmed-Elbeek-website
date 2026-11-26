"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { SiteContent } from "@/content/types";

interface OurWorkSectionProps {
  content: SiteContent;
}

/**
 * Pure Visual Portfolio Gallery for "أعمالنا" (Our Work).
 * Intentionally avoids repetitive text captions beneath photos so the section
 * scales effortlessly as dozens of authentic operational photos are added.
 */
export function OurWorkSection({ content }: OurWorkSectionProps) {
  const photos = content.ourWork.photos;
  const isRtl = content.dir === "rtl";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + photos.length) % photos.length
    );
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % photos.length
    );
  }, [photos.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      } else if (e.key === "ArrowRight") {
        if (isRtl) handlePrev();
        else handleNext();
      } else if (e.key === "ArrowLeft") {
        if (isRtl) handleNext();
        else handlePrev();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, isRtl, handleNext, handlePrev]);

  const isOddCount = photos.length % 2 === 1;

  return (
    <section
      id="our-work"
      aria-labelledby="our-work-heading"
      className="scroll-mt-20 bg-[#0B0F14] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-[660px]">
            <p className="text-[13px] font-bold text-[#F4585E] sm:text-[14px]">
              {content.ourWork.eyebrow}
            </p>
            <h2
              id="our-work-heading"
              className="mt-2 text-[26px] font-extrabold leading-[1.28] text-[#F5F6F7] sm:text-[32px] lg:text-[36px]"
            >
              {content.ourWork.heading}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.75] text-[#A7B0BC] sm:text-[16px]">
              {content.ourWork.description}
            </p>
          </div>
        </div>

        {/* Chic Dark-Framed Square Bento Grid (scales cleanly for 3, 6, 12+ photos) */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {photos.map((photo, index) => {
            const isMobileLead = isOddCount && index === 0;
            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${content.ourWork.lightbox.openLabel}: ${photo.alt}`}
                className={`group relative overflow-hidden rounded-[16px] border border-[#D4B27A]/20 bg-[#151F2B] p-1.5 text-start shadow-[0_14px_34px_rgba(0,0,0,0.45)] transition-all duration-200 hover:border-[#D4B27A]/55 hover:bg-[#192533] focus-visible:ring-2 focus-visible:ring-[#D4B27A] ${
                  isMobileLead ? "col-span-2 lg:col-span-1" : "col-span-1"
                }`}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-[11px] bg-[#0B0F14]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={
                      isMobileLead
                        ? "(max-width: 1023px) 94vw, 33vw"
                        : "(max-width: 1023px) 46vw, 33vw"
                    }
                    style={{ objectPosition: photo.objectPosition ?? "50% 50%" }}
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />

                  {/* Subtle architectural inner frame vignette */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14]/45 via-transparent to-transparent shadow-[inset_0_0_24px_rgba(11,15,20,0.28)]"
                  />

                  {/* Restrained gold & crimson top corner mark */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-2.5 start-2.5 h-3 w-3 border-t-2 border-s-2 border-[#D4B27A]/70 opacity-80 transition-opacity group-hover:opacity-100"
                  />

                  {/* Expand icon pill (top-end away from truck wheels & bottom FAB) */}
                  <span
                    aria-hidden="true"
                    className="absolute top-2.5 end-2.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#0B0F14]/70 text-[#F5F6F7] backdrop-blur-sm transition-all duration-200 group-hover:border-[#D4B27A]/60 group-hover:bg-[#B51219] lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    <Expand className="h-3.5 w-3.5" strokeWidth={1.85} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Dark Lightbox Viewer */}
      {activeIndex !== null && photos[activeIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[activeIndex].alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F14]/94 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-[680px] overflow-hidden rounded-[20px] border border-[#D4B27A]/30 bg-[#121B26] p-2.5 shadow-[0_28px_70px_rgba(0,0,0,0.85)] sm:p-3.5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2.5 flex items-center justify-between px-1">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#D4B27A] tabular-nums">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B51219]" aria-hidden="true" />
                <bdi dir="ltr">
                  {activeIndex + 1} / {photos.length}
                </bdi>
              </span>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label={content.ourWork.lightbox.closeLabel}
                className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/15 bg-[#151F2B] text-[#F5F6F7] transition-colors hover:border-[#D4B27A]/50 hover:bg-[#192533]"
              >
                <X className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
              </button>
            </div>

            <div className="relative aspect-square w-full overflow-hidden rounded-[14px] bg-[#0B0F14]">
              <Image
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                fill
                sizes="(max-width: 768px) 92vw, 660px"
                className="object-contain"
              />
            </div>

            {photos.length > 1 && (
              <div className="mt-3 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label={content.ourWork.lightbox.prevLabel}
                  className="inline-flex h-11 min-w-[44px] flex-1 items-center justify-center gap-1.5 rounded-[10px] border border-white/15 bg-[#151F2B] px-4 text-[14px] font-semibold text-[#F5F6F7] transition-colors hover:border-[#D4B27A]/45 hover:bg-[#192533]"
                >
                  {isRtl ? (
                    <ChevronRight className="h-4 w-4 text-[#D4B27A]" aria-hidden="true" />
                  ) : (
                    <ChevronLeft className="h-4 w-4 text-[#D4B27A]" aria-hidden="true" />
                  )}
                  <span>{content.ourWork.lightbox.prevLabel}</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={content.ourWork.lightbox.nextLabel}
                  className="inline-flex h-11 min-w-[44px] flex-1 items-center justify-center gap-1.5 rounded-[10px] border border-white/15 bg-[#151F2B] px-4 text-[14px] font-semibold text-[#F5F6F7] transition-colors hover:border-[#D4B27A]/45 hover:bg-[#192533]"
                >
                  <span>{content.ourWork.lightbox.nextLabel}</span>
                  {isRtl ? (
                    <ChevronLeft className="h-4 w-4 text-[#D4B27A]" aria-hidden="true" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-[#D4B27A]" aria-hidden="true" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
