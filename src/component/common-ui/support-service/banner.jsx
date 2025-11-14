import React from "react";
import styles from "./banner.module.css";
import Bannerform from "./../../banner-form/banner-form";

function Banner({ heading, subtext, buttonText, note }) {
  return (
    <section className={styles.PageBannerSection}>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.subtext}>{subtext}</p>

      {/* Use a semantic button for accessibility and responsiveness */}
      <div className={styles.buttonWrap}>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            // If you have a scroll/anchor or modal open handler, attach here.
            // Example: document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          }}
        >
          {buttonText}
        </button>
      </div>

      <p className={styles.note}>{note}</p>
      <Bannerform />
    </section>
  );
}

export default Banner;
