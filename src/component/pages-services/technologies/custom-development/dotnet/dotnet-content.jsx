import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import DotNetTechnologies from "./dotnet-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";
import WhyChooseImg from "./../../../../../assets/contact/schedule-a-consultation-img1.jpg";
import WhatWeOfferImg from "./../../../../../assets/contact/hiring-model-img2.webp";
import contactImg from "./../../../../../assets/contact/contact-us-img1.jpg";

const hiringData = [
  { title: 'Enterprise Ready', description: 'Robust framework for mission-critical applications.' },
  { title: 'Cross-Platform', description: 'Build for Windows, Linux, and macOS.' },
  { title: 'High Performance', description: 'Optimized for speed and scalability.' },
  { title: 'Microsoft Ecosystem', description: 'Seamless integration with Azure and Office.' },
  { title: 'Long-Term Support', description: 'Stable releases with extended support.' }
];

const offerData = [
  { title: 'Web Applications', description: 'ASP.NET Core MVC and Web API development.' },
  { title: 'Desktop Applications', description: 'WPF, Windows Forms, and MAUI solutions.' },
  { title: 'Microservices', description: 'Scalable cloud-native architectures.' },
  { title: 'Cloud Migration', description: 'Move legacy apps to Azure cloud.' },
  { title: 'API Development', description: 'RESTful and gRPC services.' },
  { title: 'DevOps Integration', description: 'CI/CD pipelines for .NET apps.' }
];

const offerings = [
  { title: '.NET Architects', description: 'Experts in solution architecture and design.' },
  { title: 'Full-Stack Development', description: 'From backend to frontend integration.' },
  { title: 'Cloud Specialists', description: 'Azure deployment and optimization.' },
  { title: 'Legacy Modernization', description: 'Upgrade older .NET Framework apps.' },
  { title: 'Code Quality', description: 'Clean code and best practices.' },
  { title: 'Performance Optimization', description: 'Improve application speed.' }
];

const useCases = [
  "Enterprise Applications - Scalable business systems.",
  "E-Commerce Platforms - High-traffic online stores.",
  "Financial Systems - Secure banking applications.",
  "Healthcare Solutions - HIPAA compliant systems.",
  "Government Systems - Secure public sector applications."
];
const dotnetTechDescription = [
  // .NET Core & Framework
  {
    name: ".NET Core",
    description: "A cross-platform, high-performance framework for building modern, cloud-based, and internet-connected applications.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    iconColors: "linear-gradient(135deg, #fef0ffff, #fce0feff)"
  },
  {
    name: "ASP.NET Core",
    description: "An open-source, cross-platform framework for building modern web applications, APIs, and microservices with .NET.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    iconColors: "linear-gradient(135deg, #eef2ff, #e0e7ff)"
  },
  
  // DevOps
  {
    name: "Azure DevOps",
    description: "Microsoft's DevOps platform providing CI/CD, repositories, pipelines, and project management for .NET apps.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    iconColors: "linear-gradient(135deg, #eff6ff, #dbeafe)"
  },
  {
    name: "GitHub Actions",
    description: "A CI/CD platform integrated with GitHub, commonly used to automate build and deployment pipelines for .NET projects.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    iconColors: "linear-gradient(135deg, #f3f4f6, #e5e7eb)"
  },
  {
    name: "Docker",
    description: "A containerization tool often used with .NET applications for packaging and deploying apps consistently.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    iconColors: "linear-gradient(135deg, #dbeafe, #bfdbfe)"
  },
  {
    name: "Kubernetes",
    description: "A container orchestration system used for scaling and managing .NET microservices in production.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    iconColors: "linear-gradient(135deg, #cee6f3ff, #bbeaf7ff)"
  },
  
];


function DotNetPage() {
  return (
    <section>
      <Banner 
        heading=".NET Development Services"
        subtext="Enterprise-grade solutions built with Microsoft .NET technologies."
        buttonText="Consult Our Experts"
        note="Our .NET developers build robust, scalable applications using the latest .NET technologies including ASP.NET Core, Blazor, and Azure cloud services for enterprises worldwide."
      />
      <InfoStats
        stats={[
          { number: "80%", label: "Enterprise backend framework" },
          { number: "70%", label: "Cross-platform support via .NET 6+" },
          { number: "65%", label: "Integration with Microsoft tools" }
        ]}
        caption="Trusted by"
        highlight="Fortune 500 Companies"
      />
      <HiringModels
        title="Why Choose .NET"
        cards={hiringData}
        image={WhyChooseImg}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={WhatWeOfferImg}
      />
      <ServicesOfferings 
        title=".Net Features" 
        items={offerings}
      /> 
      <DotNetTechnologies/>
      <AboutTech technologies={dotnetTechDescription} />
      
      
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your .NET Solution?"
        buttonText="CONTACT OUR .NET TEAM"
        buttonLink="#"
        imageSrc={contactImg}
        imageAlt=".NET development services"
      />
    </section>
  );
}

export default DotNetPage;