import { COMPANY_CONTACT, COMPANY_DETAILS } from "@/content/contact";
import type { SiteContent } from "@/content/types";
import { SITE_URL } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { OurWorkSection } from "@/components/sections/OurWorkSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { AnalyticsTracker } from "@/components/ui/AnalyticsTracker";

interface SiteShellProps {
  content: SiteContent;
}

export function SiteShell({ content }: SiteShellProps) {
  const isAr = content.locale === "ar";
  const orgAddress = isAr
    ? COMPANY_DETAILS.address?.ar
    : COMPANY_DETAILS.address?.en;

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: isAr
      ? "أحمد البيك للاستيراد والتصدير"
      : "Ahmed Elbeek Import & Export",
    alternateName: isAr
      ? "Ahmed Elbeek Import & Export"
      : "أحمد البيك للاستيراد والتصدير",
    url: `${SITE_URL}${isAr ? "/" : "/en"}`,
    logo: `${SITE_URL}/images/Ahmed%20Elbeek%20Global%20Trade%20Logo.png`,
    email: COMPANY_CONTACT.email,
    telephone: [
      COMPANY_CONTACT.primaryPhoneE164,
      COMPANY_CONTACT.secondaryPhoneE164,
    ],
    areaServed: [
      { "@type": "Place", name: "Al-Awja Land Port" },
      { "@type": "Place", name: "Alexandria Port" },
      { "@type": "Place", name: "Damietta Port" },
      { "@type": "Country", name: "Egypt" },
    ],
    ...(orgAddress ? { address: orgAddress } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_CONTACT.primaryPhoneE164,
        contactType: "customer service",
        availableLanguage: ["Arabic", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: COMPANY_CONTACT.secondaryPhoneE164,
        contactType: "customer service",
        availableLanguage: ["Arabic", "English"],
      },
    ],
  };

  return (
    <div dir={content.dir} className="min-h-screen bg-[#0B0F14] text-[#F5F6F7]">
      <AnalyticsTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <Header content={content} />

      <main id="main-content">
        <HeroSection content={content} />
        <TrustStrip content={content} />
        <AboutSection content={content} />
        <ServicesSection content={content} />
        <ProcessSection content={content} />
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
