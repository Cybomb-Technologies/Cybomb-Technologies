import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import EngagementOptions from "../../../common-ui/design-and-development/engagement-options";
import TechToolsSection from "./TechToolsSection";
import BespokeDevImg from "./../../../../assets/technologies/bespoke-software.jpg";

const services = [
 {
    title: 'Custom Business Applications',
    description:
      'From internal dashboards to operations platforms—we build tools to run your business efficiently',
  },
  {
    title: 'Automation Solutions',
    description:
      'Replace spreadsheets and manual work with intelligent, automated software',
  },
  {
    title: 'Product Development (SaaS, Portals, Tools)',
    description:
      'Have a startup idea? We help you build and launch your own platform',
  },
  {
    title: 'Legacy System Replacement',
    description:
      'Upgrade outdated software with a sleek, modern, secure alternative tailored to current needs',
  },
  {
    title: 'Cross-Platform Solutions',
    description:
      'Access your software via web, mobile, or desktop with synchronized data and performance',
  },
  {
    title: 'Advanced Integrations',
    description:
      'Connect your systems with APIs, third-party tools, ERPs, CRMs, or custom services',
  },
];

const process = [
  {
    title: 'Discovery & Requirement Mapping',
    description: 'Understand your process, pain points, and future plans',
  },
  {
    title: 'Planning & Wireframing',
    description: 'Design the blueprint for your software’s interface and functionality',
  },
  {
    title: 'Agile Development & Reviews',
    description: 'Build in phases, with feedback and improvements at every step',
  },
  {
    title: 'QA, Testing & Feedback',
    description: 'Ensure stability, performance, and usability across all devices',
  },
  {
    title: 'Deployment & Support',
    description: 'Launch the software, provide training, and offer long-term updates if needed',
  },
];

const whychooseus = [
  {
    title: 'Built Around You',
    description: 'Everything is customized for how your business actually works',
  },
  {
    title: 'Problem-Solving First',
    description: 'We focus on real-world use cases and outcomes—not just code',
  },
  {
    title: 'Security at Core',
    description: 'Data protection, secure access, and role-based permissions built-in',
  },
  {
    title: 'Future-Ready',
    description: 'Modular and scalable software that evolves as you grow',
  },
  {
    title: 'One-on-One Collaboration',
    description: 'We work closely with you from idea to delivery',
  },
];

const engagementOptions = [
  {
    title: "From-Scratch Bespoke Development",
    description: "Share your challenge—we’ll build the perfect solution.",
  },
  {
    title: "Modernization and Rebuilds",
    description: "Turn legacy tools into modern, efficient platforms.",
  },
  {
    title: "Dedicated Teams",
    description: " Get long-term development and support with our full-stack experts.",
  },
];

export default function BespokeDevContent() {
  return (
    <section>
    
    <Banner 
        heading=" Bespoke Software Development Services"
        subtext="Tailor-made software built exactly for your business"
        buttonText="Book Free Consultation"
        note="Off-the-shelf solutions don’t always fit your unique goals—and that’s where bespoke software comes in. We design and develop custom-built digital solutions from scratch that match your exact workflows, challenges, and growth plans."
    />
    <InfoStats
        stats={[
          { number: "100%", label: "Tailored to unique business needs (no generic templates)" },
          { number: "80%", label: "Better scalability as your company grows" },
          { number: "0%", label: "Unnecessary subscriptions or limitations" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Bespoke Development Services"
    Services={services}/>
    <TechToolsSection/>
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom Bespoke development services turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {BespokeDevImg}
          imageAlt = "Bespoke Development"
      />
    <DevelopmentProcess 
      title="Our Bespoke Development Process"
      Process={process}
      />
    <EngagementOptions
      title="How We Can Collaborate"
      options={engagementOptions}
    />
   </section>
  );
}