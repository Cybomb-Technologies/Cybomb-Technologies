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
    title: "Conceptual Data Modeling",
    description:
      "Define high-level business entities, relationships, and rules to align with organizational goals.",
  },
  {
    title: "Logical Data Modeling",
    description:
      "Translate conceptual designs into detailed, technology-agnostic blueprints for implementation.",
  },
  {
    title: "Physical Data Modeling",
    description:
      "Create database-specific structures optimized for performance, scalability, and storage efficiency.",
  },
  {
    title: "Dimensional Modeling",
    description:
      "Design star, snowflake, and galaxy schemas for analytics and reporting systems.",
  },
  {
    title: "Data Model Optimization",
    description:
      "Refine existing models for improved query performance, maintainability, and scalability.",
  },
  {
    title: "Integration with Governance",
    description:
      "Ensure models support compliance, data lineage, and quality assurance requirements.",
  },
];

const whychooseus = [
  {
    title: "Business-Driven Designs",
    description:
      "Our models start with business needs and translate them into actionable technical designs.",
  },
  {
    title: "Multi-Platform Expertise",
    description:
      "Experience in relational, NoSQL, cloud-native, and hybrid database environments.",
  },
  {
    title: "Scalability in Mind",
    description:
      "Designs that adapt to growing data volumes and evolving requirements.",
  },
  {
    title: "Standards & Best Practices",
    description:
      "Adherence to industry modeling methodologies such as UML, ERD, and Kimball.",
  },
  {
    title: "Collaboration & Documentation",
    description:
      "Comprehensive documentation for easy adoption by engineering and analytics teams.",
  },
];

const useCases = [
  "Designing a scalable database for a new SaaS product",
  "Building a dimensional model for enterprise analytics",
  "Optimizing legacy data models for faster reporting",
  "Creating a hybrid model for multi-cloud deployments",
  "Unifying disparate data sources under a single model"
];

function ModelingDesignContent() {
  return (
    <section>
      <Banner 
        heading="Modeling & Design"
        subtext="Transform raw information into structured, scalable, and business-ready data architecture."
        buttonText="Start Your Data Design"
        note="Our data modeling and design services help businesses structure their information for maximum usability, performance, and growth. From conceptual frameworks to physical database designs, we ensure your data is organized for analytics, compliance, and scalability."
      />

      <InfoStats
        stats={[
          { number: "40%", label: "average performance improvement after optimized modeling" },
          { number: "100%", label: "alignment of models with business requirements" },
          { number: "75%", label: "reduction in redundant or duplicate data structures" }
        ]}
        caption="Trusted by Enterprises and"
        highlight="High-Growth Startups"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      
      <ScheduleConsultation
        heading="Design Data Models That Empower Your Business"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="Data Modeling Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <OnlinePresence 
        title="Let’s Build a Future-Ready Data Architecture for Your Organization."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Data Modeling Services"
      />

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default ModelingDesignContent;
