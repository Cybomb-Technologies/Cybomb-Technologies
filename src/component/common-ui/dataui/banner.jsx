import React from "react";
import styles from "./banner.module.css";
import Bannerform from "./../../banner-form/banner-form";

function Banner({ heading, subtext, buttonText, note }) {
  return (
    <section className={styles.PageBannerSection}>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.subtext}>{subtext}</p>
      <button className={styles.button}>{buttonText}</button>
      <p className={styles.note}>{note}</p>
      <Bannerform />
    </section>
  );
}

export default Banner;
