import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const processingCategories = {
  "Data Processing Frameworks": [
    "Apache Spark",
    "Apache Flink",
    "Hadoop MapReduce",
    "Beam",
  ],
  "Data Streaming Platforms": [
    "Apache Kafka",
    "Amazon Kinesis",
    "Apache Pulsar",
    "Google Pub/Sub",
  ],
  "ETL & Data Integration Tools": [
    "Apache NiFi",
    "Talend",
    "Informatica",
    "Airbyte",
    "dbt",
  ],
  "Workflow Orchestration": ["Apache Airflow", "Luigi", "Prefect", "Dagster"],
  "Batch Processing Tools": ["Apache Hive", "Pig", "Presto", "Trino"],
  "Real-Time Analytics": ["Druid", "ClickHouse", "Rockset", "Materialize"],
};

const processingLogos = {
  // Data Processing Frameworks
  "Apache Spark":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYjJum800-sDfZz-8yznUui_7lUYzeoFOcg&s",
  "Apache Flink":
    "https://flink.apache.org/img/logo/png/1000/flink_squirrel_1000.png",
  "Hadoop MapReduce": "https://cdn.worldvectorlogo.com/logos/hadoop.svg",
  Beam: "https://beam.apache.org/images/logos/3-color/nameless/beam-logo-3-color-nameless-1000.png",

  // Data Streaming Platforms
  "Apache Kafka":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEF0oWlFL6z8t1NuFupS7kQKoZoGvSzxVwCw&s",
  "Amazon Kinesis": "https://cdn.worldvectorlogo.com/logos/aws-kinesis.svg",
  "Apache Pulsar":
    "https://pbs.twimg.com/profile_images/875130220474359809/wFcLUbwd_400x400.jpg",
  "Google Pub/Sub":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmt_SOa-6SHsEnDO19nb3NIRTx6_fBbPj7DRnYd1l-s79aX3NZlOPYJjZjz6WJuScTOg&usqp=CAU",

  // ETL & Data Integration Tools
  "Apache NiFi":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpC6wy_WqJmr2HDjUcqJMsKxtV7zHEVfIbPQ&s",
  Talend:
    "https://images.icon-icons.com/2699/PNG/512/talend_logo_icon_169665.png",
  Informatica:
    "https://companieslogo.com/img/orig/INFA-c4767c1c.png?t=1720244492",
  Airbyte:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMjJh856aKQByTQFnH1_bvOcIFDgL7-a0BQ&s",
  dbt: "https://images.seeklogo.com/logo-png/43/1/dbt-logo-png_seeklogo-431111.png",

  // Workflow Orchestration
  "Apache Airflow":
    "https://airflow.apache.org/docs/apache-airflow/1.10.6/_images/pin_large.png",
  Luigi:
    "https://cdn.prod.website-files.com/6108e07db6795265f203a636/616ffa1d990abe637cb1b7e4_Dask.png",
  Prefect: "https://cdn.worldvectorlogo.com/logos/prefect-1.svg",
  Dagster:
    "https://dagster-website.vercel.app/images/brand/logos/dagster-primary-mark.svg",

  // Batch Processing Tools
  "Apache Hive": "https://www.svgrepo.com/show/329948/apachehive.svg",
  Pig: "https://towardsdatascience.com/wp-content/uploads/2019/09/0KauzwM211rZFxp5G.png",
  Presto:
    "https://images.seeklogo.com/logo-png/49/1/presto-icon-logo-png_seeklogo-499528.png",
  Trino:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeuo9lSOpAVqHbeyUeMqkpgf7hYLvnAviz1g&s",

  // Real-Time Analytics
  Druid:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilll1xHkzWaRMiGBudVSyV9gVnc1JR3oYsg&s",
  ClickHouse:
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Clickhouse.png",
  Rockset:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZIium7w2e8neUZLfcUq-zPUZ_zLGeS8dSdQ&s",
  Materialize:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Qyle7egny_YcDqTFxOM-qkbf_o-14kE71A&s",
};

const ProcessingToolsSection = () => {
  const categories = Object.keys(processingCategories);
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
          {processingCategories[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={processingLogos[tool]}
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

export default ProcessingToolsSection;
