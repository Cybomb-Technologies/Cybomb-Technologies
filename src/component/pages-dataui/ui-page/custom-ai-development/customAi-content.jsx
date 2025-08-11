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
    title: "Custom AI Model Development",
    description:
      "Build tailored machine learning and deep learning models designed for your unique business challenges.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Create AI solutions that understand, process, and respond to human language for chatbots, voice assistants, and more.",
  },
  {
    title: "Computer Vision Solutions",
    description:
      "Leverage AI for image and video analysis, facial recognition, object detection, and visual quality inspection.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Use AI models to forecast trends, demand, and risks with high accuracy.",
  },
  {
    title: "AI Integration & Deployment",
    description:
      "Seamlessly embed AI into your existing applications, workflows, and platforms.",
  },
  {
    title: "Ongoing AI Model Optimization",
    description:
      "Continuously improve accuracy, speed, and scalability with real-world data feedback.",
  },
];

const whychooseus = [
  {
    title: "Business-Aligned AI Solutions",
    description:
      "Our AI models are built with a clear focus on solving real business problems, not just showcasing technology.",
  },
  {
    title: "Full-Cycle AI Expertise",
    description:
      "We handle everything from data preparation and training to deployment and monitoring.",
  },
  {
    title: "Cutting-Edge Tools & Frameworks",
    description:
      "We leverage TensorFlow, PyTorch, OpenAI APIs, and other top-tier AI frameworks.",
  },
  {
    title: "Ethical & Transparent AI",
    description:
      "Our development follows responsible AI practices to ensure fairness, security, and compliance.",
  },
  {
    title: "Scalable & Future-Proof",
    description:
      "Our solutions are designed to evolve with your business and technology landscape.",
  },
];

const useCases = [
  "Developing a predictive maintenance AI system for manufacturing equipment",
  "Building a recommendation engine for e-commerce personalization",
  "Creating an AI-powered document processing and summarization tool",
  "Designing a fraud detection AI model for fintech applications",
  "Developing a computer vision system for automated quality checks in production",
];

function CustomAIDevelopmentContent() {
  return (
    <section>
      <Banner 
        heading="Custom AI Development"
        subtext="Build AI solutions that are as unique as your business."
        buttonText="Start Your AI Project"
        note="Our custom AI development services empower businesses to unlock new efficiencies, insights, and innovations. From concept to deployment, we create AI models that solve your specific challenges and drive measurable results."
      />

      <InfoStats
        stats={[
          { number: "80%", label: "of enterprises are investing in AI solutions" },
          { number: "3x", label: "faster decision-making with AI-powered analytics" },
          { number: "$15.7 trillion", label: "estimated AI contribution to the global economy by 2030" }
        ]}
        caption="Trusted by Startups and"
        highlight="Industry Leaders Worldwide"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      
      <ScheduleConsultation
        heading="Turn Your AI Vision Into Reality"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="Custom AI Development Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <OnlinePresence 
        title="Let’s Build Your Custom AI Solution Today."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Custom AI Development Services"
      />

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default CustomAIDevelopmentContent;
