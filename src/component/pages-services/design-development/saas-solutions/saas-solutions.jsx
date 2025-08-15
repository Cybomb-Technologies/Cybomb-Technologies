import SaaSSolutionsContent from "./saas-solutions-content";
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from "../../../../SEO/meta-tags";


export default function SaaSSolutions() {
  const metaPropsData = {
  title: "SaaS Solutions - Cybomb Technologies | Scalable & Secure Software-as-a-Service",
  description:
    "Cybomb Technologies delivers end-to-end SaaS Solutions, from design and development to deployment and maintenance. We build secure, scalable, and user-friendly cloud-based applications for businesses worldwide.",
  keyword:
    "SaaS Solutions, Software as a Service Development, SaaS Application Development, Cloud SaaS Solutions, Multi-Tenant Applications, SaaS Product Design, SaaS Deployment, SaaS Services India",
  url: "https://www.cybomb.com/services/saas-solutions",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <SaaSSolutionsContent />
      <AgileProcess/>
      <StillNotSure/>
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}
