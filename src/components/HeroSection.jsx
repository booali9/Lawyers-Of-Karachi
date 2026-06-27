'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/app/page.module.css';

gsap.registerPlugin(ScrollTrigger);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.heroBgGlow} />

      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.heroTag} variants={childVariants}>
            <span className={styles.heroTagDot} />
            Since 2010
          </motion.span>

          <motion.h1 className={styles.heroTitle} variants={childVariants}>
            Decades of{' '}
            <em className={styles.heroTitleGold}>Excellence</em>
            <br />
            <span className={styles.heroTitleLight}>Defending Your Rights.</span>
          </motion.h1>

          <motion.div ref={lineRef} className={styles.heroRule} variants={childVariants} />

          <motion.p className={styles.heroDesc} variants={childVariants}>
            From the Supreme Court to the High Courts, Karachi Legal House delivers
            unmatched legal representation across Criminal, Family, Corporate, Civil,
            and Property Law.
          </motion.p>

          <motion.div className={styles.heroActions} variants={childVariants}>
            <Link href="/book-consultation" className="btn btn-primary btn-lg">
              Free Consultation <ArrowRight />
            </Link>
            <Link href="/practice-areas" className="btn btn-outline btn-lg">
              Our Practice Areas
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.heroStatsBar}>
        <div className={styles.heroStat}>
          <strong>15+</strong>
          <span>Years of Excellence</span>
        </div>
        <div className={styles.heroStatDiv} />
        <div className={styles.heroStat}>
          <strong>3,000+</strong>
          <span>Cases Won</span>
        </div>
        <div className={styles.heroStatDiv} />
        <div className={styles.heroStat}>
          <strong>98%</strong>
          <span>Success Rate</span>
        </div>
        <div className={styles.heroStatDiv} />
        <div className={styles.heroStat}>
          <strong>10+</strong>
          <span>Practice Areas</span>
        </div>
      </div>
    </section>
  );
}
