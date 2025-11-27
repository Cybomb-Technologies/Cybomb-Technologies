import React from 'react';
import styles from './cloud-offers.module.css';

const CloudOffers = ({ title, features = [], image }) => {
  return (
    <section className={styles.cloudOffersSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureContent}>
                  <span className={styles.arrow}>→</span>
                  <span className={styles.featureText}>{feature}</span>
                </div>
                <div className={styles.progressBar}></div>
              </div>
            ))}
          </div>

          {image && (
            <div className={styles.imageContainer}>
              <img src={image} alt="Cloud service illustration" className={styles.image} />
              <div className={styles.imageOverlay}></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CloudOffers;