import ReactTechnologiesSection from "./react-native-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import HiringModels from "../../../../common-ui/mobile-app/hiring";
import scheduleConsultImg from './../../../../../assets/contact/schedule-a-consultation-img3.jpg';
import hireUsImg from './../../../../../assets/contact/hiring-model-img1.png';
import AboutTech from "../../../../common-ui/custom-development/about-tech";
const services = [
  {
    title: 'Custom React Native Development',
    description:
      'Tailored SPAs, dashboards, enterprise portals with reusable component architecture',
  },
  {
    title: 'API Development & Integration',
    description:
      'REST, GraphQL, Axios integrations for seamless backend communication.',
  },
  {
    title: 'UI/UX Component Design',
    description:
      'Interfaces built with Hooks, Context API, Styled Components, Framer Motion, Material‑UI, Ant Design.',
  },
  {
    title: 'Migration & Modernization',
    description:
      'Legacy system upgrades to React Native framework — with zero/minimal downtime.',
  },
  {
    title: 'Plugin & Widget Development',
    description:
      'Custom React Native plugins/widgets for enhanced UI functionality.',
  },
  {
    title: 'Progressive Web App (PWA)',
    description:
      'Offline-capable, secure, fast web apps with app-like performance.',
  },
  {
    title: 'React Native Mobile App Development',
    description:
      'Cross-platform iOS/Android apps with near-native UX.',
  },
  {
    title: 'Testing & QA',
    description:
      'Unit/integration/end-to-end testing with Jest, Enzyme, React Testing Library, Cypress.',
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
      'Scale your team with experienced React Native developers.',
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
  }
  ];

const reactTechDescription = [
  {
    name: "React Native",
    description: "A declarative, component-based JavaScript library for building user interfaces efficiently.",
    icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    iconColors: "linear-gradient(135deg, #c8f0ff, #aee7fa)"
  },
  {
    name: "Next.js",
    description: "A React framework offering server-side rendering, static site generation, and API routes.",
    icon: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
    iconColors: "linear-gradient(135deg, #e0e0e0, #cfcfcf)"
  },
  {
    name: "Material-UI",
    description: "Popular React UI framework with ready-to-use, customizable Material Design components.",
    icon: "https://mui.com/static/logo.png",
    iconColors: "linear-gradient(135deg, #d9eaff, #b3d4fa)"
  },
   {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom UI designs.",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    iconColors: "linear-gradient(135deg, #d9f7ff, #b3e5fa)"
  },
  {
    name: "Styled Components",
    description: "A CSS-in-JS library for styling React components using tagged template literals.",
    icon: "https://styled-components.com/logo.png",
    iconColors: "linear-gradient(135deg, #ffe6f0, #f7b3d9)"
  },
  {
    name: "Vite",
    description: "Next-generation front-end build tool providing fast development and optimized builds.",
    icon: "https://vitejs.dev/logo.svg",
    iconColors: "linear-gradient(135deg, #fff0e6, #ffd9b3)"
  }  
];

function ReactNativeContent() {
  return (
   <section>
    <Banner 
        heading="React Native Development Services"
        subtext="Delivering high-performance, scalable React applications."
        buttonText="Book Free Consultation"
        note="Ideal for dynamic web apps, SPAs, PWAs, and cross-platform mobile via React Native."
    />
    <InfoStats
        stats={[
          { number: "80%", label: "Cross-platform saves dev time" },
          { number: "60%", label: "Apps reuse single codebase" },
          { number: "75%", label: "Projects integrate with native APIs" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Our React Native Service Offerings"
    Services={services}/>
        
       
        <ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our React Native Services"
      buttonText="Schedule a Consultation!"
      imageSrc={scheduleConsultImg}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />

    <WhyChooseUs ChooseUs={whychooseus}/>

    <ReactTechnologiesSection/>
    
      <AboutTech technologies={reactTechDescription} />
    <StillNotSure/>
    
     <HiringModels
      title="Hiring Models"
      cards={hiringData}
      image={hireUsImg}
    />
    
   </section>
  );
}

export default ReactNativeContent;