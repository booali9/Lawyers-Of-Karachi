'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const areas = [
    { name: 'Criminal Law', href: '/services/criminal-law' },
    { name: 'Family Law', href: '/services/family-law' },
    { name: 'Corporate Law', href: '/services/corporate-law' },
    { name: 'Property Law', href: '/services/property-law' },
    { name: 'Civil Law', href: '/services/civil-law' },
    { name: 'Constitutional Law', href: '/services/constitutional-law' },
    { name: 'Cyber Crime', href: '/services/cyber-crime' },
    { name: 'Banking & Finance', href: '/services/banking-finance' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Karachi Legal House" width={170} height={55} className={styles.logoImg} priority />
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <div className={styles.dropdown} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className={styles.link} onClick={() => setDropdownOpen(!dropdownOpen)}>
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`${styles.arrow} ${dropdownOpen ? styles.arrowUp : ''}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                {areas.map((a, i) => (
                  <Link key={i} href={a.href} className={styles.dropdownItem}>{a.name}</Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/lawyers" className={styles.link}>Team</Link>
          <Link href="/success-stories" className={styles.link}>Results</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <a href="tel:+923001234567" className={styles.phone}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +92 300 1234567
          </a>
          <Link href="/book-consultation" className="btn btn-primary btn-sm">
            Free Consultation
          </Link>
        </div>

        <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close' : 'Menu'}>
          <span className={`${styles.hamLine} ${mobileOpen ? styles.hamOpen : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.overlay} onClick={() => setMobileOpen(false)}>
          <div className={styles.mobile} onClick={e => e.stopPropagation()}>
            <div className={styles.mobileHead}>
              <Image src="/logo.png" alt="Karachi Legal House" width={150} height={48} />
              <button className={styles.mobileClose} onClick={() => setMobileOpen(false)}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <nav className={styles.mobileNav}>
              <Link href="/" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/about" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>About Us</Link>
              <div className={styles.mobileGroup}>
                <button className={styles.mobileLink} onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Services
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`${styles.arrow} ${dropdownOpen ? styles.arrowUp : ''}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className={styles.mobileSub}>
                    {areas.map((a, i) => (
                      <Link key={i} href={a.href} className={styles.mobileSubLink} onClick={() => setMobileOpen(false)}>{a.name}</Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/lawyers" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Our Team</Link>
              <Link href="/success-stories" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Success Stories</Link>
              <Link href="/blog" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/faq" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>FAQ</Link>
              <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Contact Us</Link>
            </nav>
            <div className={styles.mobileActions}>
              <a href="tel:+923001234567" className={styles.mobilePhone}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +92 300 1234567
              </a>
              <Link href="/book-consultation" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
