import BespokeDevContent from './bespoke-dev-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';
import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';



export default function BespokeDev() {
  const metaPropsData = {
  title: "Bespoke Development Services - Cybomb Technologies | Custom Software Solutions",
  description:
    "Cybomb Technologies provides Bespoke Development Services tailored to your business needs. We design and develop custom web, mobile, and enterprise applications that deliver scalability, performance, and competitive advantage.",
  keyword:
    "Bespoke Development Services, Custom Software Development, Tailored Web Applications, Bespoke Mobile App Development, Enterprise Software Solutions, Custom Application Design, Bespoke Software India",
  url: "https://www.cybomb.com/services/bespoke-development",
  image: "https://www.cybomb.com", 
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We begin by understanding your unique business requirements and defining a tailored development strategy.',
    cards: [
      {
        title: 'Requirement Gathering',
        description:
          'We collaborate closely to understand your objectives, workflows, and specific challenges.'
      },
      {
        title: 'Custom Strategy',
        description:
          'We design a personalized development roadmap aligned with your vision and business goals.'
      },
      {
        title: 'Technology Selection',
        description:
          'We identify the right tech stack, frameworks, and tools to suit your bespoke solution.'
      },
      {
        title: 'Project Roadmap',
        description:
          'We set milestones, timelines, and deliverables for a smooth and transparent process.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We create user-centric, visually appealing, and functional designs that perfectly align with your brand identity.',
    cards: [
      {
        title: 'Custom UI Design',
        description:
          'We craft unique interfaces that reflect your brand and improve usability.'
      },
      {
        title: 'Interactive Prototypes',
        description:
          'We build prototypes to visualize and validate user journeys before development.'
      },
      {
        title: 'Personalized Experiences',
        description:
          'Our designs are optimized for accessibility, engagement, and your audience’s needs.'
      },
      {
        title: 'User Journey Mapping',
        description:
          'We structure seamless flows tailored to the way your users interact with your business.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We deliver tailor-made solutions built from the ground up to match your exact business requirements.',
    cards: [
      {
        title: 'Custom Software Development',
        description:
          'We build scalable, secure, and unique applications tailored to your workflows.'
      },
      {
        title: 'Integration Services',
        description:
          'We connect bespoke solutions with your existing systems for seamless operations.'
      },
      {
        title: 'Cross-Platform Development',
        description:
          'We create applications that work across web, mobile, and desktop environments.'
      },
      {
        title: 'Agile Development Process',
        description:
          'We use agile practices to ensure flexibility, transparency, and faster delivery.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We conduct comprehensive testing to ensure your custom solution is reliable, secure, and high-performing.',
    cards: [
      {
        title: 'Functional Testing',
        description:
          'We verify every feature works as intended and aligns with your requirements.'
      },
      {
        title: 'Performance Testing',
        description:
          'We test scalability, speed, and stability under varying workloads.'
      },
      {
        title: 'Security Audits',
        description:
          'We perform detailed vulnerability assessments to safeguard your data and users.'
      },
      {
        title: 'User Acceptance Testing',
        description:
          'We validate the solution with real users to guarantee usability and satisfaction.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We ensure seamless delivery and implementation of your bespoke solution into your business ecosystem.',
    cards: [
      {
        title: 'Cloud & On-Premise Setup',
        description:
          'We deploy solutions based on your preferred environment and infrastructure.'
      },
      {
        title: 'Configuration & Optimization',
        description:
          'We fine-tune performance, integrations, and scalability for smooth operations.'
      },
      {
        title: 'Rollout Support',
        description:
          'We provide step-by-step guidance during go-live to ensure a successful launch.'
      },
      {
        title: 'Documentation & Training',
        description:
          'We provide detailed documentation and training sessions for easy adoption.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous support, enhancements, and optimizations to keep your bespoke solution future-ready.',
    cards: [
      {
        title: 'Ongoing Support',
        description:
          'We address technical issues and provide timely fixes to ensure uninterrupted use.'
      },
      {
        title: 'Upgrades & Enhancements',
        description:
          'We add new features and improvements to match your evolving needs.'
      },
      {
        title: 'Monitoring & Optimization',
        description:
          'We monitor performance and optimize systems for long-term efficiency.'
      },
      {
        title: 'Scalability Planning',
        description:
          'We future-proof your solution by preparing for business growth and new requirements.'
      }
    ]
  }
];

  return (
    <>
      
      <BespokeDevContent />
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
