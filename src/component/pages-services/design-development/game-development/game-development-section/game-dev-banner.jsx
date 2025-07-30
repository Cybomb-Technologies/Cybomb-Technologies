
import Bannerform from "../../../../banner-form/banner-form";
import styles from "./../../../../common-ui/module-styles/page-banner-section-dnd.module.css";

function GameDevBanner() {
  return (
     <section className={styles.PageBannerSection}>
      <h1 className={styles.heading}>Game Development</h1>
      <p className={styles.subtext}>
        We turn your game ideas into immersive, playable realities
      </p>
      <button className={styles.button}>Book Free Consultation</button>
      <p className={styles.note}> Fill out the form and our experts will contact you within 24 hours.</p>
      <Bannerform/>
    </section>
  );
}

export default GameDevBanner;