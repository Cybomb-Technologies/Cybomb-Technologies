import SupportServicesContent from "./support-service-content";
import StillNotSure from "../../../common-ui/stillnotsure/StillNotSure";
import Metatags from "../../../../SEO/meta-tags";

function SupportServices() {
  const metaPropsData = {
    title: "Server Support Services in Chennai - Cybomb Technologies",
    description:
      "Cybomb Tech offers end-to-end support services including technical assistance, customer support, maintenance, and operational help for business efficiency.",
    keyword:
      "server support services in chennai, technical support, business assistance, maintenance services, customer support, operational support",
    url: "https://cybomb.com/services/server-support",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <SupportServicesContent />
      <StillNotSure />
    </>
  );
}

export default SupportServices;
