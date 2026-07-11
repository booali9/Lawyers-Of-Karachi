import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./services.module.css";

export const metadata = {
  title: "Our Services | Karachi Legal House - Expert Legal Representation",
  description: "Comprehensive legal services in Criminal Law, Family Law, Corporate Law, Property Law, Civil Law, Constitutional Law, Cyber Crime, and Banking & Finance in Pakistan.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Criminal Law",
      icon: "⚖️",
      shortDesc: "Expert criminal defense representation across all courts",
      fullDesc: "Our criminal law experts provide comprehensive defense services including bail applications, FIR quashment, pre-arrest bail, trial defense, and appeals. We handle all types of criminal cases with proven expertise before Sessions Courts, High Courts, and the Supreme Court of Pakistan.",
      list: [
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
      list: [
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
      list: [
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
      list: [
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
      list: [
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
      list: [
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
      list: [
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
      list: [
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
      <main className={styles.servicesMain}>
        {/* Hero Section */}
        <section className={styles.servicesHero}>
          <div className="container text-center">
            <span className={styles.heroLabel}>What We Offer</span>
            <h1>Our Legal Services</h1>
            <p className={styles.heroDesc}>
              Comprehensive legal solutions across all major practice areas, delivered by experienced advocates dedicated to protecting your rights
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className={`section ${styles.introSection}`}>
          <div className="container">
            <div className={styles.introContent}>
              <h2>Expert Legal Representation Across All Practice Areas</h2>
              <p>
                At Karachi Legal House, we provide comprehensive legal services across the full spectrum of Pakistani law. 
                Our team of experienced advocates, including Supreme Court practitioners, brings decades of combined 
                experience in criminal, civil, corporate, and constitutional matters.
              </p>
              <p>
                We understand that legal issues can be complex and stressful. That is why we are committed to providing 
                clear, strategic, and results-driven legal representation tailored to each clients unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section">
          <div className="container">
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <h2>{service.title}</h2>
                    <p className={styles.shortDesc}>{service.shortDesc}</p>
                  </div>

                  <div className={styles.cardBody}>
                    <p className={styles.fullDesc}>{service.fullDesc}</p>
                    <ul className={styles.servicesList}>
                      {service.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <Link href={service.link} className="btn btn-primary">
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
              <h2>Why Choose Karachi Legal House</h2>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>
                Trusted legal expertise you can rely on
              </p>
            </div>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <span className={styles.benefitIcon}>🎓</span>
                <h3>Supreme Court Advocates</h3>
                <p>Our team includes advocates qualified to practice before the Supreme Court of Pakistan</p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitIcon}>⚖️</span>
                <h3>Proven Track Record</h3>
                <p>Thousands of successful cases handled across all levels of the judiciary</p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitIcon}>💡</span>
                <h3>Strategic Counsel</h3>
                <p>Customized legal strategies developed for each clients specific circumstances</p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitIcon}>🤝</span>
                <h3>Client First Approach</h3>
                <p>Clear communication, transparent fees, and unwavering commitment to your interests</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section ${styles.ctaSection}`}>
          <div className="container text-center">
            <h2>Ready to Get Started?</h2>
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
