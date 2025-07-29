import React from 'react';
import styles from './game-dev-tech-info.module.css';

function GameTechInfo() {
  return (
    <section className={styles.techInfoWrapper}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.content}>
          {/* Card 1: Technologies */}
          <div className={styles.card}>
            <h3 className={styles.cardTitleBox}>Technologies & Frameworks</h3>
            <div className={styles.columncard}>
              <p><strong>Languages & SDKs:</strong> Kotlin, Java, Flutter, React Native, Xamarin, Capacitor — expertise across both native and cross-platform stacks.</p>
              <p><strong>Complementary Technologies:</strong> Firebase, frontend/back-end databases, cloud services, DevOps, e-commerce and CRM plugins.</p>
            </div>
          </div>

          {/* Card 2: Hiring Models */}
          <div className={styles.card}>
            <h3 className={styles.cardTitleBox}>Hiring Models</h3>
            <div className={styles.hiringGrid}>
              <div>
                <strong>Bucket Hours:</strong><br />
                Prepay hours; use them up to six months as needed. Suitable for shared-resource usage.
              </div>
              <div>
                <strong>Dedicated Hiring:</strong><br />
                Assign one or more developers exclusively to your project for specified durations.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.content}>
          <h3 className={styles.cardTitleCenterH3}>Why Choose Us</h3>
          <p><strong>Clear Communication:</strong> Transparent updates, feedback loops, and complete ownership of code.</p>
          <p><strong>On-Time Delivery:</strong> Agile processes and PM tools ensure timely releases.</p>
          <p><strong>Custom Solutions:</strong> Tailored development in line with your goals.</p>
          <p><strong>Direct Collaboration:</strong> Work closely with our developers and designers.</p>
          <p><strong>UX Excellence:</strong> Engaging, tested user interfaces and experiences.</p>
          <p><strong>Flexible Hiring Models:</strong> Choose "bucket hours" (prepaid, usable within 6 months) or dedicated full-time hires.</p>
        </div>
      </div>
    </section>
  );
}

export default GameTechInfo;
