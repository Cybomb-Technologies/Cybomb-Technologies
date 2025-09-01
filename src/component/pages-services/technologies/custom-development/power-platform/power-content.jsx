import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import PowerPlatformTechnologies from "./power-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";
import WhyChooseImg from "./../../../../../assets/contact/schedule-a-consultation-img1.jpg";
import WhatWeOfferImg from "./../../../../../assets/contact/hiring-model-img2.webp";
import contactImg from "./../../../../../assets/contact/contact-us-img1.jpg";

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

const powerPlatformTechDescription = [
  // Core Components
  {
    name: "Power Apps",
    description: "A low-code application development platform that allows businesses to create custom apps quickly to solve unique challenges and automate processes.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Microsoft_Power_Platform_logo.svg/768px-Microsoft_Power_Platform_logo.svg.png?20231122081707",
    iconColors: "linear-gradient(135deg, #b2f5c5ff, #a6f6baff)"
  },
  {
    name: "Power Automate",
    description: "A workflow automation tool that enables users to streamline repetitive tasks and integrate apps and services with minimal coding.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Microsoft_Power_Automate.svg/144px-Microsoft_Power_Automate.svg.png?20240215095559",
    iconColors: "linear-gradient(135deg, #aad2f0ff, #b5e6fdff)"
  },
  {
    name: "Power BI",
    description: "A business intelligence and analytics tool that allows users to visualize data, generate insights, and create interactive dashboards.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/900px-New_Power_BI_Logo.svg.png?20210102182532",
    iconColors: "linear-gradient(135deg, #eae2bfff, #efe7b8ff)"
  },
  {
    name: "Power Virtual Agents",
    description: "A no-code chatbot-building platform that enables businesses to create AI-powered chatbots for customer service and internal use cases.",
    icon: "https://www.encorebusiness.com/wp-content/uploads/2022/06/PowerVirtualAgents.png",
    iconColors: "linear-gradient(135deg, #b4d9f6ff, #acd5ebff)"
  },

  // Connectors
  {
    name: "SharePoint",
    description: "A collaborative platform used to store, organize, share, and access information seamlessly within Microsoft 365.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg/768px-Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg.png?20190925170659",
    iconColors: "linear-gradient(135deg, #b3f0f2ff, #aaeff4ff)"
  },
  
  {
    name: "Office 365",
    description: "A suite of productivity tools (Word, Excel, Outlook, Teams, etc.) that integrates seamlessly with Power Platform for enhanced collaboration.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/768px-Microsoft_365_%282022%29.svg.png?20231004051714",
    iconColors: "linear-gradient(135deg, #b7edf6ff, #b6e8f7ff)"
  },
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
        image={WhyChooseImg}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={WhatWeOfferImg}
      />
      <ServicesOfferings 
        title="Power Platform Features" 
        items={offerings}
      /> 
      <PowerPlatformTechnologies/> 
      <AboutTech technologies={powerPlatformTechDescription} />
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Transform Your Business with Power Platform?"
        buttonText="TALK TO OUR EXPERTS"
        buttonLink="#"
        imageSrc={contactImg}
        imageAlt="Power Platform services"
      />
    </section>
  );
}

export default PowerPlatformContent;