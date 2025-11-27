import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
// import OnlinePresence from "../../../common-ui/dataui/online-presence";
import DevelopmentProcess from "../../../common-ui/dataui/development-process";
import contactUsImg from "./../../../../assets/contact/contact-us-img1.jpg";
// import scheduleConsultImg from './../../../../assets/contact/schedule-a-consultation-img2.jpg';
import CustomAIDevelopmentToolsSection from "./custom-ai-tech-tool";
import AboutTech from "../../../common-ui/dataui/about-tech";

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

const aiDevDescription = [
  {
    name: "TensorFlow",
    description:
      "TensorFlow is an open-source machine learning framework developed by Google, widely used for deep learning, neural networks, and large-scale machine learning tasks.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    iconColors: "linear-gradient(135deg, #ffe0cc, #fff5f0)", // light orange/peach
  },
  {
    name: "PyTorch",
    description:
      "PyTorch is a deep learning framework developed by Facebook AI Research, known for its flexibility, dynamic computation graph, and strong community adoption.",
    icon: "https://pytorch.org/assets/images/pytorch-logo.png",
    iconColors: "linear-gradient(135deg, #ffd9d1, #fff5f3)", // soft coral/pink
  },
  {
    name: "OpenAI GPT",
    description:
      "OpenAI GPT (Generative Pre-trained Transformer) is a state-of-the-art large language model that powers advanced natural language understanding and generation tasks.",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/openai-icon.png",
    iconColors: "linear-gradient(135deg, #e2d9f9, #f9f6ff)", // soft violet/lavender
  },
  {
    name: "OpenCV",
    description:
      "OpenCV (Open Source Computer Vision Library) is an open-source toolkit for real-time computer vision, machine learning, and image processing applications.",
    icon: "https://img.icons8.com/color/512/opencv.png",
    iconColors: "linear-gradient(135deg, #d9e2ff, #f5f9ff)", // light blue tint
  },
  {
    name: "Pandas",
    description:
      "Pandas is a Python library for data manipulation and analysis, offering powerful data structures like DataFrames to handle structured data efficiently.",
    icon: "https://pandas.pydata.org/static/img/pandas_mark.svg",
    iconColors: "linear-gradient(135deg, #dcd6f5, #f8f7ff)", // pastel indigo/lilac
  },
  {
    name: "NumPy",
    description:
      "NumPy is a core Python library for numerical computing, providing support for large multidimensional arrays, matrices, and a collection of mathematical functions.",
    icon: "https://numpy.org/images/logo.svg",
    iconColors: "linear-gradient(135deg, #d6ecff, #f7fbff)", // pale sky blue
  },
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
          {
            number: "84%",
            label: "Of businesses see AI as a competitive advantage",
          },
          { number: "2×", label: "Efficiency gains with AI-driven automation" },
          {
            number: "75%",
            label: "Of executives view AI as critical for growth",
          },
        ]}
        caption="Trusted by Startups and"
        highlight="Industry Leaders Worldwide"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />

      <CustomAIDevelopmentToolsSection />
      <AboutTech technologies={aiDevDescription} />
      <WhyChooseUs ChooseUs={whychooseus} />

      <ScheduleConsultation
        heading="Turn Your AI Vision Into Reality"
        buttonText="Schedule a Consultation!"
        imageSrc={contactUsImg}
        imageAlt="Custom AI Development Consultation"
        Icon={MdSchedule}
      />

      {/* <OnlinePresence 
        title="Let’s Build Your Custom AI Solution Today."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={scheduleConsultImg}
        imageAlt="Custom AI Development Services"
      /> */}

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default CustomAIDevelopmentContent;
