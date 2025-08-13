import AIConsultingStrategyContent from "./ai-consulting-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function AiConsultingServices() {
  const metaPropsData = {
    title: "AI Consulting & Strategy Services - Cybomb Technologies | Accelerate AI Adoption",
    description:
      "Cybomb Technologies provides expert AI consulting and strategy services, helping businesses integrate artificial intelligence into their operations for innovation and growth.",
    keyword:
      "AI Consulting, AI Strategy, Artificial Intelligence Services, AI Integration, Business Transformation, Cybomb Technologies",
    url: "https://www.cybomb.com/services/ai-consulting-strategy",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AIConsultingStrategyContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default AiConsultingServices;
