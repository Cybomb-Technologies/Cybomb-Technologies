import AIBusinessIntelligenceContent from "./ai-business-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function AiBusinessServices() {
  const metaPropsData = {
    title: "AI Business Intelligence Services - Cybomb Technologies | Data-Driven Insights",
    description:
      "Cybomb Technologies delivers AI-powered business intelligence solutions, enabling organizations to make smarter, data-driven decisions through predictive analytics and advanced insights.",
    keyword:
      "AI Business Intelligence, Predictive Analytics, Data Insights, AI Solutions, Business Analytics, Cybomb Technologies",
    url: "https://www.cybomb.com/services/ai-business-intelligence",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AIBusinessIntelligenceContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default AiBusinessServices;
