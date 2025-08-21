import BigCommerceContent from './big-commerce-content';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';



function BigCommerce() {
  const metaPropsData = {
  title: "BigCommerce Services - Cybomb Technologies | E-Commerce Development & Optimization",
  description:
    "Cybomb Technologies provides BigCommerce development services to create scalable, secure, and conversion-focused online stores. We offer custom design, integration, migration, and optimization for e-commerce success.",
  keyword:
    "BigCommerce Services, BigCommerce Development, BigCommerce Store Setup, E-Commerce Website Development, BigCommerce Integration, BigCommerce Customization, BigCommerce Development India",
  url: "https://www.cybomb.com/Services/big-commerce",
  image: "https://www.cybomb.com", 
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We design a roadmap to maximize BigCommerce’s SaaS-based flexibility, ensuring a scalable, secure, and conversion-focused online store.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We define business goals, customer needs, and technical workflows to validate BigCommerce as the right solution.'
      },
      {
        title: 'E-commerce Roadmap',
        description:
          'We plan catalog structure, checkout flows, integrations, and scaling strategies tailored to BigCommerce.'
      },
      {
        title: 'Feature Prioritization',
        description:
          'We prioritize key store features such as multi-channel selling, B2B functionality, and payment gateways.'
      },
      {
        title: 'Tech Stack Planning',
        description:
          'We design integrations with CRM, ERP, POS, and marketing tools to ensure smooth operations.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We create modern, user-friendly BigCommerce storefronts that elevate customer experiences and maximize sales.',
    cards: [
      {
        title: 'Wireframing & Prototyping',
        description:
          'We design store flows and clickable prototypes for intuitive shopping journeys.'
      },
      {
        title: 'Custom Storefront Design',
        description:
          'We develop bespoke themes aligned with your brand and optimized for BigCommerce.'
      },
      {
        title: 'Responsive Layouts',
        description:
          'We ensure mobile-first, responsive designs for smooth shopping on all devices.'
      },
      {
        title: 'Conversion-focused UX',
        description:
          'We apply UX best practices to reduce cart abandonment and increase conversions.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We deliver scalable, high-performing BigCommerce stores with custom features and seamless integrations.',
    cards: [
      {
        title: 'Custom Store Development',
        description:
          'We build tailored BigCommerce stores that support unique business needs and growth plans.'
      },
      {
        title: 'App & Extension Integration',
        description:
          'We integrate BigCommerce apps for payments, shipping, analytics, and personalization.'
      },
      {
        title: 'Headless Commerce',
        description:
          'We set up headless BigCommerce solutions using APIs for faster, flexible storefronts.'
      },
      {
        title: 'Third-party Integrations',
        description:
          'We connect BigCommerce with ERP, CRM, and marketing automation tools for unified operations.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We thoroughly test BigCommerce stores to ensure smooth performance, security, and flawless user experience.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We test checkout, cart, product listings, and workflows for reliability.'
      },
      {
        title: 'Cross-device Testing',
        description:
          'We validate store responsiveness across mobile, tablet, and desktop.'
      },
      {
        title: 'Security & Compliance',
        description:
          'We ensure PCI compliance, SSL, and secure payment integrations to protect transactions.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We optimize page load speeds, caching, and hosting configurations for efficiency.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We ensure smooth BigCommerce store deployment with proper configuration, SEO setup, and go-live support.',
    cards: [
      {
        title: 'Hosting & Setup',
        description:
          'We configure BigCommerce hosting and environments for high performance.'
      },
      {
        title: 'CI/CD Pipelines',
        description:
          'We streamline releases with automated deployments for faster updates.'
      },
      {
        title: 'SEO & Launch Prep',
        description:
          'We optimize metadata, URLs, and schema to boost store visibility before launch.'
      },
      {
        title: 'Go-Live Deployment',
        description:
          'We launch stores seamlessly, minimizing downtime and ensuring readiness.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous maintenance, upgrades, and feature enhancements to keep your BigCommerce store competitive.',
    cards: [
      {
        title: 'Ongoing Maintenance',
        description:
          'We fix issues, monitor performance, and ensure smooth store operations.'
      },
      {
        title: 'BigCommerce Updates',
        description:
          'We keep your store updated with the latest BigCommerce features and integrations.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new features, apps, and extensions to meet evolving business needs.'
      },
      {
        title: 'Analytics & Monitoring',
        description:
          'We integrate analytics tools to track KPIs, conversions, and performance metrics.'
      }
    ]
  }
];

  return (
    <>
      <BigCommerceContent/>
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <Metatags  metaProps={metaPropsData}/>
      
    </>
  );
}

export default BigCommerce;
