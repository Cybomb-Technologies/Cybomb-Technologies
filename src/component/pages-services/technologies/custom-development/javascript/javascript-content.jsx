import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from "./../../../../../assets/placeholder-image.webp";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import JavaScriptTechnologies from "./javascript-technology";

const hiringData = [
  { title: "Flexibility", description: "Works across front-end, back-end, and full-stack applications." },
  { title: "Performance", description: "Fast, event-driven, and optimized for real-time apps." },
  { title: "Security", description: "Robust libraries and practices to secure modern apps." },
  { title: "Scalability", description: "Handles millions of requests using Node.js and modern frameworks." },
  { title: "Ecosystem", description: "Largest ecosystem of open-source libraries via npm." }
];

const offerData = [
  { title: "Custom JavaScript Applications", description: "Tailored web and mobile apps for your business." },
  { title: "Front-End Development", description: "Interactive UIs using React, Angular, or Vue.js." },
  { title: "Back-End Development", description: "Scalable APIs and services using Node.js and Express." },
  { title: "Full-Stack Solutions", description: "End-to-end solutions using modern JavaScript frameworks." },
  { title: "Legacy Modernization", description: "Upgrade jQuery or old JavaScript apps to modern frameworks." },
  { title: "Performance Tuning", description: "Optimize code, bundle size, and runtime performance." }
];

const offerings = [
  { title: "React & Vue Experts", description: "Skilled in building dynamic SPAs with reusable components." },
  { title: "Node.js Specialists", description: "Expertise in creating scalable, event-driven backends." },
  { title: "Cross-Platform Apps", description: "Build once and deploy across web, mobile, and desktop." },
  { title: "CI/CD Pipelines", description: "Automated testing, bundling, and deployment workflows." },
  { title: "Code Quality", description: "Clean, modular, and maintainable JavaScript practices." },
  { title: "Agile Development", description: "Iterative delivery with Scrum and Kanban methodologies." }
];

const useCases = [
  "E-Commerce Platforms - Fast, scalable shopping experiences.",
  "Real-Time Apps - Chat, video streaming, and collaboration tools.",
  "Single Page Applications - Interactive UIs with React or Vue.",
  "IoT Dashboards - Manage and visualize connected devices.",
  "Progressive Web Apps - Installable, offline-ready applications."
];

function JavaScriptPage() {
  return (
    <section>
      <Banner
        heading="JavaScript Development Services"
        subtext="Modern JavaScript solutions for dynamic, scalable, and high-performance applications."
        buttonText="Consult Our Experts"
        note="Our JavaScript developers craft robust front-end, back-end, and full-stack applications using React, Node.js, Vue.js, and modern frameworks to power businesses worldwide."
      />
      <InfoStats
        stats={[
          { number: "95%", label: "Used in most modern web apps" },
          { number: "85%", label: "Core for front-end frameworks" },
          { number: "75%", label: "Drives full-stack dev (Node.js)" }
        ]}
        caption="Trusted by"
        highlight="Global Enterprises"
      />
      <HiringModels title="Why Choose JavaScript" cards={hiringData} image={placeholderImage} />
      <WhatWeOffer title="What We Offer" items={offerData} image={placeholderImage} />
      <ServicesOfferings title="Java Script Features" items={offerings} />
      <JavaScriptTechnologies />
      <DevelopmentProcess title="Common Use Cases" Process={useCases} />
      <OnlinePresence
        title="Ready to Build Your JavaScript Solution?"
        buttonText="CONTACT OUR TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="JavaScript development services"
      />
    </section>
  );
}

export default JavaScriptPage;
