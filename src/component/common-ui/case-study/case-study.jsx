import CaseBanner from "./case-banner";
import CaseObjective from "./case-objective";
import CaseAudience from "./case-audience";
import CaseChallenges from "./case-challenges";
import CaseFeatures from "./case-features";
import CaseCTA from "./case-cta";

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