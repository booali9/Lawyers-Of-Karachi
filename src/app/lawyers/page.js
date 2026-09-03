import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Scale, GraduationCap, Handshake, Briefcase, ArrowRight, MapPin, Award } from "lucide-react";
import { partners, founder, teamByOffice, teamCount } from "@/data/team";
import { firm, firmStats } from "@/data/firm";
import styles from "./lawyers.module.css";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the advocates of Shams Law Chamber — managing partners, senior associates and associates practising before the District Courts, the Sindh High Court and the Superior Courts of Pakistan from Karachi, Hyderabad and Sukkur.",
};

function initials(name) {
  return name
    .replace(/^(Mr\.|Mrs\.|Miss|Ms\.|Dr\.|Adv\.|Advocate)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function Portrait({ name, photo, className }) {
  if (photo) {
    return (
      <Image src={photo} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className={className} />
    );
  }
  return (
    <div className={styles.monogram} aria-hidden="true">
      <span>{initials(name)}</span>
    </div>
  );
}

export default function LawyersPage() {
  const stats = [
    { num: `${teamCount}`, label: "Lawyers & Interns" },
    { num: "3", label: "Regional Offices" },
    ...firmStats.slice(0, 2),
  ];

  return (
    <>
      <Navbar />
      <main className={styles.lawyersMain}>

        {/* ─── HERO ─── */}
        <section className={styles.lawyersHero}>
          <Image src="/images/hero_banner.png" alt="" fill priority className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroInner}`}>
            <p className={`${styles.eyebrow} ${styles.eyebrowInverse}`}><span className={styles.eyebrowLine} />Our Team</p>
            <h1 className={styles.heroTitle}>The Advocates of<br />Shams Law Chamber</h1>
            <p className={styles.heroDesc}>
              Two managing partners, senior associates and associates practising across Karachi,
              Hyderabad and Sukkur — appearing daily before the District and Sessions Courts, the
              Sindh High Court and the Superior Courts of Pakistan.
            </p>
          </div>
        </section>

        {/* ─── STATS BAR ─── */}
        <div className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsRow}>
              {stats.map((stat, i) => (
                <div key={stat.label} className={styles.statCell}>
                  {i > 0 && <div className={styles.statDivider} />}
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>{stat.num}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── MANAGING PARTNERS ─── */}
        <section className={styles.partnersSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}><span className={styles.eyebrowLine} />Leadership</p>
              <h2>Managing Partners</h2>
              <p className={styles.sectionDesc}>
                The Chamber&apos;s Karachi head office is led by the two brothers who carried the
                practice into its next generation.
              </p>
            </div>

            <div className={styles.partnerList}>
              {partners.map((partner) => (
                <article key={partner.slug} className={styles.partnerRow}>
                  <div className={styles.partnerProfile}>
                    <div className={styles.partnerAvatar}>
                      <Portrait name={partner.name} photo={partner.avatar || partner.photo} className={styles.partnerPhoto} />
                    </div>
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                    <div className={styles.partnerTitle}>{partner.role}, {partner.court}</div>
                    <div className={styles.partnerCreds}>{partner.credentials}</div>
                  </div>

                  <div className={styles.partnerContent}>
                    <p className={styles.partnerBio}>{partner.bio} {partner.bioExtra}</p>
                    <div className={styles.tags}>
                      {partner.practice.map((p) => (
                        <span key={p} className={styles.tag}>{p}</span>
                      ))}
                    </div>
                    <Link href="/book-consultation" className={styles.cardCta}>
                      Request a Consultation <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FOUNDER ─── */}
        <section className={`${styles.founderSection} cut-top`}>
          <div className="container">
            <div className={styles.founderGrid}>
              <div>
                <p className={`${styles.eyebrow} ${styles.eyebrowInverse}`}><span className={styles.eyebrowLine} />Founder</p>
                <h2 className={styles.founderName}>{founder.name}</h2>
                <p className={styles.founderMeta}>{founder.credentials} &nbsp;·&nbsp; {founder.office}</p>
                <p className={styles.founderBio}>{founder.bio}</p>
              </div>
              <ul className={styles.honoursList}>
                {founder.honours.map((honour) => (
                  <li key={honour}>
                    <Award size={18} />
                    <span>{honour}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── TEAM BY OFFICE ─── */}
        {teamByOffice.map((office) => (
          <section key={office.office} className={styles.officeSection}>
            <div className="container">
              <div className={styles.officeHeader}>
                <div>
                  <p className={styles.eyebrow}><span className={styles.eyebrowLine} />{office.label}</p>
                  <h2>{office.office}</h2>
                </div>
                <p className={styles.officeAddress}>
                  <MapPin size={15} /> {office.address}
                </p>
              </div>

              {office.groups.map((group) => (
                <div key={group.rank} className={styles.rankBlock}>
                  <h3 className={styles.rankTitle}>
                    <span>{group.rank}</span>
                    <span className={styles.rankLine} />
                    <span className={styles.rankCount}>{String(group.members.length).padStart(2, "0")}</span>
                  </h3>

                  <div className={group.rank === "Interns" ? styles.internGrid : styles.memberGrid}>
                    {group.members.map((member) => (
                      group.rank === "Interns" ? (
                        <div key={member.name} className={styles.internCard}>
                          <div className={styles.internAvatar}>{initials(member.name)}</div>
                          <div>
                            <h4>{member.name}</h4>
                            <span>{member.court}</span>
                          </div>
                        </div>
                      ) : (
                        <article key={member.name} className={styles.memberCard}>
                          <div className={styles.memberImageWrapper}>
                            <Portrait name={member.name} photo={member.photo} className={styles.memberPhoto} />
                          </div>
                          <div className={styles.memberBody}>
                            <h4 className={styles.memberName}>{member.name}</h4>
                            <p className={styles.memberCourt}>{member.court}</p>
                            {member.credentials && (
                              <p className={styles.memberCreds}>{member.credentials}</p>
                            )}
                            {member.experience && (
                              <span className={styles.expBadge}>
                                <Scale size={13} /> {member.experience}
                              </span>
                            )}
                            {member.bio && <p className={styles.memberBio}>{member.bio}</p>}
                            {member.practice && (
                              <div className={styles.tags}>
                                {member.practice.map((p) => (
                                  <span key={p} className={styles.tagSm}>{p}</span>
                                ))}
                              </div>
                            )}
                            {member.courses && (
                              <div className={styles.courses}>
                                <span className={styles.coursesLabel}>Professional development</span>
                                <ul>
                                  {member.courses.map((c) => <li key={c}>{c}</li>)}
                                </ul>
                              </div>
                            )}
                          </div>
                        </article>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* ─── WHY OUR TEAM ─── */}
        <section className={`${styles.whySection} cut-top-reverse`}>
          <div className="container">
            <div className={styles.whyGrid}>
              <div className={styles.whyImageCol}>
                <div className={styles.whyImageWrapper}>
                  <Image src="/images/hero_banner.png" alt="" fill className={styles.whyImg} />
                </div>
                <div className={styles.whyFrame} />
              </div>
              <div className={styles.whyContent}>
                <p className={styles.eyebrow}><span className={styles.eyebrowLine} />Why Choose Us</p>
                <h2>A Chamber Built on<br />Two Generations</h2>
                <div className={styles.whyList}>
                  {[
                    { icon: <GraduationCap size={24} />, title: 'Qualified Advocates', desc: 'Degrees from SZABUL, SALU Khairpur, the University of Sindh and the University of London, with advocates enrolled before the High Courts of Pakistan.' },
                    { icon: <Scale size={24} />, title: `${firm.yearsPractice} Years of Practice`, desc: 'Continuous practice since 2002 across the District and Sessions Courts, the Sindh High Court and the Superior Courts.' },
                    { icon: <Handshake size={24} />, title: 'Client-Focused', desc: 'Personalised attention on every matter, with pro bono counselling, legal aid and Public Interest Litigation.' },
                    { icon: <Briefcase size={24} />, title: '16 Areas of Law', desc: 'From criminal defence and constitutional litigation to corporate advisory, banking, tax and intellectual property.' },
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
        <section className={`${styles.ctaSection} cut-top`}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h2 className={styles.ctaTitle}>Speak to One of Our Advocates</h2>
                <p className={styles.ctaDesc}>
                  Schedule an online call, a WhatsApp consultation, or an in-person appointment at
                  our Karachi, Hyderabad or Sukkur office.
                </p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/book-consultation" className={styles.ctaPrimary}>Book a Consultation</Link>
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
