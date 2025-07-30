import React from "react";
import styles from "./aws-cloud-banner.module.css";

export default function AWSBanner() {
  return (
    <header className={`container-fluid ${styles.banner}`}>
      <div className="container text-center py-5">
        <h1 className={`fw-bold ${styles.heading}`}>
          AWS Cloud Services
        </h1>
        <h3 className={`mb-4 ${styles.subheading}`}>Scale faster, perform better, and pay only for what you use</h3>
        
        <button className={styles.consultBtn}>  
          Book Free Consultation
        </button>

        <p className={`mt-4 mx-auto ${styles.description}`}>
          Amazon Web Services (AWS) powers some of the world's most successful businesses. Whether you're building new apps, migrating existing infrastructure, or looking to scale globally, our AWS experts help you harness the full power of the cloud.
        </p>
      </div>
    </header>
  );
}
