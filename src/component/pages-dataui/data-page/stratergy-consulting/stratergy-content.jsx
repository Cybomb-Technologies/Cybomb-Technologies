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
import StrategyToolsSection from "./strategy-techtool";
const WhatWeOffers = [
  {
    title: "Digital Transformation Planning",
    description:
      "Roadmaps to modernize legacy systems, adopt cloud, and digitize operations",
  },
  {
    title: "Product & Platform Strategy",
    description:
      "Define the right features, tech stack, and market approach for digital products.",
  },
  {
    title: "Technology Audits",
    description:
      "Evaluate current tools and architecture with clear upgrade paths.",
  },
  {
    title: "Go-to-Market Strategy",
    description:
      "Position your software, app, or service for competitive success.",
  },
  {
    title: "Process Optimization Consulting",
    description:
      "Improve workflows, reduce redundancies, and scale operations effectively.",
  },
  {
    title: "Growth & Innovation Advisory",
    description:
      "Identify new revenue streams, market trends, and emerging technologies.",
  },
];

const whychooseus = [
  {
    title: "Business & Tech Alignment",
    description:
      "We bridge the gap between C-level vision and real-world tech execution.",
  },
  {
    title: "Industry-Agnostic Expertise",
    description:
      "consultants work across fintech, healthcare, SaaS, e-commerce, and more.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "recommendation is backed by research, KPIs, and feasibility analysis.",
  },
  {
    title: "Execution-Ready Plans",
    description:
      "Our strategy goes beyond theory - it's built for immediate implementation.",
  },
  {
    title: "Collaborative Approach",
    description:
      "work closely with your teams to ensure buy-in and clarity at every level.",
  },
];

const useCases = [
  "Optimizing costs with cloud migration and automation",
  "Designing a scalable product roadmap before launch",
  "Revamping internal processes for better productivity",
  "Creating a 2-year digital transformation roadmap",
  "Evaluating whether to build or buy a software platform",
];

function Stratergycontent() {
  return (
    <section>
      <Banner
        heading="Strategy Consultancy"
        subtext="Empower smarter decision. Build a future-proof roadmap."
        buttonText="Book Free Consultation"
        note="Our stratergy consultancy services help businesses align their technology, operations, and growth initiatives with a clear, actionable plan - tailored for today's fast-changing digital world. Whether you're scaling a startup or optimizing an enterprises, we offer strategic insights and hands-on expertise to guide your next move."
      />
      <InfoStats
        stats={[
          {
            number: "90%",
            label: "Of enterprises investing in digital transformation",
          },
          { number: "Mobile-first", label: "Adoption now the new standard" },
          { number: "50%", label: "Efficiency boost with AI-led analytics" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />

      <StrategyToolsSection />

      <WhyChooseUs ChooseUs={whychooseus} />

      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our Strategy Consultancy Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      {/* <OnlinePresence 
               title = "Let's Find the Strategy Consultancy Services right for your business."
               buttonText = "CONTACT US"
               buttonLink = "#"
               imageSrc = {contactUsImg}
               imageAlt = "CRM services"
           /> */}
      <DevelopmentProcess title="Use Case" Process={useCases} />
    </section>
  );
}
export default Stratergycontent;
