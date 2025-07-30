import React from 'react';
import styles from './Weoffer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weoffer() {
  return (
    <div className={`${styles.weOfferSection} py-5`}>
      <div className="container p-5 rounded" style={{backgroundColor:"#FFFFFF"}}>
        <h2 className={`${styles.sectionTitle} text-center mb-5`}>Custom E-commerce Website Development</h2>
        
        <div className="row">
          {/* Feature 1 */}
          <div className="col-md-4 col-lg-6 mb-4">
            <div className={`${styles.featureCard} h-100 p-4`}>
              <h3 className={styles.featureTitle}>Product Management & Catalog Setup</h3>
              <p className={styles.featureDescription}>
                Mobile-first designs that feel intuitive and look stunning on all screen sizes
              </p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="col-md-4 col-lg-6 mb-4">
            <div className={`${styles.featureCard} h-100 p-4`}>
              <h3 className={styles.featureTitle}>Mobile-Friendly & Responsive Design</h3>
              <p className={styles.featureDescription}>
                Build specifically for the Apple App Store or Google Play using Swift, Kotlin, or Java
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="col-md-4 col-lg-6 mb-4">
            <div className={`${styles.featureCard} h-100 p-4`}>
              <h3 className={styles.featureTitle}>Shopping Cart & Checkout System</h3>
              <p className={styles.featureDescription}>
                One codebase, multiple platforms—using Flutter or React Native
              </p>
            </div>
          </div>
        </div>
        
        <p className={`${styles.subHeading} text-center mt-4`}>
          Native or cross-platform apps built to meet your business goals and user needs
        </p>
      </div>
    </div>
  );
}

export default Weoffer;