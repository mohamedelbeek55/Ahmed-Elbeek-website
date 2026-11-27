export interface CompanyDetails {
  /** TODO: Add official commercial register number (السجل التجاري) */
  commercialRegister?: string;
  /** TODO: Add official tax card number (البطاقة الضريبية) */
  taxCard?: string;
  /** TODO: Add official importers' register number (سجل المستوردين) */
  importersRegister?: string;
  /** TODO: Add official office address in both languages */
  address?: {
    ar: string;
    en: string;
  };
  /** TODO: Add official working hours in both languages */
  workingHours?: {
    ar: string;
    en: string;
  };
}

export const COMPANY_CONTACT = {
  primaryPhoneDisplay: "01093313193",
  primaryPhoneE164: "+201093313193",
  primaryPhoneTel: "tel:+201093313193",
  secondaryPhoneDisplay: "01092755002",
  secondaryPhoneE164: "+201092755002",
  secondaryPhoneTel: "tel:+201092755002",
  email: "elbeekb2b@gmail.com",
  emailHref: "mailto:elbeekb2b@gmail.com",
  whatsappNumberInternational: "201093313193",
  vcardPath: "/ahmed-elbeek.vcf",
  getWhatsAppUrl: (locale: "ar" | "en") => {
    const text =
      locale === "ar"
        ? "مرحباً، أود الاستفسار عن خدمات الاستيراد والتصدير والتخليص الجمركي لدى شركة أحمد البيك."
        : "Hello, I would like to inquire about import, export, and customs clearance services with Ahmed Elbeek.";
    return `https://wa.me/201093313193?text=${encodeURIComponent(text)}`;
  },
} as const;

/**
 * Optional company registration details.
 * Leave fields commented/undefined until real verified numbers are supplied.
 * Only populated fields are rendered on the page.
 */
export const COMPANY_DETAILS: CompanyDetails = {
  // commercialRegister: "TODO",
  // taxCard: "TODO",
  // importersRegister: "TODO",
  // address: { ar: "TODO", en: "TODO" },
  // workingHours: { ar: "TODO", en: "TODO" },
};
