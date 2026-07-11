import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, Award, BookOpen, Users, GraduationCap, Handshake, Star, Lock, Zap, CircleDollarSign, Phone, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ─── HERO ─── */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <Image
            src="/images/hero_banner.png"
            alt="Karachi Legal House"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroContent}>
              <p className={styles.heroEyebrow}>
                <span className={styles.eyebrowLine} />
                Advocates &amp; Legal Consultants — Karachi
              </p>
              <h1 className={styles.heroTitle}>
                Trusted Legal<br />Excellence Since<br />Day One.
              </h1>
              <p className={styles.heroDesc}>
                Led by Advocate Shehroze Ahmed (BA LL.B), our firm delivers expert representation in Criminal, Civil, Family, and Corporate Law across all courts of Pakistan.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.heroCta}>
                  Book Free Consultation <ArrowRight size={18} />
                </Link>
                <a href="tel:+923001234567" className={styles.heroPhone}>
                  <Phone size={18} /> +92 300 1234567
                </a>
              </div>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.statNum}>25+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.heroStat}>
                <span className={styles.statNum}>1000+</span>
                <span className={styles.statLabel}>Cases Won</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.heroStat}>
                <span className={styles.statNum}>98%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRINCIPAL LAWYER ─── */}
        <section className={styles.principalSection}>
          <div className="container">
            <div className={styles.principalGrid}>
              <div className={styles.principalImageCol}>
                <div className={styles.principalImageWrapper}>
                  <Image
                    src="/images/lawyer-1.jpeg"
                    alt="Advocate Shehroze Ahmed"
                    fill
                    className={styles.principalImg}
                  />
                </div>
                <div className={styles.principalImageAccent} />
              </div>
              <div className={styles.principalTextCol}>
                <p className={styles.eyebrow}>
                  <span className={styles.eyebrowLine} />
                  Principal Lawyer
                </p>
                <h2 className={styles.principalName}>Advocate<br />Shehroze Ahmed</h2>
                <p className={styles.principalQual}>BA LL.B &nbsp;|&nbsp; Karachi University</p>
                <p className={styles.principalBio}>
                  Advocate Shehroze Ahmed is the founding principal of Karachi Legal House with a distinguished track record spanning criminal defence, constitutional law, and civil litigation. He has successfully represented clients across all tiers of Pakistani courts.
                </p>
                <div className={styles.highlights}>
                  <div className={styles.highlight}>
                    <Scale size={22} />
                    <div>
                      <strong>High Court Certified</strong>
                      <span>Qualified to appear before High Courts &amp; District Courts</span>
                    </div>
                  </div>
                  <div className={styles.highlight}>
                    <Award size={22} />
                    <div>
                      <strong>1000+ Cases Successfully Closed</strong>
                      <span>Complex criminal, civil &amp; family matters</span>
                    </div>
                  </div>
                  <div className={styles.highlight}>
                    <BookOpen size={22} />
                    <div>
                      <strong>Multi-Practice Specialisation</strong>
                      <span>Criminal Law, Constitutional Law, Civil Litigation</span>
                    </div>
                  </div>
                </div>
                <Link href="/lawyers" className={styles.principalCta}>
                  Meet the Full Team <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRACTICE AREAS ─── */}
        <section className={styles.practiceSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                What We Do
              </p>
              <h2>Our Practice Areas</h2>
              <p className={styles.sectionDesc}>Comprehensive legal services delivered by experienced professionals across all major courts of Pakistan.</p>
            </div>

            <div className={styles.practiceGrid}>
              {[
                { img: '/images/criminal_law.png', title: 'Criminal Law', desc: 'Bail applications, FIR quashment, criminal trials and appeals before all courts.', href: '/services/criminal-law' },
                { img: '/images/family_law.png', title: 'Family Law', desc: 'Khula, divorce, child custody, maintenance and guardianship matters.', href: '/services/family-law' },
                { img: '/images/corporate_law.png', title: 'Corporate Law', desc: 'Company registration, contract drafting, mergers, acquisitions and compliance.', href: '/services/corporate-law' },
                { img: '/images/property_law.png', title: 'Property Law', desc: 'Property disputes, title verification, succession certificates and transfers.', href: '/services/property-law' },
                { img: '/images/civil_law.png', title: 'Civil Law', desc: 'Civil suits, injunctions, contract disputes and money recovery.', href: '/services/civil-law' },
                { img: '/images/cyber_law.png', title: 'Cyber Crime', desc: 'FIA cases, online harassment, digital fraud and data protection matters.', href: '/services/cyber-crime' },
              ].map((area) => (
                <Link href={area.href} key={area.title} className={styles.practiceCard}>
                  <div className={styles.practiceCardImg}>
                    <Image src={area.img} alt={area.title} fill className={styles.practiceImg} />
                    <div className={styles.practiceCardOverlay} />
                    <h3 className={styles.practiceCardTitle}>{area.title}</h3>
                  </div>
                  <div className={styles.practiceCardBody}>
                    <p>{area.desc}</p>
                    <span className={styles.practiceCardLink}>Learn More <ArrowRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE US ─── */}
        <section className={styles.whySection}>
          <div className="container">
            <div className={styles.whyGrid}>
              <div className={styles.whyLeft}>
                <p className={styles.eyebrowLight}>
                  <span className={styles.eyebrowLineLight} />
                  Why Choose Us
                </p>
                <h2 className={styles.whyTitle}>Your Success<br />Is Our Only<br />Commitment.</h2>
                <p className={styles.whyDesc}>We combine decades of legal expertise with a client-first approach to deliver results that matter.</p>
                <Link href="/contact" className={styles.whyCta}>
                  Get Free Consultation <ArrowRight size={16} />
                </Link>
              </div>
              <div className={styles.whyRight}>
                {[
                  { icon: <GraduationCap size={28} />, title: 'Highly Qualified Team', desc: 'Our attorneys hold advanced degrees and have appeared in thousands of cases across all levels of Pakistani courts.' },
                  { icon: <Handshake size={28} />, title: 'Client-First Approach', desc: 'Clear communication and total transparency at every stage of your case.' },
                  { icon: <Star size={28} />, title: 'Proven Track Record', desc: '98% success rate across criminal, civil, family and corporate matters.' },
                  { icon: <Lock size={28} />, title: 'Strictly Confidential', desc: 'Your case details remain completely private. Always.' },
                  { icon: <Zap size={28} />, title: '24/7 Availability', desc: 'Urgent legal matters receive our immediate attention, day or night.' },
                  { icon: <CircleDollarSign size={28} />, title: 'Transparent Fees', desc: 'No hidden costs. Clear upfront fee structures with flexible payment options.' },
                ].map((item) => (
                  <div key={item.title} className={styles.whyCard}>
                    <div className={styles.whyCardIcon}>{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className={styles.testimonialsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Client Testimonials
              </p>
              <h2>What Our Clients Say</h2>
            </div>
            <div className={styles.testimonialsGrid}>
              {[
                { quote: 'Karachi Legal House handled my property dispute with exceptional professionalism. Their expertise and dedication resulted in a favorable judgment. Highly recommended!', name: 'Ahmed Khan', role: 'Property Dispute Client' },
                { quote: "I was facing a very difficult criminal case. The team's strategic approach secured my bail and eventual acquittal. I will forever be grateful.", name: 'Fatima Malik', role: 'Criminal Defence Client' },
                { quote: 'Their family law team handled my custody case with real sensitivity and professionalism. They understood my concerns and fought for my children\'s best interests.', name: 'Sarah Qureshi', role: 'Family Law Client' },
              ].map((t) => (
                <div key={t.name} className={styles.testimonialCard}>
                  <div className={styles.testimonialStars}>★★★★★</div>
                  <p className={styles.testimonialQuote}>"{t.quote}"</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h2 className={styles.ctaTitle}>Ready to Discuss Your Case?</h2>
                <p className={styles.ctaDesc}>Our experienced attorneys are available now. Schedule your free, confidential consultation today.</p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Book Free Consultation
                </Link>
                <a href="tel:+923001234567" className={styles.ctaSecondary}>
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
