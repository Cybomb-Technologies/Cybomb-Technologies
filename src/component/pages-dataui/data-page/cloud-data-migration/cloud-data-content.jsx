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
import CloudDataToolsSection from "./cloud-data-techtool";
import AboutTech from "../../../common-ui/dataui/about-tech";

const WhatWeOffers = [
  {
    title: "Cloud Readiness Assessment",
    description:
      "Evaluate your existing infrastructure, data, and applications for a smooth cloud migration.",
  },
  {
    title: "Migration Strategy & Planning",
    description:
      "Develop a step-by-step migration roadmap tailored to your business needs and timelines.",
  },
  {
    title: "Data Transfer & Validation",
    description:
      "Securely move structured and unstructured data while ensuring integrity and completeness.",
  },
  {
    title: "Hybrid & Multi-Cloud Support",
    description:
      "Enable flexible migration to AWS, Azure, GCP, or hybrid environments.",
  },
  {
    title: "Downtime Minimization",
    description:
      "Design migration processes that keep your business running during the transition.",
  },
  {
    title: "Post-Migration Optimization",
    description:
      "Fine-tune cloud environments for cost, performance, and scalability.",
  },
];

const whychooseus = [
  {
    title: "End-to-End Expertise",
    description:
      "From planning to execution, we handle every stage of your migration journey.",
  },
  {
    title: "Security-First Approach",
    description:
      "All migration processes are designed with encryption, compliance, and risk mitigation in mind.",
  },
  {
    title: "Vendor-Neutral Advice",
    description:
      "We recommend the best-fit cloud provider based on your needs, not vendor incentives.",
  },
  {
    title: "Proven Migration Frameworks",
    description:
      "Our tested methodologies ensure a predictable and successful migration.",
  },
  {
    title: "Continuous Support",
    description:
      "We provide post-migration monitoring, training, and optimization assistance.",
  },
];

const useCases = [
  "Migrating on-premise databases to AWS Redshift for scalability",
  "Consolidating multiple data warehouses into a single cloud platform",
  "Moving legacy applications to a hybrid cloud environment",
  "Transitioning analytics workloads to Azure Synapse",
  "Shifting real-time streaming data pipelines to Google Cloud",
];

const cloudDataMigrationDescription = [
  {
    name: "Azure Migrate",
    description:
      "Microsoft’s unified migration platform that helps you discover, assess, and migrate applications, infrastructure, and data to Azure with minimal downtime.",
    icon: "https://images.saasworthy.com/azuremigrate_11351_logo_1666091880_0vz91.png",
    iconColors: "linear-gradient(135deg, #cce6f9, #f5fbff)", // much lighter azure
  },
  {
    name: "Talend",
    description:
      "A leading open-source ETL and cloud data integration platform that enables users to connect, transform, and integrate data from diverse sources with scalability.",
    icon: "https://images.icon-icons.com/2699/PNG/512/talend_logo_icon_169665.png",
    iconColors: "linear-gradient(135deg, #ffd9cc, #ffffffff)", // very light peach
  },
  {
    name: "Azure DMS",
    description:
      "Azure Database Migration Service simplifies the migration of multiple database sources to Azure with near-zero downtime and guided processes.",
    icon: "https://symbols.getvecta.com/stencil_10/12_amazon-rds.5b660971df.png",
    iconColors: "linear-gradient(135deg, #cceeff, #f2fcff)", // soft sky blue
  },
  {
    name: "Fivetran",
    description:
      "Fivetran provides automated data integration with fully managed pipelines, enabling fast and reliable data replication from multiple sources into cloud data warehouses.",
    icon: "https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png",
    iconColors: "linear-gradient(135deg, #d6ebff, #f7fbff)", // pale blue tones
  },
  {
    name: "Dynatrace",
    description:
      "Dynatrace is an AI-powered monitoring and observability platform that provides full-stack visibility, application performance management, and cloud infrastructure monitoring.",
    icon: "https://www.svgrepo.com/show/353681/dynatrace-icon.svg",
    iconColors: "linear-gradient(135deg, #d9f5e0, #f8fdf9)", // mint pastel
  },
  {
    name: "New Relic",
    description:
      "New Relic is an observability platform that helps developers and IT teams monitor, debug, and optimize applications and infrastructure in real time.",
    icon: "https://s3.eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/1/2/7/127_170_196.png",
    iconColors: "linear-gradient(135deg, #d6f2f5, #f5fcfc)", // aqua pastel
  },
];

function CloudDataMigrationContent() {
  return (
    <section>
      <Banner
        heading="Cloud Data Migration"
        subtext="Seamlessly move your data to the cloud with minimal risk and maximum efficiency."
        buttonText="Start Your Migration"
        note="Our cloud data migration services help businesses modernize their data infrastructure by transitioning to secure, scalable, and cost-effective cloud platforms. We ensure a smooth migration process that minimizes downtime and maximizes long-term value."
      />

      <InfoStats
        stats={[
          { number: "94%", label: "Of enterprises already use cloud services" },
          { number: "60%", label: "Report cost savings after migration" },
          { number: "3×", label: "Faster service deployment post-migration" },
        ]}
        caption="Trusted by Enterprises and"
        highlight="Innovation-Driven Startups"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      <CloudDataToolsSection />
      <AboutTech technologies={cloudDataMigrationDescription} />
      <WhyChooseUs ChooseUs={whychooseus} />
      <ScheduleConsultation
        heading="Modernize Your Infrastructure with Cloud Data Migration"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Cloud Data Migration Consultation"
        Icon={MdSchedule}
      />

      {/* 
      <OnlinePresence 
        title="Let’s Plan Your Cloud Data Migration Strategy."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Cloud Data Migration Services"
      /> */}

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default CloudDataMigrationContent;
