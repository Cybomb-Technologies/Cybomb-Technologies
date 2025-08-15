import AiIntegrationContent from "./ai-integration-content";
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from "../../../../SEO/meta-tags";


export default function AiIntegration() {
  const metaPropsData = {
  title: "AI Integration Services - Cybomb Technologies | Intelligent Automation & AI Solutions",
  description:
    "Cybomb Technologies delivers AI Integration Services to help businesses leverage artificial intelligence for automation, analytics, and smarter decision-making. We integrate AI into applications, workflows, and cloud environments.",
  keyword:
    "AI Integration Services, Artificial Intelligence Solutions, AI Automation, AI Consulting, AI Application Development, AI in Cloud, AI Workflow Automation, Machine Learning Integration, AI Services India",
  url: "https://www.cybomb.com/services/ai-integration",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <AiIntegrationContent />
      <AgileProcess/>
      <StillNotSure/>
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
