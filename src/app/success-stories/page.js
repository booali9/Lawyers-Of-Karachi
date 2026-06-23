import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./success.module.css";

export const metadata = {
  title: "Success Stories | Karachi Legal House - Case Results & Client Testimonials",
  description: "Read about our successful cases and satisfied clients. Karachi Legal House has achieved favorable outcomes in thousands of cases across Criminal, Family, Corporate, and Property Law.",
};

export default function SuccessStoriesPage() {
  const caseStudies = [
    {
      category: "Criminal Law",
      title: "Successful Bail in High-Profile Murder Case",
      challenge: "Client was falsely accused in a high-profile murder case with significant media attention. Multiple bail applications were rejected by lower courts.",
      solution: "Our team filed a comprehensive bail application in the High Court with strong legal arguments and credible evidence proving client's innocence. We successfully demonstrated lack of evidence and malicious prosecution.",
      result: "Bail granted by High Court within 3 weeks. Client was eventually acquitted after 8 months when prosecution failed to prove charges.",
      impact: "Client reunited with family and business. Case highlighted importance of strong legal defense in false accusations.",
      year: "2023"
    },
    {
      category: "Family Law",
      title: "Child Custody Won for Mother",
      challenge: "Mother seeking custody of two minor children (ages 4 and 6) against father who had better financial resources. Father contested custody claiming mother was unfit.",
      solution: "We presented comprehensive evidence of mother's care, children's emotional bond with mother, and father's limited involvement in children's upbringing. Expert testimony supported our case.",
      result: "Family Court awarded full custody to mother with reasonable visitation rights for father. Maintenance awarded as per children's needs.",
      impact: "Children remained in safe, loving environment with mother. Father now maintains healthy relationship through scheduled visits.",
      year: "2024"
    },
    {
      category: "Property Law",
      title: "₨50 Million Property Dispute Resolved",
      challenge: "Client's inherited property (worth ₨50 million) was illegally occupied by distant relatives who forged documents claiming ownership. Matter was pending for 5 years.",
      solution: "We conducted thorough title verification, exposed forged documents through forensic analysis, and filed comprehensive suit with strong evidence of client's rightful ownership.",
      result: "Civil Court ruled in client's favor. Property possession restored within 6 months. Occupants ordered to pay damages of ₨2 million.",
      impact: "Client regained valuable ancestral property. Swift resolution after years of litigation under previous counsel.",
      year: "2023"
    },
    {
      category: "Corporate Law",
      title: "Successful Merger of Two Manufacturing Companies",
      challenge: "Complex merger of two manufacturing companies worth ₨500 million with multiple stakeholders, regulatory compliance issues, and conflicting interests.",
      solution: "Our corporate team handled complete due diligence, drafted merger agreements, obtained SECP approvals, and resolved shareholder disputes through negotiation.",
      result: "Merger completed successfully within 4 months. New entity became market leader with combined assets of ₨500 million.",
      impact: "Shareholders increased their value by 35%. 500+ jobs secured. Company now operates efficiently under unified management.",
      year: "2024"
    },
    {
      category: "Constitutional Law",
      title: "Writ Petition Restores Government Employee's Rights",
      challenge: "Government employee wrongfully terminated without due process after 20 years of service. Termination order was illegal and violated fundamental rights.",
      solution: "We filed constitutional writ petition in High Court challenging illegal termination and seeking reinstatement with full back benefits.",
      result: "High Court accepted our petition, declared termination illegal, and ordered immediate reinstatement with full back pay and benefits.",
      impact: "Client reinstated with dignity. Received ₨4 million in back pay. Precedent set for protecting employees' rights.",
      year: "2023"
    },
    {
      category: "Cyber Crime",
      title: "FIA Cyber Crime Case - Client Acquitted",
      challenge: "Client falsely accused under PECA for online defamation and harassment. FIA investigation was biased and evidence was insufficient.",
      solution: "We provided strong technical and legal defense, challenged digital evidence authenticity, and proved client's social media account was hacked.",
      result: "After 6 months of proceedings, court acquitted client due to lack of credible evidence. FIA investigation report was dismissed.",
      impact: "Client's reputation restored. Case highlighted importance of proper digital forensics in cyber crime cases.",
      year: "2024"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Hussain",
      case: "Criminal Defense - Bail Application",
      rating: 5,
      text: "I was devastated when falsely accused in a criminal case. Karachi Legal House not only secured my bail quickly but also fought tirelessly until I was acquitted. Their expertise in criminal law and dedication to my case was exceptional. I'm forever grateful to Advocate Muhammad Taqi and his team.",
      year: "2024"
    },
    {
      name: "Ayesha Khan",
      case: "Family Law - Child Custody",
      rating: 5,
      text: "Going through divorce and custody battle was the hardest time of my life. Advocate Fatima Qureshi handled my case with such compassion and professionalism. She fought for my children's rights and won custody for me. Her support went beyond legal advice - she truly cared about our wellbeing.",
      year: "2023"
    },
    {
      name: "Rashid Malik",
      case: "Property Dispute Resolution",
      rating: 5,
      text: "My family property dispute was stuck in courts for 5 years with no progress. Karachi Legal House took over the case and resolved it in just 8 months. Their strategic approach and thorough preparation won us the case. I highly recommend their property law services.",
      year: "2023"
    },
    {
      name: "Sarah Ahmed",
      case: "Corporate Law - Company Registration",
      rating: 5,
      text: "Starting my business, I needed reliable legal support for company registration and contracts. Advocate Ahmed Hassan made the entire process smooth and hassle-free. His knowledge of corporate law and SECP procedures is outstanding. Got my company registered in just 10 days!",
      year: "2024"
    },
    {
      name: "Bilal Siddiqui",
      case: "Banking Dispute - Loan Recovery Defense",
      rating: 5,
      text: "I was facing aggressive loan recovery action from a bank. Karachi Legal House negotiated a fair settlement and saved me from legal complications. Advocate Kashif Raza's understanding of banking law helped resolve the matter amicably. Professional and result-oriented service.",
      year: "2024"
    },
    {
      name: "Farhan Iqbal",
      case: "Constitutional Petition - Service Matter",
      rating: 5,
      text: "After wrongful termination from government job, I had lost all hope. Advocate Ayesha Siddiqui filed a writ petition that not only got me reinstated but also secured my back pay. Her constitutional law expertise and commitment to justice is remarkable. Highly recommend!",
      year: "2023"
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.successMain}>
        {/* Hero Section */}
        <section className={styles.successHero}>
          <div className="container text-center">
            <span className={styles.heroLabel}>Our Track Record</span>
            <h1>Success Stories & Client Testimonials</h1>
            <p className={styles.heroDesc}>
              Real cases, real results. Discover how we've helped clients achieve justice and favorable outcomes across Pakistan.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`section ${styles.statsSection}`}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>3000+</div>
                <div className={styles.statLabel}>Cases Successfully Resolved</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Client Satisfaction Rate</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>₨2B+</div>
                <div className={styles.statLabel}>Value Protected for Clients</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{marginBottom: '4rem'}}>
              <h2>Notable Case Studies</h2>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>
                Landmark cases that showcase our expertise and commitment to client success
              </p>
            </div>
            <div className={styles.casesGrid}>
              {caseStudies.map((study, index) => (
                <div key={index} className={styles.caseCard}>
                  <div className={styles.caseHeader}>
                    <span className={styles.caseCategory}>{study.category}</span>
                    <span className={styles.caseYear}>{study.year}</span>
                  </div>
                  <h3>{study.title}</h3>
                  
                  <div className={styles.caseSection}>
                    <h4>Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>
                  
                  <div className={styles.caseSection}>
                    <h4>Our Solution</h4>
                    <p>{study.solution}</p>
                  </div>
                  
                  <div className={styles.caseSection}>
                    <h4>Result</h4>
                    <p className={styles.resultText}>{study.result}</p>
                  </div>
                  
                  <div className={styles.caseImpact}>
                    <strong>Impact:</strong> {study.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className={`section ${styles.testimonialsSection}`}>
          <div className="container">
            <div className="text-center" style={{marginBottom: '4rem'}}>
              <h2>What Our Clients Say</h2>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>
                Real feedback from satisfied clients across Pakistan
              </p>
            </div>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.clientAvatar}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={styles.clientInfo}>
                      <strong>{testimonial.name}</strong>
                      <p>{testimonial.case}</p>
                    </div>
                  </div>
                  <div className={styles.rating}>
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                  <div className={styles.testimonialFooter}>
                    <span>Case resolved in {testimonial.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section ${styles.ctaSection}`}>
          <div className="container text-center">
            <h2>Let Us Help You Achieve Success</h2>
            <p className={styles.ctaDesc}>
              Join thousands of satisfied clients who have achieved favorable outcomes with our expert legal representation.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/book-consultation" className="btn btn-primary">
                Schedule Free Consultation
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us Today
              </Link>
            </div>
            <p className={styles.ctaNote}>
              * Past results do not guarantee future outcomes. Each case is unique and evaluated on its own merits.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
