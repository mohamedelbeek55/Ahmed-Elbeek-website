"use client";

import { useState } from "react";
import { Check, Share2, UserPlus } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/contact";
import type { Locale } from "@/content/types";
import { SITE_URL } from "@/lib/metadata";
import { trackEvent } from "@/lib/analytics";

interface ShareSaveActionsProps {
  locale: Locale;
  saveLabel: string;
  shareLabel: string;
  copiedLabel: string;
  shareTitle: string;
  shareText: string;
  location: "contact" | "drawer";
  compact?: boolean;
}

export function ShareSaveActions({
  locale,
  saveLabel,
  shareLabel,
  copiedLabel,
  shareTitle,
  shareText,
  location,
  compact = false,
}: ShareSaveActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl =
      typeof window !== "undefined"
        ? window.location.origin + (locale === "en" ? "/en" : "/")
        : `${SITE_URL}${locale === "en" ? "/en" : "/"}`;

    trackEvent("share_click", { locale, location, target: shareUrl });

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // Ignore user cancel; fallback to clipboard only on unsupported/errors
        if (err instanceof Error && err.name === "AbortError") return;
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2400);
      } catch {
        // Fallback ignored if clipboard denied
      }
    }
  };

  return (
    <div className={`grid gap-2.5 ${compact ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
      <a
        href={COMPANY_CONTACT.vcardPath}
        download="Ahmed-Elbeek.vcf"
        onClick={() => trackEvent("save_contact", { locale, location, target: "ahmed-elbeek.vcf" })}
        className={`inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#D4B27A]/35 bg-[#121B26] font-semibold text-[#F5F6F7] transition-colors hover:border-[#D4B27A]/65 hover:bg-[#192533] ${
          compact ? "min-h-[44px] px-3 text-[13px]" : "min-h-[48px] px-4 text-[14.5px]"
        }`}
      >
        <UserPlus className="h-4 w-4 shrink-0 text-[#D4B27A]" strokeWidth={1.75} aria-hidden="true" />
        <span>{saveLabel}</span>
      </a>

      <button
        type="button"
        onClick={handleShare}
        className={`inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/20 bg-[#121B26] font-semibold text-[#F5F6F7] transition-colors hover:border-white/40 hover:bg-[#192533] ${
          compact ? "min-h-[44px] px-3 text-[13px]" : "min-h-[48px] px-4 text-[14.5px]"
        }`}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 shrink-0 text-[#25D366]" strokeWidth={2} aria-hidden="true" />
            <span>{copiedLabel}</span>
          </>
        ) : (
          <>
            <Share2 className="h-4 w-4 shrink-0 text-[#F4585E]" strokeWidth={1.75} aria-hidden="true" />
            <span>{shareLabel}</span>
          </>
        )}
      </button>
    </div>
  );
}
