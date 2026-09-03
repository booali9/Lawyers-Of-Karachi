import styles from './LogoMarquee.module.css';

// Continuously scrolling strip of logos. The list is rendered twice so the
// track can loop seamlessly with a -50% translate; the duplicate half is
// hidden from assistive tech. Pauses on hover and respects reduced motion.
export default function LogoMarquee({ items, duration = 45, reverse = false, size = 'md', label = 'Logos' }) {
  const track = [...items, ...items];

  return (
    <div className={`${styles.marquee} ${styles[size]}`} role="region" aria-label={label}>
      <div
        className={`${styles.track} ${reverse ? styles.reverse : ''}`}
        style={{ '--duration': `${duration}s` }}
      >
        {track.map((item, i) => (
          <div className={styles.item} key={`${item.src}-${i}`} aria-hidden={i >= items.length}>
            <img
              src={item.src}
              alt={i < items.length ? item.name : ''}
              title={item.name}
              width={item.w}
              height={item.h}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
