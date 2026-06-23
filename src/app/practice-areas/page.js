import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./practice.module.css";

export const metadata = {
  title: "Practice Areas | Karachi Legal House - Comprehensive Legal Services",
  description: "Expert legal services across Criminal Law, Civil Law, Family Law, Corporate Law, Property Law, Constitutional Law, Cyber Crime, and Banking & Finance in Pakistan.",
};

export default function PracticeAreasPage() {
  const practices = [
    { 
      title: "Criminal Law", 
      icon: "⚖️", 
      shortDesc: "Expert criminal defense representation across all courts",
      fullDesc: "Our criminal law experts provide comprehensive defense services including bail applications, FIR quashment, pre-arrest bail, trial defense, and appeals. We handle all types of criminal cases with proven expertise before Sessions Courts, High Courts, and the Supreme Court of Pakistan.",
      services: [
        "Bail Applications & Pre-Arrest Bail",
        "FIR Quashment & Section 498 Petitions",
        "Criminal Trials & Defense",
        "Appeals & Revisions",
        "Anticipatory Bail",
        "White Collar Crime Defense"
      ],
      link: "/services/criminal-law" 
    },
    { 
      title: "Family Law", 
      icon: "👨‍👩‍👧‍👦", 
      shortDesc: "Compassionate and professional family matter representation",
      fullDesc: "We handle all family law matters with sensitivity and professionalism, including divorce, khula, custody disputes, maintenance claims, and guardianship matters. Our team understands the emotional aspects while ensuring your legal rights are protected.",
      services: [
        "Divorce & Khula Proceedings",
        "Child Custody & Visitation Rights",
        "Maintenance & Alimony Claims",
        "Guardianship Matters",
        "Marriage Dissolution",
        "Family Settlements"
      ],
      link: "/services/family-law" 
    },
    { 
      title: "Corporate Law", 
      icon: "🏢", 
      shortDesc: "Complete corporate and business legal solutions",
      fullDesc: "From business formation to complex transactions, we provide comprehensive corporate legal services. Our expertise covers company registration, contract drafting, compliance, mergers and acquisitions, and corporate governance.",
      services: [
        "Company Registration & Formation",
        "Contract Drafting & Review",
        "Mergers & Acquisitions",
        "Corporate Compliance",
        "Shareholder Agreements",
        "Commercial Transactions"
      ],
      link: "/services/corporate-law" 
    },
    { 
      title: "Property Law", 
      icon: "🏠", 
      shortDesc: "Expert guidance on all property matters and disputes",
      fullDesc: "We provide expert legal assistance in property transactions, disputes, inheritance, and title verification. Our team handles property litigation, succession certificates, transfer deeds, and ownership disputes with extensive experience.",
      services: [
        "Property Dispute Resolution",
        "Title Verification & Due Diligence",
        "Succession Certificates",
        "Property Transfer & Registration",
        "Inheritance Matters",
        "Land Acquisition Cases"
      ],
      link: "/services/property-law" 
    },
    { 
      title: "Civil Law", 
      icon: "📋", 
      shortDesc: "Comprehensive civil litigation services",
      fullDesc: "Our civil litigation team handles all types of civil matters including contract disputes, money recovery, injunctions, and specific performance suits. We represent clients in civil courts at all levels with strategic approach and dedication.",
      services: [
        "Civil Suits & Claims",
        "Injunction Applications",
        "Contract Disputes",
        "Money Recovery Suits",
        "Specific Performance",
        "Declaratory Suits"
      ],
      link: "/services/civil-law" 
    },
    { 
      title: "Constitutional Law", 
      icon: "📜", 
      shortDesc: "Protection of fundamental rights and constitutional matters",
      fullDesc: "We represent clients in constitutional matters before High Courts and the Supreme Court. Our expertise includes writ petitions, fundamental rights protection, judicial review, and public interest litigation.",
      services: [
        "Writ Petitions (Habeas Corpus, Mandamus)",
        "Fundamental Rights Protection",
        "Judicial Review Applications",
        "Public Interest Litigation",
        "Constitutional Challenges",
        "Service Matters"
      ],
      link: "/services/constitutional-law" 
    },
    { 
      title: "Cyber Crime", 
      icon: "💻", 
      shortDesc: "Specialized cyber crime defense and digital law expertise",
      fullDesc: "With the rise of digital crimes, we provide specialized representation in FIA cyber crime cases, online fraud, digital harassment, and data protection matters. Our team stays updated on evolving cyber laws and regulations.",
      services: [
        "FIA Cyber Crime Cases",
        "Online Fraud & Scams",
        "Digital Harassment & Defamation",
        "Data Protection & Privacy",
        "Social Media Disputes",
        "E-Commerce Legal Issues"
      ],
      link: "/services/cyber-crime" 
    },
    { 
      title: "Banking & Finance", 
      icon: "💼", 
      shortDesc: "Expert legal services for banking and financial matters",
      fullDesc: "We assist clients with banking disputes, loan recovery defense, mortgage matters, and financial regulations. Our expertise covers both representing financial institutions and defending individuals in banking litigation.",
      services: [
        "Banking Litigation",
        "Loan Recovery Defense",
        "Mortgage & Security Matters",
        "Financial Regulatory Compliance",
        "Cheque Bounce Cases",
        "Banking Fraud Cases"
      ],
      link: "/services/banking-finance" 
    },
  ];

  return (
    <>
      <Navbar />
      <main className={styles.practiceMain}>
        {/* Hero Section */}
        <section className={styles.practiceHero}>
          <div className="container text-center">
            <span className={styles.heroLabel}>What We Do</span>
            <h1>Our Practice Areas</h1>
            <p className={styles.heroDesc}>
              Comprehensive legal services delivered by experienced professionals across all major areas of law in Pakistan
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="section">
          <div className="container">
            <div className={styles.practiceGrid}>
              {practices.map((practice, index) => (
                <div key={index} className={styles.practiceCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.practiceIcon}>{practice.icon}</div>
                    <h2>{practice.title}</h2>
                    <p className={styles.shortDesc}>{practice.shortDesc}</p>
                  </div>
                  
                  <div className={styles.cardBody}>
                    <p className={styles.fullDesc}>{practice.fullDesc}</p>
                    
                    <div className={styles.servicesSection}>
                      <h4>Our Services Include:</h4>
                      <ul className={styles.servicesList}>
                        {practice.services.map((service, idx) => (
                          <li key={idx}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.cardFooter}>
                    <Link href={practice.link} className="btn btn-primary">
                      Learn More
                    </Link>
                    <Link href="/book-consultation" className={styles.consultLink}>
                      Get Free Consultation →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className={`section ${styles.whySection}`}>
          <div className="container">
            <div className="text-center" style={{marginBottom: '3rem'}}>
              <h2>Why Choose Our Legal Services</h2>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>
                Trusted expertise across all practice areas
              </p>
            </div>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <span className={styles.benefitIcon}>🎓</span>
                <h3>Expert Attorneys</h3>
                <p>Supreme Court advocates with specialized expertise in each practice area</p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitIcon}>⚖️</span>
                <h3>Proven Success</h3>
                <p>Track record of favorable outcomes across thousands of cases</p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitIcon}>💡</span>
                <h3>Strategic Approach</h3>
                <p>Customized legal strategies tailored to your specific situation</p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitIcon}>🤝</span>
                <h3>Client-Focused</h3>
                <p>Clear communication and personalized attention throughout your case</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section ${styles.ctaSection}`}>
          <div className="container text-center">
            <h2>Need Legal Assistance?</h2>
            <p className={styles.ctaDesc}>
              Our experienced legal team is ready to help you navigate your legal challenges. Schedule a free consultation today to discuss your case.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/book-consultation" className="btn btn-primary">
                Book Free Consultation
              </Link>
              <a href="tel:+923001234567" className="btn btn-secondary">
                Call: +92 300 1234567
              </a>
            </div>
            <div className={styles.ctaInfo}>
              <p>Available 24/7 • Confidential Consultation • No Obligation</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
