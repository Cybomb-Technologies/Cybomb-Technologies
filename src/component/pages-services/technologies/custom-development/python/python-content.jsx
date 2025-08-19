import React from "react";
import Banner from "../../../../common-ui/page-php/banner";
import InfoStats from "../../../../common-ui/page-php/info-stats";
import HiringModels from "../../../../common-ui/page-php/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/page-php/whatweoffer";
import ServicesOfferings from "../../../../common-ui/page-php/services-offerings";
import DevelopmentProcess from "../../../../common-ui/page-php/development-process";
import OnlinePresence from "../../../../common-ui/page-php/online-presence";
import PythonTechnologies from "./python-technology";

const hiringData = [
  { title: 'Versatile Language', description: 'From web apps to data science and automation.' },
  { title: 'Rapid Development', description: 'Prototype and iterate quickly.' },
  { title: 'Rich Ecosystem', description: 'Over 300,000 packages available.' },
  { title: 'Readable Code', description: 'Clean syntax for maintainable systems.' },
  { title: 'Cross-Platform', description: 'Runs on Windows, Linux and macOS.' }
];

const offerData = [
  { title: 'Web Development', description: 'Django, Flask and FastAPI applications.' },
  { title: 'Data Science', description: 'Pandas, NumPy and machine learning solutions.' },
  { title: 'Automation Scripts', description: 'Streamline repetitive tasks.' },
  { title: 'API Development', description: 'RESTful and GraphQL APIs.' },
  { title: 'Scraping & Crawling', description: 'Extract web data at scale.' },
  { title: 'DevOps Automation', description: 'Infrastructure as code and CI/CD.' }
];

const offerings = [
  { title: 'Python Experts', description: 'Senior developers with 5+ years experience.' },
  { title: 'Full-Stack Solutions', description: 'From backend to frontend integration.' },
  { title: 'Data Engineering', description: 'ETL pipelines and data processing.' },
  { title: 'Testing & QA', description: 'Unit tests and integration testing.' },
  { title: 'Code Reviews', description: 'Ensure quality and best practices.' },
  { title: 'Performance Tuning', description: 'Optimize slow Python applications.' }
];

const useCases = [
  "Web Applications - Scalable backend systems.",
  "Data Analysis - Process and visualize complex datasets.",
  "Machine Learning - Predictive models and AI solutions.",
  "Microservices - Modular, distributed architectures.",
  "Scripting - Automate business processes."
];

function PythonPage() {
  return (
    <section>
      <Banner 
        heading="Python Development Services"
        subtext="Versatile Python solutions from web apps to data science and automation."
        buttonText="Start Your Project"
        note="Our Python developers create high-performance applications across multiple domains including web development, data analysis, machine learning, and automation using Python's powerful ecosystem."
      />
      <InfoStats
        stats={[
          { number: "90%", label: "Top language for AI/ML apps" },
          { number: "80%", label: "Popular for backend frameworks" },
          { number: "75%", label: "Strong scientific computing usage" }
        ]}
        caption="Trusted by"
        highlight="Startups to Enterprises"
      />
      <HiringModels
        title="Why Python"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our Python Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Our Expertise" 
        items={offerings}
      /> 
      <PythonTechnologies/>
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Python Solution?"
        buttonText="CONTACT OUR PYTHON TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Python development services"
      />
    </section>
  );
}

export default PythonPage;