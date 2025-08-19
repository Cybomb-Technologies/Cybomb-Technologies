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
    title: 'Product Strategy & MVP Planning',
    description:
      'We validate your SaaS idea and build the Minimum Viable Product with only the essential features to test and attract early users.',
  },
  {
    title: 'Custom SaaS Product Development',
    description:
      'Complete frontend, backend, database, and cloud development to bring your SaaS to life—from concept to launch.',
  },
  {
    title: 'Multi-Tenant Architecture',
    description:
      'Design scalable platforms with role-based access, multi-user tenancy, and separation of user data.',
  },
  {
    title: 'Subscription & Billing Integration',
    description:
      'Add payment gateways, user subscriptions, free trials, and billing logic with tools like Stripe, Razorpay, or PayPal.',
  },
  {
    title: 'Admin & User Dashboards',
    description:
      'Powerful, intuitive interfaces for both users and your internal team to manage accounts, analytics, and workflows.',
  },
  {
    title: 'SaaS Modernization & Rebuilds',
    description:
      'Rebuild or upgrade outdated SaaS products using modern tech stacks and best practices.',
  },
  {
    title: 'API Integrations',
    description:
      'Integrate your SaaS with third-party platforms, CRMs, analytics, automation tools, and more.',
  },
  {
    title: 'Ongoing Maintenance & Support',
    description:
      'Post-launch support, performance monitoring, and regular updates to ensure your SaaS product remains secure and reliable.',
  },
];

const process = [
  {
    title: 'Discovery & Planning',
    description: "Refine your vision, analyze competitors, and outline your SaaS goals",
  },
  {
    title: 'Wireframes & UI Design',
    description: "Design intuitive flows and interfaces users will love",
  },
  {
    title: 'Agile Development & Sprint Reviews',
    description: "Work in fast-paced sprints with regular demos and feedback",
  },
  {
    title: 'Testing & Optimization',
    description: "Ensure performance, responsiveness, and security",
  },
  {
    title: 'Launch & Scale',
    description: "Go live with support in marketing handoff, analytics setup, and post-launch monitoring",
  },
];

const whychooseus = [
  {
    title: 'Product Thinking',
    description: 'We go beyond code to help you shape a viable SaaS business',
  },
  {
    title: 'MVP First',
    description: 'Launch quickly, test early, and scale fast',
  },
  {
    title: 'Built Secure',
    description: 'User data protection, GDPR-ready, and access control by default',
  },
  {
    title: 'Scalable Systems',
    description: 'Architecture that handles traffic spikes, growth, and feature expansions',
  },
  {
    title: 'Startup-Friendly',
    description: 'Transparent pricing, fast iterations, and ongoing collaboration',
  },
];

const engagementOptions = [
  {
    title: 'MVP Development',
    description: 'Start lean — build your core platform with essential features and test your market',
  },
  {
    title: 'Ongoing SaaS Evolution',
    description: 'Dedicated teams to scale your product with new features, integrations, and refinements',
  },
  {
    title: 'Tech Partner for Startups',
    description: 'We join hands long-term as your strategic product + tech development team',
  },
];

export default function SaaSSolutionsContent() {
  return (
    <section>
    
    <Banner 
        heading="SaaS Solutions Development Services"
        subtext="Build, launch, and scale your own SaaS product"
        buttonText="Book Free Consultation"
        note="Whether you're a startup with a bold idea or a business ready to productize your services — we help you turn concepts into powerful, cloud-based software-as-a-service platforms. From MVP to full-scale solution, we handle it all."
    />
    <InfoStats
        stats={[
          { number: "65%", label: "Businesses run on at least one SaaS application" },
          { number: "20-40%", label: "Average IT cost savings after SaaS adoption" },
          { number: "99.9%", label: "Typical uptime guarantee for SaaS platforms" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Our SaaS Development Services"
    Services={services}/>
    <TechToolsSection/>
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom SaaS development services turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {placeholderImage}
          imageAlt = "SaaS Development"
      />
    <DevelopmentProcess 
      title="Our SaaS Development Process"
      Process={process}
      />
    <EngagementOptions
      title="How We Can Collaborate"
      options={engagementOptions}
    />
   </section>
  );
}