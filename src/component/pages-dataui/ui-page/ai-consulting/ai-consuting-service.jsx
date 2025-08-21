import AIConsultingStrategyContent from "./ai-consulting-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function AiConsultingServices() {
  const metaPropsData = {
    title: "AI Consulting & Strategy Services - Cybomb Technologies | Accelerate AI Adoption",
    description:
      "Cybomb Technologies provides expert AI consulting and strategy services, helping businesses integrate artificial intelligence into their operations for innovation and growth.",
    keyword:
      "AI Consulting, AI Strategy, Artificial Intelligence Services, AI Integration, Business Transformation, Cybomb Technologies",
    url: "https://www.cybomb.com/services/ai-consulting-strategy",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We help you plan and define an AI consulting strategy aligned with your business objectives and growth vision.',
    cards: [
      {
        title: 'Business Need Analysis',
        description:
          'We evaluate your workflows, challenges, and opportunities to identify where AI can create the most impact.'
      },
      {
        title: 'AI Roadmap Design',
        description:
          'We create a clear strategy that outlines AI adoption phases, goals, and implementation timelines.'
      },
      {
        title: 'Technology Selection',
        description:
          'We guide you in choosing the right AI platforms, tools, and frameworks suited for your needs.'
      },
      {
        title: 'Resource Planning',
        description:
          'We allocate AI experts, data scientists, and strategists to ensure efficient execution of your AI strategy.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design AI-driven solutions and interfaces that enhance user engagement, decision-making, and productivity.',
    cards: [
      {
        title: 'AI-Driven Prototypes',
        description:
          'We design proof-of-concepts and prototypes to showcase how AI can integrate into your workflows.'
      },
      {
        title: 'Personalized Experiences',
        description:
          'We create adaptive designs that tailor user experiences based on AI-driven insights.'
      },
      {
        title: 'Intelligent Dashboards',
        description:
          'We design interactive dashboards that visualize data insights for smarter business decisions.'
      },
      {
        title: 'User-Centric Enhancements',
        description:
          'We focus on usability and accessibility to ensure AI solutions are practical and user-friendly.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build scalable AI solutions that integrate seamlessly into your business ecosystem.',
    cards: [
      {
        title: 'AI Model Development',
        description:
          'We design and train machine learning models tailored to your unique business challenges.'
      },
      {
        title: 'Process Automation',
        description:
          'We implement AI-powered automation to streamline repetitive workflows and improve efficiency.'
      },
      {
        title: 'Custom AI Solutions',
        description:
          'We develop tailored applications that apply AI for analytics, forecasting, and optimization.'
      },
      {
        title: 'System Integration',
        description:
          'We integrate AI systems with your existing tools, CRMs, and platforms for seamless adoption.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure the accuracy, reliability, and performance of AI solutions before implementation.',
    cards: [
      {
        title: 'Model Validation',
        description:
          'We test AI models for accuracy, scalability, and alignment with business objectives.'
      },
      {
        title: 'Usability Testing',
        description:
          'We evaluate AI-enabled systems to ensure they are intuitive and business-friendly.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We stress-test AI systems to ensure they deliver consistent insights and predictions.'
      },
      {
        title: 'Compliance Testing',
        description:
          'We validate AI solutions against data privacy, ethical, and regulatory standards.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We help businesses implement and launch AI solutions with minimal disruption and maximum efficiency.',
    cards: [
      {
        title: 'AI Integration Setup',
        description:
          'We configure AI systems to align with existing infrastructures and workflows.'
      },
      {
        title: 'Security & Compliance',
        description:
          'We ensure AI solutions are deployed with strong data security and compliance measures.'
      },
      {
        title: 'Change Management',
        description:
          'We guide your teams through AI adoption with training and strategy alignment.'
      },
      {
        title: 'Monitoring & Support',
        description:
          'We monitor AI systems post-deployment and provide continuous optimization.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous monitoring, support, and updates to keep AI strategies effective and future-ready.',
    cards: [
      {
        title: 'AI Model Updates',
        description:
          'We retrain and update AI models to adapt to evolving data and business needs.'
      },
      {
        title: 'Ongoing Enhancements',
        description:
          'We improve AI features and add new functionalities for long-term success.'
      },
      {
        title: 'Security Monitoring',
        description:
          'We protect AI systems against threats with continuous monitoring and compliance updates.'
      },
      {
        title: 'Scalability Planning',
        description:
          'We ensure your AI strategy grows with your business through scalable solutions and upgrades.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AIConsultingStrategyContent />
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

export default AiConsultingServices;
