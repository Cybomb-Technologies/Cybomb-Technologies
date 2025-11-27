import React from 'react';
import styles from './info-stats.module.css';

function InfoStats({ stats = [], caption, highlight }) {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoCard}>
        {stats.map((item, index) => (
          <div key={index} className={styles.infoItem}>
            <div className={styles.infoNumber}>{item.number}</div>
            <div className={styles.infoLabel}>{item.label}</div>
          </div>
        ))}
  

      {caption && (
        <div className={styles.partnerCaption}>
          {caption}{' '}
          {highlight && <span className={styles.partnerCaptionHighlight}>{highlight}</span>}
        </div>
      )}
      </div>
    </section>
  );
}

export default InfoStats;
