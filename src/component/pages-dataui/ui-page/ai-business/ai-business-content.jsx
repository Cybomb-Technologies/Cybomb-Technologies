import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
// import OnlinePresence from "../../../common-ui/dataui/online-presence";
import DevelopmentProcess from "../../../common-ui/dataui/development-process";
import contactUsImg from "./../../../../assets/contact/contact-us-img1.jpg";
import scheduleConsultImg from "./../../../../assets/contact/schedule-a-consultation-img2.jpg";
import AIBIToolsSection from "./ai-business-tech-tools";
import AboutTech from "../../../common-ui/dataui/about-tech";
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

const aiBIDescription = [
  {
    name: "Tableau",
    description:
      "Tableau is a leading data visualization and business intelligence platform that helps users analyze, visualize, and share insights from their data with interactive dashboards.",
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
    iconColors: "linear-gradient(135deg, #FFEFE5, #FFF8F2)", // very light orange/cream
  },
  {
    name: "Power BI",
    description:
      "Power BI is Microsoft’s business analytics service that enables users to connect to multiple data sources, build interactive dashboards, and generate actionable insights.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    iconColors: "linear-gradient(135deg, #FFF8D6, #FFFBEF)", // soft pale yellow
  },
  {
    name: "Snowflake",
    description:
      "Snowflake is a cloud-based data warehousing platform that allows scalable storage and analysis, supporting secure data sharing and modern analytics workloads.",
    icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.64.0/files/dark/snowflake-color.png",
    iconColors: "linear-gradient(135deg, #E9F7FB, #F7FCFE)", // icy light blues
  },
  {
    name: "BigQuery",
    description:
      "BigQuery is Google Cloud’s fully managed, serverless data warehouse that enables super-fast SQL queries and large-scale analytics on petabyte-sized datasets.",
    icon: "https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg",
    iconColors: "linear-gradient(135deg, #EAF2FF, #F8FBFF)", // light blue gradient
  },
  {
    name: "Informatica",
    description:
      "Informatica is an enterprise cloud data management and integration platform, offering ETL, data governance, and AI-powered insights for analytics and business operations.",
    icon: "https://cdn.prod.website-files.com/63b3b18df5fd61327dc65e8a/6423e66403f44340c64eefb6_informatica-bg.png",
    iconColors: "linear-gradient(135deg, #FFEAE2, #FFF5F0)", // light orange-red pastel
  },
  {
    name: "Superset",
    description:
      "Apache Superset is an open-source modern data exploration and visualization platform that provides interactive dashboards and powerful SQL-based analytics.",
    icon: "https://images.seeklogo.com/logo-png/50/3/superset-icon-logo-png_seeklogo-500354.png",
    iconColors: "linear-gradient(135deg, #E6F7FA, #F4FCFD)", // light teal-blue
  },
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
          {
            number: "70%",
            label: "Of businesses report faster decisions with AI BI",
          },
          { number: "3×", label: "More competitive companies using AI BI" },
          { number: "2.5Q", label: "Bytes of global data analyzed daily" },
        ]}
        caption="Trusted by Data-Driven Startups and"
        highlight="Global Enterprises"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />

      <AIBIToolsSection />
      <AboutTech technologies={aiBIDescription} />
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

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default AIBusinessIntelligenceContent;
