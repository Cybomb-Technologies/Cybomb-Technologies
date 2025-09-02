import SitecoreContent from "./sitecore-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
function Sitecore() {
  const metaPropsData = {
    title:
      "Sitecore Development Services - Cybomb Technologies | CMS Solutions",
    description:
      "Cybomb Technologies provides expert Sitecore development services, including CMS implementation, customization, integration, and support. Enhance your digital experience with scalable and secure Sitecore solutions.",
    keyword:
      "Sitecore Development, Sitecore CMS, Sitecore Integration, Sitecore Customization, Digital Experience Platform, Cybomb Technologies, Enterprise CMS Solutions",
    url: "https://www.cybomb.com/services/sitecore-development",
    image: "https://www.cybomb.com/images/logo-11.png", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We help enterprises define a tailored roadmap for Sitecore implementation, upgrades, and integrations.',
    cards: [
      {
        title: 'Business Requirement Analysis',
        description:
          'We evaluate business goals, digital experience needs, and personalization requirements.'
      },
      {
        title: 'Architecture Planning',
        description:
          'We design scalable Sitecore architecture that aligns with enterprise workflows.'
      },
      {
        title: 'Content Strategy',
        description:
          'We define structured content models, taxonomies, and governance for consistency.'
      },
      {
        title: 'Integration Roadmap',
        description:
          'We plan seamless connections with CRM, ERP, eCommerce, and third-party systems.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We craft engaging, personalized user experiences powered by Sitecore’s experience platform.',
    cards: [
      {
        title: 'Custom Templates & Layouts',
        description:
          'We design flexible, branded Sitecore components for reusability and scalability.'
      },
      {
        title: 'Responsive Design',
        description:
          'We deliver cross-device optimized designs for mobile, tablet, and desktop users.'
      },
      {
        title: 'Personalization Strategy',
        description:
          'We map user journeys and design tailored experiences using Sitecore Experience Platform.'
      },
      {
        title: 'Accessibility Standards',
        description:
          'We ensure WCAG compliance and inclusivity across digital experiences.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We develop robust Sitecore solutions to deliver personalized, scalable, and enterprise-grade experiences.',
    cards: [
      {
        title: 'Custom Module Development',
        description:
          'We build custom Sitecore modules to extend platform functionality.'
      },
      {
        title: 'Headless & JAMstack',
        description:
          'We implement Sitecore with headless CMS architecture using Next.js or React.'
      },
      {
        title: 'Integration Services',
        description:
          'We connect Sitecore with Salesforce, Microsoft Dynamics, ERP, and marketing automation tools.'
      },
      {
        title: 'Content & Campaign Management',
        description:
          'We implement workflows, analytics, and A/B testing for marketing teams.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure the Sitecore implementation is reliable, secure, and delivers seamless digital experiences.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We validate templates, workflows, personalization, and integrations.'
      },
      {
        title: 'Security & Compliance',
        description:
          'We test authentication, role-based access, and GDPR/CCPA compliance.'
      },
      {
        title: 'Cross-browser & Device Testing',
        description:
          'We ensure consistent experiences across platforms and environments.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We validate caching, CDNs, and scalability under high traffic loads.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We manage smooth deployment and rollout of Sitecore solutions across enterprise environments.',
    cards: [
      {
        title: 'Sitecore Cloud & On-Prem Setup',
        description:
          'We configure Sitecore on Azure, Sitecore Managed Cloud, or on-premise environments.'
      },
      {
        title: 'Content Migration',
        description:
          'We migrate legacy CMS content into Sitecore while preserving SEO and data integrity.'
      },
      {
        title: 'CI/CD Pipeline Setup',
        description:
          'We implement automated deployments for faster and safer release cycles.'
      },
      {
        title: 'User Enablement',
        description:
          'We train business teams on content management, analytics, and personalization tools.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous monitoring, optimization, and enhancements for Sitecore platforms.',
    cards: [
      {
        title: '24/7 Support & Monitoring',
        description:
          'We ensure uptime, security, and proactive incident resolution.'
      },
      {
        title: 'Upgrades & Patching',
        description:
          'We apply Sitecore version updates, bug fixes, and security patches.'
      },
      {
        title: 'Performance Tuning',
        description:
          'We optimize caching, search indexing, and personalization rules for efficiency.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We continuously add new modules and integrations to evolve the platform.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <SitecoreContent />
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

export default Sitecore;
