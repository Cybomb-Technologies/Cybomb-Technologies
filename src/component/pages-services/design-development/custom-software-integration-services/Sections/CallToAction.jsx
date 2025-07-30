import React from 'react';
import styles from './CallToAction.module.css';
import placeholderImage from '../../../../../assets/laptop-preview.png';

const CallToAction = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left Side - Text */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>Craft a Captivating Online Presence for Your Brand!</h2>
          <p className={styles.description}>
            Our Custom Software Intergration services turn your vision into a compelling online presence.
          </p>
          <button className={styles.button}>Request a Free Quote Today!</button>
        </div>

        {/* Right Side - Image */}
        <div className={styles.imageWrapper}>
          <img src={placeholderImage} alt="Custom Software Intergration" className={styles.image} />
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
