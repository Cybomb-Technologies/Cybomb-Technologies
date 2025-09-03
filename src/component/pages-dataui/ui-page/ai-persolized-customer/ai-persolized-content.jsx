import Banner from "../../../common-ui/dataui/banner";
import InfoStats from "../../../common-ui/dataui/info-stats";
import WhatWeOffer from "../../../common-ui/dataui/whatweoffer";
import ScheduleConsultation from "../../../common-ui/dataui/schedule-consultation";
import { MdSchedule } from 'react-icons/md';
import WhyChooseUs from "../../../common-ui/dataui/why-choose-us";
// import OnlinePresence from "../../../common-ui/dataui/online-presence";
import DevelopmentProcess from "../../../common-ui/dataui/development-process";
import contactUsImg from './../../../../assets/contact/contact-us-img1.jpg';
import scheduleConsultImg from './../../../../assets/contact/schedule-a-consultation-img2.jpg';
import AICustomerExperienceToolsSection from "./ai-persolized-tech-tool";

const WhatWeOffers = [
  {
    title: "Customer Journey Personalization",
    description:
      "Leverage AI to deliver tailored product recommendations, content, and offers in real-time.",
  },
  {
    title: "Behavioral Prediction Models",
    description:
      "Predict customer needs and intent to proactively provide solutions and support.",
  },
  {
    title: "Dynamic Content Optimization",
    description:
      "Use AI to adapt website, app, and email content for each individual user.",
  },
  {
    title: "Voice & Chat Personal Assistants",
    description:
      "Deploy conversational AI that understands customer preferences and history.",
  },
  {
    title: "Emotion & Sentiment Analysis",
    description:
      "Detect customer sentiment to fine-tune communication and engagement strategies.",
  },
  {
    title: "Omnichannel Experience",
    description:
      "Ensure consistency and personalization across web, mobile, email, and in-store touchpoints.",
  },
];

const whychooseus = [
  {
    title: "Customer-Centric AI Expertise",
    description:
      "We specialize in AI that puts the customer at the center of every interaction.",
  },
  {
    title: "Proven ROI Impact",
    description:
      "Our solutions boost engagement, retention, and lifetime customer value.",
  },
  {
    title: "Seamless Integration",
    description:
      "We integrate AI personalization into your existing CRM, e-commerce, and marketing tools.",
  },
  {
    title: "Ethical AI Practices",
    description:
      "We ensure data privacy and transparency in every personalization strategy.",
  },
  {
    title: "Scalable Across Markets",
    description:
      "Our personalization systems adapt to new regions, languages, and audience segments.",
  },
];

const useCases = [
  "Recommending products based on customer browsing and purchase history",
  "Sending personalized marketing emails with AI-optimized subject lines",
  "Adjusting website layout in real-time to highlight relevant content",
  "Providing AI-driven concierge services in mobile apps",
  "Identifying at-risk customers and offering targeted retention incentives",
];

function AIPersonalizedCustomerExperienceContent() {
  return (
    <section>
      <Banner 
        heading="AI Personalized Customer Experience"
        subtext="Deliver tailor-made experiences that turn visitors into loyal customers."
        buttonText="Start Personalizing"
        note="Our AI-powered personalization solutions enable businesses to understand, predict, and meet customer needs at every touchpoint. By leveraging advanced algorithms, we help you deliver the right message, product, or offer to the right person at the right time."
      />

      <InfoStats
        stats={[
          { number: "80%", label: "Of customers buy more with personalization" },
          { number: "5×", label: "Boost in engagement with AI recommendations" },
          { number: "60%", label: "Reduction in churn with retention strategies" }
        ]}
        caption="Trusted by Leading Brands and"
        highlight="Customer Experience Innovators"
      />

      <WhatWeOffer title="What We Offer" services={WhatWeOffers} />
      
        <AICustomerExperienceToolsSection/>

      <WhyChooseUs ChooseUs={whychooseus} />
      
      <ScheduleConsultation
        heading="Transform Customer Journeys with AI Personalization"
        buttonText="Schedule a Consultation!"
        imageSrc={scheduleConsultImg}
        imageAlt="AI Customer Experience"
        Icon={MdSchedule}
      />

      

      {/* <OnlinePresence 
        title="Let's Build Personalized Experiences for Your Customers."
        buttonText="CONTACT US"
        buttonLink="#"
        imageSrc={contactUsImg}
        imageAlt="Personalized AI Solutions"
      /> */}

      <DevelopmentProcess 
        title="Use Cases"
        Process={useCases}
      />
    </section>
  );
}

export default AIPersonalizedCustomerExperienceContent;
