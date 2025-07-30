import React from 'react';
import styles from './CallToAction.module.css';
import placeholderImage from './../../../../assets/laptop-preview.png';

const CallToAction = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left Side - Text */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>Unlock Your Cloud Potential with Our AWS Solutions</h2>
          {/* <p className={styles.description}>
            Our Custom Software Intergration services turn your vision into a compelling online presence.
          </p> */}
          <button className={styles.button}>Request with out AWS Experts!</button>
        </div>

        {/* Right Side - Image */}
        <div className={styles.imageWrapper}>
          <img src={placeholderImage} alt="AWS-Cloud" className={styles.image} />
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
