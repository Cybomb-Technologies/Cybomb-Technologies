import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const dataArchitectureCategories = {
  "Data Warehousing": [
    "Amazon Redshift",
    "Google BigQuery",
    "Snowflake",
    "Teradata",
    "Microsoft Synapse Analytics",
  ],
  "Data Lakes": [
    "Amazon S3",
    "Azure Data Lake Storage",
    "Google Cloud Storage",
    "Databricks Lakehouse",
    "HDFS",
  ],
  "Data Integration & ETL": [
    "Apache NiFi",
    "Talend",
    "Informatica PowerCenter",
    "AWS Glue",
    "Fivetran",
  ],
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
    "Informatica Data Catalog",
    "Google Data Catalog",
  ],
};

const dataArchitectureLogos = {
  // Data Warehousing
  "Amazon Redshift":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon-Redshift-Logo.svg/1862px-Amazon-Redshift-Logo.svg.png",
  "Google BigQuery":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2CYa3DEFyYo2lZxx0jAlWhopk2C2aJJn6Q&s",
  Snowflake: "https://cdn-icons-png.flaticon.com/512/2530/2530064.png",
  Teradata: "https://img.icons8.com/?size=512&id=108544&format=png",
  "Microsoft Synapse Analytics":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5BJgTw2H2_OMckcMo7vskg-DWqTXSq_yGQ&s",

  // Data Lakes
  "Amazon S3":
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg",
  "Azure Data Lake Storage":
    "https://solace.com/wp-content/uploads/2021/10/azure-data-lake-storage-logo.png",
  "Google Cloud Storage": "https://img.icons8.com/color/600/google-cloud.png",
  "Databricks Lakehouse":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebjNdAWUv_RSkIPsfUK7VwTTe8BygfhTUcw&s",
  HDFS: "https://img.icons8.com/?size=512&id=69132&format=png",

  // Data Integration & ETL
  "Apache NiFi":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkukhCsnwGnm7IO4tCNn8GotWmdXfWjp06Rg&s",
  Talend:
    "https://images.icon-icons.com/2699/PNG/512/talend_logo_icon_169665.png",
  "Informatica PowerCenter":
    "https://companieslogo.com/img/orig/INFA-c4767c1c.png?t=1720244492",
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
  "Informatica Data Catalog":
    "https://www.chetu.com/img/technology-logo/informatica-logo.png",
  "Google Data Catalog": "https://www.svgrepo.com/show/375405/data-catalog.svg",
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
