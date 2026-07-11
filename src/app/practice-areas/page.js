import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Scale, Briefcase, Handshake } from "lucide-react";
import styles from "./practice.module.css";
import { servicesData } from "../services/[slug]/servicesData";

export const metadata = {
  title: "Practice Areas | Karachi Legal House - Comprehensive Legal Services",
  description: "Expert legal services across Criminal Law, Civil Law, Family Law, Corporate Law, Property Law, and Cyber Crime in Pakistan.",
};

export default function PracticeAreasPage() {
  const practices = Object.entries(servicesData).map(([slug, data]) => ({
    ...data,
    link: `/services/${slug}`
  }));

  return (
    <>
      <Navbar />
      <main className={styles.practiceMain}>
        {/* ─── HERO BANNER ─── */}
        <section className={styles.practiceHero}>
          <Image src="/images/hero_banner.png" alt="Our Practice Areas" fill priority className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}><span className={styles.eyebrowLine} />What We Do</p>
            <h1 className={styles.heroTitle}>Our Practice Areas</h1>
            <p className={styles.heroDesc}>
              Comprehensive legal services delivered by experienced professionals across all major areas of law in Pakistan.
            </p>
          </div>
        </section>

        {/* ─── PRACTICE AREAS GRID ─── */}
        <section className={styles.practiceSection}>
          <div className="container">
            <div className={styles.practiceGrid}>
              {practices.map((practice, index) => (
                <div key={index} className={styles.practiceCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image src={practice.image || '/images/hero_banner.png'} alt={practice.title} fill className={styles.cardImage} />
                    <div className={styles.cardImageOverlay} />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <h2>{practice.title}</h2>
                      <p className={styles.shortDesc}>{practice.shortTitle}</p>
                    </div>
                    
                    <p className={styles.fullDesc}>{practice.desc}</p>
                    
                    <div className={styles.servicesSection}>
                      <h4>Key Expertise</h4>
                      <ul className={styles.servicesList}>
                        {practice.services.slice(0, 3).map((service, idx) => (
                          <li key={idx}>
                            <span className={styles.bullet}></span>
                            {service.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.cardFooter}>
                      <Link href={practice.link} className={styles.learnMore}>
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE US ─── */}
        <section className={styles.whySection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrowDark}><span className={styles.eyebrowLineDark} />Trusted Expertise</p>
              <h2>Why Choose Our Legal Services</h2>
            </div>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}><GraduationCap size={28} /></div>
                <h3>Expert Attorneys</h3>
                <p>Supreme Court advocates with specialized expertise in each practice area.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}><Scale size={28} /></div>
                <h3>Proven Success</h3>
                <p>Track record of favorable outcomes across thousands of complex cases.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}><Briefcase size={28} /></div>
                <h3>Strategic Approach</h3>
                <p>Customized legal strategies tailored to your specific personal or corporate situation.</p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}><Handshake size={28} /></div>
                <h3>Client-Focused</h3>
                <p>Clear communication and dedicated attention throughout your legal journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA SECTION ─── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h2 className={styles.ctaTitle}>Need Legal Assistance?</h2>
                <p className={styles.ctaDesc}>Our experienced legal team is ready to help you navigate your legal challenges.</p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/book-consultation" className={styles.ctaPrimary}>Book Consultation</Link>
                <Link href="/contact" className={styles.ctaSecondary}>Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
