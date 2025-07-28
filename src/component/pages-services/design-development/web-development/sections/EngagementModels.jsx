import React from "react";
import styles from "./EngagementModels.module.css";

export default function EngagementModels() {
  return (
    <section className={styles.engagementSection}>
      <div className="container text-center">
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Engagement Models</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className={`${styles.card} ${styles.blue}`}> 
              <h3 className={styles.title}>From-Scratch Website Builds</h3>
              <div className={styles.innerCard}>
                <p>
                  Start with an idea—we’ll handle the design, content, coding,
                  and launch
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className={`${styles.card} ${styles.navy}`}> 
              <h3 className={styles.title}>Website Upgrades & Redesigns</h3>
              <div className={styles.innerCard}>
                <p>Already have a site? Let’s improve the look, speed, and UX</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className={`${styles.card} ${styles.cyan}`}> 
              <h3 className={styles.title}>Landing Page Development</h3>
              <div className={styles.innerCard}>
                <p>
                  Need a fast, high-conversion page for your campaign? We’ve got
                  you covered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}