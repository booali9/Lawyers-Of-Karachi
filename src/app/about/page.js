import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Scale, GraduationCap, Handshake, Briefcase, Lock, Zap, ArrowRight, CheckCircle } from "lucide-react";
import PracticeVisual from "@/components/PracticeVisual";
import { firm, practiceAreas } from "@/data/firm";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us",
  description:
    "Shams Law Chamber was founded in 2002 by Mr. Shamsuddin Rajper in Khairpur Mirs and has grown into one of Sindh's most established full-service law firms, registered with the Sindh Bar Council (No. 663/BC) with offices in Karachi, Hyderabad and Sukkur.",
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
            alt=""
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine} />
              About the Chamber
            </p>
            <h1 className={styles.heroTitle}>A Tradition of Litigation<br />and Advisory Excellence</h1>
            <p className={styles.heroDesc}>
              Established in {firm.founded} and registered with the {firm.barCouncil} under Registration
              No. {firm.barRegNo} — serving individuals, corporations, financial institutions and
              government bodies across Sindh.
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
                    src="/images/hero_banner.png"
                    alt=""
                    fill
                    className={styles.storyImage}
                  />
                </div>
                <div className={styles.storyAccent} />
                <div className={styles.storyStatsOverlay}>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>{firm.yearsPractice} yrs</span>
                    <span className={styles.statLabel}>Of Continuous Practice</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>4,000+</span>
                    <span className={styles.statLabel}>Clients Represented</span>
                  </div>
                </div>
              </div>
              <div className={styles.storyContent}>
                <p className={styles.eyebrow}>
                  <span className={styles.eyebrowLine} />
                  Our Story
                </p>
                <h2>Two Generations,<br />One Chamber.</h2>
                <p className={styles.storyText}>
                  Founded in {firm.founded} by {firm.founderName} in Khairpur Mirs, Sindh, {firm.name}{" "}
                  has grown over more than two decades into one of Sindh&apos;s most established full-service
                  law firms, with a footprint spanning Karachi, Hyderabad, Sukkur, Larkana, Nawabshah,
                  Mirpurkhas, Noushero Feroze, Ghotki, Gambat and Shikarpur. Its partners appear regularly
                  before the District and Sessions Courts, the Sindh High Court and the Superior Courts of Pakistan.
                </p>
                <p className={styles.storyText}>
                  Mr. Rajper&apos;s distinguished public-service career includes appointment as Assistant
                  Prosecutor General of Sindh (2008), Vice President of the Sindh High Court Bar Association,
                  Sukkur (2019–2020), and his current role as Deputy Attorney General for Pakistan at the
                  Circuit Bench of the Sindh High Court, Hyderabad — a record of institutional trust that
                  continues to shape the Chamber&apos;s culture of integrity and rigour.
                </p>
                <p className={styles.storyText}>
                  The firm&apos;s next generation of leadership joined in 2016, when Mr. Fayazuddin Rajper —
                  the founder&apos;s elder son — took charge of the Chamber&apos;s affairs and built a
                  diversified litigation and advisory practice from the Karachi office alongside his brother,
                  Mr. Jahangir Shams. In 2024, Mr. Raheem Dad Shujrah joined the practice, bringing a BBA and
                  an LL.B (Hons.) from the University of London and a dual expertise that bridges corporate
                  insight with courtroom proficiency.
                </p>
                <Link href="/lawyers" className={styles.storyBtn}>
                  Meet Our Team <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MISSION & VISION ─── */}
        <section className={`${styles.missionSection} cut-top`}>
          <div className="container">
            <div className={styles.missionGrid}>
              <div className={styles.missionCard}>
                <div className={styles.missionImageWrapper}>
                  <div className={styles.missionOverlay} />
                  <div className={styles.missionCardContent}>
                    <Scale size={36} className={styles.missionSvg} />
                    <h2>Our Mission</h2>
                    <p>To deliver the highest quality litigation and advisory services with integrity, professionalism and rigour — protecting our clients&apos; rights before every forum from the District Courts of Sindh to the Superior Courts of Pakistan.</p>
                  </div>
                </div>
              </div>
              <div className={styles.missionCard}>
                <div className={styles.missionImageWrapper}>
                  <div className={styles.missionOverlay} />
                  <div className={styles.missionCardContent}>
                    <GraduationCap size={36} className={styles.missionSvg} />
                    <h2>Our Vision</h2>
                    <p>To remain the top-tier Administrative &amp; Constitutional, Commercial and Taxation law chamber in Sindh — mentoring a new generation of litigators and extending pro bono counselling, legal aid and Public Interest Litigation to those who need it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CORE VALUES ─── */}
        <section className={`${styles.valuesSection} cut-top-reverse`}>
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
        <section className={`${styles.expertiseSection} cut-top`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                What We Do
              </p>
              <h2>Sixteen Areas of Practice</h2>
              <p className={styles.sectionDesc}>A full-service practice — from criminal defence and constitutional litigation to corporate advisory, banking, tax and intellectual property.</p>
            </div>
            <div className={styles.expertiseGrid}>
              {practiceAreas.filter((a) => a.href).slice(0, 6).map((e) => (
                <Link href={e.href} key={e.title} className={`${styles.expertiseCard} practice-card`}>
                  <PracticeVisual n={e.n} size="sm" />
                  <span className={styles.expertiseLabel}>{e.title}</span>
                </Link>
              ))}
            </div>
            <ul className={styles.areaList}>
              {practiceAreas.map((a) => (
                <li key={a.n}><span>{a.n}</span>{a.title}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── CREDENTIALS ─── */}
        <section className={`${styles.credentialsSection} cut-top-reverse`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Recognition
              </p>
              <h2>Registration &amp; Standing</h2>
            </div>
            <div className={styles.credentialsGrid}>
              {[
                { title: 'Sindh Bar Council — Reg. No. 663/BC', desc: 'A duly registered law firm regulated by the Sindh Bar Council and authorised to practise throughout the Province of Sindh' },
                { title: 'Superior Courts of Pakistan', desc: 'Partners appearing before the Sindh High Court and the Superior Courts of Pakistan' },
                { title: 'District & Sessions Courts', desc: 'An established network reaching the District and Sessions Courts throughout Sindh' },
                { title: 'Ranked Chamber', desc: 'Recognised by reputation and by rankings in legal publications as a top-tier Administrative & Constitutional, Commercial and Taxation law chamber in Sindh' },
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
        <section className={`${styles.ctaSection} cut-top`}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h2 className={styles.ctaTitle}>Ready to Discuss Your Legal Matter?</h2>
                <p className={styles.ctaDesc}>Schedule an online call, a WhatsApp consultation, or an in-person appointment with our lawyers.</p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/book-consultation" className={styles.ctaPrimary}>
                  Book a Consultation
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
