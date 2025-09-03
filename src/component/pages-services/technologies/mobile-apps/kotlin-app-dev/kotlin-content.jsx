import KotlinTechnologiesSection from "./kotlin-TechnologiesSection";
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
    title: 'Custom App Development',
    description: 'Native Android apps with Kotlin’s concise syntax (Digimonk Solutions)',
  },
  {
    title: 'UI/UX Component Design',
    description: 'Follows Material UI, Android best practice (hiddenbrains.com, Mobisoft Infotech)',
  },
  {
    title: 'API & Backend Integration',
    description: 'REST, GraphQL, Firebase, Coroutines-enabled concurrency (Clover Dynamics, Kody Technolab)',
  },
  {
    title: 'Migration (Java → Kotlin)',
    description: 'Migrate existing Java apps or modules (Fortunesoftit)',
  },
  {
    title: 'Testing & QA',
    description: 'Unit, integration, UI, performance validation (Cubix)',
  },
  {
    title: 'Maintenance & Upgrades',
    description: 'Version updates, bugfixes, improvements (Artkai)',
  },
  {
    title: 'Framework & Plugin Development',
    description: 'Custom libraries and extensions (theflock.com, isyncevolution.com)',
  },
  {
    title: 'Development',
    description: 'Feature-set coding, integration, coroutines use',
  },
];

const hiringData = [
  {
    title: 'Project-Based:',
    description: 'Fixed scope, budget, timeline (hiddenbrains.com, isyncevolution.com)',
  },
  {
    title: 'Dedicated Team:',
    description: 'On-demand Kotlin specialists (Clover Dynamics)',
  },
  {
    title: 'Time & Materials:',
    description: 'Agile, flexible support model (Braincuber)',
  }
];

const whychooseus = [
  {
    title: 'Concise & Readable',
    description: 'Less boilerplate, null-safety (Jackrabbit Mobile, WIRED)',
  },
  {
    title: 'Official Android Support',
    description: 'First-class Google support since 2017 (WIRED)',
  },
  {
    title: 'Interoperable',
    description: 'Works seamlessly with existing Java code (WIRED, Digimonk Solutions)',
  },
  {
    title: 'Robust Community',
    description: 'Rich libraries, cross-platform capabilities (SCAND, theflock.com)',
  },
  {
    title: 'Cross-Platform Development',
    description: 'Kotlin Multiplatform enables code sharing across Android, iOS, and backend (JetBrains, Medium)',
  },
];


const kotlinTechDescription = [
  {
    name: "Kotlin",
    description: "Modern, concise, and safe programming language officially supported for Android app development.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    iconColors: "linear-gradient(135deg, #c8e8ff, #a2d4fa)"
  },
  {
    name: "XML",
    description: "Markup language used to design UI layouts and resources in Android applications.",
    icon: "https://www.svgrepo.com/show/106090/xml.svg",
    iconColors: "linear-gradient(135deg, #d9d9d9ff, #bfbfbfff)"
  },
  
  {
    name: "Kotlin DSL",
    description: "Type-safe and concise DSL for Gradle scripts written in Kotlin instead of Groovy.",
    icon: "https://miro.medium.com/v2/resize:fit:1200/1*LK-QTWoFYe_JnG1FV2givg.png",
    iconColors: "linear-gradient(135deg, #d9f6ffff, #a4eaf8ff)"
  },
  
  {
    name: "Jetpack compose",
    description: "Android Jetpack libraries provide components and tools for building reliable, maintainable apps faster.",
    icon: "https://logo.svgcdn.com/d/jetpackcompose-original.svg",
    iconColors: "linear-gradient(135deg, #e6f9d9, #c4f0a4)"
  },
  {
    name: "Coroutines",
    description: "Kotlin feature enabling efficient asynchronous and concurrent programming with minimal code.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Kotlin_icon_%282016-2021%29.svg/768px-Kotlin_icon_%282016-2021%29.svg.png?20171012085709",
    iconColors: "linear-gradient(135deg, #ffe2cc, #f5b891)"
  },
    
  {
    name: "Ktor",
    description: "Asynchronous Kotlin framework for building connected applications like APIs and microservices.",
    icon: "https://icon.icepanel.io/Technology/svg/Ktor.svg",
    iconColors: "linear-gradient(135deg, #d9f0ff, #a4daf8)"
  },
];


function KotlinContent() {
  return (
    <section>
      <Banner 
        heading="Kotlin App Development Services"
        subtext="Modern, concise, and safe Android apps using Kotlin — the official Android-defacto language."
        buttonText="Book Free Consultation"
        note="End-to-end Kotlin app development — from design to deployment across all industries."
      />

      <InfoStats
        stats={[
          { number: "80%", label: "Google-endorsed for Android dev" },
          { number: "65%", label: "Interoperable with Java" },
          { number: "70%", label: "Supports multi-platform apps" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />

      <ServicesOfferings 
        title="Our Kotlin Service Offerings"
        Services={services}
      />
      
      

      <WhyChooseUs ChooseUs={whychooseus} />
<ScheduleConsultation
        heading="Build Android Apps Faster With Kotlin"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Kotlin App Consultation"
        Icon={MdSchedule}
      />
      <KotlinTechnologiesSection />
      <AboutTech technologies={kotlinTechDescription} />
      

      <HiringModels
        title="Kotlin Developer Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default KotlinContent;
