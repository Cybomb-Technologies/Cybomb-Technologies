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
    title: "Custom LLM Development",
    description:
      "Build and fine-tune large language models specifically for your industry and use cases.",
  },
  {
    title: "LLM Integration into Workflows",
    description:
      "Embed LLMs into your business applications for smarter automation and decision-making.",
  },
  {
    title: "Domain-Specific Knowledge",
    description:
      "Train LLMs on proprietary datasets to deliver contextually relevant responses.",
  },
  {
    title: "Conversational AI Solutions",
    description:
      "Develop intelligent chatbots, virtual assistants, and support agents powered by LLMs.",
  },
  {
    title: "Text Analysis & Summarization",
    description:
      "Use LLMs to extract, condense, and explain complex information quickly.",
  },
  {
    title: "Multi-Language Capabilities",
    description:
      "Enable global communication with translation and localization powered by LLMs.",
  },
];

const whychooseus = [
  {
    title: "Cutting-Edge AI Expertise",
    description:
      "We stay ahead of the curve in LLM research, ensuring you get the latest advancements.",
  },
  {
    title: "Business-Ready Solutions",
    description:
      "Our LLMs are designed for real-world deployment, not just experimentation.",
  },
  {
    title: "Security & Compliance First",
    description:
      "We implement strict data governance to ensure privacy and regulatory compliance.",
  },
  {
    title: "Customizable & Scalable",
    description:
      "Our solutions grow with your data, user base, and evolving business needs.",
  },
  {
    title: "Proven Use Cases",
    description:
      "From customer service to market research, we deliver measurable results.",
  },
];

const useCases = [
  "Creating AI-powered customer service chatbots with natural conversation",
  "Summarizing lengthy legal or research documents instantly",
  "Generating personalized marketing copy at scale",
  "Training internal knowledge assistants for employee queries",
  "Building multi-language communication tools for global teams",
];

function LLMSolutionsContent() {
  return (
    <section>
      <Banner 
        heading="Large Language Model (LLM) Solutions"
        subtext="Harness the power of advanced language models to transform your business."
        buttonText="Start Your LLM Project"
        note="Our Large Language Model solutions empower businesses to automate communication, enhance decision-making, and unlock insights from massive volumes of text. From chatbots to custom-trained AI, we help you put LLM technology to work for your unique needs."
      />

      <InfoStats
        stats={[
          { number: "175B+", label: "parameters in state-of-the-art LLMs like GPT-4" },
          { number: "90%", label: "reduction in manual document review time with LLMs" },
          { number: "50+", label: "languages supported for translation and localization" }
        ]}
        caption="Trusted by AI Innovators and"
        highlight="Global Enterprises"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      
      <ScheduleConsultation
        heading="Build Smarter, Faster, and More Natural AI Solutions with LLMs"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="LLM Solutions"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <OnlinePresence 
        title="Let’s Build Your Next-Generation LLM Solution."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Large Language Model AI"
      />

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default LLMSolutionsContent;
