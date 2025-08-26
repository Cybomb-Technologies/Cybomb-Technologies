import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import PowerPlatformTechnologies from "./power-technology";

const hiringData = [
  {
    title: 'Rapid Application Development',
    description: 'Build solutions 10x faster than traditional development methods.',
  },
  {
    title: 'Low-Code Platform',
    description: 'Empower citizen developers while maintaining IT governance.',
  },
  {
    title: 'Microsoft Ecosystem',
    description: 'Seamless integration with Office 365, Dynamics 365, and Azure.',
  },
  {
    title: 'AI Capabilities',
    description: 'Leverage built-in AI models with no coding required.',
  },
  {
    title: 'Scalable Solutions',
    description: 'From departmental apps to enterprise-wide solutions.',
  },
];

const offerData = [
  {
    title: 'Custom Power Apps',
    description: 'Canvas and model-driven apps tailored to your business processes.'
  },
  {
    title: 'Workflow Automation',
    description: 'Streamline operations with Power Automate flows.'
  },
  {
    title: 'Business Intelligence',
    description: 'Interactive dashboards and reports with Power BI.'
  },
  {
    title: 'Chatbots',
    description: 'AI-powered virtual agents with Power Virtual Agents.'
  },
  {
    title: 'Data Solutions',
    description: 'Centralized data management with Dataverse.'
  },
  {
    title: 'Integration Services',
    description: 'Connect Power Platform with your existing systems.'
  }
];

const offerings = [
  {
    title: 'Certified Experts',
    description: 'Microsoft-certified Power Platform consultants and developers.',
  },
  {
    title: 'End-to-End Solutions',
    description: 'From requirements gathering to deployment and support.',
  },
  {
    title: 'UI/UX Focus',
    description: 'Beautiful, intuitive interfaces for your Power Apps.',
  },
  {
    title: 'Governance Strategy',
    description: 'Center of Excellence implementation and best practices.',
  },
  {
    title: 'Training Programs',
    description: 'Enable your team to build and maintain solutions.',
  },
  {
    title: 'Premium Components',
    description: 'Custom PCF controls and advanced capabilities.',
  },
];

const useCases = [
  "Business Process Automation - Streamline approvals, notifications, and workflows.",
  "Departmental Apps - HR portals, inventory trackers, and field service solutions.",
  "Customer Portals - Self-service experiences with Power Pages.",
  "Data Visualization - Real-time dashboards for executive insights.",
  "AI Solutions - Document processing, prediction models, and sentiment analysis."
];

function PowerPlatformContent() {
  return (
    <section>
      <Banner 
        heading="Power Platform Development Services"
        subtext="Transform your business with custom low-code solutions from Microsoft Power Platform."
        buttonText="Get a Free Assessment"
        note="Our Power Platform experts help organizations automate processes, analyze data, and build custom applications faster than ever. Whether you need simple automation or complex enterprise solutions, we deliver business value quickly with Microsoft's leading low-code platform."
      />
      <InfoStats
        stats={[
          { number: "75%", label: "Microsoft-led low-code solution" },
          { number: "65%", label: "Integrates with Office & Dynamics" },
          { number: "70%", label: "Adopted for automation & apps" }
        ]}
        caption="Trusted by"
        highlight="Enterprises and SMBs"
      />
      <HiringModels
        title="Why Choose Power Platform"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Power Platform Features" 
        items={offerings}
      /> 
      <PowerPlatformTechnologies/>
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Transform Your Business with Power Platform?"
        buttonText="TALK TO OUR EXPERTS"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Power Platform services"
      />
    </section>
  );
}

export default PowerPlatformContent;