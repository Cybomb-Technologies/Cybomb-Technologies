import PpcContent from './pay-per-clicks-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';

function PpcServices() {
  const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We start with a deep analysis of your business goals, audience, and competition to craft a PPC strategy that drives results.',
    cards: [
      {
        title: 'Goal Setting',
        description:
          'We define campaign objectives—whether it’s lead generation, sales, or brand awareness.'
      },
      {
        title: 'Audience Research',
        description:
          'We analyze your target audience demographics, interests, and online behavior for accurate targeting.'
      },
      {
        title: 'Competitor Analysis',
        description:
          'We research competitor campaigns to identify opportunities and create a competitive edge.'
      },
      {
        title: 'Budget Planning',
        description:
          'We recommend budget allocation to maximize ROI across Google Ads, Bing Ads, and social platforms.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'Our PPC ad design focuses on attracting attention and driving clicks with engaging visuals and messaging.',
    cards: [
      {
        title: 'Ad Copywriting',
        description:
          'We craft compelling ad copies with strong CTAs that resonate with your audience.'
      },
      {
        title: 'Landing Page Design',
        description:
          'We design optimized landing pages to improve conversions and minimize bounce rates.'
      },
      {
        title: 'A/B Testing Designs',
        description:
          'We create variations of ads and landing pages to identify what delivers the best performance.'
      },
      {
        title: 'Mobile-Friendly Ads',
        description:
          'We ensure ads and landing experiences are fully optimized for mobile users.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We set up and configure PPC campaigns across multiple platforms to ensure precise targeting and tracking.',
    cards: [
      {
        title: 'Campaign Setup',
        description:
          'We configure Google Ads, Bing Ads, and social campaigns tailored to your business needs.'
      },
      {
        title: 'Keyword Targeting',
        description:
          'We select high-performing keywords with optimal search intent for better ad relevance.'
      },
      {
        title: 'Ad Extensions',
        description:
          'We implement site links, call buttons, and other extensions to boost ad visibility.'
      },
      {
        title: 'Conversion Tracking',
        description:
          'We set up tracking pixels and analytics to monitor campaign success in real time.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We run multiple tests to ensure your PPC campaigns deliver maximum performance and conversions.',
    cards: [
      {
        title: 'A/B Split Testing',
        description:
          'We test different versions of ads and landing pages to find the most effective combinations.'
      },
      {
        title: 'CTR Optimization',
        description:
          'We analyze click-through rates to refine ad headlines, descriptions, and CTAs.'
      },
      {
        title: 'Quality Score Analysis',
        description:
          'We test and improve quality scores for better ad rankings at lower costs.'
      },
      {
        title: 'Conversion Rate Testing',
        description:
          'We experiment with landing page elements to boost lead generation and sales.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We launch PPC campaigns with precise targeting and real-time monitoring for fast results.',
    cards: [
      {
        title: 'Campaign Launch',
        description:
          'We deploy PPC campaigns across Google, Bing, and social platforms with optimized settings.'
      },
      {
        title: 'Geo-Targeting',
        description:
          'We launch location-specific campaigns to reach the right audience at the right place.'
      },
      {
        title: 'Device Targeting',
        description:
          'We fine-tune ad delivery for desktops, tablets, and mobile users for maximum reach.'
      },
      {
        title: 'Bid Strategy Execution',
        description:
          'We implement automated and manual bidding strategies to maximize ROI.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We continuously optimize PPC campaigns to ensure consistent growth and cost efficiency.',
    cards: [
      {
        title: 'Ongoing Optimization',
        description:
          'We monitor performance and adjust keywords, bids, and targeting regularly.'
      },
      {
        title: 'Ad Refresh',
        description:
          'We update creatives, ad copies, and landing pages to avoid audience fatigue.'
      },
      {
        title: 'Budget Reallocation',
        description:
          'We reallocate ad spend towards the highest-performing campaigns and platforms.'
      },
      {
        title: 'Monthly Reporting',
        description:
          'We provide detailed reports with insights, performance metrics, and improvement strategies.'
      }
    ]
  }
];

  return (
    <>
      <PpcContent/>
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

export default PpcServices;
