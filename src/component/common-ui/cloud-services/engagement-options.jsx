
import React from "react";
import styles from './engagement-options-timeline.module.css';

function EngagementOptions({ 
  title = "How We Can Collaborate", 
  options = [] 
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.cardsContainer}>
        {options.map((option, index) => (
          <div key={index} className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>{option.title}</h3>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardDesc}>{option.description}</p>
          </div>
        </div>        
        ))}
      </div>
    </section>
  );
}

export default EngagementOptions;
