import XamarinTechnologiesSection from "./xamarin-TechnologiesSection";
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
    title: 'Custom Xamarin App Development',
    description: 'Build robust, scalable, and native-like mobile apps for Android and iOS using a shared C# codebase.',
  },
  {
    title: 'Cross-Platform UI with Xamarin.Forms',
    description: 'Create rich user interfaces across platforms using Xamarin.Forms with consistent design and behavior.',
  },
  {
    title: 'Backend Integration (REST, SOAP, GraphQL)',
    description: 'Ensure smooth communication between frontend and backend systems using modern integration methods.',
  },
  {
    title: 'Migration to Xamarin',
    description: 'Upgrade legacy native or hybrid apps to Xamarin with minimal risk and full functionality retention.',
  },
  {
    title: 'Cloud Integration & Azure Services',
    description: 'Leverage Microsoft Azure and cloud services for hosting, data storage, and scalability.',
  },
  {
    title: 'Enterprise Mobility & B2B Apps',
    description: 'Deliver secure, enterprise-grade apps with SSO, encryption, and device management.',
  },
  {
    title: 'Wearables & IoT Integration',
    description: 'Extend your apps to smartwatches, IoT sensors, and connected devices tailored to your needs.',
  },
  {
    title: 'Native API Access & Platform-Specific Customizations',
    description: 'Write platform-specific code to access native features and maximize performance.',
  }
];

const hiringData = [
  {
    title: 'Bucket Hours',
    description: 'Prepay development hours for up to 6 months. Ideal for ad hoc tasks and long-term maintenance.',
  },
  {
    title: 'Dedicated Xamarin Developers',
    description: 'Hire full-time Xamarin experts to ensure fast, focused, and uninterrupted delivery.',
  }
];

const whychooseus = [
  {
    title: 'Expert Xamarin Developers',
    description: 'Work with specialists who understand cross-platform intricacies.',
  },
  {
    title: 'Cost-Efficiency',
    description: 'Shared codebase reduces duplication and development hours.',
  },
  {
    title: 'Agile & Transparent Process',
    description: 'Milestone-driven delivery with clear updates and flexibility.',
  },
  {
    title: 'User-Centered Design',
    description: 'Responsive, intuitive, and tested UX across all devices.',
  },
  {
    title: 'Flexible Engagement Models',
    description: 'Choose between fixed scope or ongoing collaboration models.',
  }
];
const xamarinTechDescription = [
  {
    name: "C#",
    description: "Primary programming language used for building Xamarin applications with strong type safety, OOP principles, and cross-platform support.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    iconColors: "linear-gradient(135deg, #d7f0ff, #b1e1ff)"
  },
  {
    name: ".NET MAUI",
    description: "The evolution of Xamarin.Forms, enabling developers to build native cross-platform apps with a single project and shared UI codebase.",
    icon: "https://icon.icepanel.io/Technology/svg/.NET.svg",
    iconColors: "linear-gradient(135deg, #e0dfff, #c4c3ff)"
  },
  {
    name: "Xamarin",
    description: "A cross-platform mobile app development framework that allows developers to create native iOS, Android, and Windows apps with shared C# code.",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-xamarin-282427.png?f=webp&w=512",
    iconColors: "linear-gradient(135deg, #d9faff, #b5f0ff)"
  },
  {
    name: "Microsoft Azure",
    description: "Cloud platform to integrate Xamarin apps with backend services, authentication, storage, and scalable APIs.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    iconColors: "linear-gradient(135deg, #e1f1ff, #b8e0ff)"
  },
  {
    name: "Firebase",
    description: "Provides backend services such as real-time databases, authentication, and push notifications for Xamarin apps.",
    icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    iconColors: "linear-gradient(135deg, #fff3d6, #ffd27f)"
  },
  {
    name: "REST APIs",
    description: "Integration of RESTful services to enable communication between Xamarin apps and external systems or databases.",
    icon: "https://www.vectorlogo.zone/logos/json/json-icon.svg",
    iconColors: "linear-gradient(135deg, #f0faff, #d9f0ff)"
  }
];


function XamarinContent() {
  return (
    <section>
      <Banner 
        heading="Xamarin App Development Services"
        subtext="Deliver high-performance, cross-platform mobile apps with Xamarin."
        buttonText="Book Your Free Consultation"
        note="Empower your business with native-like apps using a single codebase. Fill out the form to get started—we’ll reach out within 24 hours."
      />

      <InfoStats
        stats={[
          { number: "70%", label: "Cross-platform via .NET ecosystem" },
          { number: "60%", label: "Code reuse between iOS & Android" },
          { number: "65%", label: "Integration with Microsoft stack" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />

      <ServicesOfferings 
        title="Our Xamarin Service Offerings"
        Services={services}
      />
      
      

      <WhyChooseUs ChooseUs={whychooseus} />
        <ScheduleConsultation
        heading="Accelerate Your App Strategy with Xamarin"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Xamarin App Consultation"
        Icon={MdSchedule}
      />
      <XamarinTechnologiesSection />
      <AboutTech technologies={xamarinTechDescription} />
      

      <HiringModels
        title="Xamarin Developer Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default XamarinContent;
