import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const analyticsVisualizationCategories = {
  "Data Visualization Tools": [
    "Tableau",
    "Power BI",
    "Qlik Sense",
    "Looker",
    "Google Data Studio",
  ],
  "Programming Libraries": [
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "D3.js",
    "ggplot2",
  ],
  "Analytics Platforms": [
    "Google Analytics",
    "Adobe Analytics",
    "Mixpanel",
    "Heap",
    "Kissmetrics",
  ],
  "Business Intelligence Tools": [
    "Sisense",
    "MicroStrategy",
    "Zoho Analytics",
    "IBM Cognos Analytics",
  ],
  "Big Data Visualization": [
    "Apache Superset",
    "Grafana",
    "Kibana",
    "Redash",
    "Periscope Data",
  ],
};

const analyticsVisualizationLogos = {
  // Data Visualization Tools
  Tableau: "https://img.icons8.com/color/512/tableau-software.png",
  "Power BI":
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/power-bi-icon.png",
  "Qlik Sense": "https://logodix.com/logo/2096842.png",
  Looker: "https://www.svgrepo.com/show/354012/looker-icon.svg",
  "Google Data Studio":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ichXLiSdM3M4epxIZviJp7HyWADC3SZI3A&s",

  // Programming Libraries
  Matplotlib:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png",
  Seaborn:
    "https://images.seeklogo.com/logo-png/44/1/seaborn-logo-png_seeklogo-441844.png",
  Plotly:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSkZvKzlIRJVwFNMN8PAJif0oYRuziGiPdA&s",
  "D3.js":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBrvYxusFDXpOxpG74SET8uSF9fDAohSyZg&s",
  ggplot2:
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/Ggplot2_hex_logo.png",

  // Analytics Platforms
  "Google Analytics":
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-analytics-icon.png",
  "Adobe Analytics":
    "https://images.saasworthy.com/tr:w-160,h-0,c-at_max,e-sharpen-1/adobeanalytics_11728_logo_1638172147_k4wu5.png",
  Mixpanel:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTN9ZqhM67CXGEba_e0lCTv8Bc1_B2pMDSw&s",
  Heap: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdEQYdz2uBX_Ap9GF5NI4R1AUEZuT054o4g&s",
  Kissmetrics:
    "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/4454d7cf-8e6c-4892-8a60-2cfc5c533c2b.png",

  // Business Intelligence Tools
  Sisense:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQceXdhW6PKB7rRzSNiPkrTJ2I1xuc8dpYQ&s",
  MicroStrategy:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDZGuSLQvb5wyughc84Da_pb0hg4PINt0Pw&s",
  "Zoho Analytics":
    "https://img.icons8.com/?size=512&id=KJ0KehaD9qPs&format=png",
  "IBM Cognos Analytics":
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",

  // Big Data Visualization
  "Apache Superset":
    "https://avatars.githubusercontent.com/u/42724554?s=280&v=4",
  Grafana:
    "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
  Kibana:
    "https://cdn.iconscout.com/icon/free/png-256/free-kibana-logo-icon-svg-png-download-3031529.png",
  Redash: "https://redash.io/assets/images/elements/redash-logo.svg",
  "Periscope Data":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Periscope_Logo.svg/1200px-Periscope_Logo.svg.png",
};

const AnalyticsToolsSection = () => {
  const categories = Object.keys(analyticsVisualizationCategories);
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
          {analyticsVisualizationCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={analyticsVisualizationLogos[tool]}
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

export default AnalyticsToolsSection;
