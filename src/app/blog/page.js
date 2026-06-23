import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";

export const metadata = {
  title: "Legal Blog | Karachi Legal House - Legal News & Insights",
  description: "Read latest legal news, Supreme Court judgments, legal guides, and expert insights on Pakistani law. Stay informed with Karachi Legal House blog.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      category: "Criminal Law",
      title: "Understanding Bail Laws in Pakistan: Your Complete Guide",
      excerpt: "Learn about bail procedures, types of bail, and your rights under Pakistani criminal law. Essential information for anyone facing criminal charges.",
      date: "June 15, 2026",
      author: "Advocate Muhammad Taqi",
      readTime: "8 min read",
      image: "/hero.png"
    },
    {
      category: "Family Law",
      title: "Khula Process in Pakistan: Step-by-Step Guide for 2026",
      excerpt: "Complete guide to filing for khula in Pakistan, required documents, court procedures, and timeline. Everything you need to know about dissolution of marriage.",
      date: "June 10, 2026",
      author: "Advocate Fatima Qureshi",
      readTime: "10 min read",
      image: "/hero.png"
    },
    {
      category: "Corporate Law",
      title: "How to Register a Company in Pakistan: SECP Process",
      excerpt: "Step-by-step guide to company registration with SECP, required documents, fees, and timeline. Start your business legally in Pakistan.",
      date: "June 5, 2026",
      author: "Advocate Ahmed Hassan",
      readTime: "12 min read",
      image: "/hero.png"
    },
    {
      category: "Property Law",
      title: "Property Transfer Process in Pakistan: Complete Documentation Guide",
      excerpt: "Learn about property transfer procedures, documentation requirements, and legal precautions to avoid fraud in real estate transactions.",
      date: "May 28, 2026",
      author: "Advocate Saima Malik",
      readTime: "9 min read",
      image: "/hero.png"
    },
    {
      category: "Cyber Law",
      title: "PECA Law Explained: What You Need to Know About Cyber Crimes",
      excerpt: "Understanding the Prevention of Electronic Crimes Act (PECA) 2016, cyber crime penalties, and how to protect yourself online in Pakistan.",
      date: "May 20, 2026",
      author: "Advocate Kashif Raza",
      readTime: "7 min read",
      image: "/hero.png"
    },
    {
      category: "Supreme Court",
      title: "Recent Supreme Court Judgments: Impact on Pakistani Law",
      excerpt: "Analysis of important Supreme Court decisions from 2026 and their implications for civil rights, criminal law, and constitutional matters.",
      date: "May 15, 2026",
      author: "Advocate Ayesha Siddiqui",
      readTime: "15 min read",
      image: "/hero.png"
    }
  ];

  const categories = [
    "All", "Criminal Law", "Family Law", "Corporate Law", 
    "Property Law", "Cyber Law", "Supreme Court", "Legal Guides"
  ];

  return (
    <>
      <Navbar />
      <main className={styles.blogMain}>
        {/* Hero Section */}
        <section className={styles.blogHero}>
          <div className="container text-center">
            <span className={styles.heroLabel}>Legal Knowledge Base</span>
            <h1>Legal Blog & Insights</h1>
            <p className={styles.heroDesc}>
              Stay informed with latest legal news, Supreme Court judgments, expert analysis, and practical legal guides for Pakistan
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className={`section ${styles.categoriesSection}`}>
          <div className="container">
            <div className={styles.categories}>
              {categories.map((category, index) => (
                <button key={index} className={styles.categoryBtn}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section">
          <div className="container">
            <div className={styles.blogGrid}>
              {blogPosts.map((post, index) => (
                <article key={index} className={styles.blogCard}>
                  <div className={styles.blogImageWrapper}>
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      width={400}
                      height={250}
                      className={styles.blogImage}
                    />
                    <span className={styles.blogCategory}>{post.category}</span>
                  </div>
                  <div className={styles.blogContent}>
                    <div className={styles.blogMeta}>
                      <span className={styles.blogDate}>{post.date}</span>
                      <span className={styles.separator}>•</span>
                      <span className={styles.blogReadTime}>{post.readTime}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <div className={styles.blogFooter}>
                      <span className={styles.blogAuthor}>By {post.author}</span>
                      <Link href="#" className={styles.readMore}>
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscribe */}
        <section className={`section ${styles.newsletterSection}`}>
          <div className="container text-center">
            <h2>Subscribe to Legal Updates</h2>
            <p className={styles.newsletterDesc}>
              Get the latest legal insights, case updates, and news delivered to your inbox
            </p>
            <div className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className={styles.newsletterInput}
              />
              <button type="button" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section ${styles.ctaSection}`}>
          <div className="container text-center">
            <h2>Need Legal Advice?</h2>
            <p className={styles.ctaDesc}>
              Have questions about any legal matter? Our expert attorneys are here to help you.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/book-consultation" className="btn btn-primary">
                Schedule Consultation
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
