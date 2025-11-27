import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const strategyConsultingCategories = {
  "BI Platforms": ["Tableau", "Power BI", "Qlik Sense", "Looker"],
  "Analytics & Visualization": [
    "Alteryx",
    "SAS",
    "KNIME",
    "Google Data Studio",
  ],
  "Market Intelligence": ["Crunchbase", "CB Insights", "PitchBook", "Statista"],
  "Financial Modeling": [
    "Microsoft Excel",
    "Quantrix",
    "Oracle Hyperion",
    "Anaplan",
  ],
  "Collaboration Tools": ["Miro", "Notion", "Confluence", "SharePoint"],
  "Survey Tools": ["Qualtrics", "SurveyMonkey", "Typeform", "Dovetail"],
};

const strategyConsultingLogos = {
  // Business Intelligence Platforms
  Tableau:
    "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png",
  "Power BI":
    "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "Qlik Sense": "https://logodix.com/logo/2096842.png",
  Looker: "https://www.svgrepo.com/show/354012/looker-icon.svg",

  // Data Analytics & Visualization
  Alteryx:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPlYYMq2i17S1A7g4YMiNkHPz_N98B9KqtA&s",
  SAS: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4M_XhzGlDe_iP3v9tAmVYvdFRNBCzWY6oMw&s",
  KNIME:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOEBSj8_0QxR657onx62nSXm8Lbn-zjowrmA&s",
  "Google Data Studio":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ichXLiSdM3M4epxIZviJp7HyWADC3SZI3A&s",

  // Market & Competitive Intelligence
  Crunchbase:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFw1QjpQGls0Zcm9NbeScKn9O14XsPVFdC8w&s",
  "CB Insights":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQ985_mpYR-3yfinfH82gVyv_MP6bZWy9FQ&s",
  PitchBook:
    "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1474559081/oik4oi59xlia9leojkxg.png",
  Statista: "https://logosandtypes.com/wp-content/uploads/2022/11/Statista.png",

  // Financial & Strategic Modeling
  "Microsoft Excel":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqy-evG5emBpFQ8T0gPJIN_U90oCsSKKlaw&s",
  Quantrix:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4N16nw29xRxnCeZ_3FZXOCGBGqvDBJddhA&s",
  "Oracle Hyperion":
    "https://i0.wp.com/orahyplabs.com/wp-content/uploads/2016/10/ORAHYPLABS-FAVICON.png?resize=175%2C225&ssl=1",
  Anaplan: "https://companieslogo.com/img/orig/PLAN-82aa46a2.png?t=1720244493",

  // Collaboration & Knowledge Management
  Miro: "https://www.svgrepo.com/show/517866/miro.svg",
  Notion: "https://logosandtypes.com/wp-content/uploads/2020/07/Notion.png",
  Confluence: "https://cdn.worldvectorlogo.com/logos/confluence-1.svg",
  SharePoint:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgWGh3QFqUGuqzUpDlXXn_wti5y7_Nh2vsA&s",

  // Survey & Research Tools
  Qualtrics:
    "https://webuilddatabases.com/wp-content/uploads/2022/06/Qualtrics-logo.png",
  SurveyMonkey:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OCH7Xvj1jE3l78zsydakbXDgH88tl6wnvA&s",
  Typeform:
    "https://images.seeklogo.com/logo-png/50/2/typeform-logo-png_seeklogo-506858.png",
  Dovetail:
    "https://images.seeklogo.com/logo-png/44/1/dovetail-icon-logo-png_seeklogo-448112.png",
};

const StrategyToolsSection = () => {
  const categories = Object.keys(strategyConsultingCategories);
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

        {/* Tool Cards */}
        <div className={styles.cardGrid}>
          {strategyConsultingCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={strategyConsultingLogos[tool]}
                alt={`${tool} logo`}
                className={styles.logo}
              />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategyToolsSection;
