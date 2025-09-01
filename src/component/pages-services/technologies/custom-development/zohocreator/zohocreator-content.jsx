import React from "react";
import Banner from "../../../../common-ui/custom-development/banner";
import InfoStats from "../../../../common-ui/custom-development/info-stats";
import HiringModels from "../../../../common-ui/custom-development/hiring";
import WhatWeOffer from "../../../../common-ui/custom-development/whatweoffer";
import ServicesOfferings from "../../../../common-ui/custom-development/services-offerings";
import DevelopmentProcess from "../../../../common-ui/custom-development/development-process";
import OnlinePresence from "../../../../common-ui/custom-development/online-presence";
import ZohoCreatorTechnologies from "./zohocreator-technology";
import AboutTech from "../../../../common-ui/custom-development/about-tech";
import WhyChooseImg from "./../../../../../assets/contact/schedule-a-consultation-img1.jpg";
import WhatWeOfferImg from "./../../../../../assets/contact/hiring-model-img2.webp";
import contactImg from "./../../../../../assets/contact/contact-us-img1.jpg";

const hiringData = [
  { title: 'Rapid Development', description: 'Build apps 10x faster than traditional coding.' },
  { title: 'No-Code/Low-Code', description: 'Empower business users to create solutions.' },
  { title: 'Zoho Ecosystem', description: 'Seamless integration with all Zoho products.' },
  { title: 'Cost Effective', description: 'Reduce development costs significantly.' },
  { title: 'Mobile Ready', description: 'Apps work on all devices out of the box.' }
];

const offerData = [
  { title: 'Custom Zoho Apps', description: 'Tailored solutions for your business processes.' },
  { title: 'Workflow Automation', description: 'Streamline operations with Zoho Flow.' },
  { title: 'Zoho CRM Customization', description: 'Extend CRM to match your sales process.' },
  { title: 'Data Migration', description: 'Move data from legacy systems to Zoho.' },
  { title: 'Integration Services', description: 'Connect Zoho with other business apps.' },
  { title: 'Training & Support', description: 'Enable your team to build their own apps.' }
];

const offerings = [
  { title: 'Zoho Certified Experts', description: 'Officially certified Zoho developers.' },
  { title: 'End-to-End Solutions', description: 'From requirements to deployment.' },
  { title: 'UI/UX Design', description: 'Professional interfaces for Zoho apps.' },
  { title: 'Deluge Scripting', description: 'Advanced customization with Zoho Deluge.' },
  { title: 'API Integration', description: 'Connect with external systems.' },
  { title: 'Mobile Optimization', description: 'Great experience on smartphones.' }
];

const useCases = [
  "CRM Extensions - Custom fields, workflows and reports.",
  "Inventory Management - Track stock across locations.",
  "Field Service Apps - Mobile solutions for technicians.",
  "HR Portals - Employee self-service applications.",
  "Custom Dashboards - Visualize key business metrics."
];

const zohoTechDescription = [
  {
    name: "Zoho Creator",
    description: "A low-code application development platform that allows businesses to build custom apps with minimal coding.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/ZOHO_logo_2023.svg/768px-ZOHO_logo_2023.svg.png?20231106145651",
    iconColors: "linear-gradient(135deg, #ddf8d6ff, #eef2c8ff)"
  },
  {
    name: "Zoho Analytics",
    description: "A self-service BI and data analytics tool for creating reports, dashboards, and visualizations from multiple data sources.",
    icon: "https://img.icons8.com/?size=96&id=KJ0KehaD9qPs&format=png",
    iconColors: "linear-gradient(135deg, #fdedecff, #f9dbdbff)"
  },
  {
    name: "Zoho CRM",
    description: "A powerful customer relationship management platform designed to manage sales, marketing, and customer support.",
    icon: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm.svg",
    iconColors: "linear-gradient(135deg, #d3e3f1ff, #cfd3f6ff)"
  },
  {
    name: "Custom Widgets",
    description: "Extend Zoho Creator with custom-built widgets using HTML, CSS, and JavaScript for enhanced UI and functionality.",
    icon: "https://img.icons8.com/?size=96&id=59816&format=png",
    iconColors: "linear-gradient(135deg, #fff1f2, #ffe4e6)"
  },
  {
    name: "API Connectors",
    description: "Enable smooth communication with third-party apps and services by integrating APIs within Zoho Creator apps.",
    icon: "https://www.svgrepo.com/show/379931/api-integration-connection.svg",
    iconColors: "linear-gradient(135deg, #f0fdf4, #dcfce7)"
  },
  {
    name: "CSS Customization",
    description: "Personalize and style Zoho Creator applications with custom CSS to enhance branding and user experience.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    iconColors: "linear-gradient(135deg, #eff6ff, #dbeafe)"
  }
];


function ZohoCreatorPage() {
  return (
    <section>
      <Banner 
        heading="Zoho Creator Development"
        subtext="Custom business applications built on Zoho's powerful low-code platform."
        buttonText="Get a Free Demo"
        note="Our Zoho Creator experts help businesses automate processes, build custom apps, and extend Zoho CRM with tailored solutions that drive efficiency and growth."
      />
      <InfoStats
        stats={[
          { number: "70%", label: "Adopted for business workflows" },
          { number: "65%", label: "Custom app development platform" },
          { number: "60%", label: "Cloud-based low-code adoption" }
        ]}
        caption="Trusted by"
        highlight="Zoho Partners Worldwide"
      />
      <HiringModels
        title="Why Choose Zoho Creator"
        cards={hiringData}
        image={WhyChooseImg}
      />
      <WhatWeOffer
        title="What We Offer"
        items={offerData}
        image={WhatWeOfferImg}
      />
      <ServicesOfferings 
        title="Zoho Creator Features" 
        items={offerings}
      /> 
      <ZohoCreatorTechnologies/>
      <AboutTech technologies={zohoTechDescription} />
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Transform Your Business with Zoho?"
        buttonText="TALK TO OUR ZOHO TEAM"
        buttonLink="#"
        imageSrc={contactImg}
        imageAlt="Zoho development services"
      />
    </section>
  );
}

export default ZohoCreatorPage;