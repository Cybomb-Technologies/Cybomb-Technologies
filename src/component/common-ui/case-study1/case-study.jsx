// CaseStudy.jsx
import CaseBanner from "./case-banner";
import CaseObjective from "./case-objective";
import CaseAudience from "./case-audience";
import CaseChallenges from "./case-challenges";
import CaseFeatures from "./case-features";
import CaseCTA from "./case-cta";
import styles from "./case-study.module.css";

const CaseStudy = ({ 
  bannerData, 
  objectiveData, 
  audienceData, 
  challengesData, 
  featuresData, 
  ctaData 
}) => {
  return (
    <div className={styles.caseStudy}>
      <CaseBanner {...bannerData} />
      <CaseObjective {...objectiveData} />
      <CaseAudience data={audienceData} />
      <CaseChallenges {...challengesData} />
      <CaseFeatures data={featuresData} />
      <CaseCTA {...ctaData} />
    </div>
  );
};

export default CaseStudy;