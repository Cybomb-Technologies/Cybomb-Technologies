import WebDevContent from "./web-dev-content";
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";



export default function WebDev() {
  const metaPropsData = {
  title: "Website Development Services in Chennai | Custom & Responsive Web Solutions - Cybomb",
  description:
    "Cybomb Technologies offers Website Development Services to build fast, secure, and fully responsive websites. We deliver custom designs, seamless functionality, and optimized performance for businesses of all sizes.",
  keyword:
    "Website Development Services, Custom Website Design, Responsive Web Development, Web Application Development, Business Website Development, Ecommerce Website Development, Website Development India",
  url: "https://www.cybomb.com/services/web-development",
  image: "https://www.cybomb.com/images/logo-11.png", 
};

const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We help you plan a successful web presence with the right strategy, technology stack, and roadmap.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We understand your business needs, target audience, and goals to shape the perfect web solution.'
      },
      {
        title: 'Technology Consultation',
        description:
          'We guide you in choosing the best frameworks, CMS, and tools that align with your project requirements.'
      },
      {
        title: 'Project Architecture',
        description:
          'We create a structured roadmap, defining workflows, integrations, and scalability for long-term growth.'
      },
      {
        title: 'Resource Planning',
        description:
          'We allocate the right designers, developers, and tools to ensure timely delivery and efficiency.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design engaging, user-friendly, and visually appealing web interfaces tailored to your brand.',
    cards: [
      {
        title: 'Wireframes & Prototypes',
        description:
          'We design layouts and interactive prototypes to define user journeys and test usability early.'
      },
      {
        title: 'Responsive Design',
        description:
          'Our designs adapt seamlessly across desktops, tablets, and smartphones for a unified experience.'
      },
      {
        title: 'Brand-Aligned Visuals',
        description:
          'We create modern, consistent designs with your brand colors, typography, and identity.'
      },
      {
        title: 'User Experience Enhancements',
        description:
          'We focus on navigation, accessibility, and clarity to deliver intuitive experiences.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build fast, scalable, and secure web applications using modern technologies and coding practices.',
    cards: [
      {
        title: 'Frontend Development',
        description:
          'We code responsive, pixel-perfect interfaces using frameworks like React, Angular, or Vue.'
      },
      {
        title: 'Backend Development',
        description:
          'Our team builds robust APIs, databases, and server-side logic to power your web application.'
      },
      {
        title: 'CMS Integration',
        description:
          'We implement CMS solutions like WordPress, Drupal, or headless CMS for easy content management.'
      },
      {
        title: 'E-Commerce Solutions',
        description:
          'We create secure and scalable online stores with smooth checkout, payment gateways, and inventory management.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure your website is bug-free, secure, and optimized for performance across all platforms.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We verify every feature to ensure it works exactly as intended.'
      },
      {
        title: 'Usability & Accessibility',
        description:
          'We test user flows and accessibility compliance for a smooth experience for all users.'
      },
      {
        title: 'Performance Testing',
        description:
          'We check site speed, load handling, and responsiveness under different conditions.'
      },
      {
        title: 'Cross-Browser & Device Testing',
        description:
          'We ensure your website works consistently across all browsers and devices.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We launch your website with a smooth, secure, and optimized go-live process.',
    cards: [
      {
        title: 'Hosting & Server Setup',
        description:
          'We configure the best hosting environment for performance and security.'
      },
      {
        title: 'Domain & SSL Configuration',
        description:
          'We set up domains, SSL certificates, and DNS to secure and authenticate your site.'
      },
      {
        title: 'Go-Live Monitoring',
        description:
          'We monitor the launch to ensure everything runs smoothly without downtime.'
      },
      {
        title: 'Backup & Rollback Plan',
        description:
          'We set up backups and rollback strategies for safe deployments.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide ongoing support, updates, and improvements to keep your website running flawlessly.',
    cards: [
      {
        title: 'Regular Updates',
        description:
          'We keep your website, plugins, and frameworks up to date for performance and security.'
      },
      {
        title: 'Bug Fixes & Enhancements',
        description:
          'We resolve issues and improve features based on evolving needs.'
      },
      {
        title: 'Security Monitoring',
        description:
          'We continuously monitor threats and apply patches to safeguard your site.'
      },
      {
        title: 'Scalability & Future Growth',
        description:
          'We prepare your website for future expansion with performance and feature upgrades.'
      }
    ]
  }
];

  return (
    <>
      <WebDevContent />
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
