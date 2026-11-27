import type { SiteContent } from "./types";

export const enContent: SiteContent = {
  locale: "en",
  dir: "ltr",
  meta: {
    title: "Ahmed Elbeek Import & Export | Customs Clearance & Port Logistics",
    description:
      "Ahmed Elbeek Import & Export provides import, export, customs clearance, and cargo transport coordination across Al-Awja Land Port and Alexandria, Damietta, Suez, and Nuweiba ports.",
  },
  brand: {
    title: "Ahmed Elbeek",
    subtitle: "Import & Export",
    logoAlt: "Ahmed Elbeek Import & Export Official Logo",
  },
  nav: [
    { id: "hero", label: "Home", href: "#hero" },
    { id: "our-work", label: "Our Work", href: "#our-work" },
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "process", label: "How We Work", href: "#process" },
    { id: "locations", label: "Locations", href: "#locations" },
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
    ports: ["Al-Awja Land Port", "Alexandria", "Damietta", "Suez", "Nuweiba"],
    headlineLine1: "Ahmed Elbeek",
    headlineLine2: "Import & Export",
    subheadline: "Trade Services. Every Detail Followed.",
    description:
      "Import, export, customs clearance, and cargo transport coordination across Al-Awja, Alexandria, Damietta, Suez, and Nuweiba ports with dedicated follow-up.",
    primaryCta: "Contact via WhatsApp",
    secondaryCta: "Explore Services",
    yardAlt: "Twilight view of Al-Awja Land Port yard with cargo trucks and the Egyptian flag",
  },
  trustStrip: {
    ariaLabel: "Operating scope and service highlights",
    items: [
      {
        id: "ports-covered",
        icon: "ports",
        title: "5 Key Ports Covered",
        subtitle: "Al-Awja • Alexandria • Damietta • Suez • Nuweiba",
      },
      {
        id: "import-export",
        icon: "trade",
        title: "Import & Export",
        subtitle: "End-to-End Execution",
      },
      {
        id: "customs-clearance",
        icon: "clearance",
        title: "Customs Clearance",
        subtitle: "Compliant Port Processing",
      },
      {
        id: "field-followup",
        icon: "followup",
        title: "Field Follow-up",
        subtitle: "Port Gate to Delivery",
      },
    ],
  },
  about: {
    eyebrow: "About Us",
    heading: "A practical trade partner for organized import, export, and customs execution",
    paragraphs: [
      "Ahmed Elbeek Import & Export provides coordinated commercial trade services across key Egyptian land and maritime ports, with a clear focus on procedural accuracy and smooth cargo movement.",
      "From initial shipment scheduling and documentation review through customs clearance and inland dispatch, every operation receives direct, responsive follow-up.",
    ],
    pillars: [
      {
        label: "Operating Scope",
        value: "Key land & sea gateways (Al-Awja, Alexandria, Damietta, Suez, Nuweiba)",
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
    heading: "Integrated Solutions for Your Trade Operations",
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
  process: {
    eyebrow: "How We Work",
    heading: "Four Clear Steps From Inquiry to Delivery",
    description:
      "A structured operational sequence designed to keep paperwork accurate and cargo moving without unnecessary delays.",
    steps: [
      {
        number: "01",
        title: "Request & Consultation",
        description: "Reviewing cargo details, target port, and commercial requirements to confirm the execution plan.",
      },
      {
        number: "02",
        title: "Documents Preparation",
        description: "Checking invoices, bills of lading, and required customs paperwork prior to submission.",
      },
      {
        number: "03",
        title: "Customs Clearance & Port Coordination",
        description: "Managing inspections, port approvals, and customs release directly on-site at the gateway.",
      },
      {
        number: "04",
        title: "Transport & Delivery Follow-up",
        description: "Scheduling truck dispatch and tracking freight movement through final delivery.",
      },
    ],
  },
  locations: {
    eyebrow: "Operating Locations",
    heading: "Active Presence Across Key Gateways",
    description:
      "Operations are coordinated across major Egyptian land and sea ports, covering Al-Awja Land Port along with Alexandria, Damietta, Suez, and Nuweiba maritime ports.",
    items: [
      {
        id: "al-awja",
        name: "Al-Awja Land Port",
        typeBadge: "Land Port",
        role: "Coordinating cross-border truck movements, gate procedures, and direct field follow-up.",
        imageSrc: "/images/al-awja-gate.jpg",
        imageAlt: "Main arched gateway of Al-Awja Land Port",
        objectPosition: "50% 8%",
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
    secondaryPorts: [
      {
        id: "suez",
        name: "Suez Port",
        typeBadge: "Sea Port",
        role: "Coordinating customs clearance, container handling, and commercial import/export cargo through Suez Port.",
      },
      {
        id: "nuweiba",
        name: "Nuweiba Port",
        typeBadge: "Sea Port",
        role: "Managing cargo transit, truck coordination, and customs clearance procedures at Nuweiba Port.",
      },
    ],
    flexibilityNote:
      "Operations are not limited to a single gateway; shipments can be coordinated across additional Egyptian ports based on cargo and routing requirements.",
  },
  ourWork: {
    eyebrow: "Our Work",
    heading: "Real Snapshots from Our Field Operations",
    description:
      "Live scenes of truck staging, cargo loading, and fully loaded dispatches ready for port transit.",
    photos: [
      {
        id: "work-loading-flatbed",
        src: "/images/operations/٨-600x600.webp",
        alt: "Heavy transport flatbed truck during forklift loading of boxed cargo",
        objectPosition: "50% 50%",
      },
      {
        id: "work-industrial-rolls",
        src: "/images/operations/١١-600x600.webp",
        alt: "Transport trucks loaded with wrapped industrial rolls and covered cargo",
        objectPosition: "50% 50%",
      },
      {
        id: "work-palletized-cargo",
        src: "/images/operations/١٣-600x600.webp",
        alt: "Fully loaded trailer carrying wrapped palletized cargo in the loading yard",
        objectPosition: "50% 50%",
      },
    ],
    carouselDotsLabel: "Browse work photos",
    slideLabelPrefix: "View photo",
    lightbox: {
      openLabel: "View photo full size",
      closeLabel: "Close photo viewer",
      prevLabel: "Previous photo",
      nextLabel: "Next photo",
    },
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
    saveContact: "Save Contact",
    share: "Share",
    shareCopied: "Link copied",
    shareText: "Ahmed Elbeek Import & Export — Customs Clearance & Port Logistics in Egypt",
    companyDetailsHeading: "Official Company Details",
    detailsLabels: {
      commercialRegister: "Commercial Register",
      taxCard: "Tax Card",
      importersRegister: "Importers Register",
      address: "Address",
      workingHours: "Working Hours",
    },
  },
  footer: {
    summary:
      "Import, export, customs clearance, and freight coordination services across Al-Awja Land Port and Alexandria, Damietta, Suez, and Nuweiba ports.",
    navigationTitle: "Quick Links",
    contactTitle: "Contact Details",
    copyright: "© 2026 Ahmed Elbeek Import & Export. All rights reserved.",
  },
  floatingWhatsapp: {
    label: "WhatsApp",
    ariaLabel: "Chat with Ahmed Elbeek on WhatsApp at 01093313193",
  },
};
