import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={`${styles.heroContent} animate-fade-in`}>
              <span className={styles.subtitle}>Premier Legal Services in Pakistan</span>
              <h1 className={styles.heroTitle}>
                Your Trusted Partner in Legal Excellence
              </h1>
              <p className={styles.heroDesc}>
                With over a decade of distinguished service, Karachi Legal House stands as a beacon of legal expertise in Pakistan. We specialize in Criminal, Family, Corporate, Civil, and Property Law, delivering results that matter.
              </p>
              <div className={styles.heroActions}>
                <Link href="/book-consultation" className="btn btn-primary">
                  Schedule Free Consultation
                </Link>
                <Link href="/practice-areas" className="btn btn-secondary">
                  Our Practice Areas
                </Link>
              </div>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <strong>15+</strong>
                  <span>Years Experience</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>1000+</strong>
                  <span>Cases Won</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>98%</strong>
                  <span>Success Rate</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image 
                src="/hero.png" 
                alt="Professional Legal Services" 
                width={600} 
                height={500}
                priority
                className={styles.heroImg}
              />
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className={`section ${styles.aboutPreview}`}>
          <div className="container">
            <div className={styles.aboutGrid}>
              <div className={styles.aboutContent}>
                <span className={styles.sectionLabel}>About Our Firm</span>
                <h2>Leading Law Firm in Pakistan Since 2010</h2>
                <p className={styles.aboutText}>
                  Karachi Legal House has established itself as one of Pakistan's most respected law firms. Our team of highly qualified advocates and legal experts brings decades of combined experience across multiple jurisdictions, including the Supreme Court of Pakistan, High Courts, and specialized tribunals.
                </p>
                <p className={styles.aboutText}>
                  We pride ourselves on providing personalized legal solutions that protect your rights, defend your interests, and achieve favorable outcomes. Our commitment to excellence, integrity, and client satisfaction sets us apart in the legal profession.
                </p>
                <div className={styles.aboutFeatures}>
                  <div className={styles.aboutFeature}>
                    <span className={styles.featureIcon}>✓</span>
                    <span>Licensed by Pakistan Bar Council</span>
                  </div>
                  <div className={styles.aboutFeature}>
                    <span className={styles.featureIcon}>✓</span>
                    <span>Supreme Court Advocates</span>
                  </div>
                  <div className={styles.aboutFeature}>
                    <span className={styles.featureIcon}>✓</span>
                    <span>24/7 Legal Support</span>
                  </div>
                  <div className={styles.aboutFeature}>
                    <span className={styles.featureIcon}>✓</span>
                    <span>Multilingual Services</span>
                  </div>
                </div>
                <Link href="/about" className="btn btn-primary" style={{marginTop: '2rem'}}>
                  Learn More About Us
                </Link>
              </div>
              <div className={styles.aboutImageWrapper}>
                <div className={styles.aboutImageBox}>
                  <div className={styles.experienceBadge}>
                    <strong>15+</strong>
                    <span>Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className={`section ${styles.practiceSection}`}>
          <div className="container">
            <div className="text-center">
              <span className={styles.sectionLabel}>What We Do</span>
              <h2>Our Practice Areas</h2>
              <p className={styles.sectionDesc}>
                Comprehensive legal services delivered by experienced professionals
              </p>
            </div>
            
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>⚖️</div>
                <h3>Criminal Law</h3>
                <p>Expert defense in all criminal matters including bail applications, FIR quashment, trials, and appeals before all courts.</p>
                <ul className={styles.serviceList}>
                  <li>Bail Applications</li>
                  <li>FIR Quashment</li>
                  <li>Criminal Trials</li>
                  <li>Appeals & Revisions</li>
                </ul>
                <Link href="/services/criminal-law" className={styles.serviceLink}>
                  Explore Criminal Law →
                </Link>
              </div>
              
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>👨‍👩‍👧‍👦</div>
                <h3>Family Law</h3>
                <p>Compassionate and professional handling of family matters with sensitivity and expertise.</p>
                <ul className={styles.serviceList}>
                  <li>Khula & Divorce</li>
                  <li>Child Custody</li>
                  <li>Maintenance Claims</li>
                  <li>Guardianship</li>
                </ul>
                <Link href="/services/family-law" className={styles.serviceLink}>
                  Explore Family Law →
                </Link>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏢</div>
                <h3>Corporate Law</h3>
                <p>Complete corporate legal services from business formation to complex commercial transactions.</p>
                <ul className={styles.serviceList}>
                  <li>Company Registration</li>
                  <li>Contract Drafting</li>
                  <li>Mergers & Acquisitions</li>
                  <li>Corporate Compliance</li>
                </ul>
                <Link href="/services/corporate-law" className={styles.serviceLink}>
                  Explore Corporate Law →
                </Link>
              </div>
              
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏠</div>
                <h3>Property Law</h3>
                <p>Expert guidance on property transactions, disputes, and inheritance matters.</p>
                <ul className={styles.serviceList}>
                  <li>Property Disputes</li>
                  <li>Title Verification</li>
                  <li>Succession Certificates</li>
                  <li>Property Transfer</li>
                </ul>
                <Link href="/services/property-law" className={styles.serviceLink}>
                  Explore Property Law →
                </Link>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📋</div>
                <h3>Civil Law</h3>
                <p>Comprehensive civil litigation services for all types of civil disputes and matters.</p>
                <ul className={styles.serviceList}>
                  <li>Civil Suits</li>
                  <li>Injunctions</li>
                  <li>Contract Disputes</li>
                  <li>Money Recovery</li>
                </ul>
                <Link href="/services/civil-law" className={styles.serviceLink}>
                  Explore Civil Law →
                </Link>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💻</div>
                <h3>Cyber Crime</h3>
                <p>Specialized representation in FIA cyber crime cases and digital fraud matters.</p>
                <ul className={styles.serviceList}>
                  <li>FIA Cases</li>
                  <li>Online Harassment</li>
                  <li>Digital Fraud</li>
                  <li>Data Protection</li>
                </ul>
                <Link href="/services/cyber-crime" className={styles.serviceLink}>
                  Explore Cyber Law →
                </Link>
              </div>
            </div>

            <div className="text-center" style={{marginTop: '3rem'}}>
              <Link href="/practice-areas" className="btn btn-secondary">
                View All Practice Areas
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`section ${styles.whyUsSection}`}>
          <div className="container">
            <div className="text-center" style={{marginBottom: '3rem'}}>
              <span className={styles.sectionLabel}>Why Choose Us</span>
              <h2>Your Success is Our Commitment</h2>
            </div>
            
            <div className={styles.whyUsGrid}>
              <div className={styles.whyUsCard}>
                <div className={styles.whyUsIcon}>🎓</div>
                <h3>Experienced Team</h3>
                <p>Our attorneys hold advanced degrees and have successfully represented clients in thousands of cases across all levels of Pakistani courts.</p>
              </div>
              
              <div className={styles.whyUsCard}>
                <div className={styles.whyUsIcon}>🤝</div>
                <h3>Client-Focused</h3>
                <p>We prioritize clear communication, transparent processes, and keeping you informed at every stage of your legal matter.</p>
              </div>
              
              <div className={styles.whyUsCard}>
                <div className={styles.whyUsIcon}>⭐</div>
                <h3>Proven Results</h3>
                <p>With a 98% success rate and countless satisfied clients, our track record speaks for itself in delivering favorable outcomes.</p>
              </div>
              
              <div className={styles.whyUsCard}>
                <div className={styles.whyUsIcon}>🔒</div>
                <h3>Confidential & Ethical</h3>
                <p>We maintain the highest standards of professional ethics and ensure complete confidentiality in all client matters.</p>
              </div>
              
              <div className={styles.whyUsCard}>
                <div className={styles.whyUsIcon}>⚡</div>
                <h3>Quick Response</h3>
                <p>Our team is available 24/7 for urgent legal matters, ensuring you get timely assistance when you need it most.</p>
              </div>
              
              <div className={styles.whyUsCard}>
                <div className={styles.whyUsIcon}>💰</div>
                <h3>Transparent Pricing</h3>
                <p>No hidden costs. We provide clear, upfront fee structures and flexible payment plans to suit your budget.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={`section ${styles.testimonialsSection}`}>
          <div className="container">
            <div className="text-center" style={{marginBottom: '3rem'}}>
              <span className={styles.sectionLabel}>Client Testimonials</span>
              <h2>What Our Clients Say</h2>
            </div>
            
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "Karachi Legal House handled my property dispute with exceptional professionalism. Their expertise and dedication resulted in a favorable judgment. Highly recommended!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <strong>Ahmed Khan</strong>
                  <span>Property Dispute Client</span>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "I was facing a difficult criminal case. The team's expertise in criminal law and their strategic approach secured my bail and eventual acquittal. Forever grateful."
                </p>
                <div className={styles.testimonialAuthor}>
                  <strong>Fatima Malik</strong>
                  <span>Criminal Defense Client</span>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "Their family law team handled my custody case with sensitivity and professionalism. They understood my concerns and fought for my children's best interests."
                </p>
                <div className={styles.testimonialAuthor}>
                  <strong>Sarah Qureshi</strong>
                  <span>Family Law Client</span>
                </div>
              </div>
            </div>
            
            <div className="text-center" style={{marginTop: '3rem'}}>
              <Link href="/success-stories" className="btn btn-secondary">
                Read More Success Stories
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section ${styles.ctaSection}`}>
          <div className={`container text-center`}>
            <h2>Get Expert Legal Consultation Today</h2>
            <p className={styles.ctaDesc}>
              Don't face legal challenges alone. Our experienced attorneys are ready to provide the guidance and representation you need. Schedule your free consultation now.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/book-consultation" className="btn btn-primary">
                Book Free Consultation
              </Link>
              <a href="tel:+923001234567" className="btn btn-secondary">
                Call: +92 300 1234567
              </a>
            </div>
            <div className={styles.ctaContact}>
              <p>Available 24/7 for urgent matters</p>
              <div className={styles.contactMethods}>
                <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <span>•</span>
                <a href="mailto:info@karachilegalhouse.com">
                  Email
                </a>
                <span>•</span>
                <Link href="/contact">
                  Office Visit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
