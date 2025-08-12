import React from 'react';
import styles from './still-not-sure.module.css';

function StillNotSure({title}) {
  return (
    <section className={styles.stillNotSureSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.ctaButton}>
            Talk to Our Experts <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default StillNotSure;
