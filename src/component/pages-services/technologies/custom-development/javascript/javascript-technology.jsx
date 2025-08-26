import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const JavaScriptTechnologies = () => {
  const techData = {
    "Core JavaScript": ["JavaScript (ES6+)", "TypeScript", "Node.js", "Deno", "Bun"],
    "Front-End Frameworks": ["React", "Vue.js", "Angular", "Svelte", "Next.js"],
    "Back-End Frameworks": ["Express.js", "NestJS", "AdonisJS"],
    "Build & Testing Tools": ["Webpack", "Vite", "Babel", "Jest", "Mocha"],
    "Deployment & DevOps": ["Docker", "Kubernetes", "Vercel", "Netlify", "AWS Lambda"]
  };

  const techLogos = {
    // Core JS
    "JavaScript (ES6+)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Deno": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg",
    "Bun": "https://bun.sh/logo.svg",

    // Frontend
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "Svelte": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",

    // Backend
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "NestJS": "https://icon.icepanel.io/Technology/svg/Nest.js.svg",
    "AdonisJS": "https://avatars.githubusercontent.com/u/13810373?s=200&v=4",

    // Tools
    "Webpack": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    "Vite": "https://vitejs.dev/logo.svg",
    "Babel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
    "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    "Mocha": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",

    // Deployment
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "Vercel": "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    "Netlify": "https://www.netlify.com/v3/static/favicon/favicon.ico",
    "AWS Lambda": "https://cdn.worldvectorlogo.com/logos/aws-lambda-1.svg"
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>JavaScript Technologies</h2>
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
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/50";
                }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JavaScriptTechnologies;
