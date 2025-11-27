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
import QualityToolsSection from "./quality-techtool";
import AboutTech from "../../../common-ui/dataui/about-tech";

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
  "Ensuring regulatory compliance with accurate financial data",
];

const qualityManagementDescription = [
  {
    name: "ISO 9001",
    description:
      "An international standard for quality management systems (QMS), providing a framework to ensure consistent quality, customer satisfaction, and continuous improvement.",
    icon: "https://images.seeklogo.com/logo-png/30/2/iso-logo-png_seeklogo-305564.png",
    iconColors: "linear-gradient(135deg, #d6e4f5, #f5f9ff)", // soft pastel blue
  },
  {
    name: "Six Sigma",
    description:
      "A data-driven methodology focused on reducing defects, improving processes, and achieving operational excellence through statistical analysis and DMAIC principles.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/67/Six_sigma-2.svg",
    iconColors: "linear-gradient(135deg, #e6e6e6, #fafafa)", // light neutral gray
  },
  {
    name: "TQM",
    description:
      "Total Quality Management (TQM) is a comprehensive approach to organizational management that emphasizes customer satisfaction, employee involvement, and process improvement.",
    icon: "https://cdn-icons-png.flaticon.com/512/18497/18497224.png",
    iconColors: "linear-gradient(135deg, #d6e9f7, #f5faff)", // pale sky blue
  },
  {
    name: "SAP Quality Management",
    description:
      "A component of SAP ERP that integrates quality management processes, supporting inspections, audits, and compliance within enterprise operations.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png",
    iconColors: "linear-gradient(135deg, #d4f1fb, #f7fcfe)", // very soft azure
  },
  {
    name: "MasterControl",
    description:
      "A cloud-based quality management software (QMS) designed to automate compliance processes, document control, and regulatory requirements in highly regulated industries.",
    icon: "https://images.seeklogo.com/logo-png/47/3/mastercontrol-logo-png_seeklogo-470646.png",
    iconColors: "linear-gradient(135deg, #d9e7f9, #f5f9ff)", // pastel blue gradient
  },
  {
    name: "PDCA Cycle",
    description:
      "A four-step iterative method (Plan-Do-Check-Act) used in business process management and continuous improvement to enhance quality and performance.",
    icon: "https://cdn-icons-png.flaticon.com/512/15319/15319158.png",
    iconColors: "linear-gradient(135deg, #d5f5e3, #f7fcf9)", // light mint green
  },
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
          {
            number: "95%",
            label: "Improvement in data accuracy after cleanup",
          },
          {
            number: "60%",
            label: "Less duplication with master data management",
          },
          { number: "Compliance-ready", label: "Datasets across industries" },
        ]}
        caption="Helping Businesses Achieve"
        highlight="Data Excellence Worldwide"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      <QualityToolsSection />
      <AboutTech technologies={qualityManagementDescription} />
      <WhyChooseUs ChooseUs={whychooseus} />

      <ScheduleConsultation
        heading="Transform Your Data into a Trusted Business Asset"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Data Quality Consultation"
        Icon={MdSchedule}
      />

      {/* <OnlinePresence 
        title="Let’s Build a Data Quality Strategy That Works for You."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Data Quality Services"
      /> */}

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default QualityManagementContent;
