import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import styles from "./service.module.css";
import { servicesData } from "./servicesData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | Karachi Legal House`,
    description: service.desc,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className={styles.serviceMain}>
        {/* ─── HERO ─── */}
        <section className={styles.serviceHero}>
          <Image
            src={service.image || '/images/hero_banner.png'}
            alt={service.title}
            fill
            priority
            className={styles.heroBgImg}
          />
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.heroEyebrow}><span className={styles.eyebrowLine} />{service.shortTitle}</p>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            <p className={styles.heroDesc}>{service.desc}</p>
            <div className={styles.heroActions}>
              <Link href="/book-consultation" className={styles.heroCta}>
                Get Free Consultation
              </Link>
              <a href="tel:+923001234567" className={styles.heroPhone}>
                <Phone size={18} /> +92 300 123 4567
              </a>
            </div>
          </div>
        </section>

        {/* ─── OVERVIEW ─── */}
        <section className={styles.overviewSection}>
          <div className="container">
            <div className={styles.overviewGrid}>
              <div className={styles.overviewContent}>
                <p className={styles.eyebrowDark}><span className={styles.eyebrowLineDark} />Overview</p>
                <h2>Expert Representation in {service.shortTitle}</h2>
                <p className={styles.overviewText}>{service.overview}</p>
              </div>
              <div className={styles.overviewSidebar}>
                <div className={styles.sidebarCard}>
                  <h3>Need Immediate Assistance?</h3>
                  <p>Our legal team is available for urgent consultations regarding your matter.</p>
                  <a href="tel:+923001234567" className={styles.sidebarPhone}>
                    <Phone size={16} /> +92 300 123 4567
                  </a>
                  <Link href="/book-consultation" className={styles.sidebarCta}>
                    Schedule Meeting <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICES OFFERED ─── */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrowDark}><span className={styles.eyebrowLineDark} />What We Handle</p>
              <h2>Specific Areas of Expertise</h2>
            </div>
            <div className={styles.servicesGrid}>
              {service.services.map((item, index) => (
                <div key={index} className={styles.serviceItem}>
                  <div className={styles.serviceNumber}>{String(index + 1).padStart(2, '0')}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE US & PROCESS ─── */}
        <section className={styles.splitSection}>
          <div className="container">
            <div className={styles.splitGrid}>
              {/* Why Choose Us */}
              <div className={styles.whyCol}>
                <p className={styles.eyebrowDark}><span className={styles.eyebrowLineDark} />Why Us</p>
                <h2>Why Choose Karachi Legal House</h2>
                <div className={styles.whyList}>
                  {service.whyChoose.map((reason, index) => (
                    <div key={index} className={styles.whyItem}>
                      <CheckCircle2 size={24} className={styles.whyIcon} />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className={styles.processCol}>
                <div className={styles.processCard}>
                  <h2>Our Approach to Your Case</h2>
                  <div className={styles.processList}>
                    {service.process.map((step, index) => (
                      <div key={index} className={styles.processStep}>
                        <div className={styles.stepNum}>{index + 1}</div>
                        <div>
                          <h4>{step.step}</h4>
                          <p>{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQS ─── */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeaderCenter}>
              <p className={styles.eyebrowDarkCenter}><span className={styles.eyebrowLineDark} />FAQ</p>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className={styles.faqsContainer}>
              {service.faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <div className={styles.faqHeader}>
                    <ChevronRight size={20} className={styles.faqIcon} />
                    <h3>{faq.q}</h3>
                  </div>
                  <p className={styles.faqAnswer}>{faq.a}</p>
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
                <h2 className={styles.ctaTitle}>Ready to Discuss Your Case?</h2>
                <p className={styles.ctaDesc}>
                  Don't face legal challenges alone. Our experienced {service.shortTitle.toLowerCase()} attorneys are ready to help.
                </p>
                <div className={styles.ctaContactLine}>
                  <a href="tel:+923001234567"><Phone size={14} /> +92 300 1234567</a>
                  <span className={styles.ctaDot}>•</span>
                  <a href="mailto:info@karachilegalhouse.com"><Mail size={14} /> info@karachilegalhouse.com</a>
                  <span className={styles.ctaDot}>•</span>
                  <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer"><MessageCircle size={14} /> WhatsApp</a>
                </div>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/book-consultation" className={styles.ctaPrimary}>Schedule Consultation</Link>
                <Link href="/practice-areas" className={styles.ctaSecondary}>View All Services</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
