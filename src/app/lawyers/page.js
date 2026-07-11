import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Scale, GraduationCap, Handshake, Briefcase, ArrowRight, Award } from "lucide-react";
import styles from "./lawyers.module.css";

export const metadata = {
  title: "Our Lawyers | Karachi Legal House - Expert Legal Team",
  description: "Meet our highly qualified team of experienced advocates specializing in Criminal, Family, Corporate, Property, and Civil Law across Pakistan.",
};

export default function LawyersPage() {
  const lawyers = [
    {
      name: "Advocate Shehroze Ahmed",
      image: "/images/lawyer-1.jpeg",
      title: "Principal Lawyer & Advocate",
      credentials: "BA LL.B — Karachi University",
      experience: "5+ years",
      specialization: ["Criminal Law", "Constitutional Law", "Civil Litigation"],
      bio: "Principal lawyer with a distinguished track record spanning criminal defence, constitutional law, and civil litigation. Expert representation across all tiers of Pakistani courts.",
    },
    {
      name: "Muhammad Younis",
      image: "/images/lawyer-2.jpeg",
      title: "Associate Lawyer",
      credentials: "BA LL.B (SZABUL) | LLM Final Year",
      experience: "6+ years",
      specialization: ["Corporate Law", "Banking Law", "Commercial Litigation"],
      bio: "Highly qualified associate currently pursuing LLM from University of Sindh. Specialises in corporate matters, banking disputes, and commercial litigation.",
    },
    {
      name: "Raheem Dad",
      image: "/images/lawyer-3.jpeg",
      title: "Associate Lawyer",
      credentials: "LLB — University of London",
      experience: "8+ years",
      specialization: ["Civil Law", "Property Law", "Succession Matters"],
      bio: "Distinguished associate with international legal education from the University of London. Brings a global perspective to local practice with expertise in civil litigation and property law.",
    },
    {
      name: "Advocate Fayazuddin Rajper",
      image: "/images/lawyer-4.jpeg",
      title: "High Court Advocate",
      credentials: "Advocate High Court",
      experience: "12+ years",
      specialization: ["Criminal Law", "Constitutional Law", "Writ Petitions"],
      bio: "Senior associate and qualified High Court advocate with extensive experience in criminal defence and constitutional matters. Expert in filing writ petitions and complex appellate litigation.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className={styles.lawyersMain}>

        {/* ─── HERO BANNER ─── */}
        <section className={styles.lawyersHero}>
          <Image src="/images/civil_law.png" alt="Our Legal Team" fill priority className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}><span className={styles.eyebrowLine} />Our Legal Team</p>
            <h1 className={styles.heroTitle}>Meet Our Expert<br />Attorneys</h1>
            <p className={styles.heroDesc}>
              Highly qualified legal professionals committed to excellence and dedicated to achieving the best outcomes for every client.
            </p>
          </div>
        </section>

        {/* ─── TEAM STATS BAR ─── */}
        <div className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>25+</span>
                <span className={styles.statLabel}>Legal Professionals</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>100+</span>
                <span className={styles.statLabel}>Years Combined Experience</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>3000+</span>
                <span className={styles.statLabel}>Cases Handled</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>Supreme Court</span>
                <span className={styles.statLabel}>Qualified Advocates</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── LAWYER PROFILES ─── */}
        <section className={styles.profilesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}><span className={styles.eyebrowLine} />The Team</p>
              <h2>Our Advocates</h2>
            </div>
            <div className={styles.lawyersGrid}>
              {lawyers.map((lawyer, index) => (
                <div key={index} className={styles.lawyerCard}>
                  <div className={styles.lawyerImageWrapper}>
                    <Image
                      src={lawyer.image}
                      alt={lawyer.name}
                      fill
                      className={styles.lawyerPhoto}
                    />
                    <div className={styles.lawyerOverlay} />
                    <div className={styles.lawyerCardInfo}>
                      <h3>{lawyer.name}</h3>
                      <p className={styles.lawyerTitle}>{lawyer.title}</p>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <p className={styles.credentials}>{lawyer.credentials}</p>
                    <div className={styles.expBadge}>
                      <Scale size={16} />
                      <span>{lawyer.experience} Experience</span>
                    </div>
                    <div className={styles.tags}>
                      {lawyer.specialization.map((spec, idx) => (
                        <span key={idx} className={styles.tag}>{spec}</span>
                      ))}
                    </div>
                    <p className={styles.lawyerBio}>{lawyer.bio}</p>
                    <Link href="/book-consultation" className={styles.cardCta}>
                      Book Consultation <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY OUR TEAM ─── */}
        <section className={styles.whySection}>
          <div className="container">
            <div className={styles.whyGrid}>
              <div className={styles.whyImageCol}>
                <div className={styles.whyImageWrapper}>
                  <Image src="/images/criminal_law.png" alt="Why Our Team" fill className={styles.whyImg} />
                </div>
              </div>
              <div className={styles.whyContent}>
                <p className={styles.eyebrow}><span className={styles.eyebrowLine} />Why Choose Us</p>
                <h2>Why Choose Our<br />Legal Team</h2>
                <div className={styles.whyList}>
                  {[
                    { icon: <GraduationCap size={26} />, title: 'Highly Qualified', desc: 'Advanced degrees and specialised certifications from prestigious institutions across Pakistan and abroad.' },
                    { icon: <Scale size={26} />, title: 'Extensive Experience', desc: 'Decades of combined practice across all major courts, tribunals and specialised forums.' },
                    { icon: <Handshake size={26} />, title: 'Client-Focused', desc: 'Personalised attention and dedicated service for every single client matter.' },
                    { icon: <Briefcase size={26} />, title: 'Diverse Expertise', desc: 'Specialists covering all major areas of Pakistani law under one roof.' },
                  ].map((item) => (
                    <div key={item.title} className={styles.whyItem}>
                      <div className={styles.whyIcon}>{item.icon}</div>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h2 className={styles.ctaTitle}>Schedule a Consultation</h2>
                <p className={styles.ctaDesc}>Connect with our experienced attorneys to discuss your legal matter and get expert guidance.</p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/book-consultation" className={styles.ctaPrimary}>Book Free Consultation</Link>
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
