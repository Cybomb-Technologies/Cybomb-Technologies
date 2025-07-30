import Banner from "../../../../common-ui/design-and-development/banner";
import InfoStats from "../../../../common-ui/design-and-development/info-stats";
import ServicesOfferings from "../../../../common-ui/design-and-development/Service-offerings";
import WhyChooseUs from "../../../../common-ui/design-and-development/why-choose-us";
import MobileAppTechnologiesSection from './android-app-technologies-section.jsx';

const services = [
  {
    title: 'Custom Android App Development',
    description:
      'Bespoke, high-performance apps tailored to your requirements from simple tools to complex platforms.',
  },
  {
    title: 'Android Framework Development',
    description:
      'Build scalable, maintainable apps using native frameworks to deliver dynamic UI and robust architecture.',
  },
  {
    title: 'API Integrations',
    description:
      'Seamless integration of APIs to connect your app with backend systems and enhance data flow.',
  },
  {
    title: 'Migration & Upgrades',
    description:
      'Modernize and migrate legacy Android apps to the newest versions, minimizing disruptions.',
  },
  {
    title: 'Payment Gateway Integration',
    description:
      'Implement secure, reliable payment options (Stripe, PayPal, Amazon Pay) with industry compliance.',
  },
  {
    title: 'Google Services Integration',
    description:
      'Embed tools like Maps, Drive, Sign-In to boost app functionality.',
  },
  {
    title: 'Firebase Services Integration',
    description:
      'Use Firebase for real-time databases, authentication, storage, and analytics.',
  },
  {
    title: 'IoT, Wearables & AR/VR',
    description:
      'Expand app capabilities to smart devices, wearables (e.g. smartwatches), and immersive AR/VR experiences.',
  },
];

const whychooseus = [
  {
    title: 'Clear Communication',
    description: "Transparent updates, feedback loops, and complete ownership of code.",
  },
  {
    title: 'On-Time Delivery',
    description: 'Tailored development in line with your goals.',
  },
  {
    title: 'Custom Solutions',
    description: 'We use modern code and optimization techniques to keep your site fast',
  },
  {
    title: 'UX Excellence',
    description: 'Engaging, tested user interfaces and experiences.',
  },
  {
    title: 'Flexible Hiring Models',
    description: "Choose bucket hours (prepaid, usable within 6 months) or dedicated full-time hires.",
  },
];

function AndroidAppDevContent() {
  return (
   <section>
    <Banner 
        heading="Andorid App Development"
        subtext="Discover top-tier Android app development services."
        buttonText="Book Free Consultation"
        note="Fill out the form and our experts will contact you within 24 hours."
    />
    <InfoStats
        stats={[
        { number: "900+", label: "In-house Expert Developers" },
        { number: "70%", label: "Average Savings on Development Costs" },
        { number: "20,000+", label: "Projects Delivered Successfully" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings Services={services}/>
    <MobileAppTechnologiesSection/>
    <WhyChooseUs ChooseUs={whychooseus}/>
   </section>
  );
}

export default AndroidAppDevContent;

