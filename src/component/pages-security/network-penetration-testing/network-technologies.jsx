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
  "Nessus": "https://www.svgrepo.com/show/331601/tenable.svg",
  "OpenVAS": "https://miro.medium.com/v2/resize:fit:954/0*fkutkGRXJIjVR9NF.png",
  "Advanced IP Scanner": "https://www.advanced-ip-scanner.com/favicon.ico",
  "Qualys": "https://usehalo.com/wp-content/uploads/2024/11/qualys-emblem.png",
  "Rapid7 Nexpose": "https://www.rapid7.com/_next/static/media/rapid7-logo.cd245920.svg",
  "Acunetix": "https://cyberton.ae/wp-content/uploads/2020/03/Acunetix_Insignia_LowRes_PNG-212x300.png",
  "Burp Suite": "https://www.svgrepo.com/show/454430/burpsuite-security-software.svg",
  "Metasploit Framework": "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/metasploit-h33wivgvlvgtk3wmoejxq.png/metasploit-rkuireddk3p5vdgf5mil5.png?_a=DATAg1AAZAA0",
  "Cobalt Strike": "https://www.pikpng.com/pngl/b/446-4465819_cobalt-strike-logo-cobalt-strike-clipart.png",
  "SQLmap": "https://www.svgrepo.com/show/438985/sql.svg",
  "Hydra": "https://images.seeklogo.com/logo-png/32/1/hydra-marvel-agents-of-shield-logo-png_seeklogo-327702.png",
  "OWASP Guidelines": "https://owasp.org/assets/images/logo.png",
  "PTES Standards": "https://i0.wp.com/version-2.com.tw/wp-content/uploads/2022/08/Ptes.png?fit=300%2C200&ssl=1",
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
