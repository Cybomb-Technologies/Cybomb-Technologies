
import { Link } from "react-router-dom";
import styles from "./mobile-app-dev.module.css";

function MobileAppBanner() {
  return (
     <section className={styles.MobileAppSection}>
      <h1 className={styles.heading}>Mobile App Development</h1>
      <p className={styles.subtext}>
        We turn your app idea into a powerful, user-friendly experience.
      </p>
    </section>
  );
}

export default MobileAppBanner;