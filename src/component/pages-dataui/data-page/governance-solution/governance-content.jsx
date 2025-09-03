import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
// import OnlinePresence from "../../../common-ui/dataui/online-presence";
import DevelopmentProcess from "../../../common-ui/dataui/development-process";
import contactUsImg from './../../../../assets/contact/contact-us-img2.jpg';
import scheduleConsultImg from './../../../../assets/contact/schedule-a-consultation-img3.jpg';

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
  "Building an audit-ready governance framework for financial institutions"
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
          { number: "85%", label: "Of enterprises recognize governance as critical" },
          { number: "100%", label: "Compliance achievable in regulated industries" },
          { number: "60%", label: "Reduction in data-related risks" }
        ]}
        caption="Trusted by Enterprises in"
        highlight="Highly Regulated Sectors"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
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

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default GovernanceContent;
