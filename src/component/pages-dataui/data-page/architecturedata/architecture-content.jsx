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
import ArchitectureToolsSection from "./architecture-techtool";
import AboutTech from "../../../common-ui/dataui/about-tech";

const WhatWeOffers = [
  {
    title: "Enterprise Data Architecture",
    description:
      "Design holistic frameworks to integrate, manage, and govern data across the enterprise.",
  },
  {
    title: "Cloud-Native Data Architecture",
    description:
      "Build scalable, flexible, and cost-efficient architectures on AWS, Azure, or Google Cloud.",
  },
  {
    title: "Data Integration Architecture",
    description:
      "Unify disparate data sources into a cohesive, accessible, and analytics-ready environment.",
  },
  {
    title: "Data Streaming Architecture",
    description:
      "Implement event-driven pipelines and architectures for instant insights.",
  },
  {
    title: "Hybrid & Multi-Cloud Architecture",
    description:
      "Create architectures that work seamlessly across multiple cloud and on-premise environments.",
  },
  {
    title: "Security & Compliance by Design",
    description:
      "Ensure your architecture is built with embedded security, governance, and compliance controls.",
  },
];

const whychooseus = [
  {
    title: "Future-Proof Designs",
    description:
      "We architect systems that can adapt to new technologies, workloads, and regulations.",
  },
  {
    title: "Cross-Platform Expertise",
    description:
      "Experience in relational, NoSQL, big data, and streaming platforms.",
  },
  {
    title: "Performance-Driven",
    description: "Optimized for speed, scalability, and minimal latency.",
  },
  {
    title: "Business Alignment",
    description:
      "Architectures designed around your unique operational and analytical needs.",
  },
  {
    title: "End-to-End Support",
    description:
      "From initial blueprint to full implementation and optimization.",
  },
];

const useCases = [
  "Designing a cloud-native architecture for enterprise analytics",
  "Implementing a hybrid architecture for regulated industries",
  "Building a real-time streaming data platform",
  "Migrating legacy systems to a modern, scalable architecture",
  "Unifying multi-cloud environments into a cohesive architecture",
];

const dataArchitectureDescription = [
  {
    name: "Amazon Redshift",
    description:
      "A fully managed cloud data warehouse service by AWS that allows fast query performance on large-scale datasets with massive parallel processing.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon-Redshift-Logo.svg/1862px-Amazon-Redshift-Logo.svg.png",
    iconColors: "linear-gradient(135deg, #f8d6d6, #fff5f5)", // soft pastel red
  },
  {
    name: "Google BigQuery",
    description:
      "A serverless, highly scalable, and cost-effective multi-cloud data warehouse designed for business agility and real-time analytics.",
    icon: "https://images.icon-icons.com/2699/PNG/512/google_bigquery_logo_icon_168150.png",
    iconColors: "linear-gradient(135deg, #e3ecfd, #f9fbff)", // pale Google blue
  },
  {
    name: "Snowflake",
    description:
      "A cloud-based data platform offering data warehousing, data lakes, and secure data sharing with elastic scaling and multi-cloud support.",
    icon: "https://cdn-icons-png.flaticon.com/512/2530/2530064.png",
    iconColors: "linear-gradient(135deg, #d6f7fb, #f7fcfd)", // light aqua blue
  },
  {
    name: "Microsoft Synapse",
    description:
      "An integrated analytics service combining enterprise data warehousing, big data integration, and real-time analytics in Azure.",
    icon: "https://intellifysolutions.com/wp-content/uploads/2023/08/Azure-Synapse-Analytics-1.png",
    iconColors: "linear-gradient(135deg, #d6ebff, #f5faff)", // soft azure blue
  },
  {
    name: "Amazon S3",
    description:
      "A highly scalable, secure, and durable object storage service by AWS, designed for data lakes, backup, archiving, and big data analytics.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg",
    iconColors: "linear-gradient(135deg, #ffe6d1, #fff8f3)", // pastel orange/peach
  },
  {
    name: "Databricks",
    description:
      "A unified data analytics and AI platform that combines data engineering, machine learning, and collaborative analytics on top of Apache Spark.",
    icon: "https://1000logos.net/wp-content/uploads/2025/01/Databricks-Emblem.png",
    iconColors: "linear-gradient(135deg, #ffd9d6, #fff5f4)", // light coral red
  },
];

function ArchitectureContent() {
  return (
    <section>
      <Banner
        heading="Architecture"
        subtext="Build a scalable, secure, and future-ready foundation for your data ecosystem."
        buttonText="Plan Your Data Architecture"
        note="Our data architecture services ensure that your organization’s information systems are designed for performance, security, and adaptability. From cloud-native solutions to hybrid integrations, we create robust architectures that empower analytics, innovation, and compliance."
      />

      <InfoStats
        stats={[
          { number: "60%", label: "Fewer data silos after modernization" },
          {
            number: "99.99%",
            label: "Uptime achievable with cloud-native designs",
          },
          {
            number: "3×",
            label: "Faster analytics with optimized architecture",
          },
        ]}
        caption="Trusted by Leading Enterprises and"
        highlight="High-Growth Innovators"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      <ArchitectureToolsSection />
      <AboutTech technologies={dataArchitectureDescription} />
      <WhyChooseUs ChooseUs={whychooseus} />
      <ScheduleConsultation
        heading="Design a Data Architecture That Scales With Your Business"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Data Architecture Consultation"
        Icon={MdSchedule}
      />

      {/* <OnlinePresence 
        title="Let’s Build Your Future-Ready Data Architecture Today."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Data Architecture Services"
      /> */}

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default ArchitectureContent;
