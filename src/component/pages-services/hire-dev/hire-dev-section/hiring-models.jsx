import React from "react";
import { FaClock, FaUserTie } from "react-icons/fa"; // Icons
import styles from "./hiringModels.module.css";

function HiringModels() {
  return (
    <section className={styles.hiringModelsSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          
          {/* Left Column */}
          <div className={styles.textColumn}>
            <div className={styles.titleBlock}>
              <h2 className={styles.sectionTitle}>Hiring Models</h2>
            </div>
            
            <div className={`${styles.modelBlock} ${styles.bucketHoursBlock}`}>
              <div className={styles.modelHeader}>
                <FaClock className={styles.icon} />
                <h3 className={styles.modelTitle}>Bucket Hours</h3>
              </div>
              <p className={styles.modelDescription}>
                Buy a pool of hours and use them when needed across various
                projects — complete flexibility and cost control.
              </p>
            </div>

            <div className={`${styles.modelBlock} ${styles.dedicatedBlock}`}>
              <div className={styles.modelHeader}>
                <FaUserTie className={styles.icon} />
                <h3 className={styles.modelTitle}>Dedicated Hiring</h3>
              </div>
              <p className={styles.modelDescription}>
                Reserve expert developers to work exclusively on your projects.
                Ideal for long-term goals and full control.
              </p>
            </div>
          </div>
{/* 
          {/* Left Column 
            <div className={styles.textColumn}>
                <div className={styles.titleBlock}>
                    <h2 className={styles.sectionTitle}>Hiring Models</h2>
                </div>

                <div className={styles.modelsRow}>
                    <div className={`${styles.modelBlock} ${styles.bucketHoursBlock}`}>
                    <div className={styles.modelHeader}>
                        <FaClock className={styles.icon} />
                        <h3 className={styles.modelTitle}>Bucket Hours</h3>
                    </div>
                    <p className={styles.modelDescription}>
                        Buy a pool of hours and use them when needed across various
                        projects — complete flexibility and cost control.
                    </p>
                    </div>

                    <div className={`${styles.modelBlock} ${styles.dedicatedBlock}`}>
                    <div className={styles.modelHeader}>
                        <FaUserTie className={styles.icon} />
                        <h3 className={styles.modelTitle}>Dedicated Hiring</h3>
                    </div>
                    <p className={styles.modelDescription}>
                        Reserve expert developers to work exclusively on your projects.
                        Ideal for long-term goals and full control.
                    </p>
                    </div>
                </div>
            </div>
 */}

          {/* Right Column */}
          <div className={styles.imageColumn}>
            <img
              src="/images/hire-dev/hireing-models.png"
              alt="Hiring Models"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HiringModels;


//hireing-models.png