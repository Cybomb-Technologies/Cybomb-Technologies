import CustomAIDevelopmentContent from "./customAi-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function CustomAiServices() {
  const metaPropsData = {
    title: "Custom AI Development Services - Cybomb Technologies | Tailored AI Solutions",
    description:
      "Cybomb Technologies specializes in custom AI development, creating intelligent, tailored solutions to automate processes, enhance decision-making, and drive business innovation.",
    keyword:
      "Custom AI Development, AI Solutions, Machine Learning, AI Automation, AI Applications, Cybomb Technologies",
    url: "https://www.cybomb.com/services/custom-ai-development",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <CustomAIDevelopmentContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default CustomAiServices;
