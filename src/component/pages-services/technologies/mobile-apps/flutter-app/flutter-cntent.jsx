import FlutterTechnologiesSection from "./flutter-TechnologiesSection";

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
    title: 'Native-like UX',
    description: 'Delivers smooth performance on both iOS & Android platforms.',
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
          { number: "500K+", label: "Flutter Apps on Play Store" },
          { number: "50%", label: "Faster Dev Time with Single Codebase" },
          { number: "46%", label: "Global Developer Adoption" }
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
        imageSrc={placeholderImage}
        imageAlt="Flutter App Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <FlutterTechnologiesSection />
      <StillNotSure />

      <HiringModels
        title="Flutter Developer Hiring Models"
        cards={hiringData}
        image={awsImage}
      />
    </section>
  );
}

export default FlutterContent;
