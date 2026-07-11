import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Scale, GraduationCap, Handshake, Briefcase, Lock, Zap, ArrowRight, CheckCircle } from "lucide-react";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us | Karachi Legal House - Premier Law Firm in Pakistan",
  description: "Learn about Karachi Legal House, a leading law firm in Pakistan. Meet our expert team of advocates and discover our commitment to legal excellence.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.aboutMain}>

        {/* ─── HERO BANNER ─── */}
        <section className={styles.aboutHero}>
          <Image
            src="/images/hero_banner.png"
            alt="Karachi Legal House"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine} />
              About Our Firm
            </p>
            <h1 className={styles.heroTitle}>Excellence in Legal<br />Practice Since 2010</h1>
            <p className={styles.heroDesc}>
              A legacy of trust, professionalism, and unwavering commitment to justice across Pakistan.
            </p>
          </div>
        </section>

        {/* ─── STORY SECTION ─── */}
        <section className={styles.storySection}>
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={styles.storyImageCol}>
                <div className={styles.storyImageWrapper}>
                  <Image
                    src="/images/criminal_law.png"
                    alt="Karachi Legal House Office"
                    fill
                    className={styles.storyImage}
                  />
                </div>
                <div className={styles.storyAccent} />
                <div className={styles.storyStatsOverlay}>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>15+</span>
                    <span className={styles.statLabel}>Years of Excellence</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>3000+</span>
                    <span className={styles.statLabel}>Cases Handled</span>
                  </div>
                </div>
              </div>
              <div className={styles.storyContent}>
                <p className={styles.eyebrow}>
                  <span className={styles.eyebrowLine} />
                  Our Story
                </p>
                <h2>Built on Trust,<br />Driven by Results.</h2>
                <p className={styles.storyText}>
                  Established in 2010, Karachi Legal House has grown from a boutique practice into one of Pakistan's most respected law firms. Our journey began with a clear vision — to provide honest, strategic, and effective legal representation that puts clients first.
                </p>
                <p className={styles.storyText}>
                  Over the past 15 years, we have successfully represented thousands of clients in matters ranging from criminal defence to complex corporate transactions. Our advocates have argued before the Supreme Court, all High Courts, and numerous specialised tribunals across Pakistan.
                </p>
                <p className={styles.storyText}>
                  Today, Karachi Legal House stands as a testament to what dedication, expertise, and integrity can achieve together.
                </p>
                <Link href="/lawyers" className={styles.storyBtn}>
                  Meet Our Team <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MISSION & VISION ─── */}
        <section className={styles.missionSection}>
          <div className="container">
            <div className={styles.missionGrid}>
              <div className={styles.missionCard}>
                <div className={styles.missionImageWrapper}>
                  <Image src="/images/civil_law.png" alt="Our Mission" fill className={styles.missionImg} />
                  <div className={styles.missionOverlay} />
                  <div className={styles.missionCardContent}>
                    <Scale size={36} className={styles.missionSvg} />
                    <h2>Our Mission</h2>
                    <p>To deliver the highest quality legal services with integrity, professionalism, and compassion — protecting our clients' rights and contributing to the advancement of justice in Pakistan.</p>
                  </div>
                </div>
              </div>
              <div className={styles.missionCard}>
                <div className={styles.missionImageWrapper}>
                  <Image src="/images/corporate_law.png" alt="Our Vision" fill className={styles.missionImg} />
                  <div className={styles.missionOverlay} />
                  <div className={styles.missionCardContent}>
                    <GraduationCap size={36} className={styles.missionSvg} />
                    <h2>Our Vision</h2>
                    <p>To be recognised as Pakistan's most trusted and innovative law firm — setting the standard for legal excellence, ethical practice, and client satisfaction across all tiers of the judiciary.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CORE VALUES ─── */}
        <section className={styles.valuesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                What We Stand For
              </p>
              <h2>Our Core Values</h2>
              <p className={styles.sectionDesc}>The principles that guide every decision we make</p>
            </div>
            <div className={styles.valuesGrid}>
              {[
                { icon: <Scale size={32} />, title: 'Integrity', desc: 'We uphold the highest ethical standards in every case — honesty, transparency, and trustworthiness in all our dealings.' },
                { icon: <GraduationCap size={32} />, title: 'Excellence', desc: 'We continuously strive for excellence in legal research, argumentation, and client service, never settling for mediocrity.' },
                { icon: <Handshake size={32} />, title: 'Client Focus', desc: 'Our clients\' needs, concerns, and goals are at the centre of everything we do. Your success is our success.' },
                { icon: <Briefcase size={32} />, title: 'Professionalism', desc: 'We maintain the highest standards of professional conduct, treating all parties with respect and dignity.' },
                { icon: <Lock size={32} />, title: 'Confidentiality', desc: 'We protect client information with utmost care, ensuring complete privacy and attorney-client privilege at all times.' },
                { icon: <Zap size={32} />, title: 'Responsiveness', desc: 'We respond promptly to client inquiries and adapt quickly to changing legal circumstances and evolving needs.' },
              ].map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EXPERTISE (image strip) ─── */}
        <section className={styles.expertiseSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                What We Do
              </p>
              <h2>Areas of Expertise</h2>
            </div>
            <div className={styles.expertiseGrid}>
              {[
                { img: '/images/criminal_law.png', label: 'Criminal Defence' },
                { img: '/images/family_law.png',   label: 'Family Law' },
                { img: '/images/corporate_law.png',label: 'Corporate Law' },
                { img: '/images/property_law.png', label: 'Property Law' },
                { img: '/images/civil_law.png',    label: 'Civil Litigation' },
                { img: '/images/cyber_law.png',    label: 'Cyber Crime' },
              ].map((e) => (
                <div key={e.label} className={styles.expertiseCard}>
                  <div className={styles.expertiseImgWrapper}>
                    <Image src={e.img} alt={e.label} fill className={styles.expertiseImg} />
                    <div className={styles.expertiseOverlay} />
                  </div>
                  <span className={styles.expertiseLabel}>{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CREDENTIALS ─── */}
        <section className={styles.credentialsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Recognition
              </p>
              <h2>Professional Credentials</h2>
            </div>
            <div className={styles.credentialsGrid}>
              {[
                { title: 'Pakistan Bar Council', desc: 'Licensed and registered advocates in good standing' },
                { title: 'Supreme Court of Pakistan', desc: 'Authorised to practice before the apex court' },
                { title: 'High Court Bar Association', desc: 'Active members at all High Courts of Pakistan' },
                { title: 'District Bar Association', desc: 'Registered with all major district bar associations' },
              ].map((c) => (
                <div key={c.title} className={styles.credentialCard}>
                  <CheckCircle size={28} className={styles.credentialIcon} />
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h2 className={styles.ctaTitle}>Ready to Discuss Your Legal Matter?</h2>
                <p className={styles.ctaDesc}>Schedule a free, confidential consultation with our experienced legal team today.</p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/book-consultation" className={styles.ctaPrimary}>
                  Book Free Consultation
                </Link>
                <Link href="/lawyers" className={styles.ctaSecondary}>
                  Meet Our Team
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
