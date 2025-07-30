import styles from './EngagementModels.module.css';

export default function EngagementModels() {
  return (
    <section className={styles.engagementSection}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Engagement Options</h2>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Cloud Setup for Startups</h3>
          <p className={styles.cardText}>
            Ideal for MVPs, websites, and internal dashboards.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Managed AWS Services</h3>
          <p className={styles.cardText}>
            We monitor, maintain, and scale your infrastructure 24/7.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Enterprise Migration Projects</h3>
          <p className={styles.cardText}>
           Move from on-premise, Heroku, or Azure to a fully managed AWS setup.
          </p>
        </div>
      </div>
    </section>
  );
}
