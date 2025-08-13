import ArchitectureContent from "./architecture-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import AgileProcess from "../../../common-ui/agile-process/agile-process";
import Metatags from "../../../../SEO/meta-tags";

function ArchitectureData() {
  const metaPropsData = {
    title: "Architecture Services - Cybomb Technologies | Scalable & Efficient System Design",
    description:
      "Cybomb Technologies provides expert architecture services, designing scalable, secure, and high-performance systems tailored to your business needs.",
    keyword:
      "System Architecture, Software Architecture, Enterprise Solutions, Scalable Systems, Secure Architecture, Cybomb Technologies",
    url: "https://www.cybomb.com/services/architecture",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <ArchitectureContent />
      <AgileProcess />
      <StillNotSure />
    </>
  );
}

export default ArchitectureData;
