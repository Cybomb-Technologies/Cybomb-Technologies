import Banner from "../../../common-ui/enterprise-services/banner";
import InfoStats from "../../../common-ui/enterprise-services/info-stats";
import WhyChooseUs from "../../../common-ui/enterprise-services/why-choose-us";
import OnlinePresence from "../../../common-ui/enterprise-services/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import DevelopmentProcess from "../../../common-ui/enterprise-services/development-process";
import ScheduleConsultation from "../../../common-ui/enterprise-services/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import ServicesOfferings from "../../../common-ui/enterprise-services/services-offerings";
import AIMLPlatforms from "./AIMLPlatforms";

const offerings = [
  {
    title: "AI Strategy & Consulting",
    description: "We evaluate your business goals, data maturity, and infrastructure to craft a custom AI roadmap.",
  },
  {
    title: "Custom Machine Learning Model Development",
    description: "From regression to deep learning, we design and train ML models tailored to your business use cases.",
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Build intelligent systems that can understand, classify, and generate human language — chatbots, sentiment analysis, summarization, and more.",
  },
  {
    title: "Computer Vision",
    description: "Extract visual insights from images, video, and live streams — facial recognition, object detection, OCR, and more.",
  },
  {
    title: "Predictive Analytics & Forecasting",
    description: "Identify trends, anomalies, and forecasts to support smarter planning and decision-making.",
  },
  {
    title: "AI Model Deployment & MLOps",
    description: "Operationalize your AI models using CI/CD pipelines, monitoring tools, and scalable infrastructure.",
  },
];

const whychooseus = [
  {
    title: "Deep AI Expertise",
    description: "Our team includes experienced data scientists, ML engineers, and domain experts.",
  },
  {
    title: "Full-Stack AI Development",
    description: "We handle everything from data collection to model deployment and ongoing maintenance.",
  },
  {
    title: "Fast Prototyping, Scalable Solutions",
    description: "We build MVPs fast and scale what works — on cloud or on-premise.",
  },
  {
    title: "Responsible AI Practices",
    description: "We follow ethical AI development standards and ensure model fairness, interpretability, and compliance.",
  },
  {
    title: "Real-World Impact",
    description: "We’ve helped clients in healthcare, finance, retail, education, and logistics unlock the power of AI.",
  },
];

const useCases = [
  "Chatbots and virtual assistants for customer support",
  "Predicting user churn or product demand",
  "Fraud detection in banking and e-commerce",
  "Recommender systems for personalized shopping",
  "Image classification and facial recognition in security systems",
  "Document classification and smart search in legal or HR workflows",
  "Sentiment analysis of customer feedback"
];

function AIMLContent() {
  return (
    <section>
      <Banner 
        heading="AI & Machine Learning Services"
        subtext="Transform intelligence into action."
        buttonText="Book Free Consultation"
        note="Our AI/ML services empower your business to make smarter decisions, automate operations, and create deeply personalized experiences. Whether you're exploring AI for the first time or scaling complex models, we help you every step of the way — from strategy to deployment."
      />
      <InfoStats
        stats={[
          { number: "900+", label: "AI/ML Engineers & Data Scientists" },
          { number: "50+", label: "ML Models in Production" },
          { number: "30%", label: "Average Uplift in Decision Accuracy" }
        ]}
        caption="Empowering organizations with"
        highlight="AI-Driven Intelligence"
      />
      <ServicesOfferings 
        title="What We Offer"
        items={offerings}
      />
      <AIMLPlatforms/>
      <ScheduleConsultation
        heading="Bring Your AI Vision to Life with Our Expertise"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="AI & ML Consultation"
        Icon={MdSchedule}
      />
      <WhyChooseUs ChooseUs={whychooseus}/>
      <OnlinePresence 
        title="Let’s Create AI That Works For You"
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="AI Services"
      />
      <DevelopmentProcess 
        title="Use Case"
        Process={useCases}
      />
    </section>
  );
}

export default AIMLContent;
