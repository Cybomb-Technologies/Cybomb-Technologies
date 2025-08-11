import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
import OnlinePresence from "../../../common-ui/dataui/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import DevelopmentProcess from "../../../common-ui/dataui/development-process";

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
  "Running large-scale batch jobs for financial reporting"
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
          { number: "2 TB+", label: "Average data processed daily for our clients" },
          { number: "99.9%", label: "Uptime for our cloud-based data pipelines" },
          { number: "70%", label: "Reduction in data processing time with optimized pipelines" }
        ]}
        caption="Trusted by Businesses Across"
        highlight="Industries Worldwide"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      
      <ScheduleConsultation
        heading="Unlock the Power of Your Data with Our Processing Expertise"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="Data Processing Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <OnlinePresence 
        title="Let’s Build the Right Data Processing Solution for Your Business."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Data Processing Services"
      />

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default ProcessingContent;
