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
    title: "Data Profiling & Assessment",
    description:
      "Analyze your datasets to identify inconsistencies, anomalies, and quality gaps.",
  },
  {
    title: "Data Cleansing & Standardization",
    description:
      "Correct errors, remove duplicates, and apply consistent formatting across data sources.",
  },
  {
    title: "Data Validation & Verification",
    description:
      "Ensure accuracy and integrity through automated validation rules and checks.",
  },
  {
    title: "Master Data Quality Management",
    description:
      "Maintain a single, reliable source of truth for business-critical data entities.",
  },
  {
    title: "Continuous Quality Monitoring",
    description:
      "Implement real-time monitoring to prevent data degradation over time.",
  },
  {
    title: "Data Governance Integration",
    description:
      "Align quality management with governance frameworks for compliance and trust.",
  },
];

const whychooseus = [
  {
    title: "Proven Frameworks",
    description:
      "We apply industry best practices and standards for data quality improvement.",
  },
  {
    title: "Technology Expertise",
    description:
      "Skilled in tools like Talend, Informatica, AWS Glue, and custom validation solutions.",
  },
  {
    title: "End-to-End Process",
    description:
      "From initial profiling to ongoing quality audits, we cover the full lifecycle.",
  },
  {
    title: "Customizable Solutions",
    description:
      "Tailored approaches to match your industry, data types, and compliance needs.",
  },
  {
    title: "Measurable Results",
    description:
      "Track improvements with clear KPIs and ROI-focused reporting.",
  },
];

const useCases = [
  "Cleansing customer databases to improve marketing accuracy",
  "Standardizing product data for multi-channel e-commerce",
  "Implementing automated quality checks in data pipelines",
  "Reducing duplicate records in enterprise CRM systems",
  "Ensuring regulatory compliance with accurate financial data"
];

function QualityManagementContent() {
  return (
    <section>
      <Banner 
        heading="Quality Management"
        subtext="Ensure your business decisions are powered by clean, accurate, and reliable data."
        buttonText="Book Free Consultation"
        note="Our data quality management solutions help organizations maintain the integrity, consistency, and reliability of their data assets. We identify and fix quality issues while establishing ongoing monitoring processes to keep your data trustworthy."
      />

      <InfoStats
        stats={[
          { number: "95%", label: "average improvement in data accuracy for our clients" },
          { number: "60%", label: "reduction in duplicate and inconsistent records" },
          { number: "100%", label: "compliance-ready datasets delivered" }
        ]}
        caption="Helping Businesses Achieve"
        highlight="Data Excellence Worldwide"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      
      <ScheduleConsultation
        heading="Transform Your Data into a Trusted Business Asset"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="Data Quality Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <OnlinePresence 
        title="Let’s Build a Data Quality Strategy That Works for You."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Data Quality Services"
      />

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default QualityManagementContent;
