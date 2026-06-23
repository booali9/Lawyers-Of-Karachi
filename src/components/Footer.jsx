import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Company Info */}
        <div className={styles.footerCol}>
          <div className={styles.footerLogoWrapper}>
            <Image 
              src="/logo.png" 
              alt="Karachi Legal House Logo" 
              width={200} 
              height={65} 
              style={{ objectFit: 'contain' }} 
              className={styles.footerLogoImage} 
            />
          </div>
          <p className={styles.footerDesc}>
            Leading law firm in Pakistan providing expert legal services across Criminal, Family, Corporate, Property, and Civil Law. Your trusted partner in justice.
          </p>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Facebook">
              <span>f</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Twitter">
              <span>𝕏</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <span>in</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Instagram">
              <span>📷</span>
            </a>
          </div>
        </div>

        {/* Practice Areas */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Practice Areas</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/services/criminal-law">Criminal Law</Link></li>
            <li><Link href="/services/family-law">Family Law</Link></li>
            <li><Link href="/services/corporate-law">Corporate Law</Link></li>
            <li><Link href="/services/property-law">Property Law</Link></li>
            <li><Link href="/services/civil-law">Civil Litigation</Link></li>
            <li><Link href="/services/constitutional-law">Constitutional Law</Link></li>
            <li><Link href="/services/cyber-crime">Cyber Crime</Link></li>
            <li><Link href="/services/banking-finance">Banking & Finance</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/practice-areas">Services</Link></li>
            <li><Link href="/lawyers">Our Team</Link></li>
            <li><Link href="/success-stories">Success Stories</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <address className={styles.address}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <p>Office # 405, 4th Floor<br/>Bahria Complex IV, MT Khan Road<br/>DHA Phase 5, Karachi</p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <p>
                <a href="tel:+923001234567">+92 300 1234567</a><br/>
                <a href="tel:+923219876543">+92 321 9876543</a>
              </p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <p><a href="mailto:info@karachilegalhouse.com">info@karachilegalhouse.com</a></p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🕒</span>
              <p>Mon-Fri: 9AM-6PM<br/>Sat: 10AM-2PM</p>
            </div>
          </address>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h3>Stay Updated with Legal Insights</h3>
              <p>Subscribe to our newsletter for latest legal updates and news</p>
            </div>
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
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p>&copy; {currentYear} Karachi Legal House. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span className={styles.separator}>•</span>
              <Link href="/terms-conditions">Terms & Conditions</Link>
              <span className={styles.separator}>•</span>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
