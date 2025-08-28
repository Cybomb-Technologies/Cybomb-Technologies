import React from "react";
import styles from "./PaymentGateways.module.css";

function PaymentGateways({ tools }) {
  return (
    <section className={styles.apiSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Payment Gateway APIs</h2>
        <div className="row mt-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center"
            >
              <div className={styles.card}>
                <div className={styles.cardIcon}>{tool.icon}</div>
                <h3 className={styles.cardTitle}>{tool.name}</h3>
                <p className={styles.cardDescription}>{tool.description}</p>
                {/* <button className={styles.learnBtn}>Learn More</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PaymentGateways;
