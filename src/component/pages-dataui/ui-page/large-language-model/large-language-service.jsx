import LLMSolutionsContent from "./large-language-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function LargeLanguageServices() {
  const metaPropsData = {
    title: "Large Language Model (LLM) Solutions - Cybomb Technologies | AI-Powered NLP",
    description:
      "Cybomb Technologies delivers advanced Large Language Model (LLM) solutions, enabling intelligent natural language processing, content generation, and conversational AI for diverse industries.",
    keyword:
      "Large Language Models, LLM Solutions, Natural Language Processing, NLP, AI Chatbots, AI Content Generation, Cybomb Technologies",
    url: "https://www.cybomb.com/services/large-language-model",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <LLMSolutionsContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default LargeLanguageServices;
