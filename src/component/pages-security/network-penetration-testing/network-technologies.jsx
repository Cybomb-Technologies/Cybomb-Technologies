import React, { useState } from "react";
import styles from "../../common-ui/security/security-technologies.module.css";

const techData = {
  "Network Scanning & Mapping": [
    "Nmap",
    "Nessus",
    "OpenVAS",
    "Advanced IP Scanner"
  ],
  "Vulnerability Assessment": [
    "Qualys",
    "Rapid7 Nexpose",
    "Acunetix",
    "Burp Suite"
  ],
  "Exploitation Tools": [
    "Metasploit Framework",
    "Cobalt Strike",
    "SQLmap",
    "Hydra"
  ],
  "Reporting & Compliance": [
    "OWASP Guidelines",
    "PTES Standards",
    "ISO 27001",
    "PCI-DSS"
  ]
};

const techLogos = {
  "Nmap": "https://nmap.org/images/nmap-logo-256x256.png",
  "Nessus": "https://www.tenable.com/sites/drupal.dmz.tenablesecurity.com/files/images/press-kit/Tenable_Logo_RGB.svg",
  "OpenVAS": "https://www.openvas.org/images/openvas-logo.png",
  "Advanced IP Scanner": "https://www.advanced-ip-scanner.com/favicon.ico",
  "Qualys": "https://www.qualys.com/favicon.ico",
  "Rapid7 Nexpose": "https://www.rapid7.com/globalassets/_logos/rapid7-logo.png",
  "Acunetix": "https://www.acunetix.com/wp-content/themes/acunetix/favicon.ico",
  "Burp Suite": "https://portswigger.net/favicon.ico",
  "Metasploit Framework": "https://www.metasploit.com/favicon.ico",
  "Cobalt Strike": "https://www.cobaltstrike.com/favicon.ico",
  "SQLmap": "https://sqlmap.org/favicon.ico",
  "Hydra": "https://www.kali.org/tools/hydra/images/kali-hydra-logo.svg",
  "OWASP Guidelines": "https://owasp.org/assets/images/logo.png",
  "PTES Standards": "https://ptes.org/favicon.ico",
  "ISO 27001": "https://cdn-icons-png.flaticon.com/512/3039/3039436.png",
  "PCI-DSS": "https://cdn-icons-png.flaticon.com/512/2721/2721267.png"
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Network Penetration Testing Tools</h2>

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
