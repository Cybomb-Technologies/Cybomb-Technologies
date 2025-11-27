
import Banner from "../../../common-ui/design-and-development/banner";
import InfoStats from "../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../common-ui/design-and-development/services-offerings";
import DevelopmentProcess from "../../../common-ui/design-and-development/development-process";
import WhyChooseUs from "../../../common-ui/design-and-development/why-choose-us";
import OnlinePresence from "../../../common-ui/design-and-development/online-presence";
import MobileAppTechnologiesSection from "./mobile-app-TechnologiesSection";
import MobileAppImg from "./../../../../assets/technologies/mobile-apps.jpg";

const services = [
  {
    title: 'Custom Mobile App Development',
    description:
      'We build custom mobile apps for iOS and Android that match your business goals, engage users, and work smoothly on all devices.',

  },
  {
    title: 'UI/UX Design for Mobile',
    description:
      'We create user-friendly mobile designs that improve customer experience and work seamlessly across all devices.',
  },
  {
    title: 'iOS & Android App Development',
    description:
      'Build specifically for the Apple App Store or Google Play using Swift, Kotlin, or Java.',
  },
  {
  title: 'Cross-Platform App Development',
  description:
    'We create cross-platform mobile apps using Flutter and React Native that run smoothly on both iOS and Android with a single codebase.',
},
  {
    title: 'App Testing & Quality Assurance',
    description:
      'Ensure a smooth, bug-free experience across devices and operating systems.',
  },
  {
    title: 'App Store & play store Deployment',
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
    title: 'Tailored Mobile Apps',
    description: 'We build apps designed around your business needs and user goals.',
  },
  {
  title: 'Scalable Solutions',
  description: 'We build mobile apps that grow with your business and handle more users easily.',
},
  {
    title: 'User-Friendly Design',
    description: 'We focus on simple, attractive, and easy-to-use mobile experiences.',
  },
  {
    title: 'High Performance',
    description: 'Our apps are fast, secure, and optimized for the best performance.',
  },
  {
    title: 'Ongoing Support & Updates',
    description: 'We provide regular updates, maintenance, and support as your app grows.',
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
          { number: "90%", label: "of mobile time is spent inside apps, not browsers" },
          { number: "6.8 Billion+", label: "smartphone users worldwide" },
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
            imageSrc = {MobileAppImg}
            imageAlt = "Mobile App Development"
        />
      <DevelopmentProcess title="Our Mobile App Development Process"
        Process={process}
      />
    </section>
  );
}

export default MobileAppDevContent;
