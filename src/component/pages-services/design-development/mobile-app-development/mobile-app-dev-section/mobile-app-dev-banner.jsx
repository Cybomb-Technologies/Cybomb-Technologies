
import styles from "./../../../../common-ui/module-styles/page-banner-section-dnd.module.css";

function MobileAppBanner() {
  return (
     <section className={styles.PageBannerSection}>
      <h1 className={styles.heading}>Mobile App Development</h1>
      <p className={styles.subtext}>
        We turn your app idea into a powerful, user-friendly experience.
      </p>
    </section>
  );
}

export default MobileAppBanner;