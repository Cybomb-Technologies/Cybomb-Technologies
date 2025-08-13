import QualityManagementContent from "./quality-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function QualityServices() {
  const metaPropsData = {
    title: "Quality Management Services - Cybomb Technologies | Excellence & Compliance",
    description:
      "Cybomb Technologies delivers comprehensive quality management services, ensuring compliance with industry standards and driving continuous improvement in processes.",
    keyword:
      "Quality Management, Process Improvement, Compliance Services, Quality Assurance, Quality Control, Cybomb Technologies",
    url: "https://www.cybomb.com/services/quality-management",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <QualityManagementContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default QualityServices;
