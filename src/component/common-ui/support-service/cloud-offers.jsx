import React from 'react';
import styles from './cloud-offers.module.css';

const CloudOffers = ({ title, features = [], image }) => {
  return (
    <section className={styles.cloudOffersSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={styles.contentWrapper}>
        <ul className={styles.featureList}>
          {features.map((feature, index) => (
            <li key={index}>
              {index % 2 === 0 ? (
                <>
                  <span className={styles.arrow}>→</span>
                  <span>{feature}</span>
                </>
              ) : (
                <>
                  <span>{feature}</span>
                  <span className={styles.arrow}>←</span>
                </>
              )}
            </li>
          ))}
        </ul>

        {image && (
          <div className={styles.imageContainer}>
            <img src={image} alt="Cloud service illustration" className={styles.image} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CloudOffers;
