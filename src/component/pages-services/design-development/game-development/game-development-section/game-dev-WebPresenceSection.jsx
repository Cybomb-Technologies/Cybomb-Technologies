import React from 'react';
import styles from './game-dev-WebPresenceSection.module.css';
import placeholderImage from '../../../../../assets/placeholder-image.webp';

const GameDevPresenceSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left Side - Text */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>Craft a Captivating Online Presence for Your Brand!</h2>
          <p className={styles.description}>
            Our custom web development services turn your vision into a compelling online presence.
          </p>
          <button className={styles.button}>Request a Free Quote Today!<span className={styles.arrow}>&rarr;</span></button>
        </div>

        {/* Right Side - Image */}
        <div className={styles.imageWrapper}>
          <img src={placeholderImage} alt="Web Development" className={styles.image} />
        </div>

      </div>
    </section>
  );
};

export default GameDevPresenceSection;
