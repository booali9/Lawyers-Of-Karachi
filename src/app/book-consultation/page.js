import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./booking.module.css";

export const metadata = {
  title: "Book Free Legal Consultation | Karachi Legal House - Schedule Appointment",
  description: "Schedule a free consultation with experienced lawyers in Karachi. Expert legal advice on criminal, family, property, corporate law. Available 24/7 for urgent matters.",
  keywords: "book consultation Karachi, free legal consultation Pakistan, lawyer appointment Karachi, legal consultation online"
};

export default function BookConsultationPage() {
  return (
    <>
      <Navbar />
      <main className={styles.bookingMain}>
        <section className={styles.bookingHero}>
          <div className="container">
            <h1>Schedule Your Free Legal Consultation</h1>
            <p className={styles.heroDesc}>
              Get expert legal advice from our experienced attorneys. We offer in-person, phone, and video consultations to accommodate your schedule and preferences.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.bookingGrid}>
              <div className={styles.formSection}>
                <h2>Book Your Appointment</h2>
                <p className={styles.formIntro}>
                  Fill out the form below and our team will contact you within 24 hours to confirm your appointment time.
                </p>
                
                <form className={styles.bookingForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="firstName">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="lastName">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" placeholder="+92 300 1234567" required />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="consultationType">Consultation Type *</label>
                      <select id="consultationType" name="consultationType" required>
                        <option value="">Select consultation type</option>
                        <option value="office">In-Office Visit</option>
                        <option value="video">Video Call (Zoom/WhatsApp)</option>
                        <option value="phone">Phone Call</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="legalArea">Legal Service Needed *</label>
                      <select id="legalArea" name="legalArea" required>
                        <option value="">Select legal area</option>
                        <option value="criminal">Criminal Law</option>
                        <option value="family">Family Law</option>
                        <option value="corporate">Corporate Law</option>
                        <option value="property">Property Law</option>
                        <option value="civil">Civil Litigation</option>
                        <option value="constitutional">Constitutional Law</option>
                        <option value="cyber">Cyber Crime</option>
                        <option value="banking">Banking & Finance</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="preferredDate">Preferred Date *</label>
                    <input type="date" id="preferredDate" name="preferredDate" required />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="preferredTime">Preferred Time *</label>
                    <select id="preferredTime" name="preferredTime" required>
                      <option value="">Select time slot</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                      <option value="evening">Evening (3 PM - 6 PM)</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="caseDescription">Brief Description of Your Legal Matter *</label>
                    <textarea 
                      id="caseDescription" 
                      name="caseDescription"
                      rows="5"
                      placeholder="Please provide details about your legal situation..."
                      required
                    ></textarea>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" required />
                      <span>I agree to the Terms & Conditions and Privacy Policy *</span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit Consultation Request
                  </button>
                  
                  <p className={styles.formNote}>
                    * All fields are required. Your information is kept confidential under attorney-client privilege.
                  </p>
                </form>
              </div>

              <div className={styles.infoSection}>
                <div className={styles.infoCard}>
                  <h3>Why Schedule a Consultation?</h3>
                  <ul className={styles.benefitsList}>
                    <li>Free initial legal assessment</li>
                    <li>Expert advice from qualified lawyers</li>
                    <li>Clear understanding of your legal options</li>
                    <li>Transparent fee structure explained</li>
                    <li>Confidential discussion of your case</li>
                  </ul>
                </div>

                <div className={styles.infoCard}>
                  <h3>What to Prepare</h3>
                  <ul className={styles.prepList}>
                    <li>Summary of your legal issue</li>
                    <li>Relevant documents (if any)</li>
                    <li>Timeline of events</li>
                    <li>Questions for the lawyer</li>
                    <li>Any previous legal correspondence</li>
                  </ul>
                </div>

                <div className={styles.contactCard}>
                  <h3>Need Immediate Assistance?</h3>
                  <p>For urgent legal matters, contact us directly:</p>
                  <div className={styles.urgentContacts}>
                    <a href="tel:+923001234567" className={styles.urgentLink}>
                      📞 +92 300 1234567
                    </a>
                    <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className={styles.urgentLink}>
                      💬 WhatsApp Chat
                    </a>
                    <a href="mailto:info@karachilegalhouse.com" className={styles.urgentLink}>
                      ✉️ Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
