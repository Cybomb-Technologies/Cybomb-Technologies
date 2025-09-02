import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  "Front End": ["Drupal 10", "Twig", "CKEditor"],
  "Back End": ["PHP", "Symfony", "MySQL", "Redis", "Varnish"],
  "APIs & Tools": ["JSON:API", "GraphQL", "REST","Composer", "Drush"],
  "Hosting & Modules": ["Cloud Platform", "ACSF","Multilingual modules"],
  "Security & DevOps": [
    "Security & CDN",
    "Drupal Security",
    "OWASP",
    "CI/CD",
    "Docker", 
    "Git workflows"
  ],
  "Marketing & Migration": [
    "Acquia DAM",
    "Acquia CDP",
    "Acquia Lift",
    "Acquia Migrate"
  ],
};

const techLogos = {
  "Drupal 10": "https://www.drupal.org/files/druplicon-small.png",
  Twig: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/twig-1.png",
  CKEditor: "https://www.tiny.cloud/images/tinymce-alternatives/ckeditor.png",
  PHP: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  Symfony: "https://www.vectorlogo.zone/logos/symfony/symfony-icon.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Redis: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  Varnish:
    "https://www.ibm.com/adobe/dynamicmedia/deliver/dm-aid--04c7efa9-3a4a-4296-a5c5-47cf210dc8e9/varnish.png?quality=90&preferwebp=true",
  "JSON:API":
    "https://techievor.com/api/image-uploads/posts/3790071e8b6bb276b56c6970c3230588.png",
  GraphQL:
    "https://www.magnolia-cms.com/dam/jcr:a594ac88-dbe5-4869-832e-eb9f48cf4540/___graphql-logo.5116048210338985968.png",
  REST: "https://www.iconpacks.net/icons/free-icons-6/free-rest-api-blue-logo-icon-22098-thumb.png",
  Composer:
    "https://images.seeklogo.com/logo-png/31/2/appgyver-composer-logo-png_seeklogo-317044.png",
  Drush:
    "https://programadorphp.es/wp-content/uploads/2014/02/drush_logo-black.png",
  "Cloud Platform":
    "https://www.vectorlogo.zone/logos/acquia/acquia-icon.svg",
  "ACSF":
    "https://dev.acquia.com/sites/default/files/2022-07/drop-site-factory.svg",
  "Multilingual modules":
    "https://cdn-icons-png.flaticon.com/512/5280/5280696.png",
  "Security & CDN":
    "https://www.acquia.com/sites/default/files/styles/text_with_floating_image_desktop/public/media/image/2023-04/Cloud%20IDE_Use%20Case%203_1_1.png?h=0ead8900&itok=87oiC95G",
  "Drupal Security":
    "https://www.drupal.org/files/issues/2024-08-04/shield_t.png",
  "OWASP":
    "https://owasp.org/www-project-devsecops-verification-standard/document/images/logo.svg",
  "CI/CD":
    "https://cdn-icons-png.flaticon.com/512/6213/6213369.png",
  Docker:
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png",
  "Git workflows": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  "Acquia DAM":
    "https://www.acquia.com/sites/default/files/styles/large/public/media/image/2023-08/Acquia%20DAM%20Logo_Integration.png?itok=y36XcB26",
  "Acquia CDP":
    "https://www.acquia.com/sites/default/files/styles/wysiwyg_full_no_crop_/public/media/image/2023-03/Line%20Art%20Testimonial%20Graphic_Pink%20and%20Orange.png?itok=swAqowns",
  "Acquia Lift":
    "https://anypoint.mulesoft.com/exchange/organizations/68ef9520-24e9-4cf2-b2f5-620025690913/assets/org.mule.modules/mule-module-acquia-lift-connector/icon/png/?sha=d183e82d72d2ab3a6ba26fd3ead57c821056f7eb",
  "Acquia Migrate":
    "https://www.acquia.com/sites/default/files/styles/large/public/media/image/2021-10/Acquia-CMS-Migrate-Logo-White-Insert_0.png?itok=DrLIW7E_",
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
