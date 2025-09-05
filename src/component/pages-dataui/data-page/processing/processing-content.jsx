import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
// import OnlinePresence from "../../../common-ui/dataui/online-presence";
import DevelopmentProcess from "../../../common-ui/dataui/development-process";
import contactUsImg from "./../../../../assets/contact/contact-us-img2.jpg";
import scheduleConsultImg from "./../../../../assets/contact/schedule-a-consultation-img3.jpg";
import ProcessingToolsSection from "./processing-techtool";
import AboutTech from "../../../common-ui/dataui/about-tech";

const WhatWeOffers = [
  {
    title: "Real-Time Data Processing",
    description:
      "Capture and process streaming data for instant analytics and decision-making.",
  },
  {
    title: "Batch Data Processing",
    description:
      "Efficiently process large volumes of data at scheduled intervals.",
  },
  {
    title: "ETL Services",
    description:
      "Clean, transform, and load data from multiple sources into a unified format.",
  },
  {
    title: "Data Pipeline Automation",
    description:
      "Automate workflows to ensure consistent, timely, and accurate data delivery.",
  },
  {
    title: "Data Quality & Validation",
    description:
      "Implement checks to ensure your data is accurate, complete, and reliable.",
  },
  {
    title: "Cloud Data Processing",
    description:
      "Leverage cloud platforms for scalable, cost-effective data processing solutions.",
  },
];

const whychooseus = [
  {
    title: "Scalable Architecture",
    description:
      "Our solutions handle everything from small datasets to massive enterprise workloads.",
  },
  {
    title: "Technology Versatility",
    description:
      "We work with Apache Spark, Hadoop, Kafka, AWS, Azure, GCP, and more.",
  },
  {
    title: "Data Security First",
    description:
      "All processing is compliant with industry standards and security best practices.",
  },
  {
    title: "Performance Optimized",
    description:
      "We design systems that minimize latency and maximize throughput.",
  },
  {
    title: "End-to-End Expertise",
    description:
      "From ingestion to visualization, we manage the full data lifecycle.",
  },
];

const useCases = [
  "Processing millions of records daily for market trend analysis",
  "Streaming IoT device data for real-time monitoring",
  "Aggregating sales data from multiple regions for forecasting",
  "Cleaning and enriching customer data for personalization",
  "Running large-scale batch jobs for financial reporting",
];

const processingDescription = [
  {
    name: "Apache Flink",
    description:
      "A stream-processing framework that supports real-time and batch data processing with high throughput, low latency, and advanced stateful computations.",
    icon: "https://flink.apache.org/img/logo/png/1000/flink_squirrel_1000.png",
    iconColors: "linear-gradient(135deg, #fde2e2, #fff6f6)", // light coral/red
  },
  {
    name: "Hadoop MapReduce",
    description:
      "A distributed processing framework within the Hadoop ecosystem that enables large-scale data processing using the Map and Reduce programming model.",
    icon: "https://cdn.worldvectorlogo.com/logos/hadoop.svg",
    iconColors: "linear-gradient(135deg, #fff4cc, #fffbe6)", // soft yellow
  },
  {
    name: "Beam",
    description:
      "An open-source unified programming model for batch and streaming data processing, allowing portability across multiple execution engines like Spark and Flink.",
    icon: "https://beam.apache.org/images/logos/3-color/nameless/beam-logo-3-color-nameless-1000.png",
    iconColors: "linear-gradient(135deg, #ffe6cc, #fff9f2)", // pale orange
  },
  {
    name: "Luigi",
    description:
      "A Python-based workflow orchestration tool that simplifies building and managing complex pipelines with task dependencies, scheduling, and visualization.",
    icon: "https://cdn.prod.website-files.com/6108e07db6795265f203a636/616ffa1d990abe637cb1b7e4_Dask.png",
    iconColors: "linear-gradient(135deg, #e0f7ec, #f7fffa)", // mint green
  },
  {
    name: "Apache Airflow",
    description:
      "An open-source workflow orchestration platform to programmatically author, schedule, and monitor complex data pipelines using directed acyclic graphs (DAGs).",
    icon: "https://airflow.apache.org/docs/apache-airflow/1.10.6/_images/pin_large.png",
    iconColors: "linear-gradient(135deg, #d6ebff, #f5faff)", // very light blue
  },
  {
    name: "Amazon Kinesis",
    description:
      "A fully managed AWS service for real-time data ingestion and processing at scale, enabling analytics, application monitoring, and event-driven architectures.",
    icon: "https://cdn.worldvectorlogo.com/logos/aws-kinesis.svg",
    iconColors: "linear-gradient(135deg, #ffe8cc, #fffaf2)", // pale orange-beige
  },
];

function ProcessingContent() {
  return (
    <section>
      <Banner
        heading="Processing Services"
        subtext="Transform raw data into actionable insights with speed and precision."
        buttonText="Book Free Consultation"
        note="Our data processing services help businesses handle complex datasets efficiently, ensuring accuracy, scalability, and security. From real-time analytics to large-scale batch processing, we provide solutions tailored to your needs."
      />
      <InfoStats
        stats={[
          { number: "2TB+", label: "Of data processed daily across pipelines" },
          { number: "99.9%", label: "Uptime for optimized cloud data flows" },
          {
            number: "70%",
            label: "Faster processing with modern architectures",
          },
        ]}
        caption="Trusted by Businesses Across"
        highlight="Industries Worldwide"
      />
      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      <ProcessingToolsSection />
      <AboutTech technologies={processingDescription} />
      <WhyChooseUs ChooseUs={whychooseus} />
      <ScheduleConsultation
        heading="Unlock the Power of Your Data with Our Processing Expertise"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Data Processing Consultation"
        Icon={MdSchedule}
      />
      {/* <OnlinePresence 
        title="Let’s Build the Right Data Processing Solution for Your Business."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Data Processing Services"
      /> */}
      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default ProcessingContent;
