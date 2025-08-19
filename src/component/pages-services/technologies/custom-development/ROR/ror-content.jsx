
import Banner from "../../../../common-ui/page-php/banner";
import InfoStats from "../../../../common-ui/page-php/info-stats";
import HiringModels from "../../../../common-ui/page-php/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/page-php/whatweoffer";
import ServicesOfferings from "../../../../common-ui/page-php/services-offerings";
import DevelopmentProcess from "../../../../common-ui/page-php/development-process";
import OnlinePresence from "../../../../common-ui/page-php/online-presence";
import RailsTechnologiesTools from "./ror-technology";

// Main content data
const hiringData = [
  {
    title: 'Rails Convention Over Configuration',
    description: 'Faster development with sensible defaults and established patterns.',
  },
  {
    title: 'Full-Stack Framework',
    description: 'Complete solution from database to frontend in one ecosystem.',
  },
  {
    title: 'MVC Architecture',
    description: 'Clean separation of concerns for maintainable applications.',
  },
  {
    title: 'ActiveRecord ORM',
    description: 'Powerful database interactions with minimal boilerplate.',
  },
  {
    title: 'Scalable Solutions',
    description: 'Proven architecture for growing businesses and high traffic.',
  },
];

const offerData = [
  {
    title: 'Custom Rails Applications',
    description: 'Tailored web applications built with Ruby on Rails framework.'
  },
  {
    title: 'API Development',
    description: 'High-performance JSON APIs for web and mobile applications.'
  },
  {
    title: 'Rails E-Commerce',
    description: 'Scalable online stores with Solidus/Spree or custom solutions.'
  },
  {
    title: 'Legacy Modernization',
    description: 'Upgrade and optimize older Rails applications.'
  },
  {
    title: 'Microservices Architecture',
    description: 'Modular Rails services for complex systems.'
  },
  {
    title: 'DevOps & Deployment',
    description: 'CI/CD, containerization, and cloud deployment for Rails apps.'
  }
];

const offerings = [
  {
    title: 'Rails Core Experts',
    description: 'Developers with deep understanding of Rails internals and best practices.',
  },
  {
    title: 'Test-Driven Development',
    description: 'RSpec, Capybara, and Cucumber for reliable applications.',
  },
  {
    title: 'Performance Optimization',
    description: 'N+1 query prevention, caching strategies, and background jobs.',
  },
  {
    title: 'Modern Frontends',
    description: 'Hotwire, Stimulus, and React/Vue integrations.',
  },
  {
    title: 'Third-Party Integrations',
    description: 'Payment gateways, APIs, and service connections.',
  },
  {
    title: 'Security Hardening',
    description: 'Protection against common vulnerabilities in Rails apps.',
  },
];

const useCases = [
  "SAAS Platforms - Multi-tenant applications with subscription billing.",
  "Marketplaces - Complex transactional systems with multiple user types.",
  "Content Management - Custom publishing platforms and CMS solutions.",
  "Data Processing - High-volume data import/export and analysis tools.",
  "Internal Tools - Business process automation and admin dashboards."
];


// Main Component
function RORAppContent() {
  return (
    <section>
      <Banner 
        heading="Ruby on Rails Development Services"
        subtext="Build robust, scalable web applications with the productivity of Rails."
        buttonText="Book Free Consultation"
        note="Our Rails developers create high-performance web applications using Ruby on Rails framework. From MVPs to enterprise solutions, we leverage Rails' conventions and ecosystem to deliver maintainable, secure, and scalable products."
      />
      <InfoStats
        stats={[
          { number: "70%", label: "Used for rapid web prototyping" },
          { number: "65%", label: "Emphasizes convention over config" },
          { number: "60%", label: "Still adopted in startups" }
        ]}
        caption="Trusted by"
        highlight="Startups and Scaleups Worldwide"
      />
      <HiringModels
        title="Why Choose Rails"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our Rails Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Our Rails Expertise" 
        items={offerings}
      /> 
      <RailsTechnologiesTools/>
      <DevelopmentProcess 
        title="Rails Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Rails Application?"
        buttonText="CONTACT OUR RAILS TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Rails development services"
      />
    </section>
  );
}

export default RORAppContent;