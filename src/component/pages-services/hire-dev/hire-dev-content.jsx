
import Banner from "./hire-dev-section/banner";
import InfoStats from "./hire-dev-section/info-stats";
import WhyChooseUs from "./hire-dev-section/WhyChooseUs";
import HiringModels from "./hire-dev-section/hiring-models";
import WhatSetsUsApart from "./hire-dev-section/what-sets-us-apart";
import HireDevBtn from "./hire-dev-section/hire-dev-btn";
import FreeConsultation from "../../common-ui/free-consultation/free-consultation";
import ChooseYourTech from "./hire-dev-section/choose-your-tech";
import FeaturesCards from "./hire-dev-section/features-cards";

function HireDevContent() {
  return (
    <>
    <Banner 
        heading="Hire Our Top Developers on Demand"
        subtext="Quick, Reliable, Scalable - Build Your Tech Team Effortlessly"
        buttonText="Book Free Consultation"
        note="Looking to hire developers for your next big idea? We make it simple. Whether you're a startup or an enterprise, we help you onboard skilled professionals faster, at lower costs, with complete flexibility."
    />
    <InfoStats
        stats={[
          { number: "On-Time", label: "Delivery Guarantee" },
          { number: "80+", label: "Skilled Developers on Cross-platform & Native Expertise" },
          { number: "24/7", label: "Project Support & Agile Development Approach" },
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <WhyChooseUs/>
    <FeaturesCards/>
    <HiringModels/>
    <WhatSetsUsApart/>
    <ChooseYourTech/>
    <HireDevBtn/>
    {/* <FreeConsultation/> */}

    </>
  );
}

export default HireDevContent;