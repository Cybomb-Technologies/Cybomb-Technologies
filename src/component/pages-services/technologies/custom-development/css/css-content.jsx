import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from "./../../../../../assets/placeholder-image.webp";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import CSSTechnologies from "./css-technology";

const hiringData = [
  {
    title: "Responsive Design",
    description: "Adaptive layouts that look great on any screen size.",
  },
  {
    title: "Modern Styling",
    description:
      "Leverage CSS3 features for animations, grids, and flex layouts.",
  },
  {
    title: "Cross-Browser Compatibility",
    description: "Consistent visuals across all major browsers.",
  },
  {
    title: "Performance-Optimized UI",
    description: "Lightweight, scalable, and fast-loading stylesheets.",
  },
  {
    title: "Accessible Styling",
    description: "WCAG-compliant design for inclusive user experiences.",
  },
  {
    title: "Maintainable Code",
    description: "Scalable architecture using methodologies like BEM & SMACSS.",
  },
];

const offerData = [
  {
    title: "Responsive Web Design",
    description: "Mobile-first layouts that adapt to every device.",
  },
  {
    title: "CSS Architecture",
    description:
      "Scalable and maintainable CSS structures with BEM, OOCSS, and SMACSS.",
  },
  {
    title: "UI Framework Integration",
    description: "Tailwind, Bootstrap, Material UI, and custom design systems.",
  },
  {
    title: "Animations & Transitions",
    description:
      "Engaging experiences with CSS3 animations, keyframes, and transforms.",
  },
  {
    title: "Cross-Browser Styling",
    description: "Consistent design across Chrome, Firefox, Safari, and Edge.",
  },
  {
    title: "Accessibility Styling",
    description:
      "Contrast ratios, focus states, and screen-reader friendly styles.",
  },
];

const offerings = [
  {
    title: "Frontend Specialists",
    description:
      "Skilled in CSS3, responsive design, and modern styling techniques.",
  },
  {
    title: "Design System Experts",
    description:
      "Experience building scalable design systems with reusable components.",
  },
  {
    title: "UI/UX Driven",
    description:
      "Focus on user-friendly layouts and beautiful visual consistency.",
  },
  {
    title: "Testing & QA",
    description: "Cross-browser and device testing for flawless delivery.",
  },
  {
    title: "Animation & Motion Design",
    description:
      "Interactive UI elements using CSS keyframes, transitions, and 3D transforms.",
  },
  {
    title: "Performance-Centric Styling",
    description: "Optimized CSS loading strategies for faster rendering.",
  },
];

const useCases = [
  "Marketing Websites - Beautiful, responsive sites for brands.",
  "Web Applications - Full-featured business applications.",
  "E-Commerce Stores - Fast, secure online shopping experiences.",
  "Dashboards - Data visualization and analytics interfaces.",
  "Interactive Media - Rich media experiences with Canvas/WebGL.",
];

function CSSPage() {
  return (
    <section>
      <Banner
        heading="CSS Development Services"
        subtext="Craft visually stunning, responsive, and user-friendly web experiences with advanced CSS technologies."
        buttonText="Get a Free Quote"
        note="Our CSS experts deliver pixel-perfect, accessible, and high-performance interfaces using modern design systems and frameworks to ensure seamless experiences across all devices and browsers."
      />
      <InfoStats
        stats={[
          { number: "90%", label: "Universal web standard" },
          { number: "80%", label: "Responsive design enabler" },
          { number: "70%", label: "Essential for modern UI" },
        ]}
        caption="Trusted by"
        highlight="Businesses Worldwide"
      />
      <HiringModels
        title="Why CSS"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our CSS Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings title="Our Expertise" items={offerings} />
      <CSSTechnologies />
      <DevelopmentProcess title="Common Use Cases" Process={useCases} />
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

export default CSSPage;
