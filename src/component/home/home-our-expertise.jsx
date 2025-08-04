import React, { useState } from "react";
import styles from "./home-our-expertise.module.css";

const techData = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
  Frameworks: ["React", "Vue.js", "Angular", "Next.js", "Svelte"],
  "CMS Platforms": ["WordPress", "Webflow", "Drupal", "Ghost", "Strapi"],
  eCommerce: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Ecwid"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "PHP", "Python Django"],
  Hosting: ["Vercel", "Netlify", "Hostinger", "AWS", "DigitalOcean"],
  "Design Tools": ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"]
};

const techImages = {
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Svelte": "https://cdn.worldvectorlogo.com/logos/svelte-1.svg",
  "WordPress": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  "Webflow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg",
  "Drupal": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
  "Ghost": "https://ghost.org/favicon.svg",
  "Strapi": "https://strapi.io/assets/strapi-logo-dark.svg",
  "Shopify": "https://cdn.shopify.com/assets/images/logos/shopify-bag.png",
  "WooCommerce": "https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-logo.png",
  "Magento": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
  "BigCommerce": "https://simpleicons.org/icons/bigcommerce.svg",
  "Ecwid": "https://www.ecwid.com/favicon.ico",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Python Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "Vercel": "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png",
  "Netlify": "https://www.netlify.com/v3/img/components/logomark.png",
  "Hostinger": "https://upload.wikimedia.org/wikipedia/commons/6/61/Hostinger_logo_black.svg",
  "AWS": "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png",
  "DigitalOcean": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Adobe XD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
  "Photoshop": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  "Illustrator": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  "Canva": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
};

function HomeOurExpertise() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies &amp; Tools We Use</h2>

        {/* Tabs */}
        <div className={styles.tabWrapper}>
          {Object.keys(techData).map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className={styles.cardGrid}>
          {techData[activeTab].map((tech) => (
            <div key={tech} className={styles.techCard}>
              <img
                src={techImages[tech]}
                alt={tech}
                className={styles.logo}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/40?text=Tech";
                }}
              />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeOurExpertise;
