import React from 'react';
import styles from './ServicesSection.module.css';

const ServicesSection = ({ title, services = [] }) => {
  return (
    <section className={styles.awsServicesSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionLayer}>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
