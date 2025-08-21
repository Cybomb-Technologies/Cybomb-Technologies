import Processingcontent from "./processing-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function ProcessingServices() {
  const metaPropsData = {
    title: "Data Processing Services - Cybomb Technologies | Accurate & Efficient Solutions",
    description:
      "Cybomb Technologies provides advanced data processing services, ensuring accuracy, speed, and efficiency to help businesses manage and utilize data effectively.",
    keyword:
      "Data Processing, Information Processing, Data Transformation, Data Management, Data Services, Cybomb Technologies",
    url: "https://www.cybomb.com/services/processing",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Analysis & Planning',
    description:
      'We begin by defining processing needs, data sources, and transformation objectives.',
    cards: [
      {
        title: 'Data Source Identification',
        description:
          'We identify structured, semi-structured, and unstructured data sources for processing.'
      },
      {
        title: 'Workflow Planning',
        description:
          'We design workflows for batch, streaming, and hybrid processing needs.'
      },
      {
        title: 'Technology Selection',
        description:
          'We select the right processing tools and frameworks such as Apache Spark, Hadoop, or Kafka.'
      },
      {
        title: 'Scalability Roadmap',
        description:
          'We define scalability strategies to handle growing data volumes.'
      }
    ]
  },
  {
    id: 'ingestion',
    title: 'Ingestion ',
    description:
      'We collect data from multiple sources and prepare it for processing.',
    cards: [
      {
        title: 'Batch Ingestion',
        description:
          'We gather large volumes of data in scheduled intervals for processing.'
      },
      {
        title: 'Real-Time Streaming',
        description:
          'We use tools like Kafka and Flink for continuous, real-time data streams.'
      },
      {
        title: 'API & File-Based Ingestion',
        description:
          'We collect data via APIs, flat files, sensors, and third-party connectors.'
      },
      {
        title: 'Data Staging',
        description:
          'We move ingested data into staging layers for initial transformations.'
      }
    ]
  },
  {
    id: 'processing',
    title: 'Processing',
    description:
      'We clean, enrich, and transform raw data into usable formats.',
    cards: [
      {
        title: 'ETL & ELT',
        description:
          'We design extract-transform-load pipelines for structured and unstructured data.'
      },
      {
        title: 'Data Cleaning',
        description:
          'We remove duplicates, handle missing values, and standardize formats.'
      },
      {
        title: 'Data Enrichment',
        description:
          'We augment raw datasets with reference data to add more context.'
      },
      {
        title: 'Parallel & Distributed Processing',
        description:
          'We leverage Spark, Hadoop, and cloud services for high-performance processing.'
      }
    ]
  },
  {
    id: 'quality',
    title: 'Validation',
    description:
      'We ensure processed data meets accuracy, consistency, and compliance standards.',
    cards: [
      {
        title: 'Validation Rules',
        description:
          'We apply rules for completeness, accuracy, and format validation.'
      },
      {
        title: 'Error Handling',
        description:
          'We design mechanisms to detect, log, and resolve data anomalies.'
      },
      {
        title: 'Compliance Checks',
        description:
          'We enforce regulatory requirements like GDPR, HIPAA, and industry standards.'
      },
      {
        title: 'Data Lineage Tracking',
        description:
          'We trace data flow from ingestion to output for transparency.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy processing pipelines into production and integrate with downstream systems.',
    cards: [
      {
        title: 'Pipeline Automation',
        description:
          'We automate batch and real-time processing workflows using orchestration tools.'
      },
      {
        title: 'Cloud & On-Prem Integration',
        description:
          'We integrate pipelines with cloud services, warehouses, and on-prem systems.'
      },
      {
        title: 'API & Reporting Integration',
        description:
          'We connect processed data with APIs, BI tools, and analytics dashboards.'
      },
      {
        title: 'Monitoring & Alerts',
        description:
          'We implement monitoring dashboards and alert systems for pipeline health.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We monitor and optimize pipelines to ensure performance and scalability.',
    cards: [
      {
        title: 'Performance Tuning',
        description:
          'We optimize queries, memory usage, and compute efficiency.'
      },
      {
        title: 'Scalability Enhancements',
        description:
          'We enable auto-scaling to handle fluctuating data volumes.'
      },
      {
        title: 'Cost Optimization',
        description:
          'We minimize cloud and storage costs through efficient pipeline design.'
      },
      {
        title: 'Ongoing Support',
        description:
          'We provide 24/7 monitoring, troubleshooting, and pipeline improvements.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <Processingcontent />
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

export default ProcessingServices;
