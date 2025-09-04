import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import JavaTechnologies from "./java-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";
import WhyChooseImg from "./../../../../../assets/contact/schedule-a-consultation-img1.jpg";
import WhatWeOfferImg from "./../../../../../assets/contact/hiring-model-img2.webp";
import contactImg from "./../../../../../assets/contact/contact-us-img1.jpg";

const hiringData = [
  { title: 'Enterprise Grade', description: 'Rock-solid applications for mission-critical systems.' },
  { title: 'Performance', description: 'High-throughput, low-latency solutions.' },
  { title: 'Security', description: 'Built with enterprise security standards.' },
  { title: 'Scalability', description: 'Handles growing user loads with ease.' },
  { title: 'Ecosystem', description: 'Largest selection of libraries and frameworks.' }
];

const offerData = [
  { title: 'Custom Java Applications', description: 'Tailored solutions for your business needs.' },
  { title: 'Spring Boot Microservices', description: 'Cloud-native microservice architectures.' },
  { title: 'Enterprise Integration', description: 'Connect legacy and modern systems.' },
  { title: 'API Development', description: 'RESTful and GraphQL APIs.' },
  { title: 'Legacy Modernization', description: 'Update and refactor older Java systems.' },
  { title: 'Performance Tuning', description: 'Optimize existing Java applications.' }
];

const offerings = [
  { title: 'Java Architects', description: 'Experts in system design and architecture.' },
  { title: 'Spring Specialists', description: 'Deep knowledge of Spring ecosystem.' },
  { title: 'Cloud Native', description: 'Deployment to AWS, Azure and GCP.' },
  { title: 'CI/CD Pipelines', description: 'Automated testing and deployment.' },
  { title: 'Code Quality', description: 'Clean, maintainable code practices.' },
  { title: 'Agile Development', description: 'Iterative delivery with Scrum/Kanban.' }
];

const useCases = [
  "Banking Systems - Secure financial applications.",
  "E-Commerce Platforms - High-volume transaction systems.",
  "Healthcare Solutions - HIPAA compliant applications.",
  "Telecom Systems - High-concurrency solutions.",
  "IoT Backends - Process device data at scale."
];

const javaTechDescription = [
  // Java Ecosystem
  {
    name: "Java SE",
    description: "Java Standard Edition provides the core functionality of the Java language, including APIs for basic data structures, networking, and concurrency.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    iconColors: "linear-gradient(135deg, #c0d5f5e1, #cddbfaff)"
  },
  {
    name: "Spring Boot",
    description: "A powerful framework for building production-ready Java applications with minimal configuration, offering embedded servers and microservice support.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    iconColors: "linear-gradient(135deg, #dcfce7, #bbf7d0)"
  },
{
    name: "Hibernate",
    description: "An ORM (Object Relational Mapping) framework that simplifies database interactions by mapping Java objects to relational tables.",
    icon: "https://logo.svgcdn.com/l/hibernate.png",
    iconColors: "linear-gradient(135deg, #eae4ffbd, #e2d8b05c)"
  },
  {
    name: "Struts",
    description: "An open-source framework for creating Java EE web applications using the MVC design pattern.",
    icon: "https://www.svgrepo.com/show/354402/struts.svg",
    iconColors: "linear-gradient(135deg, #c5d7faff, #cadcf7ff)"
  },
  {
    name: "Play",
    description: "A reactive web framework for Java and Scala, designed for building scalable and modern web applications.",
    icon: "https://avatars.githubusercontent.com/u/319107?v=4",
    iconColors: "linear-gradient(135deg, #ccfbf1, #99f6e4)"
  },
  {
    name: "Tomcat",
    description: "An open-source implementation of the Java Servlet, JSP, and WebSocket technologies, widely used as a lightweight application server.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Apache_Tomcat_logo.svg/1200px-Apache_Tomcat_logo.svg.png",
    iconColors: "linear-gradient(135deg, #fef3c7, #fde68a)"
  }  
];


function JavaPage() {
  return (
    <section>
      <Banner 
        heading="Java Development Services"
        subtext="Enterprise-grade Java solutions for mission-critical applications."
        buttonText="Consult Our Experts"
        note="Our Java architects and developers build robust, scalable applications using the Java ecosystem including Spring Boot, Microservices, and cloud-native architectures for enterprises worldwide."
      />
      <InfoStats
        stats={[
          { number: "95%", label: "Used in most modern web apps" },
          { number: "85%", label: "Core for front-end frameworks" },
          { number: "75%", label: "Drives full-stack dev (Node.js)" }
        ]}
        caption="Trusted by"
        highlight="Fortune 500 Companies"
      />
      <HiringModels
        title="Why Java"
        cards={hiringData}
        image={WhyChooseImg}
      />
      <WhatWeOffer
        title="Our Java Services"
        items={offerData}
        image={WhatWeOfferImg}
      />
      <ServicesOfferings 
        title="Our Expertise" 
        items={offerings}
      /> 
      <JavaTechnologies/>
                  <AboutTech technologies={javaTechDescription} />
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Java Solution?"
        buttonText="CONTACT OUR TEAM"
        buttonLink="#"
        imageSrc={contactImg}
        imageAlt="Java development services"
      />
    </section>
  );
}

export default JavaPage;