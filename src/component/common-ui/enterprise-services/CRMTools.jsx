import React from "react";
import styles from "./CRMTools.module.css";

function CRMTools({ tools }) {
  return (
    <section className={styles.crmSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>CRM Solutions</h2>
        <div className="row justify-content-center">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-3 mb-4 d-flex justify-content-center"
            >
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{tool.name}</h3>
                <p className={styles.cardDescription}>{tool.description}</p>
                <a>
                  <button className={styles.learnBtn}>Learn More</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CRMTools;
