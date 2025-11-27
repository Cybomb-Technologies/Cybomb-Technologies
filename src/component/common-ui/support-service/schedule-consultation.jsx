import { Link } from 'react-router-dom';
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
          <Link to="/contact-us" className={styles.ctaButton}>
            {Icon && <Icon className={styles.icon} />}
            {buttonText}
          </Link>
        </div>
        <div className={styles.rightImage}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}

export default ScheduleConsultation;
