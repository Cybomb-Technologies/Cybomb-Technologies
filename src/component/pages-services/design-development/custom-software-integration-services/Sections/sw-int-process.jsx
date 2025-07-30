import React from 'react';
import styles from './sw-int-Process.module.css';

const steps = [
  {
    title: 'Requirement Mapping',
    description: 'Understand the systems you use and how data should flow between them',
  },
  {
    title: 'Feasibility Study & API Review',
    description: 'Analyze endpoints, documentation, and protocols to plan integration logic',
  },
  {
    title: 'Integration Development',
    description: 'Build APIs, connectors, or middleware to exchange data reliably and securely',
  },
  {
    title: 'Testing & Validation',
    description: 'Perform real-world use case testing to ensure accurate syncing and behavior',
  },
  {
    title: 'Monitoring & Maintenance',
    description: 'Keep everything running smoothly with error tracking, retries, and versioning support',
  },
];

const SwIntProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Our Integration Process</h2>
        </div>
        <div className={styles.cardsWrapper}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
            >
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <div className={styles.cardDescBox}>
                <p className={styles.cardDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SwIntProcess;
