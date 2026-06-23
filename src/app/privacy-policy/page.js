import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./legal.module.css";

export const metadata = {
  title: "Privacy Policy | Karachi Legal House - Data Protection & Privacy",
  description: "Learn how Karachi Legal House protects your personal information and maintains client confidentiality in accordance with Pakistani law and attorney-client privilege."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.legalMain}>
        <section className={styles.legalHero}>
          <div className="container">
            <h1>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: June 23, 2026</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.legalContent}>
              <div className={styles.section}>
                <h2>1. Introduction</h2>
                <p>
                  Karachi Legal House ("we," "our," or "us") is committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our legal services.
                </p>
                <p>
                  As a law firm, we are bound by professional ethics rules and attorney-client privilege, which provide additional protections beyond this Privacy Policy.
                </p>
              </div>

              <div className={styles.section}>
                <h2>2. Information We Collect</h2>
                <h3>2.1 Personal Information</h3>
                <p>We may collect the following types of personal information:</p>
                <ul>
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Details about your legal matter or case</li>
                  <li>Documents and information you provide related to your legal issue</li>
                  <li>Communication history with our firm</li>
                  <li>Payment and billing information</li>
                </ul>

                <h3>2.2 Automatically Collected Information</h3>
                <ul>
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>3. How We Use Your Information</h2>
                <p>We use the collected information for:</p>
                <ul>
                  <li>Providing legal services and representation</li>
                  <li>Responding to your inquiries and consultation requests</li>
                  <li>Managing client relationships and case files</li>
                  <li>Processing payments and maintaining financial records</li>
                  <li>Improving our website and services</li>
                  <li>Sending legal updates and newsletters (with your consent)</li>
                  <li>Complying with legal and regulatory requirements</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>4. Attorney-Client Privilege</h2>
                <p>
                  All communications between you and our attorneys are protected by attorney-client privilege once a formal attorney-client relationship is established. This means:
                </p>
                <ul>
                  <li>Your communications are confidential and cannot be disclosed without your consent</li>
                  <li>We will not share your case information with third parties except as required by law or with your permission</li>
                  <li>Information you share for the purpose of obtaining legal advice is privileged</li>
                </ul>
                <p className={styles.important}>
                  <strong>Important:</strong> Attorney-client privilege may not apply to initial inquiries before establishing a formal relationship. Please do not share highly sensitive information until after consulting with one of our attorneys.
                </p>
              </div>

              <div className={styles.section}>
                <h2>5. Information Sharing and Disclosure</h2>
                <p>We may share your information only in the following circumstances:</p>
                <ul>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations (e.g., payment processors, cloud storage)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                  <li><strong>Professional Consultants:</strong> With expert witnesses, investigators, or other professionals necessary for your case</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>6. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul>
                  <li>Encrypted data transmission (SSL/TLS)</li>
                  <li>Secure file storage systems</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security assessments</li>
                  <li>Employee confidentiality agreements</li>
                </ul>
                <p>
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              <div className={styles.section}>
                <h2>7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information we hold</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal retention requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing (where applicable)</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>8. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide legal services and comply with legal obligations. Client files are typically retained for a minimum of 7 years after case closure, as required by professional regulations.
                </p>
              </div>

              <div className={styles.section}>
                <h2>9. Cookies and Tracking Technologies</h2>
                <p>
                  Our website uses cookies to enhance user experience. You can control cookies through your browser settings. Disabling cookies may affect website functionality.
                </p>
              </div>

              <div className={styles.section}>
                <h2>10. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </div>

              <div className={styles.section}>
                <h2>11. Changes to Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website with an updated "Last Updated" date.
                </p>
              </div>

              <div className={styles.section}>
                <h2>12. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or how we handle your information, please contact us:
                </p>
                <div className={styles.contactInfo}>
                  <p><strong>Karachi Legal House</strong></p>
                  <p>Office # 405, 4th Floor, Bahria Complex IV</p>
                  <p>MT Khan Road, DHA Phase 5, Karachi, Pakistan</p>
                  <p>Phone: +92 300 1234567</p>
                  <p>Email: privacy@karachilegalhouse.com</p>
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
