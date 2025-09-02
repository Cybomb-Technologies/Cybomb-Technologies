import ShopifyContent from './shopify-content';
import Metatags from '../../../../../SEO/meta-tags';
import AgileProcess1 from '../../../../common-ui/agile-process/agile-process1';
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";

function Shopify() {
  const metaPropsData = {
  title: "Shopify Development Services - Cybomb Technologies | Custom E-Commerce Store Solutions",
  description:
    "Cybomb Technologies offers Shopify development services to create stunning, secure, and high-converting online stores. We provide custom theme design, app integration, migration, and optimization for e-commerce success.",
  keyword:
    "Shopify Development Services, Shopify Store Setup, Shopify Theme Customization, Shopify App Integration, Shopify E-Commerce Development, Shopify Migration, Shopify Development India",
  url: "https://www.cybomb.com/Services/shopify",
  image: "https://www.cybomb.com", 
};
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Strategy',
    description:
      'We define a clear strategy to align your business objectives with Shopify’s app ecosystem, ensuring scalable and high-performing apps for merchants.',
    cards: [
      {
        title: 'Requirement Analysis',
        description:
          'We gather business needs and identify merchant pain points to design the right Shopify app solution.'
      },
      {
        title: 'App Roadmap',
        description:
          'We create a phased roadmap for features, integrations, and publishing to the Shopify App Store.'
      },
      {
        title: 'Feature Prioritization',
        description:
          'We plan MVP features first and then expand to advanced functionalities for continuous value delivery.'
      },
      {
        title: 'Tech Stack Planning',
        description:
          'We design app architecture with Shopify APIs, GraphQL, Node.js, React, and secure backends.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design simple, intuitive, and merchant-friendly interfaces that integrate seamlessly into the Shopify Admin.',
    cards: [
      {
        title: 'Wireframing & Prototyping',
        description:
          'We create interactive prototypes to map workflows and user journeys for Shopify merchants.'
      },
      {
        title: 'Admin-focused UI',
        description:
          'We design clean, consistent interfaces optimized for Shopify’s Polaris design system.'
      },
      {
        title: 'Custom Components',
        description:
          'We develop reusable and branded UI elements for engaging merchant experiences.'
      },
      {
        title: 'Responsive Layouts',
        description:
          'We ensure apps adapt perfectly across desktops, tablets, and mobile devices.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build custom Shopify apps using modern frameworks, robust APIs, and secure architectures for global merchants.',
    cards: [
      {
        title: 'Custom App Development',
        description:
          'We develop bespoke private and public apps tailored to your business needs.'
      },
      {
        title: 'API & Integration Development',
        description:
          'We integrate Shopify apps with third-party platforms like CRMs, ERPs, and marketing tools.'
      },
      {
        title: 'Embedded App Experiences',
        description:
          'We build embedded apps with Shopify Polaris for seamless Admin panel integration.'
      },
      {
        title: 'Scalable Architecture',
        description:
          'We design apps using secure, scalable technologies like Node.js, GraphQL, and AWS.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure every Shopify app is reliable, secure, and optimized through rigorous testing.',
    cards: [
      {
        title: 'Unit & Integration Testing',
        description:
          'We validate app logic, APIs, and integrations for error-free performance.'
      },
      {
        title: 'Cross-device Testing',
        description:
          'We test merchant-facing features on different browsers and devices for consistency.'
      },
      {
        title: 'Security Testing',
        description:
          'We safeguard apps with secure authentication, OAuth, and PCI-compliant practices.'
      },
      {
        title: 'Performance Optimization',
        description:
          'We optimize APIs and app load times to handle high merchant usage smoothly.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We manage end-to-end app deployment, from Shopify App Store submission to compliance and optimization.',
    cards: [
      {
        title: 'App Store Compliance',
        description:
          'We ensure apps follow Shopify App Store policies and approval guidelines.'
      },
      {
        title: 'CI/CD Pipelines',
        description:
          'We set up automated pipelines for fast and reliable app updates.'
      },
      {
        title: 'Beta Testing & Rollouts',
        description:
          'We launch apps in controlled rollouts to gather feedback before full release.'
      },
      {
        title: 'App Store Optimization',
        description:
          'We optimize listings, visuals, and keywords to increase merchant adoption.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Support',
    description:
      'We provide continuous monitoring, updates, and feature enhancements to keep your Shopify apps successful.',
    cards: [
      {
        title: 'Ongoing Maintenance',
        description:
          'We monitor app health, release patches, and resolve issues quickly.'
      },
      {
        title: 'Shopify API Upgrades',
        description:
          'We ensure apps stay compatible with Shopify’s latest API versions and updates.'
      },
      {
        title: 'Feature Enhancements',
        description:
          'We add new features and improvements based on merchant feedback and market needs.'
      },
      {
        title: 'Analytics & Monitoring',
        description:
          'We integrate analytics tools to track installs, engagement, and retention.'
      }
    ]
  }
];

  return (
    <>
      <ShopifyContent/>
      <AgileProcess1
        title="Our Agile Process"
        TabsData={tabsData}
        defaultActiveTab="planning"
        accentColor="#1c85cb"
        cardView={true}
      />
      <Metatags  metaProps={metaPropsData}/>
      <StillNotSure />
    </>
  );
}

export default Shopify;
