import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import CSharpTechnologies from "./csharp-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";
import WhyChooseImg from "./../../../../../assets/contact/schedule-a-consultation-img1.jpg";
import WhatWeOfferImg from "./../../../../../assets/contact/hiring-model-img2.webp";
import contactImg from "./../../../../../assets/contact/contact-us-img1.jpg";

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

const dotnetTechDescription = [
    {
    name: ".NET Core",
    description: "A cross-platform, open-source framework for building modern, scalable, high-performance applications for Windows, Linux, and macOS.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
    iconColors: "linear-gradient(135deg, #fbecfdff, #f1d1faff)"
  },
  {
    name: "Blazor",
    description: "A .NET-based framework for building interactive client-side web UIs with C# instead of JavaScript, running via WebAssembly.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg",
    iconColors: "linear-gradient(135deg, #eef2ff, #e0e7ff)"
  },
  {
    name: "UWP",
    description: "Universal Windows Platform, used for developing Windows apps that run across devices like PCs, tablets, Xbox, and HoloLens.",
    icon: "https://cdn.iconscout.com/icon/premium/png-512-thumb/uwp-5363138-4488927.png?f=webp&w=512",
    iconColors: "linear-gradient(135deg, #f1fbe6ff, #e8fddeff)"
  },
    {
    name: "Xamarin",
    description: "A cross-platform mobile app framework using C# and .NET to create native apps for iOS, Android, and Windows.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg",
    iconColors: "linear-gradient(135deg, #eff6ff, #dbeafe)"
  },
    {
    name: "LINQ",
    description: "Language Integrated Query, a .NET feature for querying collections, XML, and databases using C# syntax.",
    icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    iconColors: "linear-gradient(135deg, #f5d4fcff, #fbccf4ff)"
  },
  {
    name: "NHibernate",
    description: "A mature and flexible ORM for .NET, offering database-independent mapping and advanced querying features.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nhibernate/nhibernate-original.svg",
    iconColors: "linear-gradient(135deg, #b8a4a4ff, #fadcdcff)"
  },
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
        image={WhyChooseImg}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={WhatWeOfferImg}
      />
      <ServicesOfferings 
        title="C# Features" 
        items={offerings}
      /> 
      <CSharpTechnologies/>
      <AboutTech technologies={dotnetTechDescription} />
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Build Your C# Solution?"
        buttonText="CONTACT OUR C# TEAM"
        buttonLink="#"
        imageSrc={contactImg}
        imageAlt="C# development services"
      />
    </section>
  );
}

export default CSharpPage;
