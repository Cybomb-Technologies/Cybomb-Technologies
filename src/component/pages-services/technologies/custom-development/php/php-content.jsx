import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import TechnologiesToolsSection from "./php-technology";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";

const hiringData = [
  {
    title: 'Proven Reliability',
    description: 'Powering millions of websites for over two decades.',
  },
  {
    title: 'Open-Source & Cost-Effective',
    description: 'No licensing fees and extensive community support.',
  },
  {
    title: 'Cross-Platform Compatibility',
    description: 'Works seamlessly on all major operating systems and servers.',
  },
  {
    title: 'Fast Development',
    description: 'Large library of frameworks and tools to speed up delivery.',
  },
  {
    title: 'Flexible & Scalable',
    description: 'Perfect for projects ranging from startups to enterprise applications.',
  },
];

const offerData = [
  {
    title: 'Custom PHP Web Development',
    description: 'Tailored web applications designed to meet unique business goals.'
  },
  {
    title: 'CMS Development & Customization',
    description: 'WordPress, Drupal, Joomla, Magento, and more.'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Secure and scalable online stores with WooCommerce, Magento, and custom builds.'
  },
  {
    title: 'API Development & Integration',
    description: 'REST, SOAP, and GraphQL-based API services.'
  },
  {
    title: 'Migration & Upgrades',
    description: 'Move from outdated tech stacks to modern PHP solutions.'
  },
  {
    title: 'Support & Maintenance',
    description: 'Continuous monitoring, bug fixes, and feature enhancements.'
  }
];

const offerings = [
  {
    title: 'Open Source',
    description:
      'PHP is free to use and supported by a large community of developers worldwide.',
  },
  {
    title: 'Cross-Platform',
    description:
      'Runs smoothly on major operating systems like Windows, Linux, and macOS.',
  },
  {
    title: 'Database Integration',
    description:
      'Seamlessly connects with MySQL, PostgreSQL, MongoDB, and other databases.',
  },
  {
    title: 'Object-Oriented Support',
    description:
      'Supports OOP concepts such as classes, inheritance, and interfaces for modular development.',
  },
  {
    title: 'Built-in Functions',
    description:
      'Provides thousands of ready-to-use functions for string, array, file handling, and more.',
  },
  {
    title: 'Security Features',
    description:
      'Offers features like data encryption, hashing, and secure session handling.',
  },
];


const useCases = [
  "Corporate Websites – Professional, responsive, and brand-focused sites.",
  "E-Commerce Platforms – Scalable online stores with advanced features.",
  "Web Portals – Custom portals for internal teams, customers, or partners.",
  "SaaS Applications – Subscription-based software solutions.",
  "Community Platforms – Forums, social networks, and membership sites."
];

function PHPAppContent() {
  return (
   <section>
    <Banner 
        heading="PHP Development service"
        subtext="Build dynamic, scalable, and secure web applications with the power of PHP."
        buttonText="Book Free Consultation"
        note="Our PHP development expertise helps businesses create fast, feature-rich, and cost-effective web solutions from small websites to enterprise-grade platforms. Whether it's custom development, CMS integration, or API-driven solutions, we deliver high-performance results tailored to your needs."
    />
    <InfoStats
        stats={[
            { number: "75%", label: "Widely used in legacy web apps" },
            { number: "65%", label: "Still powers major platforms" },
            { number: "60%", label: "Large open-source ecosystem" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />

 <HiringModels
      title="Why Choose PHP"
      cards={hiringData}
      image={placeholderImage}
    />
    <WhatWeOffer
      title="What We Offer"
      items={offerData}
      image={placeholderImage}
    />
     <ServicesOfferings 
          title="PHP Features" 
          items={offerings}
        /> 
        <TechnologiesToolsSection/>
            <DevelopmentProcess 
                title="Use Case"
                Process={useCases}
                />
        <OnlinePresence 
              title = "Let's Find the right PHP for your business."
              buttonText = "CONTACT US"
              buttonLink = "#"
              imageSrc = {placeholderImage}
              imageAlt = "CRM services"/>
    </section>
      );
}

export default PHPAppContent;