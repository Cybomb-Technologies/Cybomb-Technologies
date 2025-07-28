import React from 'react';
import styles from './mobile-app-EngagementModels.module.css';

const models = [
  {
    title: 'From-Scratch Website Builds',
    description: "Start with an idea — we'll handle the design, content, coding, and launch",
  },
  {
    title: 'Website Upgrades & Redesigns',
    description: "Already have a site? Let's improve the look, speed, and UX",
  },
  {
    title: 'Landing Page Development',
    description: "Need a fast, high-conversion page for your campaign? We've got you covered",
  },
];

const MobileAppEngagementModels = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Engagement Models</h2>
        </div>
        <div className={styles.cardsWrapper}>
          {models.map((model, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
            >
              <h3 className={styles.cardTitle}>{model.title}</h3>
              <div className={styles.cardDescBox}>
                <p className={styles.cardDesc}>{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppEngagementModels;
