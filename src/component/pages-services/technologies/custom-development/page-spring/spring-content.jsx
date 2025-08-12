import React from "react";
import Banner from "../../../../common-ui/page-php/banner";
import InfoStats from "../../../../common-ui/page-php/info-stats";
import HiringModels from "../../../../common-ui/page-php/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/page-php/whatweoffer";
import ServicesOfferings from "../../../../common-ui/page-php/services-offerings";
import DevelopmentProcess from "../../../../common-ui/page-php/development-process";
import OnlinePresence from "../../../../common-ui/page-php/online-presence";
import SpringTechnologies from "./spring-technology";

const hiringData = [
  { title: 'Enterprise-Grade', description: 'Robust solutions for complex business needs.' },
  { title: 'Microservices Ready', description: 'Spring Boot & Cloud for scalable systems.' },
  { title: 'Fast Development', description: 'Pre-built modules for quick delivery.' },
  { title: 'Secure by Design', description: 'Built-in authentication & authorization.' },
  { title: 'Integration Friendly', description: 'Easily connect with other systems.' }
];

const offerData = [
  { title: 'Custom Enterprise Apps', description: 'Tailored Spring-based applications.' },
  { title: 'Microservices Architecture', description: 'Distributed systems with Spring Cloud.' },
  { title: 'API Development', description: 'RESTful and GraphQL API services.' },
  { title: 'Legacy Modernization', description: 'Upgrade old Java apps with Spring.' },
  { title: 'Batch Processing', description: 'Data jobs with Spring Batch.' },
  { title: 'Integration Services', description: 'Spring Integration & messaging solutions.' }
];

const offerings = [
  { title: 'Spring Experts', description: 'Certified developers with deep expertise.' },
  { title: 'Full-Stack Java', description: 'Backend to frontend integration.' },
  { title: 'Cloud Deployments', description: 'Spring apps on AWS, Azure, GCP.' },
  { title: 'Testing & QA', description: 'Comprehensive test coverage.' },
  { title: 'Performance Optimization', description: 'Faster, more efficient applications.' },
  { title: 'Maintenance & Support', description: 'Long-term application care.' }
];

const useCases = [
  "Enterprise Resource Planning systems",
  "Banking & Financial Applications",
  "Large-scale eCommerce platforms",
  "Real-time messaging systems",
  "API-driven SaaS platforms"
];

function SpringPage() {
  return (
    <section>
      <Banner 
        heading="Spring Development Services"
        subtext="Build enterprise-grade, scalable, and secure applications with the Spring ecosystem."
        buttonText="Start Your Project"
        note="Our Spring developers deliver high-performance solutions using Spring Framework, Spring Boot, Spring Cloud, and more for enterprises across domains."
      />
      <InfoStats
        stats={[
          { number: "12+", label: "Years Experience" },
          { number: "700+", label: "Spring Projects" },
          { number: "98%", label: "Client Satisfaction" }
        ]}
        caption="Trusted by"
        highlight="Global Enterprises"
      />
      <HiringModels
        title="Why Choose Spring"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our Spring Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Our Expertise" 
        items={offerings}
      /> 
      <SpringTechnologies/>
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Spring Solution?"
        buttonText="CONTACT OUR SPRING TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Spring development services"
      />
    </section>
  );
}

export default SpringPage;
