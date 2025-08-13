import PowerPlatformContent from "./power-content";
import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../../SEO/meta-tags";

function PowerPlatformApp() {
  const metaPropsData = {
    title: "Power Platform Development Services - Cybomb Technologies | Low-Code Business Solutions",
    description:
      "Cybomb Technologies provides Power Platform development services, creating custom low-code business applications to automate workflows and improve operational efficiency.",
    keyword:
      "Power Platform Development, Low-Code Applications, Business Automation, Custom Business Apps, Microsoft Power Platform, Cybomb Technologies",
    url: "https://www.cybomb.com/services/power-platform-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <PowerPlatformContent />
      <StillNotSure />
    </>
  );
}

export default PowerPlatformApp;
