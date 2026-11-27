"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { SiteContent } from "@/content/types";
import { SectionHeader } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface OurWorkSectionProps {
  content: SiteContent;
}

/**
 * Pure Visual Portfolio Gallery for "أعمالنا" (Our Work).
 * - When < 6 photos: horizontal snap-scroll carousel with dot pagination on mobile (< lg)
 *   and uniform 3-column grid on desktop (>= lg).
 * - When >= 6 photos: responsive grid across all viewports.
 * - Full-screen accessible Lightbox with focus trap, focus restoration, RTL touch swipe,
 *   and adjacent-slide preloading.
 */
export function OurWorkSection({ content }: OurWorkSectionProps) {
  const photos = content.ourWork.photos;
  const isRtl = content.dir === "rtl";
  const useMobileCarousel = photos.length < 6;

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

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

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
    window.setTimeout(() => {
      lastTriggerRef.current?.focus();
    }, 20);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        if (isRtl) handlePrev();
        else handleNext();
      } else if (e.key === "ArrowLeft") {
        if (isRtl) handleNext();
        else handlePrev();
      } else if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, handleNext, handlePrev, isRtl]);

  const handleCarouselScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const containerCenter =
      container.getBoundingClientRect().left + container.clientWidth / 2;

    let closest = 0;
    let closestDist = Infinity;
    slideRefs.current.forEach((btn, idx) => {
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const center = r.left + r.width / 2;
      const dist = Math.abs(center - containerCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = idx;
      }
    });
    setActiveSlide(closest);
  };

  const scrollToSlide = (idx: number) => {
    const target = slideRefs.current[idx];
    if (!target) return;
    target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveSlide(idx);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartXRef.current;
    const dy = e.changedTouches[0].clientY - touchStartYRef.current;
    touchStartXRef.current = null;
    touchStartYRef.current = null;

    // Require clear horizontal intent (>= 40px and stronger than vertical drift)
    if (Math.abs(dx) < 40 || Math.abs(dx) <= Math.abs(dy)) return;
    if (isRtl) {
      if (dx > 0) handleNext();
      else handlePrev();
    } else {
      if (dx < 0) handleNext();
      else handlePrev();
    }
  };

  const prevIndex =
    activeIndex !== null ? (activeIndex - 1 + photos.length) % photos.length : null;
  const nextIndex =
    activeIndex !== null ? (activeIndex + 1) % photos.length : null;

  return (
    <section
      id="our-work"
      aria-labelledby="our-work-heading"
      className="scroll-mt-20 bg-[#0B0F14] pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16"
    >
      <div className="mx-auto max-w-[1380px] px-4 min-[390px]:px-5 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            eyebrow={content.ourWork.eyebrow}
            heading={content.ourWork.heading}
            headingId="our-work-heading"
          />
        </RevealOnScroll>

        {/* Gallery Container: Mobile snap-scroll carousel (< 6 photos) -> Desktop 3-col grid */}
        <div
          ref={carouselRef}
          onScroll={useMobileCarousel ? handleCarouselScroll : undefined}
          className={
            useMobileCarousel
              ? "no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 min-[390px]:-mx-5 min-[390px]:px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0"
              : "mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6"
          }
        >
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              type="button"
              onClick={(e) => {
                lastTriggerRef.current = e.currentTarget;
                setActiveIndex(index);
              }}
              aria-label={`${content.ourWork.lightbox.openLabel}: ${photo.alt}`}
              className={`group relative overflow-hidden rounded-[16px] border border-[#D4B27A]/20 bg-[#151F2B] p-1.5 text-start shadow-[0_14px_34px_rgba(0,0,0,0.45)] transition-all duration-200 hover:border-[#D4B27A]/55 hover:bg-[#192533] focus-visible:ring-2 focus-visible:ring-[#D4B27A] ${
                useMobileCarousel
                  ? "w-[82%] shrink-0 snap-center sm:w-[60%] lg:w-auto"
                  : "w-full"
              }`}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[11px] bg-[#0B0F14]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    useMobileCarousel
                      ? "(max-width: 639px) 82vw, (max-width: 1023px) 60vw, 33vw"
                      : "(max-width: 1023px) 46vw, 33vw"
                  }
                  style={{ objectPosition: photo.objectPosition ?? "50% 50%" }}
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F14]/45 via-transparent to-transparent shadow-[inset_0_0_24px_rgba(11,15,20,0.28)]"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-2.5 start-2.5 h-3 w-3 border-t-2 border-s-2 border-[#D4B27A]/70 opacity-80 transition-opacity group-hover:opacity-100"
                />

                <span
                  aria-hidden="true"
                  className="absolute top-2.5 end-2.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#0B0F14]/70 text-[#F5F6F7] backdrop-blur-sm transition-all duration-200 group-hover:border-[#D4B27A]/60 group-hover:bg-[#D4B27A] group-hover:text-[#0B0F14] lg:opacity-0 lg:group-hover:opacity-100"
                >
                  <Expand className="h-4 w-4" strokeWidth={1.85} />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Carousel Dot Indicators (when < 6 photos) */}
        {useMobileCarousel && photos.length > 1 && (
          <div
            role="group"
            aria-label={content.ourWork.carouselDotsLabel}
            className="mt-3 flex items-center justify-center gap-1 lg:hidden"
          >
            {photos.map((photo, index) => {
              const isSelected = activeSlide === index;
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => scrollToSlide(index)}
                  aria-label={`${content.ourWork.slideLabelPrefix} ${index + 1}`}
                  aria-pressed={isSelected}
                  className="inline-flex h-11 min-w-[44px] items-center justify-center"
                >
                  <span
                    className={`h-2 rounded-full transition-all duration-200 ${
                      isSelected
                        ? "w-7 bg-[#D4B27A]"
                        : "w-2 bg-white/25"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Interactive Accessible Lightbox Viewer */}
      {activeIndex !== null && photos[activeIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[activeIndex].alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F14]/94 p-4 backdrop-blur-md sm:p-6"
          onClick={closeLightbox}
        >
          <div
            ref={dialogRef}
            className="relative w-full max-w-[680px] overflow-hidden rounded-[20px] border border-[#D4B27A]/30 bg-[#121B26] p-2.5 shadow-[0_28px_70px_rgba(0,0,0,0.85)] sm:p-3.5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2.5 flex items-center justify-between px-1">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#D4B27A] tabular-nums">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4B27A]" aria-hidden="true" />
                <bdi dir="ltr">
                  {activeIndex + 1} / {photos.length}
                </bdi>
              </span>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeLightbox}
                aria-label={content.ourWork.lightbox.closeLabel}
                className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/15 bg-[#151F2B] text-[#F5F6F7] transition-colors hover:border-[#D4B27A]/50 hover:bg-[#192533]"
              >
                <X className="h-5 w-5" strokeWidth={1.85} aria-hidden="true" />
              </button>
            </div>

            <div
              className="relative aspect-square w-full touch-pan-y overflow-hidden rounded-[14px] bg-[#0B0F14]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                key={photos[activeIndex].id}
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                fill
                priority
                sizes="(max-width: 768px) 92vw, 660px"
                className="object-contain"
              />

              {/* Preload adjacent slides silently for instant transitions */}
              {prevIndex !== null && prevIndex !== activeIndex && (
                <Image
                  src={photos[prevIndex].src}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 768px) 92vw, 660px"
                  className="pointer-events-none opacity-0"
                />
              )}
              {nextIndex !== null &&
                nextIndex !== activeIndex &&
                nextIndex !== prevIndex && (
                  <Image
                    src={photos[nextIndex].src}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 768px) 92vw, 660px"
                    className="pointer-events-none opacity-0"
                  />
                )}
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
