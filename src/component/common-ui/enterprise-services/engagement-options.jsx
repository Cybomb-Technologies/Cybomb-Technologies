import React from 'react';
import styles from './engagement-options.module.css';

function EngagementOptions({ title, items }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.timeline}>
        <div className={styles.verticalLine}></div>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.cardWrapper} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
            <span className={styles.connector}></span>
          </div>
        ))}
      </div>
    </section>
  );
}


export default EngagementOptions;
