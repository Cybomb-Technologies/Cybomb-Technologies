import CustomAIDevelopmentContent from "./customAi-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function CustomAiServices() {
  const metaPropsData = {
    title: "Custom AI Development Services - Cybomb Technologies | Tailored AI Solutions",
    description:
      "Cybomb Technologies specializes in custom AI development, creating intelligent, tailored solutions to automate processes, enhance decision-making, and drive business innovation.",
    keyword:
      "Custom AI Development, AI Solutions, Machine Learning, AI Automation, AI Applications, Cybomb Technologies",
    url: "https://www.cybomb.com/services/custom-ai-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We help you plan and define a tailored AI development strategy aligned with your business goals.',
    cards: [
      {
        title: 'Business Requirement Analysis',
        description:
          'We identify the specific challenges and opportunities where custom AI solutions can deliver the most value.'
      },
      {
        title: 'AI Roadmap Strategy',
        description:
          'We create a step-by-step plan for AI adoption, covering goals, technologies, and timelines.'
      },
      {
        title: 'Technology & Model Selection',
        description:
          'We recommend the best AI frameworks, models, and platforms to suit your unique needs.'
      },
      {
        title: 'Resource Allocation',
        description:
          'We assign AI engineers, data scientists, and strategists to build efficient custom solutions.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design user-friendly AI interfaces and workflows that make intelligent systems easy to interact with.',
    cards: [
      {
        title: 'AI-Driven Prototypes',
        description:
          'We build prototypes to showcase how custom AI features will integrate into your product.'
      },
      {
        title: 'Adaptive Interfaces',
        description:
          'We create designs that evolve with AI insights, personalizing the user experience.'
      },
      {
        title: 'Data Visualization',
        description:
          'We design dashboards that clearly present AI-driven insights, predictions, and analytics.'
      },
      {
        title: 'User Experience Enhancements',
        description:
          'We ensure AI-powered applications are intuitive, accessible, and customer-centric.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We develop custom AI models and applications that solve business-specific problems.',
    cards: [
      {
        title: 'Machine Learning Models',
        description:
          'We build supervised, unsupervised, and reinforcement learning models tailored to your needs.'
      },
      {
        title: 'Natural Language Processing',
        description:
          'We develop NLP solutions for chatbots, text analysis, sentiment detection, and language understanding.'
      },
      {
        title: 'Computer Vision Solutions',
        description:
          'We create AI systems for image recognition, object detection, and visual data processing.'
      },
      {
        title: 'Custom AI Applications',
        description:
          'We design and implement AI-powered tools unique to your workflows and business objectives.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We rigorously test AI models and applications to ensure accuracy, reliability, and fairness.',
    cards: [
      {
        title: 'Model Validation',
        description:
          'We evaluate AI models for precision, recall, and overall predictive performance.'
      },
      {
        title: 'Bias & Fairness Testing',
        description:
          'We ensure AI outputs are fair, unbiased, and aligned with ethical standards.'
      },
      {
        title: 'Performance & Scalability',
        description:
          'We test AI systems under different loads to confirm speed and reliability at scale.'
      },
      {
        title: 'User Acceptance Testing',
        description:
          'We validate that custom AI solutions meet your business and end-user expectations.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We ensure smooth deployment of AI systems with secure, scalable, and production-ready setups.',
    cards: [
      {
        title: 'Cloud & On-Prem Deployment',
        description:
          'We deploy AI solutions on cloud platforms or local infrastructure as per your requirements.'
      },
      {
        title: 'Integration with Existing Systems',
        description:
          'We integrate AI applications seamlessly with your CRMs, ERPs, and enterprise tools.'
      },
      {
        title: 'Security & Compliance',
        description:
          'We implement strong security and compliance frameworks to protect sensitive data.'
      },
      {
        title: 'Monitoring & Optimization',
        description:
          'We continuously monitor deployed AI models to ensure reliability and performance.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide ongoing monitoring, updates, and optimizations to keep your AI solutions effective.',
    cards: [
      {
        title: 'Model Retraining',
        description:
          'We retrain AI models with fresh data to ensure accuracy and adaptability over time.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new AI capabilities and refine features based on evolving business needs.'
      },
      {
        title: 'Security Updates',
        description:
          'We protect AI systems with regular patches, compliance checks, and monitoring.'
      },
      {
        title: 'Scalability & Future Growth',
        description:
          'We prepare your AI solutions to scale with your growing data and business demands.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <CustomAIDevelopmentContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure />
    </>
  );
}

export default CustomAiServices;
