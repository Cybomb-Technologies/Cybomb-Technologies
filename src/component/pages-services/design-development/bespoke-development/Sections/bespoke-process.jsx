import React from 'react';
import styles from './bespoke-Process.module.css';

const models = [
  {
    title: 'Discovery & Requirement Mapping',
    description: 'Understand your process, pain points, and future plans',
  },
  {
    title: 'Planning & Wireframing',
    description: 'Design the blueprint for your software’s interface and functionality',
  },
  {
    title: 'Agile Development & Reviews',
    description: 'Build in phases, with feedback and improvements at every step',
  },
  {
    title: 'QA, Testing & Feedback',
    description: 'Ensure stability, performance, and usability across all devices',
  },
  {
    title: 'Deployment & Support',
    description: 'Launch the software, provide training, and offer long-term updates if needed',
  },
];

const BespokeProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Our Bespoke Development Process</h2>
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

export default BespokeProcess;
