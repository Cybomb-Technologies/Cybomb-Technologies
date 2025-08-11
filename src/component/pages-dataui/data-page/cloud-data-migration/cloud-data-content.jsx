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
  "Shifting real-time streaming data pipelines to Google Cloud"
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
          { number: "94%", label: "of enterprises already use a cloud service" },
          { number: "60%", label: "report cost savings after cloud migration" },
          { number: "3x", label: "faster deployment of new services post-migration" }
        ]}
        caption="Trusted by Enterprises and"
        highlight="Innovation-Driven Startups"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      
      <ScheduleConsultation
        heading="Modernize Your Infrastructure with Cloud Data Migration"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="Cloud Data Migration Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <OnlinePresence 
        title="Let’s Plan Your Cloud Data Migration Strategy."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Cloud Data Migration Services"
      />

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default CloudDataMigrationContent;
