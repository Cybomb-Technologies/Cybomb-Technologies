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
    title: 'AI Chatbots & Virtual Assistants',
    description:
      'We create smart chatbots that understand natural language and provide 24/7 support on websites, apps, and messaging platforms.',
  },
  {
    title: 'AI Workflow Automation',
    description:
      'We use AI to automate tasks like document processing, customer onboarding, and support ticket handling to save time and costs.',
  },
  {
    title: 'AI Predictive Analytics',
    description:
      'We analyze real-time and past data with AI to predict trends, customer behavior, and business outcomes for better decisions.',
  },
  {
    title: 'Generative AI Solutions',
    description:
      'We integrate tools like ChatGPT and DALL·E to create content, code, images, and personalized experiences instantly.',
  },
  {
    title: 'Custom AI Model Integration',
    description:
      'We fine-tune and connect AI models from OpenAI, Google, Azure, or Hugging Face to match your data and business needs.',
  },
  {
    title: 'Voice & Image AI',
    description:
      'We build AI solutions for voice recognition, speech-to-text, image scanning (OCR), and computer vision applications.',
  },
  {
    title: 'AI Recommendation Systems',
    description:
      'We add AI-powered recommendations for products, content, or services to improve user experience and boost conversions.',
  },
  {
    title: 'AI Data Strategy & MLOps',
    description:
      'We set up strong data pipelines and MLOps practices to deploy, monitor, and scale AI models smoothly and securely.',
  },
];


const process = [
  {
    title: 'AI Discovery & Planning',
    description:
      'We study your business needs and find the best ways AI can improve your workflows and results.',
  },
  {
    title: 'AI Roadmap & Strategy',
    description:
      'We define the right AI use cases, tools, and step-by-step plan to reach your goals.',
  },
  {
    title: 'AI Solution Design',
    description:
      'We choose the best AI models, APIs, and cloud services to build scalable and reliable solutions.',
  },
  {
    title: 'AI Integration & Deployment',
    description:
      'We integrate AI into your apps, systems, or workflows and ensure everything works smoothly.',
  },
  {
    title: 'Monitoring & Improvement',
    description:
      'We track performance, collect feedback, and keep optimizing AI models for better results.',
  },
];


const whychooseus = [
  {
    title: 'Business-Focused AI',
    description: 'We design AI solutions that solve real business problems and add value.',
  },
  {
    title: 'Flexible AI Models',
    description: 'We use the right AI models, whether open-source or enterprise-grade, based on your needs.',
  },
  {
    title: 'Security & Compliance',
    description: 'Our AI integrations follow strict data security and compliance standards.',
  },
  {
    title: 'Easy System Integration',
    description: 'We connect AI with your apps, APIs, and workflows without disrupting operations.',
  },
  {
    title: 'Future-Ready Scaling',
    description: 'Our AI solutions are built to grow with your business and handle more users easily.',
  },
];


const engagementOptions = [
  {
    title: 'AI Strategy & Planning',
    description: 'We analyze your business needs and create a clear roadmap for AI integration.',
  },
  {
    title: 'AI Prototyping & MVPs',
    description: 'Quickly test AI ideas with proof-of-concepts and minimum viable products.',
  },
  {
    title: 'Full AI Integration',
    description: 'We build and integrate AI into your existing apps, workflows, and systems.',
  },
  {
    title: 'Model Training & Optimization',
    description: 'We customize and fine-tune AI models with your business data for better accuracy.',
  },
  {
    title: 'AI Consulting & Support',
    description: 'We guide your team on AI adoption, best practices, and ongoing support.',
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