import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  "Languages & Tools": ["PHP", "Symfony", "MySQL", "Redis", "Varnish", "Twig"],
  Platforms: ["Drupal 10", "Acquia Cloud", "Pantheon", "Platform.sh"],
  Integrations: [
    "CKEditor",
    "JSON:API",
    "GraphQL",
    "REST APIs",
    "Multilingual modules",
  ],
  Security: ["Drupal Security", "OWASP"],
  "DevOps & CI/CD": ["Composer", "Drush", "CI/CD", "Docker", "Git workflows"],
};

const techLogos = {
  PHP: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  Symfony: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3T5REf3amW1_qeMCStmfl4veQzUAtZ16DA&s",
  MySQL: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  Redis: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  Varnish:
    "https://images.icon-icons.com/2699/PNG/512/varnish_software_logo_icon_169293.png",
  Twig: "https://twig.symfony.com/images/logo.png",

  "Drupal 10": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1LVwmNoJSzxWmQc7jvUlpHxrV1QhAw2j7A&s",
  "Acquia Cloud": "https://www.vectorlogo.zone/logos/acquia/acquia-icon.svg",
  Pantheon:
    "https://webtheme.brand.ucsb.edu/sites/default/files/images/icons/pantheon-logo-sm.png",
  "Platform.sh":
    "https://platform.sh/platform-logos/icons/black/Platformsh_Icon_black.png",

  CKEditor:
    "https://cdn.worldvectorlogo.com/logos/ckeditor-2.svg",
  "JSON:API": "https://www.svgrepo.com/show/503398/language-json.svg",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "REST APIs":
    "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  "Multilingual modules":
    "https://cdn-icons-png.flaticon.com/512/6313/6313876.png",

  "Drupal Security":
    "https://www.drupal.org/files/cta_multiple/cta_graphic/Security.svg",
  "OWASP":
    "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/owasp-31nws7v8m3nvamfvza9koq.png/owasp-ykjifjb8kusnnarhfxcbf.png?_a=DATAg1AAZAA0",

  Composer: "https://getcomposer.org/img/logo-composer-transparent2.png",
  Drush:
    "https://avatars.githubusercontent.com/u/931201?s=280&v=4",
  "CI/CD": "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  Docker: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  "Git workflows": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
};

const DrupalTechnologiesSection = () => {
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

export default DrupalTechnologiesSection;
