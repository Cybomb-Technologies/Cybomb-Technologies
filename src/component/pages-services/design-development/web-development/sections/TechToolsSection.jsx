import React, { useState } from "react";
import styles from "./TechToolsSection.module.css";

const techData = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
  Frameworks: ["React", "Next.js", "Vue.js", "jQuery"],
  "CMS Platforms": ["WordPress", "Webflow", "Ghost", "Strapi"],
  eCommerce: ["WooCommerce", "Shopify", "BigCommerce"],
  Backend: ["Node.js", "PHP", "Python", "MySQL", "MongoDB"],
  Hosting: ["Vercel", "Netlify", "Hostinger", "AWS", "GoDaddy", "GitHub Pages"],
  "Design Tools": ["Figma", "Adobe XD", "Photoshop", "Canva"]
};

const logoCDN = {
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  jQuery: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  WordPress: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  Webflow: "https://uploads-ssl.webflow.com/favicon.ico",
  Ghost: "https://static.ghost.org/v4.0.0/images/ghost-logo.svg",
  Strapi: "https://avatars.githubusercontent.com/u/37021919",
  WooCommerce: "https://woocommerce.com/wp-content/themes/woo/images/logos/woocommerce-logo.svg",
  Shopify: "https://cdn.shopify.com/static/images/logos/shopify-bag.png",
  BigCommerce: "https://www.bigcommerce.com/assets/svg/big-commerce-logo.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Vercel: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico",
  Netlify: "https://www.netlify.com/v3/static/favicon/apple-touch-icon.png",
  Hostinger: "https://www.hostinger.com/assets/favicon.ico",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  GoDaddy: "https://img.icons8.com/ios-filled/50/000000/godaddy.png",
  "GitHub Pages": "https://github.githubassets.com/favicons/favicon.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Adobe XD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
  Photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
  Canva: "https://static.canva.com/static/images/favicon.ico"
};

const SoftwareTechnologies = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies &amp; Tools We Use</h2>

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

        <div className={styles.cardGrid}>
          {techData[selected].map((tech) => (
            <div key={tech} className={styles.techCard}>
              <img
                src={logoCDN[tech]}
                alt={`${tech} logo`}
                className={styles.techLogo}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareTechnologies;
