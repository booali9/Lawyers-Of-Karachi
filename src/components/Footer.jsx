import Link from 'next/link';
import Image from 'next/image';
import { firm, contact, offices } from '@/data/firm';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>

        {/* Brand */}
        <div className={styles.footerCol}>
          <Image
            src="/logo-slc-light.png"
            alt={firm.name}
            width={1717}
            height={253}
            className={styles.footerLogo}
          />
          <p className={styles.footerDesc}>
            Established in {firm.founded}, {firm.name} is a full-service litigation and corporate
            advisory practice serving individuals, corporations, financial institutions and
            government bodies across Sindh.
          </p>
          <p className={styles.regBadge}>
            {firm.barCouncil} &nbsp;·&nbsp; Reg. No. {firm.barRegNo}
          </p>
          <div className={styles.socials}>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.87 9.87 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2zm5.8 14.05c-.24.68-1.42 1.32-1.95 1.36-.52.05-1 .24-3.38-.7-2.85-1.12-4.65-4.02-4.79-4.2-.14-.19-1.14-1.52-1.14-2.9 0-1.37.72-2.05.98-2.33.25-.28.55-.35.73-.35h.52c.17 0 .4-.06.62.48.24.57.8 1.97.87 2.11.07.14.12.31.02.5-.09.19-.14.3-.28.47l-.42.48c-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.25.09 1.62.77 1.9.91.28.14.46.21.53.33.07.11.07.66-.17 1.34z"/></svg>
            </a>
            <a href={contact.emailHref} className={styles.socialLink} aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        {/* Practice Areas */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Practice Areas</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/services/criminal-law">Criminal Law</Link></li>
            <li><Link href="/services/civil-litigation">Civil &amp; Commercial</Link></li>
            <li><Link href="/services/family-law">Family Law</Link></li>
            <li><Link href="/services/banking-finance">Banking &amp; Finance</Link></li>
            <li><Link href="/services/corporate-law">Corporate &amp; Securities</Link></li>
            <li><Link href="/services/property-law">Property &amp; Inheritance</Link></li>
            <li><Link href="/services/constitutional-law">Constitutional Law</Link></li>
            <li><Link href="/services/cyber-crime">Cyber Crime</Link></li>
            <li><Link href="/practice-areas">All 16 Areas</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>The Chamber</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/lawyers">Our Team</Link></li>
            <li><Link href="/success-stories">Notable Clients</Link></li>
            <li><Link href="/blog">Legal Insights</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/book-consultation">Book a Consultation</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Get in Touch</h4>
          <address className={styles.address}>
            <div className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a><br/>
                <a href={contact.altPhoneHref}>{contact.altPhone}</a>
              </p>
            </div>
            <div className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <p><a href={contact.emailHref}>{contact.email}</a></p>
            </div>
            <div className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
              <p>
                {contact.hours.map((h) => (
                  <span key={h.days}>{h.days}: {h.time}<br/></span>
                ))}
              </p>
            </div>
          </address>
        </div>
      </div>

      {/* Offices */}
      <div className={styles.officesSection}>
        <div className="container">
          <div className={styles.officesRow}>
            {offices.map((office) => (
              <div key={office.city} className={styles.officeCard}>
                <span className={styles.officeRole}>{office.role}</span>
                <h3 className={styles.officeCity}>{office.city}</h3>
                <p className={styles.officeAddr}>
                  {office.lines.map((line) => (
                    <span key={line}>{line}<br/></span>
                  ))}
                </p>
                <a href={office.phoneHref} className={styles.officePhone}>{office.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p>&copy; {currentYear} {firm.legalName}. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span className={styles.separator}>•</span>
              <Link href="/terms-conditions">Terms &amp; Conditions</Link>
              <span className={styles.separator}>•</span>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
