import styles from './CoreFeatures.module.css';

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'Meet our experienced advocates for a confidential case evaluation. We listen carefully, assess your situation honestly, and outline the best legal path forward — at no cost.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Strategic Planning',
    desc: 'Our legal team builds a tailored case strategy drawing on decades of combined experience across all levels of Pakistani courts — from Sessions Courts to the Supreme Court.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Expert Representation',
    desc: 'We fight relentlessly on your behalf — leveraging our courtroom mastery, negotiation skills, and legal acumen to secure the best possible outcome for you and your family.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function LegalProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.tag}>
            <span className={styles.tagLine} />
            How We Work
          </span>
          <h2 className={styles.title}>A Proven Approach to Legal Victory</h2>
          <p className={styles.subtitle}>
            From your first call to the final verdict — a structured process that keeps you informed and confident at every stage.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
