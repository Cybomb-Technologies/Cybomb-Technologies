import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";
import { Link } from "react-router-dom";
 
const techData = {
  Platforms: ["Android", "iOS", "Flutter", "React Native"],
  Languages: ["Swift", "Kotlin", "Dart", "React Native"],
  Frameworks: ["Flutter", "React Native", "SwiftUI", "Jetpack Compose"],
  Backend: ["Swift", "Kotlin", "Dart", "JavaScript"],
  APIs: ["Node.js", "Firebase", "MongoDB", "Express.js", "Django"],
  Tools: ["Figma", "GitHub", "Postman"],
  Testing: ["Android Emulator", "Xcode Simulator", "BrowserStack", "Detox", "Appium"],
};

const techLogos = {
  Android: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  iOS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  Native: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

  Swift: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  SwiftUI: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png",
  "Jetpack Compose": "https://logo.svgcdn.com/d/jetpackcompose-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Postman: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.svg",
  "Android Emulator": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  "Xcode Simulator": "https://developer.apple.com/assets/elements/icons/xcode/xcode-96x96_2x.png",
  BrowserStack: "https://logo.svgcdn.com/l/browserstack.svg",
  Detox: "https://wix.github.io/Detox/img/logo.png",
  Appium: "https://logo.svgcdn.com/l/appium.svg",
};

const techUrls = {
  Android: "/services/android-app-development",
  iOS: "/services/ios-app-development",
  Flutter: "/services/flutter-app-development",
  "React Native": "/services/react-native-development",
  Swift: "/services/swift-app-development",
  Kotlin: "/services/kotlin-app-development",
  Dart: "/services/flutter-app-development", // add section
  SwiftUI: "/services/swift-app-development",
  "Jetpack Compose": "/services/android-app-development", // add section
  JavaScript: "/services/nodejs-development-service",
  "Node.js": "/services/javascript-development-service",
  Firebase: "",
  MongoDB: "",
  "Express.js": "/services/javascript-development-service",  // add section
  Django: "",
  Figma: "/services/ui-ux-design",  // add section
  GitHub: "", 
  Postman: "",
  "Android Emulator": "/services/android-app-development",  // add section
  "Xcode Simulator": "/services/ios-app-development",  // add section
  BrowserStack: "",
  Detox: "",
  Appium: "",
};

 
const MobileAppTechnologiesSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

return (
      <section className={styles.section}>
      <div className={styles.container}>
      <h2 className={styles.title}>Mobile App Development Technologies</h2>
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
           <Link 
              key={item} 
              to={techUrls[item]} 
              className="text-decoration-none"
            >
              <div className={styles.techCard}>
                <img
                  src={techLogos[item]}
                  alt={`${item} logo`}
                  className={styles.logo}
                />
                <span>{item}</span>
              </div>
          </Link>
          ))}
      </div>
    </div>
  </section>

  );

};
 
export default MobileAppTechnologiesSection;
 

// import React, { useState } from "react";
// import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

// const techData = {
//   Languages: ["Swift", "Kotlin", "Dart", "React Native"],
//   Frameworks: ["Flutter", "React Native", "SwiftUI", "Jetpack Compose"],
//   Backend: ["Swift", "Kotlin", "Dart", "JavaScript"],
//   APIs: ["Node.js", "Firebase", "MongoDB", "Express.js", "Django"],
//   Tools: ["Figma", "GitHub", "Postman"],
//   Testing: ["Android Emulator", "Xcode Simulator", "BrowserStack", "Detox", "Appium"],
// };

// const techLogos = {
//   Swift: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
//   Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
//   Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
//   "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
//   SwiftUI: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png",
//   "Jetpack Compose": "https://logo.svgcdn.com/d/jetpackcompose-original.svg",
//   JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//   "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//   Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
//   MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//   "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//   Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
//   Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//   GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//   Postman: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.svg",
//   "Android Emulator": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
//   "Xcode Simulator": "https://developer.apple.com/assets/elements/icons/xcode/xcode-96x96_2x.png",
//   BrowserStack: "https://logo.svgcdn.com/l/browserstack.svg",
//   Detox: "https://wix.github.io/Detox/img/logo.png",
//   Appium: "https://logo.svgcdn.com/l/appium.svg",
// };

// const MobileAppTechnologiesSection = () => {
//   const categories = Object.keys(techData);
//   const [selected, setSelected] = useState(categories[0]);

//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Mobile App Development Technologies</h2>

//         {/* Tabs */}
//         <div className={styles.tabWrapper}>
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`${styles.tab} ${selected === cat ? styles.activeTab : ""}`}
//               onClick={() => setSelected(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Tech Cards */}
//         <div className={styles.cardGrid}>
//           {techData[selected].map((item) => (
//             <div key={item} className={styles.techCard}>
//               <img
//                 src={techLogos[item]}
//                 alt={`${item} logo`}
//                 className={styles.logo}
//               />
//               <span>{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MobileAppTechnologiesSection;
