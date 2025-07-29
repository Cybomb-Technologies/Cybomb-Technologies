import styles from './EngagementModels.module.css';

export default function EngagementModels() {
  return (
    <section className={styles.engagementSection}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Engagement Options</h2>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>From-Scratch Bespoke Development</h3>
          <p className={styles.cardText}>
            Share your challenge—we’ll build the perfect solution.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Modernization &amp; Rebuilds</h3>
          <p className={styles.cardText}>
            Turn legacy tools into modern, efficient platforms.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Dedicated Teams</h3>
          <p className={styles.cardText}>
            Get long-term development and support with our full-stack experts.
          </p>
        </div>
      </div>
    </section>
  );
}
