'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { contact } from '@/data/firm';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const practiceAreas = [
    { name: 'Criminal Law', href: '/services/criminal-law' },
    { name: 'Family Law', href: '/services/family-law' },
    { name: 'Corporate Law', href: '/services/corporate-law' },
    { name: 'Property Law', href: '/services/property-law' },
    { name: 'Civil Litigation', href: '/services/civil-litigation' },
    { name: 'Constitutional Law', href: '/services/constitutional-law' },
    { name: 'Cyber Crime', href: '/services/cyber-crime' },
    { name: 'Banking & Finance', href: '/services/banking-finance' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navbar}`}>

        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink} aria-label="Shams Law Chamber — home">
            <Image
              src="/logo-slc.png"
              alt="Shams Law Chamber"
              width={1717}
              height={253}
              sizes="(max-width: 480px) 320px, (max-width: 992px) 390px, 470px"
              priority
              className={styles.logoMark}
            />
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
              Practice Areas <ChevronDown size={14} className={styles.dropdownArrow} />
            </Link>
            {practiceAreasOpen && (
              <div className={styles.dropdownMenu}>
                {practiceAreas.map((area, index) => (
                  <Link key={index} href={area.href} className={styles.dropdownItem}>
                    {area.name}
                  </Link>
                ))}
                <Link href="/practice-areas" className={`${styles.dropdownItem} ${styles.dropdownAll}`}>
                  All 16 Practice Areas
                </Link>
              </div>
            )}
          </div>

          <Link href="/lawyers" className={styles.navLink}>Our Team</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <a href={contact.phoneHref} className={styles.phoneLink}>
            <Phone size={16} />
            {contact.phone}
          </a>
          <Link href="/contact" className={styles.ctaBtn}>
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
          <Link href="/practice-areas" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Practice Areas</Link>
          <Link href="/lawyers" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
          <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <div className={styles.mobileCTA}>
            <a href={contact.phoneHref} className={styles.mobilePhoneLink}>
              <Phone size={16} /> {contact.phone}
            </a>
            <Link href="/contact" className={styles.ctaBtn} onClick={() => setMobileMenuOpen(false)}>
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

