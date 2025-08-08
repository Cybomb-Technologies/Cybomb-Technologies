import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  "Platform & Framework": [
    "SharePoint Online",
    "SharePoint Server",
    "SharePoint Framework (SPFx)",
  ],
  "Languages & Libraries": [
    "TypeScript",
    "JavaScript",
    "C#",
    "HTML5",
    "CSS3",
    "React",
    "Angular",
    "Vue.js",
  ],
  "Tools & APIs": [
    "Node.js",
    "npm",
    "Yeoman",
    "Gulp",
    "PowerShell",
    "Microsoft Graph API",
  ],
  Databases: ["Microsoft SQL Server"],
  "DevOps & Hosting": ["Azure DevOps", "Git", "Azure", "Microsoft 365"],
};

const techLogos = {
  "SharePoint Online":
    "https://www.vectorlogo.zone/logos/sharepoint/sharepoint-icon.svg",
  "SharePoint Server":
    "https://www.vectorlogo.zone/logos/sharepoint/sharepoint-icon.svg",
  "SharePoint Framework (SPFx)":
    "https://www.vectorlogo.zone/logos/sharepoint/sharepoint-icon.svg",
  TypeScript:
    "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  JavaScript:
    "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  "C#": "https://www.vectorlogo.zone/logos/csharp/csharp-icon.svg",
  HTML5: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  CSS3: "https://www.vectorlogo.zone/logos/w3_css3/w3_css3-icon.svg",
  React: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  Angular: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
  "Vue.js": "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
  "Node.js": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  npm: "https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg",
  Yeoman: "https://www.vectorlogo.zone/logos/yeoman/yeoman-icon.svg",
  Gulp: "https://www.vectorlogo.zone/logos/gulpjs/gulpjs-icon.svg",
  PowerShell:
    "https://www.vectorlogo.zone/logos/powershell/powershell-icon.svg",
  "Microsoft Graph API":
    "https://www.vectorlogo.zone/logos/microsoft_graph/microsoft_graph-icon.svg",
  "Microsoft SQL Server":
    "https://www.vectorlogo.zone/logos/microsoft_sql_server/microsoft_sql_server-icon.svg",
  "Azure DevOps":
    "https://www.vectorlogo.zone/logos/azure_devops/azure_devops-icon.svg",
  Git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  Azure:
    "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  "Microsoft 365":
    "https://www.vectorlogo.zone/logos/microsoft_office_365/microsoft_office_365-icon.svg",
};

const SharePointTechnologiesSection = () => {
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

export default SharePointTechnologiesSection;
