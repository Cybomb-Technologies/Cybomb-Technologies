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
    title: 'Digital Transformation Strategy',
    description:
      'Map out your current systems, define your future state, and create a step-by-step transformation roadmap.',
  },
  {
    title: 'Architecture & System Design',
    description:
      'Design scalable, secure, and modular architectures for modern digital platforms and software ecosystems.',
  },
  {
    title: 'Cloud Strategy & Migration',
    description:
      'Move to AWS, Azure, or Google Cloud with minimal disruption—complete with cost optimization and best practices.',
  },
  {
    title: 'Product & MVP Planning',
    description:
      'From startup ideas to enterprise tools, we help plan scalable and market-ready tech products from day one.',
  },
  {
    title: 'Technology Stack Advisory',
    description:
      'Choose the right technologies (frontend, backend, databases, etc.) based on your team, goals, and future scalability.',
  },
  {
    title: 'Security & Compliance Review',
    description:
      'Get expert evaluations of your current systems with a focus on data privacy, secure design, and regulatory compliance.',
  },
  {
    title: 'Legacy Modernization',
    description:
      'Replace, refactor, or re-platform outdated systems for improved performance, flexibility, and user experience.',
  },
  {
    title: 'DevOps & Automation Strategy',
    description:
      'Set up CI/CD pipelines, containerization, and automated workflows that support faster, more reliable development.',
  },
];

const process = [
  {
    title: 'Discovery & Assessment',
    description: 'Understand your business, goals, and technical landscape',
  },
  {
    title: 'Strategy & Roadmap',
    description: 'Define outcomes, architecture, and action plan',
  },
  {
    title: 'Solution Design',
    description: 'Choose tools, stack, and integrations',
  },
  {
    title: 'Implementation Support',
    description: 'Collaborate with dev teams or vendors to bring plans to life',
  },
  {
    title: 'Ongoing Evaluation',
    description: 'Measure results, iterate, and scale',
  },
];

const whychooseus = [
  {
    title: 'Senior-Level Expertise',
    description: 'Work with experienced architects, engineers, and strategists',
  },
  {
    title: 'Business-Aligned Thinking',
    description: 'We consult with your outcomes in mind, not just the code',
  },
  {
    title: 'Scalable Recommendations',
    description: 'Solutions that grow with your users, traffic, and complexity',
  },
  {
    title: 'Security-First Approach',
    description: 'Data protection and compliance built into every solution',
  },
  {
    title: 'Collaborative & Transparent',
    description: 'No black box consulting—your team stays in the loop',
  },
];

const engagementOptions = [
  {
    title: 'Project-Based Consulting',
    description: 'Get expert input for a specific initiative, challenge, or migration',
  },
  {
    title: 'Fractional CTO / Virtual Tech Lead',
    description: 'Add senior technical direction without hiring full-time',
  },
  {
    title: 'Audit & Review Engagements',
    description: 'Uncover inefficiencies and improve systems with expert audits',
  },
  {
    title: 'Ongoing Advisory & Support',
    description: 'Monthly retainer for continuous tech guidance and mentorship',
  },
];

export default function TechConsultingContent() {
  return (
    <section>
    
    <Banner 
        heading="Technology Consulting Services"
        subtext="Strategic tech guidance to unlock your business potential"
        buttonText="Book Free Consultation"
        note="Technology is more than tools—it's a growth enabler. Our tech consulting services help you choose, plan, and implement the right solutions to future-proof your business, streamline operations, and fuel innovation. Whether you're launching a new product, scaling up, or modernizing your infrastructure—we guide you every step of the way."
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
    title = "Our Technology Consulting Services"
    Services={services}/>
    <TechToolsSection/>
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom Technology Consulting services turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {placeholderImage}
          imageAlt = "Technology Consulting Services"
      />
    <DevelopmentProcess 
      title="Our Technology Consulting Process"
      Process={process}
      />
    <EngagementOptions
      title="How We Can Collaborate"
      options={engagementOptions}
    />
   </section>
  );
}