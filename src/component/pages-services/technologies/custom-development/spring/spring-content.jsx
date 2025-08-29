import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import SpringTechnologies from "./spring-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";
import springintegration from "../../../../../assets/tech-logo/spring-integration.png";
import springwebflux from "../../../../../assets/tech-logo/spring-webflux.png";
import springdata from "../../../../../assets/tech-logo/spring-data.png";

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

const springBootTechDescription = [
  {
    name: "Spring Boot",
    description: "Java-based framework that simplifies the development of production-ready applications with minimal configuration.",
    icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
    iconColors: "linear-gradient(135deg, #f0fff4, #c6f6d5)"
  },
  {
    name: "Spring Web Flux",
    description: "Core foundation providing features like dependency injection, AOP, and integration with enterprise-level services.",
    icon: springwebflux,
    iconColors: "linear-gradient(135deg, #ccf4c9ff, #d2fbcfff)"
  },
  {
    name: "Spring Security",
    description: "Powerful authentication and authorization framework for securing applications.",
    icon: "https://www.javacodegeeks.com/wp-content/uploads/2014/07/spring-security-project.png",
    iconColors: "linear-gradient(135deg, #d1fad2ff, #d1fbdaff)"
  },
  {
    name: "Spring Data JPA",
    description: "Simplifies data access by reducing boilerplate code when interacting with relational databases.",
    icon: springdata,
    iconColors: "linear-gradient(135deg, #cdf2d4ff, #d8f6d2ff)"
  },
  {
    name: "Spring Cloud",
    description: "Tools for building distributed systems, microservices, service discovery, and configuration management.",
    icon: "https://www.clipartmax.com/png/full/195-1955230_cloud-gateway-spring-cloud-contract-logo.png",
    iconColors: "linear-gradient(135deg, #d8fdd9ff, #e3ffdfff)"
  },
  {
    name: "Spring Integration",
    description: "Provides production-ready features like health checks, metrics, and monitoring endpoints.",
    icon: springintegration, // same as boot
    iconColors: "linear-gradient(135deg, #d2fbcaff, #c6fad1ff)"
  }
];


function SpringPage() {
  return (
    <section>
      <Banner 
        heading="Spring Boot Development Services"
        subtext="Build enterprise-grade, scalable, and secure applications with the Spring ecosystem."
        buttonText="Start Your Project"
        note="Our Spring developers deliver high-performance solutions using Spring Framework, Spring Boot, Spring Cloud, and more for enterprises across domains."
      />
      <InfoStats
        stats={[
          { number: "80%", label: "Java enterprise framework" },
          { number: "70%", label: "Preferred for microservices" },
          { number: "65%", label: "Stable, long-term adoption" }
        ]}
        caption="Trusted by"
        highlight="Global Enterprises"
      />
      <HiringModels
        title="Why Choose Spring Boot"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="What We offer"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Spring Boot Features" 
        items={offerings}
      /> 
      <SpringTechnologies/>
      <AboutTech technologies={springBootTechDescription} />
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
