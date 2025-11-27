import DrupalContent from "./drupal-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
function Drupal() {
  const metaPropsData = {
    title:
      "Drupal Development Services - Cybomb Technologies | Custom & Scalable Solutions",
    description:
      "Cybomb Technologies delivers custom Drupal development services, including theme development, module customization, and enterprise-level Drupal solutions tailored to your business needs.",
    keyword:
      "Drupal Development, Drupal CMS, Drupal Customization, Drupal Module Development, Drupal Theme Development, Enterprise Drupal Solutions, Cybomb Technologies",
    url: "https://www.cybomb.com/services/drupal-development",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We strategize Drupal implementation to align with your digital roadmap, ensuring flexibility, scalability, and security.',
    cards: [
      {
        title: 'Business Requirement Analysis',
        description:
          'We gather functional and technical requirements to design a Drupal solution that meets business goals.'
      },
      {
        title: 'Information Architecture',
        description:
          'We define structured content models, taxonomies, and workflows for efficient content delivery.'
      },
      {
        title: 'Integration Planning',
        description:
          'We map integrations with CRMs, ERPs, marketing automation, and third-party APIs.'
      },
      {
        title: 'Scalability & Governance',
        description:
          'We plan for multi-site management, role-based permissions, and long-term scalability.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We create user-friendly, accessible, and responsive designs that blend seamlessly with Drupal’s theme layer.',
    cards: [
      {
        title: 'Custom Drupal Themes',
        description:
          'We design and develop bespoke Drupal themes that reflect your brand identity.'
      },
      {
        title: 'Component-driven Design',
        description:
          'We create reusable design components using Drupal’s Layout Builder and design systems.'
      },
      {
        title: 'Responsive & Accessible Design',
        description:
          'We ensure WCAG-compliant, mobile-first designs across all devices and platforms.'
      },
      {
        title: 'Personalized User Experience',
        description:
          'We design user journeys powered by Drupal’s personalization and contextual targeting tools.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We deliver secure, scalable, and enterprise-grade Drupal websites tailored to your needs.',
    cards: [
      {
        title: 'Custom Module Development',
        description:
          'We build custom Drupal modules to extend functionality and meet unique requirements.'
      },
      {
        title: 'Headless Drupal Solutions',
        description:
          'We implement decoupled Drupal with React, Vue, or Angular using JSON:API and GraphQL.'
      },
      {
        title: 'eCommerce & Multilingual Setup',
        description:
          'We build eCommerce platforms with Drupal Commerce and deliver global reach with multilingual support.'
      },
      {
        title: 'Content Authoring Workflows',
        description:
          'We configure editorial workflows, roles, and permissions for streamlined publishing.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure Drupal applications run flawlessly through comprehensive testing.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We validate all Drupal modules, workflows, and business logic.'
      },
      {
        title: 'Cross-browser & Device Testing',
        description:
          'We test the website on major browsers and devices for UI consistency.'
      },
      {
        title: 'Performance & Load Testing',
        description:
          'We optimize caching, CDN, and queries to deliver high-performance Drupal sites.'
      },
      {
        title: 'Security Testing',
        description:
          'We perform audits to secure Drupal core, modules, and third-party integrations.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy Drupal websites with robust DevOps pipelines, optimized hosting, and SEO best practices.',
    cards: [
      {
        title: 'Optimized Hosting Setup',
        description:
          'We configure Drupal hosting environments with Docker, Kubernetes, or managed platforms.'
      },
      {
        title: 'CI/CD Pipelines',
        description:
          'We implement automated deployment and version control for continuous delivery.'
      },
      {
        title: 'SEO & Analytics Integration',
        description:
          'We integrate SEO modules, schema markup, and analytics dashboards for visibility.'
      },
      {
        title: 'Content Migration',
        description:
          'We migrate content from legacy systems or previous CMS platforms into Drupal seamlessly.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous support, upgrades, and enhancements for Drupal websites.',
    cards: [
      {
        title: '24/7 Support & Monitoring',
        description:
          'We provide proactive monitoring, uptime checks, and issue resolution.'
      },
      {
        title: 'Drupal Core & Module Updates',
        description:
          'We apply regular updates to keep your Drupal site secure and up-to-date.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We fine-tune caching, queries, and CDN integrations for speed and scalability.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new modules, workflows, and integrations to evolve with your business needs.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <DrupalContent />
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

export default Drupal;
