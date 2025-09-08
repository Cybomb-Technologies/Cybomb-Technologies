import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const cloudDataMigrationCategories = {
  "Cloud Migration": [
    "AWS Migration Hub",
    "Azure Migrate",
    "Google Cloud Migrate",
    "VMware HCX",
    "Carbonite Migrate",
  ],
  "Database Migration": [
    "AWS DMS",
    "Azure DMS",
    "Google DMS",
    "Oracle GoldenGate",
    "IBM InfoSphere Data Replication",
  ],
  "ETL & Data Integration": [
    "Talend",
    "Informatica Cloud Data Integration",
    "Apache NiFi",
    "Fivetran",
    "Stitch",
  ],
  "Storage & File Migration": [
    "AWS DataSync",
    "Azure Storage Migration",
    "Google Transfer Appliance",
    "Rsync",
  ],
  "Monitoring & Optimization": [
    "CloudHealth by VMware",
    "Turbonomic",
    "Dynatrace",
    "New Relic",
    "Datadog",
  ],
};

const cloudDataMigrationLogos = {
  // Cloud Migration Platforms
  "AWS Migration Hub":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLUO1mnWLgyjWAhulIHm_a147GwVY_JqKmA&s",

  "Azure Migrate":
    "https://images.saasworthy.com/azuremigrate_11351_logo_1666091880_0vz91.png",

  "Google Cloud Migrate":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQty_AcHT4brX2SnTZTcGyvGQMXYMcBLerqlw&s",

  "VMware HCX":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtlSP4R65qPrrYoxk5Jxn4wp22-ikws4Cu00MIdeqS46VA4wNvufpKSlQH9dXCcHmUas&usqp=CAU",

  "Carbonite Migrate":
    "https://stratus.com.tr/wp-content/uploads/2023/03/Move_icon3.svg",

  // Database Migration Tools
  "AWS DMS":
    "https://symbols.getvecta.com/stencil_10/12_amazon-rds.5b660971df.png",

  "Azure DMS":
    "https://azure.microsoft.com/svghandler/database-migration/?width=600&height=315",

  "Google DMS":
    "https://miro.medium.com/v2/resize:fit:1400/1*fDhUi8-ZtIni9fa2jFetLQ.png",

  "Oracle GoldenGate":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbREAj-epIVDZp9L5-1qBP16YtqaLsDeBkeQ&s",

  "IBM InfoSphere Data Replication":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",

  // ETL & Data Integration Tools
  Talend:
    "https://images.icon-icons.com/2699/PNG/512/talend_logo_icon_169665.png",

  "Informatica Cloud Data Integration":
    "https://cdn.prod.website-files.com/63b3b18df5fd61327dc65e8a/6423e66403f44340c64eefb6_informatica-bg.png",

  "Apache NiFi":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpC6wy_WqJmr2HDjUcqJMsKxtV7zHEVfIbPQ&s",

  Fivetran:
    "https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png",

  Stitch: "https://www.stitchdata.com/images/og-site-icon.png",

  // Storage & File Migration Tools
  "AWS DataSync":
    "https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Migration-Transfer/64/Arch_AWS-DataSync_64@5x.png",

  "Azure Storage Migration":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWp7r_FA9TcQkqGJFwlre3EUmLc1_hQtwxA&s",

  "Google Transfer Appliance":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwk7RdFYRsWdEEraTX8D4HfsxgnDp4B9laYw&s",

  Rsync:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWgfgb7phvmbXB2tATLPIoy-xelzK18Xcyw&s",

  // Monitoring & Optimization Tools
  "CloudHealth by VMware":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZoYcYA3gLBPk3HZuSFynybHuIBjqbZksOQ&s",

  Turbonomic:
    "https://i0.wp.com/www.virtualisedfruit.co.uk/wp-content/uploads/2016/08/turbonomic-short.png?fit=430%2C431&ssl=1",

  Dynatrace: "https://www.svgrepo.com/show/353681/dynatrace-icon.svg",

  "New Relic":
    "https://s3.eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/1/2/7/127_170_196.png",

  Datadog:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-bjJdK2IAQnNsbvQfeEKWVSfel4RyMTVew&s",
};

const CloudDataToolsSection = () => {
  const categories = Object.keys(cloudDataMigrationCategories);
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
          {cloudDataMigrationCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={cloudDataMigrationLogos[tool]}
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

export default CloudDataToolsSection;
