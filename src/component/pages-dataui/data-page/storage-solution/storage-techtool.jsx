import React, { useState } from "react";
import styles from "./../../../common-ui/design-and-development/development-technologies-dnd.module.css";

const storageSolutions = {
  "Relational DB": [
    "MySQL",
    "PostgreSQL",
    "MariaDB",
    "Oracle Database",
    "Microsoft SQL Server",
  ],
  "NoSQL DB": ["MongoDB", "Cassandra", "CouchDB", "Redis", "DynamoDB"],
  "Cloud Storage": [
    "Amazon S3",
    "Google Cloud Storage",
    "Azure Blob Storage",
    "IBM Cloud Object Storage",
  ],
  " File Systems": ["HDFS", "Ceph", "GlusterFS", "MinIO"],
  "Data Warehousing": [
    "Snowflake",
    "Amazon Redshift",
    "Google BigQuery",
    "Azure Synapse Analytics",
    "Teradata",
  ],
  "Backup & Archival": ["Veeam", "Commvault", "Rubrik", "Acronis", "Backblaze"],
};

const storageLogos = {
  // Relational Databases
  MySQL: "https://cdn-icons-png.flaticon.com/512/528/528260.png",
  PostgreSQL: "https://www.svgrepo.com/show/306591/postgresql.svg",
  MariaDB:
    "http://images.icon-icons.com/2699/PNG/512/mariadb_logo_icon_170968.png",
  "Oracle Database":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYGvjHZ4lmNz5Uu-NpGvf2dGcmoqnNxuj5A&s",
  "Microsoft SQL Server":
    "https://img.icons8.com/?size=512&id=laYYF3dV0Iew&format=png",

  // NoSQL Databases
  MongoDB:
    "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-svg-png-download-3030245.png",
  Cassandra:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BPku-wNa9j1XyKpz-YManUayDBj_Ykuytg&s",
  CouchDB: "https://couchdb.apache.org/image/couch@2x.png",
  Redis:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuV_aZWnhJ6Nku3SvxpJiJmJoZ7SisUshVQ&s",
  DynamoDB:
    "https://cdn.freebiesupply.com/logos/thumbs/2x/aws-dynamodb-logo.png",

  // Cloud Storage Services
  "Amazon S3":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png",
  "Google Cloud Storage":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeO3Zgh5kRFYreMtCKGqD0MF3N4HDIsyEQCg&s",
  "Azure Blob Storage": "https://img.icons8.com/?size=512&id=84280&format=png",
  "IBM Cloud Object Storage":
    "https://www.pngplay.com/wp-content/uploads/12/IBM-No-Background-Clip-Art.png",

  // Distributed File Systems
  HDFS: "https://cdn.worldvectorlogo.com/logos/hadoop.svg",
  Ceph: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFzEpk_3x9ZgFBwgbvrGPhI1mICQOegJ-GQ&s",
  GlusterFS:
    "https://www.gluster.org/wp-content/uploads/2016/03/gluster-ant.png",
  MinIO:
    "https://blog.min.io/content/images/2019/05/minio-publication-icon-7.png",

  // Data Warehousing Solutions
  Snowflake:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4LjEnWy3KwlNXbu9IIl0sobbvajQsgFusQ&s",
  "Amazon Redshift":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dEaQqh_Uyjay5g9tjFzAMIWB52PLxhxIUw&s",
  "Google BigQuery":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2CYa3DEFyYo2lZxx0jAlWhopk2C2aJJn6Q&s",
  "Azure Synapse Analytics":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5BJgTw2H2_OMckcMo7vskg-DWqTXSq_yGQ&s",
  Teradata: "https://www.svgrepo.com/show/306844/teradata.svg",

  // Backup & Archival Solutions
  Veeam: "https://img.icons8.com/?size=512&id=38686&format=png",
  Commvault: "https://www.isjw.uk/images/commvault/logo300.png",
  Rubrik:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvnUKAGeqT2dubHxbDwKJZ1qlovolyQQ0yw&s",
  Acronis:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonydFVTQQ7afgEsbPqAL_-wBDkLEA9JoIKw&s",
  Backblaze:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkWBdWmBbumGYmatou6sf_WkbGw6oGwC5DQ&s",
};

const StorageToolsSection = () => {
  const categories = Object.keys(storageSolutions);
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
          {storageSolutions[selected].map((tool) => (
            <div key={tool} className={styles.techCard}>
              <img
                src={storageLogos[tool]}
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

export default StorageToolsSection;
