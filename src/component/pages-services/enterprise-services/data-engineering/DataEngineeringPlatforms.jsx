import styles from '../../../common-ui/enterprise-services/crm-platforms.module.css';

const toolsAndTech = [
  {
    name: 'Apache Spark',
    logo: 'https://cdn.worldvectorlogo.com/logos/apache-spark-5.svg',
  },
  {
    name: 'Hadoop',
    logo: 'https://cdn.worldvectorlogo.com/logos/hadoop.svg',
  },
  {
    name: 'Apache Kafka',
    logo: 'https://locusit.se/wp-content/uploads/2024/08/Apache-Kafka.png',
  },
  {
    name: 'Apache Flink',
    logo: 'https://flink.apache.org/img/logo/png/1000/flink_squirrel_1000.png',
  },
  {
    name: 'Amazon Kinesis',
    logo: 'https://wp.logos-download.com/wp-content/uploads/2023/02/Amazon_Kinesis_Firehose_Logo.png',
  },
  {
    name: 'Apache Airflow',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png',
  },
  {
    name: 'Apache NiFi',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Apache-nifi-logo.svg/2560px-Apache-nifi-logo.svg.png',
  },
  {
    name: 'dbt',
    logo: 'https://vectorseek.com/wp-content/uploads/2023/09/Dbt-Logo-Vector.svg-.png',
  },
  {
    name: 'Snowflake',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/1280px-Snowflake_Logo.svg.png',
  },
  {
    name: 'Google BigQuery',
    logo: 'https://images.icon-icons.com/2699/PNG/512/google_bigquery_logo_icon_168150.png',
  },
  {
    name: 'Amazon Redshift',
    logo: 'https://cdn.prod.website-files.com/601064f495f4b4967f921aa9/63588a8a2e82ff2d5e3434b6_202210-redshift-logo.png',
  },
  {
    name: 'Azure Synapse',
    logo: 'https://files.readme.io/5fd73e2-synapse.png',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
  },
  {
    name: 'Apache Cassandra',
    logo: 'https://cdn.worldvectorlogo.com/logos/cassandra.svg',
  },
  {
    name: 'Python',
    logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
  },
  {
    name: 'Scala',
    logo: 'https://cdn.worldvectorlogo.com/logos/scala-4.svg',
  },
  {
    name: 'SQL',
    logo: 'http://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
  },
  {
    name: 'AWS Glue',
    logo: 'https://cdn.prod.website-files.com/64902e94cf962d0707c23165/64f201438dd608df0e008472_aws_glue_logo.webp',
  },
  {
    name: 'AWS Data Pipeline',
    logo: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_Data_Pipeline-512.png',
  },
  {
    name: 'Azure Data Factory',
    logo: 'https://avangelstech.com/wp-content/uploads/2023/08/azure-data-factory1-e1691424267300.png',
  },
  {
    name: 'GCP Dataflow',
    logo: 'https://codelabs.developers.google.com/static/codelabs/cloud-dataflow-starter/img/62b0919755804bea.png',
  },
];

function DataEngineeringPlatforms() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tools &amp; Technologies We Work With</h2>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {toolsAndTech.map((tool, index) => (
              <div key={index} className={styles.card}>
                <img src={tool.logo} alt={tool.name} />
              </div>
            ))}
            {toolsAndTech.map((tool, index) => (
              <div key={`dup-${index}`} className={styles.card}>
                <img src={tool.logo} alt={tool.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataEngineeringPlatforms;
