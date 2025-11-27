
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import RailsTechnologiesTools from "./ror-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";
import WhyChooseImg from "./../../../../../assets/contact/schedule-a-consultation-img1.jpg";
import WhatWeOfferImg from "./../../../../../assets/contact/hiring-model-img2.webp";
import contactImg from "./../../../../../assets/contact/contact-us-img1.jpg";
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

const rorTechDescription = [
  // --- Rails Ecosystem ---
  {
    name: "Ruby",
    description: "A dynamic, open-source programming language focused on simplicity and productivity. It powers the Ruby on Rails framework with its clean, readable syntax.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    iconColors: "linear-gradient(135deg, #f7c6c3ff, #ecc3d3ff)"
  },
  {
    name: "RSpec",
    description: "A testing framework for Ruby and Rails applications. It focuses on behavior-driven development (BDD) with human-readable syntax.",
    icon: "https://rspec.info/images/logo.png",
    iconColors: "linear-gradient(135deg, #cef8fbff, #c7ebf5ff)"
  },
  {
    name: "Rails",
    description: "A full-stack web application framework written in Ruby. Rails follows the MVC pattern and emphasizes convention over configuration and developer happiness.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",
    iconColors: "linear-gradient(135deg, #fbbebeff, #efbabaff)"
  },
  
  {
    name: "Sidekiq",
    description: "A background job processing framework for Ruby, using Redis as a job queue to handle asynchronous tasks at scale.",
    icon: "https://www.svgrepo.com/show/354344/sidekiq-icon.svg",
    iconColors: "linear-gradient(135deg, #f7cbd9ff, #f3c5b5ff)"
  },
    // --- Frontend ---
  
  {
    name: "Vue.js",
    description: "A progressive JavaScript framework for building UIs. It can be used with Rails to build reactive, lightweight frontends.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    iconColors: "linear-gradient(135deg, #c7f7e1ff, #c6f8ddff)"
  },
  {
    name: "Redis",
    description: "An in-memory key-value store used in Rails for caching, sessions, and background job queues (e.g., Sidekiq).",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    iconColors: "linear-gradient(135deg, #f1cbc8ff, #f4d4ccff)"
  }  
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
        image={WhyChooseImg}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={WhatWeOfferImg}
      />
      <ServicesOfferings 
        title="Rails Features" 
        items={offerings}
      /> 
      <RailsTechnologiesTools/>
      <AboutTech technologies={rorTechDescription} />
      <DevelopmentProcess 
        title="Rails Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Rails Application?"
        buttonText="CONTACT OUR RAILS TEAM"
        buttonLink="#"
        imageSrc={contactImg}
        imageAlt="Rails development services"
      />
    </section>
  );
}

export default RORAppContent;