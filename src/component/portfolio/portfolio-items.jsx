import React from 'react';
import styles from './portfolio-items.module.css';

function PortfolioItem({
  title,
  image,
  altText,
  features,
  previewLink,
  animationDirection = 'fade-left',
  imagePosition = 'left',
  style
}) {
  return (
    <div className={`row ${styles.section}`} data-aos={animationDirection} style={style}>
      <div className="col-12 text-center">
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={`row ${styles.contentRow}`}>
        <div className={`col-md-6 ${styles.imageWrapper}`}>
          <div className={styles.imageContainer}>
            <img
              src={image}
              alt={altText}
              className={`img-fluid rounded ${styles.image}`}
            />
          </div>
        </div>

        <div className={`col-md-6 ${styles.contentWrapper}`}>
          <div className={styles.featuresContainer}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`col-12 ${styles.buttonContainer}`}>
        <a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.previewButton}
        >
          <b>Preview</b>
          <i className={`bi bi-box-arrow-up-right ${styles.buttonIcon}`}></i>
        </a>
      </div>
    </div>
  );
}

export default PortfolioItem;