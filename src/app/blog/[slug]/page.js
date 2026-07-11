import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import styles from "./article.module.css";

export const metadata = {
  title: "Legal Article | Karachi Legal House",
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <>
      <Navbar />
      <main className={styles.articleMain}>
        
        {/* Article Hero */}
        <section className={styles.articleHero}>
          <Image src="/images/hero_banner.png" alt={title} fill priority className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={`container ${styles.heroInner}`}>
            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <h1>{title}</h1>
            <div className={styles.articleMeta}>
              <span className={styles.metaItem}>
                <Calendar size={16} /> June 2026
              </span>
              <span className={styles.metaItem}>
                <User size={16} /> Advocate Shehroze Ahmed
              </span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="section">
          <div className={`container ${styles.articleContainer}`}>
            <div className={styles.articleContent}>
              <p className={styles.leadPara}>
                This is a placeholder for the full article content. The detailed insights on "{title}" will be published here shortly.
              </p>
              <h2>Legal Framework</h2>
              <p>
                In Pakistan, the legal landscape surrounding this topic is governed by established statutes and recent Supreme Court precedents. It is crucial to understand the procedural requirements to ensure compliance.
              </p>
              <h2>Key Takeaways</h2>
              <ul>
                <li>Always consult with a qualified legal professional before taking action.</li>
                <li>Ensure all documentation is properly attested and filed within statutory deadlines.</li>
                <li>Stay updated on the latest amendments to the relevant Acts.</li>
              </ul>
              <p>
                For personalized legal advice regarding your specific situation, please contact our chambers to schedule a consultation.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
