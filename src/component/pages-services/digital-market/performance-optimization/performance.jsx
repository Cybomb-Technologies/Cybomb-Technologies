import PerformanceContent from './performance-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';

function PerformanceServices() {
  const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We begin by analyzing your system, website, or application to identify bottlenecks and define a performance optimization roadmap.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We review current performance metrics, user behavior, and business goals.'
      },
      {
        title: 'Bottleneck Identification',
        description:
          'We analyze slow-loading areas, database inefficiencies, and system delays.'
      },
      {
        title: 'Strategy Definition',
        description:
          'We outline a clear optimization strategy tailored to your business needs.'
      },
      {
        title: 'Technology Assessment',
        description:
          'We evaluate your tech stack to ensure it supports high performance.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We optimize the user interface and experience to ensure faster loading, smoother navigation, and seamless usability.',
    cards: [
      {
        title: 'Lightweight Design',
        description:
          'We simplify layouts and reduce heavy UI elements for faster rendering.'
      },
      {
        title: 'Responsive Optimization',
        description:
          'We ensure performance consistency across devices and screen sizes.'
      },
      {
        title: 'Image & Asset Compression',
        description:
          'We optimize images, fonts, and assets without losing quality.'
      },
      {
        title: 'Code Refinement',
        description:
          'We clean up CSS, JavaScript, and HTML for efficiency and speed.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We implement backend and frontend performance enhancements to maximize speed and scalability.',
    cards: [
      {
        title: 'Database Optimization',
        description:
          'We fine-tune queries, indexing, and caching for faster data retrieval.'
      },
      {
        title: 'API Performance',
        description:
          'We optimize API calls and responses to reduce latency.'
      },
      {
        title: 'Code Optimization',
        description:
          'We refactor inefficient code for better performance and maintainability.'
      },
      {
        title: 'Scalability Enhancements',
        description:
          'We ensure your system can handle high traffic without downtime.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We rigorously test performance across different environments to ensure reliability under load.',
    cards: [
      {
        title: 'Load Testing',
        description:
          'We simulate high traffic conditions to evaluate system response.'
      },
      {
        title: 'Stress Testing',
        description:
          'We push systems beyond limits to identify breaking points.'
      },
      {
        title: 'Speed Testing',
        description:
          'We measure site speed, page load time, and API response time.'
      },
      {
        title: 'Cross-Platform Testing',
        description:
          'We ensure optimized performance across browsers and devices.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We implement performance improvements into live environments with minimal disruption.',
    cards: [
      {
        title: 'Optimized Rollout',
        description:
          'We deploy enhancements gradually to minimize downtime.'
      },
      {
        title: 'Cloud & CDN Integration',
        description:
          'We integrate CDNs and cloud solutions to boost speed globally.'
      },
      {
        title: 'Monitoring Setup',
        description:
          'We configure monitoring tools to track real-time performance.'
      },
      {
        title: 'Security Alignment',
        description:
          'We ensure performance upgrades comply with security best practices.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide continuous monitoring and fine-tuning to sustain high performance over time.',
    cards: [
      {
        title: 'Real-Time Monitoring',
        description:
          'We track system health, uptime, and performance metrics.'
      },
      {
        title: 'Ongoing Optimization',
        description:
          'We make continuous improvements as your traffic and needs evolve.'
      },
      {
        title: 'Proactive Issue Resolution',
        description:
          'We detect and fix performance issues before they impact users.'
      },
      {
        title: 'Reporting & Insights',
        description:
          'We deliver performance reports with actionable insights and improvements.'
      }
    ]
  }
];

  return (
    <>
      <PerformanceContent/>
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <StillNotSure/>
    </>
  );
}

export default PerformanceServices;
