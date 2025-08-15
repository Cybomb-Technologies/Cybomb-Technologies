import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import EngagementOptions from "../../../common-ui/design-and-development/engagement-options";
import TechToolsSection from "./TechToolsSection";
const services = [
  {
    title: 'API-Based Integrations',
    description:
      'Use REST, GraphQL, or Webhooks to connect your software with third-party services like Stripe, Salesforce, WhatsApp, Razorpay, or Google Workspace',
  },
  {
    title: 'Database Synchronization',
    description:
      'Keep your data updated and consistent across multiple systems or locations',
  },
  {
    title: 'CRM & ERP Integration',
    description:
      'Seamlessly link your sales, support, inventory, HR, and finance tools with your website or app',
  },
  {
    title: 'E-commerce Platform Integration',
    description:
      'Connect online stores with POS systems, shipping APIs, inventory tools, or payment gateways',
  },
  {
    title: 'Legacy System Modernization & Bridging',
    description:
      'Bridge the gap between old systems and modern platforms with middleware or API wrappers',
  },
  {
    title: 'Internal Workflow Automation',
    description:
      'Create smart workflows that automatically move data between tools like Slack, Google Sheets, HubSpot, or your custom dashboard',
  },
];

const process = [
  {
    title: 'Requirement Mapping',
    description: 'Understand the systems you use and how data should flow between them',
  },
  {
    title: 'Feasibility Study & API Review',
    description: 'Analyze endpoints, documentation, and protocols to plan integration logic',
  },
  {
    title: 'Integration Development',
    description: 'Build APIs, connectors, or middleware to exchange data reliably and securely',
  },
  {
    title: 'Testing & Validation',
    description: 'Perform real-world use case testing to ensure accurate syncing and behavior',
  },
  {
    title: 'Monitoring & Maintenance',
    description: 'Keep everything running smoothly with error tracking, retries, and versioning support',
  },
];

const whychooseus = [
   {
    title: 'Seamless Connectivity',
    description: 'We build bridges between any platforms—even custom or legacy',
  },
  {
    title: 'Flexible & Custom',
    description: 'Integrations designed around your actual workflow—not generic solutions',
  },
  {
    title: 'Security-Focused',
    description: 'Secure tokens, encrypted data, and access control at every step',
  },
  {
    title: 'Real-Time & Automated',
    description: 'Reduce delays, human errors, and outdated data',
  },
  {
    title: 'Works With Your Team',
    description: 'We collaborate closely with your in-house or vendor systems',
  },
];

const engagementOptions = [
  {
    title: "One-Time Integration Setup",
    description: "Need to connect two platforms once? We’ll set it up, test it, and train your team.",
  },
  {
    title: "Custom Middleware Development",
    description: "Ongoing, scalable integration logic between multiple tools or APIs.",
  },
  {
    title: "Legacy-to-Cloud Migration Support",
    description: "Keep old data flowing smoothly into your modern apps and cloud platforms.",
  },
];

export default function SwIntDevContent() {
   return (
    <section>
   
    <Banner 
        heading="Custom Software Integration Services"
        subtext="Make all your tools and systems work together—seamlessly"
        buttonText="Book Free Consultation"
        note="Businesses today rely on many different tools: CRMs, ERPs, payment gateways, websites, mobile apps, databases, and more. We help you connect them all through custom software integration—so your systems talk to each other, save time, and reduce errors."
    />
    <InfoStats
        stats={[
        { number: "100%", label: "Aligned with your business—not a generic solution" },
        { number: "80%", label: "Scales as your company evolves" },
        { number: "200+", label: "No unnecessary features, subscriptions, or limitations" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Custom Software Integration Services"
    Services={services}/>
    <TechToolsSection/>
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom Software Integration services turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {placeholderImage}
          imageAlt = "Software Integration Service"
      />
    <DevelopmentProcess 
      title="Our Custom Software Integration Service Process"
      Process={process}
      />
    <EngagementOptions
      title="How We Can Collaborate"
      options={engagementOptions}
    />
   </section>
  );
}