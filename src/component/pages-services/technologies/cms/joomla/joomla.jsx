import JoomlaContent from "./joomla-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";

function Joomla() {
  const metaPropsData = {
    title:
      "Joomla Development Services - Cybomb Technologies | Secure & Scalable Solutions",
    description:
      "Cybomb Technologies provides expert Joomla development services, including custom templates, extensions, integrations, and maintenance. Build scalable, secure, and high-performing Joomla websites with our experienced team.",
    keyword:
      "Joomla Development, Joomla CMS, Joomla Customization, Joomla Templates, Joomla Extensions, Joomla Integration, Joomla Maintenance, Cybomb Technologies",
    url: "https://www.cybomb.com/services/joomla-development",
    image: "https://www.cybomb.com/images/logo-11.png", // Replace with actual Joomla banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We carefully analyze your business needs and plan a Joomla-based solution that is scalable, secure, and easy to manage.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We define technical and functional requirements to create a Joomla solution tailored to your business goals.'
      },
      {
        title: 'Architecture & Content Strategy',
        description:
          'We design Joomla site architecture, content hierarchy, and navigation for smooth user journeys.'
      },
      {
        title: 'Extension Planning',
        description:
          'We identify necessary Joomla extensions and third-party integrations to enhance functionality.'
      },
      {
        title: 'Scalability Roadmap',
        description:
          'We ensure your Joomla solution can grow with new features, users, and business needs.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We craft engaging, mobile-friendly Joomla templates and designs that align with your brand identity.',
    cards: [
      {
        title: 'Custom Joomla Templates',
        description:
          'We design bespoke templates that ensure consistency and visual appeal.'
      },
      {
        title: 'Responsive & Accessible Design',
        description:
          'We create mobile-first, WCAG-compliant interfaces for accessibility and performance.'
      },
      {
        title: 'User-Centric Layouts',
        description:
          'We optimize page layouts and navigation for improved usability and engagement.'
      },
      {
        title: 'Brand Integration',
        description:
          'We ensure your Joomla website reflects your brand with colors, typography, and imagery.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Joomla Development',
    description:
      'We build robust, secure, and customized Joomla websites and applications.',
    cards: [
      {
        title: 'Custom Extension Development',
        description:
          'We develop custom Joomla extensions to add unique functionalities.'
      },
      {
        title: 'Joomla eCommerce Solutions',
        description:
          'We implement VirtueMart, HikaShop, or other eCommerce integrations for online stores.'
      },
      {
        title: 'Third-party Integrations',
        description:
          'We connect Joomla with CRMs, ERPs, payment gateways, and marketing tools.'
      },
      {
        title: 'Multilingual & Multi-site Setup',
        description:
          'We configure Joomla to support multiple languages and multi-site management.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing & QA',
    description:
      'We ensure flawless functionality and performance across devices and browsers.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We validate Joomla modules, extensions, and workflows against requirements.'
      },
      {
        title: 'Cross-browser & Device Testing',
        description:
          'We test Joomla sites on different browsers and devices for consistent performance.'
      },
      {
        title: 'Security Testing',
        description:
          'We audit Joomla security patches, extensions, and configurations to prevent vulnerabilities.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We enhance speed using caching, database tuning, and CDN integration.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment & Launch',
    description:
      'We launch Joomla solutions with optimized hosting, SEO setup, and a smooth go-live process.',
    cards: [
      {
        title: 'Hosting & Server Setup',
        description:
          'We configure Joomla hosting environments with security and scalability in mind.'
      },
      {
        title: 'SEO & Analytics Setup',
        description:
          'We optimize Joomla websites with metadata, sitemaps, schema, and analytics integrations.'
      },
      {
        title: 'Content Migration',
        description:
          'We migrate content from legacy systems or other CMS platforms into Joomla seamlessly.'
      },
      {
        title: 'Go-Live Support',
        description:
          'We provide technical assistance during launch to ensure a flawless rollout.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Post-Launch Support',
    description:
      'We provide continuous support, upgrades, and monitoring to keep Joomla websites secure and up-to-date.',
    cards: [
      {
        title: '24/7 Monitoring & Support',
        description:
          'We ensure uptime, security, and quick resolution of issues.'
      },
      {
        title: 'Joomla Updates',
        description:
          'We apply regular Joomla core and extension updates for stability and security.'
      },
      {
        title: 'Performance Tuning',
        description:
          'We continuously optimize Joomla websites for speed and scalability.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new extensions, modules, and customizations as your business evolves.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <JoomlaContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
    </>
  );
}

export default Joomla;
