import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  "Pantheon Platform": ["Dev/Test/Live workflows", "Multidev environments"],
  Core: ["Drupal Core", "WordPress Core"],
  "Languages & Databases": ["PHP", "MySQL", "Git"],
  "Advanced Caching & CDN": ["Varnish", "Fastly"],
  "Security Tools": ["HTTPS", "WAF", "Two-Factor Auth"],
  "CI/CD": ["GitHub Actions", "CircleCI"],
};

const techLogos = {
  "Dev/Test/Live workflows":
    "https://www.svgrepo.com/show/298786/workflow.svg",
  "Multidev environments":
    "https://static.vecteezy.com/system/resources/previews/021/804/561/non_2x/dev-environment-icon-style-vector.jpg",
  "Drupal Core":
    "https://upload.wikimedia.org/wikipedia/commons/7/75/Druplicon.vector.svg",
  "WordPress Core":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAxIzs2yRTPxONA1yBwMZdhkNwlqmIpxFug&s",
  PHP: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png?20180502235434",
  MySQL:
    "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
  Git: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  Varnish:
    "https://images.icon-icons.com/2699/PNG/512/varnish_software_logo_icon_169293.png",
  Fastly:
    "https://companieslogo.com/img/orig/FSLY-48251d1d.png?t=1742791628",

  HTTPS:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzc78a9x_QrhfwqMzIHgCf2mEMduw7mmwgOw&s",
  WAF: "https://icons.veryicon.com/png/o/miscellaneous/2022-complete-collection-of-alibaba-cloud/waf-web-application-firewall-2.png",
  "Two-Factor Auth":
    "https://www.svgrepo.com/show/341233/two-factor-authentication.svg",
  "GitHub Actions":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nNZVxrqmSMQnNMDKHdTkNFOxPkYUA0HZUA&s",
  "CircleCI":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Circleci-icon-logo.svg/2028px-Circleci-icon-logo.svg.png",
};

const PantheonTechnologiesSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies We Use</h2>

        {/* Tabs */}
        <div className={styles.tabWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${
                selected === cat ? styles.activeTab : ""
              }`}
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

export default PantheonTechnologiesSection;
