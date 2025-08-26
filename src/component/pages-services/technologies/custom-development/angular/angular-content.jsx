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