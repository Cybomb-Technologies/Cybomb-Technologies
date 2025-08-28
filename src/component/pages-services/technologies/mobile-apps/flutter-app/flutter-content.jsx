import FlutterTechnologiesSection from "./flutter-TechnologiesSection";
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
    title: 'Custom App Development',
    description: 'Tailored UI & UX, responsive layouts using Flutter for fast, cross-platform apps.',
  },
  {
    title: 'UI/UX Design',
    description: 'Engaging interfaces with strong visual hierarchy and branding.',
  },
  {
    title: 'Migration & Upgrade',
    description: 'Port existing native apps to Flutter or upgrade to newer Flutter versions.',
  },
  {
    title: 'Testing & QA',
    description: 'Comprehensive testing: functional, performance, security across devices.',
  },
  {
    title: 'Consulting & Architecture',
    description: 'App architecture audits, planning, and Flutter consultation.',
  },
  {
    title: 'Support & Maintenance',
    description: 'Post-launch updates, monitoring, and issue resolution.',
  },  
  {
    title: 'Native-like UX',
    description: 'Delivers smooth performance on both iOS & Android platforms.',
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize app speed, reduce lag, and streamline rendering using lean Dart code.',
  }
];

const hiringData = [
  {
    title: 'Project-Based:',
    description: 'Fixed scope, timeline, and deliverables for well-defined Flutter projects.',
  },
  {
    title: 'Dedicated Team:',
    description: 'Embed expert Flutter developers into your team for long-term support.',
  },
  {
    title: 'Hourly / T&M:',
    description: 'Flexible billing model for dynamic project requirements.',
  }
];

const whychooseus = [
  {
    title: 'Faster Time-to-Market',
    description: "Single codebase results in 50% faster development cycles.",
  },
  {
    title: 'Stunning UI Consistency',
    description: 'Same branded experience across all devices and screens.',
  },
  {
    title: 'Rich Ecosystem',
    description: 'Mature community, extensive widget libraries, and platform support.',
  },
  {
    title: 'Cost Effective',
    description: 'Reduces costs through shared codebase and reusable components.',
  },
  {
    title: 'Trusted by Millions',
    description: 'Over 500K Flutter apps in Play Store and adopted by 46% of developers.',
  },
];
const flutterTechDescription = [
  {
    name: "Flutter SDK",
    description: "UI toolkit by Google for building natively compiled apps for mobile, web, and desktop from a single codebase.",
    icon: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    iconColors: "linear-gradient(135deg, #daf3faff, #cee6edff)"
  },
  {
    name: "Dart language",
    description: "Programming language optimized for UI, powering Flutter apps with fast compilation and expressive syntax.",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/dart-programming-language-icon.png",
    iconColors: "linear-gradient(135deg, #d0e5faff, #a7c8faff)"
  },
  {
    name: "Firebase integration",
    description: "Seamless backend integration for Flutter apps, providing authentication, database, analytics, and cloud storage.",
    icon: "https://firebase.google.com/static/images/brand-guidelines/product-logo.png",
    iconColors: "linear-gradient(135deg, #ffe4b3ff, #ffd59cff)"
  },
  {
    name: "Hot reload",
    description: "Development feature in Flutter allowing instant UI updates without restarting the app.",
    icon: "https://www.svgrepo.com/show/513605/refresh.svg",
    iconColors: "linear-gradient(135deg, #c1c1c1ff, #c1c1c1ff)"
  },
    {
    name: "Bloc (Business Logic Component)",
    description: "A state management library for Flutter apps, enabling separation of business logic and UI.",
    icon: "https://www.svgrepo.com/show/374235/bloc.svg",
    iconColors: "linear-gradient(135deg, #e0fae2ff, #b3f2b6ff)"
  },
  {
    name: "GetX",
    description: "A lightweight Flutter framework for state management, dependency injection, and route management.",
    icon: "https://raw.githubusercontent.com/jonataslaw/getx-community/master/getx.png",
    iconColors: "linear-gradient(135deg, #f3cbfbff, #f9b5f4cc)"
  }
  
];


function FlutterContent() {
  return (
    <section>
      <Banner 
        heading="Flutter App Development Services"
        subtext="Build fast, native‑like iOS and Android experiences from one codebase using Flutter."
        buttonText="Book Free Consultation"
        note="Full‑cycle cross‑platform mobile apps from concept to deployment — powered by Flutter."
      />

      <InfoStats
        stats={[
          { number: "75%", label: "Cross-platform adoption rising" },
          { number: "65%", label: "Fast UI rendering with widgets" },
          { number: "80%", label: "Used for MVP & prototyping" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />

      <ServicesOfferings 
        title="Our Flutter Service Offerings"
        Services={services}
      />
      
      <ScheduleConsultation
        heading="Accelerate App Delivery With Flutter"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Flutter App Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <FlutterTechnologiesSection />
      <AboutTech technologies={flutterTechDescription} />
      <StillNotSure />

      <HiringModels
        title="Flutter Developer Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default FlutterContent;
