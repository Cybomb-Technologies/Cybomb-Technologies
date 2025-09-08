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
import ModelingToolsSection from "./modeling-techtool";
import AboutTech from "../../../common-ui/dataui/about-tech";

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
  "Unifying disparate data sources under a single model",
];

const modelingDesignDescription = [
  {
    name: "ER/Studio",
    description:
      "A powerful data modeling tool used for designing, documenting, and managing complex enterprise data architectures with support for multiple databases.",
    icon: "https://erstudio.com/wp-content/uploads/2024/04/ERS-icon-1-1.png",
    iconColors: "linear-gradient(135deg, #e6f0ff, #f9fbff)", // pale blue
  },
  {
    name: "Camunda",
    description:
      "An open-source workflow and decision automation platform designed for process modeling, BPMN execution, and scalable business process orchestration.",
    icon: "https://images.icon-icons.com/2699/PNG/512/camunda_logo_icon_167768.png",
    iconColors: "linear-gradient(135deg, #ffe6e6, #fff9f9)", // light red/pink
  },
  {
    name: "Visual Paradigm",
    description:
      "A software design and modeling tool that supports UML, BPMN, ERD, and agile methodologies, offering visual solutions for process and system design.",
    icon: "https://www.marvelic.co.th/wp-content/uploads/2021/08/VP.png",
    iconColors: "linear-gradient(135deg, #f3e5f5, #fbf7fc)", // pastel lavender
  },
  {
    name: "StarUML",
    description:
      "A sophisticated software modeling tool that supports UML diagrams and software architecture design, widely used for object-oriented modeling and system design.",
    icon: "https://www.nicepng.com/png/full/247-2477083_staruml-definition.png",
    iconColors: "linear-gradient(135deg, #e0e7ea, #f7f9fa)", // very light gray/blue
  },
  {
    name: "Lucidchart",
    description:
      "A cloud-based diagramming and visualization platform that helps teams collaborate on flowcharts, UML diagrams, org charts, and business process models in real-time.",
    icon: "https://cdn.productivity.directory/tools/2f7d5938-4427-4f3b-81c1-084f6d5ef70a",
    iconColors: "linear-gradient(135deg, #fff3e0, #fffbf5)", // soft orange/peach
  },
  {
    name: "D3.js",
    description:
      "A JavaScript library for producing dynamic, interactive data visualizations in web browsers using SVG, HTML, and CSS.",
    icon: "https://i0.wp.com/ahex.co/wp-content/uploads/2022/06/d3.png?fit=400%2C400&ssl=1",
    iconColors: "linear-gradient(135deg, #e3f2fd, #f8fbff)", // very light blue
  },
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
          {
            number: "40%",
            label: "Performance gains after optimized modeling",
          },
          { number: "100%", label: "Models aligned with business KPIs" },
          { number: "75%", label: "Reduction in redundant structures" },
        ]}
        caption="Trusted by Enterprises and"
        highlight="High-Growth Startups"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      <ModelingToolsSection />
      <AboutTech technologies={modelingDesignDescription} />
      <WhyChooseUs ChooseUs={whychooseus} />
      <ScheduleConsultation
        heading="Design Data Models That Empower Your Business"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Data Modeling Consultation"
        Icon={MdSchedule}
      />

      {/* <OnlinePresence 
        title="Let’s Build a Future-Ready Data Architecture for Your Organization."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Data Modeling Services"
      /> */}

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default ModelingDesignContent;
