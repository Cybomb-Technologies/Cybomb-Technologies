import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from "./../../../../../assets/placeholder-image.webp";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import ReactTechnologies from "./react-technologies";
import AboutTech from "../../../../common-ui/custom-development/about-tech";

const hiringData = [
  {
    title: "Component-Based",
    description: "Reusable and modular UI components.",
  },
  {
    title: "Fast Development",
    description: "Rapid iteration with hot reloading.",
  },
  { title: "SEO-Friendly", description: "Supports SSR for better visibility." },
  {
    title: "Rich Ecosystem",
    description: "Libraries and tools for every need.",
  },
  {
    title: "Cross-Platform",
    description: "Build for web, mobile, and desktop.",
  },
];

const offerData = [
  {
    title: "Single Page Applications",
    description: "High-performance SPAs using React.",
  },
  {
    title: "Custom Web Apps",
    description: "Tailored solutions for business needs.",
  },
  {
    title: "React Native Apps",
    description: "Cross-platform mobile applications.",
  },
  {
    title: "UI/UX Development",
    description: "Pixel-perfect, responsive user interfaces.",
  },
  {
    title: "API Integration",
    description: "Seamless backend and third-party integrations.",
  },
  {
    title: "Migration Services",
    description: "Upgrade or migrate existing apps to React.",
  },
];

const offerings = [
  {
    title: "Expert React Developers",
    description: "Skilled engineers with deep React expertise.",
  },
  {
    title: "Full-Stack Solutions",
    description: "Integration with Node.js, APIs, and databases.",
  },
  {
    title: "Scalable Architecture",
    description: "Designing apps to grow with your business.",
  },
  {
    title: "Testing & QA",
    description: "Unit, integration, and end-to-end testing.",
  },
  {
    title: "Code Reviews",
    description: "Ensuring high-quality, maintainable code.",
  },
  {
    title: "Performance Optimization",
    description: "Fine-tuned apps for speed and efficiency.",
  },
];

const useCases = [
  "Web Applications – Interactive, scalable business platforms.",
  "Single Page Applications – Smooth, app-like user experience.",
  "E-commerce Platforms – High-performance online stores.",
  "Dashboards & Analytics – Real-time insights with React.",
  "Mobile Apps – React Native for iOS and Android.",
];

const reactDescription = [
  {
    name: "CSS3",
    description:
      "Modern stylesheet standard for responsive layouts, animations, and rich visual effects via media queries and advanced selectors.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    iconColors: "linear-gradient(135deg, #66a6ff, #89f7fe)",
  },
  {
    name: "Bootstrap",
    description:
      "Mobile-first CSS framework with a responsive grid, prebuilt components, and theming utilities for fast, consistent UI.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    iconColors: "linear-gradient(135deg, #a17fe0, #c084fc)",
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapid, scalable UI development using composable classes and design-system consistency.",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    iconColors: "linear-gradient(135deg, #6ee7b7, #3b82f6)",
  },
];

function ReactContent() {
  return (
    <section>
      <Banner
        heading="React Development Services"
        subtext="Build fast, interactive, and scalable applications with React."
        buttonText="Start Your Project"
        note="Our React developers craft high-performance web and mobile applications, delivering engaging user experiences, seamless functionality, and scalable solutions for startups and enterprises."
      />
      <InfoStats
        stats={[
          { number: "85%", label: "Adopted by top enterprises" },
          { number: "90%", label: "Preferred for modern web apps" },
          { number: "70%", label: "Used in mobile app development" },
        ]}
        caption="Trusted by"
        highlight="Startups to Enterprises"
      />
      <HiringModels
        title="Why React"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our React Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings title="Our Expertise" items={offerings} />
      <ReactTechnologies />
      <AboutTech technologies={reactDescription} />
      <DevelopmentProcess title="Common Use Cases" Process={useCases} />
      <OnlinePresence
        title="Ready to Build Your React Solution?"
        buttonText="CONTACT OUR REACT TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="React development services"
      />
    </section>
  );
}

export default ReactContent;
