import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const aiBICategories = {
  "BI & Analytics Platforms": [
    "Tableau",
    "Power BI",
    "Looker",
    "Qlik Sense",
    "Sisense",
  ],
  "Data Warehousing & ETL": [
    "Snowflake",
    "BigQuery",
    "Redshift",
    "Databricks",
    "Talend",
  ],
  "AI-Powered BI": [
    "ThoughtSpot",
    "Zoho Analytics",
    "Domo",
    "IBM Cognos",
    "MicroStrategy",
  ],
  "Data Integration & Automation": [
    "Fivetran",
    "Apache Nifi",
    "Airbyte",
    "Alteryx",
    "Informatica",
  ],
  "Visualization & Reporting": [
    "Google Data Studio",
    "Mode Analytics",
    "Metabase",
    "Superset",
  ],
};

const aiBILogoUrls = {
  // BI & Analytics Platforms
  Tableau: "https://cdn.iconscout.com/icon/free/png-256/free-tableau-icon-svg-png-download-4489897.png?f=webp",
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  Looker: "https://www.svgrepo.com/show/354012/looker-icon.svg",
  "Qlik Sense": "https://images.credly.com/images/d5782847-2646-4545-8ca8-b6744972b4dd/image.png",
  Sisense: "https://play-lh.googleusercontent.com/_x6j2AigS2Mrdnf9D1JuQqIBNd3R3xEJ5w4FWNBPmHoUyXZ4JjWGv7HZrxQj17eZqgc=w600-h300-pc0xffffff-pd",

  // Data Warehousing & ETL
  Snowflake: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.64.0/files/dark/snowflake-color.png",
  BigQuery: "https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg",
  Redshift: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Redshift-icon-256.png?20121009193220",
  Databricks: "https://1000logos.net/wp-content/uploads/2025/01/Databricks-Emblem.png",
  Talend: "https://alternative.me/media/256/talend-icon-ni06fsk9kc7ix4kq-c.png",

  // AI-Powered BI
  ThoughtSpot: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/bc3123e8-e7a4-4da9-9ee3-c8b089ada0f3.png",
  "Zoho Analytics": "https://em360tech.com/sites/default/files/styles/tech_index_logo/public/2023-03/zoho-analytics-512-new-product-logo.png.webp?itok=K0CNMXWK",
  Domo: "https://images.seeklogo.com/logo-png/34/2/domo-logo-png_seeklogo-348389.png",
  "IBM Cognos": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  MicroStrategy: "https://cdn.brandfetch.io/id16h5D9Et/w/800/h/800/id4gqv0t8M.png?c=1dxbfHSJFAPEGdCLU4o5B",

  // Data Integration & Automation
  Fivetran: "https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png",
  "Apache Nifi": "https://images.icon-icons.com/2699/PNG/512/apache_nifi_logo_icon_168614.png",
  Airbyte: "https://avatars3.githubusercontent.com/airbytehq",
  Alteryx: "https://images.seeklogo.com/logo-png/50/2/alteryx-logo-png_seeklogo-508554.png",
  Informatica: "https://cdn-public.softwarereviews.com/production/favicons/offerings/4546/original/INFA-c4767c1c.png",

  // Visualization & Reporting
  "Google Data Studio": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-datastudio-icon.png",

  "Mode Analytics": "https://ta-relay-public-files-prod.s3.us-east-2.amazonaws.com/icp/product_images/163aa82596261bf2ce6b6d88e9b68a4f.png",
  Metabase: "https://brandeps.com/icon-download/M/Metabase-icon-01.png",
  Superset: "https://images.seeklogo.com/logo-png/50/1/superset-icon-logo-png_seeklogo-500354.png",
};

const AIBIToolsSection = () => {
  const categories = Object.keys(aiBICategories);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>AI Business Intelligence Tools</h2>

        {/* Tabs */}
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

        {/* Tech Cards */}
        <div className={styles.cardGrid}>
          {aiBICategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={aiBILogoUrls[tool]}
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

export default AIBIToolsSection;
