import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import TechnologiesToolsSection from "./laravel-technology";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";

const hiringData = [
  {
    title: 'Proven Laravel Expertise',
    description: 'Over a decade of experience building scalable Laravel applications.',
  },
  {
    title: 'MVC Architecture',
    description: 'Clean, maintainable code following Laravel best practices.',
  },
  {
    title: 'Eloquent ORM',
    description: 'Efficient database operations with Laravel\'s powerful ORM.',
  },
  {
    title: 'Rapid Development',
    description: 'Leverage Laravel\'s built-in features for faster delivery.',
  },
  {
    title: 'API-First Approach',
    description: 'Build robust RESTful APIs with Laravel Sanctum/Passport.',
  },
];

const offerData = [
  {
    title: 'Custom Laravel Development',
    description: 'Tailored web applications built with Laravel framework.'
  },
  {
    title: 'Laravel API Development',
    description: 'Secure, scalable RESTful APIs for web and mobile apps.'
  },
  {
    title: 'Laravel E-Commerce Solutions',
    description: 'Custom online stores with Laravel Cashier and payment integrations.'
  },
  {
    title: 'Laravel CMS Development',
    description: 'Custom content management systems built on Laravel.'
  },
  {
    title: 'Laravel Migration & Upgrades',
    description: 'Upgrade legacy systems to modern Laravel versions.'
  },
  {
    title: 'Laravel Maintenance',
    description: 'Ongoing support, optimization, and security updates.'
  }
];

const offerings = [
  {
    title: 'MVC Architecture',
    description: 'Provides a clean separation of concerns for structured application development.',
  },
  {
    title: 'Eloquent ORM',
    description: 'Simplifies database interactions with an expressive and elegant ActiveRecord implementation.',
  },
  {
    title: 'Blade Templating',
    description: 'Lightweight and powerful templating engine with template inheritance and components.',
  },
  {
    title: 'Artisan CLI',
    description: 'Command-line tool for automating repetitive tasks like migrations, testing, and scaffolding.',
  },
  {
    title: 'Built-in Authentication',
    description: 'Pre-configured authentication system with guards, providers, and password hashing.',
  },
  {
    title: 'Queue & Task Scheduling',
    description: 'Handles background jobs, delayed tasks, and cron-style scheduling with ease.',
  },
];

const useCases = [
  "Enterprise Applications – Scalable Laravel solutions for large businesses.",
  "SAAS Platforms – Multi-tenant applications with Laravel.",
  "API Backends – Robust Laravel APIs for mobile and web apps.",
  "E-Commerce Systems – Custom online stores with Laravel.",
  "CRM/ERP Systems – Business management systems built on Laravel."
];

function LaravelAppContent() {
  return (
    <section>
      <Banner 
        heading="Laravel Development Services"
        subtext="Build elegant, scalable web applications with Laravel PHP framework."
        buttonText="Book Free Consultation"
        note="Our Laravel development team creates high-performance web applications using Laravel's powerful features. From custom web apps to complex enterprise solutions, we leverage Laravel's ecosystem to deliver secure, maintainable, and scalable products."
      />
      <InfoStats
        stats={[
          { number: "80%", label: "Popular PHP framework" },
          { number: "70%", label: "MVC architecture adoption" },
          { number: "65%", label: "Strong community support" }
        ]}
        caption="Trusted by"
        highlight="Laravel Development Teams Worldwide"
      />
      <HiringModels
        title="Why Choose Laravel"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Laravel Features" 
        items={offerings}
      /> 
      <TechnologiesToolsSection/>
      <DevelopmentProcess 
        title="Laravel Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Let's Build Your Next Laravel Application"
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Laravel development services"
      />
    </section>
  );
}

export default LaravelAppContent;