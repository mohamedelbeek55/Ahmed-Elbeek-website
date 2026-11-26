import type { Metadata } from "next";
import { enContent } from "@/content/en";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: enContent.meta.title,
  description: enContent.meta.description,
  alternates: {
    canonical: "/en",
    languages: {
      ar: "/",
      en: "/en",
    },
  },
};

export default function EnglishHomePage() {
  return <SiteShell content={enContent} />;
}
