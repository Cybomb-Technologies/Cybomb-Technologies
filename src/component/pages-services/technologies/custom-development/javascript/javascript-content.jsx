import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import JavaScriptTechnologies from "./javascript-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";
import WhyChooseImg from "./../../../../../assets/contact/schedule-a-consultation-img1.jpg";
import WhatWeOfferImg from "./../../../../../assets/contact/hiring-model-img2.webp";
import contactImg from "./../../../../../assets/contact/contact-us-img1.jpg";

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

const javascriptTechDescription = [
  // Core JavaScript
  {
    name: "JavaScript (ES6+)",
    description: "The core programming language of the web, with modern ES6+ features such as classes, modules, async/await, and arrow functions.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    iconColors: "linear-gradient(135deg, #fef9c3, #fef08a)"
  },
  {
    name: "TypeScript",
    description: "A strongly-typed superset of JavaScript that compiles to plain JavaScript, improving maintainability and scalability.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    iconColors: "linear-gradient(135deg, #e0f2fe, #bae6fd)"
  },
  {
    name: "Node.js",
    description: "A runtime environment that allows JavaScript to run on the server, enabling scalable and event-driven applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    iconColors: "linear-gradient(135deg, #dcfce7, #bbf7d0)"
  },
  {
    name: "Deno",
    description: "A secure runtime for JavaScript and TypeScript created by the original author of Node.js, featuring modern tooling and built-in TypeScript support.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg",
    iconColors: "linear-gradient(135deg, #f0f9ff, #e0f2fe)"
  },
  {
    name: "Bun",
    description: "An all-in-one JavaScript runtime, bundler, and package manager designed for speed and simplicity.",
    icon: "https://bun.sh/logo.svg",
    iconColors: "linear-gradient(135deg, #f3f4f6, #e5e7eb)"
  },

  // Front-End Frameworks
  {
    name: "React",
    description: "A JavaScript library for building component-based UIs, developed by Meta, widely used for SPAs and modern frontends.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    iconColors: "linear-gradient(135deg, #e0f2fe, #bae6fd)"
  }
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
      <HiringModels title="Why Choose JavaScript" cards={hiringData} image={WhyChooseImg} />
      <WhatWeOffer title="What We Offer" items={offerData} image={WhatWeOfferImg} />
      <ServicesOfferings title="Java Script Features" items={offerings} />
      <JavaScriptTechnologies />
            <AboutTech technologies={javascriptTechDescription} />
      <DevelopmentProcess title="Common Use Cases" Process={useCases} />
      <OnlinePresence
        title="Ready to Build Your JavaScript Solution?"
        buttonText="CONTACT OUR TEAM"
        buttonLink="#"
        imageSrc={contactImg}
        imageAlt="JavaScript development services"
      />
    </section>
  );
}

export default JavaScriptPage;
