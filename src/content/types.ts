export type Locale = "ar" | "en";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface TrustItem {
  id: string;
  icon: "ports" | "trade" | "clearance" | "followup";
  title: string;
  subtitle: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
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

export interface WorkPhotoItem {
  id: string;
  src: string;
  alt: string;
  objectPosition?: string;
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
    ports: string[];
    headlineLine1: string;
    headlineLine2: string;
    subheadline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    yardAlt: string;
  };
  trustStrip: {
    ariaLabel: string;
    items: TrustItem[];
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
  process: {
    eyebrow: string;
    heading: string;
    description: string;
    steps: ProcessStep[];
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
    photos: WorkPhotoItem[];
    carouselDotsLabel: string;
    slideLabelPrefix: string;
    lightbox: {
      openLabel: string;
      closeLabel: string;
      prevLabel: string;
      nextLabel: string;
    };
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
    saveContact: string;
    share: string;
    shareCopied: string;
    shareText: string;
    companyDetailsHeading: string;
    detailsLabels: {
      commercialRegister: string;
      taxCard: string;
      importersRegister: string;
      address: string;
      workingHours: string;
    };
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
