// Firm data — sourced from "Profile Shams Law Chamber 2026 August (updated)"
// and the Jahangir Shams practice pamphlet. Single source of truth for the site.

export const firm = {
  name: "Shams Law Chamber",
  legalName: "M/S Shams Law Chamber & Company",
  initials: "SLC",
  tagline: "Barristers & Advocates",
  subTagline: "Advocates & Legal Consultants",
  founded: 2002,
  founderName: "Mr. Shamsuddin Rajper",
  barCouncil: "Sindh Bar Council",
  barRegNo: "663/BC",
  yearsPractice: 24,
  intro:
    "Founded in 2002 in Khairpur Mirs, Shams Law Chamber has grown over more than two decades into one of Sindh's most established full-service law firms — a litigation and corporate advisory practice appearing regularly before the District and Sessions Courts, the Sindh High Court and the Superior Courts of Pakistan.",
};

export const contact = {
  phone: "+92 310 3381280",
  phoneHref: "tel:+923103381280",
  whatsapp: "+92 310 3381280",
  whatsappHref: "https://wa.me/923103381280",
  altPhone: "+92 300 3134868",
  altPhoneHref: "tel:+923003134868",
  email: "AdvJahangirshams@gmail.com",
  emailHref: "mailto:AdvJahangirshams@gmail.com",
  linkedin: "https://linkedin.com/in/Jahangirshams",
  instagram: "https://instagram.com/Jahangirshams.adv",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday", time: "10:00 AM – 2:00 PM" },
  ],
};

export const offices = [
  {
    city: "Karachi",
    role: "Head Office",
    lines: ["Mezzanine Floor, Building No. 28-C", "Old Sunset Boulevard, DHA Phase II", "Karachi, Sindh"],
    phone: "+92 310 3381280",
    phoneHref: "tel:+923103381280",
  },
  {
    city: "Hyderabad",
    role: "Regional Office",
    lines: ["Labaik Plaza, Near Bismillah CNG", "Wadhu Wah Main National Highway", "Hyderabad, Sindh"],
    phone: "+92 300 3134868",
    phoneHref: "tel:+923003134868",
  },
  {
    city: "Sukkur",
    role: "Regional Office",
    lines: ["Mushtaq Surhio Building", "Workshop Road", "Sukkur, Sindh"],
    phone: "+92 310 3381280",
    phoneHref: "tel:+923103381280",
  },
];

// Reach beyond the three staffed offices (from the firm profile).
export const districtNetwork = [
  "Khairpur", "Larkana", "Nawabshah", "Mirpurkhas", "Noushero Feroze", "Ghotki", "Gambat", "Shikarpur",
];

export const firmStats = [
  { num: "4,000+", label: "Clients Represented" },
  { num: "99%", label: "Court Success Ratio" },
  { num: "24 yrs", label: "Of Continuous Practice" },
  { num: "16", label: "Areas of Practice" },
];

// The 16 areas of practice listed in the firm profile. `href` is set only where
// a full service page exists.
export const practiceAreas = [
  { n: "01", title: "Criminal Law", href: "/services/criminal-law",
    desc: "Defence before the Banking, NAB, FIA, Anti-Terrorism, Anti-Corruption, Customs and Sessions Courts." },
  { n: "02", title: "Civil & Commercial Law", href: "/services/civil-litigation",
    desc: "Contractual enforcement, damages, restraining orders and specific performance before the High and District Courts." },
  { n: "03", title: "Family Law", href: "/services/family-law",
    desc: "Khula, judicial separation, maintenance, custody and guardianship, and the execution of divorce deeds." },
  { n: "04", title: "Banking & Finance Law", href: "/services/banking-finance",
    desc: "Risk mitigation, recovery and contentious banking work for banks and financial institutions." },
  { n: "05", title: "Tax & Customs Law", href: null,
    desc: "Returns and audits, administrative appeals, refund claims, voluntary disclosures and tax litigation." },
  { n: "06", title: "Minerals & Mining Law", href: null,
    desc: "Concessions, exploration and mining licences, royalties, land access and regulatory compliance." },
  { n: "07", title: "Property & Inheritance Law", href: "/services/property-law",
    desc: "Title verification, search and encumbrance certificates, mutation, transfers, leases and rent matters." },
  { n: "08", title: "Corporate & Securities Law", href: "/services/corporate-law",
    desc: "Advisory and enforcement work for corporations and institutions, including matters before the SECP." },
  { n: "09", title: "Labour & Employment Law", href: null,
    desc: "Standing Orders, Industrial Relations, workplace disputes and harassment claims under the 2010 Act." },
  { n: "10", title: "Services Law", href: null,
    desc: "Departmental inquiries, seniority, promotion, reinstatement and compensation for civil servants." },
  { n: "11", title: "Cyber Crime Law", href: "/services/cyber-crime",
    desc: "FIA notices, replies and litigation under the Prevention of Electronic Crimes Act, 2016." },
  { n: "12", title: "Intellectual Property Law", href: null,
    desc: "Trademark, patent and copyright registration, commercialisation, enforcement and IP litigation." },
  { n: "13", title: "Mediation", href: null,
    desc: "Confidential, neutral third-party mediation in family and commercial disputes." },
  { n: "14", title: "Constitutional Law", href: "/services/constitutional-law",
    desc: "Petitions under Article 199 of the Constitution of Pakistan, 1973, and challenges to statutes." },
  { n: "15", title: "Pharmaceutical Law", href: null,
    desc: "DRAP compliance, licensing, product registration and enforcement for manufacturers and importers." },
  { n: "16", title: "Defamation Law", href: null,
    desc: "Reputation and dignity claims arising from print, broadcast and social media publication." },
];

export const clientGroups = [
  {
    title: "Lead Counsel Mandates",
    blurb:
      "Lead Counsel to Amreli Steels Limited — one of Pakistan's largest steel manufacturers, listed on the Pakistan Stock Exchange — across its litigation and corporate advisory requirements, together with AsaanPay and DevTects (Pvt) Ltd before the Commercial Courts and in criminal proceedings.",
    names: ["Amreli Steels Limited", "AsaanPay", "DevTects (Pvt) Ltd"],
  },
  {
    title: "Banking & Financial Institutions",
    blurb:
      "Litigation, recovery and regulatory counsel to leading banks and microfinance institutions.",
    names: ["JS Bank Limited", "BankIslami Pakistan Limited", "Halan Microfinance Bank Limited"],
  },
  {
    title: "Government & Public Sector",
    blurb:
      "Representation of public-sector institutions and government-linked enterprises across Sindh.",
    names: [
      "Pakistan Rangers (Sindh)",
      "Pakistan Telecommunication Company Limited",
      "STEVTA",
      "Surfactant Chemicals (Pvt.) Limited",
      "Pak Traders & Distributors",
      "Sachal Nursing College, Khairpur",
    ],
  },
  {
    title: "Pathfinder Group & Affiliates",
    blurb:
      "Retainer Legal Counsel to Pathfinder Group Pakistan and its diversified affiliates, with pro bono counselling, legal advice and Public Interest Litigation for the Group's welfare initiatives.",
    names: [
      "Virtual Remittance Gateway (Pvt) Ltd",
      "iPath (Pvt) Ltd — Digital Revolution",
      "CITADEL Security Services",
      "Wackenhut Pakistan (Pvt) Ltd",
      "Providentia Books Foundation",
      "Kashmala Family Welfare Centre",
    ],
  },
];

// Logos extracted from the "Affiliations & Notable Clients" and "Media
// Recognition" pages of the firm profile (AsaanPay had no image asset).
// `w`/`h` are the real pixel dimensions of each file. They must stay in sync
// with the assets: the <img> needs an intrinsic aspect ratio, otherwise
// `height: Xpx; width: auto` collapses to zero width before the file loads
// and lazy-loading never fires.
export const clientLogos = [
  { name: "Amreli Steels Limited", src: "/images/clients/amreli-steels.png", w: 438, h: 160 },
  { name: "JS Bank Limited", src: "/images/clients/js-bank.png", w: 476, h: 160 },
  { name: "BankIslami Pakistan Limited", src: "/images/clients/bankislami.png", w: 448, h: 160 },
  { name: "Halan Microfinance Bank", src: "/images/clients/halan-microfinance-bank.png", w: 418, h: 387 },
  { name: "Pakistan Rangers (Sindh)", src: "/images/clients/pakistan-rangers.png", w: 419, h: 372 },
  { name: "PTCL", src: "/images/clients/ptcl.png", w: 396, h: 181 },
  { name: "STEVTA", src: "/images/clients/stevta.png", w: 311, h: 385 },
  { name: "Pathfinder Group", src: "/images/clients/pathfinder-group.png", w: 698, h: 160 },
  { name: "Wackenhut Pakistan", src: "/images/clients/wackenhut.png", w: 324, h: 247 },
  { name: "CITADEL Security Services", src: "/images/clients/citadel.png", w: 185, h: 189 },
  { name: "DevTects (Pvt) Ltd", src: "/images/clients/devtects.png", w: 480, h: 160 },
  { name: "SMS Technologies", src: "/images/clients/sms-technologies.png", w: 231, h: 248 },
  { name: "SMS Services", src: "/images/clients/sms-services.png", w: 221, h: 243 },
  { name: "iPath (Pvt) Ltd", src: "/images/clients/ipath.png", w: 264, h: 257 },
  { name: "Virtual Remittance Gateway", src: "/images/clients/vrg.png", w: 369, h: 306 },
];

export const mediaLogos = [
  { name: "Dawn", src: "/images/media/dawn.png", w: 482, h: 160 },
  { name: "The News International", src: "/images/media/the-news.png", w: 487, h: 160 },
  { name: "News HD", src: "/images/media/news-hd.png", w: 440, h: 342 },
  { name: "KTN News", src: "/images/media/ktn-news.png", w: 371, h: 176 },
  { name: "Awaz", src: "/images/media/awaz.png", w: 315, h: 288 },
  { name: "Kawish", src: "/images/media/kawish.png", w: 370, h: 315 },
];

export const whyUs = [
  {
    title: "Multi-generational leadership",
    desc: "Decades of courtroom experience combined with modern corporate and regulatory expertise.",
  },
  {
    title: "Presence across Sindh",
    desc: "Karachi, Hyderabad and Sukkur offices, with an established network reaching the District and Sessions Courts throughout the province.",
  },
  {
    title: "A full-service practice",
    desc: "Sixteen areas of law — from criminal defence and constitutional litigation to corporate advisory, banking, tax and intellectual property.",
  },
  {
    title: "Trusted retainer counsel",
    desc: "Retained by banks, telecom operators, security-sector groups and public-sector institutions.",
  },
  {
    title: "Committed to pro bono work",
    desc: "A firm-wide commitment to pro bono counselling, legal aid and Public Interest Litigation.",
  },
  {
    title: "Registered and regulated",
    desc: "Sindh Bar Council Registration No. 663/BC — every engagement meets the standards required of a licensed Pakistani law firm.",
  },
];
