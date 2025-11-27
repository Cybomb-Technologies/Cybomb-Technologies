import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import AIMLContent from './ai-ml-services-content';

function AIMLServices() {
  const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We start by analyzing your business needs and identifying areas where AI/ML can create the most impact.',
    cards: [
      {
        title: 'Business Case Analysis',
        description:
          'We assess your processes and define clear AI/ML use cases aligned with your goals.'
      },
      {
        title: 'Data Strategy Planning',
        description:
          'We evaluate available data sources and outline the data collection and preparation strategy.'
      },
      {
        title: 'AI Roadmap Design',
        description:
          'We create a step-by-step plan for implementing AI/ML solutions effectively.'
      },
      {
        title: 'Technology Consultation',
        description:
          'We help you select the right tools, frameworks, and cloud platforms for your AI journey.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We ensure AI/ML solutions are seamlessly integrated into user-friendly interfaces and workflows.',
    cards: [
      {
        title: 'AI-Powered UX',
        description:
          'We design interfaces that utilize AI for personalization and predictive interactions.'
      },
      {
        title: 'Visualization Dashboards',
        description:
          'We create dashboards to display AI insights, predictions, and analytics clearly.'
      },
      {
        title: 'Workflow Integration',
        description:
          'We embed AI recommendations smoothly into existing business processes.'
      },
      {
        title: 'Interactive Prototypes',
        description:
          'We build prototypes showcasing how AI features improve user experience.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build scalable AI/ML models tailored to your business requirements and integrate them with applications.',
    cards: [
      {
        title: 'Machine Learning Models',
        description:
          'We develop supervised, unsupervised, and reinforcement learning models.'
      },
      {
        title: 'Natural Language Processing',
        description:
          'We build chatbots, sentiment analysis, and text-processing AI systems.'
      },
      {
        title: 'Computer Vision',
        description:
          'We implement image recognition, object detection, and video analytics solutions.'
      },
      {
        title: 'AI Integration',
        description:
          'We integrate AI models into your existing software, apps, and platforms.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We rigorously test AI/ML models to ensure accuracy, performance, and reliability.',
    cards: [
      {
        title: 'Model Validation',
        description:
          'We test predictions against real-world data for accuracy and consistency.'
      },
      {
        title: 'Bias & Fairness Testing',
        description:
          'We check models for bias to ensure ethical AI deployment.'
      },
      {
        title: 'Performance Benchmarking',
        description:
          'We evaluate models for speed, scalability, and efficiency.'
      },
      {
        title: 'Security Testing',
        description:
          'We ensure AI/ML systems are safeguarded against adversarial attacks.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy AI/ML solutions into production environments for real-time business use.',
    cards: [
      {
        title: 'Model Deployment',
        description:
          'We operationalize ML models on cloud, on-premises, or edge devices.'
      },
      {
        title: 'API Integration',
        description:
          'We expose AI functionalities through secure APIs for seamless use.'
      },
      {
        title: 'Automation',
        description:
          'We deploy AI models to automate workflows and decision-making.'
      },
      {
        title: 'Cloud/Edge Deployment',
        description:
          'We ensure models run efficiently on AWS, Azure, GCP, or edge devices.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide ongoing support to retrain, monitor, and improve AI/ML models over time.',
    cards: [
      {
        title: 'Model Monitoring',
        description:
          'We track model performance to ensure consistent accuracy and reliability.'
      },
      {
        title: 'Retraining & Updates',
        description:
          'We update AI models with new data for better predictions over time.'
      },
      {
        title: 'Scalability Enhancements',
        description:
          'We optimize models to handle increased data and user loads.'
      },
      {
        title: 'Continuous Support',
        description:
          'We provide technical support and improvements for your AI systems.'
      }
    ]
  }
];

  return (
    <>
      <AIMLContent/>
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure/>
    </>
  );
}

export default AIMLServices
