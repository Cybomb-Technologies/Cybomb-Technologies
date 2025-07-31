import React from 'react';
import styles from "./services-offerings.module.css";

function ServicesOfferings({title, Services }) {
  return (
    <section className={styles.androidServicesSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionLayer}>
        <div className={styles.grid}>
          {Services.map((Services, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{Services.title}</h3>
              <p className={styles.cardDescription}>{Services.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOfferings;
