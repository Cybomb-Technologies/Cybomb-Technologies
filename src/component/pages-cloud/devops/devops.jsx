import DevopsContent from "./devops-content";
import StillNotSure from "../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../SEO/meta-tags";
function DevopsCloud() {
  const metaPropsData = {
    title: "DevOps Consulting Services in Chennai | Cybomb Technologies",
    description:
      "Cybomb Technologies offers expert DevOps cloud services with CI/CD automation, robust infrastructure management and monitoring for efficient software delivery.",
    keyword:
      "devops consulting chennai, ci/cd automation services, cloud infrastructure management, devops implementation, continuous deployment solutions",
    url: "https://www.cybomb.com/Services/devops",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <DevopsContent />
      <StillNotSure />
      <Metatags metaProps={metaPropsData} />
    </>
  );
}

export default DevopsCloud;
