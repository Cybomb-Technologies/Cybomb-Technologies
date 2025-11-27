import SharePointContent from "./sharepoint-content";
import Metatags from "../../../../../SEO/meta-tags";
import AgileProcess1 from "../../../../common-ui/agile-process/agile-process1";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
function SharePoint() {
  const metaPropsData = {
    title:
      "SharePoint Development Services - Cybomb Technologies | Collaboration & Intranet Solutions",
    description:
      "Cybomb Technologies provides expert SharePoint development services, offering customized intranet portals, document management systems, workflow automation, and enterprise collaboration solutions.",
    keyword:
      "SharePoint Development, SharePoint Intranet, Document Management, Workflow Automation, Enterprise Collaboration, Cybomb Technologies, SharePoint Solutions, Microsoft SharePoint",
    url: "https://www.cybomb.com/services/sharepoint-development",
    image: "https://www.cybomb.com/images/logo-11.png",
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We help organizations define a clear roadmap for implementing, customizing, or migrating SharePoint solutions.',
    cards: [
      {
        title: 'Requirement Gathering',
        description:
          'We analyze business needs to determine the right SharePoint architecture and features.'
      },
      {
        title: 'Information Architecture',
        description:
          'We plan site structures, document libraries, and workflows for efficiency and scalability.'
      },
      {
        title: 'Governance Strategy',
        description:
          'We establish security, compliance, and content management policies for SharePoint use.'
      },
      {
        title: 'Integration Planning',
        description:
          'We define strategies for integrating SharePoint with Microsoft 365, Teams, CRMs, and third-party apps.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design modern, user-centric SharePoint sites that improve collaboration and accessibility.',
    cards: [
      {
        title: 'Custom SharePoint Themes',
        description:
          'We create branded designs aligned with corporate identity using modern SharePoint frameworks.'
      },
      {
        title: 'Responsive Design',
        description:
          'We ensure seamless usability across desktop, mobile, and tablet devices.'
      },
      {
        title: 'User Experience Mapping',
        description:
          'We optimize navigation, site hierarchy, and workflows for intuitive usage.'
      },
      {
        title: 'Accessibility & Compliance',
        description:
          'We design inclusive sites that comply with WCAG and organizational standards.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build robust SharePoint solutions for intranet portals, collaboration, content management, and enterprise workflows.',
    cards: [
      {
        title: 'Custom SharePoint Apps',
        description:
          'We develop tailored apps and web parts to extend SharePoint capabilities.'
      },
      {
        title: 'Workflow Automation',
        description:
          'We create Power Automate flows and SharePoint workflows for process efficiency.'
      },
      {
        title: 'Integration Solutions',
        description:
          'We integrate SharePoint with Microsoft Teams, Outlook, Dynamics 365, and external systems.'
      },
      {
        title: 'Document & Knowledge Management',
        description:
          'We implement centralized libraries, metadata tagging, and search optimization.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure the SharePoint solution is secure, scalable, and delivers a seamless user experience.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We validate SharePoint features, workflows, and integrations for smooth operations.'
      },
      {
        title: 'Security Testing',
        description:
          'We ensure role-based access control, compliance policies, and secure authentication.'
      },
      {
        title: 'Cross-platform Validation',
        description:
          'We test site performance across Microsoft 365 apps, browsers, and devices.'
      },
      {
        title: 'Performance & Load Testing',
        description:
          'We validate system performance under real-world usage conditions.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We manage seamless deployment and rollout of SharePoint solutions across the organization.',
    cards: [
      {
        title: 'SharePoint Online & On-Prem Setup',
        description:
          'We configure SharePoint in Microsoft 365 cloud or on-premises environments.'
      },
      {
        title: 'Data Migration',
        description:
          'We migrate content from legacy systems, file servers, or older SharePoint versions.'
      },
      {
        title: 'User Training',
        description:
          'We provide workshops and resources to onboard users effectively.'
      },
      {
        title: 'Change Management',
        description:
          'We support organizational adoption and ensure smooth transition.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous monitoring, support, and optimization for SharePoint environments.',
    cards: [
      {
        title: '24/7 Monitoring & Support',
        description:
          'We ensure SharePoint sites remain highly available and secure.'
      },
      {
        title: 'Version & Security Updates',
        description:
          'We apply patches, feature updates, and Microsoft 365 improvements regularly.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We fine-tune workflows, search, and integrations for efficiency.'
      },
      {
        title: 'Ongoing Enhancements',
        description:
          'We roll out new features and improvements as business needs evolve.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <SharePointContent />
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

export default SharePoint;
