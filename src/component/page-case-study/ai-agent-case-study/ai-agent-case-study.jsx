// App.js
import CaseStudy from "../../common-ui/case-study1/case-study"
import { caseStudyProps } from "./ai-agent-case";

function AiAgentCaseStudy() {
  return (
    <div className="App">
      <CaseStudy {...caseStudyProps} />
    </div>
  );
}

export default AiAgentCaseStudy;