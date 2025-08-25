import AgileProcess from "../../../../common-ui/agile-process/agile-process";
import SharePointContent from "./sharepoint-content";
import Metatags from "../../../../../SEO/meta-tags";

function SharePoint() {
  const metaPropsData = {
    title:
      "SharePoint Development Services - Cybomb Technologies | Collaboration & Intranet Solutions",
    description:
      "Cybomb Technologies provides expert SharePoint development services, offering customized intranet portals, document management systems, workflow automation, and enterprise collaboration solutions.",
    keyword:
      "SharePoint Development, SharePoint Intranet, Document Management, Workflow Automation, Enterprise Collaboration, Cybomb Technologies, SharePoint Solutions, Microsoft SharePoint",
    url: "https://www.cybomb.com/services/sharepoint-development",
    image: "https://www.cybomb.com/images/logo-11.png",
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <SharePointContent />
      <AgileProcess />
    </>
  );
}

export default SharePoint;
