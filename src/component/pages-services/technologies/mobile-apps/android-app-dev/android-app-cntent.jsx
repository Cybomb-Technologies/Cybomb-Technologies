import AndroidTechnologiesSection from "./android-app-TechnologiesSection";


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
    title: 'Custom Android App Development',
    description:
      'Bespoke, high-performance apps tailored to your requirements - from simple tools to complex platforms.',
  },
  {
    title: 'API Intergrations',
    description:
      'Seamless integration of APIs to connect your app with backend systems and enhance data flow.',
  },
  {
    title: 'Android Framework Development',
    description:
      'Build scalable, maintainable apps using native frameworks to deliver dynamic Ul and robust architecture.',
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
    title: 'Firebase Services Integration',
    description:
      'Use Firebase for real-time databases, authentication, storage, and analytics.',
  },
  {
    title: 'Google Services Integration',
    description:
      'Embed tools like Maps, Drive, Sign-In to boost app functionality.',
  },
  {
    title: 'IoT, Wearables & AR/VR',
    description:
      'Expand app capabilities to smart devices, wearables (e.g. smartwatches), and immersive AR/VR experiences.',
  },
];
const hiringData = [
  {
    title: 'Bucket Hours:',
    description:
      'Prepay hours; use them up to six months as needed. Suitable for shared-resource usage.',
  },
  {
    title: 'Dedicated Hiring:',
    description:
      'Assign one or more developers exclusively to your project for specified durations.',
  },
];


const whychooseus = [
  {
    title: 'Clear Communication',
    description: "Transparent updates, feedback loops, and complete ownership of code.",
  },
  {
    title: 'Direct Collaboration',
    description: 'Work closely with our developers and designers.',
  },
  {
    title: 'UX Excellence',
    description: 'Engaging, tested user interfaces and experiences.',
  },
  {
    title: 'On-Time Delivery',
    description: 'Agile processes and PM tools ensure timely releases.',
  },
  {
    title: 'Custom Solutions',
    description: "Tailored development in line with your goals.",
  },
  {
    title: 'Flexible Hiring Models',
    description: "bucket hours or dedicated full-time hires.",
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
        { number: "900+", label: "In-house Expert Developer" },
        { number: "70%", label: "Average Savings on Development Costs" },
        { number: "20,000+", label: "Projects Delivered Successfully" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <ServicesOfferings 
    title = "Our Android Service Offerings"
    Services={services}/>
        
       
        <ScheduleConsultation
      heading="Stay Ahead Of The Competition With Our Hosting Services"
      buttonText="Schedule a Consultation!"
      imageSrc={placeholderImage}
      imageAlt="CRM Consultation"
      Icon={MdSchedule}
    />

    <WhyChooseUs ChooseUs={whychooseus}/>

    <AndroidTechnologiesSection/>
    <StillNotSure/>
    
     <HiringModels
      title="Hiring Models"
      cards={hiringData}
      image={awsImage}
    />
    
    


    
    
   </section>
  );
}

export default AndroidAppContent;