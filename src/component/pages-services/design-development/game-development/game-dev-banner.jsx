
import { Link } from "react-router-dom";
import styles from "./game-dev.module.css";
import Bannerform from "../../../banner-form/banner-form";

function GameDevBanner() {
  return (
     <section className={styles.MobileAppSection}>
      <h1 className={styles.heading}>Game Development</h1>
      <p className={styles.subtext}>
        We turn your game ideas into immersive, playable realities
      </p>
      <Bannerform/>
    </section>
  );
}

export default GameDevBanner;