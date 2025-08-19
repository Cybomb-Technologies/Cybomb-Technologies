


import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import EngagementOptions from "../../../common-ui/design-and-development/engagement-options";
import TechToolsSection from "./api-dev-TechnologiesSection";

const services = [
  {
    title: 'Custom REST & GraphQL APIs',
    description:
      'We build bespoke APIs tailored to your needs, whether you prefer the robust simplicity of REST or the data-efficient flexibility of GraphQL. Our APIs serve as the reliable backbone for your web and mobile applications.',
  },
  {
    title: 'Third-Party Integration & Automation',
    description:
      'Seamlessly connect your platform with essential services. We integrate payment gateways, CRMs, and marketing tools to automate workflows, streamline data syncing, and enhance your app\'s functionality without building everything from scratch.',
  },
  {
    title: 'API Security & Access Control',
    description:
      'Protect your digital assets with our comprehensive security solutions. We implement OAuth2, JWT, and role-based access to ensure only authorized users and systems can access your data, giving you peace of mind.',
  },
  {
    title: 'Real-Time Data & WebSockets',
    description:
      'Power interactive experiences like live chat, instant notifications, and real-time dashboards. Our use of WebSockets and streaming technologies creates a fluid, live connection for up-to-the-second data flow.',
  },
  {
    title: 'Legacy System API Enablement',
    description:
      'Modernize your existing infrastructure by wrapping it in a new, clean API. This unlocks new possibilities for your legacy systems, allowing them to securely communicate with modern applications and services.',
  },
  {
    title: 'Microservices & Internal APIs',
    description:
      'We design and build internal APIs that allow your software components to communicate efficiently. This helps you build a modular, scalable architecture that is easier to maintain and update as your business grows.',
  },
  {
    title: 'Performance Optimization & Caching',
    description:
      'We don\'t just build APIs; we optimize them for speed. By implementing smart caching strategies and rate limiting, we ensure your APIs deliver lightning-fast responses, even under heavy traffic.',
  },
  {
    title: 'API Gateway Management & Documentation',
    description:
      'We set up and manage API gateways to protect and control access to your services. Paired with clear, developer-friendly Swagger/OpenAPI documentation, we make it easy for other developers to integrate with your platform.',
  },
];

const process = [
  {
    title: 'Requirement Discovery',
    description: "Understand what your app or system needs to send, receive, and automate",
  },
  {
    title: 'API Architecture Design',
    description: "Choose between REST, GraphQL, or other protocols and plan the endpoints",
  },
  {
    title: 'Development & Testing',
    description: "Build, document, and rigorously test with tools like. Postman and Swagger",
  },
  {
    title: 'Deployment & Integration',
    description: "Deploy to production and ensure smooth communication with your apps",
  },
  {
    title: 'Monitoring & Support',
    description: "Track uptime, handle versioning, and maintain long-term reliability",
  },
];

const whychooseus = [
  {
    title: 'Secure by Design',
    description: "We build with encryption, rate limits, and best practices",
  },
  {
    title: 'Clean & Well-Documented Code',
    description: 'Easy to use, maintain, and extend',
  },
  {
    title: 'Performance-Optimized',
    description: 'Fast responses even under high traffic',
  },
  {
    title: 'MonetizatiScalable & Future-Proof',
    description: 'Designed to grow with your business',
  },
  {
    title: 'Developer-Friendly Docs',
    description: "Swagger or Postman collections ready for your team",
  },
];

const engagementOptions = [
  {
    title: "API from Scartch",
    description: "We Design, build, and document your custom API from zero",
  },
  {
    title: "Upgrade or Secure Existing APIs",
    description: "Improve performance, fix bugs, or add new features",
  },
  {
    title: "API Integrations Only",
    description: "We connect your software with third-party services or platforms",
  },
];

function ApiDevContent() {
  return (
   <section>
    <Banner 
        heading="API Development Service"
        subtext="Connect system, apps, and people with powerful, Secure APIs"
        buttonText="Book Free Consultation"
        note="APIs (Application Programming Interface) act as the bridge between your software and the world. We build custom APIs that help apps talk to each other, Share data securely, and automate workflows-giving your business flexible, speed, and growth."
    />
    <InfoStats
        stats={[
            { number: "70%", label: "Reduction in integration overheads with APIs" },
            { number: "20K+", label: "Requests handled per second in enterprise-scale APIs" },
            { number: "3x", label: "Improved system interoperability" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Our API Development Services"
    Services={services}/>
        <TechToolsSection/>

    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom API development services turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {placeholderImage}
          imageAlt = "Web Development"
      />
    <DevelopmentProcess 
      title="Our API Development Process"
      Process={process}
      />
    <EngagementOptions
      title="How We Can Collaborate"
      options={engagementOptions}
    />
   </section>
  );
}

export default ApiDevContent;