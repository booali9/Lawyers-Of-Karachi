'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const practiceAreas = [
    { name: 'Criminal Law', href: '/services/criminal-law' },
    { name: 'Family Law', href: '/services/family-law' },
    { name: 'Corporate Law', href: '/services/corporate-law' },
    { name: 'Property Law', href: '/services/property-law' },
    { name: 'Civil Litigation', href: '/services/civil-litigation' },
    { name: 'Cyber Crime', href: '/services/cyber-law' }
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navbar}`}>

        {/* Logo — text-based for maximum professionalism */}
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoIcon}>⚖</span>
            <div className={styles.logoText}>
              <span className={styles.logoPrimary}>Karachi Legal House</span>
              <span className={styles.logoTagline}>Advocates & Legal Consultants</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setPracticeAreasOpen(true)}
            onMouseLeave={() => setPracticeAreasOpen(false)}
          >
            <Link href="/practice-areas" className={styles.navLink}>
              Services <ChevronDown size={14} className={styles.dropdownArrow} />
            </Link>
            {practiceAreasOpen && (
              <div className={styles.dropdownMenu}>
                {practiceAreas.map((area, index) => (
                  <Link key={index} href={area.href} className={styles.dropdownItem}>
                    {area.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/lawyers" className={styles.navLink}>Our Team</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <a href="tel:+923001234567" className={styles.phoneLink}>
            <Phone size={16} />
            +92 300 123 4567
          </a>
          <Link href="/book-consultation" className={styles.ctaBtn}>
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/practice-areas" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/lawyers" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
          <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <div className={styles.mobileCTA}>
            <a href="tel:+923001234567" className={styles.mobilePhoneLink}>
              <Phone size={16} /> +92 300 123 4567
            </a>
            <Link href="/book-consultation" className={styles.ctaBtn} onClick={() => setMobileMenuOpen(false)}>
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
