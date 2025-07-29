import React from 'react';
import styles from './Software-Development-Process.module.css';

const models = [
  {
    title: 'Discovery & Requirement Analysis',
    description: "Understand your needs, pain points, and goals",
  },
  {
    title: 'Design & Prototyping',
    description: "Create wireframes and mockups to visualize the software before development",
  },
  {
    title: 'Agile Development',
    description: "Build the software in sprints with constant feedback and improvements",
  },
  {
     title: 'Testing & QA',
    description: "Functional, performance, and security testing to ensure reliability",
  },
  {
     title: 'Deployment & Maintenance',
    description: "Launch your software and keep it running smoothly with support and updates",
  },
];

const SoftwareDevelopmentProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Our Software Development Process</h2>
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

export default SoftwareDevelopmentProcess;
