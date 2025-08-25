import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import HubspotContent from './hubspot-content';

function HubSpot() {
  const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We begin with a clear HubSpot strategy to align CRM, marketing, sales, and service tools with your business objectives.',
    cards: [
      {
        title: 'Business Needs Assessment',
        description:
          'We evaluate your sales, marketing, and customer service workflows to determine how HubSpot can be best implemented.'
      },
      {
        title: 'HubSpot Onboarding Strategy',
        description:
          'We design a personalized onboarding plan to get your teams quickly up and running on HubSpot.'
      },
      {
        title: 'Technology Consultation',
        description:
          'We recommend the right HubSpot Hubs (CRM, Marketing, Sales, Service, CMS) based on your business goals.'
      },
      {
        title: 'ROI & Growth Planning',
        description:
          'We estimate ROI and outline a growth roadmap using HubSpot tools to boost lead generation and customer retention.'
      }
    ]
  },
  {
    id: 'design',
    title: 'HubSpot Setup & Design',
    description:
      'We design and configure HubSpot to ensure seamless workflows, automated processes, and user-friendly experiences.',
    cards: [
      {
        title: 'CRM Setup',
        description:
          'We configure HubSpot CRM, deal pipelines, contact properties, and sales stages.'
      },
      {
        title: 'Marketing Automation Design',
        description:
          'We design automated workflows, lead nurturing campaigns, and email sequences for effective engagement.'
      },
      {
        title: 'Dashboard & Reporting',
        description:
          'We create custom dashboards to track KPIs, sales performance, and marketing ROI.'
      },
      {
        title: 'Integration Setup',
        description:
          'We integrate HubSpot with tools like Salesforce, Shopify, WordPress, and custom APIs.'
      }
    ]
  },
  {
    id: 'development',
    title: 'HubSpot Development',
    description:
      'We build custom HubSpot solutions, from CMS development to advanced integrations, tailored to your business.',
    cards: [
      {
        title: 'HubSpot CMS Development',
        description:
          'We build custom websites, landing pages, and templates within HubSpot CMS.'
      },
      {
        title: 'Custom Module Development',
        description:
          'We develop custom HubSpot modules for unique functionality and user experiences.'
      },
      {
        title: 'API & App Development',
        description:
          'We create custom integrations and apps to extend HubSpot capabilities.'
      },
      {
        title: 'Workflow Automation',
        description:
          'We build automated sales and marketing workflows to reduce manual effort and improve efficiency.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing & Quality Assurance',
    description:
      'We ensure your HubSpot setup and workflows function seamlessly across teams and systems.',
    cards: [
      {
        title: 'Workflow Testing',
        description:
          'We validate marketing automation, lead nurturing, and sales workflows for accuracy.'
      },
      {
        title: 'Integration Testing',
        description:
          'We test HubSpot integrations with CRMs, eCommerce, and third-party apps.'
      },
      {
        title: 'Data Accuracy Validation',
        description:
          'We ensure contact, deal, and pipeline data sync correctly across systems.'
      },
      {
        title: 'Performance Testing',
        description:
          'We check system responsiveness, automation speed, and campaign delivery accuracy.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment & Implementation',
    description:
      'We implement HubSpot across your teams, ensuring a smooth transition and adoption.',
    cards: [
      {
        title: 'CRM Rollout',
        description:
          'We deploy HubSpot CRM to sales teams with proper pipeline and deal configurations.'
      },
      {
        title: 'Marketing Hub Launch',
        description:
          'We implement email campaigns, lead scoring, and automation workflows.'
      },
      {
        title: 'Service Hub Implementation',
        description:
          'We deploy ticketing systems, knowledge bases, and chatbots for customer support.'
      },
      {
        title: 'User Training',
        description:
          'We train your sales, marketing, and service teams to maximize HubSpot usage.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support & Optimization',
    description:
      'We provide continuous HubSpot support, optimization, and enhancements for long-term success.',
    cards: [
      {
        title: 'Ongoing CRM Support',
        description:
          'We assist with pipeline updates, new user onboarding, and system troubleshooting.'
      },
      {
        title: 'Campaign Optimization',
        description:
          'We refine email campaigns, landing pages, and workflows to maximize conversions.'
      },
      {
        title: 'Analytics & Reporting',
        description:
          'We provide detailed insights on marketing, sales, and customer service performance.'
      },
      {
        title: '24/7 Technical Support',
        description:
          'We offer dedicated support to ensure smooth HubSpot operations at all times.'
      }
    ]
  }
];

  return (
    <>
      <HubspotContent/>
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

export default HubSpot
