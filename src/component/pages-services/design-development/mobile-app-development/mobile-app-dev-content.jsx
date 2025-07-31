
import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import placeholderImage from './../../../../assets/placeholder-image.webp';
import MobileAppTechnologiesSection from "./mobile-app-TechnologiesSection";

const services = [
  {
    title: 'Custom Mobile App Development',
    description:
      'Native or cross-platform apps built to meet your business goals and user needs.',
  },
  {
    title: 'UI/UX Design for Mobile',
    description:
      'Mobile-first designs that feel intuitive and look stunning on all screen sizes.Build scalable, maintainable apps using native frameworks to deliver dynamic UI and robust architecture.',
  },
  {
    title: 'iOS & Android App Development',
    description:
      'Build specifically for the Apple App Store or Google Play using Swift, Kotlin, or Java.',
  },
  {
    title: 'Cross-Platform App Development',
    description:
      'One codebase, multiple platforms-using Flutter or React Native.',
  },
  {
    title: 'App Testing & Quality Assurance',
    description:
      'Ensure a smooth, bug-free experience across devices and operating systems.',
  },
  {
    title: 'App Store Deployment & Support',
    description:
      'We will help you get listed, approved, and ready to launch on the App Store & Play Store',
  },
  {
    title: 'Firebase Services Integration',
    description:
      'Use Firebase for real-time databases, authentication, storage, and analytics.',
  },
  {
    title: 'Post-Launch Maintenance',
    description:
      'Keep your app updated, secure, and running smoothly with ongoing support.',
  },
];

const process = [
  {
    title: 'From-Scratch Mobile App Builds',
    description: "Start with an idea — we'll handle the design, content, coding, and launch",
  },
  {
    title: 'Mobile Apps Upgrades & Redesigns',
    description: "Already have a site? Let's improve the look, speed, and UX",
  },
  {
    title: 'Landing Apps Development',
    description: "Need a fast, high-conversion apps for your campaign? We've got you covered",
  },
];

const whychooseus = [
  {
    title: 'Custom-First Approach',
    description: "We don't use cookie-cutter templates — everything is made to fit you",
  },
  {
    title: 'Mobile & SEO Ready',
    description: 'Optimized for search engines and all screen sizes',
  },
  {
    title: 'Clean & Modern Code',
    description: 'We use modern code and optimization techniques to keep your site fast',
  },
  {
    title: 'Speed & Performance',
    description: 'Easily update your content, images, or blogs without a developer',
  },
  {
    title: 'Ongoing Support',
    description: "We're here for updates, fixes, scaling, and improvements",
  },
];

function MobileAppDevContent() {
  return (
   <section>
    <Banner 
        heading="Mobile App Development"
        subtext="We turn your app idea into a powerful, user-friendly experience."
        buttonText="Book Free Consultation"
        note="Fill out the form and our experts will contact you within 24 hours."
    />
    <InfoStats
        stats={[
        { number: "90%", label: "Of mobile time inside apps, not browsers" },
        { number: "6.8 billion", label: "Smartphone users worldwide" },
        { number: "50%", label: "A well-built mobile app boosts engagement, loyalty, and sales" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
      title = "Our Mobile App Services"
      Services={services}/>
    <MobileAppTechnologiesSection/>
    <WhyChooseUs ChooseUs={whychooseus}/>
    <OnlinePresence 
          title = "Craft a Captivating Online Presence for Your Brand!"
          description = "Our custom web development services turn your vision into a compelling online presence."
          buttonText = "Request a Free Quote Today!"
          buttonLink = "#"
          imageSrc = {placeholderImage}
          imageAlt = "Mobile App Development"
      />
    <DevelopmentProcess title="Our Mobile App Development Process"
      Process={process}
      />
   </section>
  );
}

export default MobileAppDevContent;
