import type { Metadata } from "next";
import { arContent } from "@/content/ar";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: arContent.meta.title,
  description: arContent.meta.description,
  alternates: {
    canonical: "/",
    languages: {
      ar: "/",
      en: "/en",
    },
  },
};

export default function HomePage() {
  return <SiteShell content={arContent} />;
}
