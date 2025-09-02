import ZohoCreatorPage from "./zohocreator-content";
import Metatags from "../../../../../SEO/meta-tags";

function ZohoCreatorApp() {
  const metaPropsData = {
    title: "Zoho Creator App Development - Cybomb Technologies | Low-Code Solutions",
    description:
      "Cybomb Technologies provides Zoho Creator app development services, building custom low-code business applications to streamline workflows and enhance productivity.",
    keyword:
      "Zoho Creator Development, Low-Code Applications, Workflow Automation, Business Apps, Custom App Development, Cybomb Technologies",
    url: "https://www.cybomb.com/services/zohocreator-development-service",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Same as provided
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <ZohoCreatorPage />
     
    </>
  );
}

export default ZohoCreatorApp;
