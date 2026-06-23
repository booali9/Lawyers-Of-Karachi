import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../privacy-policy/legal.module.css";

export const metadata = {
  title: "Terms & Conditions | Karachi Legal House",
  description: "Terms and conditions for using Karachi Legal House legal services and website."
};

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.legalMain}>
        <section className={styles.legalHero}>
          <div className="container">
            <h1>Terms & Conditions</h1>
            <p className={styles.lastUpdated}>Last Updated: June 23, 2026</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.legalContent}>
              <div className={styles.section}>
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the Karachi Legal House website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                </p>
              </div>

              <div className={styles.section}>
                <h2>2. No Attorney-Client Relationship</h2>
                <p className={styles.important}>
                  <strong>Important:</strong> Visiting our website, reading content, or submitting an initial inquiry does not create an attorney-client relationship. Such a relationship is only formed when we explicitly agree to represent you through a formal engagement agreement.
                </p>
              </div>

              <div className={styles.section}>
                <h2>3. Legal Services</h2>
                <p>Our legal services include but are not limited to:</p>
                <ul>
                  <li>Legal consultation and advice</li>
                  <li>Court representation</li>
                  <li>Document preparation and review</li>
                  <li>Legal research and analysis</li>
                </ul>
                <p>
                  All services are provided by qualified advocates licensed to practice law in Pakistan and registered with the Pakistan Bar Council.
                </p>
              </div>

              <div className={styles.section}>
                <h2>4. Fees and Payment</h2>
                <ul>
                  <li>Legal fees will be discussed and agreed upon before services commence</li>
                  <li>We offer transparent fee structures with no hidden costs</li>
                  <li>Payment terms will be specified in the engagement agreement</li>
                  <li>Late payments may incur additional charges</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>5. Client Responsibilities</h2>
                <p>As our client, you agree to:</p>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Respond promptly to our requests for information</li>
                  <li>Pay agreed fees on time</li>
                  <li>Inform us of any changes relevant to your case</li>
                  <li>Follow legal advice and recommendations</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>6. Confidentiality</h2>
                <p>
                  We maintain strict confidentiality of all client information in accordance with attorney-client privilege and professional ethics rules. Please review our Privacy Policy for more details.
                </p>
              </div>

              <div className={styles.section}>
                <h2>7. Limitation of Liability</h2>
                <p>
                  While we strive for the best possible outcomes, legal results cannot be guaranteed. Our liability is limited to the fees paid for services rendered. We are not liable for indirect, consequential, or punitive damages.
                </p>
              </div>

              <div className={styles.section}>
                <h2>8. Website Use</h2>
                <p>You agree not to:</p>
                <ul>
                  <li>Use our website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Transmit harmful code or malware</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Harass or abuse our staff or other users</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>9. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and software, is the property of Karachi Legal House and protected by Pakistani and international copyright laws.
                </p>
              </div>

              <div className={styles.section}>
                <h2>10. Termination</h2>
                <p>
                  Either party may terminate the attorney-client relationship with written notice. Upon termination, you remain responsible for fees incurred up to that point.
                </p>
              </div>

              <div className={styles.section}>
                <h2>11. Governing Law</h2>
                <p>
                  These Terms and Conditions are governed by the laws of Pakistan. Any disputes shall be resolved in the courts of Karachi, Pakistan.
                </p>
              </div>

              <div className={styles.section}>
                <h2>12. Contact Information</h2>
                <div className={styles.contactInfo}>
                  <p><strong>Karachi Legal House</strong></p>
                  <p>Office # 405, 4th Floor, Bahria Complex IV</p>
                  <p>MT Khan Road, DHA Phase 5, Karachi, Pakistan</p>
                  <p>Phone: +92 300 1234567</p>
                  <p>Email: info@karachilegalhouse.com</p>
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
