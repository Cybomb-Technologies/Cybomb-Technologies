import React from "react";
import styles from './engagement-options-timeline.module.css';

function EngagementOptions({ title = "Engagement Options", options = [] }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.flowContainer}>
        <div className={styles.centerLine}></div>

        {options.map((option, index) => (
          <div
            key={index}
            className={`${styles.cardRow} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.lineConnector}>
              <div className={styles.horizontalLine}></div>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{option.title}</h3>
              <p className={styles.cardDesc}>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EngagementOptions;
