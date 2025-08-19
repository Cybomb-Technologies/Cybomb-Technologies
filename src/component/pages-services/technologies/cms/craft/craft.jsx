import AgileProcess from "../../../../common-ui/agile-process/agile-process";
import CraftContent from "./craft-content";
import Metatags from "../../../../../SEO/meta-tags";

function Craft() {
  const metaPropsData = {
    title:
      "Craft CMS Development Services - Cybomb Technologies | Custom & Scalable Solutions",
    description:
      "Cybomb Technologies provides professional Craft CMS development services. We deliver fast, scalable, and customized websites with Craft CMS, tailored to meet business goals and user experience needs.",
    keyword:
      "Craft CMS Development, Craft CMS Services, Custom CMS Solutions, Scalable CMS, Cybomb Technologies, Website Development, Content Management System",
    url: "https://www.cybomb.com/services/craft-cms-development",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <CraftContent />
      <AgileProcess />
    </>
  );
}

export default Craft;
