import AdobeCommerceContent from './adobe-commerce-content';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';


function AdobeCommerce() {
  const metaPropsData = {
  title: "Adobe Commerce Services - Cybomb Technologies | Magento Development & E-Commerce Solutions",
  description:
    "Cybomb Technologies offers Adobe Commerce (Magento) development services, delivering secure, scalable, and high-performance e-commerce solutions. From custom store design to integration and optimization, we help businesses succeed online.",
  keyword:
    "Adobe Commerce Services, Magento Development, Adobe Commerce Store Setup, Magento E-Commerce Solutions, Adobe Commerce Integration, Magento Customization, Adobe Commerce Development India",
  url: "https://www.cybomb.com/Services/adobe-commerce",
  image: "https://www.cybomb.com", 
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We craft a tailored Adobe Commerce strategy that aligns with your business objectives, ensuring a scalable, secure, and feature-rich online store.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We identify business goals, customer needs, and eCommerce workflows to plan the right Adobe Commerce setup.'
      },
      {
        title: 'E-commerce Roadmap',
        description:
          'We define a roadmap for catalog structure, checkout flows, integrations, and scalability goals.'
      },
      {
        title: 'Feature Prioritization',
        description:
          'We prioritize key store features like product management, multi-store support, and personalization.'
      },
      {
        title: 'Tech Stack Planning',
        description:
          'We plan integrations with payment gateways, ERP, CRM, and third-party systems to strengthen your store.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design engaging, user-friendly storefronts that enhance shopping experiences and maximize conversions on Adobe Commerce.',
    cards: [
      {
        title: 'Wireframing & Prototyping',
        description:
          'We create store wireframes and prototypes for seamless navigation and buying journeys.'
      },
      {
        title: 'Custom Storefront Design',
        description:
          'We build pixel-perfect, brand-aligned themes optimized for Adobe Commerce.'
      },
      {
        title: 'Responsive Layouts',
        description:
          'We design mobile-first and responsive layouts for an optimized shopping experience on all devices.'
      },
      {
        title: 'Conversion-focused UX',
        description:
          'We use proven design practices to reduce cart abandonment and increase checkout conversions.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We deliver scalable, secure, and high-performing Adobe Commerce stores tailored to your business model.',
    cards: [
      {
        title: 'Custom Store Development',
        description:
          'We build fully customized stores with unique features and advanced capabilities.'
      },
      {
        title: 'Extension Integration',
        description:
          'We integrate Adobe Commerce extensions for payments, shipping, marketing, and more.'
      },
      {
        title: 'Headless Commerce',
        description:
          'We implement headless setups with Adobe Commerce APIs for flexibility and faster performance.'
      },
      {
        title: 'Third-party Integrations',
        description:
          'We connect Adobe Commerce with CRMs, ERPs, and marketing automation platforms.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure your Adobe Commerce store runs flawlessly with rigorous testing across all modules and devices.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We test shopping carts, checkout, payments, and other workflows to ensure reliability.'
      },
      {
        title: 'Cross-device Testing',
        description:
          'We validate store performance on desktops, tablets, and mobile devices.'
      },
      {
        title: 'Security & Compliance',
        description:
          'We ensure PCI compliance, SSL, and secure payment integrations to protect customer data.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We fine-tune speed, caching, and database performance for smooth user experiences.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We ensure smooth deployment of Adobe Commerce stores with optimized hosting, configuration, and compliance checks.',
    cards: [
      {
        title: 'Hosting & Setup',
        description:
          'We configure secure, high-performance hosting for Adobe Commerce.'
      },
      {
        title: 'CI/CD Pipelines',
        description:
          'We implement automated deployment pipelines for consistent and faster releases.'
      },
      {
        title: 'SEO & Launch Prep',
        description:
          'We optimize metadata, URLs, and sitemaps for search visibility before launch.'
      },
      {
        title: 'Store Deployment',
        description:
          'We launch your store with minimal downtime and seamless live transitions.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide ongoing support, upgrades, and optimization to keep your Adobe Commerce store competitive.',
    cards: [
      {
        title: 'Ongoing Maintenance',
        description:
          'We handle bug fixes, performance monitoring, and continuous updates.'
      },
      {
        title: 'Security Upgrades',
        description:
          'We apply patches, updates, and vulnerability checks to keep your store secure.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We introduce new modules, integrations, and custom features to scale your store.'
      },
      {
        title: 'Analytics & Monitoring',
        description:
          'We integrate analytics to track conversions, traffic, and store performance.'
      }
    ]
  }
];

  return (
    <>
      <AdobeCommerceContent/>
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

export default AdobeCommerce;
