import React, { useState } from "react";
import styles from "./TechToolsSection.module.css";

const techData = {
  Protocols: ["REST API", "GraphQL", "Webhooks", "SOAP"],
  Languages: ["Node.js", "Python", "Java", "PHP"],
  Platforms: ["Salesforce", "SAP", "HubSpot", "Zoho", "QuickBooks", "Stripe", "Shopify", "Razorpay"],
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  "Middleware Tools": ["Zapier", "Make (Integromat)", "custom microservices"],
  Security: ["OAuth2", "JWT", "API keys", "SSL encryption"],
};

const logoCDN = {
  // Protocols
  "REST API": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Rest_API_Logo.svg",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "Webhooks": "https://cdn-icons-png.flaticon.com/512/9240/9240256.png",
  "SOAP": "https://upload.wikimedia.org/wikipedia/commons/c/cb/SOAP_logo.png",

  // Languages
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",

  // Platforms
  "Salesforce": "https://cdn-icons-png.flaticon.com/512/5968/5968855.png",
  "SAP": "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  "HubSpot": "https://cdn.iconscout.com/icon/free/png-512/hubspot-3628782-3030006.png",
  "Zoho": "https://upload.wikimedia.org/wikipedia/commons/4/45/Zoho_logo.svg",
  "QuickBooks": "https://cdn.iconscout.com/icon/free/png-512/intuit-282295.png",
  "Stripe": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
  "Shopify": "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  "Razorpay": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Razorpay_logo.svg",

  // Databases
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Firebase": "https://www.gstatic.com/devrel-devsite/prod/v4ac8e5417be5e7f3b346a660748bd671f967f255f0d5c740c1a40c765a8ee8de/firebase/images/lockup.svg",

  // Middleware
  "Zapier": "https://cdn.iconscout.com/icon/free/png-512/zapier-2-555599.png",
  "Make (Integromat)": "https://uploads-ssl.webflow.com/62150a46443054328ff9efbf/63d0162754708d7b2bfbf5fc_Make_Logo_Mark_1-1.png",
  "custom microservices": "https://cdn-icons-png.flaticon.com/512/8763/8763243.png",

  // Security
  "OAuth2": "https://www.oauth.com/favicon.ico",
  "JWT": "https://jwt.io/img/pic_logo.svg",
  "API keys": "https://cdn-icons-png.flaticon.com/512/2103/2103654.png",
  "SSL encryption": "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
};

const SwIntTools = () => {
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technologies & Tools We Use</h2>

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

export default SwIntTools;
