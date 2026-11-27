import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { enContent } from "@/content/en";
import { buildLocaleMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildLocaleMetadata({
  locale: "en",
  title: enContent.meta.title,
  description: enContent.meta.description,
});

export default function EnglishHomePage() {
  return <SiteShell content={enContent} />;
}
