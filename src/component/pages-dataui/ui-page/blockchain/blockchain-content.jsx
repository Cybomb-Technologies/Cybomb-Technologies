import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
import OnlinePresence from "../../../common-ui/dataui/online-presence";
import DevelopmentProcess from "../../../common-ui/dataui/development-process";
import contactUsImg from './../../../../assets/contact/contact-us-img1.jpg';
import scheduleConsultImg from './../../../../assets/contact/schedule-a-consultation-img2.jpg';

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
          { number: "90%", label: "Of executives expect blockchain disruption" },
          { number: "3×", label: "Faster transaction verification" },
          { number: "70%", label: "Efficiency gains with blockchain + AI automation" }
        ]}
        caption="Trusted by Innovators and"
        highlight="Blockchain-First Enterprises"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      
      <ScheduleConsultation
        heading="Leverage Blockchain and AI for a Smarter Future"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Blockchain AI Solutions"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <OnlinePresence 
        title="Let’s Build Your AI-Driven Blockchain Solution."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Blockchain AI Development"
      />

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default BlockchainSolutionsContent;
