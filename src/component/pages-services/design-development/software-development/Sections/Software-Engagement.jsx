import styles from './Software-Engagement.module.css';

export default function SoftwareEngagement() {
  return (
    <section className={styles.engagementSection}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Engagement Options</h2>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Full-Cycle Software Projects</h3>
          <p className={styles.cardText}>
            You share your idea—we design, develop, and deliver the entire product.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Dedicated Development Teams</h3>
          <p className={styles.cardText}>
            Scale your tech team with our experienced developers.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Modernization &amp; Refactoring</h3>
          <p className={styles.cardText}>
            Upgrade old software with better performance, UI, and security.
          </p>
        </div>
      </div>
    </section>
  );
}
