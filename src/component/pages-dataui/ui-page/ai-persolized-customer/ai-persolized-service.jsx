import AIPersonalizedCustomerExperienceContent from "./ai-persolized-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function AiPersolizedServices() {
  const metaPropsData = {
    title: "AI Personalized Customer Experience - Cybomb Technologies | Tailored AI Solutions",
    description:
      "Cybomb Technologies delivers AI-powered personalized customer experience solutions, enhancing engagement, satisfaction, and loyalty through data-driven insights.",
    keyword:
      "AI Customer Experience, Personalized AI Solutions, Customer Engagement, AI Personalization, Data-Driven Marketing, Cybomb Technologies",
    url: "https://www.cybomb.com/services/ai-persolized-customer-experience",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AIPersonalizedCustomerExperienceContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default AiPersolizedServices;
