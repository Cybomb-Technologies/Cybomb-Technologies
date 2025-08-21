import SoftwareDevelopmentContent from "./software-dev-content";
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";


export default function SoftwareDev() {
  const metaPropsData = {
  title: "Software Development Services - Cybomb Technologies | Custom Web & Mobile Solutions",
  description:
    "Cybomb Technologies offers comprehensive Software Development Services, delivering high-quality web, mobile, and enterprise applications tailored to your business needs with scalability, performance, and security in mind.",
  keyword:
    "Software Development Services, Custom Software Solutions, Web Application Development, Mobile App Development, Enterprise Software Development, Software Consulting, Software Development India",
  url: "https://www.cybomb.com/services/software-development",
  image: "https://www.cybomb.com", 
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We help you define a clear strategy, roadmap, and technology stack for building scalable software solutions.',
    cards: [
      {
        title: 'Requirement Gathering',
        description:
          'We work with you to understand business objectives, workflows, and end-user needs.'
      },
      {
        title: 'Technology Consultation',
        description:
          'We recommend the right tools, frameworks, and platforms to align with your software goals.'
      },
      {
        title: 'System Architecture Design',
        description:
          'We design scalable architectures, defining integrations, modules, and performance strategies.'
      },
      {
        title: 'Project Planning',
        description:
          'We create detailed timelines, milestones, and allocate the right resources for success.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design intuitive, user-centric interfaces that make software easy to use and visually engaging.',
    cards: [
      {
        title: 'Wireframes & Prototyping',
        description:
          'We build wireframes and interactive prototypes to visualize user journeys and workflows.'
      },
      {
        title: 'Responsive Interfaces',
        description:
          'Our designs work seamlessly across desktops, tablets, and mobile devices.'
      },
      {
        title: 'Custom Software UI',
        description:
          'We create unique, brand-aligned software interfaces tailored to your industry needs.'
      },
      {
        title: 'User Experience Optimization',
        description:
          'We enhance usability, accessibility, and navigation for improved productivity and engagement.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We develop robust, secure, and scalable software solutions using modern programming practices.',
    cards: [
      {
        title: 'Custom Software Development',
        description:
          'We build tailored solutions to automate processes and improve efficiency.'
      },
      {
        title: 'Web & Desktop Applications',
        description:
          'We create high-performance web and desktop software for diverse business needs.'
      },
      {
        title: 'API & System Integration',
        description:
          'We connect your software with third-party tools, CRMs, and ERPs for smooth operations.'
      },
      {
        title: 'Agile Development Process',
        description:
          'We follow agile practices, delivering software in iterations with regular feedback.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure your software is reliable, secure, and performs seamlessly across environments.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We verify all modules and features work according to specifications.'
      },
      {
        title: 'Performance & Load Testing',
        description:
          'We test for speed, responsiveness, and stability under real-world conditions.'
      },
      {
        title: 'Security Testing',
        description:
          'We identify vulnerabilities and ensure your software meets security standards.'
      },
      {
        title: 'User Acceptance Testing',
        description:
          'We validate the software with real users to ensure it meets expectations.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We handle secure and seamless software deployment, ensuring minimal downtime.',
    cards: [
      {
        title: 'Infrastructure Setup',
        description:
          'We configure servers, cloud environments, and databases for smooth deployment.'
      },
      {
        title: 'Version Control & CI/CD',
        description:
          'We use CI/CD pipelines for automated, error-free deployments and updates.'
      },
      {
        title: 'Go-Live Support',
        description:
          'We monitor the release to ensure smooth performance after launch.'
      },
      {
        title: 'Data Migration',
        description:
          'We safely migrate data from legacy systems without disruption.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide ongoing support, updates, and improvements to keep your software running efficiently.',
    cards: [
      {
        title: 'Regular Updates',
        description:
          'We keep your software updated with new features and compatibility improvements.'
      },
      {
        title: 'Bug Fixes & Enhancements',
        description:
          'We resolve issues and continuously enhance functionality based on user needs.'
      },
      {
        title: 'Performance Monitoring',
        description:
          'We monitor system performance and apply optimizations for long-term stability.'
      },
      {
        title: 'Scalability & Future Growth',
        description:
          'We prepare your software for growth with scalable architecture and new integrations.'
      }
    ]
  }
];

  return (
    <>
      <SoftwareDevelopmentContent />
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
