import SeoContent from './Seo-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';

function SeoServices() {
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We start by understanding your business goals, target audience, and competitors to create a tailored SEO roadmap.',
    cards: [
      {
        title: 'SEO Audit',
        description:
          'We analyze your website structure, content, and current performance metrics.'
      },
      {
        title: 'Keyword Research',
        description:
          'We identify high-value keywords to drive targeted traffic and visibility.'
      },
      {
        title: 'Competitor Analysis',
        description:
          'We review your competitors’ strategies to uncover opportunities for growth.'
      },
      {
        title: 'SEO Strategy Planning',
        description:
          'We design a customized SEO roadmap aligned with your business objectives.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We optimize your website design and structure to ensure search engines and users can easily navigate and engage.',
    cards: [
      {
        title: 'Mobile Optimization',
        description:
          'We ensure your site is responsive and SEO-friendly across devices.'
      },
      {
        title: 'Page Speed Optimization',
        description:
          'We improve loading times for a better user experience and rankings.'
      },
      {
        title: 'SEO-Friendly Structure',
        description:
          'We organize content with clear navigation and proper hierarchy.'
      },
      {
        title: 'Content Readability',
        description:
          'We refine layout and design for improved user engagement.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We implement technical SEO best practices to ensure your website is optimized for search engines.',
    cards: [
      {
        title: 'On-Page SEO',
        description:
          'We optimize meta tags, headings, and URLs for better rankings.'
      },
      {
        title: 'Schema Markup',
        description:
          'We add structured data to improve search engine understanding.'
      },
      {
        title: 'Internal Linking',
        description:
          'We build logical link structures to enhance navigation and crawlability.'
      },
      {
        title: 'Technical Fixes',
        description:
          'We resolve broken links, redirects, and indexation issues.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We rigorously test SEO implementations to ensure accuracy and performance across platforms.',
    cards: [
      {
        title: 'Crawl Testing',
        description:
          'We check how search engines index and crawl your website.'
      },
      {
        title: 'Mobile SEO Testing',
        description:
          'We verify mobile responsiveness and mobile-first indexing readiness.'
      },
      {
        title: 'Page Performance Testing',
        description:
          'We test site speed, Core Web Vitals, and optimization levels.'
      },
      {
        title: 'SEO Validation',
        description:
          'We ensure meta tags, keywords, and structured data are correctly implemented.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We roll out SEO changes and enhancements across your live website carefully to avoid disruptions.',
    cards: [
      {
        title: 'Optimized Launch',
        description:
          'We implement SEO improvements without affecting site performance.'
      },
      {
        title: 'Content Publishing',
        description:
          'We publish keyword-rich, optimized content for better search visibility.'
      },
      {
        title: 'Search Console Setup',
        description:
          'We configure Google Search Console for ongoing monitoring.'
      },
      {
        title: 'Analytics Integration',
        description:
          'We set up tracking tools to measure SEO performance effectively.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We continuously monitor rankings, traffic, and performance to ensure long-term SEO success.',
    cards: [
      {
        title: 'Rank Tracking',
        description:
          'We monitor keyword rankings and adjust strategies as needed.'
      },
      {
        title: 'Content Updates',
        description:
          'We refresh and optimize content to maintain relevance and rankings.'
      },
      {
        title: 'Ongoing Link Building',
        description:
          'We build high-quality backlinks to strengthen domain authority.'
      },
      {
        title: 'Performance Reports',
        description:
          'We provide detailed SEO reports with insights and growth opportunities.'
      }
    ]
  }
];


  return (
    <>
      <SeoContent/>
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

export default SeoServices;
