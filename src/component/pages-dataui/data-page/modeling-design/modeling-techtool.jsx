import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const modelingDesignCategories = {
  "Data Modeling Tools": [
    "ER/Studio",
    "ERwin Data Modeler",
    "IBM InfoSphere Data Architect",
    "Oracle SQL Developer",
    "Toad Data Modeler",
  ],
  "Business Process Modeling": [
    "Bizagi",
    "Signavio",
    "Camunda",
    "Visual Paradigm",
  ],
  "UML & Software Design Tools": [
    "Enterprise Architect",
    "StarUML",
    "Astah",
    "Lucidchart",
    "Draw.io",
  ],
  "Data Visualization & Dashboarding": [
    "Tableau",
    "Power BI",
    "Qlik Sense",
    "Looker",
    "D3.js",
  ],
  "Simulation & System Modeling": [
    "MATLAB Simulink",
    "AnyLogic",
    "Arena Simulation",
    "Stella Architect",
    "Simul8",
  ],
};

const modelingDesignLogos = {
  // Data Modeling Tools
  "ER/Studio":
    "https://erstudio.com/wp-content/uploads/2024/04/ERS-icon-1-1.png",
  "ERwin Data Modeler":
    "https://upload.wikimedia.org/wikipedia/commons/7/7f/Erwin_logo.png",
  "IBM InfoSphere Data Architect":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png",
  "Oracle SQL Developer":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNZuq-vA2sQZouioLgv7aW0e9IlulOHisLg&s",
  "Toad Data Modeler":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkT0eUtRmVzq5vWOcXi6O_RWAiWwssEVH_Dw&s",

  // Business Process Modeling
  Bizagi:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UmJ447BBd-NHR23SbbfZm8vAQER9GgIn8g&s",
  Signavio:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJ3OG-lMFlYwYIc3pmHO0N2r90pdZIYhns-arJIlZZghJcGIhrAlIPVS_KMuKCAm6ZV8&usqp=CAU",
  Camunda:
    "https://images.icon-icons.com/2699/PNG/512/camunda_logo_icon_167768.png",
  "Visual Paradigm":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xUOcz7ZwG_rKd-FeuD1gwcl8Fmn4B0e0SQ&s",

  // UML & Software Design Tools
  "Enterprise Architect":
    "https://www.sparxsystems.us/wp-content/uploads/2024/11/cropped-cropped-Favicon.png",
  StarUML:
    "https://www.nicepng.com/png/full/247-2477083_staruml-definition.png",
  Astah:
    "https://pbs.twimg.com/profile_images/1645303059424350209/7nW0NuWp_400x400.jpg",
  Lucidchart:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ9k_D_XAOKxpb3i29UeBl8jHJNJEXL1kemQ&s",
  "Draw.io":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Diagrams.net_Logo.svg/2048px-Diagrams.net_Logo.svg.png",

  // Data Visualization & Dashboarding
  Tableau: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  "Power BI":
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/power-bi-icon.png",
  "Qlik Sense":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_34H62KcA6gahTp6NBfSXVtXGeiHDKzGHqQ&s",
  Looker:
    "https://images.seeklogo.com/logo-png/39/1/google-looker-logo-png_seeklogo-394597.png",
  "D3.js":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBrvYxusFDXpOxpG74SET8uSF9fDAohSyZg&s",

  // Simulation & System Modeling
  "MATLAB Simulink":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/1200px-Matlab_Logo.png",
  AnyLogic:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47WozBldVS552OD_FbsZ6lSa-p5Z63zz_ug&s",
  "Arena Simulation":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIF1Tm1x40L2ZNf8suwCTHyCzw7DYpRMHuIugQdT_iQ08g-y8N30xWeWIdLf9J1I-AYI&usqp=CAU",
  "Stella Architect":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8_nwJifYo1K4AVr0DmcQBnDAINqFEnQ8uA&s",
  Simul8:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2klz5ISdHBvPUloJj6i_jO672lwAgZ_N3oQ&s",
};

const ModelingToolsSection = () => {
  const categories = Object.keys(modelingDesignCategories);
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
          {modelingDesignCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={modelingDesignLogos[tool]}
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

export default ModelingToolsSection;
