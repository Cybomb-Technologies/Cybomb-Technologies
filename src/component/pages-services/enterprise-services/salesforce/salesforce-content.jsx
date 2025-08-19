import Banner from "../../../common-ui/enterprise-services/banner";
import InfoStats from "../../../common-ui/enterprise-services/info-stats";
import WhyChooseUs from "../../../common-ui/enterprise-services/why-choose-us";
import OnlinePresence from "../../../common-ui/enterprise-services/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import DevelopmentProcess from "../../../common-ui/enterprise-services/development-process";
import ScheduleConsultation from "../../../common-ui/enterprise-services/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import ServicesOfferings from "../../../common-ui/enterprise-services/services-offerings";
import SalesforcePlatforms from "./SalesforcePlatforms";

const offerings = [
  {
    title: "Salesforce Implementation",
    description: "From initial setup to deployment, we get your Salesforce environment up and running seamlessly.",
  },
  {
    title: "Customization & Configuration",
    description: "Tailor Salesforce to match your business workflows, data models, and reporting needs.",
  },
  {
    title: "Sales Cloud & Service Cloud Solutions",
    description: "Optimize lead management, pipeline visibility, case handling, and customer support workflows.",
  },
  {
    title: "Marketing Cloud Integration",
    description: "Automate personalized marketing campaigns and track their performance in real-time.",
  },
  {
    title: "Salesforce App Development (Apex/Lightning)",
    description: "Build custom apps and components with Lightning Web Components and Apex for enhanced productivity.",
  },
  {
    title: "Third-Party Integrations",
    description: "Connect Salesforce with tools like ERP, payment gateways, support platforms, and custom APIs.",
  },
  {
    title: "Data Migration & Cleanup",
    description: "Ensure clean, structured, and secure transfer of data from legacy systems or CRMs into Salesforce.",
  },
  {
    title: "Ongoing Support & Maintenance",
    description: "Get continuous enhancements, troubleshooting, and user support to keep things running smoothly.",
  },
];

const whychooseus = [
  {
    title: "Certified Salesforce Experts",
    description: "Our team includes Salesforce-certified developers, consultants, and administrators.",
  },
  {
    title: "Tailored Solutions",
    description: "We build around your processes—not the other way around—so you get true value from Salesforce.",
  },
  {
    title: "Seamless Integrations",
    description: "We make Salesforce a central hub by connecting it with all your tools and platforms.",
  },
  {
    title: "Data-Driven Results",
    description: "From lead scoring to automated reports, we help you harness the full power of Salesforce analytics.",
  },
  {
    title: "Training & Enablement",
    description: "We empower your teams with hands-on training, documentation, and support for long-term success.",
  },
];

const useCases = [
  "Automating sales pipeline from lead to deal closure",
  "Streamlining case resolution through Service Cloud",
  "Launching segmented email journeys via Marketing Cloud",
  "Building a partner or customer portal using Experience Cloud",
  "Integrating Salesforce with payment gateways, ERP, or analytics tools",
  "Creating custom workflows for onboarding, renewals, or SLA tracking",
  "Visualizing revenue performance with Tableau CRM dashboards"
];

function SalesforceContent() {
  return (
    <section>
      <Banner 
        heading="Salesforce Services"
        subtext="Power your business with the world’s #1 CRM."
        buttonText="Book Free Consultation"
        note="We help companies of all sizes implement, customize, and maximize Salesforce to supercharge sales, streamline operations, and enhance customer relationships. Whether you're starting fresh or scaling an existing Salesforce setup, we provide end-to-end solutions tailored to your business goals."
      />
      <InfoStats
        stats={[
          { number: "35%", label: "Improvement in sales efficiency with tailored CRM solutions" },
          { number: "99.9%", label: "Uptime and strong data integrity assurance" },
          { number: "Custom", label: "CRM workflows streamline operations" }
        ]}
        caption="Trusted by Global Enterprises for"
        highlight="Salesforce Excellence"
      />
      <ServicesOfferings 
        title="What We Offer"
        items={offerings}
      />
      <SalesforcePlatforms/>
      <ScheduleConsultation
        heading="Unlock the Full Potential of Salesforce With Our Experts"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="Salesforce Consultation"
        Icon={MdSchedule}
      />
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Let’s Make Salesforce Work For Your Business"
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Salesforce Services"
      />
      <DevelopmentProcess 
        title="Use Case"
        Process={useCases}
      />
    </section>
  );
}

export default SalesforceContent;
