import AemContent from "./aem-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
function Aem() {
  const metaPropsData = {
    title:
      "Adobe Experience Manager Services in chennai - Cybomb MNC",
    description:
      "Cybomb Tech MNC provides expert AEM development services, delivering personalized, scalable, and high-performing digital experiences. We specialize in AEM Sites, Assets, and custom integrations.",
    keyword:
      "Adobe Experience Manager Services in chennai,AEM Development, Adobe Experience Manager, AEM Sites, AEM Assets, AEM Integration, Digital Experience Platform, Cybomb Technologies",
    url: "https://www.cybomb.com/services/aem-development",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We define a roadmap for AEM implementation, ensuring enterprise scalability, omnichannel experience, and seamless content management.',
    cards: [
      {
        title: 'Business Requirement Analysis',
        description:
          'We analyze your enterprise goals and content strategy to align AEM with your digital ecosystem.'
      },
      {
        title: 'Information Architecture',
        description:
          'We design structured content models, taxonomies, and workflows for enterprise-level content governance.'
      },
      {
        title: 'Integration Planning',
        description:
          'We plan integrations with Adobe Marketing Cloud, CRM, and third-party applications.'
      },
      {
        title: 'Scalability & Security Strategy',
        description:
          'We ensure AEM is configured for future growth, compliance, and enterprise-grade security.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We create personalized and engaging digital experiences powered by AEM Sites and AEM Assets.',
    cards: [
      {
        title: 'Custom Template & Component Design',
        description:
          'We design reusable templates and components for flexible content authoring.'
      },
      {
        title: 'Personalized User Journeys',
        description:
          'We design experiences tailored for customer segments using AEM’s personalization features.'
      },
      {
        title: 'Responsive & Accessible Design',
        description:
          'We ensure WCAG-compliant, mobile-first, and cross-device compatible experiences.'
      },
      {
        title: 'Brand-consistent UI/UX',
        description:
          'We design digital experiences aligned with your brand identity and enterprise standards.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We deliver enterprise-grade AEM solutions with custom components, workflows, and integrations.',
    cards: [
      {
        title: 'Custom Component Development',
        description:
          'We build reusable, scalable AEM components to empower content authors.'
      },
      {
        title: 'Headless & Hybrid CMS',
        description:
          'We enable omnichannel delivery with AEM’s headless capabilities integrated with React, Angular, or Vue.'
      },
      {
        title: 'Workflow Automation',
        description:
          'We develop custom workflows for publishing, approval, and content lifecycle management.'
      },
      {
        title: 'Adobe Cloud Integrations',
        description:
          'We integrate AEM with Adobe Analytics, Target, Campaign, and third-party tools.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We thoroughly test AEM implementations to ensure stability, performance, and security.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We validate content authoring, workflows, and end-user experiences across AEM sites.'
      },
      {
        title: 'Load & Performance Testing',
        description:
          'We ensure AEM performs reliably under high enterprise traffic loads.'
      },
      {
        title: 'Security Testing',
        description:
          'We test AEM deployments for compliance with enterprise security and privacy standards.'
      },
      {
        title: 'Cross-browser & Device Testing',
        description:
          'We ensure seamless experience across all browsers, platforms, and devices.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy AEM solutions securely on Adobe Cloud or hybrid environments with CI/CD pipelines.',
    cards: [
      {
        title: 'AEM as a Cloud Service Setup',
        description:
          'We configure AEM Cloud for enterprise-grade scalability, security, and resilience.'
      },
      {
        title: 'CI/CD & Automation',
        description:
          'We set up automated pipelines for AEM deployments, code quality, and versioning.'
      },
      {
        title: 'Migration & Data Transfer',
        description:
          'We migrate legacy CMS platforms, assets, and users into AEM with minimal downtime.'
      },
      {
        title: 'SEO & Analytics Enablement',
        description:
          'We configure SEO, Adobe Analytics, and third-party tools to optimize visibility and tracking.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide long-term support, monitoring, and enhancements for AEM solutions.',
    cards: [
      {
        title: '24/7 Monitoring & Support',
        description:
          'We monitor uptime, performance, and security for AEM applications.'
      },
      {
        title: 'Upgrades & Patches',
        description:
          'We ensure AEM stays updated with the latest versions, security patches, and Adobe updates.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We optimize caching, CDN, and workflows for consistent performance improvement.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We extend AEM with new components, workflows, and integrations as business needs evolve.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AemContent />
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

export default Aem;
