import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import DatabaseTechnologies from "./database-technology";

const hiringData = [
  { title: 'Scalability', description: 'Databases designed to handle millions of records efficiently.' },
  { title: 'Cross-Platform', description: 'Supports multiple OS including Linux, Windows, and macOS.' },
  { title: 'High Availability', description: 'Replication, clustering, and backup solutions ensure uptime.' },
  { title: 'Security', description: 'Encryption, authentication, and role-based access controls.' },
  { title: 'Community & Support', description: 'Large active communities and enterprise-grade support.' }
];

const offerData = [
  { title: 'MongoDB Solutions', description: 'NoSQL database for real-time, scalable apps.' },
  { title: 'Django ORM', description: 'Simplified relational database management using Django framework.' },
  { title: 'Firebase Integration', description: 'Realtime database & cloud storage for mobile/web apps.' },
  { title: 'MySQL Development', description: 'Relational DB for robust, high-performance applications.' },
  { title: 'SQL Server Solutions', description: 'Enterprise-grade Microsoft database management.' },
  { title: 'PostgreSQL Expertise', description: 'Open-source DB supporting complex queries and JSON.' }
];

const offerings = [
  { title: 'Database Architects', description: 'Design scalable and secure database solutions.' },
  { title: 'Full-Stack Integration', description: 'Seamless connection with backend and frontend.' },
  { title: 'Cloud Databases', description: 'Deployment on AWS, Azure, and Google Cloud.' },
  { title: 'Migration Services', description: 'Upgrade and migrate legacy databases securely.' },
  { title: 'Data Analytics', description: 'Leverage SQL & NoSQL for insights and reporting.' },
  { title: 'Performance Tuning', description: 'Optimize queries, indexing, and database speed.' }
];

const useCases = [
  "E-Commerce Platforms – Manage products, users, and transactions.",
  "Healthcare Systems – Secure storage of patient and clinical data.",
  "Finance & Banking – High-performance transaction processing.",
  "Government Portals – Reliable citizen service applications.",
  "Startups – Cloud-native, scalable database-backed apps."
];

function DatabaseContent() {
  return (
    <section>
      <Banner 
        heading="Database Development Services"
        subtext="Scalable, secure, and high-performance database solutions."
        buttonText="Consult Our Experts"
        note="Our database experts work with SQL and NoSQL technologies including MongoDB, MySQL, SQL Server, PostgreSQL, Firebase, and Django ORM to deliver reliable and scalable solutions."
      />
      <InfoStats
        stats={[
          { number: "90%", label: "Applications rely on databases" },
          { number: "75%", label: "Cloud database adoption" },
          { number: "80%", label: "Open-source database usage" }
        ]}
        caption="Trusted by"
        highlight="Enterprises & Startups"
      />
      <HiringModels
        title="Why Choose Modern Databases"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our Database Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Our Expertise" 
        items={offerings}
      /> 
      <DatabaseTechnologies/>
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your Database Solution?"
        buttonText="CONTACT OUR DATABASE TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Database development services"
      />
    </section>
  );
}

export default DatabaseContent;
