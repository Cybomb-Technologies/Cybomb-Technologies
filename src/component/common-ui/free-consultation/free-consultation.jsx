import React from "react";
import { Link } from "react-router-dom";
import styles from "./free-consultation.module.css";
import sampleImg from "../../../assets/placeholder-image.webp";

function FreeConsultation() {
  return (
    <section className={styles.consultationSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Left Column */}
          <div className={styles.textColumn}>
            <p className={styles.mainText}>
              Book a free consultation or send us your requirements — we'll get back within 24 hours.
            </p>
            <p className={styles.subText}>Ready to scale your team?</p>
            
            <Link to="/contact-us" className={styles.ctaButton}>
              Get Started Today →
            </Link>
          </div>

          {/* Right Column */}
          <div className={styles.imageColumn}>
            <img
              src={sampleImg}
              alt="Consultation"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeConsultation;
