import KotlinTechnologiesSection from "./kotlin-TechnologiesSection";
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
    description: 'Rich libraries, cross‑platform capabilities (SCAND, theflock.com)',
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
      
      <ScheduleConsultation
        heading="Build Android Apps Faster With Kotlin"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Kotlin App Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <KotlinTechnologiesSection />
      <StillNotSure />

      <HiringModels
        title="Kotlin Developer Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default KotlinContent;
