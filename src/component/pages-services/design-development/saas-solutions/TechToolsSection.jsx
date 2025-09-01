import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const techData = {
  Frontend: ["React.js", "Angular", "Vue.js", "Tailwind CSS"],
  Backend: ["Node.js", "Python (Django/Flask)", "Laravel", "Ruby on Rails"],
  Databases: ["PostgreSQL", "MongoDB", "Firebase"],
  Cloud: ["AWS", "Azure", "Google Cloud"],
  DevOps: ["Docker", "GitHub Actions", "Jenkins", "CI/CD pipelines"],
  Payments: ["Stripe", "Razorpay", "PayPal", "Chargebee"],
  APIs: ["REST", "GraphQL", "Webhooks", "OAuth2"],
};

const techLogos = {
  // Frontend
  "React.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Vue.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Tailwind CSS": "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",

  // Backend
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Python (Django/Flask)":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Laravel: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
  "Ruby on Rails":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",

  // Databases
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",

  // Cloud
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  Azure:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Google Cloud":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",

  // DevOps
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "GitHub Actions":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
  Jenkins:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "CI/CD pipelines":
    "https://arrowcore.com/wp-content/uploads/2022/03/3.8-768x500-c-default.png",

  // Payments
  Stripe: "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg",
  Razorpay:
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/razorpay-icon.png",
  PayPal:
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paypal-icon.png",
  Chargebee:
    "https://cdn.brandfetch.io/idqx2Y_n5J/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",

  // APIs
  REST: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  GraphQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  Webhooks:
    "https://images.seeklogo.com/logo-png/27/2/webhooks-logo-png_seeklogo-274079.png",
  OAuth2: "https://www.svgrepo.com/show/354135/oauth.svg",
};

const TechToolsSection = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies & Tools</h2>

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

export default TechToolsSection;
