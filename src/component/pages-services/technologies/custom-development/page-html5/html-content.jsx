import React from "react";
import Banner from "../../../../common-ui/page-php/banner";
import InfoStats from "../../../../common-ui/page-php/info-stats";
import HiringModels from "../../../../common-ui/page-php/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/page-php/whatweoffer";
import ServicesOfferings from "../../../../common-ui/page-php/services-offerings";
import DevelopmentProcess from "../../../../common-ui/page-php/development-process";
import OnlinePresence from "../../../../common-ui/page-php/online-presence";
import HTML5Technologies from "./html-technology";

const hiringData = [
  { title: 'Modern Web Standards', description: 'Build future-proof applications using latest HTML5 specifications.' },
  { title: 'Cross-Platform', description: 'Single codebase that works across all devices and browsers.' },
  { title: 'Performance Optimized', description: 'Lightning-fast websites with modern optimization techniques.' },
  { title: 'Accessibility Focus', description: 'WCAG compliant sites for all users.' },
  { title: 'Progressive Enhancement', description: 'Graceful degradation for maximum compatibility.' }
];

const offerData = [
  { title: 'Responsive Web Development', description: 'Mobile-first websites that work across all devices.' },
  { title: 'Single Page Applications', description: 'Fast, app-like experiences with modern frameworks.' },
  { title: 'Web Component Architecture', description: 'Reusable components for maintainable codebases.' },
  { title: 'Animation & Effects', description: 'Engaging UI with CSS3 animations and Canvas/SVG.' },
  { title: 'Web Accessibility', description: 'Inclusive design for all users.' },
  { title: 'Performance Optimization', description: 'Fast loading and smooth interactions.' }
];

const offerings = [
  { title: 'Frontend Specialists', description: 'Experts in modern HTML5, CSS3 and JavaScript.' },
  { title: 'Framework Experts', description: 'Deep knowledge of React, Angular and Vue ecosystems.' },
  { title: 'UI/UX Focus', description: 'Beautiful interfaces with exceptional user experience.' },
  { title: 'Testing Coverage', description: 'Comprehensive unit and integration testing.' },
  { title: 'Progressive Web Apps', description: 'Offline-capable, installable web applications.' },
  { title: 'Web Performance', description: 'Optimized assets and loading strategies.' }
];

const useCases = [
  "Marketing Websites - Beautiful, responsive sites for brands.",
  "Web Applications - Full-featured business applications.",
  "E-Commerce Stores - Fast, secure online shopping experiences.",
  "Dashboards - Data visualization and analytics interfaces.",
  "Interactive Media - Rich media experiences with Canvas/WebGL."
];

function HTML5Page() {
  return (
    <section>
      <Banner 
        heading="HTML5 Development Services"
        subtext="Build modern, interactive web experiences with cutting-edge HTML5 technologies."
        buttonText="Get a Free Quote"
        note="Our HTML5 experts create responsive, accessible websites and web applications using the latest web standards and frameworks for optimal performance and user experience."
      />
      <InfoStats
        stats={[
          { number: "300+", label: "Web Projects" },
          { number: "100%", label: "Mobile Friendly" },
          { number: "4.9/5", label: "Client Satisfaction" }
        ]}
        caption="Trusted by"
        highlight="Businesses Worldwide"
      />
      <HiringModels
        title="Why HTML5"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our HTML5 Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Our Expertise" 
        items={offerings}
      /> 
      <HTML5Technologies/>
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Modern Web Experience?"
        buttonText="START YOUR PROJECT"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="HTML5 development services"
      />
    </section>
  );
}

export default HTML5Page;