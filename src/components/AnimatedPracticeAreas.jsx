'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/app/page.module.css';

gsap.registerPlugin(ScrollTrigger);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
  </svg>
);

const practiceAreas = [
  {
    title: "Criminal Law",
    desc: "Expert defense in criminal matters including bail, trials, and appeals before all courts.",
    items: ["Bail Applications", "FIR Quashment", "Criminal Trials", "Appeals & Revisions"],
    href: "/services/criminal-law",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Family Law",
    desc: "Compassionate handling of family matters with sensitivity and deep legal expertise.",
    items: ["Khula & Divorce", "Child Custody", "Maintenance Claims", "Guardianship"],
    href: "/services/family-law",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Corporate Law",
    desc: "Complete corporate services from business formation to complex commercial transactions.",
    items: ["Company Registration", "Contract Drafting", "M&A", "Corporate Compliance"],
    href: "/services/corporate-law",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    title: "Property Law",
    desc: "Expert guidance on property transactions, disputes, and inheritance matters.",
    items: ["Property Disputes", "Title Verification", "Succession", "Property Transfer"],
    href: "/services/property-law",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Civil Law",
    desc: "Comprehensive civil litigation for all types of disputes and legal matters.",
    items: ["Civil Suits", "Injunctions", "Contract Disputes", "Money Recovery"],
    href: "/services/civil-law",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    title: "Cyber Crime",
    desc: "Specialized representation in FIA cyber crime cases and digital fraud matters.",
    items: ["FIA Cases", "Online Harassment", "Digital Fraud", "Data Protection"],
    href: "/services/cyber-crime",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function AnimatedPracticeAreas() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`section ${styles.practiceSection} section-alt`}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Practice Areas</h2>
          <p className="section-sub">Comprehensive legal services delivered by experienced advocates across all courts of Pakistan</p>
        </div>

        <div className={styles.servicesGrid}>
          {practiceAreas.map((area, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                className={styles.serviceCard}
              >
                <div className={styles.serviceCardTop}>
                  <span className={styles.serviceCardNum}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.serviceCardIcon}>{area.icon}</div>
                </div>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
                <ul className={styles.serviceList}>
                  {area.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
                <Link href={area.href} className={styles.serviceLink}>
                  Learn More <ArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link href="/practice-areas" className="btn btn-secondary btn-lg">
            View All Practice Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
