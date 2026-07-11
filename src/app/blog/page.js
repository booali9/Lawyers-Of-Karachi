import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
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
      author: "Advocate Shehroze Ahmed",
      readTime: "8 min read",
      image: "/images/criminal_law.png"
    },
    {
      category: "Family Law",
      title: "Khula Process in Pakistan: Step-by-Step Guide for 2026",
      excerpt: "Complete guide to filing for khula in Pakistan, required documents, court procedures, and timeline. Everything you need to know about dissolution of marriage.",
      date: "June 10, 2026",
      author: "Advocate Shehroze Ahmed",
      readTime: "10 min read",
      image: "/images/family_law.png"
    },
    {
      category: "Corporate Law",
      title: "How to Register a Company in Pakistan: SECP Process",
      excerpt: "Step-by-step guide to company registration with SECP, required documents, fees, and timeline. Start your business legally in Pakistan.",
      date: "June 5, 2026",
      author: "Advocate Shehroze Ahmed",
      readTime: "12 min read",
      image: "/images/corporate_law.png"
    },
    {
      category: "Property Law",
      title: "Property Transfer Process in Pakistan: Complete Documentation Guide",
      excerpt: "Learn about property transfer procedures, documentation requirements, and legal precautions to avoid fraud in real estate transactions.",
      date: "May 28, 2026",
      author: "Advocate Shehroze Ahmed",
      readTime: "9 min read",
      image: "/images/property_law.png"
    },
    {
      category: "Civil Law",
      title: "Filing a Civil Suit in Pakistan: What You Need to Know",
      excerpt: "Understanding the civil litigation process, from filing the initial plaint to the final judgment and decree. A practical guide for litigants.",
      date: "May 20, 2026",
      author: "Advocate Shehroze Ahmed",
      readTime: "11 min read",
      image: "/images/civil_law.png"
    },
    {
      category: "Cyber Crime",
      title: "PECA 2016: Your Rights and Cyber Defamation in Pakistan",
      excerpt: "How to report cyber harassment, digital fraud, and online defamation to the FIA under the Prevention of Electronic Crimes Act.",
      date: "May 15, 2026",
      author: "Advocate Shehroze Ahmed",
      readTime: "7 min read",
      image: "/images/cyber_law.png"
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.blogMain}>
        
        {/* Hero Section */}
        <section className={styles.blogHero}>
          <Image src="/images/hero_banner.png" alt="Legal Blog" fill priority className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={`container ${styles.heroInner}`}>
            <span className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine}></span>
              Knowledge Hub
            </span>
            <h1>Legal Blog &amp; Insights</h1>
            <p className={styles.heroDesc}>
              Expert analysis, legal guides, and updates on Pakistani law by Advocate Shehroze Ahmed and the team at Karachi Legal House.
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className={styles.categoriesSection}>
          <div className="container">
            <div className={styles.categories}>
              <button className={`${styles.categoryBtn} ${styles.active}`}>All Posts</button>
              <button className={styles.categoryBtn}>Criminal Law</button>
              <button className={styles.categoryBtn}>Family Law</button>
              <button className={styles.categoryBtn}>Corporate Law</button>
              <button className={styles.categoryBtn}>Property Law</button>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section">
          <div className="container">
            <div className={styles.blogGrid}>
              {blogPosts.map((post, index) => (
                <article key={index} className={styles.blogCard}>
                  <div className={styles.blogImageWrapper}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className={styles.blogImg}
                    />
                    <div className={styles.categoryTag}>{post.category}</div>
                  </div>
                  <div className={styles.blogContent}>
                    <div className={styles.blogMeta}>
                      <span className={styles.metaItem}>
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span className={styles.metaItem}>
                        <User size={14} /> {post.author}
                      </span>
                    </div>
                    <h2 className={styles.blogTitle}>
                      <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className={styles.readMoreBtn}>
                      Read Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
