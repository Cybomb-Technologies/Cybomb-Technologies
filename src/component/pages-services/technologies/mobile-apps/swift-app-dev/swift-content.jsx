import SwiftTechnologiesSection from "./swift-TechnologiesSection";
import Banner from "../../../../common-ui/mobile-app/banner";
import InfoStats from "../../../../common-ui/mobile-app/info-stats";
import ServicesOfferings from "../../../../common-ui/mobile-app/services-offerings";
import WhyChooseUs from "../../../../common-ui/mobile-app/why-choose-us";
import ScheduleConsultation from "../../../../common-ui/mobile-app/schedule-consultation";
import { MdSchedule } from "react-icons/md";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import HiringModels from "../../../../common-ui/mobile-app/hiring";
import scheduleConsultImg from "./../../../../../assets/contact/schedule-a-consultation-img3.jpg";
import hireUsImg from "./../../../../../assets/contact/hiring-model-img1.png";
import AboutTech from "../../../../common-ui/custom-development/about-tech";

const services = [
  {
    title: "Swift Consulting",
    description:
      "Language best practices, scalable architecture planning, and modern app strategies.",
  },
  {
    title: "Custom App Development",
    description:
      "Scalable and secure consumer or enterprise Swift apps for iOS/macOS platforms.",
  },
  {
    title: "UX/UI Design",
    description:
      "Pixel-perfect UI aligned with Apple HIG and engaging animations.",
  },
  {
    title: "Migration from Objective‑C",
    description:
      "Refactor legacy codebases to modern Swift syntax and structure.",
  },
  {
    title: "Apple SDK Integration",
    description:
      "ARKit, CoreML, SiriKit, HealthKit, and other advanced Apple technologies.",
  },
  {
    title: "Testing & QA",
    description:
      "Automated and manual testing with XCTest, XCUITest, and performance checks.",
  },
  {
    title: "App Store Launch",
    description:
      "Submission handling, compliance, metadata configuration, and support.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Continuous monitoring, updates, and tuning for better performance.",
  },
];

const hiringData = [
  {
    title: "Project-Based:",
    description:
      "Fixed scope, timeline, and deliverables for well-defined Swift projects.",
  },
  {
    title: "Dedicated Team:",
    description:
      "Access a full team of Swift experts to accelerate your app journey.",
  },
  {
    title: "Hourly / T&M:",
    description: "Flexible engagement for evolving project requirements.",
  },
];

const whychooseus = [
  {
    title: "High Performance & Safety",
    description:
      "Swift offers memory safety and compiled speed with minimal crashes.",
  },
  {
    title: "Seamless Apple Integration",
    description: "Best-in-class support for iOS, macOS, watchOS, and tvOS.",
  },
  {
    title: "Modern & Evolving",
    description:
      "Open-source and constantly updated by Apple and the community.",
  },
  {
    title: "Lower Maintenance Cost",
    description:
      "Swift’s syntax reduces boilerplate, making code more maintainable.",
  },
  {
    title: "Rich Apple SDK Support",
    description: "ARKit, SiriKit, CoreML, and more at your fingertips.",
  },
  {
    title: "Trusted by Leading Brands",
    description: "Used in award-winning iOS apps across industries.",
  },
];
const SwiftTechDescription = [
  {
    name: "Swift",
    description:
      "Modern programming language by Apple, designed for performance, safety, and ease of use in iOS and macOS apps.",
    icon: "https://www.svgrepo.com/show/452110/swift.svg",
    iconColors: "linear-gradient(135deg, #fbe0d6, #f7b39a)",
  },
  {
    name: "Objective-C",
    description:
      "A legacy but powerful object-oriented language used extensively in iOS/macOS applications and frameworks.",
    icon: "https://icon.icepanel.io/Technology/svg/Objective-C.svg",
    iconColors: "linear-gradient(135deg, #d9e7f7, #a7c4eb)",
  },
  {
    name: "Cocoa",
    description:
      "Apple’s native object-oriented framework for building applications on macOS and iOS.",
    icon: "https://developer.apple.com/assets/elements/icons/appkit/appkit-96x96_2x.png",
    iconColors: "linear-gradient(135deg, #f4e6ff, #d4bdf7)",
  },
  {
    name: "SwiftUI",
    description:
      "A declarative UI framework by Apple for building responsive and modern iOS/macOS user interfaces.",
    icon: "https://img.icons8.com/?size=512&id=HO4ZeQOTgkWV&format=png",
    iconColors: "linear-gradient(135deg, #e3f7e6, #b3e6c9)",
  },
  {
    name: "Xcode",
    description:
      "Apple’s official IDE for building apps across iOS, macOS, watchOS, and tvOS platforms.",
    icon: "https://icon.icepanel.io/Technology/svg/Xcode.svg",
    iconColors: "linear-gradient(135deg, #e0f2ff, #b3daf7)",
  },
  {
    name: "CocoaPods",
    description:
      "Dependency manager for iOS projects, used to integrate third-party libraries with ease.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlaVW-iBNad5EFi6GgJ8IImCfsIt0rHpizg&s",
    iconColors: "linear-gradient(135deg, #fbe0d6, #f7b39a)",
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
          { number: "85%", label: "Apple-first language for iOS dev" },
          { number: "70%", label: "Safer memory management" },
          { number: "60%", label: "Supports modern concurrency" },
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
        imageSrc={scheduleConsultImg}
        imageAlt="Swift App Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <SwiftTechnologiesSection />
      <AboutTech technologies={SwiftTechDescription} />
      <StillNotSure />

      <HiringModels
        title="Swift Developer Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default SwiftContent;
