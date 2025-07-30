import React from 'react';
import styles from './Info.module.css';

function Info() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoCard}>
        <div className={styles.infoItem}>
          <div className={styles.infoNumber}>100%</div>
          <div className={styles.infoLabel}>Aligned with your business—not a generic solution</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoNumber}>80%</div>
          <div className={styles.infoLabel}>Scales as your company evolves</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoNumber}>200+</div>
          <div className={styles.infoLabel}>No unnecessary features, subscriptions, or limitations</div>
        </div>
      </div>
      
        <div className={styles.partnerCaption}>
        Partnered with Startups and <span className={styles.partnerCaptionHighlight}>Fortune 500</span> Companies
        </div>

    </section>
  );
}

export default Info;
