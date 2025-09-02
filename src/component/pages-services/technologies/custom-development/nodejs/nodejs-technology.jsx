import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const NodeJSTechnologies = () => {
  const techData = {
    "Frameworks": ["Express", "NestJS", "Koa", "Fastify", "Socket.io"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
    "Tools": ["TypeScript", "Webpack", "Babel", "Jest", "PM2"],
    "DevOps": ["Docker", "Kubernetes", "AWS", "Google Cloud", "Azure"]
  };

  const techLogos = {
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "NestJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "Koa": "https://www.vectorlogo.zone/logos/koajs/koajs-ar21.svg",
    "Fastify": "https://www.svgrepo.com/show/353729/fastify-icon.svg",
    "Socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "Elasticsearch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Webpack": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    "Babel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
    "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    "PM2": "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/pm2-icon-de2tnxlx7mpm39v66kkhc9.png/pm2-icon-j1kc5wcz2f8itsbu1k1ey.png?_a=DATAg1AAZAA0",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "AWS": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png?20170912170050https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Node.js Technologies</h2>
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
          {techData[selected].map((item) => (
            <div key={item} className={styles.techCard}>
              <img
                src={techLogos[item]}
                alt={`${item} logo`}
                className={styles.logo}
                onError={(e) => { e.target.src = "https://via.placeholder.com/50"; }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NodeJSTechnologies;