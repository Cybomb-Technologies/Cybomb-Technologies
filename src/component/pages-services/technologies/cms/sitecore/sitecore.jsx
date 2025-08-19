import AgileProcess from "../../../../common-ui/agile-process/agile-process";
import SitecoreContent from "./sitecore-content";
import Metatags from "../../../../../SEO/meta-tags";

function Sitecore() {
  const metaPropsData = {
    title:
      "Sitecore Development Services - Cybomb Technologies | CMS Solutions",
    description:
      "Cybomb Technologies provides expert Sitecore development services, including CMS implementation, customization, integration, and support. Enhance your digital experience with scalable and secure Sitecore solutions.",
    keyword:
      "Sitecore Development, Sitecore CMS, Sitecore Integration, Sitecore Customization, Digital Experience Platform, Cybomb Technologies, Enterprise CMS Solutions",
    url: "https://www.cybomb.com/services/sitecore-development",
    image: "https://www.cybomb.com/images/logo-11.png", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <SitecoreContent />
      <AgileProcess />
    </>
  );
}

export default Sitecore;
