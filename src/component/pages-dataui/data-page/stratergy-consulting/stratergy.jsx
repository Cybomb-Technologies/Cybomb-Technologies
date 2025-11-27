import Stratergycontent from "./stratergy-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function StratergyServices() {
  const metaPropsData = {
    title: "Strategy Services - Cybomb Technologies | Business & IT Strategy Solutions",
    description:
      "Cybomb Technologies provides expert strategy services, aligning business objectives with innovative technology solutions for sustainable growth and success.",
    keyword:
      "Business Strategy, IT Strategy, Digital Transformation, Strategic Planning, Technology Roadmap, Cybomb Technologies",
    url: "https://www.cybomb.com/services/stratergy-consulting",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Strategic Planning',
    description:
      'We collaborate with you to define a clear roadmap that aligns with your vision, objectives, and market opportunities.',
    cards: [
      {
        title: 'Vision & Mission Alignment',
        description:
          'We ensure your organizational goals and values are aligned with market realities.'
      },
      {
        title: 'Goal Setting',
        description:
          'We help define measurable objectives and key results (OKRs) for success.'
      },
      {
        title: 'Roadmap Development',
        description:
          'We create phased strategic roadmaps that balance short-term wins with long-term growth.'
      },
      {
        title: 'Stakeholder Engagement',
        description:
          'We align stakeholders to ensure buy-in and seamless execution of strategies.'
      }
    ]
  },
  {
    id: 'market',
    title: 'Market',
    description:
      'We provide deep market insights and competitor benchmarking to guide data-driven decisions.',
    cards: [
      {
        title: 'Industry Research',
        description:
          'We analyze emerging trends, disruptions, and opportunities in your sector.'
      },
      {
        title: 'Competitor Benchmarking',
        description:
          'We identify strengths and weaknesses relative to competitors.'
      },
      {
        title: 'Customer Insights',
        description:
          'We uncover customer behavior, preferences, and unmet needs.'
      },
      {
        title: 'Growth Opportunities',
        description:
          'We identify expansion areas, partnerships, and untapped markets.'
      }
    ]
  },
  {
    id: 'transformation',
    title: 'Transformation',
    description:
      'We guide organizations through operational, digital, and organizational transformations.',
    cards: [
      {
        title: 'Operational Efficiency',
        description:
          'We optimize processes to reduce costs and increase agility.'
      },
      {
        title: 'Digital Transformation',
        description:
          'We help integrate digital tools and automation for business evolution.'
      },
      {
        title: 'Change Management',
        description:
          'We ensure smooth adoption of new strategies across teams and functions.'
      },
      {
        title: 'Organizational Restructuring',
        description:
          'We redesign structures to align with growth and market demands.'
      }
    ]
  },
  {
    id: 'technology',
    title: 'Technology',
    description:
      'We align technology adoption with business goals to maximize value creation.',
    cards: [
      {
        title: 'IT Strategy Alignment',
        description:
          'We align IT initiatives with business strategies for growth.'
      },
      {
        title: 'Cloud & AI Integration',
        description:
          'We identify how cloud, AI, and emerging technologies fit into your roadmap.'
      },
      {
        title: 'Innovation Enablement',
        description:
          'We foster a culture of innovation to stay ahead of disruption.'
      },
      {
        title: 'Vendor & Tools Selection',
        description:
          'We guide technology investments to ensure scalability and ROI.'
      }
    ]
  },
  {
    id: 'risk',
    title: "Compliance",
    description:
      'We help you identify, assess, and mitigate risks while ensuring regulatory compliance.',
    cards: [
      {
        title: 'Risk Assessment',
        description:
          'We evaluate financial, operational, and reputational risks.'
      },
      {
        title: 'Compliance Frameworks',
        description:
          'We ensure adherence to industry regulations and standards.'
      },
      {
        title: 'Crisis Management',
        description:
          'We develop proactive response strategies to manage business crises.'
      },
      {
        title: 'Governance Models',
        description:
          'We design governance frameworks for accountability and transparency.'
      }
    ]
  },
  {
    id: 'improvement',
    title: 'Improvement',
    description:
      'We ensure strategies evolve with your business through ongoing evaluation and refinement.',
    cards: [
      {
        title: 'Performance Tracking',
        description:
          'We monitor KPIs and outcomes against strategic goals.'
      },
      {
        title: 'Feedback Loops',
        description:
          'We integrate stakeholder and customer feedback for iterative improvement.'
      },
      {
        title: 'Agile Adjustments',
        description:
          'We adapt strategies quickly to market changes and disruptions.'
      },
      {
        title: 'Sustainable Growth',
        description:
          'We embed long-term value creation into your strategic model.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <Stratergycontent />
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

export default StratergyServices;
