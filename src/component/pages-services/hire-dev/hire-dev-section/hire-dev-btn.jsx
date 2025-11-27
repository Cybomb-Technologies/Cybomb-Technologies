import React from "react";
import { Link } from "react-router-dom";
import styles from "./hire-dev-btn.module.css";

function HireDevBtn() {
  return (
    <section className={styles.buildTeamSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          
          {/* Left Column */}
          <div className={styles.textColumn}>
            <p className={styles.text}>
              Need one developer or a whole team? We've got you covered.
            </p>
            <Link to="/contact-us" className={styles.ctaButton}>
              Let&apos;s Build Your Team →
            </Link>
          </div>

          {/* Right Column */}
          <div className={styles.imageColumn}>
            <img
              src="/images/hire-dev/build-team.png"
              alt="Build Your Team"
              className={styles.image}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HireDevBtn;
