import IosTechnologiesSection from "./ios-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from 'react-icons/md';

import HiringModels from "../../../../common-ui/mobile-app/hiring";
import scheduleConsultImg from './../../../../../assets/contact/schedule-a-consultation-img3.jpg';
import hireUsImg from './../../../../../assets/contact/hiring-model-img1.png';
import AboutTech from "../../../../common-ui/custom-development/about-tech";
const services = [
  {
    title: 'Custom Native App Development',
    description:
      'Full-fledged iPhone/iPad apps built in Swift or Objective‑C using Xcode',
  },
  {
    title: 'API Integration & Backend Connectivity',
    description:
      'RESTful, GraphQL, cloud, and enterprise systems integration.',
  },
  {
    title: 'User Interface & UX Design',
    description:
      'Designed per Apple’s Human Interface Guidelines (wireframes → prototypes → UI).',
  },
  {
    title: 'Migration & Legacy Modernization',
    description:
      'Upgrade older platforms or hybrid apps to modern native iOS frameworks.',
  },
  {
    title: 'Third-Party SDK & Framework Integrationt',
    description:
      'MapKit, HealthKit, ARKit, CoreData, Siri, Apple Pay, push notifications.',
  },
  {
    title: 'SwiftUI & UIKit Development',
    description:
      'Declarative UI with SwiftUI alongside traditional UIKit for backwards compatibility.',
  },
  {
    title: 'Testing & QA',
    description:
      'Unit/integration/UI/end-to-end testing using XCTest, XCUITest.',
  },
  {
    title: 'App Store Preparation & Submission',
    description:
      'Compliance with App Store review criteria, metadata, screenshots, and policies.',
  },
];

const hiringData = [
  {
    title: 'Project-Based:',
    description:
      'Fixed-scope deliverables with set timeline and budget.',
  },
  {
    title: 'Dedicated Team / Outstaffing:',
    description:
      'Scale your team with experienced React developers.',
  },
  {
    title: 'Time & Materials / Hourly:',
    description:
      'Flexible billing tailored to ongoing development needs.',
  }
];

const whychooseus = [
  {
    title: 'Component-first Architecture',
    description: "Facilitates reusable, maintainable, and scalable code.",
  },
  {
    title: 'High Performance',
    description: 'Thanks to Virtual DOM, SSR, code splitting, lazy loading.',
  },
  {
    title: 'Cross-platform Efficiency',
    description: 'Shared codebase for web and mobile via React Native.',
  },
  {
    title: 'Broad Ecosystem',
    description: 'Powerful integrations (Next.js, GraphQL, Material‑UI, Gatsby, Redux).',
  },
  {
    title: 'Thorough Quality Assurance',
    description: "Rigorous testing across all stages.",
  },
  
];

const iosTechDescription = [
    {
    name: "Xcode",
    description: "Apple’s official IDE for building, testing, and deploying iOS and macOS applications.",
    icon: "https://icon.icepanel.io/Technology/svg/Xcode.svg",
    iconColors: "linear-gradient(135deg, #e0f7faff, #b3ebf2ff)"
  },
  {
    name: "SwiftUI",
    description: "A modern UI framework for building declarative and responsive Apple platform interfaces.",
    icon: "https://img.icons8.com/?size=96&id=_BTyk4vBumjx&format=png", // your base64
    iconColors: "linear-gradient(135deg, #beedf8ff, #a4dcf5ff)"
  },
  {
    name: "UIKit",
    description: "A foundational framework providing essential UI components for iOS applications.",
    icon: "https://www.svgrepo.com/show/342326/uikit.svg",
    iconColors: "linear-gradient(135deg, #f5e0faff, #e2c7f5ff)"
  },
   {
    name: "Appium",
    description: "An open-source tool for automating native, mobile web, and hybrid applications on iOS and Android platforms.",
    icon: "https://appium.io/docs/en/latest/assets/images/appium-logo.png",
    iconColors: "linear-gradient(135deg, #d1f4fa, #81d4fa)"
  },
    {
    name: "ARKit",
    description: "A framework for creating augmented reality experiences on iOS devices.",
    icon: "https://developer.apple.com/assets/elements/icons/arkit/arkit-96x96_2x.png",
    iconColors: "linear-gradient(135deg, #d9f7e8ff, #b8e6cfff)"
  },
  {
    name: "Xcode",
    description: "Apple’s official IDE for building apps across iOS, macOS, watchOS, and tvOS platforms.",
    icon: "https://icon.icepanel.io/Technology/svg/Xcode.svg",
    iconColors: "linear-gradient(135deg, #e0f2ff, #b3daf7)"
  },
];


function IosContent() {
  return (
   <section>
    <Banner 
        heading="iOS App Development Services"
        subtext="Creating polished, high-performance iOS applications."
        buttonText="Book Free Consultation"
        note="Ideal for iPhone, iPad, Apple Watch, and even tvOS. From sleek consumer apps to enterprise-grade solutions."
    />
    <InfoStats
        stats={[
          { number: "90%", label: "High user engagement on iOS apps" },
          { number: "70%", label: "Swift adopted for new builds" },
          { number: "85%", label: "Regular OS-driven app updates" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Our IOS Service Offerings"
    Services={services}/>
        
       
       

    <WhyChooseUs ChooseUs={whychooseus}/>
 <ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our IOS Services"
      buttonText="Schedule a Consultation!"
      imageSrc={scheduleConsultImg}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />
    <IosTechnologiesSection/>
    <AboutTech technologies={iosTechDescription} />
    
    
     <HiringModels
      title="Hiring Models"
      cards={hiringData}
      image={hireUsImg}
    />
     
    
   </section>
  );
}

export default IosContent;