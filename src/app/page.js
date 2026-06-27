import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroSection from "@/components/HeroSection";
import CoreFeatures from "@/components/CoreFeatures";
import AnimatedPracticeAreas from "@/components/AnimatedPracticeAreas";
import styles from "./page.module.css";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ===== Hero ===== */}
        <HeroSection />

        {/* ===== About ===== */}
        <section className={`section ${styles.aboutSection}`}>
          <div className={`container ${styles.aboutInner}`}>
            <ScrollAnimation className={styles.aboutImageCol}>
              <div className={styles.aboutImageWrap}>
                <Image src="/hero.png" alt="Karachi Legal House" width={600} height={450} className={styles.aboutImage} />
                <div className={styles.aboutBadge}>
                  <strong>15+</strong>
                  <span>Years of Excellence</span>
                </div>
              </div>
            </ScrollAnimation>
            <div className={styles.aboutContent}>
              <ScrollAnimation>
                <span className="section-tag">About Our Firm</span>
              </ScrollAnimation>
              <ScrollAnimation>
                <h2>Leading Law Firm in Karachi Since 2010</h2>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className={styles.aboutText}>
                  Karachi Legal House has established itself as one of Pakistan&apos;s most respected law firms. Our team of highly qualified advocates brings decades of combined experience across multiple jurisdictions, including the Supreme Court of Pakistan, High Courts, and specialized tribunals.
                </p>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className={styles.aboutText}>
                  We pride ourselves on delivering personalized legal solutions that protect your rights, defend your interests, and achieve favorable outcomes. Our commitment to excellence, integrity, and client satisfaction sets us apart.
                </p>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className={styles.aboutFeatures}>
                  <div className={styles.aboutFeature}><CheckIcon /> Licensed by Pakistan Bar Council</div>
                  <div className={styles.aboutFeature}><CheckIcon /> Supreme Court Advocates</div>
                  <div className={styles.aboutFeature}><CheckIcon /> 24/7 Legal Support</div>
                  <div className={styles.aboutFeature}><CheckIcon /> Multilingual Services</div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <Link href="/about" className="btn btn-primary" style={{ marginTop: '1.75rem' }}>
                  Learn More About Us <ArrowRight />
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* ===== Legal Process ===== */}
        <CoreFeatures />

        {/* ===== Practice Areas ===== */}
        <AnimatedPracticeAreas />

        {/* ===== Success Stories ===== */}
        <section className={`section ${styles.successSection}`}>
          <div className="container">
            <ScrollAnimation>
              <div className="section-header text-center">
                <span className="section-tag">Success Stories</span>
                <h2 className="section-title">Proven Results for Our Clients</h2>
                <p className="section-sub">Real cases, real outcomes. Our track record of success spans thousands of cases across Pakistan.</p>
              </div>
            </ScrollAnimation>

            <div className={styles.successStats}>
              <ScrollAnimation><div className={styles.successStat}><strong>3,000+</strong><span>Cases Resolved</span></div></ScrollAnimation>
              <ScrollAnimation><div className={styles.successStat}><strong>98%</strong><span>Success Rate</span></div></ScrollAnimation>
              <ScrollAnimation><div className={styles.successStat}><strong>₨2B+</strong><span>Value Protected</span></div></ScrollAnimation>
              <ScrollAnimation><div className={styles.successStat}><strong>100%</strong><span>Confidential</span></div></ScrollAnimation>
            </div>

            <div className={styles.successCards}>
              <ScrollAnimation>
                <div className={styles.successCard}>
                  <span className={styles.successBadge}>Criminal Law</span>
                  <h3>High-Profile Murder Case — Bail &amp; Acquittal</h3>
                  <p>Client falsely accused in a high-profile murder case. Multiple bail rejections in lower courts. Our High Court appeal secured bail in just 3 weeks, followed by full acquittal.</p>
                  <div className={styles.successResult}>
                    <span className={styles.resultDot} />
                    <span><strong>Result:</strong> Client acquitted, reputation restored</span>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className={styles.successCard}>
                  <span className={styles.successBadge}>Family Law</span>
                  <h3>Child Custody Victory for Mother</h3>
                  <p>Mother seeking custody of two minor children against a financially stronger father. Compelling evidence of care and involvement led to full custody being awarded.</p>
                  <div className={styles.successResult}>
                    <span className={styles.resultDot} />
                    <span><strong>Result:</strong> Full custody + maintenance granted</span>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className={styles.successCard}>
                  <span className={styles.successBadge}>Property Law</span>
                  <h3>₨50 Million Property Dispute — Restored</h3>
                  <p>Client&apos;s inherited property worth ₨50M was illegally occupied with forged documents. Forensic analysis exposed fraud. Court ruled in client&apos;s favor with damages awarded.</p>
                  <div className={styles.successResult}>
                    <span className={styles.resultDot} />
                    <span><strong>Result:</strong> Property restored + ₨2M damages</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation>
              <div className="text-center" style={{ marginTop: '3rem' }}>
                <Link href="/success-stories" className="btn btn-primary btn-lg">
                  View All Success Stories <ArrowRight />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ===== Why Choose Us ===== */}
        <section className={`section ${styles.whySection} section-alt`}>
          <div className="container">
            <ScrollAnimation>
              <div className="section-header text-center">
                <span className="section-tag">Why Choose Us</span>
                <h2 className="section-title">Your Success is Our Commitment</h2>
                <p className="section-sub">What sets Karachi Legal House apart is our unwavering dedication to every client</p>
              </div>
            </ScrollAnimation>

            <div className={styles.whyGrid}>
              <ScrollAnimation>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <h3>Experienced Team</h3>
                  <p>Our attorneys hold advanced degrees with decades of combined experience across all levels of Pakistani courts.</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h3>Client-Focused</h3>
                  <p>Clear communication and transparent processes, keeping you informed at every stage of your legal matter.</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <h3>Proven Track Record</h3>
                  <p>98% success rate with thousands of satisfied clients and countless favorable outcomes across all practice areas.</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <h3>Confidential &amp; Ethical</h3>
                  <p>Highest standards of professional ethics and complete confidentiality in all client matters.</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                  </div>
                  <h3>Quick Response</h3>
                  <p>Available 24/7 for urgent legal matters, ensuring you get timely assistance when you need it most.</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <h3>Transparent Pricing</h3>
                  <p>No hidden costs. Clear, upfront fee structures with flexible payment plans to suit your budget.</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* ===== Testimonials ===== */}
        <section className={`section ${styles.testimonialsSection}`}>
          <div className="container">
            <ScrollAnimation>
              <div className="section-header text-center">
                <span className="section-tag">Client Testimonials</span>
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-sub">Real feedback from real clients we&apos;ve helped across Pakistan</p>
              </div>
            </ScrollAnimation>

            <div className={styles.testimonialsGrid}>
              <ScrollAnimation>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialStars}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
                  <p className={styles.testimonialText}>&ldquo;Karachi Legal House handled my property dispute with exceptional professionalism. Their expertise and dedication resulted in a favorable judgment. Highly recommended!&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>AK</div>
                    <div>
                      <strong>Ahmed Khan</strong>
                      <span>Property Dispute Client</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialStars}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
                  <p className={styles.testimonialText}>&ldquo;I was facing a difficult criminal case. The team&apos;s expertise in criminal law and their strategic approach secured my bail and eventual acquittal. Forever grateful.&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>FM</div>
                    <div>
                      <strong>Fatima Malik</strong>
                      <span>Criminal Defense Client</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialStars}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
                  <p className={styles.testimonialText}>&ldquo;Their family law team handled my custody case with sensitivity and professionalism. They understood my concerns and fought for my children&apos;s best interests.&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>SQ</div>
                    <div>
                      <strong>Sarah Qureshi</strong>
                      <span>Family Law Client</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation>
              <div className="text-center" style={{ marginTop: '3rem' }}>
                <Link href="/success-stories" className="btn btn-secondary btn-lg">
                  Read More Success Stories <ArrowRight />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className={`section ${styles.ctaSection}`}>
          <div className="container text-center">
            <ScrollAnimation>
              <h2>Get Expert Legal Consultation Today</h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className={styles.ctaDesc}>
                Don&apos;t face legal challenges alone. Our experienced attorneys are ready to provide the guidance and representation you need. Schedule your free consultation now.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className={styles.ctaActions}>
                <Link href="/book-consultation" className="btn btn-primary btn-lg">
                  Book Free Consultation <ArrowRight />
                </Link>
                <a href="tel:+923001234567" className="btn btn-ghost-white btn-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call: +92 300 1234567
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className={styles.ctaContact}>
                <div className={styles.contactMethods}>
                  <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">WhatsApp</a>
                  <span className={styles.ctaDot}>|</span>
                  <a href="mailto:info@karachilegalhouse.com">Email</a>
                  <span className={styles.ctaDot}>|</span>
                  <Link href="/contact">Office Visit</Link>
                  <span className={styles.ctaDot}>|</span>
                  <span>Available 24/7</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
