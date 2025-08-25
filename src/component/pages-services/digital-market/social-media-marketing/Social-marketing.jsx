import SocialContent from './social-market-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import AgileProcess1 from '../../../common-ui/agile-process/agile-process1';

function SocialMarket() {
  const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We begin by crafting a tailored social media marketing strategy that aligns with your brand objectives and audience.',
    cards: [
      {
        title: 'Audience Research',
        description:
          'We analyze your target demographics, behaviors, and preferences to shape campaigns.'
      },
      {
        title: 'Platform Selection',
        description:
          'We identify the most effective platforms (Facebook, Instagram, LinkedIn, etc.) for your brand.'
      },
      {
        title: 'Competitor Benchmarking',
        description:
          'We study your competitors’ strategies to find opportunities for differentiation.'
      },
      {
        title: 'Campaign Roadmap',
        description:
          'We design a clear, step-by-step plan for achieving your social media goals.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We create engaging and visually appealing content designs that resonate with your audience.',
    cards: [
      {
        title: 'Creative Content Design',
        description:
          'We craft eye-catching graphics, posts, and stories optimized for each platform.'
      },
      {
        title: 'Brand Consistency',
        description:
          'We maintain consistent brand identity across all social media channels.'
      },
      {
        title: 'Interactive Posts',
        description:
          'We design polls, quizzes, and engagement-driven creatives for user interaction.'
      },
      {
        title: 'Ad Creatives',
        description:
          'We produce conversion-focused visuals and copy for sponsored campaigns.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We implement strategies and tools that drive engagement, growth, and conversions.',
    cards: [
      {
        title: 'Content Calendar',
        description:
          'We schedule and organize posts for consistent engagement.'
      },
      {
        title: 'Hashtag Strategy',
        description:
          'We develop keyword-rich hashtags to boost discoverability.'
      },
      {
        title: 'Community Management',
        description:
          'We respond to comments, messages, and build strong audience relationships.'
      },
      {
        title: 'Ad Campaign Setup',
        description:
          'We configure paid ad campaigns tailored to your goals and budget.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We monitor campaigns and test different strategies to maximize ROI.',
    cards: [
      {
        title: 'A/B Testing',
        description:
          'We test different ad creatives, captions, and formats to find what works best.'
      },
      {
        title: 'Engagement Analysis',
        description:
          'We track likes, shares, comments, and reach for campaign evaluation.'
      },
      {
        title: 'Audience Insights',
        description:
          'We assess user interactions to refine strategies and improve results.'
      },
      {
        title: 'Performance Tracking',
        description:
          'We use analytics to measure reach, impressions, and conversion rates.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We roll out campaigns across selected platforms for maximum visibility and engagement.',
    cards: [
      {
        title: 'Content Publishing',
        description:
          'We post curated content at the right time for higher engagement.'
      },
      {
        title: 'Ad Launch',
        description:
          'We launch paid ad campaigns optimized for reach, clicks, or conversions.'
      },
      {
        title: 'Cross-Platform Distribution',
        description:
          'We share and adapt content across multiple social platforms.'
      },
      {
        title: 'Hashtag & Trend Integration',
        description:
          'We align campaigns with trending topics and hashtags for more visibility.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We continuously monitor and refine your social media campaigns to ensure consistent growth.',
    cards: [
      {
        title: 'Ongoing Analytics',
        description:
          'We provide reports on engagement, follower growth, and conversions.'
      },
      {
        title: 'Content Refresh',
        description:
          'We update posts, visuals, and strategies to match trends and audience needs.'
      },
      {
        title: 'Ad Optimization',
        description:
          'We fine-tune ad campaigns for better ROI and reduced costs.'
      },
      {
        title: 'Community Growth',
        description:
          'We help build an active and loyal follower base around your brand.'
      }
    ]
  }
];

  return (
    <>
      <SocialContent/>
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

export default SocialMarket;
