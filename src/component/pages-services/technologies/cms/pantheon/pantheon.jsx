import PantheonContent from "./pantheon-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";

function Pantheon() {
  const metaPropsData = {
    title: "Pantheon Development & Support Services - Cybomb Technologies",
    description:
      "Cybomb Technologies provides expert Pantheon development, migration, and support services. We specialize in building scalable, secure, and high-performing websites powered by Pantheon’s cloud platform.",
    keyword:
      "Pantheon Development, Pantheon Migration, Pantheon Hosting, Drupal Pantheon, WordPress Pantheon, Cloud Website Hosting, Cybomb Technologies, Pantheon Support Services",
    url: "https://www.cybomb.com/services/pantheon-development",
    image: "https://www.cybomb.com/images/logo-11.png", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We define the roadmap for building, migrating, or optimizing your CMS projects on Pantheon’s WebOps platform.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We gather business needs and align them with Pantheon’s WebOps capabilities for efficiency.'
      },
      {
        title: 'Platform Architecture',
        description:
          'We design scalable, secure infrastructure leveraging Pantheon’s container-based architecture.'
      },
      {
        title: 'Workflow Strategy',
        description:
          'We establish agile workflows with Pantheon’s Dev, Test, and Live environments.'
      },
      {
        title: 'Integration Planning',
        description:
          'We plan integrations with CRMs, CDPs, marketing automation tools, and third-party APIs.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design modern, user-friendly interfaces that leverage Pantheon’s optimized front-end workflows.',
    cards: [
      {
        title: 'Custom Theme Design',
        description:
          'We design and implement Drupal/WordPress themes optimized for Pantheon.'
      },
      {
        title: 'Responsive Experiences',
        description:
          'We ensure your site is mobile-first, fast-loading, and highly accessible.'
      },
      {
        title: 'User Journey Mapping',
        description:
          'We create intuitive navigation and layouts for better engagement.'
      },
      {
        title: 'Brand Consistency',
        description:
          'We align visuals with brand identity while optimizing for CMS usability.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build high-performance CMS solutions leveraging Pantheon’s WebOps platform for speed, scalability, and automation.',
    cards: [
      {
        title: 'Drupal & WordPress Expertise',
        description:
          'We develop custom solutions using Drupal or WordPress on Pantheon.'
      },
      {
        title: 'Custom Module & Plugin Development',
        description:
          'We build extensions to meet unique business needs within Pantheon-hosted CMS.'
      },
      {
        title: 'API & Third-Party Integrations',
        description:
          'We integrate CRMs, eCommerce, payment gateways, and analytics platforms.'
      },
      {
        title: 'WebOps Automation',
        description:
          'We leverage Pantheon’s CI/CD pipelines for streamlined development workflows.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure robust performance, security, and cross-platform consistency before going live.',
    cards: [
      {
        title: 'Automated Testing',
        description:
          'We implement regression and unit testing for reliable Pantheon deployments.'
      },
      {
        title: 'Cross-browser & Device Testing',
        description:
          'We validate site performance across different devices and browsers.'
      },
      {
        title: 'Security Audits',
        description:
          'We conduct vulnerability scans and apply Pantheon security best practices.'
      },
      {
        title: 'Load & Performance Testing',
        description:
          'We simulate high-traffic scenarios to optimize scalability and uptime.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We manage seamless launches with Pantheon’s Dev-Test-Live architecture and scaling tools.',
    cards: [
      {
        title: 'Environment Setup',
        description:
          'We configure Dev, Test, and Live environments for smooth WebOps workflows.'
      },
      {
        title: 'Migration & Launch',
        description:
          'We migrate existing Drupal/WordPress sites into Pantheon without downtime.'
      },
      {
        title: 'SEO & Analytics Setup',
        description:
          'We configure metadata, schema, analytics, and monitoring for go-live readiness.'
      },
      {
        title: 'Performance Tuning',
        description:
          'We optimize caching (Varnish, Redis) and CDN integration for speed.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous monitoring, updates, and optimization for Pantheon-hosted solutions.',
    cards: [
      {
        title: '24/7 Monitoring',
        description:
          'We ensure uptime and rapid issue resolution using Pantheon’s monitoring tools.'
      },
      {
        title: 'CMS & Security Updates',
        description:
          'We apply regular updates for Drupal/WordPress core, plugins, and Pantheon services.'
      },
      {
        title: 'Performance Enhancements',
        description:
          'We continuously fine-tune caching, database queries, and codebase for efficiency.'
      },
      {
        title: 'Feature Upgrades',
        description:
          'We add new functionality, integrations, and enhancements as your business grows.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <PantheonContent />
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

export default Pantheon;
