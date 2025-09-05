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
import StorageToolsSection from "./storage-techtool";
import AboutTech from "../../../common-ui/dataui/about-tech";

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
    description: "Redundant systems ensure your data is always accessible.",
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
  "Optimizing storage footprint with automated tiering",
];

const storageDescription = [
  {
    name: "MySQL",
    description:
      "An open-source relational database management system (RDBMS) widely used for web applications, offering reliability, scalability, and strong community support.",
    icon: "https://cdn-icons-png.flaticon.com/512/528/528260.png",
    iconColors: "linear-gradient(135deg, #d1f1f7, #f5fcfe)", // soft aqua/teal
  },
  {
    name: "PostgreSQL",
    description:
      "A powerful open-source relational database system with advanced features like support for JSON, extensibility, and ACID compliance, making it ideal for modern applications.",
    icon: "https://www.svgrepo.com/show/306591/postgresql.svg",
    iconColors: "linear-gradient(135deg, #d6e4f5, #f5f9ff)", // pale blue
  },
  {
    name: "MariaDB",
    description:
      "An open-source relational database forked from MySQL, designed for improved performance, security, and compatibility with enterprise features.",
    icon: "http://images.icon-icons.com/2699/PNG/512/mariadb_logo_icon_170968.png",
    iconColors: "linear-gradient(135deg, #cde8f0, #f5fbfd)", // very light teal/blue
  },
  {
    name: "Microsoft SQL Server",
    description:
      "A relational database management system developed by Microsoft, offering enterprise-grade analytics, in-memory processing, and strong integration with the Microsoft ecosystem.",
    icon: "https://img.icons8.com/?size=512&id=laYYF3dV0Iew&format=png",
    iconColors: "linear-gradient(135deg, #ffe5cc, #fdfdfdff)", // warm peach
  },
  {
    name: "MongoDB",
    description:
      "A popular NoSQL database that stores data in flexible, JSON-like documents, making it ideal for scalable, high-performance applications with unstructured data.",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-svg-png-download-3030245.png",
    iconColors: "linear-gradient(135deg, #d7f7d0, #f6fdf5)", // light green
  },
  {
    name: "DynamoDB",
    description:
      "A fully managed NoSQL database service by AWS, designed for fast and predictable performance with seamless scalability for large-scale applications.",
    icon: "https://cdn.freebiesupply.com/logos/thumbs/2x/aws-dynamodb-logo.png",
    iconColors: "linear-gradient(135deg, #d6dbf7, #f5f7ff)", // pale indigo/blue
  },
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
          {
            number: "99.999%",
            label: "Durability with enterprise-grade storage",
          },
          { number: "50%", label: "Cost savings with tiered strategies" },
          {
            number: "Petabyte-scale",
            label: "Data storage management supported",
          },
        ]}
        caption="Trusted by Enterprises for"
        highlight="Secure & Scalable Storage"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      <StorageToolsSection />
      <AboutTech technologies={storageDescription} />
      <WhyChooseUs ChooseUs={whychooseus} />

      <ScheduleConsultation
        heading="Future-Proof Your Business with Reliable Storage Solutions"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Data Storage Consultation"
        Icon={MdSchedule}
      />

      {/* <OnlinePresence 
        title="Let’s Design the Right Storage Strategy for Your Business."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Data Storage Services"
      /> */}

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default StorageContent;
