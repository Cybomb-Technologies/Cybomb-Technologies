import SwiftTechnologiesSection from "./swift-TechnologiesSection";

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
    title: 'Swift Consulting',
    description: 'Language best practices, scalable architecture planning, and modern app strategies.',
  },
  {
    title: 'Custom App Development',
    description: 'Scalable and secure consumer or enterprise Swift apps for iOS/macOS platforms.',
  },
  {
    title: 'UX/UI Design',
    description: 'Pixel-perfect UI aligned with Apple HIG and engaging animations.',
  },
  {
    title: 'Migration from Objective‑C',
    description: 'Refactor legacy codebases to modern Swift syntax and structure.',
  },
  {
    title: 'Apple SDK Integration',
    description: 'ARKit, CoreML, SiriKit, HealthKit, and other advanced Apple technologies.',
  },
  {
    title: 'Testing & QA',
    description: 'Automated and manual testing with XCTest, XCUITest, and performance checks.',
  },
  {
    title: 'App Store Launch',
    description: 'Submission handling, compliance, metadata configuration, and support.',
  },
  {
    title: 'Maintenance & Support',
    description: 'Continuous monitoring, updates, and tuning for better performance.',
  }
];

const hiringData = [
  {
    title: 'Project-Based:',
    description: 'Fixed scope, timeline, and deliverables for well-defined Swift projects.',
  },
  {
    title: 'Dedicated Team:',
    description: 'Access a full team of Swift experts to accelerate your app journey.',
  },
  {
    title: 'Hourly / T&M:',
    description: 'Flexible engagement for evolving project requirements.',
  }
];

const whychooseus = [
  {
    title: 'High Performance & Safety',
    description: "Swift offers memory safety and compiled speed with minimal crashes.",
  },
  {
    title: 'Seamless Apple Integration',
    description: 'Best-in-class support for iOS, macOS, watchOS, and tvOS.',
  },
  {
    title: 'Modern & Evolving',
    description: 'Open-source and constantly updated by Apple and the community.',
  },
  {
    title: 'Lower Maintenance Cost',
    description: 'Swift’s syntax reduces boilerplate, making code more maintainable.',
  },
  {
    title: 'Rich Apple SDK Support',
    description: 'ARKit, SiriKit, CoreML, and more at your fingertips.',
  },
  {
    title: 'Trusted by Leading Brands',
    description: 'Used in award-winning iOS apps across industries.',
  },
];

function SwiftContent() {
  return (
    <section>
      <Banner 
        heading="Swift App Development Services"
        subtext="Native iOS/macOS/tvOS/watchOS apps with Swift – powerful, safe, Apple-standard code."
        buttonText="Book Free Consultation"
        note="Full-cycle Apple app development — from ideation to deployment using Swift."
      />

      <InfoStats
        stats={[
        { number: "900+", label: "In-house Expert Developer" },
        { number: "70%", label: "Average Savings on Development Costs" },
        { number: "20,000+", label: "Projects Delivered Successfully" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />

      <ServicesOfferings 
        title="Our Swift Service Offerings"
        Services={services}
      />
      
      <ScheduleConsultation
        heading="Accelerate Apple App Delivery With Swift"
        buttonText="Schedule a Consultation!"
        imageSrc={placeholderImage}
        imageAlt="Swift App Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <SwiftTechnologiesSection />
      <StillNotSure />

      <HiringModels
        title="Swift Developer Hiring Models"
        cards={hiringData}
        image={awsImage}
      />
    </section>
  );
}

export default SwiftContent;
