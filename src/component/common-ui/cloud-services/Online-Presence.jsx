import { Link } from 'react-router-dom';
import styles from './online-presence.module.css';

function OnlinePresence({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.textContent}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          
          <Link to="/contact-us" className={styles.button}>
            {buttonText}
            <span className={styles.arrow}>&rarr;</span>
          </Link>
        </div>

        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        </div>

      </div>
    </section>
  );
}

export default OnlinePresence;
