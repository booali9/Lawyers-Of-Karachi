import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./service.module.css";
import { servicesData } from "./servicesData";

export function generateMetadata({ params }) {
  const service = servicesData[params.slug];
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | Karachi Legal House`,
    description: service.desc,
  };
}

export default function ServicePage({ params }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className={styles.serviceMain}>
        {/* Hero Section */}
        <section className={styles.serviceHero}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.heroIcon}>{service.icon}</span>
              <h1>{service.title}</h1>
              <p className={styles.heroDesc}>{service.desc}</p>
              <div className={styles.heroActions}>
                <Link href="/book-consultation" className="btn btn-primary">
                  Get Free Consultation
                </Link>
                <a href="tel:+923001234567" className="btn btn-secondary">
                  Call: +92 300 1234567
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section">
          <div className="container">
            <div className={styles.overviewSection}>
              <h2>Overview</h2>
              <p className={styles.overviewText}>{service.overview}</p>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className={`section ${styles.servicesOffered}`}>
          <div className="container">
            <h2 className="text-center">Our {service.shortTitle} Services</h2>
            <p className="text-center" style={{color: 'var(--text-muted)', marginBottom: '3rem'}}>
              Comprehensive legal solutions tailored to your needs
            </p>
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

        {/* Why Choose Us */}
        <section className="section">
          <div className="container">
            <h2 className="text-center">Why Choose Us for {service.shortTitle}</h2>
            <div className={styles.whyChooseGrid}>
              {service.whyChoose.map((reason, index) => (
                <div key={index} className={styles.whyChooseItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className={`section ${styles.processSection}`}>
          <div className="container">
            <h2 className="text-center">Our Process</h2>
            <p className="text-center" style={{color: 'var(--text-muted)', marginBottom: '3rem'}}>
              How we handle your {service.shortTitle.toLowerCase()} case
            </p>
            <div className={styles.processSteps}>
              {service.process.map((step, index) => (
                <div key={index} className={styles.processStep}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>
                    <h3>{step.step}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section">
          <div className="container">
            <h2 className="text-center">Frequently Asked Questions</h2>
            <div className={styles.faqsContainer}>
              {service.faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section ${styles.ctaSection}`}>
          <div className="container text-center">
            <h2>Ready to Get Started?</h2>
            <p className={styles.ctaDesc}>
              Don't face legal challenges alone. Our experienced {service.shortTitle.toLowerCase()} attorneys are ready to help you achieve the best possible outcome.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/book-consultation" className="btn btn-primary">
                Schedule Free Consultation
              </Link>
              <Link href="/practice-areas" className="btn btn-secondary">
                View All Services
              </Link>
            </div>
            <div className={styles.ctaContact}>
              <p>Available 24/7 for Urgent Matters</p>
              <div className={styles.contactOptions}>
                <a href="tel:+923001234567">📞 +92 300 1234567</a>
                <a href="mailto:info@karachilegalhouse.com">✉️ info@karachilegalhouse.com</a>
                <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
