import React from "react";
import styles from "./web-dev-banner.module.css";

export default function WebDevBanner() {
  return (
    <header className={`container-fluid ${styles.banner}`}>
      <div className="container text-center py-5">
        <h1 className={`fw-bold ${styles.heading}`}>
          Website Development Services
        </h1>
        <p className={`mb-4 ${styles.subheading}`}>
          Beautiful, fast, and functional websites tailored to your brand and business goals
        </p>
        <button className={`${styles.consultBtn}`}>
          Book Free Consultation
        </button>
        <p className={`mt-4 mx-auto ${styles.description}`}>
          We design and build websites that don’t just look good—they work flawlessly. Whether it’s a landing page,
          business portfolio, eCommerce site, or web portal, our website development team ensures a smooth experience from idea to launch.
        </p>
      </div>

      {/* Moved below all content */}
      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <div className={styles.infoItem}>
            <div className={styles.infoNumber}>900+</div>
            <div className={styles.infoLabel}>In-house Expert Developers</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoNumber}>70%</div>
            <div className={styles.infoLabel}>Average Savings on Development Costs</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoNumber}>20,000+</div>
            <div className={styles.infoLabel}>Projects Delivered Successfully</div>
          </div>
        </div>

        <div className={styles.partnerCaption}>
          Partnered with Startups and <span className={styles.partnerCaptionHighlight}>Fortune 500</span> Companies
        </div>
      </section>
    </header>
  );
}
