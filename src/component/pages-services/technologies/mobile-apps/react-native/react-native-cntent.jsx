import ReactTechnologiesSection from "./react-native-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import placeholderImage from './../../../../../assets/placeholder-image.webp';
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import awsImage from '../../../../../assets/aws.avif';
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import HiringModels from "../../../../common-ui/mobile-app/hiring";

const services = [
  {
    title: 'Custom React App Development',
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
      'Legacy system upgrades to React framework — with zero/minimal downtime.',
  },
  {
    title: 'Plugin & Widget Development',
    description:
      'Custom React plugins/widgets for enhanced UI functionality.',
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
  {
    title: 'Ongoing Support',
    description: "Continuous maintenance, monitoring, and enhancements.",
  },
];

function ReactNativeContent() {
  return (
   <section>
    <Banner 
        heading="React App Development Services"
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
      imageSrc={placeholderImage}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />

    <WhyChooseUs ChooseUs={whychooseus}/>

    <ReactTechnologiesSection/>
    <StillNotSure/>
    
     <HiringModels
      title="Hiring Models"
      cards={hiringData}
      image={awsImage}
    />
    
    


    
    
   </section>
  );
}

export default ReactNativeContent;