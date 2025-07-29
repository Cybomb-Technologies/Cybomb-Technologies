import React from 'react';
import styles from './Info.module.css';

function Info() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoCard}>
        <div className={styles.infoItem}>
          <div className={styles.infoNumber}>900+</div>
          <div className={styles.infoLabel}>In-house Expert Developers</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoNumber}>70%</div>
          <div className={styles.infoLabel}>Average Savings on Development Costs</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoNumber}>20,000+</div>
          <div className={styles.infoLabel}>Projects Delivered Successfully</div>
        </div>
      </div>
      
        <div className={styles.partnerCaption}>
        Partnered with Startups and <span className={styles.partnerCaptionHighlight}>Fortune 500</span> Companies
        </div>

    </section>
  );
}

export default Info;
