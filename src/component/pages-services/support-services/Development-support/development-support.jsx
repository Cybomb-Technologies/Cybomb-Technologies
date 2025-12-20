import DevelopmentSupportContent from "./Development-support-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";

function DevelopmentSupport() {
  const metaPropsData = {
    title: "Best Development Support Services in Chennai - Cybomb Technologies",
    description:
      "Cybomb Tech offers expert development support services for bug fixing and technical assistance. Professional software maintenance and optimization solutions.",
    keyword:
      "development support services, technical assistance, application support, bug fixing, performance optimization, software maintenance",
    url: "https://www.cybomb.com/services/development-support",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <DevelopmentSupportContent />
      <StillNotSure />
    </>
  );
}

export default DevelopmentSupport;
