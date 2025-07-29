import React from "react";
import styles from "./bespoke-dev-banner.module.css";

export default function BespokeDevBanner() {
  return (
    <header className={`container-fluid ${styles.banner}`}>
      <div className="container text-center py-5">
        <h1 className={`fw-bold ${styles.heading}`}>
          Bespoke Software Development Services
        </h1>
        <h3 className={`mb-4 ${styles.subheading}`}>Tailor-made software built exactly for your business</h3>
        
        <button className={styles.consultBtn}>  
          Book Free Consultation
        </button>

        <p className={`mt-4 mx-auto ${styles.description}`}>
          Off-the-shelf solutions don’t always fit your unique goals—and that’s where bespoke software comes in. We design and develop custom-built digital solutions from scratch that match your exact workflows, challenges, and growth plans.
        </p>
      </div>
    </header>
  );
}
