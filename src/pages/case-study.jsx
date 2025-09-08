import CaseBanner from "../component/case-study/case-banner";
import CaseObjective from "../component/case-study/case-objective";
import CaseAudience from "../component/case-study/case-audience";
import CaseChallenges from "../component/case-study/case-challenges";
import CaseFeatures from "../component/case-study/case-features";
import CaseCTA from "../component/case-study/case-cta";

const CaseStudy = () => {
  return (
    <div className="case-study">
      <CaseBanner />
      <CaseObjective />
      <CaseAudience />
      <CaseChallenges />
      <CaseFeatures />
      <CaseCTA />
    </div>
  );
};

export default CaseStudy;