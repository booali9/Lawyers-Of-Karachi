// Team roster — sourced from "Profile Shams Law Chamber 2026 August (updated)"
// (Our Team, pp. 11–12) with individual biographies from "Lawyers_Professional_Profiles".
//
// Partners: only Fayazuddin Rajper and Jahangir Shams.
// Mr. Shamsuddin Rajper is presented as Founder of the Chamber.

export const partners = [
  {
    slug: "fayazuddin-rajper",
    name: "Mr. Fayazuddin Rajper",
    role: "Managing Partner",
    court: "Advocate, High Courts of Pakistan",
    credentials: "BS Geology  ·  LL.B  ·  LL.M (Corporate Law)",
    photo: "/images/team/fayazuddin-rajper.jpg",
    avatar: "/images/team/fayazuddin-rajper-avatar.jpg",
    office: "Karachi",
    practice: ["Civil & Constitutional Law", "Corporate & Regulatory", "Service Matters", "Property Disputes"],
    bio: "Mr. Fayazuddin Rajper took charge of the Chamber's affairs in 2016 as the founder's elder son, and has since built a diversified litigation and advisory practice from the Karachi head office alongside his brother, Mr. Jahangir Shams. He is a regular practitioner of general civil and constitutional law and appears before the Honourable Sindh High Court in a wide range of contentious matters.",
    bioExtra: "He represents private, institutional and government-sector clients in service matters, property disputes, election matters, power-sector disputes, regulatory and media-regulation matters, proceedings before the National Accountability Bureau, and a broad range of other civil and constitutional disputes.",
  },
  {
    slug: "jahangir-shams",
    name: "Mr. Jahangir Shams",
    role: "Managing Partner",
    court: "Advocate, High Courts of Pakistan",
    credentials: "LL.B (Hons.)",
    photo: "/images/team/jahangir-shams.jpg",
    avatar: "/images/team/jahangir-shams-avatar.jpg",
    office: "Karachi",
    practice: ["Family Law", "Corporate & Regulatory Litigation", "Constitutional Petitions", "Banking & Payments"],
    bio: "Mr. Jahangir Shams brings two decades of family law practice, now standing alongside complex corporate and regulatory litigation. He is a partner at M/S Shams Law Chamber — a practice first established in Karachi in the 1990s and carried through Khairpur and Sukkur for over twenty-five years before returning to a rebuilt Karachi head office.",
    bioExtra: "He appears before the Constitutional Bench and the High Court, and acts as counsel to payment gateways and financial institutions. His engagements include litigation, recovery and regulatory counsel for banking and microfinance clients, commercial and corporate matters for industrial clients, and regulatory and employment-related counsel for security-services providers.",
  },
];

export const founder = {
  slug: "shamsuddin-rajper",
  name: "Mr. Shamsuddin Rajper",
  role: "Founder",
  court: "Advocate, Supreme Court of Pakistan",
  credentials: "M.Com  ·  LL.B",
  photo: null,
  office: "Sukkur & Hyderabad",
  practice: ["Constitutional Law", "Criminal Prosecution", "Administrative Law"],
  bio: "Mr. Shamsuddin Rajper founded Shams Law Chamber in Khairpur Mirs in 2002 and has led its growth into a full-service practice spanning Sindh. His distinguished public-service career shapes the Chamber's culture of integrity and rigour.",
  honours: [
    "Assistant Prosecutor General of Sindh (2008)",
    "Vice President, Sindh High Court Bar Association, Sukkur (2019–2020)",
    "Deputy Attorney General for Pakistan, Circuit Bench, Sindh High Court, Hyderabad (2023–present)",
  ],
};

export const teamByOffice = [
  {
    office: "Karachi",
    label: "Head Office",
    address: "Mezzanine Floor, Building No. 28-C, Old Sunset Boulevard, DHA Phase II",
    groups: [
      {
        rank: "Senior Associates",
        members: [
          {
            name: "Mrs. Safia Shams",
            court: "Advocate, High Courts of Pakistan",
            credentials: "MA  ·  LL.B",
            photo: null,
            practice: ["Administrative Law", "Family Law", "Civil Litigation"],
            bio: "Former Assistant Registrar at the Office of the Ombudsman (Sindh) and former Visiting Faculty at Shah Abdul Latif University, Khairpur, bringing institutional and academic perspective to the Chamber's advisory work.",
          },
          {
            name: "Miss Sharam Khatoon",
            court: "Advocate, High Courts of Pakistan",
            credentials: "LL.B (Hons.)",
            photo: null,
            practice: ["Family Law", "Civil Litigation", "Constitutional Law"],
            bio: "Senior associate appearing before the High Courts of Pakistan across the Chamber's family, civil and constitutional caseload.",
          },
          {
            name: "Mr. Raheem Dad Shujrah",
            court: "Advocate, High Courts of Pakistan",
            credentials: "LL.B (Hons.)  ·  University of London",
            photo: "/images/team/raheem-dad-shujrah.jpg",
            practice: ["Corporate Law", "Banking Law", "Civil Litigation", "Constitutional Law"],
            bio: "Joined the Chamber in 2024 with a BBA and an LL.B (Hons.) from the University of London, bringing a dual expertise that bridges corporate insight with courtroom proficiency across civil, corporate, banking and constitutional litigation.",
          },
        ],
      },
      {
        rank: "Associates",
        members: [
          {
            name: "Mr. Saith Ali",
            court: "Advocate, District Courts of Pakistan",
            credentials: "LL.B (Hons.)  ·  SZABUL",
            photo: "/images/team/saith-ali.jpg",
            experience: "3 years",
            practice: ["Civil Law", "Criminal Law", "Family Law", "Tax Law"],
            bio: "A dedicated legal professional providing assistance and representation across civil, criminal, family and tax matters, with expertise in legal research, case preparation, drafting, client consultation and court proceedings.",
          },
          {
            name: "Mr. Ali Hyder Khan Mangrio",
            court: "Advocate, District Courts of Pakistan",
            credentials: "LL.B  ·  University of London",
            photo: null,
            practice: ["Civil Law", "Criminal Law", "Commercial Matters"],
            bio: "Associate of the Karachi office appearing before the District Courts across the Chamber's civil, criminal and commercial caseload.",
          },
          {
            name: "Mr. Hamza Ali Memon",
            court: "Advocate, District Courts of Pakistan",
            credentials: "LL.B  ·  University of London",
            photo: null,
            practice: ["Civil Law", "Criminal Law", "Property Matters"],
            bio: "Associate of the Karachi office supporting litigation, drafting and client representation before the District Courts.",
          },
          {
            name: "Mr. Shahroz Ahmed",
            court: "Advocate, District Courts of Pakistan",
            credentials: "LL.B (Hons.)  ·  SZABSOL, SALU Khairpur",
            photo: "/images/team/shahroz-ahmed.jpg",
            experience: "Over 1 year",
            practice: ["Criminal Law", "Civil Law", "Family Law", "Rent Matters", "Banking Matters"],
            bio: "Practice encompassing criminal, civil, family, rent and banking matters, representing clients before subordinate courts and various judicial forums. Committed to upholding the rule of law through diligent advocacy and a client-focused approach.",
          },
        ],
      },
      {
        rank: "Interns",
        members: [
          { name: "Khalilullah Rajper", court: "Legal Intern", photo: null },
          { name: "Bisharat Hussain", court: "Legal Intern", photo: null },
        ],
      },
    ],
  },
  {
    office: "Sukkur",
    label: "Regional Office",
    address: "Mushtaq Surhio Building, Workshop Road",
    groups: [
      {
        rank: "Senior Associates",
        members: [
          { name: "Mr. Syed Sikandar Ali Shah", court: "Advocate, High Court", photo: null, practice: ["Civil Law", "Criminal Law"] },
          { name: "Mr. Abdul Salam Sheikh", court: "Advocate, High Court", photo: null, practice: ["Civil Law", "Service Matters"] },
          { name: "Mr. Abdul Raheem Mahar", court: "Advocate, High Court", photo: null, practice: ["Criminal Law", "Constitutional Law"] },
        ],
      },
      {
        rank: "Associates",
        members: [
          { name: "Mr. Muhammad Maqsood Maitlo", court: "Advocate", photo: null, practice: ["Civil Law", "Criminal Law"] },
          {
            name: "Mr. Javed Ali Mahar",
            court: "Advocate",
            credentials: "BPA  ·  LL.B  ·  Shah Abdul Latif University, Khairpur",
            photo: "/images/team/javed-ali-mahar.jpg",
            experience: "Over 2 years",
            practice: ["Civil Law", "Criminal Law", "Family Law", "Banking Law", "Constitutional Law"],
            bio: "Practice encompassing civil, criminal, family, banking and constitutional matters, with experience representing clients before the trial courts and other judicial forums.",
          },
          { name: "Mr. Asad Ali Channa", court: "Advocate", photo: null, practice: ["Civil Law", "Family Law"] },
        ],
      },
      {
        rank: "Interns",
        members: [
          { name: "Mr. Waqas Baloch", court: "Legal Intern", photo: null },
          { name: "Mr. Ahsan Ali", court: "Legal Intern", photo: null },
        ],
      },
    ],
  },
  {
    office: "Hyderabad",
    label: "Regional Office",
    address: "Labaik Plaza, Near Bismillah CNG, Wadhu Wah Main National Highway",
    groups: [
      {
        rank: "Associates",
        members: [
          { name: "Mr. Abdul Jabbar Charan", court: "Advocate, High Courts of Pakistan", credentials: "BA  ·  LL.B", photo: null, practice: ["Civil Law", "Criminal Law"] },
          {
            name: "Mr. Muhammad Younis Siyal",
            court: "Advocate, High Court of Sindh",
            credentials: "B.A. LL.B (Hons.), SZABUL  ·  LL.M (final year), University of Sindh",
            photo: "/images/team/muhammad-younis.jpg",
            practice: ["Civil Law", "Criminal Law", "Family Law", "Constitutional Law", "Special Courts"],
            bio: "Practical experience across civil, criminal, family, constitutional and special court matters, conducting litigation before the District Courts of Sindh and the Sindh High Court, with strong expertise in legal drafting, case preparation, research, client counselling and court advocacy.",
            courses: [
              "International Humanitarian Law — Harvard University",
              "Introduction to International Criminal Law — Case Western Reserve University",
              "Drafting & Negotiating Commercial Contracts — The College of Law",
              "Legal Practitioners Course — Legal Monarchs Pakistan",
            ],
          },
          { name: "Mr. Ikrama Khan", court: "Advocate, High Courts of Pakistan", credentials: "LL.B (Hons.)", photo: null, practice: ["Civil Law", "Constitutional Law"] },
          { name: "Mr. Babar Ali Rajper", court: "Advocate, High Courts of Pakistan", credentials: "LL.B (Hons.)", photo: null, practice: ["Criminal Law", "Civil Law"] },
          { name: "Mr. Junaid Malik", court: "Advocate, District Courts of Pakistan", credentials: "LL.B (Hons.)", photo: null, practice: ["Civil Law", "Family Law"] },
        ],
      },
    ],
  },
];

// Count of every named person on the roster, used for the "X lawyers" stat.
export const teamCount =
  partners.length +
  1 +
  teamByOffice.reduce(
    (sum, o) => sum + o.groups.reduce((s, g) => s + g.members.length, 0),
    0
  );
