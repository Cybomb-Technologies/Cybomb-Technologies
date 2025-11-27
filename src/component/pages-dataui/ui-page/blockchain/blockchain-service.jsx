import BlockchainSolutionsContent from "./blockchain-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";
import AgileProcess1 from "../../../common-ui/agile-process/agile-process1";

function BlockChainServices() {
  const metaPropsData = {
    title: "Blockchain Development Services - Cybomb Technologies | Secure & Transparent Solutions",
    description:
      "Cybomb Technologies offers cutting-edge blockchain development services, delivering secure, transparent, and decentralized solutions for businesses across industries.",
    keyword:
      "Blockchain Development, Decentralized Applications, Smart Contracts, Distributed Ledger, Cybomb Technologies",
    url: "https://www.cybomb.com/services/blockchain",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };
const tabsData = [
  {
    id: 'planning',
    title: 'Planning & Consultation',
    description:
      'We help you plan and strategize blockchain adoption with the right frameworks, use cases, and roadmap.',
    cards: [
      {
        title: 'Use Case Identification',
        description:
          'We analyze your business model to identify where blockchain can add transparency and efficiency.'
      },
      {
        title: 'Feasibility Analysis',
        description:
          'We assess the technical and financial viability of blockchain implementation for your organization.'
      },
      {
        title: 'Architecture Roadmap',
        description:
          'We define a blockchain roadmap with workflows, integrations, and scalability considerations.'
      },
      {
        title: 'Resource Planning',
        description:
          'We allocate blockchain architects, developers, and security experts for successful delivery.'
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description:
      'We design intuitive blockchain interfaces for wallets, dApps, and smart contract interactions.',
    cards: [
      {
        title: 'Wireframes & Prototypes',
        description:
          'We design prototypes that map out blockchain workflows and user journeys.'
      },
      {
        title: 'Decentralized App Interfaces',
        description:
          'We build user-friendly designs for dApps that simplify blockchain complexity.'
      },
      {
        title: 'Wallet & Exchange UI',
        description:
          'We design secure and engaging interfaces for crypto wallets and blockchain exchanges.'
      },
      {
        title: 'User Experience Enhancements',
        description:
          'We focus on usability, security, and accessibility to make blockchain applications seamless.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'We build secure, scalable, and decentralized blockchain applications tailored to your needs.',
    cards: [
      {
        title: 'Smart Contract Development',
        description:
          'We create and deploy smart contracts on platforms like Ethereum, Hyperledger, or Solana.'
      },
      {
        title: 'dApp Development',
        description:
          'We build decentralized applications that leverage blockchain for transparency and security.'
      },
      {
        title: 'Blockchain Integration',
        description:
          'We integrate blockchain with existing systems for payments, identity, and supply chain tracking.'
      },
      {
        title: 'Tokenization & NFTs',
        description:
          'We develop tokens, NFT marketplaces, and blockchain-based digital assets.'
      }
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'We ensure blockchain applications are secure, reliable, and optimized before deployment.',
    cards: [
      {
        title: 'Smart Contract Auditing',
        description:
          'We test smart contracts for vulnerabilities and ensure error-free execution.'
      },
      {
        title: 'Security Testing',
        description:
          'We evaluate blockchain systems for data security, consensus integrity, and attack resilience.'
      },
      {
        title: 'Performance Testing',
        description:
          'We test blockchain networks for scalability, transaction speed, and cost efficiency.'
      },
      {
        title: 'Compliance Testing',
        description:
          'We ensure blockchain solutions meet industry standards and regulatory requirements.'
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'We deploy blockchain networks and applications with secure, seamless, and optimized processes.',
    cards: [
      {
        title: 'Network Setup',
        description:
          'We configure private, public, or hybrid blockchain networks for your business use cases.'
      },
      {
        title: 'Node & Validator Setup',
        description:
          'We deploy blockchain nodes and validators to ensure decentralized operations.'
      },
      {
        title: 'Security & Compliance',
        description:
          'We implement encryption, key management, and compliance measures for safe deployment.'
      },
      {
        title: 'Monitoring & Support',
        description:
          'We provide ongoing support to ensure smooth blockchain network performance.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'We provide ongoing monitoring, optimization, and updates for your blockchain applications.',
    cards: [
      {
        title: 'Network Monitoring',
        description:
          'We continuously track network performance, uptime, and transaction reliability.'
      },
      {
        title: 'Smart Contract Updates',
        description:
          'We update and optimize smart contracts to adapt to evolving requirements.'
      },
      {
        title: 'Security Patches',
        description:
          'We safeguard blockchain applications with ongoing updates and vulnerability fixes.'
      },
      {
        title: 'Scalability Enhancements',
        description:
          'We optimize blockchain systems to handle growth, higher transaction volumes, and new features.'
      }
    ]
  }
];

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <BlockchainSolutionsContent />
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

export default BlockChainServices;
