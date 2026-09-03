import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { firm, contact, offices } from "@/data/firm";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Shams Law Chamber — Karachi head office at Old Sunset Boulevard, DHA Phase II, with regional offices in Hyderabad and Sukkur. Call or WhatsApp +92 310 3381280.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.contactMain}>

        {/* ─── HERO BANNER ─── */}
        <section className={styles.contactHero}>
          <Image src="/images/hero_banner.png" alt="" fill priority className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}><span className={styles.eyebrowLine} />Get in Touch</p>
            <h1 className={styles.heroTitle}>Contact<br />{firm.name}</h1>
            <p className={styles.heroDesc}>Schedule an online call, a WhatsApp consultation, or an in-person appointment at our Karachi, Hyderabad or Sukkur office.</p>
          </div>
        </section>

        {/* ─── QUICK CONTACT CARDS ─── */}
        <div className={styles.quickStrip}>
          <div className="container">
            <div className={styles.quickGrid}>
              <a href={contact.phoneHref} className={styles.quickCard}>
                <Phone size={28} className={styles.quickIcon} />
                <div>
                  <h3>Call Us</h3>
                  <p>{contact.phone}</p>
                  <span>Karachi Head Office</span>
                </div>
              </a>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className={styles.quickCard}>
                <MessageCircle size={28} className={styles.quickIcon} />
                <div>
                  <h3>WhatsApp</h3>
                  <p>{contact.whatsapp}</p>
                  <span>WhatsApp Consultation</span>
                </div>
              </a>
              <a href={contact.emailHref} className={styles.quickCard}>
                <Mail size={28} className={styles.quickIcon} />
                <div>
                  <h3>Email Us</h3>
                  <p>{contact.email}</p>
                  <span>Reply within 24 hours</span>
                </div>
              </a>
              <Link href="/book-consultation" className={styles.quickCard}>
                <Calendar size={28} className={styles.quickIcon} />
                <div>
                  <h3>Book Appointment</h3>
                  <p>Schedule a Consultation</p>
                  <span>Online, WhatsApp or In-Person</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ─── CONTACT FORM + INFO ─── */}
        <section className={styles.mainSection}>
          <div className="container">
            <div className={styles.contactGrid}>

              {/* Form */}
              <div className={styles.formCol}>
                <p className={styles.eyebrow}><span className={styles.eyebrowLineDark} />Send a Message</p>
                <h2 className={styles.formTitle}>Tell Us About<br />Your Legal Matter</h2>
                <p className={styles.formDesc}>Fill out the form below and our team will get back to you within 24 hours.</p>
                <form className={styles.contactForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" placeholder="Your full name" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" placeholder="+92 3XX XXXXXXX" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject">Practice Area *</label>
                      <select id="subject" name="subject" required>
                        <option value="">Select area of law</option>
                        <option value="criminal">Criminal Law</option>
                        <option value="civil">Civil &amp; Commercial Law</option>
                        <option value="family">Family Law</option>
                        <option value="banking">Banking &amp; Finance Law</option>
                        <option value="tax">Tax &amp; Customs Law</option>
                        <option value="property">Property &amp; Inheritance Law</option>
                        <option value="corporate">Corporate &amp; Securities Law</option>
                        <option value="constitutional">Constitutional Law</option>
                        <option value="cyber">Cyber Crime Law</option>
                        <option value="other">Other Legal Matter</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message *</label>
                    <textarea id="message" name="message" rows="6" placeholder="Please describe your legal matter in detail..." required></textarea>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" required />
                      <span>I agree to the Terms &amp; Conditions and Privacy Policy</span>
                    </label>
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Send Message <ArrowRight size={16} />
                  </button>
                  <p className={styles.formNote}>* All fields are required. Your information is strictly confidential.</p>
                </form>
              </div>

              {/* Info Panel */}
              <div className={styles.infoCol}>
                <div className={styles.infoImageWrapper}>
                  <Image src="/images/hero_banner.png" alt="" fill className={styles.infoImg} />
                  <div className={styles.infoImgOverlay} />
                </div>
                <div className={styles.infoCards}>
                  <div className={styles.infoCard}>
                    <MapPin size={20} className={styles.infoIcon} />
                    <div>
                      <strong>Karachi Head Office</strong>
                      <p>{offices[0].lines.join(", ")}</p>
                    </div>
                  </div>
                  <div className={styles.infoCard}>
                    <Phone size={20} className={styles.infoIcon} />
                    <div>
                      <strong>Phone &amp; WhatsApp</strong>
                      <p>Karachi / Sukkur: {contact.phone}<br />Hyderabad: {contact.altPhone}</p>
                    </div>
                  </div>
                  <div className={styles.infoCard}>
                    <Mail size={20} className={styles.infoIcon} />
                    <div>
                      <strong>Email</strong>
                      <p>{contact.email}</p>
                    </div>
                  </div>
                  <div className={styles.infoCard}>
                    <Clock size={20} className={styles.infoIcon} />
                    <div>
                      <strong>Office Hours</strong>
                      <p>
                        {contact.hours.map((h) => (
                          <span key={h.days}>{h.days}: {h.time}<br /></span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── OFFICES ─── */}
        <section className={`${styles.officesSection} cut-top`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}><span className={styles.eyebrowLine} />Our Locations</p>
              <h2>Regional Offices</h2>
            </div>
            <div className={styles.officesGrid}>
              {offices.map((office) => (
                <div key={office.city} className={styles.officeCard}>
                  <h3>{office.city} — {office.role}</h3>
                  <div className={styles.officeDetails}>
                    <div className={styles.officeDetail}>
                      <MapPin size={18} className={styles.detailIcon} />
                      <p>{office.lines.join(", ")}</p>
                    </div>
                    <div className={styles.officeDetail}>
                      <Phone size={18} className={styles.detailIcon} />
                      <p><a href={office.phoneHref}>{office.phone}</a></p>
                    </div>
                    <div className={styles.officeDetail}>
                      <Mail size={18} className={styles.detailIcon} />
                      <p><a href={contact.emailHref}>{contact.email}</a></p>
                    </div>
                    <div className={styles.officeDetail}>
                      <Clock size={18} className={styles.detailIcon} />
                      <p>{contact.hours.map((h) => `${h.days}: ${h.time}`).join("  |  ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── URGENT BANNER ─── */}
        <section className={`${styles.emergencySection} cut-top-reverse`}>
          <div className="container">
            <div className={styles.emergencyInner}>
              <div>
                <h2 className={styles.emergencyTitle}>Need Urgent Legal Assistance?</h2>
                <p className={styles.emergencyDesc}>For time-sensitive matters — arrests, notices, injunctions — reach our Karachi office directly by phone or WhatsApp.</p>
              </div>
              <div className={styles.emergencyActions}>
                <a href={contact.phoneHref} className={styles.emergencyPrimary}>
                  <Phone size={18} /> {contact.phone}
                </a>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className={styles.emergencySecondary}>
                  <MessageCircle size={18} /> WhatsApp Now
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
