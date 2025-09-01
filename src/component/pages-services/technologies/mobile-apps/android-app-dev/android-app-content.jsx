import AndroidTechnologiesSection from "./android-app-TechnologiesSection";
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
// hiring-model-img1.png
// hiring-model-img2.webp
// hiring-model-img3.svg
import AboutTech from "../../../../common-ui/custom-development/about-tech";
const services = [
  {
    title: "Custom Android App Development",
    description:
      "Bespoke, high-performance apps tailored to your requirements - from simple tools to complex platforms.",
  },
  {
    title: "API Intergrations",
    description:
      "Seamless integration of APIs to connect your app with backend systems and enhance data flow.",
  },
  {
    title: "Android Framework Development",
    description:
      "Build scalable, maintainable apps using native frameworks to deliver dynamic Ul and robust architecture.",
  },
  {
    title: "Migration & Upgrades",
    description:
      "Modernize and migrate legacy Android apps to the newest versions, minimizing disruptions.",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Implement secure, reliable payment options (Stripe, PayPal, Amazon Pay) with industry compliance.",
  },
  {
    title: "Firebase Services Integration",
    description:
      "Use Firebase for real-time databases, authentication, storage, and analytics.",
  },
  {
    title: "Google Services Integration",
    description:
      "Embed tools like Maps, Drive, Sign-In to boost app functionality.",
  },
  {
    title: "IoT, Wearables & AR/VR",
    description:
      "Expand app capabilities to smart devices, wearables (e.g. smartwatches), and immersive AR/VR experiences.",
  },
];

const hiringData = [
  {
    title: "Bucket Hours:",
    description:
      "Prepay hours; use them up to six months as needed. Suitable for shared-resource usage.",
  },
  {
    title: "Dedicated Hiring:",
    description:
      "Assign one or more developers exclusively to your project for specified durations.",
  },
];

const whychooseus = [
  {
    title: "Clear Communication",
    description:
      "Transparent updates, feedback loops, and complete ownership of code.",
  },
  {
    title: "Direct Collaboration",
    description: "Work closely with our developers and designers.",
  },
  {
    title: "UX Excellence",
    description: "Engaging, tested user interfaces and experiences.",
  },
  {
    title: "On-Time Delivery",
    description: "Agile processes and PM tools ensure timely releases.",
  },
  {
    title: "Custom Solutions",
    description: "Tailored development in line with your goals.",
  },
];

const AndroidDescription = [
  {
    name: "Android Studio",
    description:
      "Official IDE for Android development, providing powerful tools for building, testing, and debugging apps.",
    icon: "https://icon.icepanel.io/Technology/svg/Android-Studio.svg",
    iconColors: "linear-gradient(135deg, #c6d0f7ff, #9edcf5ff)",
  },
  {
    name: "Android Emulator",
    description:
      "Virtual device environment for testing and debugging Android applications without physical devices.",
    icon: "https://www.svgrepo.com/show/25520/android-logo.svg",
    iconColors: "linear-gradient(135deg, #e2f2faff, #c1e5f7ff)",
  },
  {
    name: "Java",
    description:
      "Robust, object-oriented programming language widely used for building Android applications.",
    icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    iconColors: "linear-gradient(135deg, #fde0cfff, #fbc4a9ff)",
  },
  {
    name: "XML",
    description:
      "Markup language used to design UI layouts and resources in Android applications.",
    icon: "https://www.svgrepo.com/show/106090/xml.svg",
    iconColors: "linear-gradient(135deg, #d9d9d9ff, #bfbfbfff)",
  },
  {
    name: "Jetpack Compose",
    description:
      "Modern Android UI toolkit for building native interfaces with declarative code.",
    icon: "https://logo.svgcdn.com/d/jetpackcompose-original-8x.png",
    iconColors: "linear-gradient(135deg, #d8f5e6ff, #b7f7ccff)",
  },
  {
    name: "BrowserStack",
    description:
      "Cloud testing platform for Android apps across real devices and browsers.",
    icon: "https://www.svgrepo.com/show/353515/browserstack.svg",
    iconColors: "linear-gradient(135deg, #fae2dfff, #f7b7b7ff)",
  },
];

function AndroidAppContent() {
  return (
    <section>
      <Banner
        heading="Android App Development Services"
        subtext="Discover top-tier Android app development services."
        buttonText="Book Free Consultation"
        note="Fill Out Form and Our Experts Will Contact You Within 24 Hrs."
      />
      <InfoStats
        stats={[
          { number: "85%", label: "Users prefer apps over mobile websites" },
          { number: "70%", label: "Apps updated monthly to stay secure" },
          { number: "65%", label: "Adopt modern UI/UX frameworks" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
      />
      <ServicesOfferings
        title="Our Android Service Offerings"
        Services={services}
      />
      <ScheduleConsultation
        heading="Stay Ahead Of The Competition With Our android Services"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="CRM Consultation"
        Icon={MdSchedule}
      />

      <WhyChooseUs ChooseUs={whychooseus} />

      <AndroidTechnologiesSection />
      <AboutTech technologies={AndroidDescription} />
      <StillNotSure />

      <HiringModels
        title="Hiring Models"
        cards={hiringData}
        image={hireUsImg}
      />
    </section>
  );
}

export default AndroidAppContent;
