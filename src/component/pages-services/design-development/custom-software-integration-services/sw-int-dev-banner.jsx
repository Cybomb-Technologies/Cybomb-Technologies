import styles from "./sw-int-dev-banner.module.css";

export default function SwIntDevBanner() {
  return (
    <header className={`container-fluid ${styles.banner}`}>
      <div className="container text-center py-5">
        <h1 className={`fw-bold ${styles.heading}`}>
          Custom Software Integration Services
        </h1>
        <h3 className={`mb-4 ${styles.subheading}`}>Make all your tools and systems work together—seamlessly</h3>
        
        <button className={styles.consultBtn}>  
          Book Free Consultation
        </button>

        <p className={`mt-4 mx-auto ${styles.description}`}>
          Businesses today rely on many different tools: CRMs, ERPs, payment gateways, websites, mobile apps, databases, and more. We help you connect them all through custom software integration—so your systems talk to each other, save time, and reduce errors.
        </p>
      </div>
    </header>
  );
}
