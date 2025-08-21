import React from "react";
import styles from "./uiux-why-matters.module.css";
import uiuxImage from './../../../../assets/uiux.png'; 

const UiUxWhyMatters = () => {
  return (
    <section className={`${styles.whySection} py-5`}>
      <div className="container">
        <h2 className="text-center mb-5">Why UI/UX Matters</h2>

        <div className={`row align-items-center ${styles.cardWrapper}`}>
          {/* Left side: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img
              src={uiuxImage}
              alt="UI/UX Illustration"
              className={`img-fluid ${styles.image}`}
            />
          </div>

          {/* Right side: List */}
          <div className="col-lg-6">
            <ul className={styles.benefitsList}>
              <li>Boosts user satisfaction and loyalty</li>
              <li>Reduces bounce rates and support tickets</li>
              <li>Drives conversions through intuitive flows</li>
              <li>Makes products accessible across devices and demographics</li>
              <li>Creates a competitive edge through better design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiUxWhyMatters;
