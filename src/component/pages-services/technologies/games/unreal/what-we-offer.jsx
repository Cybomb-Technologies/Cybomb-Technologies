import React from "react";
import styles from "./what-we-offer.module.css";

const WhatWeOffer = ({ title, items }) => {
  return (
    <section className={styles.offerSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.scrollContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.cardImage} />
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              {/* <button className={styles.cardButton}></button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
