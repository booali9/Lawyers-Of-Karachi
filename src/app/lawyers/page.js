import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./lawyers.module.css";

export const metadata = {
  title: "Our Lawyers | Karachi Legal House - Expert Legal Team",
  description: "Meet our highly qualified team of experienced advocates and legal experts specializing in Criminal, Family, Corporate, Property, and Civil Law across Pakistan.",
};

export default function LawyersPage() {
  const lawyers = [
    {
      name: "Advocate Muhammad Taqi",
      title: "Senior Partner & Criminal Law Specialist",
      credentials: "LLB, LLM | Supreme Court Advocate",
      experience: "15+ years",
      specialization: ["Criminal Law", "Constitutional Law", "Appeals & Revisions"],
      bio: "A distinguished criminal law expert with extensive experience in High Courts and Supreme Court. Successfully defended hundreds of clients in complex criminal cases including bail applications, FIR quashments, and criminal trials.",
      education: [
        "LLM in Criminal Law - University of Punjab",
        "LLB - University of Karachi",
        "Supreme Court Bar Association Member"
      ],
      achievements: [
        "Successfully argued 500+ criminal cases",
        "Specialist in bail applications with 95% success rate",
        "Published articles on criminal law reforms"
      ]
    },
    {
      name: "Advocate Fatima Qureshi",
      title: "Partner & Family Law Expert",
      credentials: "LLB, Diploma in Family Law",
      experience: "12+ years",
      specialization: ["Family Law", "Divorce & Khula", "Child Custody"],
      bio: "Renowned family law specialist known for compassionate yet assertive representation. Expert in handling sensitive family matters including divorce, custody disputes, and maintenance claims with focus on protecting client rights.",
      education: [
        "Diploma in Family Law - Islamabad Law College",
        "LLB - Lahore University of Management Sciences",
        "Member of Family Law Association"
      ],
      achievements: [
        "Resolved 300+ family law cases",
        "Specialist in child custody matters",
        "Advocate for women's legal rights"
      ]
    },
    {
      name: "Advocate Ahmed Hassan",
      title: "Corporate Law Counsel",
      credentials: "LLB, MBA | SECP Certified",
      experience: "10+ years",
      specialization: ["Corporate Law", "Commercial Transactions", "Business Formation"],
      bio: "Expert corporate lawyer with deep understanding of business law and SECP regulations. Assists startups and established corporations with formations, mergers, acquisitions, and corporate compliance matters.",
      education: [
        "MBA in Finance - IBA Karachi",
        "LLB - Sindh Muslim Law College",
        "SECP Corporate Law Certification"
      ],
      achievements: [
        "Registered 200+ companies with SECP",
        "Handled major M&A transactions",
        "Corporate compliance specialist"
      ]
    },
    {
      name: "Advocate Saima Malik",
      title: "Property & Civil Litigation Specialist",
      credentials: "LLB, LLM in Property Law",
      experience: "14+ years",
      specialization: ["Property Law", "Civil Litigation", "Inheritance Disputes"],
      bio: "Highly experienced property law expert with proven track record in resolving complex property disputes, title verification, and inheritance matters. Strong litigation skills across civil courts.",
      education: [
        "LLM in Property Law - Punjab University",
        "LLB - Government College University",
        "Land Revenue Law Certification"
      ],
      achievements: [
        "Resolved 400+ property disputes",
        "Expert in title verification",
        "Succession certificate specialist"
      ]
    },
    {
      name: "Advocate Kashif Raza",
      title: "Banking & Cyber Law Expert",
      credentials: "LLB, Cyber Law Certificate",
      experience: "8+ years",
      specialization: ["Banking Law", "Cyber Crime", "Financial Disputes"],
      bio: "Modern legal practitioner specializing in banking disputes and cyber crime defense. Represents clients in FIA cyber crime cases and banking litigation with technical and legal expertise.",
      education: [
        "Cyber Law Certification - Pakistan Law Commission",
        "LLB - Karachi University",
        "Banking Law Diploma"
      ],
      achievements: [
        "Defended 150+ cyber crime cases",
        "Banking dispute resolution expert",
        "PECA law specialist"
      ]
    },
    {
      name: "Advocate Ayesha Siddiqui",
      title: "Constitutional Law & Writ Petitions",
      credentials: "LLB, LLM in Constitutional Law",
      experience: "11+ years",
      specialization: ["Constitutional Law", "Writ Petitions", "Public Interest Litigation"],
      bio: "Passionate constitutional lawyer dedicated to protecting fundamental rights. Files writ petitions in High Courts for habeas corpus, mandamus, and judicial review of government actions.",
      education: [
        "LLM in Constitutional Law - University of Punjab",
        "LLB - Lahore University",
        "High Court Bar Association Member"
      ],
      achievements: [
        "Filed 100+ successful writ petitions",
        "Fundamental rights advocate",
        "Public interest litigation expert"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.lawyersMain}>
        {/* Hero Section */}
        <section className={styles.lawyersHero}>
          <div className="container text-center">
            <span className={styles.heroLabel}>Our Legal Team</span>
            <h1>Meet Our Expert Attorneys</h1>
            <p className={styles.heroDesc}>
              Highly qualified legal professionals committed to excellence and dedicated to achieving the best outcomes for our clients
            </p>
          </div>
        </section>

        {/* Team Overview */}
        <section className="section">
          <div className="container">
            <div className={styles.overviewGrid}>
              <div className={styles.overviewContent}>
                <h2>A Team Built on Excellence</h2>
                <p className={styles.overviewText}>
                  Our legal team comprises highly qualified advocates with diverse specializations and extensive experience across all levels of Pakistani courts. Each attorney brings unique expertise, ensuring comprehensive legal coverage for our clients.
                </p>
                <p className={styles.overviewText}>
                  We pride ourselves on continuous professional development, ethical practice, and unwavering commitment to client success. Our collaborative approach ensures you benefit from collective wisdom and specialized knowledge.
                </p>
              </div>
              <div className={styles.statsBox}>
                <div className={styles.statItem}>
                  <strong>25+</strong>
                  <span>Legal Professionals</span>
                </div>
                <div className={styles.statItem}>
                  <strong>100+</strong>
                  <span>Years Combined Experience</span>
                </div>
                <div className={styles.statItem}>
                  <strong>Supreme Court</strong>
                  <span>Qualified Advocates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lawyers Profiles */}
        <section className={`section ${styles.profilesSection}`}>
          <div className="container">
            <div className={styles.lawyersGrid}>
              {lawyers.map((lawyer, index) => (
                <div key={index} className={styles.lawyerCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.lawyerAvatar}>
                      {lawyer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={styles.lawyerInfo}>
                      <h3>{lawyer.name}</h3>
                      <p className={styles.lawyerTitle}>{lawyer.title}</p>
                      <p className={styles.credentials}>{lawyer.credentials}</p>
                    </div>
                  </div>
                  
                  <div className={styles.cardBody}>
                    <div className={styles.experienceBadge}>
                      <span className={styles.expIcon}>⚖️</span>
                      <span>{lawyer.experience} Experience</span>
                    </div>
                    
                    <div className={styles.specialization}>
                      <h4>Specialization</h4>
                      <div className={styles.specializationTags}>
                        {lawyer.specialization.map((spec, idx) => (
                          <span key={idx} className={styles.specTag}>{spec}</span>
                        ))}
                      </div>
                    </div>
                    
                    <p className={styles.lawyerBio}>{lawyer.bio}</p>
                    
                    <details className={styles.detailsSection}>
                      <summary className={styles.detailsSummary}>View Education & Achievements</summary>
                      <div className={styles.detailsContent}>
                        <div className={styles.education}>
                          <h5>Education</h5>
                          <ul>
                            {lawyer.education.map((edu, idx) => (
                              <li key={idx}>{edu}</li>
                            ))}
                          </ul>
                        </div>
                        <div className={styles.achievements}>
                          <h5>Notable Achievements</h5>
                          <ul>
                            {lawyer.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Team */}
        <section className={`section ${styles.whyTeamSection}`}>
          <div className="container">
            <div className="text-center" style={{marginBottom: '3rem'}}>
              <h2>Why Choose Our Legal Team</h2>
            </div>
            <div className={styles.whyTeamGrid}>
              <div className={styles.whyItem}>
                <span className={styles.whyIcon}>🎓</span>
                <h3>Highly Qualified</h3>
                <p>Advanced degrees and specialized certifications from prestigious institutions</p>
              </div>
              <div className={styles.whyItem}>
                <span className={styles.whyIcon}>⚖️</span>
                <h3>Extensive Experience</h3>
                <p>Decades of combined practice across all major courts and tribunals</p>
              </div>
              <div className={styles.whyItem}>
                <span className={styles.whyIcon}>🤝</span>
                <h3>Client-Focused</h3>
                <p>Personalized attention and dedicated service for every client</p>
              </div>
              <div className={styles.whyItem}>
                <span className={styles.whyIcon}>💼</span>
                <h3>Diverse Expertise</h3>
                <p>Specialists covering all major areas of Pakistani law</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section ${styles.ctaSection}`}>
          <div className="container text-center">
            <h2>Schedule a Consultation with Our Team</h2>
            <p className={styles.ctaDesc}>
              Connect with our experienced attorneys to discuss your legal matter and get expert guidance
            </p>
            <div className={styles.ctaActions}>
              <Link href="/book-consultation" className="btn btn-primary">
                Book Free Consultation
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
