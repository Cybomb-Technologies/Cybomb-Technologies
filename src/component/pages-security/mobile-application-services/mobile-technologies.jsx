import React, { useState } from "react";
import styles from "../../common-ui/security/security-technologies.module.css";

const techData = {
  "Mobile App Protection": [
    "AppArmor",
    "OWASP Mobile Security Testing Guide (MSTG)",
    "ZAP Proxy",
    "Burp Suite"
  ],
  "Device & API Security": [
    "Mobile Device Management (MDM)",
    "Firebase App Check",
    "SSL Pinning",
    "Code Obfuscation Tools"
  ],
  "Data Protection": [
    "End-to-End Encryption",
    "Tokenization",
    "Secure Key Management",
    "Compliance-Ready Data Handling"
  ],
  "Compliance Standards": [
    "ISO 27001",
    "PCI-DSS",
    "HIPAA",
    "GDPR"
  ]
};

const techLogos = {
  "AppArmor": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/AppArmor_Logo.svg/2560px-AppArmor_Logo.svg.png",
  "OWASP Mobile Security Testing Guide (MSTG)": "https://owasp.org/assets/images/logo.png",
  "ZAP Proxy": "https://www.zaproxy.org/images/zap-logo.svg",
  "Burp Suite": "https://portswigger.net/burp/images/burp-icon-64x64.png",
  "Mobile Device Management (MDM)": "https://cdn-icons-png.flaticon.com/512/888/888859.png",
  "Firebase App Check": "https://firebase.google.com/static/images/brand-guidelines/logo-built_black.png",
  "SSL Pinning": "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  "Code Obfuscation Tools": "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
  "End-to-End Encryption": "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
  "Tokenization": "https://cdn-icons-png.flaticon.com/512/5910/5910760.png",
  "Secure Key Management": "https://cdn-icons-png.flaticon.com/512/179/179372.png",
  "Compliance-Ready Data Handling": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  "ISO 27001": "https://cdn-icons-png.flaticon.com/512/3176/3176367.png",
  "PCI-DSS": "https://cdn-icons-png.flaticon.com/512/2721/2721267.png",
  "HIPAA": "https://cdn-icons-png.flaticon.com/512/1090/1090923.png",
  "GDPR": "https://cdn-icons-png.flaticon.com/512/2965/2965278.png"
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Mobile App Security Stack</h2>

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

export default TechToolsSection;
