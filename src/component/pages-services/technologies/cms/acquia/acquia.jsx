import AcquiaContent from "./acquia-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";

function Acquia() {
  const metaPropsData = {
    title:
      "Acquia Development Services - Cybomb Technologies | Drupal & Cloud Solutions",
    description:
      "Cybomb Technologies provides expert Acquia development services including Drupal cloud hosting, site factory, personalization, and enterprise-level digital experience solutions.",
    keyword:
      "Acquia Development, Drupal Cloud, Acquia Site Factory, Acquia Personalization, Acquia Lift, Drupal Hosting, Digital Experience Platform, Cybomb Technologies",
    url: "https://www.cybomb.com/services/acquia",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We design a clear roadmap for your Acquia CMS implementation, ensuring your enterprise content management is scalable, secure, and aligned with your digital goals.',
    cards: [
      {
        title: 'Business & Content Strategy',
        description:
          'We analyze your enterprise needs and plan content workflows that match your digital roadmap.'
      },
      {
        title: 'Information Architecture',
        description:
          'We structure content hierarchies in Acquia CMS for intuitive navigation and findability.'
      },
      {
        title: 'Platform & Integration Planning',
        description:
          'We assess existing systems and plan seamless integrations with Acquia Cloud, CRM, and marketing tools.'
      },
      {
        title: 'Governance & Scalability',
        description:
          'We establish guidelines for content governance, compliance, and future scalability.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We create user-friendly and brand-consistent designs for Acquia CMS-powered websites and portals.',
    cards: [
      {
        title: 'Custom Theme Design',
        description:
          'We design responsive and visually engaging Drupal/Acquia themes tailored to your brand identity.'
      },
      {
        title: 'Accessibility & Compliance',
        description:
          'We ensure WCAG-compliant designs for inclusivity and global accessibility standards.'
      },
      {
        title: 'Component-driven UI',
        description:
          'We craft reusable, modular design components to accelerate CMS-driven site builds.'
      },
      {
        title: 'Optimized User Experience',
        description:
          'We focus on usability, navigation, and conversion-friendly layouts for enterprise audiences.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We deliver enterprise-grade Acquia CMS solutions with custom modules, integrations, and cloud-ready performance.',
    cards: [
      {
        title: 'Custom Module Development',
        description:
          'We extend Acquia CMS with custom Drupal modules to meet unique business requirements.'
      },
      {
        title: 'Multisite & Multilingual Solutions',
        description:
          'We build and manage multi-brand and multilingual sites within Acquia’s CMS ecosystem.'
      },
      {
        title: 'Marketing Cloud & CRM Integration',
        description:
          'We integrate Acquia CMS with Acquia Marketing Cloud, Salesforce, and other enterprise systems.'
      },
      {
        title: 'Headless & Decoupled CMS',
        description:
          'We build modern frontends with React, Angular, or Vue while using Acquia CMS as the backend.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We thoroughly test Acquia CMS implementations to guarantee performance, stability, and enterprise-grade security.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We validate workflows, publishing, user roles, and site functionality across the CMS.'
      },
      {
        title: 'Load & Performance Testing',
        description:
          'We ensure high scalability of Acquia-hosted sites under enterprise traffic volumes.'
      },
      {
        title: 'Security & Compliance Testing',
        description:
          'We implement and test security measures for compliance with GDPR, HIPAA, and industry standards.'
      },
      {
        title: 'Cross-Device & Browser Testing',
        description:
          'We ensure a consistent CMS experience across devices, platforms, and browsers.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We handle secure deployment of Acquia CMS on Acquia Cloud or hybrid infrastructures with minimal downtime.',
    cards: [
      {
        title: 'Cloud Hosting Setup',
        description:
          'We configure Acquia Cloud or hybrid hosting environments for maximum efficiency.'
      },
      {
        title: 'CI/CD & Automation',
        description:
          'We implement DevOps pipelines for smooth deployments and version control.'
      },
      {
        title: 'Migration & Data Import',
        description:
          'We migrate content, users, and digital assets from legacy CMSs into Acquia CMS seamlessly.'
      },
      {
        title: 'SEO & Analytics Integration',
        description:
          'We set up SEO-friendly structures, analytics, and marketing automation tools.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide long-term support and optimization for Acquia CMS to ensure continuous growth and performance.',
    cards: [
      {
        title: 'Proactive Monitoring',
        description:
          'We continuously monitor uptime, performance, and security on Acquia Cloud.'
      },
      {
        title: 'Upgrades & Module Updates',
        description:
          'We apply Drupal core updates, Acquia platform patches, and security fixes.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We fine-tune caching, CDN, and database configurations for better performance.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new features, integrations, and optimizations as your enterprise needs evolve.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AcquiaContent />
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

export default Acquia;
