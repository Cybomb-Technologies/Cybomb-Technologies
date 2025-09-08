// CaseBanner.jsx
import React from "react";
import styles from "./case-banner.module.css";

const CaseBanner = ({ 
  title, 
  description, 
  primaryButtonText, 
  secondaryButtonText, 
  projectDescription 
}) => {
  return (
    <section className={`${styles.caseBanner} container-fluid px-0`}>
      <div className="row g-0">
        {/* Left Section */}
        <div className={`col-md-6 ${styles.bannerLeft}`}>
          <div className={styles.bannerContent}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className={styles.buttons}>
              <button className={`btn ${styles.btnPrimary}`}>
                {primaryButtonText}
              </button>
              <button className={`btn ${styles.btnSecondary}`}>
                {secondaryButtonText}
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={`col-md-6 ${styles.bannerRight}`}>
          <p>{projectDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default CaseBanner;