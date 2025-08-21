import LLMSolutionsContent from "./large-language-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function LargeLanguageServices() {
  const metaPropsData = {
    title: "Large Language Model (LLM) Solutions - Cybomb Technologies | AI-Powered NLP",
    description:
      "Cybomb Technologies delivers advanced Large Language Model (LLM) solutions, enabling intelligent natural language processing, content generation, and conversational AI for diverse industries.",
    keyword:
      "Large Language Models, LLM Solutions, Natural Language Processing, NLP, AI Chatbots, AI Content Generation, Cybomb Technologies",
    url: "https://www.cybomb.com/services/large-language-model",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We help businesses plan and adopt Large Language Model (LLM) solutions with the right strategy, data, and roadmap.',
    cards: [
      {
        title: 'Use Case Identification',
        description:
          'We assess your business needs to define where LLMs can add the most value, from chatbots to content generation.'
      },
      {
        title: 'Data Strategy & Preparation',
        description:
          'We plan how to collect, preprocess, and structure data for effective LLM training and fine-tuning.'
      },
      {
        title: 'Model Selection',
        description:
          'We evaluate and recommend the best LLMs—open-source or proprietary—based on your project requirements.'
      },
      {
        title: 'AI Adoption Roadmap',
        description:
          'We create a phased roadmap for implementing LLM solutions aligned with your business goals.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design intuitive interfaces for LLM-powered applications that enable seamless human-AI interaction.',
    cards: [
      {
        title: 'Conversational UI',
        description:
          'We design chat interfaces, voice assistants, and Q&A systems powered by LLMs.'
      },
      {
        title: 'Adaptive Workflows',
        description:
          'We build user experiences that dynamically adapt to context and user intent through LLM integration.'
      },
      {
        title: 'Personalized Interfaces',
        description:
          'We design LLM-powered applications that personalize responses and content for each user.'
      },
      {
        title: 'Interactive Prototypes',
        description:
          'We create prototypes that showcase how LLMs can enhance real-world business workflows.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build and integrate LLM solutions that enhance automation, personalization, and intelligence.',
    cards: [
      {
        title: 'Fine-Tuned LLMs',
        description:
          'We fine-tune large language models on domain-specific datasets for higher accuracy.'
      },
      {
        title: 'Custom API Development',
        description:
          'We build APIs that integrate LLM capabilities into your existing products and platforms.'
      },
      {
        title: 'Enterprise AI Assistants',
        description:
          'We create AI assistants for customer support, employee productivity, and knowledge management.'
      },
      {
        title: 'Content Automation',
        description:
          'We leverage LLMs to generate reports, summaries, and creative content tailored to your business.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We test LLM-powered solutions for accuracy, reliability, security, and user satisfaction.',
    cards: [
      {
        title: 'Output Accuracy Testing',
        description:
          'We validate that LLM responses are contextually correct and aligned with user intent.'
      },
      {
        title: 'Bias & Safety Testing',
        description:
          'We ensure LLMs are tested for fairness, bias reduction, and safe outputs.'
      },
      {
        title: 'Performance & Latency Testing',
        description:
          'We evaluate response speed and system scalability under different workloads.'
      },
      {
        title: 'User Feedback Evaluation',
        description:
          'We collect and analyze user feedback to refine and optimize LLM-powered experiences.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy LLM-based applications with secure, scalable, and production-ready architectures.',
    cards: [
      {
        title: 'Cloud & On-Prem Setup',
        description:
          'We deploy LLMs on cloud, hybrid, or on-prem environments depending on business needs.'
      },
      {
        title: 'API & Platform Integration',
        description:
          'We connect LLMs with CRMs, ERPs, and enterprise platforms for seamless usage.'
      },
      {
        title: 'Security & Compliance',
        description:
          'We ensure LLM deployments comply with data privacy, governance, and regulatory requirements.'
      },
      {
        title: 'Monitoring & Optimization',
        description:
          'We track LLM performance post-deployment and continuously optimize outputs.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous updates, fine-tuning, and monitoring to keep LLM solutions effective and future-ready.',
    cards: [
      {
        title: 'Model Updates & Retraining',
        description:
          'We retrain and update LLMs to adapt to new data, domains, and business requirements.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We extend LLM capabilities with new features such as multi-lingual support or advanced reasoning.'
      },
      {
        title: 'Security & Threat Monitoring',
        description:
          'We safeguard LLM applications with security patches and continuous compliance checks.'
      },
      {
        title: 'Scalability Planning',
        description:
          'We optimize LLM infrastructure to handle increasing workloads and future growth.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <LLMSolutionsContent />
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

export default LargeLanguageServices;
