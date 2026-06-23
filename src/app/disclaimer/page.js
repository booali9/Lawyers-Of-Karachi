import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../privacy-policy/legal.module.css";

export const metadata = {
  title: "Legal Disclaimer | Karachi Legal House",
  description: "Important legal disclaimers regarding Karachi Legal House website content and legal services."
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className={styles.legalMain}>
        <section className={styles.legalHero}>
          <div className="container">
            <h1>Legal Disclaimer</h1>
            <p className={styles.lastUpdated}>Last Updated: June 23, 2026</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.legalContent}>
              <div className={styles.section}>
                <h2>1. General Disclaimer</h2>
                <p>
                  The information provided on this website is for general informational purposes only. It does not constitute legal advice and should not be relied upon as such. Every legal matter is unique, and outcomes depend on specific facts and circumstances.
                </p>
              </div>

              <div className={styles.section}>
                <h2>2. No Attorney-Client Relationship</h2>
                <p className={styles.important}>
                  <strong>Important Notice:</strong> Reading content on this website, contacting us, or submitting an inquiry form does NOT create an attorney-client relationship. An attorney-client relationship is only established through a formal written engagement agreement signed by both parties.
                </p>
              </div>

              <div className={styles.section}>
                <h2>3. Not Legal Advice</h2>
                <p>
                  The content on this website, including blog posts, articles, FAQs, and general information about legal services, is NOT legal advice. It is general information about Pakistani law and legal procedures. Do not rely on this information as a substitute for professional legal counsel tailored to your specific situation.
                </p>
              </div>

              <div className={styles.section}>
                <h2>4. No Guarantee of Results</h2>
                <p>
                  Past results and case examples presented on this website do not guarantee or predict future outcomes. Every case is different, and results depend on unique facts, evidence, applicable law, and judicial decisions. We cannot guarantee specific results or outcomes in any legal matter.
                </p>
              </div>

              <div className={styles.section}>
                <h2>5. Accuracy of Information</h2>
                <p>
                  While we strive to provide accurate and up-to-date information, laws and regulations change frequently. We do not warrant that the information on this website is current, complete, or error-free. Always consult with a qualified attorney for advice on your specific legal matter.
                </p>
              </div>

              <div className={styles.section}>
                <h2>6. Third-Party Links</h2>
                <p>
                  This website may contain links to third-party websites. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party sites. Use of external links is at your own risk.
                </p>
              </div>

              <div className={styles.section}>
                <h2>7. Testimonials and Case Studies</h2>
                <p>
                  Client testimonials and case studies are based on real cases but may not reflect typical results. Individual results vary depending on case specifics. Testimonials do not guarantee similar outcomes in your case.
                </p>
              </div>

              <div className={styles.section}>
                <h2>8. Jurisdiction</h2>
                <p>
                  Karachi Legal House is licensed to practice law in Pakistan. The information on this website primarily pertains to Pakistani law. Laws vary by jurisdiction, and content may not apply to your location.
                </p>
              </div>

              <div className={styles.section}>
                <h2>9. Statute of Limitations</h2>
                <p className={styles.important}>
                  <strong>Time-Sensitive Notice:</strong> Legal matters often have strict deadlines (statute of limitations). Delays in seeking legal advice may result in loss of your rights. Contact an attorney immediately if you have a legal issue.
                </p>
              </div>

              <div className={styles.section}>
                <h2>10. Confidentiality Warning</h2>
                <p>
                  Do not send us confidential information through this website or email until an attorney-client relationship has been established. Initial communications may not be confidential or protected by attorney-client privilege.
                </p>
              </div>

              <div className={styles.section}>
                <h2>11. Professional Conduct</h2>
                <p>
                  All attorneys at Karachi Legal House are licensed by the Pakistan Bar Council and adhere to professional ethics rules. Any concerns about professional conduct should be addressed to the Pakistan Bar Council.
                </p>
              </div>

              <div className={styles.section}>
                <h2>12. Website Availability</h2>
                <p>
                  We do not guarantee that this website will be available at all times or that it will be free from errors, viruses, or other harmful components. Use of this website is at your own risk.
                </p>
              </div>

              <div className={styles.section}>
                <h2>13. Contact for Legal Advice</h2>
                <p>
                  If you need legal advice specific to your situation, please contact us to schedule a consultation:
                </p>
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
