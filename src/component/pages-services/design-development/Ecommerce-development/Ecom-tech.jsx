import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";
import { Link } from "react-router-dom";

const techData = {
  Platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
  "Frontend": ["React", "Vue.js", "Angular", "HTML5", "JavaScript"],
  "Backend": ["Node.js", "PHP", "Python", "Ruby on Rails", ".NET"],
  "Payment Gateways": ["Stripe", "PayPal", "Razorpay", "Google Pay"],
  "Database": ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  "Hosting": ["Google Cloud", "Azure", "Netlify", "DigitalOcean"],
  "Marketing": ["Google Analytics", "Facebook Pixel", "Hotjar"]
};

const techLogos = {
  // Platforms
  "Shopify": "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  "WooCommerce": "https://cdn.worldvectorlogo.com/logos/woocommerce-1.svg",
  "Magento": "https://www.svgrepo.com/show/303592/magento-2-logo.svg",
  "BigCommerce": "https://www.vectorlogo.zone/logos/bigcommerce/bigcommerce-icon.svg",


  // Frontend Technologies
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

  // Backend Technologies
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Ruby on Rails": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
  ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",

  // Payment Gateways
  "Stripe": "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
  "PayPal": "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg",
  "Razorpay": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7XQpw0VPRRyLLR9iM-nrpdTWrmOyBl2bnA&s",
  "Google Pay": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png",

  // Database & Storage
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",

  // Hosting & Deployment
  "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Netlify": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
  "DigitalOcean": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",

  // Marketing & Analytics
  "Google Analytics": "https://cdn.worldvectorlogo.com/logos/google-analytics-3.svg",
  "Facebook Pixel": "https://cdn.worldvectorlogo.com/logos/facebook-4.svg",
  "Hotjar": "https://cdn.worldvectorlogo.com/logos/hotjar-2.svg",
  };

const techUrls = {
  // Platforms
  "Shopify": "/services/shopify",
  "WooCommerce": "/services/woo-commerce",
  "Magento": "/services/magento",
  "BigCommerce": "/services/big-commerce",

  // Frontend Technologies
  "React": "/services/react-development-service",
  "Vue.js": "/services/vuejs-development",
  "Angular": "/services/angular-development-service",
  "HTML5": "/services/html5-development-service",
  "JavaScript": "/services/javascript-development-service",

  // Backend Technologies
  "Node.js": "services/nodejs-development-service",
  "PHP": "services/php-development-service",
  "Python": "/services/python-development-service",
  "Ruby on Rails": "services/ror-development-service",
  ".NET": "/services/dotnet-development-service",

  // Payment Gateways
  "Stripe": "",
  "PayPal": "",
  "Razorpay": "",
  "Square": "",
  "Authorize.net": "",
  "2Checkout": "",

  // Database & Storage
  "MySQL": "/services/database-development-service",
  "PostgreSQL": "/services/database-development-service",
  "MongoDB": "/services/database-development-service",
  "Firebase": "/services/database-development-service",

  // Hosting & Deployment
  "Google Cloud": "/services/google-cloud",
  "Azure": "/services/azure-cloud",
  "Netlify": "/services/hosting-service",
  "DigitalOcean": "/services/hosting-service",

  // Marketing & Analytics
  "Google Analytics": "",
  "Facebook Pixel": "",
  "Mailchimp": "",
  "Klaviyo": "",
  "Hotjar": "",
  "Google Tag Manager": ""
};

const EcomTechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          E-commerce Development Technologies & Platforms
        </h2>

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
              to={techUrls[item] || "/ecommerce-development"}
              className="text-decoration-none"
            >
              <div className={styles.techCard}>
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

export default EcomTechToolsSection;