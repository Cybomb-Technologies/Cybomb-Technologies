// CaseCTA.jsx
import React from "react";
import styles from "./case-cta.module.css";

const CaseCTA = ({ text, buttonText }) => {
  return (
    <section className={`${styles.caseCta} container py-5`}>
      <div className={`${styles.ctaSection} row justify-content-center`}>
        <div className="col-auto">
          <p className={styles.ctaText}>{text}</p>
        </div>
        <div className="col-auto">
          <button className={styles.ctaButton}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default CaseCTA;