import React from "react";
import styles from "./web-dev-banner.module.css";

export default function WebDevBanner() {
  return (
    <header className={`container-fluid ${styles.banner}`}>
      <div className="container text-center py-5">
        <h1 className={`fw-bold ${styles.heading}`}>
          Software Development Services
        </h1>
        <p className={`mb-4 ${styles.subheading}`}>
          Custom software built to scale your operations and transform your ideas into powerful solutions.
        </p>
        <button className={styles.consultBtn}>  
          Book Free Consultation
        </button>

        <p className={`mt-4 mx-auto ${styles.description}`}>
          We specialize in crafting scalable, secure, and robust software solutions. Whether you need SaaS platforms, enterprise tools, or internal systems, our team delivers tailored software that meets your unique business needs.
        </p>
      </div>
    </header>
  );
}
