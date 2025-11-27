import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
// import OnlinePresence from "../../../common-ui/dataui/online-presence";
import DevelopmentProcess from "../../../common-ui/dataui/development-process";
import contactUsImg from "./../../../../assets/contact/contact-us-img1.jpg";
import scheduleConsultImg from "./../../../../assets/contact/schedule-a-consultation-img2.jpg";
import BlockchainToolsSection from "./blockchain-techtool";
import AboutTech from "../../../common-ui/dataui/about-tech";

const WhatWeOffers = [
  {
    title: "AI-Powered Smart Contracts",
    description:
      "Develop and deploy intelligent smart contracts that automate complex workflows and decision-making.",
  },
  {
    title: "Blockchain Data Analytics",
    description:
      "Leverage AI to monitor, analyze, and derive insights from blockchain transaction data.",
  },
  {
    title: "Decentralized AI Marketplaces",
    description:
      "Enable secure, tokenized marketplaces for AI models and datasets on blockchain infrastructure.",
  },
  {
    title: "Identity & Access Management",
    description:
      "Combine AI and blockchain to provide secure, fraud-proof digital identities.",
  },
  {
    title: "Supply Chain Transparency",
    description:
      "Track and verify products from origin to consumer using blockchain with AI-driven risk detection.",
  },
  {
    title: "Tokenization & Asset",
    description:
      "Digitize and manage assets securely with AI-assisted blockchain platforms.",
  },
];

const whychooseus = [
  {
    title: "Fusion of AI & Blockchain Expertise",
    description:
      "We bring deep knowledge of both AI algorithms and blockchain protocols for integrated solutions.",
  },
  {
    title: "Security-First Approach",
    description:
      "Our solutions prioritize encryption, trustless verification, and data privacy.",
  },
  {
    title: "Scalable and Future-Proof",
    description:
      "We design blockchain-AI architectures that can evolve with your business needs.",
  },
  {
    title: "Cross-Industry Applications",
    description:
      "From finance to healthcare, our blockchain solutions adapt to diverse industries.",
  },
  {
    title: "Proven Implementation Track Record",
    description:
      "We have delivered production-ready blockchain-AI projects for global clients.",
  },
];

const useCases = [
  "Automating loan approvals with AI-driven smart contracts on blockchain",
  "Monitoring and detecting fraudulent transactions in real-time",
  "Creating decentralized AI model marketplaces for collaborative innovation",
  "Verifying product authenticity in global supply chains",
  "Managing digital identities for secure customer onboarding",
];

const blockchainDescription = [
  {
    name: "Ethereum",
    description:
      "Ethereum is a decentralized blockchain platform that enables developers to build and deploy smart contracts and decentralized applications (dApps).",
    icon: "https://img.icons8.com/fluent/512/ethereum.png",
    iconColors: "linear-gradient(135deg, #F0F6FF, #FFFFFF)", // light icy blue gradient
  },
  {
    name: "Corda",
    description:
      "Corda is a distributed ledger platform developed by R3, designed to record, manage, and automate legal agreements between businesses.",
    icon: "https://avatars.githubusercontent.com/u/22600631?s=280&v=4",
    iconColors: "linear-gradient(135deg, #FFECEC, #FFFFFF)", // light coral/red gradient
  },
  {
    name: "Solidity",
    description:
      "Solidity is the most widely used programming language for writing smart contracts on Ethereum and other EVM-compatible blockchains.",
    icon: "https://raw.githubusercontent.com/github/explore/ba9de12f88fd08825c51928e91f1678cb5c94b26/topics/solidity/solidity.png",
    iconColors: "linear-gradient(135deg, #F7F7F7, #FFFFFF)", // soft gray-white gradient
  },
  {
    name: "Truffle",
    description:
      "Truffle is a development framework for Ethereum that provides tools for building, testing, and deploying smart contracts efficiently.",
    icon: "https://archive.trufflesuite.com/assets/logo.png",
    iconColors: "linear-gradient(135deg, #FFF5EB, #FFFFFF)", // light orange-beige gradient
  },
  {
    name: "MetaMask",
    description:
      "MetaMask is a popular crypto wallet and gateway to blockchain apps, allowing users to manage digital assets and interact with decentralized applications (dApps).",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png",
    iconColors: "linear-gradient(135deg, #FFF3E6, #FFFFFF)", // soft fox-orange gradient
  },
  {
    name: "WalletConnect",
    description:
      "WalletConnect is an open protocol for connecting decentralized applications to mobile wallets using end-to-end encryption by scanning a QR code.",
    icon: "https://walletconnect.network/icon.png?14b0dfc4ce526451",
    iconColors: "linear-gradient(135deg, #E9F7FF, #FFFFFF)", // pale blue gradient
  },
];

function BlockchainSolutionsContent() {
  return (
    <section>
      <Banner
        heading="Blockchain Solutions"
        subtext="Secure, transparent, and intelligent blockchain systems powered by AI."
        buttonText="Explore Blockchain AI"
        note="We combine the strengths of blockchain and AI to create secure, scalable, and intelligent systems for modern enterprises. From smart contracts to decentralized AI marketplaces, our solutions drive trust, automation, and transparency."
      />

      <InfoStats
        stats={[
          {
            number: "90%",
            label: "Of executives expect blockchain disruption",
          },
          { number: "3×", label: "Faster transaction verification" },
          {
            number: "70%",
            label: "Efficiency gains with blockchain + AI automation",
          },
        ]}
        caption="Trusted by Innovators and"
        highlight="Blockchain-First Enterprises"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />

      <BlockchainToolsSection />
      <AboutTech technologies={blockchainDescription} />
      <WhyChooseUs ChooseUs={whychooseus} />
      <ScheduleConsultation
        heading="Leverage Blockchain and AI for a Smarter Future"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Blockchain AI Solutions"
        Icon={MdSchedule}
      />

      {/* <OnlinePresence 
        title="Let’s Build Your AI-Driven Blockchain Solution."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Blockchain AI Development"
      /> */}

      <DevelopmentProcess title="Use Cases" Process={useCases} />
    </section>
  );
}

export default BlockchainSolutionsContent;
