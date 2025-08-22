import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import DotNetTechnologies from "./dotnet-technology";

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
        title="Why .NET"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our .NET Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Our Expertise" 
        items={offerings}
      /> 
      <DotNetTechnologies/>
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your .NET Solution?"
        buttonText="CONTACT OUR .NET TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt=".NET development services"
      />
    </section>
  );
}

export default DotNetPage;