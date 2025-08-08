import React from "react";
import styles from './whatweoffer.module.css';

function WhatWeOffer({ title, services }) {
  return (
    <section className={styles.uiuxSection}>
      <h2 className={styles.sectionTitleUiux}>{title}</h2>
      <div className={styles.containerUiux}>
        <div className={styles.servicesGridUiux}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCardUiux}>
              <h3 className={styles.serviceTitleUiux}>{service.title}</h3>
              <p className={styles.serviceDescriptionUiux}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
