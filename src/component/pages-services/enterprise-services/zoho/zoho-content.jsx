import Banner from "../../../common-ui/enterprise-services/banner";
import InfoStats from "../../../common-ui/enterprise-services/info-stats";
import WhyChooseUs from "../../../common-ui/enterprise-services/why-choose-us";
import OnlinePresence from "../../../common-ui/enterprise-services/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import DevelopmentProcess from "../../../common-ui/enterprise-services/development-process";
import ScheduleConsultation from "../../../common-ui/enterprise-services/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import ServicesOfferings from "../../../common-ui/enterprise-services/services-offerings";

const offerings = [
  {
    title: "Zoho CRM Implementation",
    description: "From initial setup to full-scale deployment — including pipeline design, role setup, and custom fields.",
  },
  {
    title: "Custom Module Development",
    description: "We build tailored modules that reflect your unique business processes and data structure.",
  },
  {
    title: "Workflow Automation & Blueprints",
    description: "Automate repetitive tasks, lead assignment, and approvals with precision using Zoho’s Blueprints.",
  },
  {
    title: "Zoho Integrations",
    description: "Seamless integration with apps like Zoho Books, Zoho Desk, Gmail, Slack, QuickBooks, Mailchimp, and more.",
  },
  {
    title: "Data Migration & Cleanup",
    description: "Safely transfer data from spreadsheets, Salesforce, or other CRMs — with deduplication and validation.",
  },
  {
    title: "Zoho One Ecosystem Setup",
    description: "Implement full Zoho Suite: CRM + Books + Projects + Inventory + Desk + Campaigns + Analytics, and more.",
  },
  {
    title: "Dashboard & Reports Customization",
    description: "Create insightful dashboards, KPIs, and custom reports for sales tracking and decision-making.",
  },
  {
    title: "Training & Support",
    description: "Team training, admin handover, documentation, and ongoing support to ensure long-term success.",
  },
];

const whychooseus = [
  {
    title: "Process-Driven Customization",
    description: "We model Zoho CRM to match your workflows — not the other way around.",
  },
  {
    title: "Cost-Effective CRM Scaling",
    description: "Zoho is ideal for startups, SMBs, and scaling enterprises looking for power without the price tag.",
  },
  {
    title: "Business & Tech Expertise",
    description: "We blend CRM strategy with technical customization for smarter results.",
  },
  {
    title: "Cross-Platform Integration Experts",
    description: "Our team connects Zoho CRM with your email marketing, ERP, website, and support systems.",
  },
  {
    title: "Data Security & Compliance",
    description: "We follow best practices for data security, access control, and GDPR/industry compliance.",
  },
];

const useCases = [
  "Automatically assigning leads based on source, region, or priority",
  "Creating sales blueprints for different services or products",
  "Syncing CRM data with your accounting software for real-time finance visibility",
  "Sending targeted email campaigns via Zoho Campaigns based on lead behavior",
  "Managing multi-stage onboarding workflows inside the CRM",
  "Generating performance dashboards for individual reps and teams",
  "Integrating website forms and chats directly with CRM lead records"
];

function ZohoContent() {
  return (
    <section>
      <Banner 
        heading="Zoho CRM Services"
        subtext="Smarter Selling. Seamless Scaling."
        buttonText="Book Free Consultation"
        note="We help you leverage the full potential of Zoho CRM — a powerful, flexible platform that’s built to unify your sales, marketing, and support processes. Whether you’re just getting started or ready to scale up, our Zoho CRM services are customized to fit your team size, workflows, and business goals."
      />
      <InfoStats
        stats={[
          { number: "100+", label: "Zoho CRM Projects Delivered" },
          { number: "40%", label: "Increase in Sales Process Efficiency" },
          { number: "99.9%", label: "Data Accuracy After Migration" }
        ]}
        caption="Empowering startups & enterprises with"
        highlight="Zoho CRM Excellence"
      />
      <ServicesOfferings 
        title="What We Offer"
        items={offerings}
      />
      <ScheduleConsultation
        heading="Get a Fully Customized Zoho CRM For Your Team"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="Zoho CRM Consultation"
        Icon={MdSchedule}
      />
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Let’s Optimize Your Sales with Zoho CRM"
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Zoho CRM Services"
      />
      <DevelopmentProcess 
        title="Use Case"
        Process={useCases}
      />
    </section>
  );
}

export default ZohoContent;
