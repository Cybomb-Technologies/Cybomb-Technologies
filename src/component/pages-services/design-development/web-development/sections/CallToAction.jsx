import React from "react";
import styles from "./CallToAction.module.css";
import laptop from "../../../../../assets/laptop-preview.png";


export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-white text-center text-lg-start mb-4 mb-lg-0">
            <h2 className={styles.ctaTitle}>
              Craft a Captivating Online <br className="d-none d-md-inline" />
              Presence for Your Brand!
            </h2>
            <p className={styles.ctaText}>
              Our custom web development services turn your vision
              into a compelling online presence.
            </p>
            <a href="#" className={styles.ctaButton}>
              Request a Free Quote Today! <span className={styles.arrow}>&rarr;</span>
            </a>
          </div>
          <div className="col-lg-5 text-center">
            <img
              src={laptop}
              alt="Web development preview on laptop"
              className="img-fluid rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
