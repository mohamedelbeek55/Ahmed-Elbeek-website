export type Locale = "ar" | "en";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  icon: "package" | "file" | "truck" | "layers";
  title: string;
  description: string;
}

export interface LocationItem {
  id: string;
  name: string;
  typeBadge: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition: string;
  featured?: boolean;
}

export interface WorkSlotItem {
  id: string;
  icon: "loading" | "truck" | "cargo" | "operations";
  title: string;
  description: string;
  tag: string;
}

export interface WhyUsItem {
  id: string;
  icon: "target" | "message" | "workflow" | "shield";
  title: string;
  description: string;
}

export interface SiteContent {
  locale: Locale;
  dir: "rtl" | "ltr";
  meta: {
    title: string;
    description: string;
  };
  brand: {
    title: string;
    subtitle: string;
    logoAlt: string;
  };
  nav: NavItem[];
  header: {
    whatsappCta: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    switchLabel: string;
    directContactHeading: string;
    skipToContent: string;
  };
  hero: {
    portsLine: string;
    headlineLine1: string;
    headlineLine2: string;
    subheadline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    yardAlt: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    pillars: {
      label: string;
      value: string;
    }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    items: ServiceItem[];
  };
  locations: {
    eyebrow: string;
    heading: string;
    description: string;
    items: LocationItem[];
    flexibilityNote: string;
  };
  ourWork: {
    eyebrow: string;
    heading: string;
    description: string;
    slots: WorkSlotItem[];
    fieldNote: string;
  };
  whyUs: {
    eyebrow: string;
    heading: string;
    items: WhyUsItem[];
  };
  contact: {
    heading: string;
    description: string;
    whatsappCta: string;
    phoneLabel: string;
    emailLabel: string;
  };
  footer: {
    summary: string;
    navigationTitle: string;
    contactTitle: string;
    copyright: string;
  };
  floatingWhatsapp: {
    label: string;
    ariaLabel: string;
  };
}
