import AgileProcess from "../../../../common-ui/agile-process/agile-process";
import AemContent from "./aem-content";
import Metatags from "../../../../../SEO/meta-tags";

function Aem() {
  const metaPropsData = {
    title:
      "AEM Development Services - Cybomb Technologies | Adobe Experience Manager Solutions",
    description:
      "Cybomb Technologies provides expert AEM development services, delivering personalized, scalable, and high-performing digital experiences. We specialize in AEM Sites, Assets, and custom integrations.",
    keyword:
      "AEM Development, Adobe Experience Manager, AEM Sites, AEM Assets, AEM Integration, Digital Experience Platform, Cybomb Technologies",
    url: "https://www.cybomb.com/services/aem-development",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <AemContent />
      <AgileProcess />
    </>
  );
}

export default Aem;
