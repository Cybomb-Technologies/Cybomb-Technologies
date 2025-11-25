import TechConsultingContent from "./tech-consulting-content";
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";


export default function TechConsulting() {
  const metaPropsData = {
  title: "Best Tech consulting & services in chennai | Cybomb MNC",
  description:
    "Cybomb Tech is a global digital and technology services company with AI at its core, delivering cloud, data, and digital solutions for enterprises in Chennai.",
  keyword:
    "Tech Consulting Services in chennai, IT Consulting, Technology Advisory, Digital Transformation Consulting, Cloud Adoption Strategy, IT System Audit, Enterprise Technology Solutions, IT Consulting India",
  url: "https://www.cybomb.com/services/tech-consulting",
  image: "https://www.cybomb.com", 
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We start by analyzing your business challenges and opportunities to craft a tailored technology consulting strategy.',
    cards: [
      {
        title: 'Business Needs Assessment',
        description:
          'We evaluate current processes, systems, and pain points to identify areas where technology can deliver the most value.'
      },
      {
        title: 'Technology Roadmap',
        description:
          'We design a clear roadmap outlining the right digital tools, platforms, and strategies for your business growth.'
      },
      {
        title: 'Cost-Benefit Analysis',
        description:
          'We provide actionable insights on the ROI of adopting new technologies, helping you make informed decisions.'
      },
      {
        title: 'IT Infrastructure Planning',
        description:
          'We align your infrastructure with your business goals, ensuring scalability, efficiency, and reliability.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We deliver consulting on user-centered design to ensure your digital solutions are intuitive and engaging.',
    cards: [
      {
        title: 'UX Research & Strategy',
        description:
          'We analyze user behavior to design digital experiences that are seamless and efficient.'
      },
      {
        title: 'Wireframing & Prototyping',
        description:
          'We consult on low and high-fidelity designs that guide product development effectively.'
      },
      {
        title: 'Accessibility & Usability',
        description:
          'We ensure designs are inclusive and easy to use for diverse audiences.'
      },
      {
        title: 'Brand-Driven Interfaces',
        description:
          'We advise on designs that balance user experience with brand identity.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We provide expert consulting on choosing the right technologies, frameworks, and architectures for development.',
    cards: [
      {
        title: 'Tech Stack Advisory',
        description:
          'We recommend the best frameworks, languages, and tools based on your project requirements.'
      },
      {
        title: 'Cloud & On-Premise Solutions',
        description:
          'We guide you in selecting scalable hosting and infrastructure options tailored to your business.'
      },
      {
        title: 'Integration Strategy',
        description:
          'We consult on seamless integration of APIs, CRMs, ERPs, and third-party applications.'
      },
      {
        title: 'Scalable Architecture Design',
        description:
          'We help design systems capable of handling future growth without performance bottlenecks.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We advise on quality assurance best practices to ensure software reliability and performance.',
    cards: [
      {
        title: 'Test Strategy Development',
        description:
          'We help you define functional, non-functional, and automated testing strategies.'
      },
      {
        title: 'Performance & Load Consulting',
        description:
          'We consult on stress testing to ensure your systems handle peak demand.'
      },
      {
        title: 'Security Testing Advisory',
        description:
          'We guide implementation of testing methods to protect against vulnerabilities.'
      },
      {
        title: 'User Acceptance Testing (UAT)',
        description:
          'We consult on involving stakeholders to validate solutions before launch.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We offer consulting on smooth deployment strategies, ensuring reliability and minimal downtime.',
    cards: [
      {
        title: 'Deployment Planning',
        description:
          'We create rollout strategies for successful software implementation.'
      },
      {
        title: 'CI/CD Pipeline Advisory',
        description:
          'We guide setup of automated workflows for faster, error-free deployments.'
      },
      {
        title: 'Cloud Migration Consulting',
        description:
          'We consult on moving applications and data to cloud platforms securely and efficiently.'
      },
      {
        title: 'Risk & Downtime Management',
        description:
          'We help you plan for contingencies and minimize disruption during deployments.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous consulting on system optimization, upgrades, and IT operations management.',
    cards: [
      {
        title: 'Ongoing IT Support Advisory',
        description:
          'We consult on proactive monitoring and issue resolution strategies.'
      },
      {
        title: 'Upgrade & Patch Management',
        description:
          'We guide businesses on applying timely updates to maintain system security and efficiency.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We consult on strategies to enhance speed, reliability, and scalability of systems.'
      },
      {
        title: 'Strategic IT Growth',
        description:
          'We help align IT systems with evolving business goals for long-term success.'
      }
    ]
  }
];

  return (
    <>
      <TechConsultingContent />
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
