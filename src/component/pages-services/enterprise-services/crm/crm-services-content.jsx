
import Banner from "../../../common-ui/enterprise-services/banner";
import InfoStats from "../../../common-ui/enterprise-services/info-stats";
import WhyChooseUs from "../../../common-ui/enterprise-services/why-choose-us";
import OnlinePresence from "../../../common-ui/enterprise-services/online-presence";
import DevelopmentProcess from "../../../common-ui/enterprise-services/development-process";
import ScheduleConsultation from "../../../common-ui/enterprise-services/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import ServicesOfferings from "../../../common-ui/enterprise-services/services-offerings";
import CRMPlatforms from "./CRMPlatforms";
// import EngagementOptions from "../../../common-ui/enterprise-services/engagement-options";
import crmImg from './../../../../assets/technologies/crm-services-img.jpg';
import contactUsImg from './../../../../assets/contact/contact-us-img1.jpg';

const offerings = [
  {
    title: 'CRM Consulting & Strategy',
    description: 'We assess your current process and recommend the right CRM tools and strategy for your business.',
  },
  {
    title: 'Custom CRM Development',
    description: 'Get a fully tailored CRM system built around your business logic, teams, and goals.',
  },
  {
    title: 'CRM Platform Implementation',
    description: 'Expert setup of industry-leading platforms like Salesforce, HubSpot, Zoho, Freshsales, and Microsoft Dynamics.',
  },
  {
    title: 'Third-Party Integrations',
    description: 'Connect your CRM with tools like email marketing platforms, billing systems, ERP, helpdesk, and more.',
  },
  {
    title: 'Data Migration & Cleanup',
    description: 'We securely move and sanitize your customer data during platform migrations.',
  },
  {
    title: 'CRM Optimization & Automation',
    description: 'Improve existing CRM workflows, lead tracking, and reporting using automation.',
  },
];

const whychooseus = [
  {
    title: 'Business-Driven Approach',
    description: "We focus on CRM as a revenue enabler not just a contact database.",
  },
  {
    title: 'Seamless Integrations',
    description: 'We ensure your CRM talks to your marketing, sales, and support systems in real time.',
  },
  {
    title: 'Industry Expertise',
    description: 'We have built CRM systems for industries like real estate, healthcare, SaaS, finance, and more.',
  },
  {
    title: 'Security & Compliance',
    description: 'Your customer data is protected with best practices and regulatory compliance (GDPR, HIPAA, etc.).',
  },
  {
    title: 'Scalable Solutions',
    description: "Start small and grow fast. Our CRM systems scale with your business.",
  },
];

const useCases = [
  "Automating lead capture from your website and social media",
  "Managing real-time customer support tickets inside your CRM",
  "Building automated email workflows for abandoned leads",
  "Visualizing your sales pipeline and forecasting revenue",
  "Creating a 360° customer view by integrating marketing + support + sales"
];

function CrmServicesContent() {
  return (
   <section>
    <Banner 
        heading="Customer Relationship Management (CRM)"
        subtext="Build lasting relationships. Grow smarter."
        buttonText="Book Free Consultation"
        note="Our CRM solutions help you manage your customer interactions, streamline sales, and enhance customer satisfaction - all from one intelligent platform. Whether you're a startup or an enterprise, our CRM services are tailored to suit your unique business needs and goals."
    />
    <InfoStats
        stats={[
          { number: "65%", label: "Of businesses adopt CRM within 5 years of launch" },
          { number: "3×", label: "Higher customer retention with proper CRM adoption" },
          { number: "20–30%", label: "Faster sales cycle through automation" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
      title="What We Offer" 
      items={offerings}
    />
    <CRMPlatforms/>
    <ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our CRM Development Services"
      buttonText="Schedule a Consultation!"
      imageSrc={crmImg}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Let's Find the right CRM solution for your business."
          buttonText = "CONTACT US"
          buttonLink = "#"
          imageSrc = {contactUsImg}
          imageAlt = "CRM services"
      />
      <DevelopmentProcess 
            title="Use Case"
            Process={useCases}
            />
   </section>
  );
}

export default CrmServicesContent;