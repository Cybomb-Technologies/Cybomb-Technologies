import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
// import OnlinePresence from "../../../common-ui/dataui/online-presence";
import DevelopmentProcess from "../../../common-ui/dataui/development-process";
import contactUsImg from "./../../../../assets/contact/contact-us-img2.jpg";
import scheduleConsultImg from "./../../../../assets/contact/schedule-a-consultation-img3.jpg";
import AnalyticsToolsSection from "./analytics-techtool";
import AboutTech from "../../../common-ui/dataui/about-tech";

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
  "Visualizing supply chain performance to identify bottlenecks",
];

const analyticsVisualizationDescription = [
  {
    name: "Tableau",
    description:
      "A leading data visualization and business intelligence tool that enables interactive dashboards and advanced analytics with drag-and-drop simplicity.",
    icon: "https://img.icons8.com/color/512/tableau-software.png",
    iconColors: "linear-gradient(135deg, #fddbb3, #e6f3ff)", // soft orange + pale blue
  },
  {
    name: "Power BI",
    description:
      "Microsoft’s business analytics service that provides interactive visualizations and self-service business intelligence capabilities with strong Office integration.",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/power-bi-icon.png",
    iconColors: "linear-gradient(135deg, #ffefb3, #fffbea)", // soft golden yellow
  },
  {
    name: "Qlik Sense",
    description:
      "A modern analytics platform that uses an associative data engine to provide powerful self-service visualization, dashboards, and embedded analytics.",
    icon: "https://logodix.com/logo/2096842.png",
    iconColors: "linear-gradient(135deg, #d9fbe6, #f7fffb)", // mint green pastel
  },
  {
    name: "Looker",
    description:
      "A Google Cloud data analytics and visualization platform that allows businesses to explore, share, and operationalize insights from their data.",
    icon: "https://www.svgrepo.com/show/354012/looker-icon.svg",
    iconColors: "linear-gradient(135deg, #e9ddff, #faf7ff)", // soft lavender
  },
  {
    name: "Zoho Analytics",
    description:
      "A self-service BI and analytics platform from Zoho that enables users to create visualizations, dashboards, and analyze data with AI-powered insights.",
    icon: "https://img.icons8.com/?size=512&id=KJ0KehaD9qPs&format=png",
    iconColors: "linear-gradient(135deg, #d6eaff, #f5faff)", // pale blue
  },
  {
    name: "Grafana",
    description:
      "An open-source analytics and interactive visualization platform for monitoring time-series data across infrastructure, applications, and business metrics.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
    iconColors: "linear-gradient(135deg, #ffd9c9, #fff4f0)", // soft orange-peach
  },
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
          {
            number: "70%",
            label: "Of leaders rely on dashboards for decisions",
          },
          { number: "5×", label: "Faster reporting with automation" },
          { number: "80%", label: "Higher engagement with visual insights" },
        ]}
        caption="Trusted by Enterprises and"
        highlight="High-Growth Startups"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      <AnalyticsToolsSection />
      <AboutTech technologies={analyticsVisualizationDescription} />
      <WhyChooseUs ChooseUs={whychooseus} />
      <ScheduleConsultation
        heading="Make Smarter Decisions with Analytics & Visualization"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Analytics Consultation"
        Icon={MdSchedule}
      />

      {/* <OnlinePresence 
        title="Let’s Build Your Custom Analytics & Visualization Solution."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Analytics & Visualization Services"
      /> */}

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default AnalyticsVisualizationContent;
