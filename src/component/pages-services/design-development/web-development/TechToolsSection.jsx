import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";
import { Link } from "react-router-dom";

const techData = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
  Frameworks: ["React", "Next.js", "Vue.js", "jQuery"],
  "CMS Platforms": ["WordPress", "Webflow", "Ghost", "Strapi"],
  eCommerce: ["WooCommerce", "Shopify", "BigCommerce"],
  Backend: ["Node.js", "PHP", "Python", "MySQL", "MongoDB"],
  Hosting: ["Vercel", "Netlify", "Hostinger", "AWS", "GoDaddy", "GitHub Pages"],
  "Design Tools": ["Figma", "Adobe XD", "Photoshop", "Canva"],
};

const techLogos = {
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS": "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Vue.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  jQuery:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  WordPress:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  Webflow:
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/webflow-icon.png",
  Ghost: "https://www.engineered-mind.com/content/images/2022/11/ghost.png",
  Strapi:
    "https://platform.sh/static/strapi-stack_black@2x-07109cdae9f760e8d97c89788c9dc9df.png",
  WooCommerce:
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/woocommerce-icon.png",
  Shopify: "https://cdn.shopify.com/static/images/logos/shopify-bag.png",
  BigCommerce: "https://www.svgrepo.com/show/330049/bigcommerce.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Vercel:
    "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico",
  Netlify: "https://www.netlify.com/v3/static/favicon/apple-touch-icon.png",
  Hostinger: "https://cdn.worldvectorlogo.com/logos/hostinger.svg",
  AWS: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png",
  GoDaddy:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/GoDaddy_logo.svg/1200px-GoDaddy_logo.svg.png?20250508095437",
  "GitHub Pages": "https://github.githubassets.com/favicons/favicon.svg",
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Adobe XD":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
  Photoshop:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
  Canva: "https://static.canva.com/static/images/favicon.ico",
};

const techUrls = {
  HTML5: "/services/html5-development-service",
  CSS3: "",
  JavaScript: "/services/javascript-development-service",
  Bootstrap: "",
  "Tailwind CSS": "",
  React: "",
  "Next.js": "/services/javascript-development-service",
  "Vue.js": "/services/javascript-development-service",
  jQuery: "/services/javascript-development-service",
  WordPress: "/services/wordpress",
  Webflow: "",
  Ghost: "",
  Strapi: "",
  WooCommerce: "/services/woo-commerce",
  Shopify: "/services/shopify",
  BigCommerce: "/services/big-commerce",
  "Node.js": "/services/nodejs-development-service",
  PHP: "/services/php-development-service",
  Python: "/services/python-development-service",
  MySQL: "",
  MongoDB: "",
  Vercel: "",
  Netlify: "",
  Hostinger: "",
  AWS: "/hosting/aws",
  GoDaddy: "",
  "GitHub Pages": "",
  Figma: "/services/ui-ux-design",
  "Adobe XD": "/services/ui-ux-design",
  Photoshop: "/services/ui-ux-design",
  Canva: "/services/ui-ux-design",
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Website Development Technologies</h2>

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
            <Link
              key={item}
              to={techUrls[item]}
              className="text-decoration-none"
            >
              <div key={item} className={styles.techCard}>
                <img
                  src={techLogos[item]}
                  alt={`${item} logo`}
                  className={styles.logo}
                />
                <span>{item}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechToolsSection;
