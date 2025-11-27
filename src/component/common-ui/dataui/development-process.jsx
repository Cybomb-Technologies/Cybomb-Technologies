import React from 'react';
import styles from './devlopment-process.module.css';

const DevelopmentProcess = ({ title, Process }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
              <div className={styles.titleWrapper}>
              <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.cardsWrapper}>
              {Process.map((desc, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${styles[`card${index + 1}`]}`}
                >
                  <p className={styles.cardText}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
      
    </section>
  );
};

export default DevelopmentProcess;
