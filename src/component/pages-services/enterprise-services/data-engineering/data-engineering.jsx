import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import DataEngineeringContent from "./data-engineering-content";
import Metatags from "../../../../SEO/meta-tags";

function DataEngineering() {
  const metaPropsData = {
    title:
      "Data Engineering Services - Cybomb Technologies | Build Scalable Data Platforms & Pipelines",
    description:
      "Cybomb Technologies offers expert Data Engineering Services to design, build, and manage scalable data pipelines, warehouses, and analytics platforms for actionable business insights.",
    keyword:
      "data engineering services & solutions, data engineering services in chennai, trusted data engineering company, data engineering services & solutions, data engineering consulting services, data engineering services & consulting",
    url: "https://www.cybomb.com/services/data-engineering",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
  const tabsData = [
    {
      id: "planning",
      title: "Planning & Consultation",
      description:
        "We start with a clear strategy for data engineering to ensure your business gains actionable insights from data.",
      cards: [
        {
          title: "Data Requirement Analysis",
          description:
            "We analyze your data sources, storage needs, and business goals to define a robust data engineering strategy.",
        },
        {
          title: "Technology Consultation",
          description:
            "We help you choose the right tools and platforms (Snowflake, AWS Redshift, Databricks, BigQuery, etc.) for your data needs.",
        },
        {
          title: "Data Roadmap Planning",
          description:
            "We create a roadmap for data collection, processing, storage, and analytics to align with your business growth.",
        },
        {
          title: "Cost & ROI Estimation",
          description:
            "We forecast infrastructure costs, scalability potential, and ROI from data initiatives.",
        },
      ],
    },
    {
      id: "design",
      title: "Design",
      description:
        "We design scalable and secure data architectures to support advanced analytics and decision-making.",
      cards: [
        {
          title: "Data Pipeline Design",
          description:
            "We design ETL/ELT pipelines to move and transform data efficiently from multiple sources.",
        },
        {
          title: "Data Lake & Warehouse Setup",
          description:
            "We design data lakes and warehouses to store structured and unstructured data at scale.",
        },
        {
          title: "Schema & Modeling",
          description:
            "We create optimized data models and schemas for reporting, analytics, and ML workflows.",
        },
        {
          title: "Integration Framework",
          description:
            "We design systems that integrate with CRMs, ERPs, APIs, and third-party data providers.",
        },
      ],
    },
    {
      id: "development",
      title: "Development",
      description:
        "We build robust data pipelines and platforms to ensure reliable, real-time, and scalable data processing.",
      cards: [
        {
          title: "ETL/ELT Development",
          description:
            "We develop automated pipelines to extract, transform, and load data for business insights.",
        },
        {
          title: "Real-Time Data Streaming",
          description:
            "We implement Kafka, Spark, or AWS Kinesis for real-time data ingestion and analytics.",
        },
        {
          title: "Data API Development",
          description:
            "We create secure APIs to provide seamless access to data across applications.",
        },
        {
          title: "Cloud Data Solutions",
          description:
            "We build cloud-native data platforms on AWS, Azure, or GCP for scalability and efficiency.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing",
      description:
        "We ensure your data is accurate, consistent, and reliable for business decision-making.",
      cards: [
        {
          title: "Data Validation",
          description:
            "We check data accuracy, consistency, and completeness across pipelines.",
        },
        {
          title: "Performance Testing",
          description:
            "We test pipeline speed, scalability, and fault tolerance for high data loads.",
        },
        {
          title: "Integration Testing",
          description:
            "We validate end-to-end workflows across data sources, warehouses, and analytics tools.",
        },
        {
          title: "Data Governance Compliance",
          description:
            "We ensure compliance with GDPR, HIPAA, and other regulatory standards.",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      description:
        "We deploy data engineering solutions seamlessly into your existing infrastructure.",
      cards: [
        {
          title: "Pipeline Orchestration",
          description:
            "We use Airflow, Luigi, or Prefect to schedule and manage data workflows.",
        },
        {
          title: "Data Migration",
          description:
            "We migrate legacy databases to modern data warehouses and cloud platforms.",
        },
        {
          title: "Scalable Infrastructure Setup",
          description:
            "We deploy infrastructure that auto-scales based on data volume and demand.",
        },
        {
          title: "Monitoring & Logging",
          description:
            "We implement monitoring tools to track data pipeline health and resolve issues quickly.",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Support",
      description:
        "We provide continuous support and enhancements to keep your data systems performing optimally.",
      cards: [
        {
          title: "Pipeline Monitoring",
          description:
            "We track ETL processes and resolve failures in real time.",
        },
        {
          title: "System Upgrades",
          description:
            "We keep your data infrastructure updated with the latest technologies and patches.",
        },
        {
          title: "Data Optimization",
          description:
            "We optimize queries, storage, and pipelines for better performance and cost-efficiency.",
        },
        {
          title: "24/7 Support",
          description:
            "We provide dedicated support to ensure uninterrupted data operations.",
        },
      ],
    },
  ];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <DataEngineeringContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure />
    </>
  );
}

export default DataEngineering;
