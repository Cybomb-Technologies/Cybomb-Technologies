import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import ZohoContent from './zoho-content';

function Zoho() {
  const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We help you strategize Zoho CRM implementation that aligns with your business goals, sales processes, and customer management needs.',
    cards: [
      {
        title: 'Business Needs Analysis',
        description:
          'We assess your sales, marketing, and support processes to design the right Zoho CRM strategy.'
      },
      {
        title: 'CRM Roadmap',
        description:
          'We create a tailored Zoho CRM adoption roadmap, including automation, integration, and customization.'
      },
      {
        title: 'Module Selection Guidance',
        description:
          'We advise on choosing the right Zoho modules like CRM Plus, Zoho One, SalesIQ, and Desk for your business.'
      },
      {
        title: 'ROI Planning',
        description:
          'We align Zoho CRM investments with measurable sales, service, and customer success KPIs.'
      }
    ]
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'We configure and customize Zoho CRM to streamline workflows, automate tasks, and improve customer engagement.',
    cards: [
      {
        title: 'Custom Module Design',
        description:
          'We design and configure custom modules, fields, and workflows to fit your processes.'
      },
      {
        title: 'Security & Roles Setup',
        description:
          'We define roles, profiles, and data-sharing rules for controlled access and security.'
      },
      {
        title: 'Workflow Automation',
        description:
          'We set up automation for lead assignment, email triggers, and sales pipeline tracking.'
      },
      {
        title: 'Dashboard & Reports',
        description:
          'We build detailed dashboards and reports for sales performance, leads, and customer insights.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We extend Zoho CRM with advanced customizations, third-party integrations, and automation.',
    cards: [
      {
        title: 'Deluge Scripting',
        description:
          'We build custom business logic using Zoho’s Deluge scripting language.'
      },
      {
        title: 'Custom App Development',
        description:
          'We create tailored apps with Zoho Creator that integrate seamlessly with Zoho CRM.'
      },
      {
        title: 'API & Third-Party Integration',
        description:
          'We integrate Zoho CRM with ERP, eCommerce, telephony, and other business tools.'
      },
      {
        title: 'Marketplace Extensions',
        description:
          'We develop and deploy Zoho CRM marketplace extensions for added functionality.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure Zoho CRM automations, workflows, and integrations run smoothly without disruptions.',
    cards: [
      {
        title: 'Workflow Testing',
        description:
          'We validate lead assignment rules, automation triggers, and approval processes.'
      },
      {
        title: 'Integration Testing',
        description:
          'We test Zoho CRM with connected apps like Zoho Desk, Campaigns, and third-party tools.'
      },
      {
        title: 'Data Accuracy Checks',
        description:
          'We validate CRM data migration and synchronization across systems.'
      },
      {
        title: 'Performance Testing',
        description:
          'We ensure Zoho CRM performs optimally under high data loads and workflows.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We implement Zoho CRM across your organization, ensuring a smooth transition and adoption.',
    cards: [
      {
        title: 'Zoho CRM Deployment',
        description:
          'We roll out Zoho CRM with customized pipelines, modules, and automations.'
      },
      {
        title: 'Omnichannel Setup',
        description:
          'We implement omnichannel communication including email, phone, chat, and social media inside Zoho CRM.'
      },
      {
        title: 'Integration with Zoho Suite',
        description:
          'We integrate CRM with Zoho Desk, Books, Campaigns, and other Zoho applications.'
      },
      {
        title: 'Team Training',
        description:
          'We provide onboarding and training for sales, marketing, and support teams to ensure adoption.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide ongoing Zoho CRM support, optimization, and improvements for long-term success.',
    cards: [
      {
        title: 'Ongoing CRM Support',
        description:
          'We handle admin tasks, user management, and pipeline updates for Zoho CRM users.'
      },
      {
        title: 'Process Optimization',
        description:
          'We refine workflows, campaigns, and reporting to improve efficiency.'
      },
      {
        title: 'Analytics & Forecasting',
        description:
          'We enhance sales forecasting and business intelligence with advanced analytics.'
      },
      {
        title: '24/7 Technical Support',
        description:
          'We provide continuous support to ensure Zoho CRM runs smoothly without downtime.'
      }
    ]
  }
];

  return (
    <>
      <ZohoContent/>
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

export default Zoho
