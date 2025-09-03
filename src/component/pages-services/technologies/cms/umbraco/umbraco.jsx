import UmbracoContent from "./umbraco-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
function Umbraco() {
  const metaPropsData = {
    title: "Umbraco CMS Development Services - Cybomb Technologies",
    description:
      "Cybomb Technologies provides expert Umbraco CMS development services, including custom solutions, seamless integrations, and scalable content management tailored to your business needs.",
    keyword:
      "Umbraco CMS, Umbraco Development, Headless CMS, Content Management, Umbraco Integration, Custom CMS Solutions, Cybomb Technologies",
    url: "https://www.cybomb.com/services/umbraco",
    image: "https://www.cybomb.com/images/logo-11.png", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We define the roadmap for implementing, customizing, and scaling Umbraco CMS to meet your business needs.',
    cards: [
      {
        title: 'Requirement Gathering',
        description:
          'We analyze business goals, user experience needs, and digital content workflows.'
      },
      {
        title: 'Architecture Planning',
        description:
          'We design scalable Umbraco setups that support multi-site, multi-language, and enterprise content structures.'
      },
      {
        title: 'Integration Strategy',
        description:
          'We plan how Umbraco will connect with CRMs, ERPs, eCommerce, and marketing platforms.'
      },
      {
        title: 'Content Roadmap',
        description:
          'We define structured content models, taxonomies, and governance frameworks for consistency.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design intuitive, responsive, and brand-aligned Umbraco experiences for all devices.',
    cards: [
      {
        title: 'Custom Templates & Components',
        description:
          'We create reusable Umbraco templates and content blocks tailored to your branding.'
      },
      {
        title: 'Responsive Design',
        description:
          'We ensure seamless experiences across mobile, tablet, and desktop screens.'
      },
      {
        title: 'User-Centered Wireframes',
        description:
          'We map user journeys into designs that simplify navigation and improve engagement.'
      },
      {
        title: 'Accessibility & Compliance',
        description:
          'We follow WCAG guidelines to make Umbraco-powered sites inclusive for all users.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We develop scalable, secure, and customized Umbraco solutions that align with business goals.',
    cards: [
      {
        title: 'Custom Module Development',
        description:
          'We build tailored features and plugins to extend Umbraco’s capabilities.'
      },
      {
        title: 'Headless Umbraco',
        description:
          'We implement Umbraco in headless mode to power multi-channel and JAMstack applications.'
      },
      {
        title: 'Third-Party Integrations',
        description:
          'We integrate Umbraco with CRMs, payment gateways, analytics tools, and marketing automation platforms.'
      },
      {
        title: 'Multilingual & Multi-site Setup',
        description:
          'We enable global content delivery with language variants and multi-domain support.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure Umbraco solutions are secure, fast, and error-free before deployment.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We test templates, workflows, content publishing, and custom modules.'
      },
      {
        title: 'Cross-browser & Device Testing',
        description:
          'We validate seamless performance across browsers, OS, and devices.'
      },
      {
        title: 'Security Testing',
        description:
          'We perform vulnerability checks, access control validation, and data protection tests.'
      },
      {
        title: 'Performance Testing',
        description:
          'We optimize caching, hosting, and scalability for high-traffic environments.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We manage smooth Umbraco deployments with minimal downtime and maximum efficiency.',
    cards: [
      {
        title: 'Cloud & On-Prem Deployment',
        description:
          'We set up Umbraco on Azure Cloud, Umbraco Cloud, or on-premise servers.'
      },
      {
        title: 'CI/CD Setup',
        description:
          'We implement automated pipelines for faster, error-free deployments.'
      },
      {
        title: 'Content Migration',
        description:
          'We migrate content from legacy CMS to Umbraco while retaining SEO value.'
      },
      {
        title: 'User Training',
        description:
          'We train content editors and admins to manage Umbraco efficiently.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous Umbraco support, monitoring, and optimization to keep your platform running at its best.',
    cards: [
      {
        title: '24/7 Support & Monitoring',
        description:
          'We provide proactive issue resolution, uptime monitoring, and technical support.'
      },
      {
        title: 'Upgrades & Patching',
        description:
          'We apply Umbraco version upgrades, security patches, and performance fixes.'
      },
      {
        title: 'Ongoing Optimization',
        description:
          'We fine-tune search, caching, and integrations for better efficiency.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We continuously improve with new modules, integrations, and user experience upgrades.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <UmbracoContent />
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

export default Umbraco;
