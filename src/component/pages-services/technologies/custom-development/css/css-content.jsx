import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import CSSTechnologies from "./css-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";
import WhyChooseImg from "./../../../../../assets/contact/schedule-a-consultation-img1.jpg";
import WhatWeOfferImg from "./../../../../../assets/contact/hiring-model-img2.webp";
import contactImg from "./../../../../../assets/contact/contact-us-img1.jpg";

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

const cssTechDescription = [
  // Core Styling
  {
    name: "CSS3",
    description: "The modern styling language for the web, supporting responsive design, animations, transitions, and advanced layout techniques like Flexbox and Grid.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    iconColors: "linear-gradient(135deg, #dbeafe, #bfdbfe)"
  },
  
  {
    name: "Grid Layout",
    description: "A powerful CSS 2D layout system providing precise control over rows and columns for building complex, responsive web designs.",
    icon: "https://cdn0.iconfinder.com/data/icons/text-editor-solid/48/column_table_layout_grid-512.png",
    iconColors: "linear-gradient(135deg, #eca598eb, #d5b7b7e3)"
  },
  // Preprocessors
  {
    name: "Sass",
    description: "A CSS preprocessor adding nesting, variables, mixins, and modularization to simplify and scale styling workflows.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    iconColors: "linear-gradient(135deg, #fce7f3, #fbcfe8)"
  },
  {
    name: "Less",
    description: "A lightweight CSS preprocessor that extends CSS with functions, mixins, and variables for maintainable design systems.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg",
    iconColors: "linear-gradient(135deg, #dbeafe, #93c5fd)"
  },
  {
    name: "Stylus",
    description: "An expressive, dynamic CSS preprocessor with minimal syntax and powerful features for cleaner styling logic.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stylus/stylus-original.svg",
    iconColors: "linear-gradient(135deg, #fef9c3, #fde68a)"
  },

  // Utility Frameworks
  {
    name: "Bulma",
    description: "A modern CSS framework based on Flexbox, providing responsive, clean, and minimal UI components out-of-the-box.",
    icon: "https://www.svgrepo.com/show/353527/bulma.svg",
    iconColors: "linear-gradient(135deg, #dbf6f7ff, #d0e8f6ff)"
  }
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
        title="Why Choose CSS"
        cards={hiringData}
        image={WhyChooseImg}
      />
      <WhatWeOffer
        title="What We Offer "
        items={offerData}
        image={WhatWeOfferImg}
      />
      <ServicesOfferings title="Our Expertise" items={offerings} />
      <CSSTechnologies />
      <AboutTech technologies={cssTechDescription} />
      <DevelopmentProcess title="Common Use Cases" Process={useCases} />
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

export default CSSPage;
