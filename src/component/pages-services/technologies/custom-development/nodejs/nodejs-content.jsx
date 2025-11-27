import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import NodeJSTechnologies from "./nodejs-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";
import WhyChooseImg from "./../../../../../assets/contact/schedule-a-consultation-img1.jpg";
import WhatWeOfferImg from "./../../../../../assets/contact/hiring-model-img2.webp";
import contactImg from "./../../../../../assets/contact/contact-us-img1.jpg";

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

const nodeTechDescription = [
  {
    name: "Express.js",
    description: "A fast, unopinionated, and minimalist web framework for Node.js, widely used for building APIs and web applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    iconColors: "linear-gradient(135deg, #f9fafb, #e5e7eb)"
  },
  {
    name: "NestJS",
    description: "A progressive Node.js framework for building efficient, reliable, and scalable server-side applications using TypeScript.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    iconColors: "linear-gradient(135deg, #d2d1d1ff, #d9d7d7ff)"
  },
   {
    name: "Socket.io",
    description: "A library that enables real-time, bidirectional communication between web clients and servers using WebSockets.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    iconColors: "linear-gradient(135deg, #f5f3ff, #ede9fe)"
  },
  {
    name: "PostgreSQL",
    description: "A powerful open-source relational database that integrates seamlessly with Node.js for handling complex queries and data models.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    iconColors: "linear-gradient(135deg, #eef2ff, #e0e7ff)"
  },
  {
    name: "Redis",
    description: "An in-memory data store used as a database, cache, and message broker in Node.js applications for fast performance.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    iconColors: "linear-gradient(135deg, #fff1f2, #ffe4e6)"
  },
  {
    name: "Jest",
    description: "A delightful JavaScript testing framework with a focus on simplicity, used widely for testing Node.js applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    iconColors: "linear-gradient(135deg, #faf5ff, #ede9fe)"
  }
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
        title="Why Choose Node.js"
        cards={hiringData}
        image={WhyChooseImg}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={WhatWeOfferImg}
      />
      <ServicesOfferings 
        title="Node.js Features" 
        items={offerings}
      /> 
      <NodeJSTechnologies/>
<AboutTech technologies={nodeTechDescription} />
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Node.js Application?"
        buttonText="CONTACT OUR NODE TEAM"
        buttonLink="#"
        imageSrc={contactImg}
        imageAlt="Node.js development services"
      />
    </section>
  );
}

export default NodeJSPage;