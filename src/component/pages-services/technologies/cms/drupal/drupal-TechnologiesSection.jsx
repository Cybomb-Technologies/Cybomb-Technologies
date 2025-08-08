import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  "Languages & Tools": [
    "PHP", "Symfony", "MySQL", "Redis", "Varnish", "Twig"
  ],
  "Platforms": [
    "Drupal 10", "Acquia Cloud", "Pantheon", "Platform.sh"
  ],
  "Integrations": [
    "CKEditor", "JSON:API", "GraphQL", "REST APIs",
    "Multilingual modules (Locale, Content Translation)"
  ],
  "Security": [
    "Drupal Security Advisories", "OWASP standards"
  ],
  "DevOps & CI/CD": [
    "Composer", "Drush", "CI/CD", "Docker", "Git workflows"
  ]
};

const techLogos = {
  PHP: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  Symfony: "https://symfony.com/logos/symfony_black_03.svg",
  MySQL: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  Redis: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  Varnish: "https://www.varnish-software.com/themes/custom/varnish/logo.svg",
  Twig: "https://twig.symfony.com/images/logo.png",

  "Drupal 10": "https://www.drupal.org/files/Wordmark_blue_RGB.png",
  "Acquia Cloud": "https://www.vectorlogo.zone/logos/acquia/acquia-icon.svg",
  Pantheon: "https://pantheon.io/sites/default/files/pantheon-icon-black.svg",
  "Platform.sh": "https://www.vectorlogo.zone/logos/platformsh/platformsh-icon.svg",

  CKEditor: "https://ckeditor.com/docs/ckeditor5/latest/assets/img/ck_logo.svg",
  "JSON:API": "https://jsonapi.org/images/jsonapi.png",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  "REST APIs": "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  "Multilingual modules (Locale, Content Translation)": "https://www.vectorlogo.zone/logos/google_translate/google_translate-icon.svg",

  "Drupal Security Advisories": "https://www.drupal.org/files/drupal-security.svg",
  "OWASP standards": "https://www.vectorlogo.zone/logos/owasp/owasp-icon.svg",

  Composer: "https://getcomposer.org/img/logo-composer-transparent2.png",
  Drush: "https://drush.org/logo.png",
  "CI/CD": "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  Docker: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  "Git workflows": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
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
