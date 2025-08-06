import styles from './services-banner.module.css';

export default function ServicesBanner() {
  return (
    <div className={styles.aboutBannerImg}>
      <div className="container">
        <h1 className={`text-white text-center ${styles.bannerTitle}`}>Our Services</h1>
      </div>
    </div>
  );
}