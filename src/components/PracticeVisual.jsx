import {
  Gavel, Scale, Users, Landmark, ReceiptText, Pickaxe, KeyRound, Building2,
  HardHat, ClipboardList, ShieldAlert, Lightbulb, Handshake, ScrollText,
  Pill, Megaphone,
} from 'lucide-react';
import styles from './PracticeVisual.module.css';

// One icon per area, keyed by the number used in the firm profile so the
// mapping survives reordering or filtering of the list.
const ICONS = {
  '01': Gavel,          // Criminal Law
  '02': Scale,          // Civil & Commercial Law
  '03': Users,          // Family Law
  '04': Landmark,       // Banking & Finance Law
  '05': ReceiptText,    // Tax & Customs Law
  '06': Pickaxe,        // Minerals & Mining Law
  '07': KeyRound,       // Property & Inheritance Law
  '08': Building2,      // Corporate & Securities Law
  '09': HardHat,        // Labour & Employment Law
  '10': ClipboardList,  // Services Law
  '11': ShieldAlert,    // Cyber Crime Law
  '12': Lightbulb,      // Intellectual Property Law
  '13': Handshake,      // Mediation
  '14': ScrollText,     // Constitutional Law
  '15': Pill,           // Pharmaceutical Law
  '16': Megaphone,      // Defamation Law
};

export default function PracticeVisual({ n, title, size = 'md', className = '' }) {
  const Icon = ICONS[n] || Scale;

  return (
    <div className={`${styles.visual} ${styles[size]} ${className}`} data-variant={n}>
      <span className={styles.pattern} aria-hidden="true" />
      <Icon className={styles.icon} strokeWidth={1.1} aria-hidden="true" />
      <span className={styles.num}>{n}</span>
      {title && <h3 className={styles.title}>{title}</h3>}
    </div>
  );
}
