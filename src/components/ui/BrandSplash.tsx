"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/types";

interface BrandSplashProps {
  content: SiteContent;
}

/**
 * Lightweight, failsafe executive brand curtain displayed briefly while
 * the hero photograph and fonts finish decoding, then smoothly fades out.
 * Features the full stacked SVG crest centered on #0B0F14.
 */
export function BrandSplash({ content }: BrandSplashProps) {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setPhase("gone");
      return;
    }

    let cancelled = false;
    let fadeTimer: number | undefined;

    const minDelay = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 560);
    });

    const heroReady = new Promise<void>((resolve) => {
      const heroImg = document.querySelector<HTMLImageElement>("#hero img");
      if (!heroImg || heroImg.complete) {
        resolve();
        return;
      }
      const done = () => resolve();
      heroImg.addEventListener("load", done, { once: true });
      heroImg.addEventListener("error", done, { once: true });
    });

    const fontsReady =
      typeof document !== "undefined" && document.fonts?.ready
        ? document.fonts.ready.then(() => undefined).catch(() => undefined)
        : Promise.resolve();

    const hardCap = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1000);
    });

    Promise.race([
      Promise.all([minDelay, heroReady, fontsReady]),
      hardCap,
    ]).then(() => {
      if (cancelled) return;
      setPhase("fading");
      fadeTimer = window.setTimeout(() => {
        if (!cancelled) setPhase("gone");
      }, 340);
    });

    return () => {
      cancelled = true;
      if (fadeTimer) window.clearTimeout(fadeTimer);
    };
  }, []);

  if (phase === "gone") return null;

  const isFading = phase === "fading";

  return (
    <div
      id="brand-splash"
      aria-hidden={isFading ? "true" : undefined}
      role="status"
      aria-label={content.brand.logoAlt}
      className={`splash-safety-fade fixed inset-0 z-[70] flex flex-col items-center justify-center bg-[#0B0F14] px-6 transition-all duration-[320ms] ease-out ${
        isFading ? "pointer-events-none scale-[1.015] opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundImage:
          "radial-gradient(520px circle at 50% 44%, rgba(181, 18, 25, 0.14), rgba(212, 178, 122, 0.04) 45%, transparent 72%)",
      }}
    >
      <div className="flex flex-col items-center text-center">
        <Image
          src="/logo/logo-full-dark.svg"
          alt={content.brand.logoAlt}
          width={230}
          height={178}
          priority
          unoptimized
          className="h-auto w-[185px] object-contain sm:w-[225px]"
        />

        {content.locale === "ar" && (
          <p className="mt-4 text-[17px] font-bold tracking-normal text-[#F5F6F7] sm:text-[19px]">
            {content.brand.title}{" "}
            <span className="text-[#D4B27A]">{content.brand.subtitle}</span>
          </p>
        )}

        {/* Restrained gold-to-crimson loading hairline */}
        <div
          aria-hidden="true"
          className="mt-5 h-[2px] w-40 overflow-hidden rounded-full bg-white/10 sm:w-48"
        >
          <div className="splash-progress-bar h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#D4B27A] to-[#B51219]" />
        </div>
      </div>
    </div>
  );
}
