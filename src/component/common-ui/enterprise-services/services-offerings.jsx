import React from 'react';
import styles from './services-offerings.module.css';

function ServicesOfferings({ title, items }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.cardsWrapper}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOfferings;
