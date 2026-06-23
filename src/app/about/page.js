import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us | Karachi Legal House - Premier Law Firm in Pakistan",
  description: "Learn about Karachi Legal House, a leading law firm in Pakistan with over 15 years of experience. Meet our expert team and discover our commitment to legal excellence.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.aboutMain}>
        {/* Hero Section */}
        <section className={styles.aboutHero}>
          <div className="container text-center">
            <span className={styles.heroLabel}>About Our Firm</span>
            <h1>Excellence in Legal Practice Since 2010</h1>
            <p className={styles.heroDesc}>
              A legacy of trust, professionalism, and unwavering commitment to justice across Pakistan
            </p>
          </div>
        </section>

        {/* Firm Story */}
        <section className="section">
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={styles.storyContent}>
                <h2>Our Story</h2>
                <p className={styles.storyText}>
                  Established in 2010, Karachi Legal House has grown from a small practice into one of Pakistan's most respected law firms. Our journey began with a simple vision: to provide honest, effective legal representation that puts clients first.
                </p>
                <p className={styles.storyText}>
                  Over the past 15 years, we have successfully represented thousands of clients in matters ranging from criminal defense to corporate transactions. Our team of highly qualified advocates has argued cases before the Supreme Court of Pakistan, all High Courts, and numerous specialized tribunals.
                </p>
                <p className={styles.storyText}>
                  Today, Karachi Legal House stands as a testament to what dedication, expertise, and integrity can achieve. We continue to grow, not just in size, but in the depth of our legal knowledge and the breadth of our client relationships.
                </p>
              </div>
              <div className={styles.storyImageWrapper}>
                <Image 
                  src="/hero.png" 
                  alt="Karachi Legal House Office" 
                  width={600} 
                  height={400}
                  className={styles.storyImage}
                />
                <div className={styles.storyStats}>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>15+</div>
                    <div className={styles.statLabel}>Years of Excellence</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>25+</div>
                    <div className={styles.statLabel}>Expert Lawyers</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>3000+</div>
                    <div className={styles.statLabel}>Cases Handled</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>98%</div>
                    <div className={styles.statLabel}>Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={`section ${styles.missionSection}`}>
          <div className="container">
            <div className={styles.missionGrid}>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>🎯</div>
                <h2>Our Mission</h2>
                <p>
                  To deliver the highest quality legal services with integrity, professionalism, and compassion. We are committed to protecting our clients' rights, achieving favorable outcomes, and contributing to the advancement of justice in Pakistan.
                </p>
              </div>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>👁️</div>
                <h2>Our Vision</h2>
                <p>
                  To be recognized as Pakistan's most trusted and innovative law firm, setting the standard for legal excellence, ethical practice, and client satisfaction. We aspire to be the first choice for individuals and businesses seeking expert legal representation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{marginBottom: '4rem'}}>
              <h2>Our Core Values</h2>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>
                The principles that guide every decision we make
              </p>
            </div>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>⚖️</div>
                <h3>Integrity</h3>
                <p>We uphold the highest ethical standards in every case, ensuring honesty, transparency, and trustworthiness in all our dealings.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🎓</div>
                <h3>Excellence</h3>
                <p>We continuously strive for excellence in legal research, argumentation, and client service, never settling for mediocrity.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h3>Client Focus</h3>
                <p>Our clients' needs, concerns, and goals are at the center of everything we do. Your success is our success.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>💼</div>
                <h3>Professionalism</h3>
                <p>We maintain the highest standards of professional conduct, treating all parties with respect and dignity.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🔒</div>
                <h3>Confidentiality</h3>
                <p>We protect client information with utmost care, ensuring complete privacy and attorney-client privilege.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>⚡</div>
                <h3>Responsiveness</h3>
                <p>We respond promptly to client inquiries and adapt quickly to changing legal circumstances and needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className={`section ${styles.expertiseSection}`}>
          <div className="container">
            <div className="text-center" style={{marginBottom: '4rem'}}>
              <h2>Areas of Expertise</h2>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>
                Comprehensive legal services across multiple practice areas
              </p>
            </div>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseItem}>
                <span className={styles.expertiseIcon}>⚖️</span>
                <span>Criminal Defense</span>
              </div>
              <div className={styles.expertiseItem}>
                <span className={styles.expertiseIcon}>👨‍👩‍👧‍👦</span>
                <span>Family Law</span>
              </div>
              <div className={styles.expertiseItem}>
                <span className={styles.expertiseIcon}>🏢</span>
                <span>Corporate Law</span>
              </div>
              <div className={styles.expertiseItem}>
                <span className={styles.expertiseIcon}>🏠</span>
                <span>Property Law</span>
              </div>
              <div className={styles.expertiseItem}>
                <span className={styles.expertiseIcon}>📋</span>
                <span>Civil Litigation</span>
              </div>
              <div className={styles.expertiseItem}>
                <span className={styles.expertiseIcon}>📜</span>
                <span>Constitutional Law</span>
              </div>
              <div className={styles.expertiseItem}>
                <span className={styles.expertiseIcon}>💻</span>
                <span>Cyber Crime</span>
              </div>
              <div className={styles.expertiseItem}>
                <span className={styles.expertiseIcon}>💼</span>
                <span>Banking & Finance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Memberships */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{marginBottom: '4rem'}}>
              <h2>Professional Credentials</h2>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>
                Recognized and certified by leading legal institutions
              </p>
            </div>
            <div className={styles.credentialsGrid}>
              <div className={styles.credentialCard}>
                <h4>Pakistan Bar Council</h4>
                <p>Licensed and registered advocates</p>
              </div>
              <div className={styles.credentialCard}>
                <h4>Supreme Court of Pakistan</h4>
                <p>Authorized to practice before the apex court</p>
              </div>
              <div className={styles.credentialCard}>
                <h4>High Court Bar Association</h4>
                <p>Active members in good standing</p>
              </div>
              <div className={styles.credentialCard}>
                <h4>District Bar Association</h4>
                <p>Registered with all major district bars</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`section ${styles.whyChooseSection}`}>
          <div className="container">
            <div className="text-center" style={{marginBottom: '3rem'}}>
              <h2>Why Choose Karachi Legal House</h2>
            </div>
            <div className={styles.whyChooseGrid}>
              <div className={styles.whyChooseItem}>
                <span className={styles.checkIcon}>✓</span>
                <div>
                  <h4>Experienced Legal Team</h4>
                  <p>Our advocates have decades of combined experience across all legal domains</p>
                </div>
              </div>
              <div className={styles.whyChooseItem}>
                <span className={styles.checkIcon}>✓</span>
                <div>
                  <h4>Supreme Court Practice</h4>
                  <p>Qualified to represent clients in Pakistan's highest court</p>
                </div>
              </div>
              <div className={styles.whyChooseItem}>
                <span className={styles.checkIcon}>✓</span>
                <div>
                  <h4>Proven Track Record</h4>
                  <p>98% success rate with thousands of satisfied clients</p>
                </div>
              </div>
              <div className={styles.whyChooseItem}>
                <span className={styles.checkIcon}>✓</span>
                <div>
                  <h4>24/7 Availability</h4>
                  <p>Round-the-clock support for urgent legal matters</p>
                </div>
              </div>
              <div className={styles.whyChooseItem}>
                <span className={styles.checkIcon}>✓</span>
                <div>
                  <h4>Transparent Communication</h4>
                  <p>Regular updates and clear explanations at every stage</p>
                </div>
              </div>
              <div className={styles.whyChooseItem}>
                <span className={styles.checkIcon}>✓</span>
                <div>
                  <h4>Competitive Fees</h4>
                  <p>Fair pricing with flexible payment options</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section ${styles.ctaSection}`}>
          <div className="container text-center">
            <h2>Ready to Discuss Your Legal Matter?</h2>
            <p className={styles.ctaDesc}>
              Schedule a free consultation with our experienced legal team today
            </p>
            <div className={styles.ctaActions}>
              <Link href="/book-consultation" className="btn btn-primary">
                Book Free Consultation
              </Link>
              <Link href="/lawyers" className="btn btn-secondary">
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
