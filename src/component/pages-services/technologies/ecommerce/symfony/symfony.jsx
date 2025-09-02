import SymfonyContent from './symfony-content';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";

function Symfony() {
  const metaPropsData = {
  title: "Symfony Development Services - Cybomb Technologies | Custom Web Application Solutions",
  description:
    "Cybomb Technologies provides Symfony development services to build secure, scalable, and high-performance web applications. We offer custom module development, API integration, and ongoing maintenance for Symfony-based solutions.",
  keyword:
    "Symfony Development Services, Symfony Web Development, Symfony Application Development, Symfony API Integration, Symfony Module Development, Symfony Maintenance, Symfony Development India",
  url: "https://www.cybomb.com/Services/symfony",
  image: "https://www.cybomb.com",
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We align your business objectives with Symfony’s robust ecosystem, ensuring scalable and secure applications.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We gather functional and technical requirements to design a Symfony-based solution tailored to your needs.'
      },
      {
        title: 'Architecture Planning',
        description:
          'We define a strong architecture using Symfony bundles, components, and modular design for long-term maintainability.'
      },
      {
        title: 'Feature Roadmap',
        description:
          'We prioritize MVP features and plan future enhancements to deliver continuous business value.'
      },
      {
        title: 'Technology Alignment',
        description:
          'We ensure seamless integration of Symfony with databases, APIs, and third-party services.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design engaging and user-friendly interfaces that integrate smoothly with Symfony backends.',
    cards: [
      {
        title: 'Wireframing & Prototyping',
        description:
          'We design detailed wireframes and clickable prototypes to validate user journeys early.'
      },
      {
        title: 'Responsive Layouts',
        description:
          'We deliver mobile-first, responsive interfaces that adapt across devices and browsers.'
      },
      {
        title: 'Custom Frontend Integration',
        description:
          'We integrate Symfony with modern frontend stacks like React, Vue.js, or Angular for rich UIs.'
      },
      {
        title: 'Consistent Branding',
        description:
          'We create UI components that align with your brand identity for a cohesive digital experience.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build enterprise-grade Symfony applications using best practices, reusable components, and secure coding standards.',
    cards: [
      {
        title: 'Custom Application Development',
        description:
          'We create bespoke Symfony apps, from enterprise portals to SaaS platforms.'
      },
      {
        title: 'API Development & Integrations',
        description:
          'We develop secure RESTful and GraphQL APIs with Symfony for seamless integrations.'
      },
      {
        title: 'E-commerce Solutions',
        description:
          'We build custom e-commerce applications or integrate Symfony with platforms like Magento and Sylius.'
      },
      {
        title: 'Modular & Scalable Codebase',
        description:
          'We leverage Symfony components and bundles for clean, maintainable, and future-proof code.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure Symfony applications are secure, stable, and high-performing through comprehensive testing.',
    cards: [
      {
        title: 'Unit & Functional Testing',
        description:
          'We use PHPUnit and Symfony’s testing tools to validate business logic and workflows.'
      },
      {
        title: 'Performance Testing',
        description:
          'We optimize Symfony apps to handle heavy traffic, ensuring fast response times.'
      },
      {
        title: 'Security Audits',
        description:
          'We implement and test advanced security measures, including CSRF protection, encryption, and secure authentication.'
      },
      {
        title: 'Cross-browser & Device Testing',
        description:
          'We validate user experiences across multiple devices and environments.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We ensure smooth deployment of Symfony applications with CI/CD and cloud-ready configurations.',
    cards: [
      {
        title: 'Cloud Deployment',
        description:
          'We deploy Symfony applications on AWS, Azure, Google Cloud, or private servers.'
      },
      {
        title: 'CI/CD Automation',
        description:
          'We set up automated pipelines for seamless code integration, testing, and delivery.'
      },
      {
        title: 'Configuration Management',
        description:
          'We optimize Symfony configs for different environments, ensuring stability and security.'
      },
      {
        title: 'Scalable Infrastructure',
        description:
          'We design deployment strategies that handle scaling, load balancing, and global accessibility.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide ongoing Symfony support, upgrades, and performance optimization for long-term success.',
    cards: [
      {
        title: 'Continuous Monitoring',
        description:
          'We track application health, error logs, and performance metrics in real time.'
      },
      {
        title: 'Symfony & PHP Upgrades',
        description:
          'We keep your apps up-to-date with the latest Symfony and PHP versions for security and stability.'
      },
      {
        title: 'Bug Fixes & Enhancements',
        description:
          'We quickly address issues and add new features based on evolving business needs.'
      },
      {
        title: 'Proactive Security Updates',
        description:
          'We implement patches and updates to protect applications against emerging vulnerabilities.'
      }
    ]
  }
];

  return (
    <>
      <SymfonyContent/>
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

export default Symfony;
