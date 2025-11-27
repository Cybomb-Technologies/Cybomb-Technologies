import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import HTML5Technologies from "./html-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";
import WhyChooseImg from "./../../../../../assets/contact/schedule-a-consultation-img1.jpg";
import WhatWeOfferImg from "./../../../../../assets/contact/hiring-model-img2.webp";
import contactImg from "./../../../../../assets/contact/contact-us-img1.jpg";

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

const html5TechDescription = [
  // Core Technologies
  {
    name: "HTML5",
    description: "The standard markup language for structuring web content, introducing semantic elements, multimedia support, and APIs for modern web apps.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    iconColors: "linear-gradient(135deg, #fbd6d1ff, #f7cac9ff)"
  },
  {
    name: "CSS3",
    description: "The styling language of the web, enabling responsive layouts, animations, and modern design capabilities with Flexbox and Grid.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    iconColors: "linear-gradient(135deg, #dbeafe, #bfdbfe)"
  },
  {
    name: "JavaScript",
    description: "The core programming language of the web, enabling dynamic behavior, interactivity, and client-side logic in web applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    iconColors: "linear-gradient(135deg, #fef9c3, #fef08a)"
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for building responsive and customizable UIs without leaving your HTML.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    iconColors: "linear-gradient(135deg, #d1e6f7ff, #d1e0f7ff)"
  },
  {
    name: "Bootstrap",
    description: "A popular CSS framework that provides ready-to-use components, responsive grid system, and utilities for rapid development.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    iconColors: "linear-gradient(135deg, #ede9fe, #ddd6fe)"
  },
  {
    name: "Material UI",
    description: "A React component library implementing Google’s Material Design, offering prebuilt UI elements with accessibility in mind.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    iconColors: "linear-gradient(135deg, #e0f2fe, #bae6fd)"
  }
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
          { number: "90%", label: "Universal web standard" },
          { number: "80%", label: "Responsive design enabler" },
          { number: "70%", label: "Essential for modern UI" }
        ]}
        caption="Trusted by"
        highlight="Businesses Worldwide"
      />
      <HiringModels
        title="Why Choose HTML5"
        cards={hiringData}
        image={WhyChooseImg}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={WhatWeOfferImg}
      />
      <ServicesOfferings 
        title="HTML5 Features" 
        items={offerings}
      /> 
      <HTML5Technologies/>
      <AboutTech technologies={html5TechDescription} />
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Modern Web Experience?"
        buttonText="START YOUR PROJECT"
        buttonLink="#"
        imageSrc={contactImg}
        imageAlt="HTML5 development services"
      />
    </section>
  );
}

export default HTML5Page;