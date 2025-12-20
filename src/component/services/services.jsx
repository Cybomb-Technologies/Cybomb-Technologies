import ServicesBanner from "./services-banner";
import DesignDevelopmentServices from "./design-development-services";
import EnterpriseServices from "./enterprise-services";
import SupportServices from "./support-services";
import Metatags from "../../SEO/meta-tags";

function Services() {
  const metaPropsData = {
    title:
      "IT services, Tech Support, & Digital Solutions | Cybomb Technologies",
    description:
      "Cybomb Tech provides comprehensive services including web, cloud, software development, e-commerce, AI integration, security & consulting for business solutions.",
    keyword:
      "IT services in chennai, software development, cloud solutions, digital services, tech consulting, managed services",
    url: "https://www.cybomb.com/services",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <ServicesBanner />
      <DesignDevelopmentServices />
      <EnterpriseServices />
      <SupportServices />
      <Metatags metaProps={metaPropsData} />
    </>
  );
}

export default Services;
