import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us | Karachi Legal House - Get in Touch",
  description: "Contact Karachi Legal House for legal consultation. Visit our offices in Karachi. Available 24/7 for legal emergencies.",
};

export default function ContactPage() {
  const offices = [
    {
      name: "Main Office — DHA",
      address: "Office # 405, 4th Floor, Bahria Complex IV, MT Khan Road, DHA Phase 5, Karachi",
      phone: "+92 311 2610683",
      email: "info@karachilegalhouse.com",
      hours: "Mon–Fri: 9:00 AM – 6:00 PM  |  Sat: 10:00 AM – 2:00 PM"
    },
    {
      name: "Branch Office — Clifton",
      address: "Suite 201, Ocean Tower, Block 8, Clifton, Karachi",
      phone: "+92 321 9876543",
      email: "clifton@karachilegalhouse.com",
      hours: "Mon–Sat: 10:00 AM – 5:00 PM"
    },
    {
      name: "Branch Office — Saddar",
      address: "3rd Floor, Kassam Chambers, Abdullah Haroon Road, Saddar, Karachi",
      phone: "+92 333 4567890",
      email: "saddar@karachilegalhouse.com",
      hours: "Mon–Fri: 9:00 AM – 5:00 PM"
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.contactMain}>

        {/* ─── HERO BANNER ─── */}
        <section className={styles.contactHero}>
          <Image src="/images/corporate_law.png" alt="Contact Karachi Legal House" fill priority className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}><span className={styles.eyebrowLine} />Get in Touch</p>
            <h1 className={styles.heroTitle}>Contact<br />Karachi Legal House</h1>
            <p className={styles.heroDesc}>We're here to help with your legal matters. Reach out for consultation, inquiries, or urgent legal assistance.</p>
          </div>
        </section>

        {/* ─── QUICK CONTACT CARDS ─── */}
        <div className={styles.quickStrip}>
          <div className="container">
            <div className={styles.quickGrid}>
              <a href="tel:+923112610683" className={styles.quickCard}>
                <Phone size={28} className={styles.quickIcon} />
                <div>
                  <h3>Call Us</h3>
                  <p>+92 300 123 4567</p>
                  <span>Available 24/7</span>
                </div>
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className={styles.quickCard}>
                <MessageCircle size={28} className={styles.quickIcon} />
                <div>
                  <h3>WhatsApp</h3>
                  <p>+92 300 123 4567</p>
                  <span>Instant Response</span>
                </div>
              </a>
              <a href="mailto:info@karachilegalhouse.com" className={styles.quickCard}>
                <Mail size={28} className={styles.quickIcon} />
                <div>
                  <h3>Email Us</h3>
                  <p>info@karachilegalhouse.com</p>
                  <span>Reply within 24hrs</span>
                </div>
              </a>
              <Link href="/book-consultation" className={styles.quickCard}>
                <Calendar size={28} className={styles.quickIcon} />
                <div>
                  <h3>Book Appointment</h3>
                  <p>Schedule a Consultation</p>
                  <span>Free Initial Consultation</span>
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
                <p className={styles.formDesc}>Fill out the form below and our legal team will get back to you within 24 hours.</p>
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
                      <input type="tel" id="phone" name="phone" placeholder="+92 311 2610683" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject">Practice Area *</label>
                      <select id="subject" name="subject" required>
                        <option value="">Select area of law</option>
                        <option value="criminal">Criminal Law</option>
                        <option value="family">Family Law</option>
                        <option value="corporate">Corporate Law</option>
                        <option value="property">Property Law</option>
                        <option value="civil">Civil Litigation</option>
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
                      <span>I agree to the Terms & Conditions and Privacy Policy</span>
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
                  <Image src="/images/civil_law.png" alt="Office" fill className={styles.infoImg} />
                  <div className={styles.infoImgOverlay} />
                </div>
                <div className={styles.infoCards}>
                  <div className={styles.infoCard}>
                    <MapPin size={20} className={styles.infoIcon} />
                    <div>
                      <strong>Main Office</strong>
                      <p>Office # 405, 4th Floor, Bahria Complex IV, MT Khan Road, DHA Phase 5, Karachi</p>
                    </div>
                  </div>
                  <div className={styles.infoCard}>
                    <Phone size={20} className={styles.infoIcon} />
                    <div>
                      <strong>Phone Numbers</strong>
                      <p>Main: +92 300 123 4567<br />Clifton: +92 321 987 6543<br />Saddar: +92 333 456 7890</p>
                    </div>
                  </div>
                  <div className={styles.infoCard}>
                    <Mail size={20} className={styles.infoIcon} />
                    <div>
                      <strong>Email Addresses</strong>
                      <p>info@karachilegalhouse.com<br />corporate@karachilegalhouse.com</p>
                    </div>
                  </div>
                  <div className={styles.infoCard}>
                    <Clock size={20} className={styles.infoIcon} />
                    <div>
                      <strong>Office Hours</strong>
                      <p>Mon–Fri: 9:00 AM – 6:00 PM<br />Sat: 10:00 AM – 2:00 PM<br />Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── OFFICES ─── */}
        <section className={styles.officesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}><span className={styles.eyebrowLine} />Our Locations</p>
              <h2>Office Locations</h2>
            </div>
            <div className={styles.officesGrid}>
              {offices.map((office, index) => (
                <div key={index} className={styles.officeCard}>
                  <h3>{office.name}</h3>
                  <div className={styles.officeDetails}>
                    <div className={styles.officeDetail}>
                      <MapPin size={18} className={styles.detailIcon} />
                      <p>{office.address}</p>
                    </div>
                    <div className={styles.officeDetail}>
                      <Phone size={18} className={styles.detailIcon} />
                      <p><a href={`tel:${office.phone.replace(/\s/g, '')}`}>{office.phone}</a></p>
                    </div>
                    <div className={styles.officeDetail}>
                      <Mail size={18} className={styles.detailIcon} />
                      <p><a href={`mailto:${office.email}`}>{office.email}</a></p>
                    </div>
                    <div className={styles.officeDetail}>
                      <Clock size={18} className={styles.detailIcon} />
                      <p>{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EMERGENCY BANNER ─── */}
        <section className={styles.emergencySection}>
          <div className="container">
            <div className={styles.emergencyInner}>
              <div>
                <h2 className={styles.emergencyTitle}>Need Urgent Legal Assistance?</h2>
                <p className={styles.emergencyDesc}>Our attorneys are available 24/7 for legal emergencies. Don't hesitate to reach out immediately.</p>
              </div>
              <div className={styles.emergencyActions}>
                <a href="tel:+923112610683" className={styles.emergencyPrimary}>
                  <Phone size={18} /> Emergency Hotline
                </a>
                <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className={styles.emergencySecondary}>
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

