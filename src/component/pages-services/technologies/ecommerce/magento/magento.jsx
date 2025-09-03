
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';
import MagentoContent from './magento-content';
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";

function Magento() {
  const metaPropsData = {
  title: "Magento Development Services - Cybomb Technologies | Custom E-Commerce Solutions",
  description:
    "Cybomb Technologies delivers Magento development services to build secure, scalable, and high-performance e-commerce stores. From custom design to integration and optimization, we help brands thrive online.",
  keyword:
    "Magento Development Services, Magento Store Development, Magento E-Commerce Solutions, Magento Customization, Magento Integration, Magento Website Design, Magento Development India",
  url: "https://www.cybomb.com/Services/magento",
  image: "https://www.cybomb.com", 
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We define a tailored Magento strategy to align with your eCommerce goals, ensuring a scalable, secure, and conversion-focused online store.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We gather business needs, customer journeys, and technical requirements to validate Magento as the right solution.'
      },
      {
        title: 'E-commerce Roadmap',
        description:
          'We plan catalog structure, checkout flow, payment integrations, and scalability milestones.'
      },
      {
        title: 'Feature Prioritization',
        description:
          'We prioritize key features like product management, multi-store capabilities, and personalization.'
      },
      {
        title: 'Tech Stack Planning',
        description:
          'We integrate Magento with ERP, CRM, payment gateways, and third-party systems for a robust ecosystem.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design intuitive, brand-centric Magento storefronts that boost engagement, trust, and conversions.',
    cards: [
      {
        title: 'Wireframing & Prototyping',
        description:
          'We build store wireframes and clickable prototypes to map out user journeys.'
      },
      {
        title: 'Custom Theme Development',
        description:
          'We design bespoke Magento themes tailored to your brand identity.'
      },
      {
        title: 'Responsive Layouts',
        description:
          'We ensure mobile-first, responsive layouts optimized for all devices.'
      },
      {
        title: 'Conversion-focused UX',
        description:
          'We use proven UX patterns to optimize product browsing, checkout, and repeat purchases.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We deliver robust Magento stores with advanced functionality, custom modules, and seamless integrations.',
    cards: [
      {
        title: 'Custom Store Development',
        description:
          'We create Magento stores tailored to B2C and B2B eCommerce models.'
      },
      {
        title: 'Extension Development',
        description:
          'We develop and integrate Magento extensions for payments, shipping, analytics, and more.'
      },
      {
        title: 'Headless Commerce',
        description:
          'We build API-driven Magento solutions for faster, flexible, and modern storefronts.'
      },
      {
        title: 'Third-party Integrations',
        description:
          'We connect Magento with ERP, CRM, marketing automation, and inventory systems.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We conduct rigorous testing to ensure Magento stores perform flawlessly, securely, and efficiently.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We test checkout, cart, product pages, and workflows for accuracy and stability.'
      },
      {
        title: 'Cross-device Testing',
        description:
          'We ensure stores deliver consistent experiences across desktop, tablet, and mobile.'
      },
      {
        title: 'Security & Compliance',
        description:
          'We implement PCI compliance, SSL, and security patches for safe transactions.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We fine-tune Magento performance with caching, indexing, and speed optimization.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We manage smooth Magento store deployment with optimized hosting, SEO setup, and live go-live support.',
    cards: [
      {
        title: 'Hosting & Environment Setup',
        description:
          'We configure high-performance hosting optimized for Magento applications.'
      },
      {
        title: 'CI/CD Pipelines',
        description:
          'We streamline releases with automated builds and deployments.'
      },
      {
        title: 'SEO & Launch Preparation',
        description:
          'We optimize site structure, metadata, and URLs for search visibility before launch.'
      },
      {
        title: 'Go-Live Deployment',
        description:
          'We launch Magento stores seamlessly with minimal downtime.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous Magento support, updates, and feature enhancements to keep your store competitive.',
    cards: [
      {
        title: 'Ongoing Maintenance',
        description:
          'We fix bugs, release patches, and monitor store performance continuously.'
      },
      {
        title: 'Magento Upgrades',
        description:
          'We upgrade your store to the latest Magento versions with zero downtime.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We develop new modules and features to meet evolving business requirements.'
      },
      {
        title: 'Analytics & Monitoring',
        description:
          'We integrate analytics and monitoring tools to track KPIs and optimize conversions.'
      }
    ]
  }
];

  return (
    <>
      <MagentoContent/>
       <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <Metatags  metaProps={metaPropsData}/>
      <StillNotSure/>
      
    </>
  );
}

export default Magento;
