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
    title: "AI Readiness Assessment",
    description:
      "Evaluate your current data, technology, and processes to determine AI adoption feasibility.",
  },
  {
    title: "AI Roadmap Development",
    description:
      "Design a clear step-by-step plan for integrating AI into your business strategy.",
  },
  {
    title: "Technology & Vendor Selection",
    description:
      "Identify the best AI tools, frameworks, and platforms tailored to your needs.",
  },
  {
    title: "AI Use Case Identification",
    description:
      "Pinpoint high-value opportunities where AI can drive measurable impact.",
  },
  {
    title: "Change Management & Training",
    description:
      "Ensure smooth adoption with employee training, workshops, and knowledge transfer.",
  },
  {
    title: "Ethical AI & Compliance Guidance",
    description:
      "Implement AI solutions that align with regulations and responsible AI practices.",
  },
];

const whychooseus = [
  {
    title: "Business-First AI Strategies",
    description:
      "Our recommendations focus on achieving measurable business goals, not just technical innovation.",
  },
  {
    title: "Cross-Industry Expertise",
    description:
      "We’ve guided AI adoption in healthcare, finance, retail, manufacturing, and more.",
  },
  {
    title: "Proven Methodology",
    description:
      "We use a structured, data-driven approach to ensure AI initiatives succeed.",
  },
  {
    title: "Seamless Integration",
    description:
      "We design AI strategies that complement your existing systems and workflows.",
  },
  {
    title: "Future-Proof Planning",
    description:
      "Our strategies are built to adapt as AI technologies and market demands evolve.",
  },
];

const useCases = [
  "Defining a company-wide AI adoption roadmap",
  "Identifying top 3 AI opportunities with highest ROI",
  "Evaluating build-vs-buy options for AI-powered solutions",
  "Creating AI governance and compliance frameworks",
  "Developing AI-powered customer engagement strategies",
];

function AIConsultingStrategyContent() {
  return (
    <section>
      <Banner 
        heading="AI Consulting & Strategy"
        subtext="Turn AI from a buzzword into a business advantage."
        buttonText="Start Your AI Strategy"
        note="Our AI consulting and strategy services help you navigate the complexities of AI adoption. From identifying opportunities to creating a clear execution plan, we ensure your AI initiatives deliver real business value."
      />

      <InfoStats
        stats={[
          { number: "84%", label: "of enterprises believe AI gives them a competitive edge" },
          { number: "2x", label: "increase in efficiency with AI-led process improvements" },
          { number: "75%", label: "of executives see AI as a critical factor in future growth" }
        ]}
        caption="Partnered with Innovative Startups and"
        highlight="Global Enterprises"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      
      <ScheduleConsultation
        heading="Shape Your AI Future with Confidence"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="AI Consulting Strategy"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <OnlinePresence 
        title="Let’s Build Your AI Strategy Today."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="AI Consulting & Strategy Services"
      />

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default AIConsultingStrategyContent;
