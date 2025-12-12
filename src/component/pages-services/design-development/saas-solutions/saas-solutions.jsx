import SaaSSolutionsContent from "./saas-solutions-content";
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";


export default function SaaSSolutions() {
  const metaPropsData = {
  title: "Saas Application development service in chennai | Cybomb",
  description:
    "Cybomb Tech delivers high-quality end-to-end SaaS app development in Chennai, from user onboarding and customer delight to product-led growth and pricing..",
  keyword:
    "SaaS Solutions, Software as a Service Development in chennai, SaaS Application Development, Cloud SaaS Solutions, Multi-Tenant Applications, SaaS Product Design, SaaS Deployment, SaaS Services India",
  url: "https://www.cybomb.com/services/saas-solutions",
  image: "https://www.cybomb.com", 
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We begin with a strategic consultation to align SaaS solutions with your business model and long-term goals.',
    cards: [
      {
        title: 'Business Requirement Analysis',
        description:
          'We evaluate your needs to design a SaaS solution tailored to your workflows and customer base.'
      },
      {
        title: 'Feasibility & Scalability Planning',
        description:
          'We assess infrastructure, scalability, and cost-effectiveness for long-term growth.'
      },
      {
        title: 'SaaS Architecture Roadmap',
        description:
          'We outline a detailed plan for multi-tenant architecture, integrations, and deployment strategy.'
      },
      {
        title: 'Security & Compliance Strategy',
        description:
          'We ensure SaaS models meet industry compliance standards while maintaining data security.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We create intuitive and responsive SaaS interfaces that deliver seamless user experiences across devices.',
    cards: [
      {
        title: 'Multi-Tenant UI Design',
        description:
          'We design interfaces that serve multiple customers with customizable experiences.'
      },
      {
        title: 'Responsive Dashboards',
        description:
          'We create interactive dashboards optimized for desktops, tablets, and mobile devices.'
      },
      {
        title: 'User Journey Mapping',
        description:
          'We design clear flows to make SaaS onboarding, navigation, and usage simple for end-users.'
      },
      {
        title: 'Brand-Centric Design',
        description:
          'We ensure the SaaS product design reflects your brand identity while staying user-focused.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build scalable SaaS applications with robust architecture, secure APIs, and high performance.',
    cards: [
      {
        title: 'Multi-Tenant Architecture',
        description:
          'We develop scalable SaaS applications that support multiple clients on a shared infrastructure.'
      },
      {
        title: 'Custom Module Development',
        description:
          'We create tailored modules and features based on your SaaS business needs.'
      },
      {
        title: 'API & Third-Party Integrations',
        description:
          'We integrate payment gateways, CRM, ERP, and other tools seamlessly into your SaaS solution.'
      },
      {
        title: 'Cloud-Native Development',
        description:
          'We build SaaS products optimized for AWS, Azure, and Google Cloud for flexibility and performance.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We perform rigorous testing to ensure SaaS platforms are secure, reliable, and user-friendly.',
    cards: [
      {
        title: 'Performance & Load Testing',
        description:
          'We test SaaS platforms under heavy usage to ensure reliability and scalability.'
      },
      {
        title: 'Security Testing',
        description:
          'We validate authentication, authorization, and data protection mechanisms.'
      },
      {
        title: 'Usability Testing',
        description:
          'We ensure interfaces are intuitive and easy to navigate for different user roles.'
      },
      {
        title: 'Integration Testing',
        description:
          'We confirm seamless communication between APIs, databases, and third-party services.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy SaaS applications with smooth rollouts, cloud hosting, and continuous monitoring.',
    cards: [
      {
        title: 'Cloud Deployment',
        description:
          'We host SaaS solutions on secure, scalable cloud platforms like AWS, Azure, or GCP.'
      },
      {
        title: 'Containerization & CI/CD',
        description:
          'We use Docker, Kubernetes, and CI/CD pipelines for automated deployments and updates.'
      },
      {
        title: 'Data Migration',
        description:
          'We securely migrate existing data into your new SaaS environment with minimal downtime.'
      },
      {
        title: 'Multi-Region Setup',
        description:
          'We deploy SaaS across regions to enhance speed, availability, and redundancy.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous support, monitoring, and upgrades to keep SaaS solutions running efficiently.',
    cards: [
      {
        title: '24/7 Monitoring',
        description:
          'We monitor SaaS performance, uptime, and security around the clock.'
      },
      {
        title: 'Regular Feature Updates',
        description:
          'We roll out updates and improvements to ensure the SaaS stays competitive.'
      },
      {
        title: 'Bug Fixes & Optimization',
        description:
          'We provide quick fixes and performance optimization to maintain reliability.'
      },
      {
        title: 'Scalability Management',
        description:
          'We help scale resources as your user base grows, ensuring uninterrupted service.'
      }
    ]
  }
];

  return (
    <>
      <SaaSSolutionsContent />
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure/>
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
