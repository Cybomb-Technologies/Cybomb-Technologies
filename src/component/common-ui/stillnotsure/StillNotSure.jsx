import React from 'react';
import styles from './still-not-sure.module.css';

function StillNotSure() {
  return (
    <section className={styles.stillNotSureSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>Still not sure what you are looking for?</h2>
          <button className={styles.ctaButton}>
            Talk to Our Experts <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default StillNotSure;
