import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  "Languages": ["Swift", "Objective‑C", "Cocoa frameworks"],
  "UI": ["SwiftUI & UIKit hybrid"],
  "Apple SDKs": ["MapKit", "ARKit", "CloudKit", "CoreData", "Siri", "HealthKit", "CoreML", "CoreGraphics"],
  "Tools":["Xcode","SwiftPM", "CocoaPods/Carthage"]
};

const techLogos = {
  "Languages": {
    "Swift": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
    "Objective‑C": "https://upload.wikimedia.org/wikipedia/commons/3/34/Objective-C_Logo.png",
    "Cocoa frameworks": "https://developer.apple.com/assets/elements/icons/appkit/appkit-96x96_2x.png"
  },

  "UI": {
    "SwiftUI & UIKit hybrid": "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png"
  },

  "Apple SDKs": {
    "MapKit": "https://developer.apple.com/assets/elements/icons/mapkit/mapkit-96x96_2x.png",
    "ARKit": "https://developer.apple.com/assets/elements/icons/arkit/arkit-96x96_2x.png",
    "CloudKit": "https://developer.apple.com/assets/elements/icons/cloudkit/cloudkit-96x96_2x.png",
    "CoreData": "https://developer.apple.com/assets/elements/icons/core-data/core-data-96x96_2x.png",
    "Siri": "https://developer.apple.com/assets/elements/icons/siri/siri-96x96_2x.png",
    "HealthKit": "https://developer.apple.com/assets/elements/icons/healthkit/healthkit-96x96_2x.png",
    "CoreML": "https://developer.apple.com/assets/elements/icons/coreml/coreml-96x96_2x.png",
    "CoreGraphics": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Core_Graphics_logo.png"
  },

  "Tools": {
    "Xcode": "https://developer.apple.com/assets/elements/icons/xcode/xcode-96x96_2x.png",
    "SwiftPM": "https://swiftpackageindex.com/assets/symbols/spi-package.svg",
    "CocoaPods/Carthage": "https://raw.githubusercontent.com/CocoaPods/shared_resources/master/logo/cocoapods-logo.svg"
  }
};


const SwiftTechnologiesSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies and Development </h2>

        {/* Tabs */}
        <div className={styles.tabWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${selected === cat ? styles.activeTab : ""}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className={styles.cardGrid}>
          {techData[selected].map((item) => (
            <div key={item} className={styles.techCard}>
              <img
                src={techLogos[item]}
                alt={`${item} logo`}
                className={styles.logo}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default SwiftTechnologiesSection;
