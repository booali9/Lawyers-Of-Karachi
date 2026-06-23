'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false);

  const practiceAreas = [
    { name: 'Criminal Law', href: '/services/criminal-law' },
    { name: 'Family Law', href: '/services/family-law' },
    { name: 'Corporate Law', href: '/services/corporate-law' },
    { name: 'Property Law', href: '/services/property-law' },
    { name: 'Civil Law', href: '/services/civil-law' },
    { name: 'Constitutional Law', href: '/services/constitutional-law' },
    { name: 'Cyber Crime', href: '/services/cyber-crime' },
    { name: 'Banking & Finance', href: '/services/banking-finance' }
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoImageWrapper}>
              <Image 
                src="/logo.png" 
                alt="Karachi Legal House Logo" 
                width={180} 
                height={60} 
                style={{ objectFit: 'contain' }} 
                className={styles.navLogoImage} 
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          
          {/* Practice Areas Dropdown */}
          <div 
            className={styles.dropdown}
            onMouseEnter={() => setPracticeAreasOpen(true)}
            onMouseLeave={() => setPracticeAreasOpen(false)}
          >
            <Link href="/practice-areas" className={styles.navLink}>
              Services
              <span className={styles.dropdownArrow}>▼</span>
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

          <Link href="/lawyers" className={styles.navLink}>Team</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <a href="tel:+923001234567" className={styles.phoneLink}>
            <span className={styles.phoneIcon}>📞</span>
            +92 300 1234567
          </a>
          <Link href="/book-consultation" className="btn btn-primary">
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileMenuOpen ? styles.hamburgerOpen : styles.hamburger}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/practice-areas" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
            Services
          </Link>
          <Link href="/lawyers" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
            Team
          </Link>
          <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <div className={styles.mobileCTA}>
            <a href="tel:+923001234567" className="btn btn-secondary">
              Call Now
            </a>
            <Link href="/book-consultation" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
