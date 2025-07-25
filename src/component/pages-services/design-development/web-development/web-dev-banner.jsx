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

        {/* Form will be inserted here later */}
      </div>
      <div className={styles.statsWrapper}>
<div className={`container ${styles.statsBox}`}>
  <div className="row text-center">
      <div className="col-md-4">
        <h3 className={styles.blueText}>94%</h3>
        <p className={styles.statDesc}>of first impressions relate to website design</p>
      </div>
      <div className="col-md-4">
        <h3 className={styles.blueText}>75%</h3>
        <p className={styles.statDesc}>A well-built website increases trust and leads by up to</p>
      </div>
      <div className="col-md-4">
        <h3 className={styles.blueText}>50%</h3>
        <p className={styles.statDesc}>of web traffic comes from mobile devices—mobile-first is a must!</p>
      </div>
    </div>
  </div>

  <p className={`text-center fw-bold mt-4 ${styles.partnerLine}`}>
    Partnered with Startups and <span className={styles.fortune}>Fortune 500</span> Companies
  </p>
</div>

    </header>
  );
}
