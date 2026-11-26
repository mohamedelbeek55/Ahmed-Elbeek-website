"use client";

import { useEffect } from "react";
import type { SiteContent } from "@/content/types";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { OurWorkSection } from "@/components/sections/OurWorkSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

interface SiteShellProps {
  content: SiteContent;
}

export function SiteShell({ content }: SiteShellProps) {
  useEffect(() => {
    document.documentElement.lang = content.locale;
    document.documentElement.dir = content.dir;
  }, [content.locale, content.dir]);

  return (
    <div
      dir={content.dir}
      data-locale={content.locale}
      className="min-h-screen bg-[#0B0F14] text-[#F5F6F7]"
    >
      <Header content={content} />

      <main id="main-content">
        <HeroSection content={content} />
        <AboutSection content={content} />
        <ServicesSection content={content} />
        <LocationsSection content={content} />
        <OurWorkSection content={content} />
        <WhyUsSection content={content} />
        <ContactSection content={content} />
      </main>

      <Footer content={content} />
      <FloatingWhatsApp content={content} />
    </div>
  );
}
