import Banner from "../../../common-ui/enterprise-services/banner";
import InfoStats from "../../../common-ui/enterprise-services/info-stats";
import WhyChooseUs from "../../../common-ui/enterprise-services/why-choose-us";
import OnlinePresence from "../../../common-ui/enterprise-services/online-presence";
import DevelopmentProcess from "../../../common-ui/enterprise-services/development-process";
import ScheduleConsultation from "../../../common-ui/enterprise-services/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import ServicesOfferings from "../../../common-ui/enterprise-services/services-offerings";
import DataEngineeringPlatforms from "./DataEngineeringPlatforms";
import dataEngImg from './../../../../assets/technologies/data-engineering-img.jpg';
import contactUsImg from './../../../../assets/contact/contact-us-img1.jpg';

const offerings = [
  {
    title: "Data Architecture & Strategy",
    description: "We define your end-to-end data pipeline — from ingestion to transformation to consumption.",
  },
  {
    title: "Data Warehousing Solutions",
    description: "Design and implement modern data warehouses using Redshift, BigQuery, Snowflake, or Azure Synapse.",
  },
  {
    title: "ETL/ELT Pipeline Development",
    description: "Build scalable Extract, Transform, Load (ETL/ELT) systems using tools like Apache Airflow, dbt, or custom code.",
  },
  {
    title: "Real-Time Data Streaming",
    description: "Implement event-driven pipelines using Apache Kafka, Spark Streaming, or AWS Kinesis.",
  },
  {
    title: "Data Lake Implementation",
    description: "Store and manage unstructured data at scale using Hadoop, AWS S3, or Azure Data Lake.",
  },
  {
    title: "Data Quality & Governance",
    description: "Establish monitoring, validation, and compliance frameworks for data integrity and security.",
  },
];

const whychooseus = [
  {
    title: "Performance-Optimized Pipelines",
    description: "We ensure your data moves fast, error-free, and at scale.",
  },
  {
    title: "Deep Industry Knowledge",
    description: "Our solutions align with your business domain — be it finance, healthcare, retail, or logistics.",
  },
  {
    title: "Compliance-Ready Infrastructure",
    description: "We build systems that meet GDPR, HIPAA, SOC2, and industry-specific regulations.",
  },
  {
    title: "Data-Driven Culture",
    description: "We don’t just engineer pipelines — we empower teams to use data confidently.",
  },
  {
    title: "End-to-End Service",
    description: "From ingestion to dashboarding, we cover every stage of the data journey.",
  },
];

const useCases = [
  "Consolidating data from CRM, ERP, and marketing into one warehouse",
  "Real-time fraud detection using streaming data",
  "Building ML-ready datasets for predictive analytics",
  "Migrating on-premise ETL to cloud-native architectures",
  "Automating data quality checks and anomaly detection",
  "Creating custom dashboards powered by live data"
];

function DataEngineeringContent() {
  return (
    <section>
      <Banner 
        heading="Data Engineering"
        subtext="Turn raw data into real-time business value."
        buttonText="Book Free Consultation"
        note="Our data engineering services help you design, build, and scale robust data infrastructure for analytics, machine learning, and decision-making. We enable your business to move from fragmented data to unified, actionable insights."
      />
      <InfoStats
        stats={[
          { number: "70%", label: "Reduction in processing time with optimized pipelines" },
          { number: "99.9%", label: "Uptime for real-time data flows" },
          { number: "Petabyte-scale", label: "Analytics supported with scalable architectures" }
        ]}
        caption="Trusted by Data-Driven Enterprises and"
        highlight="Leading Innovators"
      />
      <ServicesOfferings 
        title="What We Offer"
        items={offerings}
      />
      <DataEngineeringPlatforms/>

      <ScheduleConsultation
        heading="Build Future-Ready Data Infrastructure with Our Data Engineering Services"
        buttonText="Schedule a Consultation!"
        imageSrc={dataEngImg}
        imageAlt="Data Engineering Consultation"
        Icon={MdSchedule}
      />
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Let’s Transform Your Data Into Actionable Insights"
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Data Engineering Services"
      />
      <DevelopmentProcess 
        title="Use Case"
        Process={useCases}
      />
    </section>
  );
}

export default DataEngineeringContent;
