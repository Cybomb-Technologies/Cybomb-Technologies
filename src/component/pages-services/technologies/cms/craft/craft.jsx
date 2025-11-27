import CraftContent from "./craft-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
function Craft() {
  const metaPropsData = {
    title:
      "Craft CMS Development Services - Cybomb Technologies | Custom & Scalable Solutions",
    description:
      "Cybomb Technologies provides professional Craft CMS development services. We deliver fast, scalable, and customized websites with Craft CMS, tailored to meet business goals and user experience needs.",
    keyword:
      "Craft CMS Development, Craft CMS Services, Custom CMS Solutions, Scalable CMS, Cybomb Technologies, Website Development, Content Management System",
    url: "https://www.cybomb.com/services/craft-cms-development",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We plan Craft CMS implementation with a focus on flexibility, content-first architecture, and seamless scalability.',
    cards: [
      {
        title: 'Requirement Gathering',
        description:
          'We analyze your digital goals, workflows, and content needs to align with Craft’s capabilities.'
      },
      {
        title: 'Information Architecture',
        description:
          'We design structured content models and relationships using Craft’s Matrix and custom fields.'
      },
      {
        title: 'Integration Strategy',
        description:
          'We plan integrations with CRMs, APIs, eCommerce (Craft Commerce), and third-party services.'
      },
      {
        title: 'Scalability & Security Planning',
        description:
          'We ensure Craft CMS setup can handle enterprise growth with optimized hosting and secure configurations.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We deliver brand-focused, user-friendly, and responsive designs powered by Craft’s flexible templating.',
    cards: [
      {
        title: 'Custom Theme Design',
        description:
          'We design unique Craft CMS themes tailored to your brand identity and content needs.'
      },
      {
        title: 'Component-based UI/UX',
        description:
          'We create reusable UI components with Craft’s Twig templating system for consistency and scalability.'
      },
      {
        title: 'Responsive & Accessible Design',
        description:
          'We ensure mobile-first, WCAG-compliant experiences across all devices and platforms.'
      },
      {
        title: 'Personalized User Journeys',
        description:
          'We craft designs optimized for engagement, usability, and conversions.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build secure, scalable, and flexible websites using Craft CMS and Craft Commerce.',
    cards: [
      {
        title: 'Custom Plugin Development',
        description:
          'We extend Craft CMS with custom plugins to meet your unique business requirements.'
      },
      {
        title: 'Craft Commerce Solutions',
        description:
          'We build powerful eCommerce platforms using Craft Commerce with advanced checkout and integrations.'
      },
      {
        title: 'Headless & API-first Setup',
        description:
          'We deliver omnichannel solutions with Craft’s GraphQL and REST APIs.'
      },
      {
        title: 'Content Authoring Workflows',
        description:
          'We configure editorial workflows, permissions, and version control for efficient content management.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We perform end-to-end testing to ensure Craft CMS sites deliver flawless experiences.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We test CMS functionality, custom fields, and content publishing workflows.'
      },
      {
        title: 'Cross-browser & Device Testing',
        description:
          'We validate UI/UX across browsers and mobile devices for consistency.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We test caching, CDN, and query optimization to ensure fast page loads.'
      },
      {
        title: 'Security Testing',
        description:
          'We check Craft CMS configurations and plugins for vulnerabilities and compliance.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy Craft CMS solutions with optimized hosting, DevOps workflows, and SEO readiness.',
    cards: [
      {
        title: 'Optimized Hosting Setup',
        description:
          'We configure Craft on high-performance servers with caching and CDN integrations.'
      },
      {
        title: 'CI/CD Pipeline Setup',
        description:
          'We enable automated deployments and version control for Craft CMS projects.'
      },
      {
        title: 'SEO & Analytics Integration',
        description:
          'We implement SEO best practices and integrate Google Analytics, Tag Manager, or custom dashboards.'
      },
      {
        title: 'Migration & Launch Support',
        description:
          'We migrate content from legacy CMS platforms to Craft with minimal downtime.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide ongoing support, upgrades, and performance enhancements for Craft CMS sites.',
    cards: [
      {
        title: '24/7 Monitoring & Support',
        description:
          'We ensure uptime, security patches, and bug fixes for Craft installations.'
      },
      {
        title: 'Plugin & Version Upgrades',
        description:
          'We keep Craft CMS and its plugins updated with the latest features and security fixes.'
      },
      {
        title: 'Performance & Scalability Tuning',
        description:
          'We optimize hosting, caching, and queries to improve performance as traffic grows.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We build new plugins, modules, and integrations as your business evolves.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <CraftContent />
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

export default Craft;
