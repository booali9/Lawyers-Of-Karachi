'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.col}>
          <Image src="/logo.png" alt="Karachi Legal House" width={180} height={60} className={styles.logo} />
          <p className={styles.desc}>
            A premier law firm in Pakistan, delivering expert legal services across Criminal, Family, Corporate, Property, and Civil Law. Your trusted partner in justice since 2010.
          </p>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>Practice Areas</h4>
          <ul className={styles.links}>
            <li><Link href="/services/criminal-law">Criminal Law</Link></li>
            <li><Link href="/services/family-law">Family Law</Link></li>
            <li><Link href="/services/corporate-law">Corporate Law</Link></li>
            <li><Link href="/services/property-law">Property Law</Link></li>
            <li><Link href="/services/civil-law">Civil Litigation</Link></li>
            <li><Link href="/services/constitutional-law">Constitutional Law</Link></li>
            <li><Link href="/services/cyber-crime">Cyber Crime</Link></li>
            <li><Link href="/services/banking-finance">Banking &amp; Finance</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>Quick Links</h4>
          <ul className={styles.links}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/practice-areas">Services</Link></li>
            <li><Link href="/lawyers">Our Team</Link></li>
            <li><Link href="/success-stories">Success Stories</Link></li>
            <li><Link href="/blog">Legal Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/book-consultation">Book Consultation</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>Contact Us</h4>
          <address className={styles.address}>
            <div className={styles.item}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <p>Office # 405, 4th Floor<br/>Bahria Complex IV, MT Khan Road<br/>DHA Phase 5, Karachi</p>
            </div>
            <div className={styles.item}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <p><a href="tel:+923001234567">+92 300 1234567</a><br/><a href="tel:+923219876543">+92 321 9876543</a></p>
            </div>
            <div className={styles.item}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <p><a href="mailto:info@karachilegalhouse.com">info@karachilegalhouse.com</a></p>
            </div>
            <div className={styles.item}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
              <p>Mon–Fri: 9AM – 6PM<br/>Sat: 10AM – 2PM</p>
            </div>
          </address>
        </div>
      </div>

      <div className={styles.newsletter}>
        <div className={`container ${styles.newsInner}`}>
          <div className={styles.newsText}>
            <strong>Stay Informed</strong>
            <p>Subscribe for legal insights and firm updates.</p>
          </div>
          <form className={styles.newsForm} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address" className={styles.newsInput} required />
            <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>&copy; {year} Karachi Legal House. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-conditions">Terms</Link>
            <span>|</span>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
