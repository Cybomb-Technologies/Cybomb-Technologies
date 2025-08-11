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
    title: "Cloud Storage Solutions",
    description:
      "Flexible, secure, and scalable cloud storage options for all business sizes.",
  },
  {
    title: "Hybrid Storage Architecture",
    description:
      "Combine on-premises and cloud storage for optimized cost and performance.",
  },
  {
    title: "High-Performance Storage",
    description:
      "Low-latency storage for demanding workloads like AI, ML, and analytics.",
  },
  {
    title: "Data Archiving & Backup",
    description:
      "Long-term storage solutions with secure backup and disaster recovery.",
  },
  {
    title: "Object, File & Block Storage",
    description:
      "Support for multiple storage types based on application requirements.",
  },
  {
    title: "Storage Optimization",
    description:
      "Reduce costs with tiered storage, compression, and deduplication strategies.",
  },
];

const whychooseus = [
  {
    title: "Scalability On-Demand",
    description:
      "Seamlessly expand storage capacity without disrupting operations.",
  },
  {
    title: "Multi-Platform Expertise",
    description:
      "Experience with AWS S3, Azure Blob, Google Cloud Storage, and on-premises systems.",
  },
  {
    title: "High Availability",
    description:
      "Redundant systems ensure your data is always accessible.",
  },
  {
    title: "Security & Compliance",
    description:
      "Built-in encryption, access controls, and compliance certifications.",
  },
  {
    title: "Cost-Efficient Solutions",
    description:
      "Optimize storage costs with the right mix of technologies and strategies.",
  },
];

const useCases = [
  "Migrating enterprise workloads to cloud storage",
  "Setting up hybrid storage for regulated industries",
  "Archiving petabytes of historical data for compliance",
  "Providing low-latency storage for AI model training",
  "Optimizing storage footprint with automated tiering"
];

function StorageContent() {
  return (
    <section>
      <Banner 
        heading="Storage Solutions"
        subtext="Secure, scalable, and high-performance storage for your business data."
        buttonText="Book Free Consultation"
        note="Our data storage solutions are designed to meet the needs of modern enterprises, providing flexibility, security, and cost-effectiveness. From cloud to on-premises to hybrid setups, we deliver storage systems that grow with your business."
      />

      <InfoStats
        stats={[
          { number: "99.999%", label: "data durability with leading storage providers" },
          { number: "PB+", label: "data under management for global clients" },
          { number: "50%", label: "average cost savings with optimized storage strategies" }
        ]}
        caption="Trusted by Enterprises for"
        highlight="Secure & Scalable Storage"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      
      <ScheduleConsultation
        heading="Future-Proof Your Business with Reliable Storage Solutions"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="Data Storage Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <OnlinePresence 
        title="Let’s Design the Right Storage Strategy for Your Business."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Data Storage Services"
      />

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default StorageContent;
