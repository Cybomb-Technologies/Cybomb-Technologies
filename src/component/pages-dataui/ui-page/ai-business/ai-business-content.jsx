import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
// import OnlinePresence from "../../../common-ui/dataui/online-presence";
import DevelopmentProcess from "../../../common-ui/dataui/development-process";
import contactUsImg from './../../../../assets/contact/contact-us-img1.jpg';
import scheduleConsultImg from './../../../../assets/contact/schedule-a-consultation-img2.jpg';
import AIBIToolsSection from "./ai-business-tech-tools";

const WhatWeOffers = [
  {
    title: "AI-Powered Data Analysis",
    description:
      "Leverage AI to uncover hidden patterns, trends, and correlations in your business data.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast sales, demand, and market changes using advanced AI algorithms.",
  },
  {
    title: "Automated Reporting",
    description:
      "Generate real-time, interactive reports without manual data crunching.",
  },
  {
    title: "Natural Language Insights",
    description:
      "Use AI to convert complex datasets into plain-language business summaries.",
  },
  {
    title: "Custom BI Dashboards",
    description:
      "Create AI-driven dashboards tailored to your KPIs and decision-making needs.",
  },
  {
    title: "Data Integration & Cleaning",
    description:
      "Ensure your BI systems pull accurate, clean, and consolidated data from all sources.",
  },
];

const whychooseus = [
  {
    title: "Data-Driven Decision Making",
    description:
      "Our AI BI solutions empower leaders to act with confidence, backed by real-time insights.",
  },
  {
    title: "Cross-Platform Expertise",
    description:
      "We work with Power BI, Tableau, Qlik, and custom AI BI solutions.",
  },
  {
    title: "End-to-End Implementation",
    description:
      "From strategy to deployment, we handle the entire AI BI lifecycle.",
  },
  {
    title: "Business-Aligned Intelligence",
    description:
      "Our BI solutions are tailored to your industry’s unique metrics and goals.",
  },
  {
    title: "Scalable & Future-Ready",
    description:
      "We design AI BI solutions that grow with your business and adapt to new technologies.",
  },
];

const useCases = [
  "Forecasting monthly sales with AI-driven predictive models",
  "Detecting customer churn patterns in real-time",
  "Automating performance reports for leadership teams",
  "Identifying supply chain bottlenecks before they occur",
  "Generating AI-powered competitive market insights",
];

function AIBusinessIntelligenceContent() {
  return (
    <section>
      <Banner 
        heading="AI Business Intelligence"
        subtext="Turn your business data into actionable insights with AI."
        buttonText="Start Your AI BI Journey"
        note="Our AI Business Intelligence services combine the power of AI with advanced analytics to help you make better, faster, and smarter decisions. From predictive forecasting to automated reporting, we give your business the intelligence edge it needs."
      />

      <InfoStats
        stats={[
          { number: "70%", label: "Of businesses report faster decisions with AI BI" },
          { number: "3×", label: "More competitive companies using AI BI" },
          { number: "2.5Q", label: "Bytes of global data analyzed daily" }
        ]}
        caption="Trusted by Data-Driven Startups and"
        highlight="Global Enterprises"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />

      <AIBIToolsSection/>

      <WhyChooseUs ChooseUs={whychooseus} />
      
      <ScheduleConsultation
        heading="Make Every Decision Smarter with AI BI"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="AI Business Intelligence"
        Icon={MdSchedule}
      />

      

      {/* <OnlinePresence 
        title="Let’s Build Your AI-Driven BI System."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="AI BI Solutions"
      /> */}

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default AIBusinessIntelligenceContent;
