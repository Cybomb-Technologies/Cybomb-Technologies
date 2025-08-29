import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import AngularTechnologies from "./angular-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";

const hiringData = [
  { title: 'Enterprise Ready', description: 'Robust framework for large applications.' },
  { title: 'Type Safety', description: 'Catch errors at compile time with TypeScript.' },
  { title: 'Component-Based', description: 'Reusable UI components for faster development.' },
  { title: 'Full Tooling', description: 'CLI, testing, and documentation tools included.' },
  { title: 'Google Maintained', description: 'Backed by Google and a strong community.' }
];

const offerData = [
  { title: 'SPA Development', description: 'Single Page Applications with rich UX.' },
  { title: 'Enterprise Dashboards', description: 'Complex data visualization interfaces.' },
  { title: 'Progressive Web Apps', description: 'Offline-capable, installable apps.' },
  { title: 'Component Libraries', description: 'Reusable UI components for your team.' },
  { title: 'Migration Services', description: 'Upgrade from AngularJS to Angular.' },
  { title: 'Performance Optimization', description: 'Faster load and render times.' }
];

const offerings = [
  { title: 'Angular Experts', description: 'Certified Angular developers.' },
  { title: 'State Management', description: 'NgRx, RxJS, and services architecture.' },
  { title: 'UI/UX Focus', description: 'Beautiful, accessible interfaces.' },
  { title: 'Testing Strategy', description: 'Unit, integration, and E2E testing.' },
  { title: 'Code Quality', description: 'Linting, formatting, and best practices.' },
  { title: 'CI/CD Pipelines', description: 'Automated testing and deployment.' }
];

const useCases = [
  "Enterprise Applications - Complex business systems.",
  "Admin Dashboards - Data visualization and management.",
  "E-Commerce Platforms - High-performance online stores.",
  "Financial Applications - Real-time data and transactions.",
  "Internal Tools - Business process automation."
];

const angularTechDescription = [
  {
    name: "Angular",
    description: "A powerful TypeScript-based open-source framework for building dynamic, single-page client applications developed by Google.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    iconColors: "linear-gradient(135deg, #fef2f2, #fee2e2)"
  },
    {
    name: "RxJS",
    description: "A reactive programming library used in Angular for handling asynchronous operations and managing streams of data.",
    icon: "https://rxjs.dev/assets/images/favicons/favicon.ico",
    iconColors: "linear-gradient(135deg, #f7d8f0ff, #fad6fbff)"
  },
  {
    name: "NgRx",
    description: "A state management library for Angular inspired by Redux, providing a reactive approach for handling application state.",
    icon: "https://ngrx.io/assets/images/badge.svg",
    iconColors: "linear-gradient(135deg, #f2d8f8ff, #efd4f6ff)"
  },
  {
    name: "Ivy",
    description: "Angular’s next-generation rendering engine, offering faster compilation, better debugging, and improved bundle sizes.",
    icon: "https://angular.io/assets/images/logos/angular/angular.svg",
    iconColors: "linear-gradient(135deg, #f7e3d9ff, #fcddd7ff)"
  },
    {
    name: "Bootstrap",
    description: "A popular front-end framework that provides responsive design and UI components, integrated easily with Angular.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    iconColors: "linear-gradient(135deg, #fff7ed, #ffedd5)"
  },
  {
    name: "Tailwind",
    description: "A utility-first CSS framework that allows highly customizable and responsive UI design within Angular projects.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    iconColors: "linear-gradient(135deg, #eff6ff, #dbeafe)"
  }
];


function AngularPage() {
  return (
    <section>
      <Banner 
        heading="Angular Development Services"
        subtext="Enterprise-grade web applications built with Angular framework."
        buttonText="Get a Free Quote"
        note="Our Angular developers build robust, maintainable web applications using TypeScript and the latest Angular features for enterprises and high-growth startups."
      />
      <InfoStats
        stats={[
          { number: "80%", label: "Backed by Google" },
          { number: "70%", label: "Enterprise-scale SPA framework" },
          { number: "65%", label: "Adopted for structured dev" }
        ]}
        caption="Trusted by"
        highlight="Enterprise Clients"
      />
      <HiringModels
        title="Why Choose Angular"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Angular Features" 
        items={offerings}
      /> 
      <AngularTechnologies/>
      <AboutTech technologies={angularTechDescription} />
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Angular Application?"
        buttonText="CONTACT OUR ANGULAR TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Angular development services"
      />
    </section>
  );
}

export default AngularPage;