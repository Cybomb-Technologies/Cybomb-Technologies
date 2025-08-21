import AIPersonalizedCustomerExperienceContent from "./ai-persolized-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function AiPersolizedServices() {
  const metaPropsData = {
    title: "AI Personalized Customer Experience - Cybomb Technologies | Tailored AI Solutions",
    description:
      "Cybomb Technologies delivers AI-powered personalized customer experience solutions, enhancing engagement, satisfaction, and loyalty through data-driven insights.",
    keyword:
      "AI Customer Experience, Personalized AI Solutions, Customer Engagement, AI Personalization, Data-Driven Marketing, Cybomb Technologies",
    url: "https://www.cybomb.com/services/ai-persolized-customer-experience",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We help you plan and design AI strategies that deliver personalized customer experiences at scale.',
    cards: [
      {
        title: 'Customer Journey Mapping',
        description:
          'We analyze customer touchpoints to identify where AI can add personalization and value.'
      },
      {
        title: 'Data Strategy & Insights',
        description:
          'We define how customer data can be collected, processed, and leveraged for personalization.'
      },
      {
        title: 'AI Experience Roadmap',
        description:
          'We create a step-by-step plan for implementing AI-driven personalization strategies.'
      },
      {
        title: 'Resource Planning',
        description:
          'We align AI tools, platforms, and specialists to deliver tailored customer solutions efficiently.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design AI-driven interfaces and experiences that adapt to each customer’s preferences and behavior.',
    cards: [
      {
        title: 'Personalized Prototypes',
        description:
          'We design prototypes that showcase how AI can dynamically adapt content for users.'
      },
      {
        title: 'Adaptive Interfaces',
        description:
          'We create responsive designs that adjust layouts and recommendations in real time.'
      },
      {
        title: 'Behavior-Based Design',
        description:
          'We use AI insights to design experiences aligned with customer intent and patterns.'
      },
      {
        title: 'Customer-Centric Enhancements',
        description:
          'We focus on usability and personalization to ensure seamless engagement for every customer.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build AI-powered systems that deliver personalized content, offers, and experiences to each customer.',
    cards: [
      {
        title: 'Recommendation Engines',
        description:
          'We implement AI algorithms that suggest products, content, or services based on customer behavior.'
      },
      {
        title: 'Predictive Personalization',
        description:
          'We develop models that anticipate customer needs and deliver tailored interactions.'
      },
      {
        title: 'Omnichannel Personalization',
        description:
          'We ensure consistent, AI-powered experiences across web, mobile, and in-store touchpoints.'
      },
      {
        title: 'Custom AI Solutions',
        description:
          'We build tailored AI applications that enhance customer engagement and loyalty.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We test and validate AI personalization systems to ensure accuracy, reliability, and customer satisfaction.',
    cards: [
      {
        title: 'Personalization Accuracy',
        description:
          'We test recommendations and AI outputs for relevance and accuracy to customer needs.'
      },
      {
        title: 'User Feedback Testing',
        description:
          'We validate AI experiences with real users to ensure satisfaction and usability.'
      },
      {
        title: 'Performance Testing',
        description:
          'We ensure AI systems respond in real time across high-traffic environments.'
      },
      {
        title: 'Bias & Fairness Testing',
        description:
          'We evaluate AI models to ensure fair and unbiased personalization for all customers.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy AI personalization systems with smooth integration into your customer experience platforms.',
    cards: [
      {
        title: 'Integration with CX Tools',
        description:
          'We connect AI personalization with CRMs, chatbots, and customer engagement platforms.'
      },
      {
        title: 'Security & Privacy Setup',
        description:
          'We ensure customer data used in personalization is protected and compliant with regulations.'
      },
      {
        title: 'Go-Live Support',
        description:
          'We monitor AI personalization rollouts to ensure smooth and reliable customer interactions.'
      },
      {
        title: 'Feedback Loops',
        description:
          'We set up systems to continuously learn from customer feedback and refine experiences.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide ongoing optimization and monitoring of AI personalization systems for evolving customer needs.',
    cards: [
      {
        title: 'Model Retraining',
        description:
          'We retrain AI models regularly to adapt to changing customer behaviors and preferences.'
      },
      {
        title: 'Continuous Optimization',
        description:
          'We refine personalization algorithms to improve engagement and conversion rates.'
      },
      {
        title: 'Security Monitoring',
        description:
          'We safeguard customer data with ongoing compliance checks and AI security monitoring.'
      },
      {
        title: 'Scalability Enhancements',
        description:
          'We scale personalization systems to support larger audiences and advanced AI features.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AIPersonalizedCustomerExperienceContent />
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

export default AiPersolizedServices;
