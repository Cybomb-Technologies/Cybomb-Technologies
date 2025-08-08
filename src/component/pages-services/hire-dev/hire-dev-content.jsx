
import Banner from "./hire-dev-section/banner";
import InfoStats from "./hire-dev-section/info-stats";
import WhyChooseUs from "./hire-dev-section/WhyChooseUs";

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
        { number: "90%", label: "Of mobile time inside apps, not browsers" },
        { number: "6.8", label: "billion Smartphone worldwide" },
        { number: "50%", label: "A well-built mobile app boosts engagement, loyalty, and sales" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />
    <WhyChooseUs/>

    </>
  );
}

export default HireDevContent;