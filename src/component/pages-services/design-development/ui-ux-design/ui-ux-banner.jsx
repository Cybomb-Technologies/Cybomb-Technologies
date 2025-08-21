import React from "react";
import styles from "./ui-ux-banner.module.css";
import Bannerform from "../../../banner-form/banner-form";

const UiUxBanner = () => {
  return (
    <section className={`${styles.bannerSection} py-5`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          
          {/* Left side: Content */}
          <div className={`col-lg-6 ${styles.contentWrapper} text-center text-lg-start px-4 mb-4 mb-lg-0`}>
            <h2 className={styles.title}>UI/UX Design Services</h2>
            <h3 className={styles.subtitle}>
              Intuitive, beautiful, and user-first design experiences
            </h3>
            <p className={styles.description}>
              Your product deserves more than just good looks—it needs to be
              functional, frictionless, and delightful. Our UI/UX design
              services are centered around your users, delivering intuitive
              digital interfaces that drive engagement, retention, and
              satisfaction.
            </p>
          
              {/* <button className={`${styles.ctaBtn} btn`}>
                Book Free Consultation
              </button> */}
           
            
          </div>

          {/* Right side: Form */}
          <div className="col-lg-6">
            <div className={styles.formWrapper}>
              <Bannerform />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UiUxBanner;