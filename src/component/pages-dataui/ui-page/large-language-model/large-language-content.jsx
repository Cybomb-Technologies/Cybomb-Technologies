import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
// import OnlinePresence from "../../../common-ui/dataui/online-presence";
import DevelopmentProcess from "../../../common-ui/dataui/development-process";
// import contactUsImg from './../../../../assets/contact/contact-us-img1.jpg';
import scheduleConsultImg from "./../../../../assets/contact/schedule-a-consultation-img2.jpg";
import LLMToolsSection from "./large-language-tech-tool";
import AboutTech from "../../../common-ui/dataui/about-tech";

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

const llmDescription = [
  {
    name: "OpenAI GPT",
    description:
      "OpenAI GPT is a state-of-the-art large language model designed for natural language understanding, generation, and conversational AI applications.",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/openai-icon.png",
    iconColors: "linear-gradient(135deg, #F2F6FF, #FFFFFF)", // very light blue-white
  },
  {
    name: "Hugging Face",
    description:
      "Hugging Face provides open-source libraries and models for natural language processing, making it easy to deploy and fine-tune transformers and LLMs.",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/huggingface-icon.png",
    iconColors: "linear-gradient(135deg, #FFF6E5, #FFFFFF)", // light warm yellow-orange
  },
  {
    name: "Cohere",
    description:
      "Cohere offers NLP and LLM APIs that enable developers to build powerful AI applications such as text generation, classification, and semantic search.",
    icon: "https://cdn.brandfetch.io/cohere.ai/full/logo/cohere.ai.jpeg",
    iconColors: "linear-gradient(135deg, #EAF3FF, #FFFFFF)", // light soft blue
  },
  {
    name: "Anthropic Claude",
    description:
      "Anthropic Claude is an advanced AI assistant built with a focus on safety, alignment, and helpfulness in language model interactions.",
    icon: "https://brandlogo.org/wp-content/uploads/2025/05/Anthropic-Icon-2021.png.webp",
    iconColors: "linear-gradient(135deg, #FFF0F5, #FFFFFF)", // soft pinkish gradient
  },
  {
    name: "MLflow",
    description:
      "MLflow is an open-source platform for managing the end-to-end machine learning lifecycle, including experimentation, reproducibility, and deployment.",
    icon: "https://images.chainguard.dev/logos/mlflow.svg",
    iconColors: "linear-gradient(135deg, #E6F7FF, #FFFFFF)", // very light cyan/blue
  },
  {
    name: "Kubeflow",
    description:
      "Kubeflow is a Kubernetes-native platform for developing, orchestrating, and deploying scalable machine learning workflows.",
    icon: "https://www.kubeflow.org/docs/images/logos/kubeflow.png",
    iconColors: "linear-gradient(135deg, #E8F9F1, #FFFFFF)", // minty green-light teal
  },
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
          { number: "175B+", label: "Parameters in state-of-the-art LLMs" },
          { number: "90%", label: "Reduction in document review time with AI" },
          { number: "50+", label: "Languages supported for global markets" },
        ]}
        caption="Trusted by AI Innovators and"
        highlight="Global Enterprises"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />

      <LLMToolsSection />
      <AboutTech technologies={llmDescription} />
      <WhyChooseUs ChooseUs={whychooseus} />

      <ScheduleConsultation
        heading="Build Smarter, Faster, and More Natural AI Solutions with LLMs"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="LLM Solutions"
        Icon={MdSchedule}
      />

      {/* <OnlinePresence 
        title="Let’s Build Your Next-Generation LLM Solution."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Large Language Model AI"
      /> */}

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default LLMSolutionsContent;
