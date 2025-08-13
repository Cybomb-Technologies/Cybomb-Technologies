import Processingcontent from "./processing-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function ProcessingServices() {
  const metaPropsData = {
    title: "Data Processing Services - Cybomb Technologies | Accurate & Efficient Solutions",
    description:
      "Cybomb Technologies provides advanced data processing services, ensuring accuracy, speed, and efficiency to help businesses manage and utilize data effectively.",
    keyword:
      "Data Processing, Information Processing, Data Transformation, Data Management, Data Services, Cybomb Technologies",
    url: "https://www.cybomb.com/services/processing",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <Processingcontent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default ProcessingServices;
