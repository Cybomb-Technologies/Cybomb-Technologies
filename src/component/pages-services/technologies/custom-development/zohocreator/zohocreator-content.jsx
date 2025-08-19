import React from "react";
import Banner from "../../../../common-ui/page-php/banner";
import InfoStats from "../../../../common-ui/page-php/info-stats";
import HiringModels from "../../../../common-ui/page-php/hiring";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import WhatWeOffer from "../../../../common-ui/page-php/whatweoffer";
import ServicesOfferings from "../../../../common-ui/page-php/services-offerings";
import DevelopmentProcess from "../../../../common-ui/page-php/development-process";
import OnlinePresence from "../../../../common-ui/page-php/online-presence";
import ZohoCreatorTechnologies from "./zohocreator-technology";

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
        title="Why Zoho Creator"
        cards={hiringData}
        image={placeholderImage}
      />
      <WhatWeOffer
        title="Our Zoho Services"
        items={offerData}
        image={placeholderImage}
      />
      <ServicesOfferings 
        title="Our Approach" 
        items={offerings}
      /> 
      <ZohoCreatorTechnologies/>
      <DevelopmentProcess 
        title="Common Use Cases"
        Process={useCases}
      />
      <OnlinePresence 
        title="Ready to Transform Your Business with Zoho?"
        buttonText="TALK TO OUR ZOHO TEAM"
        buttonLink="#"
        imageSrc={placeholderImage}
        imageAlt="Zoho development services"
      />
    </section>
  );
}

export default ZohoCreatorPage;