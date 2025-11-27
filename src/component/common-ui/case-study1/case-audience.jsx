import React from "react";
import styles from "./case-audience.module.css";

const CaseAudience = ({ data }) => {
  return (
    <div className={`${styles.audienceSection} container py-5`}>
      <h2 className={`${styles.heading} text-center`}>Target Audience</h2>
      <div className="row">
        {data.map((audience, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4 d-flex">
            <div 
              className={`${styles.card} card h-100 w-100 ${audience.darkText ? styles.darkCard : ""}`}
            >
              <div className="card-body text-center">
                <div className={styles.iconWrapper}>
                  {React.cloneElement(audience.icon, {
                    className: `${styles.icon} ${audience.darkText ? styles.darkIcon : ""}`
                  })}
                </div>
                <h3 className={`${styles.title} ${audience.darkText ? styles.darkTitle : ""}`}>
                  {audience.title}
                </h3>
                <p className={`${styles.description} ${audience.darkText ? styles.darkDescription : ""}`}>
                  {audience.description.map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseAudience;
