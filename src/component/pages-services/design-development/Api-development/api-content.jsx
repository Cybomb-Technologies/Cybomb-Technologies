import ApiTechnologiesSection from "./api-dev-TechnologiesSection";


import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import EngagementOptions from "../../../common-ui/design-and-development/engagement-options";

const services = [
  {
    title: 'Custom Rest API Development',
    description:
      'Build reliable and scalable RESTfull APIs that work seamlessly with your frontend, mobile app, or third-party platforms',
  },
  {
    title: 'GraphQL API Development',
    description:
      'Give clients exactly the data they need-faster and more flexible than REST',
  },
  {
    title: 'Third-Party API Integration',
    description:
      'Seamlessly connect with payment gateways, CRMS, SMS/email providers, maps, analytics, and more',
  },
  {
    title: 'Internal APIs for Microservices',
    description:
      'Help your software components communicate effectively in modern distributed systems',
  },
  {
    title: 'Internal APIs for Microservices',
    description:
      'Secure your app with login systems, OAuth2, JWT, and role-based access controls',
  },
  {
    title: 'API Gateway & Rate Limiting',
    description:
      'Protect your APIs with smart traffic control, caching, and usage limits',
  },
  {
    title: 'Real-Time APIs (WebSocket, Streaming)',
    description:
      'Power chat apps, notifications, dashboards, or tracking systems with live data flow',
  },
  {
    title: 'Real-Time APIs (WebSocket, Streaming)',
    description:
      'Power chat apps, notifications, dashboards, or tracking systems with live data flow',
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
        { number: "900+", label: "In-house Expert Developer" },
        { number: "70%", label: "Average Savings on Development Costs" },
        { number: "20,000+", label: "Projects Delivered Successfully" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Our API Development Services"
    Services={services}/>
        <ApiTechnologiesSection/>

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