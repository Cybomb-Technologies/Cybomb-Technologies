import React from 'react';
import styles from './../../../../common-ui/module-styles/info-stats-dnd.module.css';
//import styles from './game-dev-info-stats.module.css';

function GameInfoStats() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoCard}>
        <div className={styles.infoItem}>
          <div className={styles.infoNumber}>$200+</div>
          <div className={styles.infoLabel}>The The global gaming industry is worth</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.infoNumber}>50%</div>
          <div className={styles.infoLabel}>Mobile gaming alone accounts for</div>
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

export default GameInfoStats;
