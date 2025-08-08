import React from 'react';
import styles from './schedule-consultation.module.css';

function ScheduleConsultation({ 
  heading, 
  buttonText, 
  imageSrc, 
  imageAlt, 
  Icon 
}) {
  return (
    <section className={styles.section}>
      <div className={styles.coloredBox}>
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>{heading}</h2>
          <button className={styles.ctaButton}>
            {Icon && <Icon className={styles.icon} />}
            {buttonText}
          </button>
        </div>
        <div className={styles.rightImage}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}

export default ScheduleConsultation;
