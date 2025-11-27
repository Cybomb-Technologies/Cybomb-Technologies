import React, { useState } from "react";
import styles from "../../../../common-ui/design-and-development/development-technologies-dnd.module.css";
const techData = {
  CMS: ["Umbraco Core", "Umbraco Cloud"],
  "E-commerce": ["Vendr", "uCommerce"],
  "Development Stack": [".NET 6+", "C#", "Razor Views"],
  "Data & Integrations": ["SQL Server", "Azure", "REST APIs", "GraphQL"],
  Security: ["HTTPS", "OAuth", "RBAC"],
  Hosting: ["Azure", "Umbraco Cloud", "AWS", "On-premises"],
};

const techLogos = {
  "Umbraco Core":
    "https://cdn.iconscout.com/icon/free/png-256/free-umbraco-icon-svg-png-download-3030267.png?f=webp",
  "Umbraco Cloud":
    "https://cdn.iconscout.com/icon/free/png-256/free-umbraco-icon-svg-png-download-3030267.png?f=webp",
  Vendr:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJUSTn28rLpmoo6fWEzPLsyyRHM1yEHigWA&s",
  uCommerce:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouVwv2NhwyOiJZFabjaREJ4EASXHg4xQluA&s",
  ".NET 6+":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3uFEyeveell3N2QYYeBc_cXjMHprzY26bg&s",
  "C#": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png",
  "Razor Views": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPaxOQNyx6o7UEStk9qeMHOA0Bk7Fkg8M0fg&s",
  "SQL Server":
    "https://img.icons8.com/?size=512&id=laYYF3dV0Iew&format=png",
  Azure:
    "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  "REST APIs":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJoxiAXVIxedd5WnxL3yepJpACK2lmCSl9w&s",
  GraphQL:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
  HTTPS:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzc78a9x_QrhfwqMzIHgCf2mEMduw7mmwgOw&s",
  OAuth:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/800px-Oauth_logo.svg.png",
  "RBAC":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwxu7ZtcyZvTIBKyy5_ByzHJ79UO6EzqyxR6ujT2R99U-n56bFBpcDwvsbiLs2B-mBNE&usqp=CAU",
  AWS: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/aws-color.png",
  "On-premises":
    "https://cdn-icons-png.flaticon.com/512/5321/5321804.png",
};
const UmbracoTechnologiesSection = () => {
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

export default UmbracoTechnologiesSection;
