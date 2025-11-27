import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import EngagementOptions from "../../../common-ui/design-and-development/engagement-options";
import TechToolsSection from "./TechToolsSection";
import saasSolutionImg from "./../../../../assets/technologies/saas-solutions.jpg";

const services = [
  {
    title: 'SaaS Strategy & MVP Development',
    description:
      'We help you shape your SaaS idea, plan the right features, and build a Minimum Viable Product to attract first users quickly.',
  },
  {
    title: 'Custom SaaS Development',
    description:
      'From design to backend, database, and cloud, we create complete SaaS solutions tailored to your business needs.',
  },
  {
    title: 'Scalable SaaS Architecture',
    description:
      'We design secure, multi-tenant systems that support many users, roles, and growing business demands.',
  },
  {
    title: 'Subscription & Payment Systems',
    description:
      'We set up billing, free trials, and payment gateways like Stripe, Razorpay, and PayPal for smooth revenue management.',
  },
  {
    title: 'User & Admin Dashboards',
    description:
      'We create easy-to-use dashboards for customers and admin teams to track data, accounts, and workflows.',
  },
  {
    title: 'SaaS Upgrades & Modernization',
    description:
      'We rebuild or improve old SaaS products with modern technologies, faster performance, and better security.',
  },
  {
    title: 'Third-Party API Integration',
    description:
      'We connect your SaaS with CRMs, analytics tools, automation platforms, and other software for more functionality.',
  },
  {
    title: 'Ongoing SaaS Support',
    description:
      'We provide maintenance, updates, and monitoring to keep your SaaS secure, fast, and reliable after launch.',
  },
];


const process = [
  {
    title: 'Research & Strategy',
    description: 'We understand your SaaS idea, study the market, and plan the best approach.',
  },
  {
    title: 'Design & Prototyping',
    description: 'We create clean UI/UX designs and wireframes to show how your SaaS will work.',
  },
  {
    title: 'SaaS Development',
    description: 'We build your SaaS using modern technologies with regular updates and feedback.',
  },
  {
    title: 'Testing & Security',
    description: 'We test for speed, bugs, and data security to ensure a reliable SaaS product.',
  },
  {
    title: 'Launch & Growth',
    description: 'We launch your SaaS, set up analytics, and support you in scaling to more users.',
  },
];


const whychooseus = [
  {
    title: 'SaaS Expertise',
    description: 'We design and build SaaS platforms that are reliable, fast, and easy to use.',
  },
  {
    title: 'Faster Time to Market',
    description: 'Launch your SaaS product quickly with our agile development approach.',
  },
  {
    title: 'Data Security',
    description: 'We keep your SaaS platform safe with strong security and compliance practices.',
  },
  {
    title: 'Scalable Growth',
    description: 'Our solutions grow with your business and support more users as you expand.',
  },
  {
    title: 'Long-Term Support',
    description: 'We provide updates, maintenance, and improvements to keep your SaaS running smoothly.',
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
          imageSrc = {saasSolutionImg}
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