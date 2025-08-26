import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import CSharpTechnologies from "./csharp-technology";

const hiringData = [
  { title: 'Cross-Platform', description: 'Run on Windows, Linux, and macOS with .NET Core.' },
  { title: 'Enterprise-Ready', description: 'Robust for large-scale systems.' },
  { title: 'Rich Ecosystem', description: 'Vast libraries and frameworks available.' },
  { title: 'High Performance', description: 'Optimized for speed and scalability.' },
  { title: 'Secure', description: 'Built-in security features for enterprise needs.' }
];

const offerData = [
  { title: 'Web Application Development', description: 'ASP.NET MVC, Blazor, and Razor Pages.' },
  { title: 'Desktop Applications', description: 'WPF, WinForms, and MAUI-based apps.' },
  { title: 'API Development', description: 'RESTful and gRPC APIs using .NET.' },
  { title: 'Mobile Development', description: 'Cross-platform mobile apps with Xamarin & MAUI.' },
  { title: 'Cloud Integration', description: 'Azure-based solutions with C# and .NET.' },
  { title: 'Legacy Modernization', description: 'Upgrade older C# applications.' }
];

const offerings = [
  { title: 'C# Experts', description: 'Developers with years of .NET experience.' },
  { title: 'Cloud Deployments', description: 'Deploy apps to Azure, AWS, GCP.' },
  { title: 'Testing & QA', description: 'xUnit, NUnit, and integration testing.' },
  { title: 'Performance Optimization', description: 'Tune your apps for peak performance.' },
  { title: 'Full-Stack Development', description: 'From backend APIs to frontend UIs.' },
  { title: 'Ongoing Support', description: 'Long-term maintenance and feature updates.' }
];

const useCases = [
  "Enterprise Resource Planning systems",
  "Customer Relationship Management platforms",
  "Banking and finance applications",
  "Cloud-native microservices",
  "Cross-platform desktop & mobile apps"
];

function CSharpPage() {
  return (
    <section>
      <Banner 
        heading="C# Development Services"
        subtext="Build high-performance, secure, and scalable applications with C# and .NET."
        buttonText="Start Your Project"
        note="Our C# developers deliver enterprise-grade solutions using the latest .NET technologies for web, desktop, mobile, and cloud applications."
      />
      <InfoStats
        stats={[
          { number: "85%", label: "Backbone of Microsoft dev" },
          { number: "70%", label: "Core for .NET ecosystem" },
          { number: "65%", label: "Used in games, apps & web" }
        ]}
        caption="Trusted by"
        highlight="Enterprises Worldwide"
      />
      <HiringModels
        title="Why Choose C#"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="C# Features" 
        items={offerings}
      /> 
      <CSharpTechnologies/>
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your C# Solution?"
        buttonText="CONTACT OUR C# TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="C# development services"
      />
    </section>
  );
}

export default CSharpPage;
