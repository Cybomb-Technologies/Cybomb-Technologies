import WordPressContent from "./wordpress-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
function WordPress() {
  const metaPropsData = {
    title:
      "WordPress Development Services - Cybomb Technologies | Custom & Scalable Solutions",
    description:
      "Cybomb Technologies provides expert WordPress development services including custom themes, plugins, WooCommerce solutions, and performance optimization for scalable websites.",
    keyword:
      "WordPress Development, Custom WordPress Themes, WordPress Plugins, WooCommerce Development, WordPress Optimization, CMS Solutions, Cybomb Technologies",
    url: "https://www.cybomb.com/services/wordpress-development",
    image: "https://www.cybomb.com/images/logo-11.png", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We define a clear roadmap for building, customizing, and scaling your WordPress website to align with business goals.',
    cards: [
      {
        title: 'Requirement Gathering',
        description:
          'We assess your business needs, target audience, and project objectives to shape the WordPress solution.'
      },
      {
        title: 'Information Architecture',
        description:
          'We plan site structure, navigation, and content organization for better usability.'
      },
      {
        title: 'Plugin & Theme Strategy',
        description:
          'We select the right themes, plugins, and custom features to achieve desired functionality.'
      },
      {
        title: 'Integration Roadmap',
        description:
          'We design strategies for integrating WordPress with CRMs, payment gateways, and third-party services.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We craft visually appealing and user-friendly WordPress designs that enhance engagement and brand identity.',
    cards: [
      {
        title: 'Custom WordPress Themes',
        description:
          'We design pixel-perfect custom themes aligned with your brand.'
      },
      {
        title: 'Responsive Design',
        description:
          'We ensure seamless viewing across desktops, tablets, and mobile devices.'
      },
      {
        title: 'User Experience Mapping',
        description:
          'We design intuitive navigation flows for higher conversions and satisfaction.'
      },
      {
        title: 'Accessibility & SEO Design',
        description:
          'We create designs that follow accessibility standards and SEO-friendly structures.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We deliver scalable, secure, and feature-rich WordPress websites customized for your business needs.',
    cards: [
      {
        title: 'Custom Plugin Development',
        description:
          'We build custom plugins to extend functionality and meet unique requirements.'
      },
      {
        title: 'WooCommerce Development',
        description:
          'We develop powerful WordPress eCommerce solutions with WooCommerce.'
      },
      {
        title: 'Headless WordPress',
        description:
          'We implement headless WordPress setups for modern, API-driven, multi-platform experiences.'
      },
      {
        title: 'CMS Customization',
        description:
          'We tailor WordPress dashboards, workflows, and publishing tools for your content team.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We perform rigorous testing to ensure your WordPress site is fast, secure, and reliable.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We test plugins, forms, workflows, and site features to ensure everything works flawlessly.'
      },
      {
        title: 'Cross-Browser & Device Testing',
        description:
          'We check compatibility across browsers, OS, and devices.'
      },
      {
        title: 'Security & Vulnerability Testing',
        description:
          'We scan for common WordPress security risks like SQL injections, malware, and brute force attacks.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We fine-tune caching, database queries, and load times for speed and scalability.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We manage smooth deployment and launch of WordPress websites with minimal downtime.',
    cards: [
      {
        title: 'Hosting & Server Setup',
        description:
          'We configure WordPress on cloud hosting providers like AWS, Azure, and WP Engine.'
      },
      {
        title: 'CI/CD & Version Control',
        description:
          'We use Git workflows and CI/CD pipelines for seamless updates and deployments.'
      },
      {
        title: 'Content Migration',
        description:
          'We migrate content from legacy CMS or existing sites into WordPress without SEO loss.'
      },
      {
        title: 'SEO & Analytics Setup',
        description:
          'We set up SEO tools, analytics, and performance tracking before launch.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide ongoing WordPress support, security updates, and enhancements to keep your site future-ready.',
    cards: [
      {
        title: '24/7 Monitoring & Support',
        description:
          'We ensure uptime, resolve technical issues, and provide continuous assistance.'
      },
      {
        title: 'Security & Patch Updates',
        description:
          'We apply WordPress core, theme, and plugin updates with regular monitoring.'
      },
      {
        title: 'Performance Tuning',
        description:
          'We improve speed, caching, and database performance for optimal user experience.'
      },
      {
        title: 'New Features & Enhancements',
        description:
          'We continuously evolve your WordPress site with added functionality and integrations.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <WordPressContent />
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

export default WordPress;
