import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import PythonTechnologies from "./python-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";

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

const pythonTechDescription = [
  // --- Frameworks ---
  
  {
    name: "Flask",
    description: "A lightweight Python micro-framework for building simple yet powerful web applications. Provides flexibility with extensions for databases, authentication, and APIs.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    iconColors: "linear-gradient(135deg, #d5d4d4ff, #cbcbcbff)"
  },
    {
    name: "Pyramid",
    description: "A flexible Python web framework suitable for both small and large applications, offering URL mapping, templating, and security features.",
    icon: "https://cdn-icons-png.flaticon.com/512/6409/6409798.png",
    iconColors: "linear-gradient(135deg, #f8e8cfff, #f7dad2ff)"
  },
  

  // --- Data Science ---
  {
    name: "Pandas",
    description: "A data analysis and manipulation library for Python, offering data structures like DataFrames and powerful tools for cleaning, filtering, and transforming data.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    iconColors: "linear-gradient(135deg, #d5cefbff, #d8cbf2ff)"
  },
  {
    name: "NumPy",
    description: "The core library for numerical computing in Python, providing support for arrays, matrices, and high-performance mathematical functions.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    iconColors: "linear-gradient(135deg, #d1eff9ff, #c8ebf5ff)"
  },
  {
    name: "SciPy",
    description: "A scientific computing library built on NumPy, offering advanced modules for optimization, integration, interpolation, and statistics.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/SCIPY_2.svg/768px-SCIPY_2.svg.png?20200904111722",
    iconColors: "linear-gradient(135deg, #cce2f6ff, #b7e9eeff)"
  },
  {
    name: "Django",
    description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design. Comes with ORM, admin panel, authentication, and scalability.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    iconColors: "linear-gradient(135deg, #b2b4b3ff, #a4a4a4ff)"
  },
  
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
        title="Why Choose Python"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Python Features" 
        items={offerings}
      /> 
      <PythonTechnologies/>
            <AboutTech technologies={pythonTechDescription} />
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