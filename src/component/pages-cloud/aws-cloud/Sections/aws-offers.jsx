import React from 'react';
import styles from './aws-offers.module.css';
import offerImage from "./../../../../assets/aws.avif";

const AWSOffers = () => {
  return (
    <section className={styles.awsOffersSection}>
      <h2 className={styles.sectionTitle}>What You Can Do With AWS</h2>

      <div className={styles.contentWrapper}>
        <ul className={styles.featureList}>
          <li><span className={styles.arrow}>→</span> Launch scalable web & mobile applications</li>
          <li><span className={styles.arrow}>→</span> Store and access data securely from anywhere</li>
          <li><span className={styles.arrow}>→</span> Automate deployment and delivery pipelines</li>
          <li><span className={styles.arrow}>→</span> Handle traffic spikes without performance issues</li>
          <li><span className={styles.arrow}>→</span> Pay-as-you-go infrastructure—no upfront hardware costs</li>
        </ul>

        <div className={styles.imageContainer}>
          <img src={offerImage} alt="AWS service illustration" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default AWSOffers;
