import type { SiteContent } from "./types";

export const enContent: SiteContent = {
  locale: "en",
  dir: "ltr",
  meta: {
    title: "Ahmed Elbeek Import & Export | Customs Clearance & Port Logistics",
    description:
      "Ahmed Elbeek Import & Export provides import, export, customs clearance, and cargo transport coordination across Al-Awja Land Port, Alexandria Port, and Damietta Port.",
  },
  brand: {
    title: "Ahmed Elbeek",
    subtitle: "Import & Export",
    logoAlt: "Ahmed Elbeek Import & Export Official Logo",
  },
  nav: [
    { id: "hero", label: "Home", href: "#hero" },
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "locations", label: "Locations", href: "#locations" },
    { id: "our-work", label: "Our Work", href: "#our-work" },
    { id: "why-us", label: "Why Us", href: "#why-us" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  header: {
    whatsappCta: "WhatsApp Us",
    menuOpenLabel: "Open navigation menu",
    menuCloseLabel: "Close navigation menu",
    switchLabel: "Switch to Arabic",
    directContactHeading: "Direct Contact",
    skipToContent: "Skip to main content",
  },
  hero: {
    portsLine: "Al-Awja Land Port  |  Alexandria Port  |  Damietta Port",
    headlineLine1: "Ahmed Elbeek",
    headlineLine2: "Import & Export",
    subheadline: "Trade Services. Every Detail Followed.",
    description:
      "Import, export, customs clearance, and cargo transport coordination across Al-Awja, Damietta, and Alexandria ports with dedicated follow-up.",
    primaryCta: "Contact via WhatsApp",
    secondaryCta: "Explore Services",
    yardAlt: "Twilight view of Al-Awja Land Port yard with cargo trucks and the Egyptian flag",
  },
  about: {
    eyebrow: "About Us",
    heading: "A practical trade partner for organized import, export, and customs execution.",
    paragraphs: [
      "Ahmed Elbeek Import & Export provides coordinated commercial trade services across key Egyptian land and maritime ports, with a clear focus on procedural accuracy and smooth cargo movement.",
      "From initial shipment scheduling and documentation review through customs clearance and inland dispatch, every operation receives direct, responsive follow-up.",
    ],
    pillars: [
      {
        label: "Operating Scope",
        value: "Key land & sea gateways (Al-Awja, Alexandria, Damietta)",
      },
      {
        label: "Core Services",
        value: "Import & export execution, customs clearance, and freight coordination",
      },
      {
        label: "Execution Approach",
        value: "Direct communication and continuous step-by-step follow-up",
      },
    ],
  },
  services: {
    eyebrow: "Our Services",
    heading: "Integrated Solutions for Your Trade Operations.",
    items: [
      {
        id: "import-export",
        icon: "package",
        title: "Import & Export",
        description: "Managing and executing commercial import and export shipments across diverse cargo categories.",
      },
      {
        id: "customs-clearance",
        icon: "file",
        title: "Customs Clearance",
        description: "Completing customs procedures and regulatory documentation accurately in line with port rules.",
      },
      {
        id: "freight-coordination",
        icon: "truck",
        title: "Freight & Shipment Coordination",
        description: "Organizing truck dispatch and cargo transport smoothly to and from land and sea ports.",
      },
      {
        id: "operations-followup",
        icon: "layers",
        title: "Operations Follow-up",
        description: "Dedicated on-ground monitoring and coordination across every procedural stage until completion.",
      },
    ],
  },
  locations: {
    eyebrow: "Operating Locations",
    heading: "Active Presence Across Key Gateways.",
    description:
      "Operations are coordinated across major Egyptian land and sea ports, with active coverage at Al-Awja Land Port, Alexandria Port, and Damietta Port.",
    items: [
      {
        id: "al-awja",
        name: "Al-Awja Land Port",
        typeBadge: "Land Port",
        role: "Coordinating cross-border truck movements, gate procedures, and direct field follow-up.",
        imageSrc: "/images/al-awja-gate.jpg",
        imageAlt: "Main arched gateway of Al-Awja Land Port",
        objectPosition: "50% 18%",
        featured: true,
      },
      {
        id: "alexandria",
        name: "Alexandria Port",
        typeBadge: "Sea Port",
        role: "Handling container and general cargo clearance alongside maritime-to-inland transport coordination.",
        imageSrc: "/images/alexandria-port.webp",
        imageAlt: "Container ship and gantry cranes at Alexandria Port terminal",
        objectPosition: "55% 45%",
      },
      {
        id: "damietta",
        name: "Damietta Port",
        typeBadge: "Sea Port",
        role: "Coordinating import/export shipments, port customs clearance, and inland freight scheduling.",
        imageSrc: "/images/damietta-port.jpg",
        imageAlt: "Port control tower and vessels at Damietta Port",
        objectPosition: "50% 48%",
      },
    ],
    flexibilityNote:
      "Operations are not limited to a single gateway; shipments can be coordinated across additional Egyptian ports based on cargo and routing requirements.",
  },
  ourWork: {
    eyebrow: "Our Work",
    heading: "Field Coordination Across Loading & Cargo Movement.",
    description:
      "Structured to showcase active truck loading, fully dispatched freight, varied commercial cargo types, and day-to-day operational supervision.",
    slots: [
      {
        id: "loading-trucks",
        icon: "loading",
        title: "Trucks During Loading",
        description: "Organizing truck staging and monitoring cargo arrangement throughout loading operations.",
        tag: "Loading Stage",
      },
      {
        id: "loaded-trucks",
        icon: "truck",
        title: "Fully Loaded Trucks",
        description: "Verifying load readiness and shipment documentation prior to departure toward the port.",
        tag: "Dispatch Ready",
      },
      {
        id: "diverse-cargo",
        icon: "cargo",
        title: "Diverse Cargo Types",
        description: "Coordinating varied commercial goods tailored to the handling needs of each shipment.",
        tag: "Cargo Variety",
      },
      {
        id: "field-operations",
        icon: "operations",
        title: "Live Field Operations",
        description: "On-ground coordination of paperwork, port entries, and stage-by-stage execution.",
        tag: "Field Execution",
      },
    ],
    fieldNote:
      "Authentic field photographs of company loading and transport operations will populate these gallery slots as published.",
  },
  whyUs: {
    eyebrow: "Why Us",
    heading: "Why Work With Us?",
    items: [
      {
        id: "detail-followup",
        icon: "target",
        title: "Attention to Every Detail",
        description: "Careful review of documents and shipment milestones to keep operations moving smoothly.",
      },
      {
        id: "clear-communication",
        icon: "message",
        title: "Clear Communication",
        description: "Direct, transparent status updates via responsive phone, email, and WhatsApp channels.",
      },
      {
        id: "tailored-coordination",
        icon: "workflow",
        title: "Tailored Coordination",
        description: "Scheduling clearance and transport around the practical requirements of each consignment.",
      },
      {
        id: "port-flexibility",
        icon: "shield",
        title: "Multi-Port Flexibility",
        description: "Adaptable coordination across land and sea ports according to client routing needs.",
      },
    ],
  },
  contact: {
    heading: "Contact Us",
    description: "Ready to answer your inquiries and coordinate your import, export, and customs clearance needs.",
    whatsappCta: "Chat on WhatsApp",
    phoneLabel: "Phone",
    emailLabel: "Email",
  },
  footer: {
    summary:
      "Import, export, customs clearance, and freight coordination services across Al-Awja Land Port, Alexandria Port, and Damietta Port.",
    navigationTitle: "Quick Links",
    contactTitle: "Contact Details",
    copyright: "© 2026 Ahmed Elbeek Import & Export. All rights reserved.",
  },
  floatingWhatsapp: {
    label: "WhatsApp",
    ariaLabel: "Chat with Ahmed Elbeek on WhatsApp at 01093313193",
  },
};
