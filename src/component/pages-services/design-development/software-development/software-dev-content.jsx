import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import placeholderImage from './../../../../assets/laptop-preview.png';
import EngagementOptions from "../../../common-ui/design-and-development/engagement-options";
import TechToolsSection from "./TechToolsSection";
const services = [
 {
    title: 'Custom Software Development',
    description:
      'We build tailored solutions from scratch that solve real problems—fast, secure, and maintainable',
  },
  {
    title: 'Enterprise Software Solutions',
    description:
      'Internal tools, business automation systems, and enterprise apps that power your operations.',
  },
  {
    title: 'SaaS Product Development',
    description:
      'Build and launch your own cloud-based software product with multi-tenancy, billing, and analytics.',
  },
  {
    title: 'CRM & ERP Systems',
    description:
      'Manage customers, inventory, HR, or finances with intelligent platforms.',
  },
  {
    title: 'Desktop & Cross-Platform Applications',
    description:
      'Software that works on Windows, Mac, and Linux—or using Electron/Flutter for cross-platform reach.',
  },
  {
    title: 'Cloud-Based Application Development',
    description:
      'Scalable apps hosted on AWS, GCP, or Azure, accessible from anywhere',
  },
  {
    title: 'Software Modernization',
    description:
      'Rebuild or upgrade outdated legacy systems to modern, secure, and scalable stacks',
  },
  {
    title: 'API Development & Integration',
    description:
      'Connect software systems with RESTful or GraphQL APIs, third-party services, and databases.',
  },
];

const process = [
 {
    title: 'Discovery & Requirement Analysis',
    description: "Understand your needs, pain points, and goals",
  },
  {
    title: 'Design & Prototyping',
    description: "Create wireframes and mockups to visualize the software before development",
  },
  {
    title: 'Agile Development',
    description: "Build the software in sprints with constant feedback and improvements",
  },
  {
     title: 'Testing & QA',
    description: "Functional, performance, and security testing to ensure reliability",
  },
  {
     title: 'Deployment & Maintenance',
    description: "Launch your software and keep it running smoothly with support and updates",
  },
];

const whychooseus = [
 {
    title: 'Solutions, Not Just Code',
    description: "We focus on solving business problems with smart technology",
  },
  {
    title: 'Secure by Design',
    description: 'Security is integrated from day one',
  },
  {
    title: 'End-to-End Development',
    description: 'From idea to deployment—we handle everything',
  },
  {
    title: 'Modular Architecture',
    description: "Build software that's easy to expand and scale",
  },
  {
    title: 'Agile and Transparent',
    description: "Work closely with you throughout the project lifecycle",
  },
];

const engagementOptions = [
  {
    title: "Full-Cycle Software Projects",
    description: "You share your idea—we design, develop, and deliver the entire product.",
  },
  {
    title: "Dedicated Development Teams",
    description: "Scale your tech team with our experienced developers.",
  },
  {
    title: "Modernization and Refactoring ",
    description: "Upgrade old software with better performance, UI, and security.",
  },
];

export default function SoftwareDevContent() {
  return (
    <section>
    
    <Banner 
        heading="Software Development Services"
        subtext="Custom software built to scale your operations and transform your ideas into powerful solutions."
        buttonText="Book Free Consultation"
        note=" We specialize in crafting scalable, secure, and robust software solutions. Whether you need SaaS platforms, enterprise tools, or internal systems, our team delivers tailored software that meets your unique business needs."
    />
    <InfoStats
        stats={[
        { number: "80+", label: "In-house Expert Developers" },
        { number: "70%", label: "Average Savings on Development Costs" },
        { number: "200+", label: "Projects Delivered Successfully" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Software Development Services"
    Services={services}/>
    <TechToolsSection/>
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom Software development services turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {placeholderImage}
          imageAlt = "Software Development"
      />
    <DevelopmentProcess 
      title="Our Software Development Process"
      Process={process}
      />
    <EngagementOptions
      title="How We Can Collaborate"
      options={engagementOptions}
    />
   </section>
  );
}