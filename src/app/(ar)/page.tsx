import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { arContent } from "@/content/ar";
import { buildLocaleMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildLocaleMetadata({
  locale: "ar",
  title: arContent.meta.title,
  description: arContent.meta.description,
});

export default function ArabicHomePage() {
  return <SiteShell content={arContent} />;
}
