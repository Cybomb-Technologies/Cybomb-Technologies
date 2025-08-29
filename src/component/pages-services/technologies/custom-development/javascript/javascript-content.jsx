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

// const javascriptTechDescription = [
//   // Core JavaScript
//   {
//     name: "JavaScript (ES6+)",
//     description: "The core programming language of the web, with modern ES6+ features such as classes, modules, async/await, and arrow functions.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     iconColors: "linear-gradient(135deg, #fef9c3, #fef08a)"
//   },
//   {
//     name: "TypeScript",
//     description: "A strongly-typed superset of JavaScript that compiles to plain JavaScript, improving maintainability and scalability.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
//     iconColors: "linear-gradient(135deg, #e0f2fe, #bae6fd)"
//   },
//   {
//     name: "Node.js",
//     description: "A runtime environment that allows JavaScript to run on the server, enabling scalable and event-driven applications.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     iconColors: "linear-gradient(135deg, #dcfce7, #bbf7d0)"
//   },
//   {
//     name: "Deno",
//     description: "A secure runtime for JavaScript and TypeScript created by the original author of Node.js, featuring modern tooling and built-in TypeScript support.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg",
//     iconColors: "linear-gradient(135deg, #f0f9ff, #e0f2fe)"
//   },
//   {
//     name: "Bun",
//     description: "An all-in-one JavaScript runtime, bundler, and package manager designed for speed and simplicity.",
//     icon: "https://bun.sh/logo.svg",
//     iconColors: "linear-gradient(135deg, #f3f4f6, #e5e7eb)"
//   },

//   // Front-End Frameworks
//   {
//     name: "React",
//     description: "A JavaScript library for building component-based UIs, developed by Meta, widely used for SPAs and modern frontends.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     iconColors: "linear-gradient(135deg, #e0f2fe, #bae6fd)"
//   },
//   {
//     name: "Vue.js",
//     description: "A progressive JavaScript framework for building reactive UIs, offering a simple core and flexible ecosystem.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
//     iconColors: "linear-gradient(135deg, #dcfce7, #bbf7d0)"
//   },
//   {
//     name: "Angular",
//     description: "A TypeScript-based framework by Google for building scalable, enterprise-ready web applications.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
//     iconColors: "linear-gradient(135deg, #fee2e2, #fecaca)"
//   },
//   {
//     name: "Svelte",
//     description: "A modern UI framework that compiles components to efficient JavaScript at build time, producing highly optimized apps.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
//     iconColors: "linear-gradient(135deg, #ffedd5, #fed7aa)"
//   },
//   {
//     name: "Next.js",
//     description: "A React-based framework providing hybrid static & server-side rendering, API routes, and optimized performance out of the box.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//     iconColors: "linear-gradient(135deg, #f3f4f6, #e5e7eb)"
//   },

//   // Back-End Frameworks
//   {
//     name: "Express.js",
//     description: "A minimal and flexible Node.js framework providing robust features for APIs and web applications.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//     iconColors: "linear-gradient(135deg, #fafafa, #e5e5e5)"
//   },
//   {
//     name: "NestJS",
//     description: "A progressive Node.js framework built with TypeScript, inspired by Angular’s modular architecture, for scalable server-side applications.",
//     icon: "https://icon.icepanel.io/Technology/svg/Nest.js.svg",
//     iconColors: "linear-gradient(135deg, #fdf4ff, #fae8ff)"
//   },
//   {
//     name: "AdonisJS",
//     description: "A full-featured MVC framework for Node.js, offering an elegant developer experience similar to Laravel.",
//     icon: "https://avatars.githubusercontent.com/u/13810373?s=200&v=4",
//     iconColors: "linear-gradient(135deg, #e0f2fe, #dbeafe)"
//   },

//   // Build & Testing Tools
//   {
//     name: "Webpack",
//     description: "A powerful JavaScript bundler that compiles modules into optimized assets for modern web applications.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
//     iconColors: "linear-gradient(135deg, #e0f2fe, #dbeafe)"
//   },
//   {
//     name: "Vite",
//     description: "A next-generation frontend build tool that provides instant dev server start and lightning-fast HMR.",
//     icon: "https://vitejs.dev/logo.svg",
//     iconColors: "linear-gradient(135deg, #f0fdf4, #dcfce7)"
//   },
//   {
//     name: "Babel",
//     description: "A JavaScript compiler that allows developers to use the latest features by transpiling code for older environments.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
//     iconColors: "linear-gradient(135deg, #fef3c7, #fde68a)"
//   },
//   {
//     name: "Jest",
//     description: "A delightful JavaScript testing framework with built-in mocking, snapshots, and a simple API.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
//     iconColors: "linear-gradient(135deg, #fee2e2, #fecaca)"
//   },
//   {
//     name: "Mocha",
//     description: "A feature-rich JavaScript test framework running on Node.js, making asynchronous testing simple and fun.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
//     iconColors: "linear-gradient(135deg, #f5f5f4, #e7e5e4)"
//   },

//   // Deployment & DevOps
//   {
//     name: "Docker",
//     description: "A containerization platform that ensures JavaScript apps run consistently across environments.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//     iconColors: "linear-gradient(135deg, #dbeafe, #bfdbfe)"
//   },
//   {
//     name: "Kubernetes",
//     description: "A container orchestration system for managing, scaling, and deploying JavaScript microservices in production.",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
//     iconColors: "linear-gradient(135deg, #dcfce7, #bbf7d0)"
//   },
//   {
//     name: "Vercel",
//     description: "A cloud platform optimized for frontend frameworks and static sites, powering Next.js and other JS apps.",
//     icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
//     iconColors: "linear-gradient(135deg, #f3f4f6, #e5e7eb)"
//   },
//   {
//     name: "Netlify",
//     description: "A deployment platform for modern web projects, offering continuous deployment, edge functions, and CDN support.",
//     icon: "https://www.netlify.com/v3/static/favicon/favicon.ico",
//     iconColors: "linear-gradient(135deg, #f0fdfa, #ccfbf1)"
//   },
//   {
//     name: "AWS Lambda",
//     description: "A serverless compute service by AWS that runs JavaScript/Node.js code without provisioning servers.",
//     icon: "https://cdn.worldvectorlogo.com/logos/aws-lambda-1.svg",
//     iconColors: "linear-gradient(135deg, #fffbeb, #fef3c7)"
//   }
// ];


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
