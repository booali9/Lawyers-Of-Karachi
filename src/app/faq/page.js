import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./faq.module.css";

export const metadata = {
  title: "Frequently Asked Questions | Karachi Legal House",
  description: "Find answers to common legal questions about criminal law, family law, corporate law, property disputes, and legal services in Pakistan.",
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: "General Questions",
      faqs: [
        {
          q: "How much do your legal services cost?",
          a: "Our fees vary depending on the complexity and type of case. We offer free initial consultations where we assess your case and provide transparent fee estimates. We also offer flexible payment plans for clients who need them."
        },
        {
          q: "Do you offer free consultations?",
          a: "Yes, we provide free initial consultations (15-30 minutes) to understand your case and provide preliminary legal advice. This helps you make an informed decision about proceeding with legal representation."
        },
        {
          q: "How long does a typical case take?",
          a: "Case duration varies significantly based on the type of legal matter. Criminal bail applications may take 2-4 weeks, family law cases 3-8 months, property disputes 1-3 years, and corporate matters can be completed in weeks. We provide realistic timelines during consultation."
        },
        {
          q: "Can I get legal help if I'm outside Karachi?",
          a: "Yes! We represent clients throughout Pakistan. We handle cases in courts across the country and offer online consultations via video call. Our team travels to different cities for important court appearances."
        }
      ]
    },
    {
      category: "Criminal Law",
      faqs: [
        {
          q: "What should I do if I'm arrested?",
          a: "Remain calm and exercise your right to remain silent. Do not make any statements without a lawyer present. Contact our emergency legal hotline (+92 300 1234567) immediately. We provide 24/7 emergency legal assistance and can arrange bail representation within hours."
        },
        {
          q: "Can an FIR be cancelled or quashed?",
          a: "Yes, a false or malicious FIR can be quashed through Section 498 petition in the High Court. If the FIR lacks legal merit, contains false allegations, or is filed for harassment, we can file a petition to have it quashed before trial proceedings begin."
        },
        {
          q: "What are my chances of getting bail?",
          a: "Bail prospects depend on several factors: nature of offense (bailable vs non-bailable), strength of evidence, your background, and flight risk. Our criminal lawyers have a 95% success rate in bail applications, even in serious cases."
        }
      ]
    },
    {
      category: "Family Law",
      faqs: [
        {
          q: "How long does khula take in Pakistan?",
          a: "Khula proceedings typically take 3-6 months in Family Courts. If the husband consents, it can be completed faster. If contested, it may take longer. We expedite the process through efficient legal procedures and proper documentation."
        },
        {
          q: "Who gets child custody in Pakistan?",
          a: "Generally, mothers get custody of young children (sons until age 7, daughters until puberty). However, courts always decide based on the child's best interest considering various factors like parental capability, child's wishes (if old enough), and living conditions."
        },
        {
          q: "How is maintenance amount determined?",
          a: "Maintenance is determined based on the husband's income, standard of living, children's needs, and wife's financial situation. Courts consider evidence of income, assets, and lifestyle to determine a fair monthly maintenance amount."
        }
      ]
    },
    {
      category: "Property Law",
      faqs: [
        {
          q: "How can I verify property ownership?",
          a: "We conduct comprehensive title verification including: land records search, mutation verification, checking for encumbrances, litigation history search, and physical inspection. This ensures you purchase property with clear and marketable title."
        },
        {
          q: "What is a succession certificate?",
          a: "A succession certificate is a legal document issued by civil courts certifying the legal heirs of a deceased person. It's required to inherit property, claim bank accounts, and transfer assets. The process typically takes 6-12 months."
        },
        {
          q: "How long do property dispute cases take?",
          a: "Property litigation can take 2-5 years depending on case complexity, evidence strength, and court schedules. However, we pursue all legal avenues including mediation and settlement to expedite resolution whenever possible."
        }
      ]
    },
    {
      category: "Corporate & Business",
      faqs: [
        {
          q: "How long does company registration take?",
          a: "SECP company registration typically takes 7-15 working days if all documents are in order. We handle the entire process including name reservation, documentation preparation, SECP filing, and certificate issuance."
        },
        {
          q: "What type of company should I register?",
          a: "The choice depends on your business model, liability concerns, and tax implications. Common options include Private Limited Company, Single Member Company, and Partnership. We provide consultation to help you choose the right structure."
        },
        {
          q: "Do I need a lawyer for contracts?",
          a: "Yes, professionally drafted contracts protect your business interests. DIY or template contracts often have gaps and ambiguities that can lead to expensive disputes. Our lawyers draft contracts tailored to your specific needs and Pakistani law."
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.faqMain}>
        {/* Hero Section */}
        <section className={styles.faqHero}>
          <div className="container text-center">
            <span className={styles.heroLabel}>Get Answers</span>
            <h1>Frequently Asked Questions</h1>
            <p className={styles.heroDesc}>
              Find answers to common legal questions about our services, processes, and Pakistani law
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className={`section ${styles.quickLinksSection}`}>
          <div className="container">
            <div className={styles.quickLinks}>
              <a href="#general" className={styles.quickLink}>General</a>
              <a href="#criminal" className={styles.quickLink}>Criminal Law</a>
              <a href="#family" className={styles.quickLink}>Family Law</a>
              <a href="#property" className={styles.quickLink}>Property Law</a>
              <a href="#corporate" className={styles.quickLink}>Corporate</a>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="section">
          <div className="container">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} id={category.category.toLowerCase().replace(/\s/g, '-')} className={styles.faqCategory}>
                <h2 className={styles.categoryTitle}>{category.category}</h2>
                <div className={styles.faqList}>
                  {category.faqs.map((faq, faqIndex) => (
                    <details key={faqIndex} className={styles.faqItem}>
                      <summary className={styles.faqQuestion}>
                        {faq.q}
                      </summary>
                      <div className={styles.faqAnswer}>
                        <p>{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className={`section ${styles.contactSection}`}>
          <div className="container">
            <div className={styles.contactBox}>
              <div className={styles.contactContent}>
                <h2>Still Have Questions?</h2>
                <p>
                  Can't find the answer you're looking for? Our legal team is here to help you with personalized guidance.
                </p>
              </div>
              <div className={styles.contactActions}>
                <Link href="/book-consultation" className="btn btn-primary">
                  Schedule Consultation
                </Link>
                <a href="tel:+923001234567" className="btn btn-secondary">
                  Call: +92 300 1234567
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
