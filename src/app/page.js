import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, Landmark, ShieldCheck, Users, Globe, HeartHandshake, BadgeCheck, Phone, ArrowRight, MapPin } from "lucide-react";
import LogoMarquee from "@/components/LogoMarquee";
import PracticeVisual from "@/components/PracticeVisual";
import { firm, contact, offices, firmStats, practiceAreas, clientGroups, clientLogos, mediaLogos, whyUs } from "@/data/firm";
import { partners } from "@/data/team";
import styles from "./page.module.css";

const whyIcons = [
  <Users size={26} key="a" />,
  <Globe size={26} key="b" />,
  <Scale size={26} key="c" />,
  <Landmark size={26} key="d" />,
  <HeartHandshake size={26} key="e" />,
  <BadgeCheck size={26} key="f" />,
];

export default function Home() {
  const featured = practiceAreas.filter((a) => a.href).slice(0, 6);

  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ─── HERO ─── */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <Image
            src="/images/hero_banner.png"
            alt=""
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroContent}>
              <p className={styles.heroEyebrow}>
                <span className={styles.eyebrowLine} />
                Barristers &amp; Advocates — Karachi · Hyderabad · Sukkur
              </p>
              <h1 className={styles.heroTitle}>
                Comprehensive<br />Legal Excellence<br />Across Sindh.
              </h1>
              <p className={styles.heroDesc}>
                Litigation, corporate advisory, dispute resolution and regulatory compliance —
                delivered since {firm.founded} by a chamber registered with the {firm.barCouncil}
                {" "}under Registration No. {firm.barRegNo}.
              </p>
              <div className={styles.heroActions}>
                <Link href="/book-consultation" className={styles.heroCta}>
                  Book a Consultation <ArrowRight size={18} />
                </Link>
                <a href={contact.phoneHref} className={styles.heroPhone}>
                  <Phone size={18} /> {contact.phone}
                </a>
              </div>
            </div>

            <div className={styles.heroStats}>
              {firmStats.slice(0, 3).map((stat, i) => (
                <div key={stat.label} className={styles.heroStatCell}>
                  {i > 0 && <div className={styles.statDivider} />}
                  <div className={styles.heroStat}>
                    <span className={styles.statNum}>{stat.num}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CLIENT LOGO TICKER ─── */}
        <section className={`${styles.tickerSection} cut-top`} aria-label="Clients we represent">
          <div className="container">
            <p className={styles.tickerLabel}>Trusted by leading institutions across Sindh</p>
          </div>
          <LogoMarquee items={clientLogos} duration={55} label="Client logos" />
        </section>

        {/* ─── THE CHAMBER ─── */}
        <section className={`${styles.introSection} cut-top-reverse`}>
          <div className="container">
            <div className={styles.introGrid}>
              <div className={styles.introImageCol}>
                <div className={styles.introImageWrapper}>
                  <Image src="/images/team/jahangir-shams.jpg" alt="Shams Law Chamber" fill className={styles.introImg} />
                </div>
                <div className={styles.introFrame} />
                <div className={styles.introBadge}>
                  <span className={styles.introBadgeNum}>{firm.founded}</span>
                  <span className={styles.introBadgeLabel}>Year Established</span>
                </div>
              </div>

              <div className={styles.introTextCol}>
                <p className={styles.eyebrow}>
                  <span className={styles.eyebrowLine} />
                  About the Chamber
                </p>
                <h2 className={styles.introTitle}>A Decades-Long<br />Tradition of Litigation<br />and Advisory Excellence</h2>
                <div className={styles.accentRule} />
                <p className={styles.introBody}>
                  Founded in {firm.founded} by {firm.founderName} in Khairpur Mirs, {firm.name}{" "}
                  has grown over more than two decades into one of Sindh&apos;s most established
                  full-service law firms, with a footprint spanning Karachi, Hyderabad, Sukkur,
                  Larkana, Nawabshah, Mirpurkhas, Noushero Feroze, Ghotki, Gambat and Shikarpur.
                </p>
                <p className={styles.introBody}>
                  The firm&apos;s next generation of leadership joined in 2016, when Mr. Fayazuddin
                  Rajper took charge of the Chamber&apos;s affairs and built a diversified litigation
                  and advisory practice from the Karachi office alongside his brother,
                  Mr. Jahangir Shams. The Chamber is widely recognised as a top-tier Administrative
                  &amp; Constitutional, Commercial and Taxation law chamber in the Sindh province.
                </p>

                <div className={styles.introFacts}>
                  {[
                    { icon: <ShieldCheck size={22} />, title: `${firm.barCouncil} — Reg. No. ${firm.barRegNo}`, desc: 'A duly registered law firm authorised to practise throughout Sindh and before the Superior Courts of Pakistan.' },
                    { icon: <Scale size={22} />, title: '4,000+ clients represented, 99% success ratio', desc: 'Across criminal defence, civil and commercial litigation, family, banking and constitutional matters.' },
                    { icon: <Landmark size={22} />, title: 'Three regional offices, one Sindh-wide network', desc: 'Karachi, Hyderabad and Sukkur, reaching the District and Sessions Courts throughout the province.' },
                  ].map((item) => (
                    <div key={item.title} className={styles.fact}>
                      {item.icon}
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/about" className={styles.introCta}>
                  More About the Firm <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PARTNERS ─── */}
        <section className={`${styles.partnersSection} cut-top`}>
          <div className="container">
            <div className={styles.partnersHeader}>
              <div className={styles.partnersDivider}>
                <div className={styles.partnersDividerLine} />
                <Landmark size={24} className={styles.partnersDividerIcon} />
                <div className={styles.partnersDividerLine} />
              </div>
              <h2>Partners</h2>
            </div>

            <div className={styles.partnersList}>
              {partners.map((partner) => (
                <div key={partner.slug} className={styles.partnerRow}>
                  <div className={styles.partnerProfile}>
                    <img src={partner.avatar || partner.photo} alt={partner.name} className={styles.partnerImage} />
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                    <div className={styles.partnerTitle}>{partner.role}, {partner.court}</div>
                    <div className={styles.partnerCreds}>{partner.credentials}</div>
                  </div>
                  <p className={styles.partnerBio}>
                    {partner.bio} {partner.bioExtra}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.teamCta}>
              <p>Supported by senior associates, associates and interns across three offices.</p>
              <Link href="/lawyers" className={styles.introCta}>
                Meet the Full Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── PRACTICE AREAS ─── */}
        <section className={`${styles.practiceSection} cut-top-reverse`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                What We Do
              </p>
              <h2>Areas of Practice</h2>
              <p className={styles.sectionDesc}>
                A full-service practice spanning sixteen areas of law — from criminal defence and
                constitutional litigation to corporate advisory, banking, tax and intellectual property.
              </p>
            </div>

            <div className={styles.practiceGrid}>
              {featured.map((area) => (
                <Link href={area.href} key={area.title} className={`${styles.practiceCard} practice-card`}>
                  <PracticeVisual n={area.n} title={area.title} />
                  <div className={styles.practiceCardBody}>
                    <p>{area.desc}</p>
                    <span className={styles.practiceCardLink}>Learn More <ArrowRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.practiceAll}>
              {practiceAreas.filter((a) => !featured.includes(a)).map((area) => (
                <span key={area.title} className={styles.practiceChip}>
                  <em>{area.n}</em> {area.title}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY SHAMS LAW CHAMBER ─── */}
        <section className={`${styles.whySection} cut-top`}>
          <div className="container">
            <div className={styles.whyGrid}>
              <div className={styles.whyLeft}>
                <p className={styles.eyebrowLight}>
                  <span className={styles.eyebrowLineLight} />
                  Why Shams Law Chamber
                </p>
                <h2 className={styles.whyTitle}>Institutional<br />Trust, Built<br />Over 24 Years.</h2>
                <p className={styles.whyDesc}>
                  A record of service that continues to shape the Chamber&apos;s culture of integrity
                  and rigour — from the District and Sessions Courts of Sindh to the Superior Courts
                  of Pakistan.
                </p>
                <Link href="/contact" className={styles.whyCta}>
                  Speak to Our Counsel <ArrowRight size={16} />
                </Link>
              </div>
              <div className={styles.whyRight}>
                {whyUs.map((item, i) => (
                  <div key={item.title} className={styles.whyCard}>
                    <div className={styles.whyCardIcon}>{whyIcons[i]}</div>
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

        {/* ─── CLIENTS ─── */}
        <section className={`${styles.clientsSection} cut-top-reverse`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Affiliations &amp; Notable Clients
              </p>
              <h2>Trusted By</h2>
              <p className={styles.sectionDesc}>
                Enduring relationships with clients spanning heavy industry, banking and finance,
                telecommunications, security services and technology.
              </p>
            </div>
          </div>

          <div className={styles.clientsMarquee}>
            <LogoMarquee items={clientLogos} duration={50} reverse label="Client logos" />
          </div>

          <div className="container">
            <div className={styles.clientGroups}>
              {clientGroups.map((group) => (
                <div key={group.title} className={styles.clientGroup}>
                  <h3 className={styles.clientGroupTitle}>{group.title}</h3>
                  <p className={styles.clientGroupBlurb}>{group.blurb}</p>
                  <ul className={styles.clientNames}>
                    {group.names.map((name) => <li key={name}>{name}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MEDIA RECOGNITION ─── */}
        <section className={`${styles.mediaSection} cut-top`} aria-label="Media recognition">
          <div className="container">
            <div className={styles.mediaHeader}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Media Recognition
              </p>
              <p className={styles.mediaDesc}>
                The firm&apos;s work and its partners&apos; commentary have been featured in leading
                Pakistani news and media outlets.
              </p>
            </div>
          </div>
          <LogoMarquee items={mediaLogos} duration={35} size="sm" label="Media outlet logos" />
        </section>

        {/* ─── OFFICES ─── */}
        <section className={`${styles.officesSection} cut-top-reverse`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Where We Practise
              </p>
              <h2>Our Offices</h2>
            </div>
            <div className={styles.officesGrid}>
              {offices.map((office) => (
                <div key={office.city} className={styles.officeCard}>
                  <MapPin size={20} className={styles.officeIcon} />
                  <span className={styles.officeRole}>{office.role}</span>
                  <h3>{office.city}</h3>
                  <p>{office.lines.map((l) => <span key={l}>{l}<br /></span>)}</p>
                  <a href={office.phoneHref} className={styles.officePhone}>{office.phone}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <section className={`${styles.ctaSection} cut-top`}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h2 className={styles.ctaTitle}>Ready to Discuss Your Matter?</h2>
                <p className={styles.ctaDesc}>
                  Schedule an online call, a WhatsApp consultation, or an in-person appointment with
                  our lawyers.
                </p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/book-consultation" className={styles.ctaPrimary}>
                  Book a Consultation
                </Link>
                <a href={contact.phoneHref} className={styles.ctaSecondary}>
                  <Phone size={18} /> {contact.phone}
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
