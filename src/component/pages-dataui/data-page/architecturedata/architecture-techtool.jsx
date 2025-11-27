import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const dataArchitectureCategories = {
  "Data Warehousing": [
    "Amazon Redshift",
    "Google BigQuery",
    "Snowflake",
    "Teradata",
    "Microsoft Synapse",
  ],
  "Data Lakes": [
    "Amazon S3",
    "Lake Storage",
    "Cloud Storage",
    "Databricks",
    "HDFS",
  ],
  "Data Integration & ETL": ["Apache NiFi", "Talend", "AWS Glue", "Fivetran"],
  "Data Streaming & Messaging": [
    "Apache Kafka",
    "Apache Pulsar",
    "AWS Kinesis",
    "Google Pub/Sub",
    "RabbitMQ",
  ],
  "Data Governance & Catalog": [
    "Apache Atlas",
    "Collibra",
    "Alation",
    "Informatica",
    "G Data Catalog",
  ],
};

const dataArchitectureLogos = {
  // Data Warehousing
  "Amazon Redshift":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon-Redshift-Logo.svg/1862px-Amazon-Redshift-Logo.svg.png",
  "Google BigQuery":
    "https://images.icon-icons.com/2699/PNG/512/google_bigquery_logo_icon_168150.png",
  Snowflake: "https://cdn-icons-png.flaticon.com/512/2530/2530064.png",
  Teradata: "https://img.icons8.com/?size=512&id=108544&format=png",
  "Microsoft Synapse":
    "https://intellifysolutions.com/wp-content/uploads/2023/08/Azure-Synapse-Analytics-1.png",

  // Data Lakes
  "Amazon S3":
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg",
  "Lake Storage":
    "https://solace.com/wp-content/uploads/2021/10/azure-data-lake-storage-logo.png",
  "Cloud Storage": "https://img.icons8.com/color/600/google-cloud.png",
  Databricks:
    "https://1000logos.net/wp-content/uploads/2025/01/Databricks-Emblem.png",
  HDFS: "https://img.icons8.com/?size=512&id=69132&format=png",

  // Data Integration & ETL
  "Apache NiFi":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkukhCsnwGnm7IO4tCNn8GotWmdXfWjp06Rg&s",
  Talend:
    "https://images.icon-icons.com/2699/PNG/512/talend_logo_icon_169665.png",
  "AWS Glue":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5s3so4VOpAZGfmE7V2n54CdoVVroa2yvOTw&s",
  Fivetran:
    "https://images.saasworthy.com/fivetran_5612_logo_1586758924_eyzev.png",

  // Data Streaming & Messaging
  "Apache Kafka":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOKEVxLEPXLVAhlOcrfBnIOTzoCU23BwUMA&s",
  "Apache Pulsar":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJmm9KbVqn4PbWsy1bD5BH_oH6xs66YbzsQ&s",
  "AWS Kinesis":
    "https://images.seeklogo.com/logo-png/30/2/aws-kinesis-logo-png_seeklogo-306153.png",
  "Google Pub/Sub":
    "https://cdn.worldvectorlogo.com/logos/google-cloud-pub-sub-logo.svg",
  RabbitMQ: "https://www.svgrepo.com/show/303576/rabbitmq-logo.svg",

  // Data Governance & Catalog
  "Apache Atlas":
    "https://www.datagalaxy.com/wp-content/uploads/2021/07/atlas-icon.png",
  Collibra:
    "https://cdn.prod.website-files.com/6130fa1501794e37c21867cf/63d84e7378a07338b1d0d67c_collibra.svg",
  Alation:
    "https://cdn.prod.website-files.com/5d2a159e86b66b534fbc0d86/63b58d791b38e664c9e16f57_alation-icon.png",
  Informatica: "https://www.chetu.com/img/technology-logo/informatica-logo.png",
  "G Data Catalog": "https://www.svgrepo.com/show/375405/data-catalog.svg",
};

const ArchitectureToolsSection = () => {
  const categories = Object.keys(dataArchitectureCategories);
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
          {dataArchitectureCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={dataArchitectureLogos[tool]}
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

export default ArchitectureToolsSection;
