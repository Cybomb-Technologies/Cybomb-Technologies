import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import SalesforceContent from './salesforce-content';

function Salesforce() {
  const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We start with a Salesforce strategy tailored to your business goals, ensuring CRM, sales, service, and marketing alignment.',
    cards: [
      {
        title: 'Business Process Assessment',
        description:
          'We analyze your sales, service, and marketing processes to identify opportunities for Salesforce implementation.'
      },
      {
        title: 'CRM Strategy & Roadmap',
        description:
          'We create a Salesforce adoption roadmap to streamline workflows and improve customer engagement.'
      },
      {
        title: 'License & Module Consultation',
        description:
          'We guide you in selecting the right Salesforce clouds — Sales, Service, Marketing, Commerce, or Experience Cloud.'
      },
      {
        title: 'ROI & Growth Planning',
        description:
          'We align Salesforce investments with measurable KPIs to maximize ROI and accelerate business growth.'
      }
    ]
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'We configure Salesforce to fit your organizational structure, ensuring a seamless CRM foundation.',
    cards: [
      {
        title: 'CRM Setup & Customization',
        description:
          'We configure objects, fields, layouts, workflows, and automation tailored to your business needs.'
      },
      {
        title: 'User Role & Security Design',
        description:
          'We design profiles, permissions, and roles to maintain data security and accessibility.'
      },
      {
        title: 'Dashboard & Reports Setup',
        description:
          'We build custom dashboards to track KPIs, sales performance, and customer insights.'
      },
      {
        title: 'Integration Design',
        description:
          'We plan integrations with ERP, marketing tools, eCommerce platforms, and third-party apps.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build custom Salesforce solutions, from Apex development to Lightning components and integrations.',
    cards: [
      {
        title: 'Apex & Visualforce Development',
        description:
          'We create custom business logic and advanced workflows using Apex and Visualforce.'
      },
      {
        title: 'Lightning Component Development',
        description:
          'We build modern Lightning Web Components (LWC) for improved UI/UX.'
      },
      {
        title: 'API & App Integration',
        description:
          'We integrate Salesforce with external apps, APIs, and enterprise systems for unified workflows.'
      },
      {
        title: 'Custom Module Development',
        description:
          'We create tailored modules to extend Salesforce functionality based on your business requirements.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We thoroughly test Salesforce configurations, automations, and integrations for accuracy and performance.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We validate workflows, automation rules, and user journeys for seamless operation.'
      },
      {
        title: 'Integration Testing',
        description:
          'We ensure Salesforce integrates smoothly with ERP, marketing, and third-party systems.'
      },
      {
        title: 'Data Accuracy Validation',
        description:
          'We check data synchronization across Salesforce objects and connected platforms.'
      },
      {
        title: 'Performance Testing',
        description:
          'We test system speed, workflow execution, and automation reliability under real-world conditions.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We implement Salesforce across your teams, ensuring smooth adoption and business alignment.',
    cards: [
      {
        title: 'CRM Deployment',
        description:
          'We roll out Salesforce CRM with customized sales, service, and support pipelines.'
      },
      {
        title: 'Marketing Cloud Deployment',
        description:
          'We implement marketing automation, customer journeys, and campaign workflows.'
      },
      {
        title: 'Service Cloud Implementation',
        description:
          'We deploy case management, self-service portals, and AI-powered customer service solutions.'
      },
      {
        title: 'User Training & Enablement',
        description:
          'We provide training sessions for sales, service, and marketing teams to maximize adoption.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous Salesforce support, optimization, and enhancements for long-term success.',
    cards: [
      {
        title: 'Ongoing CRM Support',
        description:
          'We handle admin tasks, pipeline updates, and user onboarding for Salesforce users.'
      },
      {
        title: 'Process Optimization',
        description:
          'We refine automation, workflows, and campaigns to enhance business outcomes.'
      },
      {
        title: 'Analytics & Reporting',
        description:
          'We deliver advanced analytics to measure sales, marketing, and service performance.'
      },
      {
        title: '24/7 Technical Assistance',
        description:
          'We provide dedicated Salesforce support to ensure uninterrupted business operations.'
      }
    ]
  }
];

  return (
    <>
      <SalesforceContent/>
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

export default Salesforce
