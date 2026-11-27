import type { Metadata, Viewport } from "next";

// Set NEXT_PUBLIC_SITE_URL in Vercel project settings when binding final production domain
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://ahmedelbeek.com";

export const sharedViewport: Viewport = {
  themeColor: "#0B0F14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export function buildLocaleMetadata(opts: {
  locale: "ar" | "en";
  title: string;
  description: string;
}): Metadata {
  const isAr = opts.locale === "ar";
  const path = isAr ? "/" : "/en";
  const ogImage = isAr ? "/opengraph-ar.png" : "/opengraph-en.png";

  return {
    metadataBase: new URL(SITE_URL),
    title: opts.title,
    description: opts.description,
    alternates: {
      canonical: path,
      languages: {
        ar: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_EG" : "en_US",
      alternateLocale: isAr ? ["en_US"] : ["ar_EG"],
      url: path,
      siteName: isAr
        ? "أحمد البيك للاستيراد والتصدير"
        : "Ahmed Elbeek Import & Export",
      title: opts.title,
      description: opts.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: opts.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [ogImage],
    },
  };
}
