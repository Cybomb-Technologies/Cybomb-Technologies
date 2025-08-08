import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  "CMS & Extensions": [
    "Joomla (latest versions)",
    "Virtuemart",
    "JomSocial",
    "K2",
  ],
  Languages: ["PHP", "JavaScript", "HTML5", "CSS3", "jQuery"],
  Databases: ["MySQL", "PostgreSQL"],
  DevOps: ["Docker", "Git", "CI/CD pipelines"],
  Hosting: ["Shared", "VPS", "Dedicated servers", "AWS", "DigitalOcean"],
};

const techLogos = {
  "Joomla (latest versions)":
    "https://www.vectorlogo.zone/logos/joomla/joomla-icon.svg",
  Virtuemart: "https://virtuemart.net/images/vm_logo.png",
  JomSocial:
    "https://www.jomsocial.com/media/com_jomsocial/images/logo_icon.png",
  K2: "https://getk2.org/media/k2_logo.png",
  PHP: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  JavaScript:
    "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  HTML5: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  CSS3: "https://www.vectorlogo.zone/logos/w3_css3/w3_css3-icon.svg",
  jQuery: "https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg",
  MySQL: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  PostgreSQL:
    "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  Docker: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  Git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  "CI/CD pipelines": "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg",
  Shared: "https://www.hostinger.in/static/svg/shared-hosting-icon.svg",
  VPS: "https://www.hostinger.in/static/svg/vps-hosting-icon.svg",
  "Dedicated servers":
    "https://www.hostinger.in/static/svg/dedicated-hosting-icon.svg",
  AWS: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  DigitalOcean:
    "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg",
};

const JoomlaTechnologiesSection = () => {
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

export default JoomlaTechnologiesSection;
