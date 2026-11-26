export const COMPANY_CONTACT = {
  primaryPhoneDisplay: "01093313193",
  primaryPhoneTel: "tel:+201093313193",
  secondaryPhoneDisplay: "01092755002",
  secondaryPhoneTel: "tel:+201092755002",
  email: "elbeekb2b@gmail.com",
  emailHref: "mailto:elbeekb2b@gmail.com",
  whatsappNumberInternational: "201093313193",
  getWhatsAppUrl: (locale: "ar" | "en") => {
    const text =
      locale === "ar"
        ? "مرحباً، أود الاستفسار عن خدمات الاستيراد والتصدير والتخليص الجمركي لدى شركة أحمد البيك."
        : "Hello, I would like to inquire about import, export, and customs clearance services with Ahmed Elbeek.";
    return `https://wa.me/201093313193?text=${encodeURIComponent(text)}`;
  },
} as const;
