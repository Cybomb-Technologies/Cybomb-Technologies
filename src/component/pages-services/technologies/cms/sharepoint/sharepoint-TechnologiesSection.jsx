import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  "Platform & Framework": [
    "SharePoint Online",
    "SharePoint Server",
    "Framework (SPFx)",
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
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg/2097px-Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg.png",
  "SharePoint Server":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg/2097px-Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg.png",
  "Framework (SPFx)":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlSNrZD8AF3do9k5EGZxTw4qsCZMwpruHknw&s",
  TypeScript:
    "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  JavaScript:
    "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  "C#": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png",
  HTML5: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  CSS3: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
  React: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  Angular: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
  "Vue.js": "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
  "Node.js": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  npm: "https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg",
  Yeoman: "https://www.vectorlogo.zone/logos/yeoman/yeoman-icon.svg",
  Gulp: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/gulp-2.png",
  PowerShell:
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png",
  "Microsoft Graph API":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMPwMI12e1ebujL8QIvtd8yB8PufLrNgz1g&s",
  "Microsoft SQL Server":
    "https://img.icons8.com/?size=512&id=laYYF3dV0Iew&format=png",
  "Azure DevOps":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpBZBPyUPZZhVBPyhZS2NmGBjEmPEmcTm1A&s",
  Git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  Azure:
    "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  "Microsoft 365":
    "https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/icons/Icon_Copilot_64x64.svg",
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
