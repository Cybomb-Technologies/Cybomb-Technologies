import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const AngularTechnologies = () => {
  const techData = {
    "Core": ["Angular", "TypeScript", "RxJS", "NgRx", "Ivy"],
    "UI": [ "PrimeNG", "NG-ZORRO", "Bootstrap", "Tailwind"],
    "Testing": [, "Karma", "Protractor", "Jest", "Cypress"],
    "Tools": ["Angular CLI", "Schematics", "Compodoc"]
  };

  const techLogos = {
    "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "RxJS": "https://rxjs.dev/assets/images/favicons/favicon.ico",
    "NgRx": "https://ngrx.io/assets/images/badge.svg",
    "Ivy": "https://angular.io/assets/images/logos/angular/angular.svg",
    "PrimeNG": "https://i0.wp.com/www.primefaces.org/wp-content/uploads/2016/10/primeng.png?ssl=1",
    "NG-ZORRO": "https://repository-images.githubusercontent.com/876688132/05b13a6c-171e-480e-be9b-807e060f7f36",
    "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Karma": "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/karma-2.png",
    "Protractor": "https://images.icon-icons.com/2415/PNG/512/protractor_plain_logo_icon_146387.png",
    "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    "Cypress": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
    "Angular CLI": "https://angular.io/assets/images/logos/angular/angular.svg",
    "Schematics": "https://angular.io/assets/images/logos/angular/angular.svg",
    "Compodoc": "https://compodoc.app/assets/img/logo.png",
  };

  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Angular Technologies</h2>
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

export default AngularTechnologies;