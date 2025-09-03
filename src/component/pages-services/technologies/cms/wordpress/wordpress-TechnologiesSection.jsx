import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  "Front End": ["Drupal 10", "Twig", "CKEditor"],
  "Back End": ["PHP", "Symfony", "MySQL", "Redis", "Varnish"],
  APIs: ["JSON:API", "GraphQL", "REST"],
  Tools: ["Composer", "Drush"],
  Hosting: ["Acquia Cloud", "Pantheon", "Platform.sh"],
  Modules: ["Multilingual modules"],
  Security: ["Drupal Security", "OWASP standards"],
  DevOps: ["CI/CD", "Docker", "Git workflows"],
};

const techLogos = {
  "Drupal 10": "https://www.drupal.org/files/druplicon-small.png",
  Twig: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/twig-1.png",
  CKEditor:
    "https://cdn.worldvectorlogo.com/logos/ckeditor-2.svg",
  PHP: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  Symfony: "https://www.vectorlogo.zone/logos/symfony/symfony-icon.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Redis: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  Varnish:
    "https://images.icon-icons.com/2699/PNG/512/varnish_software_logo_icon_169293.png",
  "JSON:API":
    "https://www.svgrepo.com/show/503398/language-json.svg",
  GraphQL:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",

  REST: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJoxiAXVIxedd5WnxL3yepJpACK2lmCSl9w&s",
  Composer:
    "https://www.svgrepo.com/show/374259/composer-opened.svg",
  Drush:
    "https://avatars.githubusercontent.com/u/931201?s=280&v=4",
  "Acquia Cloud": "https://www.vectorlogo.zone/logos/acquia/acquia-icon.svg",
  Pantheon: "https://avatars.githubusercontent.com/u/62953125?v=4",
  "Platform.sh":
    "https://platform.sh/platform-logos/icons/black/Platformsh_Icon_black.png",
  "Multilingual modules":
    "https://cdn-icons-png.freepik.com/256/4983/4983962.png?semt=ais_white_label",
  "Drupal Security":
    "https://www.drupal.org/files/cta_multiple/cta_graphic/Security.svg",
  "OWASP standards":
    "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/owasp-31nws7v8m3nvamfvza9koq.png/owasp-ykjifjb8kusnnarhfxcbf.png?_a=DATAg1AAZAA0",
  "CI/CD":
    "https://www.svgrepo.com/show/372275/ci-cd.svg",
  Docker:
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png",
  "Git workflows": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
};

const WordPressTechnologiesSection = () => {
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

export default WordPressTechnologiesSection;
