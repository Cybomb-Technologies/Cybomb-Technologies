import React from "react";
import Banner from "../../../../common-ui/page-php/banner";
import InfoStats from "../../../../common-ui/page-php/info-stats";
import HiringModels from "../../../../common-ui/page-php/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/page-php/whatweoffer";
import ServicesOfferings from "../../../../common-ui/page-php/services-offerings";
import DevelopmentProcess from "../../../../common-ui/page-php/development-process";
import OnlinePresence from "../../../../common-ui/page-php/online-presence";
import JavaCreatorTechnologies from "./javascript-technology";

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

function JavaScriptPage() {
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
          { number: "15+", label: "Years Experience" },
          { number: "200+", label: "Java Projects" },
          { number: "99.9%", label: "Uptime" }
        ]}
        caption="Trusted by"
        highlight="Fortune 500 Companies"
      />
      <HiringModels
        title="Why Java"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our Java Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Our Expertise" 
        items={offerings}
      /> 
      <JavaCreatorTechnologies/>
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Java Solution?"
        buttonText="CONTACT OUR TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Java development services"
      />
    </section>
  );
}

export default JavaScriptPage;