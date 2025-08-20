import XamarinTechnologiesSection from "./xamarin-TechnologiesSection";
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
  },
  {
    title: 'Post-Launch Partnership',
    description: 'Ongoing updates, enhancements, and support after launch.',
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
      
      <ScheduleConsultation
        heading="Accelerate Your App Strategy with Xamarin"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="Xamarin App Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <XamarinTechnologiesSection />
      <StillNotSure />

      <HiringModels
        title="Xamarin Developer Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default XamarinContent;
