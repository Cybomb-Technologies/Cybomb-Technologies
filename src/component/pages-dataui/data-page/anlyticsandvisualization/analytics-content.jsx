import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
import OnlinePresence from "../../../common-ui/dataui/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import DevelopmentProcess from "../../../common-ui/dataui/development-process";

const WhatWeOffers = [
  {
    title: "Interactive Dashboards",
    description:
      "Create real-time dashboards that turn complex data into actionable insights.",
  },
  {
    title: "Advanced Analytics",
    description:
      "Leverage statistical models, machine learning, and predictive analytics to forecast trends.",
  },
  {
    title: "Data Storytelling",
    description:
      "Transform raw data into compelling visual narratives for decision-makers.",
  },
  {
    title: "Self-Service BI Platforms",
    description:
      "Enable teams to explore and visualize data without technical dependencies.",
  },
  {
    title: "Custom Visualization",
    description:
      "Build tailored visualizations that fit your business metrics and workflows.",
  },
  {
    title: "Embedded Analytics",
    description:
      "Integrate interactive analytics directly into your products and services.",
  },
];

const whychooseus = [
  {
    title: "Business-Focused Insights",
    description:
      "We design analytics solutions that directly support your strategic goals.",
  },
  {
    title: "Cross-Tool Expertise",
    description:
      "Proficient in Tableau, Power BI, Looker, Qlik, and custom visualization libraries.",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Enable faster and more confident decision-making across teams.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Architect analytics setups that grow with your data and business needs.",
  },
  {
    title: "Clear Communication",
    description:
      "We turn complex findings into easy-to-understand insights for all stakeholders.",
  },
];

const useCases = [
  "Designing executive dashboards for real-time performance tracking",
  "Building predictive sales analytics for revenue forecasting",
  "Creating interactive customer segmentation visualizations",
  "Embedding analytics into SaaS platforms for client use",
  "Visualizing supply chain performance to identify bottlenecks"
];

function AnalyticsVisualizationContent() {
  return (
    <section>
      <Banner 
        heading="Analytics & Visualization"
        subtext="Turn data into decisions with clear, actionable insights."
        buttonText="Start Your Analytics Journey"
        note="Our analytics and visualization services empower organizations to unlock the full value of their data. From interactive dashboards to predictive models, we help you understand trends, track KPIs, and make informed decisions faster."
      />

      <InfoStats
        stats={[
          { number: "70%", label: "Of leaders rely on dashboards for decisions" },
          { number: "5×", label: "Faster reporting with automation" },
          { number: "80%", label: "Higher engagement with visual insights" }
        ]}
        caption="Trusted by Enterprises and"
        highlight="High-Growth Startups"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      
      <ScheduleConsultation
        heading="Make Smarter Decisions with Analytics & Visualization"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="Analytics Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <OnlinePresence 
        title="Let’s Build Your Custom Analytics & Visualization Solution."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Analytics & Visualization Services"
      />

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default AnalyticsVisualizationContent;
