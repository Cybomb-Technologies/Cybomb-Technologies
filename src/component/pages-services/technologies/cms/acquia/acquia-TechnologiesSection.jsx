import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  "Front End": ["Drupal 10", "Twig", "CKEditor"],
  "Back End": ["PHP", "Symfony", "MySQL", "Redis", "Varnish"],
  APIs: ["JSON:API", "GraphQL", "REST"],
  Tools: ["Composer", "Drush"],
  Hosting: ["Acquia Cloud Platform", "Acquia Cloud Site Factory (ACSF)"],
  Modules: ["Multilingual modules (Locale, Content Translation)"],
  Security: [
    "Acquia Edge Security & CDN",
    "Drupal Security Advisories",
    "OWASP standards",
  ],
  DevOps: ["CI/CD", "Docker", "Git workflows"],
  "Acquia Marketing & Experience": [
    "Acquia DAM (Digital Asset Management)",
    "Acquia CDP (Customer Data Platform)",
    "Acquia Personalization (Lift)",
  ],
  "Acquia Migration & Development": ["Acquia Migrate & Site Studio"],
};

const techLogos = {
  "Drupal 10": "https://www.drupal.org/files/drupal-sq.png",
  Twig: "https://www.vectorlogo.zone/logos/twigproject/twigproject-icon.svg",
  CKEditor: "https://www.vectorlogo.zone/logos/ckeditor/ckeditor-icon.svg",
  PHP: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  Symfony: "https://www.vectorlogo.zone/logos/symfony/symfony-icon.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Redis: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  Varnish:
    "https://www.vectorlogo.zone/logos/varnishcache/varnishcache-icon.svg",
  "JSON:API": "https://www.drupal.org/files/jsonapi.png",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  REST: "https://www.vectorlogo.zone/logos/rest/rest-icon.svg",
  Composer:
    "https://www.vectorlogo.zone/logos/getcomposer/getcomposer-icon.svg",
  Drush: "https://www.drupal.org/files/drush_logo.png",
  "Acquia Cloud Platform":
    "https://www.acquia.com/sites/default/files/acquia-logo-black.png",
  "Acquia Cloud Site Factory (ACSF)":
    "https://www.acquia.com/sites/default/files/acquia-logo-black.png",
  "Acquia Edge Security & CDN":
    "https://www.acquia.com/sites/default/files/acquia-logo-black.png",
  "Drupal Security Advisories":
    "https://www.drupal.org/files/drupal_security_lock.png",
  "OWASP standards": "https://www.owasp.org/images/0/02/Owasp-logo-sm.png",
  "CI/CD":
    "https://www.drupal.org/files/styles/grid-2-2x/public/project-images/GitLab-CI.png?itok=yT5B7f7L",
  Docker: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  "Git workflows": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  "Acquia DAM (Digital Asset Management)":
    "https://www.acquia.com/sites/default/files/acquia-logo-black.png",
  "Acquia CDP (Customer Data Platform)":
    "https://www.acquia.com/sites/default/files/acquia-logo-black.png",
  "Acquia Personalization (Lift)":
    "https://www.acquia.com/sites/default/files/acquia-logo-black.png",
  "Acquia Migrate & Site Studio":
    "https://www.acquia.com/sites/default/files/acquia-logo-black.png",
};

const AcquiaTechnologiesSection = () => {
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

export default AcquiaTechnologiesSection;
