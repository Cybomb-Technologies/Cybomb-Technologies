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
import GovernanceToolsSection from "./governance-techtool";
import AboutTech from "../../../common-ui/dataui/about-tech";

const WhatWeOffers = [
  {
    title: "Data Governance Framework",
    description:
      "Establish clear policies, roles, and processes to manage data across the organization.",
  },
  {
    title: "Data Privacy & Compliance",
    description:
      "Ensure adherence to regulations like GDPR, CCPA, HIPAA, and industry-specific standards.",
  },
  {
    title: "Metadata Management",
    description:
      "Maintain consistent, accurate metadata for better data discovery and lineage tracking.",
  },
  {
    title: "Master Data Management (MDM)",
    description:
      "Create a single, trusted source of truth for core business data entities.",
  },
  {
    title: "Data Quality Management",
    description:
      "Implement tools and processes to continuously monitor and improve data accuracy.",
  },
  {
    title: "Policy Enforcement & Monitoring",
    description:
      "Automate governance policies to ensure compliance and prevent data misuse.",
  },
];

const whychooseus = [
  {
    title: "Regulatory Expertise",
    description:
      "We stay updated on global compliance requirements to safeguard your organization.",
  },
  {
    title: "Custom Governance Models",
    description:
      "Frameworks tailored to your business, industry, and operational needs.",
  },
  {
    title: "Technology-Enabled Governance",
    description:
      "Leverage leading platforms for policy automation, data catalogs, and monitoring.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Reduce the likelihood of breaches, fines, and operational disruptions.",
  },
  {
    title: "Collaborative Approach",
    description:
      "We engage stakeholders across IT, legal, and business units for effective governance.",
  },
];

const useCases = [
  "Implementing GDPR-compliant data handling for global operations",
  "Creating a unified data catalog for enterprise-wide access",
  "Setting up master data management for consistent customer records",
  "Automating policy enforcement to prevent unauthorized data access",
  "Building an audit-ready governance framework for financial institutions",
];

const governanceDescription = [
  {
    name: "Collibra",
    description:
      "A leading data governance platform that provides a centralized system for managing data assets, ensuring data quality, compliance, and collaboration across organizations.",
    icon: "https://www.datameer.com/wp-content/uploads/2023/04/yrh4ffcjynusx5wkhzyx.png",
    iconColors: "linear-gradient(135deg, #e3edff, #f8faff)", // soft blue tones
  },
  {
    name: "Alation",
    description:
      "A data catalog and governance solution that helps organizations discover, understand, and govern their data assets while fostering data-driven collaboration.",
    icon: "https://images.saasworthy.com/alation_11773_logo_1607581065_sbeah.png",
    iconColors: "linear-gradient(135deg, #ffeecf, #fff9ef)", // pale golden yellow
  },
  {
    name: "BigID",
    description:
      "A data privacy and security platform that helps enterprises discover, classify, and govern sensitive data to ensure compliance with global data protection regulations.",
    icon: "https://astrix.security/wp-content/uploads/2024/06/icon-customer-stories-menu-bigid.png",
    iconColors: "linear-gradient(135deg, #ffe1dc, #fff6f5)", // light coral/pink
  },
  {
    name: "Apache Atlas",
    description:
      "An open-source metadata and governance framework that enables organizations to manage metadata, data lineage, and classifications across the Hadoop ecosystem and beyond.",
    icon: "https://data-universe.org/wp-content/uploads/2023/03/Imagen2-1.png",
    iconColors: "linear-gradient(135deg, #d7f3f2, #f5fcfb)", // aqua/teal tint
  },
  {
    name: "Azure Purview",
    description:
      "A unified data governance service from Microsoft Azure that enables data discovery, classification, lineage tracking, and compliance across hybrid and multi-cloud environments.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Microsoft_Purview_Logo.svg/2048px-Microsoft_Purview_Logo.svg.png",
    iconColors: "linear-gradient(135deg, #d6ebff, #f5faff)", // very soft azure blue
  },
  {
    name: "Datafold",
    description:
      "A data quality and observability platform that automates testing, monitors pipelines, and ensures reliable data by detecting anomalies and validating transformations.",
    icon: "https://images.saasworthy.com/tr:w-112,h-0,c-at_max,e-sharpen-1/datafold_9355_logo_1612520621_dzuse.svg",
    iconColors: "linear-gradient(135deg, #ffd9e6, #fff2f7)", // blush pink
  },
];

function GovernanceContent() {
  return (
    <section>
      <Banner
        heading="Governance Solutions"
        subtext="Control, protect, and maximize the value of your data assets."
        buttonText="Book Free Consultation"
        note="Our data governance solutions help organizations establish trust in their data, meet compliance requirements, and ensure that information is managed effectively across its lifecycle. We bring proven frameworks, technology expertise, and regulatory knowledge to keep your data secure and usable."
      />

      <InfoStats
        stats={[
          {
            number: "85%",
            label: "Of enterprises recognize governance as critical",
          },
          {
            number: "100%",
            label: "Compliance achievable in regulated industries",
          },
          { number: "60%", label: "Reduction in data-related risks" },
        ]}
        caption="Trusted by Enterprises in"
        highlight="Highly Regulated Sectors"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      <GovernanceToolsSection />
      <AboutTech technologies={governanceDescription} />
      <WhyChooseUs ChooseUs={whychooseus} />
      <ScheduleConsultation
        heading="Ensure Compliance & Control with Our Governance Solutions"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Data Governance Consultation"
        Icon={MdSchedule}
      />

      {/* 
      <OnlinePresence 
        title="Let’s Build a Governance Framework That Works for You."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Data Governance Services"
      /> */}

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default GovernanceContent;
