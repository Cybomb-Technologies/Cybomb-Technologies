import React from 'react';
import styles from './mobile-info-stats.module.css';

function MobileInfoStats() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoCard}>
        <div className={styles.infoItem}>
          <div className={styles.infoNumber}>90%</div>
          <div className={styles.infoLabel}>Of mobile time inside apps, not browsers</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoNumber}>6.8 billion</div>
          <div className={styles.infoLabel}>Smartphone users worldwide</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoNumber}>50%</div>
          <div className={styles.infoLabel}>A well-built mobile app boosts engagement, loyalty, and sales</div>
        </div>
      </div>
      
        <div className={styles.partnerCaption}>
        Partnered with Startups and <span className={styles.partnerCaptionHighlight}>Fortune 500</span> Companies
        </div>

    </section>
  );
}

export default MobileInfoStats;
