import AgileProcess from "../../../../common-ui/agile-process/agile-process";
import UmbracoContent from "./umbraco-content";
import Metatags from "../../../../../SEO/meta-tags";

function Umbraco() {
  const metaPropsData = {
    title: "Umbraco CMS Development Services - Cybomb Technologies",
    description:
      "Cybomb Technologies provides expert Umbraco CMS development services, including custom solutions, seamless integrations, and scalable content management tailored to your business needs.",
    keyword:
      "Umbraco CMS, Umbraco Development, Headless CMS, Content Management, Umbraco Integration, Custom CMS Solutions, Cybomb Technologies",
    url: "https://www.cybomb.com/services/umbraco",
    image: "https://www.cybomb.com/images/logo-11.png", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <UmbracoContent />
      <AgileProcess />
    </>
  );
}

export default Umbraco;
