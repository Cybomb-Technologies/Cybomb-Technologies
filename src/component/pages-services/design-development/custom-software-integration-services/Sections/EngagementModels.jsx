import styles from './EngagementModels.module.css';

export default function EngagementModels() {
  return (
    <section className={styles.engagementSection}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Engagement Options</h2>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>One-Time Integration Setup</h3>
          <p className={styles.cardText}>
           Need to connect two platforms once? We’ll set it up, test it, and train your team.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Custom Middleware Development</h3>
          <p className={styles.cardText}>
            Ongoing, scalable integration logic between multiple tools or APIs.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Legacy-to-Cloud Migration Support</h3>
          <p className={styles.cardText}>
            Keep old data flowing smoothly into your modern apps and cloud platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
