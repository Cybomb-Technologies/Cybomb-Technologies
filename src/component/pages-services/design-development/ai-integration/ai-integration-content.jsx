import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import EngagementOptions from "../../../common-ui/design-and-development/engagement-options";
import TechToolsSection from "./TechToolsSection";
import aiIntegrationImg from "./../../../../assets/technologies/ai-integration.jpg";

const services = [
  {
    title: 'AI-Powered Chatbots & Virtual Assistants',
    description:
      'Deploy intelligent bots that understand natural language and resolve user queries 24/7 across web, mobile, and messaging platforms.',
  },
  {
    title: 'Workflow Automation with AI',
    description:
      'Use machine learning to automate document processing, customer onboarding, ticket triaging, and more.',
  },
  {
    title: 'Predictive Analytics',
    description:
      'Leverage historical and real-time data to forecast trends, user behavior, and business outcomes—empowering faster decision-making.',
  },
  {
    title: 'Generative AI (GPT, DALL·E, etc.)',
    description:
      'Integrate models like ChatGPT, DALL·E, or Claude to generate content, code, images, or personalized experiences on demand.',
  },
  {
    title: 'Custom AI Model Integration',
    description:
      'Fine-tune or integrate custom models using OpenAI, Google Vertex AI, Azure OpenAI, Hugging Face, or local LLMs—tailored to your data and goals.',
  },
  {
    title: 'Voice & Vision AI',
    description:
      'Implement voice assistants, speech-to-text, OCR, and computer vision models into your app, tools, or workflows.',
  },
  {
    title: 'Recommendation Engines',
    description:
      'Add AI-driven recommendations (products, content, actions) to enhance UX and increase conversions.',
  },
  {
    title: 'Data Strategy & MLOps',
    description:
      'Build a robust data foundation and implement MLOps practices for seamless, scalable, and reproducible AI model deployment and management.',
  },
];

const process = [
  {
    title: 'Discovery & Assessment',
    description:
      'Understand your business objectives, workflows, and data ecosystem to identify areas where AI can create real value.',
  },
  {
    title: 'Strategy & Roadmap',
    description:
      'Define the AI use cases, technical architecture, model requirements, and a step-by-step action plan tailored to your goals.',
  },
  {
    title: 'Solution Design',
    description:
      'Select the right AI tools, models (pre-trained or custom), frameworks, and integrations (e.g., APIs, cloud services) to ensure compatibility and scalability.',
  },
  {
    title: 'Implementation Support',
    description:
      'Work alongside your in-house teams or third-party developers to integrate AI models, set up pipelines, and deploy intelligent features within your systems.',
  },
  {
    title: 'Ongoing Evaluation',
    description:
      'Monitor AI performance, collect user feedback, improve accuracy, and scale intelligently with retraining and optimization as your needs evolve.',
  },
];

const whychooseus = [
  {
    title: 'Use-Case First',
    description: 'We start with business value, not hype',
  },
  {
    title: 'Model-Agnostic',
    description: 'Choose the best model for your task (open-source or proprietary)',
  },
  {
    title: 'Secure & Compliant',
    description: 'AI built with privacy and ethical safeguards',
  },
  {
    title: 'Seamless Integration',
    description: 'APIs, SDKs, or custom model embedding into your stack',
  },
  {
    title: 'Scalable Solutions',
    description: 'Build once, optimize, and scale effortlessly',
  },
];

const engagementOptions = [
  {
    title: 'AI Use Case Discovery & Roadmap',
    description: 'Identify and prioritize where AI can drive value in your business',
  },
  {
    title: 'Rapid Prototyping',
    description: 'Build MVPs or PoCs to quickly validate AI ideas',
  },
  {
    title: 'End-to-End Integration',
    description: 'We design, build, deploy, and maintain the AI components',
  },
  {
    title: 'Model Fine-Tuning',
    description: 'Adapt LLMs or ML models using your custom datasets',
  },
  {
    title: 'Consulting & Training',
    description: 'Help your team understand, govern, and leverage AI responsibly',
  },
];

export default function AiIntegrationContent() {
  return (
    <section>
    
    <Banner 
        heading="AI Integration Services"
        subtext="Enhance your products, workflows, and decisions with smart automation"
        buttonText="Book Free Consultation"
        note="AI isn’t the future—it’s already transforming businesses today. Our AI integration services help you seamlessly embed artificial intelligence into your products, operations, and customer experiences. From intelligent automation to predictive analytics and generative AI—we bring ideas to life using cutting-edge models and platforms."
    />
    <InfoStats
        stats={[
          { number: "80%", label: "Enterprises investing in AI-driven automation" },
          { number: "3x", label: "Faster decision-making with AI insights" },
          { number: "60%", label: "Tasks automated in customer support using AI" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "AI Integration Services"
    Services={services}/>
    <TechToolsSection/>
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom AI Integration services turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {aiIntegrationImg}
          imageAlt = "AI Integration Services"
      />
    <DevelopmentProcess 
      title="Our AI Integration Process"
      Process={process}
      />
    <EngagementOptions
      title="How We Can Collaborate"
      options={engagementOptions}
    />
   </section>
  );
}