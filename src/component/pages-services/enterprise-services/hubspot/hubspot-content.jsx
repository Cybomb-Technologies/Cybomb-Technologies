import Banner from "../../../common-ui/enterprise-services/banner";
import InfoStats from "../../../common-ui/enterprise-services/info-stats";
import WhyChooseUs from "../../../common-ui/enterprise-services/why-choose-us";
import OnlinePresence from "../../../common-ui/enterprise-services/online-presence";
import DevelopmentProcess from "../../../common-ui/enterprise-services/development-process";
import ScheduleConsultation from "../../../common-ui/enterprise-services/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import ServicesOfferings from "../../../common-ui/enterprise-services/services-offerings";
import HubSpotPlatforms from "./HubSpotPlatforms";
import hubspotImg from './../../../../assets/technologies/crm-services-img.jpg';
import contactUsImg from './../../../../assets/contact/contact-us-img1.jpg';

const offerings = [
  {
    title: "HubSpot Setup & Onboarding",
    description: "We’ll get your portal configured, users trained, and automation workflows ready to go.",
  },
  {
    title: "CRM Customization & Optimization",
    description: "Align HubSpot with your sales process, pipeline stages, and lifecycle definitions.",
  },
  {
    title: "Marketing Hub Services",
    description: "Set up lead generation forms, landing pages, email campaigns, and behavior-based workflows.",
  },
  {
    title: "Sales Hub Implementation",
    description: "Streamline deal pipelines, automated follow-ups, and performance tracking.",
  },
  {
    title: "Service Hub Integration",
    description: "Manage tickets, feedback surveys, and knowledge base for better support.",
  },
  {
    title: "HubSpot CMS Development",
    description: "Design and develop custom websites or blogs using HubSpot’s CMS for seamless marketing alignment.",
  },
  {
    title: "Third-Party Tool Integrations",
    description: "Connect HubSpot with apps like Salesforce, WooCommerce, Mailchimp, Stripe, Zoom, and more.",
  },
  {
    title: "Data Migration & Cleanup",
    description: "Transfer your data from spreadsheets or other CRMs into HubSpot — clean, secure, and mapped correctly.",
  },
];

const whychooseus = [
  {
    title: "Certified HubSpot Experts",
    description: "Our team includes HubSpot-certified consultants and developers with experience across industries.",
  },
  {
    title: "Modular Services",
    description: "Only pay for what you need — whether it’s marketing automation, sales CRM, or full-service CRM deployment.",
  },
  {
    title: "Conversion-Focused Strategy",
    description: "We align HubSpot’s tools to drive more qualified leads, faster deal closures, and better retention.",
  },
  {
    title: "Education & Enablement",
    description: "We train your team to own HubSpot independently through hands-on sessions and guides.",
  },
  {
    title: "Secure & Scalable",
    description: "From data protection to scalable workflows, our setups are built for long-term growth.",
  },
];

const useCases = [
  "Automating follow-up emails after a contact form is submitted",
  "Tracking user behavior on your site to personalize outreach",
  "Creating drip campaigns based on lead score or deal stage",
  "Managing support tickets and auto-routing them to the right team",
  "Launching and A/B testing landing pages for new product launches",
  "Syncing HubSpot contacts with your ecommerce or payment tools",
  "Measuring campaign ROI with multi-touch attribution reporting"
];

function HubspotContent() {
  return (
    <section>
      <Banner 
        heading="HubSpot CRM Services"
        subtext="Simplify. Automate. Grow."
        buttonText="Book Free Consultation"
        note="We help businesses harness the full power of HubSpot to streamline marketing, sales, and customer service — all from one intuitive platform. Whether you're new to HubSpot or looking to optimize your current setup, our tailored services help you get more value from every contact, campaign, and conversation."
      />
      <InfoStats
        stats={[
          { number: "50%", label: "Reduction in manual marketing operations via automation" },
          { number: "30%", label: "Increase in lead-to-customer conversions" },
          { number: "Seamless", label: "Alignment achieved between sales & marketing" }
        ]}
        caption="Trusted by B2B and B2C Brands for"
        highlight="HubSpot Success"
      />
      <ServicesOfferings 
        title="What We Offer"
        items={offerings}
      />
      <HubSpotPlatforms/>
      <ScheduleConsultation
        heading="Get the Most Out of HubSpot With Our CRM Services"
        buttonText="Schedule a Consultation!"
        imageSrc={hubspotImg}
        imageAlt="HubSpot CRM Consultation"
        Icon={MdSchedule}
      />
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Let's Maximize Your HubSpot Investment"
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="HubSpot CRM Services"
      />
      <DevelopmentProcess 
        title="Use Case"
        Process={useCases}
      />
    </section>
  );
}

export default HubspotContent;
