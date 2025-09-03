import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  "CMS & Extensions": [
    "Joomla",
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
  "Joomla":
    "https://www.vectorlogo.zone/logos/joomla/joomla-icon.svg",
  Virtuemart:
    "https://dev.virtuemart.net/attachments/download/4/cart_logo_blue_big.png",
  JomSocial:
    "https://avatars.githubusercontent.com/u/503691?s=200&v=4",
  K2: "https://images.seeklogo.com/logo-png/30/3/k2-logo-png_seeklogo-300339.png",
  PHP: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  JavaScript:
    "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  HTML5: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  CSS3: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
  jQuery: "https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg",
  MySQL: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  PostgreSQL:
    "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  Docker:
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png",

  Git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  "CI/CD pipelines":
    "https://www.svgrepo.com/show/372275/ci-cd.svg",
  Shared:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-oiejaxXDgbUhqevbz0CcLNk6z2s1etc9zA&s",
  VPS: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPTK6EHkNXRpuQxX-R2oYFDCUjf5bSeDOkQ&s",
  "Dedicated servers":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbC0cGos0yi91g1RZAHJweTleTmRNrHWl8lQ&s",
  AWS: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
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
