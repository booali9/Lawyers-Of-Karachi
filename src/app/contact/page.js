import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us | Karachi Legal House - Get in Touch",
  description: "Contact Karachi Legal House for legal consultation. Visit our offices in Karachi, DHA, and Clifton. Available 24/7 for legal emergencies. Call +92 300 1234567",
};

export default function ContactPage() {
  const offices = [
    {
      name: "Main Office - DHA",
      address: "Office # 405, 4th Floor, Bahria Complex IV, MT Khan Road, DHA Phase 5, Karachi",
      phone: "+92 300 1234567",
      email: "info@karachilegalhouse.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 2:00 PM"
    },
    {
      name: "Branch Office - Clifton",
      address: "Suite 201, Ocean Tower, Block 8, Clifton, Karachi",
      phone: "+92 321 9876543",
      email: "clifton@karachilegalhouse.com",
      hours: "Mon-Sat: 10:00 AM - 5:00 PM"
    },
    {
      name: "Branch Office - Saddar",
      address: "3rd Floor, Kassam Chambers, Abdullah Haroon Road, Saddar, Karachi",
      phone: "+92 333 4567890",
      email: "saddar@karachilegalhouse.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM"
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.contactMain}>
        {/* Hero Section */}
        <section className={styles.contactHero}>
          <div className="container text-center">
            <span className={styles.heroLabel}>Get in Touch</span>
            <h1>Contact Karachi Legal House</h1>
            <p className={styles.heroDesc}>
              We're here to help with your legal matters. Reach out for consultation, inquiries, or emergency legal assistance.
            </p>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className={`section ${styles.quickContact}`}>
          <div className="container">
            <div className={styles.quickGrid}>
              <a href="tel:+923001234567" className={styles.quickCard}>
                <div className={styles.quickIcon}>📞</div>
                <h3>Call Us</h3>
                <p>+92 300 1234567</p>
                <span className={styles.availability}>Available 24/7</span>
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className={styles.quickCard}>
                <div className={styles.quickIcon}>💬</div>
                <h3>WhatsApp</h3>
                <p>+92 300 1234567</p>
                <span className={styles.availability}>Instant Response</span>
              </a>
              <a href="mailto:info@karachilegalhouse.com" className={styles.quickCard}>
                <div className={styles.quickIcon}>✉️</div>
                <h3>Email Us</h3>
                <p>info@karachilegalhouse.com</p>
                <span className={styles.availability}>Response within 24hrs</span>
              </a>
              <Link href="/book-consultation" className={styles.quickCard}>
                <div className={styles.quickIcon}>📅</div>
                <h3>Book Appointment</h3>
                <p>Schedule Consultation</p>
                <span className={styles.availability}>Free Initial Consultation</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section">
          <div className="container">
            <div className={styles.contactGrid}>
              {/* Contact Form */}
              <div className={styles.formSection}>
                <h2>Send Us a Message</h2>
                <p className={styles.formDesc}>
                  Fill out the form below and our legal team will get back to you within 24 hours.
                </p>
                <form className={styles.contactForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="Your full name" 
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        placeholder="+92 300 1234567" 
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject">Subject *</label>
                      <select id="subject" name="subject" required>
                        <option value="">Select a subject</option>
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
                    <textarea 
                      id="message" 
                      name="message"
                      rows="6" 
                      placeholder="Please describe your legal matter in detail..."
                      required
                    ></textarea>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" required />
                      <span>I agree to the Terms & Conditions and Privacy Policy</span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                  <p className={styles.formNote}>
                    * All fields are required. Your information is confidential and protected.
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div className={styles.infoSection}>
                <div className={styles.infoCard}>
                  <h2>Contact Information</h2>
                  <div className={styles.infoList}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>📍</span>
                      <div>
                        <strong>Main Office Address</strong>
                        <p>Office # 405, 4th Floor, Bahria Complex IV, MT Khan Road, DHA Phase 5, Karachi, Pakistan</p>
                      </div>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>📞</span>
                      <div>
                        <strong>Phone Numbers</strong>
                        <p>Main: +92 300 1234567</p>
                        <p>Clifton: +92 321 9876543</p>
                        <p>Saddar: +92 333 4567890</p>
                      </div>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>✉️</span>
                      <div>
                        <strong>Email Addresses</strong>
                        <p>General: info@karachilegalhouse.com</p>
                        <p>Corporate: corporate@karachilegalhouse.com</p>
                        <p>Legal: legal@karachilegalhouse.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.hoursCard}>
                  <h3>Office Hours</h3>
                  <ul className={styles.hoursList}>
                    <li>
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                    <li className={styles.emergency}>
                      <span>Emergency</span>
                      <span>24/7 Available</span>
                    </li>
                  </ul>
                </div>

                <div className={styles.socialCard}>
                  <h3>Follow Us</h3>
                  <div className={styles.socialLinks}>
                    <a href="#" aria-label="Facebook">Facebook</a>
                    <a href="#" aria-label="Twitter">Twitter</a>
                    <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    <a href="#" aria-label="Instagram">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Offices */}
        <section className={`section ${styles.officesSection}`}>
          <div className="container">
            <div className="text-center" style={{marginBottom: '3rem'}}>
              <h2>Our Office Locations</h2>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>
                Visit us at any of our convenient locations across Karachi
              </p>
            </div>
            <div className={styles.officesGrid}>
              {offices.map((office, index) => (
                <div key={index} className={styles.officeCard}>
                  <h3>{office.name}</h3>
                  <div className={styles.officeDetails}>
                    <div className={styles.officeDetail}>
                      <span className={styles.detailIcon}>📍</span>
                      <p>{office.address}</p>
                    </div>
                    <div className={styles.officeDetail}>
                      <span className={styles.detailIcon}>📞</span>
                      <p><a href={`tel:${office.phone.replace(/\s/g, '')}`}>{office.phone}</a></p>
                    </div>
                    <div className={styles.officeDetail}>
                      <span className={styles.detailIcon}>✉️</span>
                      <p><a href={`mailto:${office.email}`}>{office.email}</a></p>
                    </div>
                    <div className={styles.officeDetail}>
                      <span className={styles.detailIcon}>🕒</span>
                      <p>{office.hours}</p>
                    </div>
                  </div>
                  <a href="#" className={styles.directionsLink}>
                    Get Directions →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact Banner */}
        <section className={`section ${styles.emergencyBanner}`}>
          <div className="container text-center">
            <h2>Need Urgent Legal Assistance?</h2>
            <p className={styles.emergencyDesc}>
              Our attorneys are available 24/7 for legal emergencies. Don't hesitate to reach out.
            </p>
            <div className={styles.emergencyActions}>
              <a href="tel:+923001234567" className="btn btn-primary">
                Emergency Hotline: +92 300 1234567
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="btn btn-secondary">
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
