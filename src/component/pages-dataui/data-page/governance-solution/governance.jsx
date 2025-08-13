import GovernanceContent from "./governance-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function GovernanceSolution() {
  const metaPropsData = {
    title: "Governance Solutions - Cybomb Technologies | Compliance & Risk Management",
    description:
      "Cybomb Technologies delivers governance solutions that ensure compliance, mitigate risks, and enhance operational efficiency through structured frameworks and policies.",
    keyword:
      "Governance Solutions, Compliance Management, Risk Management, IT Governance, Policy Implementation, Cybomb Technologies",
    url: "https://www.cybomb.com/services/governance-solution",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <GovernanceContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default GovernanceSolution;
