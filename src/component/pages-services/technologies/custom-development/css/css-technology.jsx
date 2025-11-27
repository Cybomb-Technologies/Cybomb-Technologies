import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const CSSTechnologies = () => {
  const techData = {
    "Core Styling": [
      "CSS3",
      "Flexbox",
      "Grid Layout",
      "Variables",
      "Custom Properties",
    ],
    Preprocessors: ["Sass", "Less", "Stylus"],
    "Utility Frameworks": ["Tailwind CSS", "Bootstrap", "Bulma", "Material UI"],
    Methodologies: ["BEM", "OOCSS", "SMACSS", "Atomic CSS"],
    "Build Tools": ["PostCSS", "PurgeCSS", "Webpack", "Vite"],
  };

  const techLogos = {
    CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Flexbox:
      "https://static.thenounproject.com/png/137357-200.png",
    "Grid Layout":
      "https://cdn0.iconfinder.com/data/icons/text-editor-solid/48/column_table_layout_grid-512.png",
    Variables:
      "https://www.svgrepo.com/show/439129/css-variables.svg",
    "Custom Properties":
      "https://cdn-icons-png.flaticon.com/512/584/584865.png",
    Sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    Less: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg",
    Stylus:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stylus/stylus-original.svg",
    "Tailwind CSS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    Bulma:
      "https://www.svgrepo.com/show/353527/bulma.svg",
    "Material UI":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    BEM: "https://avatars.githubusercontent.com/u/223412?s=280&v=4",
    OOCSS:
      "data:image/png;base64,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",
    SMACSS:
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/scss-file-icon-svg-png-download-2321264.png",
    "Atomic CSS":
      "https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png",
    PostCSS:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postcss/postcss-original.svg",
    PurgeCSS:
      "data:image/png;base64,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",
    Webpack:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    Vite: "https://vitejs.dev/logo.svg",
  };
  const categories = Object.keys(techData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>CSS Technologies</h2>
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

export default CSSTechnologies;
