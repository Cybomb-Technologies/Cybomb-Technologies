import AiIntegrationContent from "./ai-integration-content";
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";


export default function AiIntegration() {
  const metaPropsData = {
  title: "AI integration development service in chennai - Cybomb MNC",
  description:
    "Cybomb Tech is a top-rated AI development company in Chennai creating custom AI solutions and GenAI models to improve efficiency and automate complex tasks.",
  keyword:
    "AI Integration Services in Chennai, Artificial Intelligence Solutions, AI Automation, AI Consulting, AI Application Development, AI in Cloud, AI Workflow Automation, Machine Learning Integration, AI Services India",
  url: "https://www.cybomb.com/services/ai-integration",
  image: "https://www.cybomb.com", 
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We start with a strategic consultation to identify where AI can add the most value to your business operations.',
    cards: [
      {
        title: 'Business Needs Assessment',
        description:
          'We analyze your workflows to identify areas where AI integration can drive efficiency and growth.'
      },
      {
        title: 'AI Readiness Evaluation',
        description:
          'We assess your existing systems and data to determine integration feasibility.'
      },
      {
        title: 'Use Case Definition',
        description:
          'We define clear AI use cases aligned with your business objectives and industry requirements.'
      },
      {
        title: 'Technology Roadmap',
        description:
          'We outline a roadmap for seamless AI integration into your current technology ecosystem.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design AI-powered interactions that enhance user experiences while keeping them intuitive and accessible.',
    cards: [
      {
        title: 'Smart UI Elements',
        description:
          'We design intelligent interfaces that adapt dynamically using AI-driven insights.'
      },
      {
        title: 'Personalized Experiences',
        description:
          'We create personalized user journeys powered by AI recommendations and predictions.'
      },
      {
        title: 'AI Workflow Mapping',
        description:
          'We visualize how AI will interact with users and systems without disrupting existing processes.'
      },
      {
        title: 'Human-AI Interaction Design',
        description:
          'We ensure users can easily collaborate with AI systems while maintaining control and trust.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build and integrate AI models into your applications, ensuring seamless interaction with your existing systems.',
    cards: [
      {
        title: 'AI Model Integration',
        description:
          'We embed machine learning and deep learning models into your software solutions.'
      },
      {
        title: 'API & SDK Integration',
        description:
          'We connect third-party AI services like OpenAI, AWS, and Google AI with your systems.'
      },
      {
        title: 'Custom AI Solutions',
        description:
          'We develop tailored AI components for chatbots, analytics, automation, and predictions.'
      },
      {
        title: 'Real-Time AI Processing',
        description:
          'We enable real-time decision-making with AI algorithms integrated into workflows.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We rigorously test AI integrations to ensure accuracy, security, and reliability in real-world scenarios.',
    cards: [
      {
        title: 'Model Accuracy Testing',
        description:
          'We validate AI predictions and recommendations for precision and reliability.'
      },
      {
        title: 'Performance Testing',
        description:
          'We test response times and scalability of AI models under heavy loads.'
      },
      {
        title: 'Bias & Compliance Testing',
        description:
          'We check for data bias, fairness, and compliance with industry standards.'
      },
      {
        title: 'System Integration Testing',
        description:
          'We ensure AI modules interact correctly with other systems without errors.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy AI-powered features into your environment with minimal disruption and maximum scalability.',
    cards: [
      {
        title: 'Cloud & On-Prem Deployment',
        description:
          'We integrate AI models across cloud, hybrid, or on-premises systems.'
      },
      {
        title: 'Data Migration',
        description:
          'We securely migrate and prepare datasets required for AI training and execution.'
      },
      {
        title: 'Automated Pipelines',
        description:
          'We implement CI/CD pipelines for continuous AI model updates and retraining.'
      },
      {
        title: 'Monitoring Setup',
        description:
          'We deploy monitoring tools to track AI performance and reliability in real-time.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous support, model retraining, and updates to keep your AI integrations optimized.',
    cards: [
      {
        title: 'Model Retraining',
        description:
          'We retrain AI models with new data to maintain accuracy and relevance.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We fine-tune AI integrations to ensure they deliver consistent results.'
      },
      {
        title: 'Error Handling & Fixes',
        description:
          'We resolve issues quickly to keep AI-driven systems running smoothly.'
      },
      {
        title: 'Security & Compliance',
        description:
          'We maintain strict data security, privacy, and compliance in all AI operations.'
      }
    ]
  }
];

  return (
    <>
      <AiIntegrationContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure/>
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
