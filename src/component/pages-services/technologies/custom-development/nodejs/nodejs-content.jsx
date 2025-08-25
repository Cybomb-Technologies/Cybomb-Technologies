import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import NodeJSTechnologies from "./nodejs-technology";

const hiringData = [
  { title: 'High Performance', description: 'Non-blocking I/O for scalable applications.' },
  { title: 'Full-Stack JavaScript', description: 'Shared language between frontend and backend.' },
  { title: 'Large Ecosystem', description: 'Over 1 million packages in npm.' },
  { title: 'Real-Time Capabilities', description: 'Perfect for chat, gaming, and collaboration.' },
  { title: 'Cost Effective', description: 'Reduced development time and resources.' }
];

const offerData = [
  { title: 'API Development', description: 'RESTful and GraphQL API services.' },
  { title: 'Microservices', description: 'Scalable, distributed architectures.' },
  { title: 'Real-Time Applications', description: 'Chat, gaming, and collaboration tools.' },
  { title: 'Serverless Functions', description: 'AWS Lambda, Google Cloud Functions.' },
  { title: 'Legacy Modernization', description: 'Migrate older systems to Node.js.' },
  { title: 'Performance Optimization', description: 'Improve throughput and response times.' }
];

const offerings = [
  { title: 'Node.js Experts', description: 'Senior developers with production experience.' },
  { title: 'Architecture Design', description: 'Scalable system architecture.' },
  { title: 'TypeScript Integration', description: 'Type-safe JavaScript development.' },
  { title: 'Testing Strategy', description: 'Unit, integration, and E2E testing.' },
  { title: 'DevOps Automation', description: 'CI/CD pipelines and cloud deployment.' },
  { title: 'Security Hardening', description: 'Protection against common vulnerabilities.' }
];

const useCases = [
  "APIs - Backend services for web and mobile apps.",
  "Real-Time Apps - Chat, notifications, and live updates.",
  "Microservices - Scalable, independent services.",
  "Serverless - Event-driven functions and APIs.",
  "Scripting - Automation and utility scripts."
];

function NodeJSPage() {
  return (
    <section>
      <Banner 
        heading="Node.js Development Services"
        subtext="High-performance JavaScript runtime for building scalable network applications."
        buttonText="Start Your Project"
        note="Our Node.js developers build fast, scalable network applications using JavaScript on the server-side, leveraging the vast npm ecosystem for rapid development."
      />
      <InfoStats
        stats={[
          { number: "85%", label: "Event-driven, non-blocking I/O" },
          { number: "75%", label: "Preferred for scalable APIs" },
          { number: "70%", label: "Strong npm ecosystem" }
        ]}
        caption="Trusted by"
        highlight="High-Growth Startups"
      />
      <HiringModels
        title="Why Node.js"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our Node.js Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Our Expertise" 
        items={offerings}
      /> 
      <NodeJSTechnologies/>
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Node.js Application?"
        buttonText="CONTACT OUR NODE TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Node.js development services"
      />
    </section>
  );
}

export default NodeJSPage;